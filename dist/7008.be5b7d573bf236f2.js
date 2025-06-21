(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[7008],{

/***/ 75166:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 961);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 89909);
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goals/goals.component */ 1801);
/* harmony import */ var _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals/dashboard/dashboard.component */ 22024);
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departments/departments.component */ 21550);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ai/ai.component */ 36718);
/* harmony import */ var _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goal-management/goal-management.component */ 27453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 65879);










let AdminRoutingModule = /*#__PURE__*/(() => {
  class AdminRoutingModule {
    static #_ = this.ɵfac = function AdminRoutingModule_Factory(t) {
      return new (t || AdminRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
      }, {
        path: 'goals',
        component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_2__.GoalsComponent
      }, {
        path: 'goals/dashboard',
        component: _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.GoalDashboardComponent
      },
      // { path: 'goals/objectives', component: ObjectivesComponent },
      // { path: 'goals/calendar', component: CalendarComponent },
      // { path: 'goals/reporting', component: ReportingComponent },
      {
        path: 'departments',
        component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_4__.DepartmentsComponent
      }, {
        path: 'goal-management',
        component: _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_6__.GoalManagementComponent
      },
      // { path: 'logs', component: LogsComponent },
      {
        path: 'ai',
        component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_5__.AiComponent
      }, {
        path: '**',
        redirectTo: '/dashboard'
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
  return AdminRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 45256:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo/service/product.service */ 20981);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);



let AdminComponent = /*#__PURE__*/(() => {
  class AdminComponent {
    constructor(productService, layoutService) {
      this.productService = productService;
      this.layoutService = layoutService;
    }
    ngOnInit() {}
    ngOnDestroy() {}
    static #_ = this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 0,
      vars: 0,
      template: function AdminComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return AdminComponent;
})();

/***/ }),

/***/ 37008:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 45256);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ 75166);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 961);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ 89909);
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals/goals.component */ 1801);
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/departments.component */ 21550);
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logs/logs.component */ 38346);
/* harmony import */ var _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goals/dashboard/dashboard.component */ 22024);
/* harmony import */ var _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goals/objectives/objectives.component */ 66851);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ai/ai.component */ 36718);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-markdown */ 43490);
/* harmony import */ var _goals_reporting_reporting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goals/reporting/reporting.component */ 55070);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs */ 59138);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-typescript.min.js */ 31457);
/* harmony import */ var prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers.js */ 96758);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/plugins/line-highlight/prism-line-highlight.js */ 92927);
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_highlight_prism_line_highlight_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./goal-management/goal-management.component */ 27453);
/* harmony import */ var _goal_management_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./goal-management/add-goal/add-goal.component */ 77193);
/* harmony import */ var _goal_management_goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goal-management/goal-table/goal-table.component */ 69037);
/* harmony import */ var _goals_add_goal_adding_goal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./goals/add-goal/adding-goal.component */ 35993);
/* harmony import */ var _goals_print_table_print_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./goals/print-table/print-table.component */ 69990);
/* harmony import */ var _goals_add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./goals/add-objective/add-objective.component */ 31172);
/* harmony import */ var _goals_update_goal_update_goal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./goals/update-goal/update-goal.component */ 89763);
/* harmony import */ var _goals_update_objective_update_objective_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./goals/update-objective/update-objective.component */ 93764);
/* harmony import */ var _goals_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./goals/add-files/add-files.component */ 89021);
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./users/add-user/add-user.component */ 92535);
/* harmony import */ var _users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./users/edit-user/edit-user.component */ 57669);
/* harmony import */ var _goals_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./goals/remarks/remarks.component */ 16417);
/* harmony import */ var _goals_print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./goals/print-qom/print-qom.component */ 2012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 65879);

































let AdminModule = /*#__PURE__*/(() => {
  class AdminModule {
    static #_ = this.ɵfac = function AdminModule_Factory(t) {
      return new (t || AdminModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
      providers: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_30__.FileUpload],
      imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_31__.MarkdownModule.forRoot()]
    });
  }
  return AdminModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent, _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__.GoalsComponent, _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__.DepartmentsComponent, _logs_logs_component__WEBPACK_IMPORTED_MODULE_6__.LogsComponent, _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.GoalDashboardComponent, _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_8__.ObjectivesComponent, _ai_ai_component__WEBPACK_IMPORTED_MODULE_10__.AiComponent, _goals_reporting_reporting_component__WEBPACK_IMPORTED_MODULE_11__.ReportingComponent, _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_16__.GoalManagementComponent, _goal_management_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_17__.AddGoalComponent, _goals_add_goal_adding_goal_component__WEBPACK_IMPORTED_MODULE_19__.AddingGoalComponent, _goal_management_goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_18__.GoalTableComponent, _goals_print_table_print_table_component__WEBPACK_IMPORTED_MODULE_20__.PrintTableComponent, _goals_add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_21__.AddObjectiveComponent, _goals_update_goal_update_goal_component__WEBPACK_IMPORTED_MODULE_22__.UpdateGoalComponent, _goals_update_objective_update_objective_component__WEBPACK_IMPORTED_MODULE_23__.UpdateObjectiveComponent, _goals_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_24__.AddFilesComponent, _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_25__.AddUserComponent, _users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_26__.EditUserComponent, _goals_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_27__.RemarksComponent, _goals_print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_28__.PrintQomComponent],
    imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_31__.MarkdownModule]
  });
})();

/***/ }),

/***/ 36718:
/*!******************************************!*\
  !*** ./src/app/admin/ai/ai.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiComponent: () => (/* binding */ AiComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ 3491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_ai_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/ai.service */ 60949);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 43490);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/dataFilter */ 42162);










const _c0 = ["messageInput"];
const _c1 = ["messagesContent"];
function AiComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c2 = (a0, a1, a2, a3) => ({
  "message-personal": a0,
  "message-ai": a1,
  loading: a2,
  "greeting-message": a3
});
function AiComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "markdown", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AiComponent_div_10_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](7, _c2, message_r3.isPersonal, !message_r3.isPersonal, message_r3.isLoading, !message_r3.isPersonal && message_r3.text.includes("Chmsu QOAP")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, message_r3.text)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", message_r3.isLoading);
  }
}
let AiComponent = /*#__PURE__*/(() => {
  class AiComponent {
    constructor(chatService, auth) {
      this.chatService = chatService;
      this.auth = auth;
      this.messages = [];
      this.newMessageText = '';
      this.getAisub = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      this.initialGreetingShown = false;
      this.userId = this.auth.getTokenUserID();
    }
    ngOnInit() {
      this.getAllMessages();
      this.cities = [{
        name: 'New Chat',
        code: 'newChat'
      }, {
        name: 'Rome',
        code: 'RM'
      }, {
        name: 'London',
        code: 'LDN'
      }, {
        name: 'Istanbul',
        code: 'IST'
      }, {
        name: 'Paris',
        code: 'PRS'
      }];
    }
    showInitialGreeting() {
      if (!this.initialGreetingShown) {
        const greetingMessage = {
          text: "Hey there! 👋 I'm your CHMSU QOAP Assistant, here to help you reach for the stars! ✨ Let's set some awesome goals together. 🚀",
          isPersonal: false,
          isLoading: false
        };
        this.messages.push(greetingMessage);
        this.initialGreetingShown = true; // Mark the greeting as shown
      }
    }

    getAllMessages() {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.chatService.getRoute('get', 'ai', `get-all-chat/${_this.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.getAisub)).subscribe(data => {
          data.chats.map(e => {
            _this.messages.push({
              text: e.prompt,
              isPersonal: true,
              isLoading: false,
              mark: (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(e.prompt)
            });
            _this.messages.push({
              text: e.responseAi,
              isPersonal: false,
              isLoading: false,
              mark: (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(e.responseAi)
            });
          });
          _this.scrollToBottom();
          _this.showInitialGreeting();
        });
        _this.scrollToBottom();
      })();
    }
    sendMessage() {
      let sendMessage = '';
      if (this.newMessageText.trim() === '') return;
      this.messages.push({
        text: this.newMessageText,
        isPersonal: true
      });
      // /transfer the message and clear it
      sendMessage = this.newMessageText;
      this.newMessageText = null;
      // send a dummy message to the chat to load the page
      this.messages.push({
        text: '',
        isPersonal: false,
        isLoading: true
      });
      this.chatService.getRoute('post', 'ai', 'chat-with-gemini', {
        message: sendMessage,
        newChat: this.newChatFlag,
        userId: this.auth.getTokenUserID()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.getAisub)).subscribe(data => {
        // removve the dummy data
        this.messages.pop();
        // Add new message to the messages array (for Angular)
        this.messages.push({
          text: data.response,
          isPersonal: false,
          isLoading: false
        });
        // Clear the input box
        sendMessage = '';
        this.newChatFlag = false;
        // Ensure the latest message is visible (scrolling)
        this.scrollToBottom();
      });
    }
    scrollToBottom() {
      if (this.messagesContent?.nativeElement) {
        this.messagesContent.nativeElement.scrollTop = this.messagesContent.nativeElement.scrollHeight;
      }
    }
    ngAfterViewChecked() {
      this.scrollToBottom();
    }
    ngOnDestroy() {
      this.getAisub.unsubscribe();
    }
    onEnter(event) {
      this.sendMessage();
    }
    onCityChange(event) {
      if (event.value.code === 'newChat') {
        // Check if the selected option is "New Chat"
        this.newChat();
      } else {
        // Handle other city selections if needed
        this.selectedCity = event.value;
      }
    }
    newChat() {
      this.messages = [];
      this.newChatFlag = true;
      this.ngAfterViewChecked();
      this.scrollToBottom();
    }
    static #_ = this.ɵfac = function AiComponent_Factory(t) {
      return new (t || AiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_ai_service__WEBPACK_IMPORTED_MODULE_2__.AiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AiComponent,
      selectors: [["app-ai"]],
      viewQuery: function AiComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.messagesContent = _t.first);
        }
      },
      decls: 16,
      vars: 2,
      consts: [[1, "col-12"], [1, "card"], [1, "text-xs", "font-italic", "bg-[#dbdbdb]"], [1, "chat"], [1, "chat-title"], [1, "pi", "pi-google"], [1, "messages"], ["messagesContent", ""], [1, "messages-content"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message-box", 3, "keydown.enter"], ["type", "text", "placeholder", "Type message...", 1, "message-input", 3, "ngModel", "ngModelChange"], ["messageInput", ""], [1, "message-submit", 3, "click"], [1, "message", 3, "ngClass"], [3, "data"], [1, "my-1"], ["class", "loading", 4, "ngIf"], [1, "loading"]],
      template: function AiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Note: Dont post sensitive data");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6, 7)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AiComponent_div_10_Template, 6, 12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function AiComponent_Template_div_keydown_enter_11_listener($event) {
            return ctx.onEnter($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "textarea", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AiComponent_Template_textarea_ngModelChange_12_listener($event) {
            return ctx.newMessageText = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AiComponent_Template_button_click_14_listener() {
            return ctx.sendMessage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Send ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.messages);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newMessageText);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_4__.MarkdownPipe],
      styles: ["\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  line-height: 1.3;\n  overflow: hidden;\n}\n\n.layout-main-container[_ngcontent-%COMP%] {\n  max-height: 100dvh !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-height: calc(100dvh - 180px);\n  overflow: hidden;\n}\n\n\n\n\n\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100dvh - 252px);\n  z-index: 2;\n  overflow: hidden;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n\n\n\n\n.chat-title[_ngcontent-%COMP%] {\n  flex: 0 1 45px;\n  position: relative;\n  z-index: 2;\n  background: #dbdbdb;\n  color: #444444;\n  text-transform: uppercase;\n  text-align: left;\n  padding: 20px 20px;\n}\n\n\n\n\n\n.messages[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  color: rgba(255, 255, 255, 0.5);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n.messages[_ngcontent-%COMP%]   .messages-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 101%;\n  width: 100%;\n  padding: 10px;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  clear: both;\n  float: left;\n  padding: 10px 15px 7.5px 15px;\n  border-radius: 10px 10px 10px 0;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  font-size: 14px;\n  line-height: 1.4;\n  margin-left: 20px;\n  position: relative;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n.messages[_ngcontent-%COMP%]   .message.timestamp[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -6px;\n  border-top: 6px solid rgba(0, 0, 0, 0.3);\n  left: 0;\n  border-right: 7px solid transparent;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: -15px;\n  left: -35px;\n  border-radius: 30px;\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  border: 2px solid rgba(255, 255, 255, 0.24);\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.messages[_ngcontent-%COMP%]   .message.message-personal[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n  border-radius: 10px 10px 0 10px;\n}\n.messages[_ngcontent-%COMP%]   .message.message-personal[_ngcontent-%COMP%]::before {\n  left: auto;\n  right: 0;\n  border-right: none;\n  border-left: 5px solid transparent;\n  border-top: 4px solid #9ff4ff;\n  bottom: -4px;\n}\n.messages[_ngcontent-%COMP%]   .message.message-ai[_ngcontent-%COMP%] {\n  float: left;\n  color: #444444;\n  text-align: left;\n  border-radius: 10px 10px 10px 0;\n}\n.messages[_ngcontent-%COMP%]   .message.message-ai[_ngcontent-%COMP%]::before {\n  right: auto;\n  left: 0;\n  border-left: none;\n  border-right: 5px solid transparent;\n  border-top: 4px solid #f5f5f5;\n  bottom: -4px;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 30px;\n}\n.messages[_ngcontent-%COMP%]   .message.new[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transform-origin: 0 0;\n  animation: _ngcontent-%COMP%_bounce 500ms linear both;\n}\n.messages[_ngcontent-%COMP%]   .message-personal[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]   .message-ai[_ngcontent-%COMP%] {\n  float: none; \n\n  margin-left: 0; \n\n}\n.messages[_ngcontent-%COMP%]   .message-personal[_ngcontent-%COMP%] {\n  background-color: #9ff4ff; \n\n  color: #006064; \n\n  align-self: flex-end;\n  text-align: left;\n}\n.messages[_ngcontent-%COMP%]   .message-ai[_ngcontent-%COMP%] {\n  background-color: #f5f5f5; \n\n  color: #212121; \n\n  align-self: flex-start;\n  text-align: left;\n}\n.messages[_ngcontent-%COMP%]   .message.new[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 500ms linear both; \n\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  border: none;\n  animation-delay: 0.15s;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0;\n  width: 20px;\n  height: 10px;\n  position: relative;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  margin-left: -7px;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  margin-left: 7px;\n  animation-delay: 0.3s;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messages-content[_ngcontent-%COMP%] {\n  display: flex; \n\n  flex-direction: column; \n\n}\n\n\n\n\n\n.message-box[_ngcontent-%COMP%] {\n  flex: 0 1 40px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n  position: relative;\n  height: 70px;\n  display: flex;\n  gap: 10px;\n}\n.message-box[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50px;\n  border: none;\n  outline: none !important;\n  resize: none;\n  color: #444444;\n  font-size: 14px;\n  height: 100%;\n  margin: 0;\n  display: flex;\n  padding: 15px 0px 0px 20px;\n  width: 100%;\n}\n.message-box[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus:-webkit-placeholder {\n  color: transparent;\n}\n.message-box[_ngcontent-%COMP%]   .message-submit[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #fff;\n  border: none;\n  background-color: #248a52;\n  font-size: 14px;\n  text-transform: uppercase;\n  line-height: 1;\n  padding: 0px 20px;\n  border-radius: 10px;\n  outline: none !important;\n  transition: background 0.2s ease;\n}\n.message-box[_ngcontent-%COMP%]   .message-submit[_ngcontent-%COMP%]:hover {\n  background: #1d7745;\n}\n\n\n\n\n\n.mCSB_scrollTools[_ngcontent-%COMP%] {\n  margin: 1px -3px 1px 0;\n  opacity: 0;\n}\n\n.mCSB_inside[_ngcontent-%COMP%]    > .mCSB_container[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  padding: 0 10px;\n}\n\n.mCSB_scrollTools[_ngcontent-%COMP%]   .mCSB_dragger[_ngcontent-%COMP%]   .mCSB_dragger_bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_bounce {\n  0% {\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n@keyframes _ngcontent-%COMP%_ball {\n  from {\n    transform: translateY(0) scaleY(0.8);\n  }\n  to {\n    transform: translateY(-10px);\n  }\n}\n.variable-binding[_ngcontent-%COMP%], .variable-textarea[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.variable-binding[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n\n\n\n.greeting-message[_ngcontent-%COMP%] {\n  \n\n  background-color: #f0f8ff; \n\n  padding: 10px;\n  border-radius: 5px;\n}"]
    });
  }
  return AiComponent;
})();

/***/ }),

/***/ 961:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 14844);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/demo/service/branch.service */ 98360);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/skeleton */ 14227);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/dataFilter */ 42162);
/* harmony import */ var _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utlis/general.pipes */ 6701);
























function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r0.users == null ? null : ctx_r0.users.document) || "0", " ");
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 34);
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " HOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " DIR");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " VP");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r2.users == null ? null : ctx_r2.users.office_head) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" | ", (ctx_r2.users == null ? null : ctx_r2.users.director) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" | ", (ctx_r2.users == null ? null : ctx_r2.users.vice_president) || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" | ", (ctx_r2.users == null ? null : ctx_r2.users.admin) || 0, " ");
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 37);
  }
}
function DashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r4.deparmentData == null ? null : ctx_r4.deparmentData.departmentCount) || "0", " ");
  }
}
function DashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 34);
  }
}
function DashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Active: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Inactive: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r6.deparmentData == null ? null : ctx_r6.deparmentData.departmentActive) || 0, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r6.deparmentData == null ? null : ctx_r6.deparmentData.departmentInactive) || 0, " ");
  }
}
function DashboardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 37);
  }
}
function DashboardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r8.objectivesData == null ? null : ctx_r8.objectivesData.objectivesCount) || "0", " ");
  }
}
function DashboardComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 34);
  }
}
function DashboardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Completed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "In-Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r10.objectivesData == null ? null : ctx_r10.objectivesData.objectiveCompleted) || 0, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r10.objectivesData == null ? null : ctx_r10.objectivesData.objectiveUncompleted) || 0, " ");
  }
}
function DashboardComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 37);
  }
}
function DashboardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r12.NewGoals.goalCount || "0", " ");
  }
}
function DashboardComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 34);
  }
}
function DashboardComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Active : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Deleted : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r14.NewGoals == null ? null : ctx_r14.NewGoals.goalCount) || 0, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r14.NewGoals == null ? null : ctx_r14.NewGoals.goalDeletedCount) || 0, " ");
  }
}
function DashboardComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 37);
  }
}
function DashboardComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "p-chart", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("responsive", true)("data", ctx_r16.pieCharts)("options", ctx_r16.PieChartOptions);
  }
}
function DashboardComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\uD83D\uDE34");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "p-chart", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("responsive", true)("data", ctx_r19.pieChartsBudgetUsed)("options", ctx_r19.PieChartBudgetUsedOptions);
  }
}
function DashboardComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\uD83D\uDE34");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_p_table_71_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_p_table_71_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DashboardComponent_p_table_71_ng_template_2_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32);
      const goal_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.selectedGoal(goal_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, goal_r30.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 6, goal_r30.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 8, goal_r30.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 10, goal_r30.budget));
  }
}
function DashboardComponent_p_table_71_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Goals found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_p_table_71_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Loading Goals data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_p_table_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DashboardComponent_p_table_71_ng_template_1_Template, 9, 0, "ng-template", 43)(2, DashboardComponent_p_table_71_ng_template_2_Template, 13, 12, "ng-template", 44)(3, DashboardComponent_p_table_71_ng_template_3_Template, 3, 0, "ng-template", 45)(4, DashboardComponent_p_table_71_ng_template_4_Template, 3, 0, "ng-template", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r22.goals)("loading", ctx_r22.loading);
  }
}
function DashboardComponent_p_skeleton_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 37);
  }
}
function DashboardComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "hr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 53)(10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Total Goal : ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, ctx_r24.totalBudget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Total Objective Goal : ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 7, ctx_r24.knobValue), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Complete : ", ctx_r24.completedGoals, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" In Progress :", ctx_r24.inProgressGoals, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Total Objectives: ", ctx_r24.totalObjectivesCount, " ");
  }
}
function DashboardComponent_Conditional_78_Conditional_0_p_skeleton_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 61);
  }
}
function DashboardComponent_Conditional_78_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DashboardComponent_Conditional_78_Conditional_0_p_skeleton_2_Template, 1, 0, "p-skeleton", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r33.loading);
  }
}
const _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_78_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Objectives Yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_Conditional_78_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-chart", 71);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r37.pieData)("options", ctx_r37.pieOptions);
  }
}
function DashboardComponent_Conditional_78_Conditional_1_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 76);
  }
}
function DashboardComponent_Conditional_78_Conditional_1_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 77);
  }
}
function DashboardComponent_Conditional_78_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "firstFourWords");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u00A0 - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "abbreviation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " \u00A0 - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " \u00A0 - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, DashboardComponent_Conditional_78_Conditional_1_For_18_Conditional_14_Template, 1, 0, "i", 74)(15, DashboardComponent_Conditional_78_Conditional_1_For_18_Conditional_15_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "hr", 75);
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, item_r39.strategic_objective)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u20B1 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 8, item_r39.budget, "number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](12, 11, item_r39.date_added, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](14, item_r39.completed ? 14 : 15);
  }
}
function DashboardComponent_Conditional_78_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DashboardComponent_Conditional_78_Conditional_1_Conditional_2_Template, 5, 0, "div", 62)(3, DashboardComponent_Conditional_78_Conditional_1_Conditional_3_Template, 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "hr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 65)(12, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "hr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ul", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](17, DashboardComponent_Conditional_78_Conditional_1_For_18_Template, 17, 14, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](2, !ctx_r34.pieDataBool ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, ctx_r34.selectedGoalData == null ? null : ctx_r34.selectedGoalData.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 6, ctx_r34.selectedGoalData == null ? null : ctx_r34.selectedGoalData.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 8, ctx_r34.selectedGoalData == null ? null : ctx_r34.selectedGoalData.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r34.objectivesSideData);
  }
}
function DashboardComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, DashboardComponent_Conditional_78_Conditional_0_Template, 3, 1, "div", 59)(1, DashboardComponent_Conditional_78_Conditional_1_Template, 19, 10);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](0, ctx_r25.loading && !ctx_r25.pieDataBool ? 0 : 1);
  }
}
const _c1 = () => ({
  width: "2.5rem",
  height: "2.5rem"
});
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(userService, goalService, dept, obj, branch, messageService, changeDetectorRef) {
      this.userService = userService;
      this.goalService = goalService;
      this.dept = dept;
      this.obj = obj;
      this.branch = branch;
      this.messageService = messageService;
      this.changeDetectorRef = changeDetectorRef;
      this.getDashboardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
      this.loading = false;
      this.countries = [];
      this.selectedAgoal = false;
      this.pieDataBool = false;
      this.totalBudget = 0;
      this.totalSubBudget = 0;
      this.remainingBudget = 0;
      this.completionPercentage = 0;
      this.completedGoals = 0;
      this.inProgressGoals = 0;
      this.barChartType = 'line';
      // tabview and panel
      this.selectedIndex = 0;
      this.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      // Object.assign(this, { multi });
    }

    ngOnInit() {
      this.getAllusers();
      this.getAllGoals();
      this.getAllDept();
      this.getAllObjectives();
      this.getAllObjectivesWithObjectives();
      this.getAllObjectivesWithObjectivesForCharts();
      this.getAllCampusForDashboard();
      // this.thisBarCharts();
    }

    processDashboardData(data) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // total of objectives
        const objectives = data.goals?.reduce((sum, goal) => sum + (goal.objectivesDetails?.length || 0), 0) || 0;
        _this.totalBudget = data.goals?.reduce((sum, goal) => sum + (goal.budget || 0), 0) || 0;
        _this.totalSubBudget = (data.goals ?? []).reduce((sum, goal) => {
          return sum + (goal.objectivesDetails?.reduce((subSum, obj) => subSum + (obj.budget || 0), 0) ?? 0);
        }, 0);
        // Calculate remaining budget
        _this.knobValue = _this.remainingBudget = _this.totalBudget - (_this.totalSubBudget || 0);
        // Filter goals with objectives
        const goalsWithObjectives = (data.goals ?? []).filter(goal => goal.objectivesDetails?.length > 0);
        // Calculate completed, in-progress, and not-started goals
        const {
          completedGoals,
          inProgressGoals
        } = goalsWithObjectives.reduce((acc, goal) => {
          const objectives = goal.objectivesDetails || [];
          objectives.forEach(obj => {
            if (obj.complete) {
              acc.completedGoals++;
            } else {
              acc.inProgressGoals++;
            }
          });
          return acc;
        }, {
          completedGoals: 0,
          inProgressGoals: 0
        });
        // Assign calculated values
        _this.completedGoals = completedGoals;
        _this.inProgressGoals = inProgressGoals;
        // Calculate totalObjectivesCount by subtracting completed and in-progress goals and no negative values
        _this.totalObjectivesCount = Math.abs(_this.completedGoals + _this.inProgressGoals);
        // Correctly calculate completion percentage
        _this.completionPercentage = goalsWithObjectives.length > 0 ? _this.completedGoals / goalsWithObjectives.length * 100 : 0;
      })();
    }
    getAllCampusForDashboard() {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.branch.getCampus().then(campus => {
          _this2.campusList = campus;
        });
      })();
    }
    getAllusers() {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this3.userService.fetch('get', 'users', 'getAllUsersForDashboard').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this3.getDashboardSubscription)).subscribe(data => {
          _this3.users = data.data[0];
        });
      })();
    }
    getAllGoals() {
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this4.goalService.fetch('get', 'goals', 'getGoalsForDashboard').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this4.getDashboardSubscription)).subscribe(data => {
          _this4.NewGoals = data.data[0];
        });
      })();
    }
    getAllDept() {
      var _this5 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this5.dept.getRoute('get', 'department', 'getAllDepartmentForDashboard').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this5.getDashboardSubscription)).subscribe(data => {
          _this5.deparmentData = data.data[0];
        });
      })();
    }
    getAllObjectives() {
      var _this6 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this6.obj.fetch('get', 'objectives', `getAllObjectivesForDashboard`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this6.getDashboardSubscription)).subscribe(data => {
          _this6.objectivesData = data.data[0] || [];
        });
      })();
    }
    getAllObjectivesWithObjectives(campus) {
      var _this7 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this7.loading = true;
        _this7.goalService.fetch('get', 'goals', `getAllObjectivesWithObjectivesForDashboard/${campus}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this7.getDashboardSubscription)).subscribe({
          next: data => {
            _this7.goals = data.goals || [];
            // this.goalBarChartList = data.goalDropdown || [];
            // this.pieChart(data.goals || this.goals || []);
            // this.thisBarCharts(data.goals);
            _this7.processDashboardData(data);
            _this7.loading = false;
          },
          error: error => {
            console.error('Error fetching data:', error);
            _this7.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to fetch goals'
            }); // Display error message
            _this7.loading = false;
          }
        });
      })();
    }
    getAllObjectivesWithObjectivesForCharts(campus) {
      var _this8 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this8.loading = true;
        _this8.goalService.fetch('get', 'goals', `getAllObjectivesWithObjectivesForCharts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this8.getDashboardSubscription)).subscribe({
          next: data => {
            _this8.goals = data?.goals || [];
            _this8.goalBarChartList = data?.goalDropdown || [];
            _this8.pieChart(data?.goals || _this8.goals || []);
            // this.thisBarCharts(data.goals);
            _this8.processDashboardData(data);
            _this8.loading = false;
          },
          error: error => {
            console.error('Error fetching data:', error);
            _this8.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to fetch goals'
            }); // Display error message
            _this8.loading = false;
          }
        });
      })();
    }
    getAllDepartmentForDashboard() {
      var _this9 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this9.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(_this9.getDashboardSubscription)).subscribe(data => {
          _this9.departmentList = data.data[0];
        });
      })();
    }
    showDetails(goal) {}
    selectedGoal(goal) {
      this.selectedAgoal = true;
      this.selectedGoalData = goal;
      if (goal) {
        this.obj.fetch('get', 'objectives', `getAllObjectivesForDashboardPie/${goal.id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.getDashboardSubscription)).subscribe(data => {
          let {
            objectivesData
          } = data.data;
          this.objectivesSideData = objectivesData;
          this.pieDataBool = objectivesData.length >= 1 ? true : false;
          this.initCharts(objectivesData);
          this.loading = false;
        });
      }
    }
    onChangeCampus(event = '') {
      this.loading = true;
      this.selectedAgoal = false;
      this.goals = [];
      this.totalBudget = 0;
      this.totalSubBudget = 0;
      this.remainingBudget = 0;
      this.completionPercentage = 0;
      this.completedGoals = 0;
      this.inProgressGoals = 0;
      this.totalObjectivesCount = 0;
      this.knobValue = 0;
      this.getAllObjectivesWithObjectives(event?.value?.name ?? '');
    }
    onClearCampus() {
      this.loading = true;
      this.selectedAgoal = false;
      this.goals = [];
      this.getAllObjectivesWithObjectives();
    }
    onClearDepartment() {
      this.barCharts = [];
      this.selectedBarDepartmentDropdown = undefined;
      this.barChartType = 'line';
      // this.thisBarCharts(this.goals);
    }

    initCharts(data) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.pieData = {
        labels: data.map(e => e.functional_objective),
        datasets: [{
          data: data.map(e => 1),
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
    }
    // Create Pie Chart
    createPieChart() {
      if (this.objectivesSideData && this.objectivesSideData.length > 0) {
        const completed = this.objectivesSideData.filter(obj => obj.complete).length;
        const notCompleted = this.objectivesSideData.length - completed;
        this.pieData = {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
            data: [completed, notCompleted],
            backgroundColor: ['#42A5F5', '#FFA726'],
            hoverBackgroundColor: ['#64B5F6', '#FFB74D']
          }]
        };
        this.pieDataBool = true;
      } else {
        this.pieDataBool = false;
      }
    }
    ngOnDestroy() {
      this.getDashboardSubscription.next();
      this.getDashboardSubscription.complete();
    }
    // tab view and panel
    onChange($event) {
      this.selectedIndex = $event.index;
    }
    getSelectedHeader() {
      alert(this.tabView.tabs[this.selectedIndex].header);
    }
    pieChart(data = []) {
      var _this10 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log({
          pieChart: data
        });
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const labels = data.map(goal => goal.department);
        const labelsWithDepartment = data.flatMap(goal => goal.objectivesDetails?.map(obj => `${goal.department}**${obj.strategic_objective}`) || []);
        const budgets = data.map(goal => goal.objectivesDetails?.reduce((sum, obj) => sum + (obj.budget || 0), 0) || 0);
        const budgetsUsed = data.map(goal => goal.budgetMinusAllObjectiveBudget);
        const objectivesBudgets = data.flatMap(goal => goal.objectivesDetails?.map(obj => obj.budget || 0) || []);
        const budgetsRemaining = data.map(goal => goal.remainingBudget);
        const percentageCompletion = data.map(goal => goal.completion_percentage);
        // const abbreviateNumber = (value: number) => {
        //     if (value >= 1_000_000) {
        //         return (value / 1_000_000).toFixed(1) + 'M';
        //     } else if (value >= 1_000) {
        //         return (value / 1_000).toFixed(1) + 'k';
        //     } else {
        //         return value?.toString();
        //     }
        // };
        // const abbreviatePercentage = (value: number) => {
        //     return value + '%';
        // };
        _this10.pieCharts = {
          labels: labels,
          datasets: [{
            data: budgets,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }]
        };
        _this10.PieChartOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(value),
              color: textColor,
              font: {
                size: 15
              }
            },
            tooltip: {
              callbacks: {
                label: context => {
                  console.log({
                    context: context.label
                  });
                  const label = context.label.split(' ').map(word => (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__.customTitleCase)(word)).join('') || '';
                  const value = context.raw;
                  return `${label}: ${value}`;
                }
              }
              // callbacks: {
              //     label: (context: any) => {
              //         const label = context.label;
              //         const value = context.raw;
              //         return `${label}: ${value}`;
              //     },
              // },
            }
          },

          maintainAspectRatio: true
        };
        //copy the original labels with department
        const originalLabelsWithDepartment = [...labelsWithDepartment];
        _this10.pieChartsBudgetUsed = {
          labels: labelsWithDepartment.map(label => label.split('**')[0]),
          datasets: [{
            data: objectivesBudgets,
            backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--bluegray-500'), documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--bluegray-400'), documentStyle.getPropertyValue('--red-400')]
          }]
        };
        _this10.PieChartBudgetUsedOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(value),
              color: textColor,
              font: {
                size: 15
              }
            }
          },
          maintainAspectRatio: true
        };
        _this10.PieChartBudgetUsedOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(value),
              color: textColor,
              font: {
                size: 15
              }
            },
            tooltip: {
              callbacks: {
                label: context => {
                  const originalLabel = originalLabelsWithDepartment[context.dataIndex];
                  const label = originalLabel.split('**')[1];
                  const value = context.raw;
                  return `${label}: ${value}`;
                }
              }
            }
          },
          maintainAspectRatio: true
        };
        _this10.pieChartsBudgetRemaining = {
          labels: labels,
          datasets: [{
            data: budgetsRemaining,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--green-400')]
          }]
        };
        _this10.pieChartsBudgetRemainingOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(value),
              color: textColor,
              font: {
                size: 15
              }
            },
            tooltip: {
              callbacks: {
                label: context => {
                  const label = context.label.split(' ').map(word => (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__.customTitleCase)(word)).join('') || '';
                  const value = context.raw;
                  return `${label}: ${value}`;
                }
              }
            }
          },
          maintainAspectRatio: true
        };
        _this10.pieChartsPercentage = {
          labels: labels,
          datasets: [{
            data: percentageCompletion,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--green-400')]
          }]
        };
        _this10.pieChartsPercentageOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviatePercentage)(value),
              color: textColor,
              font: {
                size: 15
              }
            },
            tooltip: {
              callbacks: {
                label: context => {
                  const label = context.label.split(' ').map(word => (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__.customTitleCase)(word)).join('') || '';
                  const value = context.raw;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          maintainAspectRatio: true
        };
        // goal charts
        const goalsData = data.map(goal => {
          const totalObjectives = goal.objectivesDetails.length;
          const completedObjectives = goal.objectivesDetails.filter(obj => obj.complete).length;
          const pendingObjectives = totalObjectives - completedObjectives;
          return {
            goal: goal.goals,
            totalObjectives,
            completedObjectives,
            pendingObjectives
          };
        });
        const totalObjectives = goalsData.map(g => g.totalObjectives);
        const completedObjectives = goalsData.map(g => g.completedObjectives);
        const pendingObjectivesObjectives = goalsData.map(g => g.pendingObjectives);
        const totalObjectivesSum = totalObjectives.reduce((sum, value) => sum + value, 0);
        const completedObjectivesSum = completedObjectives.reduce((sum, value) => sum + value, 0);
        const pendingObjectivesSum = pendingObjectivesObjectives.reduce((sum, value) => sum + value, 0);
        _this10.pieChartsObjectives = {
          labels: ['Total Objectives', 'Completed Objectives', 'Pending Objectives'],
          datasets: [{
            data: [totalObjectivesSum, completedObjectivesSum, pendingObjectivesSum],
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400')]
          }]
        };
        _this10.pieChartsObjectivesOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: (value, context) => {
                const label = (context.chart.data.labels[context.dataIndex] || '').split(' ')[0];
                return `${label}: ${value.toString()}`;
              },
              color: textColor,
              font: {
                size: 13
              }
            }
          },
          maintainAspectRatio: true
        };
        const goalsSummary = data.reduce((acc, goal) => {
          acc.totalGoals++;
          if (goal.completion_percentage === 100) {
            acc.completedGoals++;
          } else {
            acc.pendingGoals++;
          }
          return acc;
        }, {
          totalGoals: 0,
          completedGoals: 0,
          pendingGoals: 0
        });
        _this10.pieChartsGoals = {
          labels: ['Completed Goals', 'Pending Goals'],
          datasets: [{
            data: [goalsSummary.completedGoals, goalsSummary.pendingGoals],
            backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400')]
          }]
        };
        _this10.pieChartsGoalsOptions = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            },
            datalabels: {
              formatter: (value, context) => {
                const label = (context.chart.data.labels[context.dataIndex] || '').split(' ')[0];
                return `${label}: ${value.toString()}`;
              },
              color: textColor,
              font: {
                size: 13
              }
            },
            tooltip: {
              callbacks: {
                label: context => {
                  const label = context.label || '';
                  const value = context.raw;
                  return `${label}: ${value}`;
                }
              }
            }
          },
          maintainAspectRatio: true
        };
      })();
    }
    months(config) {
      var cfg = config || {};
      var count = cfg.count || 12;
      var section = cfg.section;
      var values = [];
      var i, value;
      for (i = 0; i < count; ++i) {
        value = this.MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
      }
      return values;
    }
    static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_4__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_5__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_6__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_branch_service__WEBPACK_IMPORTED_MODULE_7__.BranchService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-admin-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabView = _t.first);
        }
      },
      decls: 79,
      vars: 28,
      consts: [[1, "grid", "p-fluid"], ["routerLink", "/admin/users", 1, "col-12", "lg:col-6", "xl:col-3", "cursor-pointer"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], ["class", "text-900 font-medium text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-users", "text-blue-500", "text-xl"], ["class", "text-green-500 font-medium"], ["routerLink", "/admin/departments", 1, "col-12", "lg:col-6", "xl:col-3", "cursor-pointer"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-building", "text-orange-500", "text-xl"], ["routerLink", "/admin/goals", 1, "col-12", "lg:col-6", "xl:col-3", "cursor-pointer"], [1, "pi", "pi-map", "text-blue-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-compass", "text-purple-500", "text-xl"], [1, "col-12", "lg:col-12", "xl:col-6"], [1, "card", "flex", "flex-column", "align-items-center"], [1, "text-left", "w-full"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "col-12"], [1, "card"], ["optionLabel", "name", "placeholder", "Select Campus", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange", "onClear"], ["orientation", "right", 3, "activeIndex", "onChange"], ["header", "Goals List", 1, "line-height-3", "m-0", 3, "selected"], [1, "grid"], [1, "col-5", "align-items-center", "justify-content-center"], ["selectionMode", "single", 3, "value", "loading", 4, "ngIf"], ["width", "12rem", "height", "2rem", 4, "ngIf"], [1, "col-2"], ["layout", "vertical"], ["class", "col-5 align-items-center justify-content-center md:flex-column"], [1, "text-900", "font-medium", "text-xl"], ["shape", "circle", "size", "3rem", "styleClass", "mr-2"], [1, "text-green-500", "font-medium"], [1, "text-500", "font-medium"], ["width", "12rem", "height", "2rem"], [1, "text-500"], [1, "text-red-500", "font-medium"], ["type", "pie", 3, "responsive", "data", "options"], ["id", "emoji", 2, "font-size", "xxx-large"], ["selectionMode", "single", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [1, "cursor-pointer", "hover:shadow-8", "text-sm", 3, "click"], ["colspan", "8"], [1, "col-5", "align-items-center", "justify-content-center", "md:flex-column"], [1, "card", "flex", "justify-content-center", "flex-column"], [1, "text-sm", "text-center"], [1, "my-3", "mx-0", "border-top-1", "border-none", "surface-border"], ["id", "progress", 1, "justify-content-around", "align-items-center", "flex", "flex-row", "sm:flex-column", "md:flex-row"], [1, "flex", "align-items-center", "md:flex-column", "justify-content-center"], [1, "pi", "pi-check", "text-green-500", "mr-2"], [1, "text-xs"], [1, "pi", "pi-spin", "pi-spinner", "text-yellow-500", "mr-2"], [1, "pi", "pi-wrench", "text-red-500", "mr-2"], ["class", "col-5 align-items-center justify-content-center"], ["width", "100%", "height", "2rem", 4, "ngIf"], ["width", "100%", "height", "2rem"], ["class", "mb-3 font-bold text-2xl"], [1, "text-900", "font-medium", "text-xl", "mb-2"], [1, "text-600"], [1, "flex", "align-items-center"], [1, "font-bold", "text-2xl", "text-900"], [1, "list-none", "p-0", "m-0", "flex-grow-1"], [1, "mb-3", "font-bold", "text-2xl"], [1, "text-900"], [1, "text-blue-600"], ["type", "doughnut", "width", "100%", "height", "100%", 3, "data", "options"], [1, "flex", "align-items-center", "mb-3"], [1, "text-sm"], ["class", "pi pi-check-circle text-green-500 mr-2", "pTooltip", "Completed"], [1, "mb-3", "mx-0", "border-top-1", "border-none", "surface-border", "mt-auto"], ["pTooltip", "Completed", 1, "pi", "pi-check-circle", "text-green-500", "mr-2"], ["pTooltip", "In Progress", 1, "pi", "pi-exclamation-triangle", "text-red-500", "mr-2"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, DashboardComponent_Conditional_7_Template, 2, 1, "div", 5)(8, DashboardComponent_Conditional_8_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, DashboardComponent_Conditional_11_Template, 13, 4, "span", 8)(12, DashboardComponent_Conditional_12_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9)(14, "div", 2)(15, "div", 3)(16, "div")(17, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Departments");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, DashboardComponent_Conditional_19_Template, 2, 1, "div", 5)(20, DashboardComponent_Conditional_20_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, DashboardComponent_Conditional_23_Template, 8, 2)(24, DashboardComponent_Conditional_24_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 12)(26, "div", 2)(27, "div", 3)(28, "div")(29, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, DashboardComponent_Conditional_31_Template, 2, 1, "div", 5)(32, DashboardComponent_Conditional_32_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, DashboardComponent_Conditional_35_Template, 8, 2)(36, DashboardComponent_Conditional_36_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 12)(38, "div", 2)(39, "div", 3)(40, "div")(41, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, DashboardComponent_Conditional_43_Template, 2, 1, "div", 5)(44, DashboardComponent_Conditional_44_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, DashboardComponent_Conditional_47_Template, 8, 2)(48, DashboardComponent_Conditional_48_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 16)(50, "div", 17)(51, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Office Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, DashboardComponent_ng_container_53_Template, 2, 3, "ng-container", 19)(54, DashboardComponent_ng_template_54_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 16)(57, "div", 17)(58, "h5", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Objective Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, DashboardComponent_ng_container_60_Template, 2, 3, "ng-container", 19)(61, DashboardComponent_ng_template_61_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 21)(64, "div", 22)(65, "p-dropdown", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_p_dropdown_ngModelChange_65_listener($event) {
            return ctx.selectedCampusDropdown = $event;
          })("onChange", function DashboardComponent_Template_p_dropdown_onChange_65_listener($event) {
            return ctx.onChangeCampus($event);
          })("onClear", function DashboardComponent_Template_p_dropdown_onClear_65_listener() {
            return ctx.onClearCampus();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p-tabView", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function DashboardComponent_Template_p_tabView_onChange_66_listener($event) {
            return ctx.onChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "p-tabPanel", 25)(68, "div", 22)(69, "div", 26)(70, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, DashboardComponent_p_table_71_Template, 5, 2, "p-table", 28)(72, DashboardComponent_p_skeleton_72_Template, 1, 0, "p-skeleton", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 30)(74, "p-divider", 31)(75, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](77, DashboardComponent_Conditional_77_Template, 25, 9, "div", 32)(78, DashboardComponent_Conditional_78_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](7, ctx.users ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](24, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](11, ctx.users ? 11 : 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](19, ctx.deparmentData ? 19 : 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](25, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](23, ctx.deparmentData ? 23 : 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](31, ctx.objectivesData ? 31 : 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](26, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](35, ctx.objectivesData ? 35 : 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](43, ctx.NewGoals ? 43 : 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](27, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](47, ctx.NewGoals ? 47 : 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.pieCharts == null ? null : ctx.pieCharts.datasets[0] == null ? null : ctx.pieCharts.datasets[0].data.length)("ngIfElse", _r18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.pieChartsBudgetUsed == null ? null : ctx.pieChartsBudgetUsed.datasets[0] == null ? null : ctx.pieChartsBudgetUsed.datasets[0].data.length)("ngIfElse", _r18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.campusList)("ngModel", ctx.selectedCampusDropdown)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeIndex", ctx.selectedIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.goals);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.goals);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](77, !ctx.selectedAgoal ? 77 : 78);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, primeng_chart__WEBPACK_IMPORTED_MODULE_18__.UIChart, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_20__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__.Dropdown, primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__.Skeleton, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, primeng_divider__WEBPACK_IMPORTED_MODULE_23__.Divider, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_8__.PesoPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_9__.AbbreviationPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_9__.FirstFourWordsPipe],
      styles: ["\n\n  .doughnut-container {\n  width: 50%;\n  margin: auto;\n}\n\n\n\n@media (max-width: 768px) {\n    .doughnut-container {\n    width: 66.67%; \n\n    margin: 0 auto; \n\n  }\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  padding: 20px;\n  gap: 20px;\n  container: container/inline-size;\n}\n\n.top-area[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 20px;\n}\n.top-area[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px;\n  outline: 1px solid;\n  display: grid;\n  align-content: center;\n}\n.top-area[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  justify-content: center;\n}\n\n.bottom-area[_ngcontent-%COMP%] {\n  padding: 20px;\n  outline: 1px solid;\n}\n\n@container container (max-width: 425px) {\n  .top-area[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #ba4828;\n  font-family: \"Concert One\", cursive;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n}\n\n\n\n\n\n.text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 5em;\n  margin: 0;\n  opacity: 0.3;\n  text-align: center;\n  top: 50px;\n  width: 80%;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: 400px;\n  width: 400px;\n}\n.container[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: rgba(255, 86, 86, 0.2);\n  border-radius: 50%;\n  bottom: -5px;\n  height: 450px;\n  width: 450px;\n}\n.container[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]:after {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: rgba(255, 86, 86, 0.2);\n  border-radius: 50%;\n  bottom: 0;\n  content: \"\";\n  height: 350px;\n  width: 350px;\n}\n\n.arm-left[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #ca906f;\n  border-radius: 80px;\n  height: 160px;\n  left: 40px;\n  top: 190px;\n  transform: rotate(30deg);\n  width: 60px;\n}\n.arm-left[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #ca906f;\n  border-radius: 50%;\n  content: \"\";\n  height: 80px;\n  left: -10px;\n  top: -40px;\n  width: 80px;\n}\n\n.blacksmith[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 300px;\n  left: 50%;\n  transform-origin: center;\n  transform: translateX(-50%) rotate(0);\n  width: 300px;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #eab08c;\n  border-radius: 50%;\n  height: 250px;\n  overflow: hidden;\n  width: 250px;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]:after {\n  content: \"\";\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #777a7a;\n  border-radius: 50%;\n  height: 200%;\n  top: 130%;\n  width: 200%;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   .dress[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #777a7a;\n  height: 100px;\n  top: 0;\n  width: 20px;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   .dress[_ngcontent-%COMP%]:after, .blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   .dress[_ngcontent-%COMP%]:before {\n  position: absolute;\n  border: 5px solid #a0a0a0;\n  box-sizing: border-box;\n  border-radius: 50%;\n  content: \"\";\n  height: 30px;\n  left: -5px;\n  top: 75px;\n  width: 30px;\n  z-index: 1;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   .dress[_ngcontent-%COMP%]:nth-child(1) {\n  left: 50px;\n}\n.blacksmith[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]   .dress[_ngcontent-%COMP%]:nth-child(2) {\n  right: 50px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #13242c;\n  border-radius: 50px;\n  height: 200px;\n  top: -20px;\n  width: 90px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:after, .blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:before {\n  content: \"\";\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #13242c;\n  border-radius: 10px;\n  height: 20px;\n  transform-origin: bottom;\n  top: -10px;\n  width: 7px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:after {\n  transform: rotate(20deg);\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]:before {\n  transform: rotate(-20deg);\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #777a7a;\n  box-shadow: 28px 0px 0px #777a7a;\n  border-radius: 50%;\n  height: 30px;\n  left: 10px;\n  top: 50px;\n  width: 30px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 5px solid #a0a0a0;\n  border-radius: 50%;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  width: 100%;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  left: 43px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .moustache[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #777a7a;\n  height: 30px;\n  top: 70px;\n  width: 35px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .moustache[_ngcontent-%COMP%]:nth-child(1) {\n  border-radius: 0 60%;\n  left: 40px;\n}\n.blacksmith[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .moustache[_ngcontent-%COMP%]:nth-child(2) {\n  border-radius: 60% 0;\n  left: 5px;\n}\n.blacksmith[_ngcontent-%COMP%]   .arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #eab08c;\n  border-radius: 50px;\n  height: 170px;\n  left: 230px;\n  top: 60px;\n  transform-origin: 30px 30px;\n  transform: rotate(160deg);\n  width: 60px;\n}\n.blacksmith[_ngcontent-%COMP%]   .arm-right[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #eab08c;\n  border-radius: 50%;\n  content: \"\";\n  height: 80px;\n  left: -10px;\n  width: 80px;\n}\n.blacksmith[_ngcontent-%COMP%]   .arm-right[_ngcontent-%COMP%]   .hammer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #444444;\n  border-radius: 50% 0 0 0;\n  height: 60px;\n  left: -50px;\n  top: 140px;\n  transform: rotate(-30deg);\n  width: 50px;\n  z-index: 1;\n}\n.blacksmith[_ngcontent-%COMP%]   .arm-right[_ngcontent-%COMP%]   .hammer[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #666666;\n  border-radius: 10px;\n  height: 10px;\n  left: -5px;\n  top: 52px;\n  width: 60px;\n}\n.blacksmith[_ngcontent-%COMP%]   .arm-right[_ngcontent-%COMP%]   .hammer[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: #666666;\n  border-radius: 0 10px 10px 0;\n  height: 10px;\n  left: 100%;\n  width: 30px;\n}\n\n\n\n.anvil[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #444444;\n  bottom: 25px;\n  height: 50px;\n  width: 120px;\n}\n.anvil[_ngcontent-%COMP%]:after {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  content: \"\";\n  border-color: transparent transparent #444 transparent;\n  border-style: solid;\n  border-width: 0 50px 60px 50px;\n  bottom: -25px;\n  height: 0;\n  width: 0;\n}\n.anvil[_ngcontent-%COMP%]:before {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #666666;\n  content: \"\";\n  border-radius: 10px;\n  height: 10px;\n  width: 140px;\n}\n\n.sword[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: silver;\n  bottom: 75px;\n  height: 15px;\n  left: 40px;\n  width: 200px;\n}\n.sword[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: rgba(19, 36, 44, 0.15);\n  border-radius: 5px;\n  content: \"\";\n  height: 5px;\n  left: 20px;\n  width: 170px;\n}\n.sword[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: #444444;\n  border-radius: 10px;\n  height: 30px;\n  width: 10px;\n}\n.sword[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: rgba(255, 86, 86, 0.9);\n  border-radius: 10px 0 0 10px;\n  content: \"\";\n  height: 15px;\n  left: 80px;\n  top: 8px;\n  width: 120px;\n}\n.sword[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]:before {\n  position: absolute;\n  border-color: transparent transparent transparent #ff5656;\n  border-style: solid;\n  border-width: 7.5px 0 7.5px 15px;\n  content: \"\";\n  height: 0;\n  left: 200px;\n  opacity: 0.9;\n  top: 8px;\n  width: 0;\n}\n\n.fire-box[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100px;\n  left: 130px;\n  overflow: hidden;\n  top: 225px;\n  width: 140px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #ff5656;\n  border-radius: 20px;\n  box-shadow: 0 -5px 30px #ffb256;\n  height: 100px;\n  width: 30px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%]:after {\n  content: \"\";\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  background-color: #ffb256;\n  border-radius: 10px 10px 0 0;\n  height: 70px;\n  top: 10px;\n  width: 15px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%]:nth-child(1) {\n  left: 10px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%]:nth-child(2) {\n  left: 40px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%]:nth-child(3) {\n  left: 70px;\n}\n.fire-box[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%]:nth-child(4) {\n  left: 100px;\n}\n\n\n\n.blacksmith[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_blacksmith-anima 1.5s infinite cubic-bezier(0.59, 0.01, 0.99, 0.22);\n}\n\n@keyframes _ngcontent-%COMP%_blacksmith-anima {\n  0% {\n    transform: translateX(-50%) rotate(0);\n  }\n  50% {\n    transform: translateX(-50%) rotate(-10deg);\n  }\n}\n.arm-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_arm-anima 1.5s infinite cubic-bezier(0.59, 0.01, 0.99, 0.22);\n}\n\n@keyframes _ngcontent-%COMP%_arm-anima {\n  0% {\n    transform: rotate(160deg);\n  }\n  50% {\n    transform: rotate(30deg);\n  }\n  60% {\n    transform: rotate(30deg);\n  }\n  80% {\n    transform: rotate(30deg);\n  }\n  100% {\n    transform: rotate(160deg);\n  }\n}\n.arm-left[_ngcontent-%COMP%]:after {\n  animation: _ngcontent-%COMP%_arm-left-anima 1.5s infinite cubic-bezier(0.59, 0.01, 0.99, 0.22);\n}\n\n@keyframes _ngcontent-%COMP%_arm-left-anima {\n  0% {\n    top: -40px;\n  }\n  50% {\n    top: -10px;\n  }\n}\n.fire[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fire-anima 1.5s infinite cubic-bezier(0.59, 0.01, 0.99, 0.22);\n}\n\n@keyframes _ngcontent-%COMP%_fire-anima {\n  0% {\n    top: 130px;\n  }\n  50% {\n    top: 130px;\n  }\n  52% {\n    top: 30px;\n  }\n  70% {\n    top: 30px;\n  }\n  90% {\n    top: 130px;\n  }\n  100% {\n    top: 130px;\n  }\n}\n.fire[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.05s;\n}\n\n.fire[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.08s;\n}\n\n\n\n#link[_ngcontent-%COMP%] {\n  bottom: 20px;\n  color: #000;\n  opacity: 0.5;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n#link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-left: 5px;\n}\n\n#link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n  .p-knob-text {\n  text-align: center !important;\n  font-size: xx-small !important;\n}\n\n  .p-knob.p-component {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
    });
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 21550:
/*!************************************************************!*\
  !*** ./src/app/admin/departments/departments.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentsComponent: () => (/* binding */ DepartmentsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 96814);















const _c0 = ["filter"];
function DepartmentsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_8_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.addDept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function DepartmentsComponent_ng_template_8_Template_input_input_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
  }
}
function DepartmentsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-columnFilter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 30)(6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-columnFilter", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 30)(10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function DepartmentsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td")(5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_10_Template_span_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const dept_r12 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.changeDeptStatus($event, dept_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-confirmPopup", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 37)(11, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_10_Template_i_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const dept_r12 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.updateDept(dept_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_10_Template_i_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const dept_r12 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.deleteDept(dept_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const dept_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, dept_r12.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + dept_r12.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](dept_r12.status);
  }
}
function DepartmentsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Department found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DepartmentsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Loading Department data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function DepartmentsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_ng_template_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.changeUserStatuExecution());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = () => ["department", "status", "options"];
const _c2 = () => ({
  width: "20vw"
});
const _c3 = () => ({
  "960px": "50vw"
});
const _c4 = () => ({
  width: "25rem"
});
let DepartmentsComponent = /*#__PURE__*/(() => {
  class DepartmentsComponent {
    constructor(messageService, formBuilder, department, confirmationService, user) {
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.department = department;
      this.confirmationService = confirmationService;
      this.user = user;
      this.getdepartmenttSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.depts = [];
      this.allUsers = [];
      this.loading = true;
      this.changeStatusCard = false;
      this.cardCrudDialog = false;
      this.departmentName = '';
    }
    ngOnInit() {
      this.getDepartments();
      this.getAllUsers();
      this.cols = [{
        field: 'department',
        header: 'Department'
      }, {
        field: 'status',
        header: 'Status'
      }, {
        field: 'options',
        header: 'Options'
      }];
    }
    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.getdepartmenttSubscription.unsubscribe();
    }
    getAllUsers() {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.user.fetch('get', 'users', 'getAllUsersAdminDepartments').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this.getdepartmenttSubscription)).subscribe(data => {
          _this.allUsers = data.data[0] || [];
          console.log(_this.allUsers);
        });
      })();
    }
    getDepartments() {
      this.department.getRoute('get', 'department', 'getAllDepartment').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getdepartmenttSubscription)).subscribe(data => {
        this.depts = data.departments;
        console.log({
          getDepartments: this.depts
        });
        this.loading = false;
      });
    }
    addDept() {
      this.cardCrudDialog = true;
      this.updatingDept = false;
    }
    updateDept(dept) {
      console.log({
        updateDept: dept
      });
      this.departmentName = dept.department;
      this.updateDepartmentId = dept.id;
      this.updatingDept = true;
      this.cardCrudDialog = true;
      // this.department_head = this.allUsers.filter(
      //     (user) => user.code === dept.user_id
      // )[0].name;
      // console.log(this.department_head);
      const matchedUser = this.allUsers.find(user => user.code === dept.user_id);
      if (matchedUser) {
        this.department_head = matchedUser;
      }
    }
    updateDepartmentExec() {
      if (this.departmentName == '') {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Please provide Department Name'
        });
      }
      this.loading = true;
      console.log({
        updateDepartmentExec: 'updateDepartmentExec',
        id: this.updateDepartmentId,
        department: this.departmentName,
        department_head: this.department_head?.name,
        user_id: this.department_head?.code
      });
      this.department.getRoute('put', 'department', 'updateDepartment', {
        id: this.updateDepartmentId,
        department: this.departmentName,
        department_head: this.department_head?.name,
        user_id: this.department_head?.code
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getdepartmenttSubscription)).subscribe(data => {
        this.cardCrudDialog = false;
        this.getDepartments();
        this.loading = false;
        this.messageService.add({
          severity: 'success  ',
          summary: 'Done',
          detail: data.message,
          life: 5000
        });
        this.departmentName = '';
        this.updateDepartmentId = '';
        this.updatingDept = false;
      });
    }
    deleteDept(id) {
      this.confirmationService.confirm({
        key: 'updateDepartment',
        target: event.target,
        message: `This will remove completely on the database?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          this.department.getRoute('put', 'department', 'deleteDepartment', {
            id: id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getdepartmenttSubscription)).subscribe(data => {
            this.getDepartments();
            this.messageService.add({
              severity: 'success  ',
              summary: 'Done',
              detail: data.message,
              life: 5000
            });
          });
        },
        reject: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Done',
            detail: 'Got it...',
            life: 3000
          });
        }
      });
    }
    changeDeptStatus(event, id) {
      this.confirmationService.confirm({
        key: 'updateDepartment',
        target: event.target,
        message: `Change Status?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          this.department.getRoute('put', 'department', 'changeDepartmentStatus', {
            id: id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getdepartmenttSubscription)).subscribe(data => {
            this.getDepartments();
            this.messageService.add({
              severity: 'success  ',
              summary: 'Done',
              detail: data.message,
              life: 5000
            });
          });
        },
        reject: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Done',
            detail: 'Nothing happens',
            life: 3000
          });
        }
      });
    }
    onGlobalFilter(table, event) {
      table.filterGlobal(event.target.value, 'contains');
    }
    addDeptDialogExec() {
      if (this.departmentName == '') {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Please provide Department Name'
        });
      }
      if (this.department_head == '') {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Please provide Department head'
        });
      }
      this.loading = true;
      this.department.getRoute('post', 'department', 'addDepartment', {
        department: {
          departmentName: this.departmentName,
          department_head: this.department_head
        }
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getdepartmenttSubscription)).subscribe(data => {
        this.cardCrudDialog = false;
        this.getDepartments();
        this.loading = false;
        this.messageService.add({
          severity: 'success  ',
          summary: 'Done',
          detail: data.message,
          life: 5000
        });
        this.departmentName = '';
      });
    }
    clear(table) {
      table.clear();
      this.filter.nativeElement.value = '';
    }
    static #_ = this.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DepartmentsComponent,
      selectors: [["app-departments"]],
      viewQuery: function DepartmentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 25,
      vars: 24,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["header", "Dialog", "id", "tester", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "line-height-3", "m-0"], ["pTemplate", "footer"], [3, "header", "visible", "visibleChange", "onHide"], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["pInputText", "", "id", "deparment_name", "autocomplete", "off", "placeholder", "Department Name", 1, "flex-auto", 3, "ngModel", "ngModelChange"], [1, "flex-auto", "align-items-center", "gap-3", "mb-5"], ["optionLabel", "name", "filterBy", "name", "placeholder", "Select a User", 1, "w-full", "flex", "flex-column", 3, "ngModel", "options", "filter", "showClear", "ngModelChange"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "disabled", "click"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], ["icon", "pi pi-plus", "severity", "success", "pTooltip", "Add Objectives", "tooltipPosition", "top", 3, "outlined", "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "department", "display", "menu", "placeholder", "Search by Department"], ["type", "text", "field", "status", "display", "menu", "placeholder", "Search by Status"], [3, "click"], ["key", "updateDepartment"], ["confirmPopupRef", ""], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["colspan", "8"], ["pButton", "", "icon", "pi pi-check", "label", "Ok", 1, "p-button-outlined", 3, "click"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Departments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p-table", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DepartmentsComponent_ng_template_8_Template, 7, 1, "ng-template", 7)(9, DepartmentsComponent_ng_template_9_Template, 12, 0, "ng-template", 8)(10, DepartmentsComponent_ng_template_10_Template, 13, 6, "ng-template", 9)(11, DepartmentsComponent_ng_template_11_Template, 3, 0, "ng-template", 10)(12, DepartmentsComponent_ng_template_12_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function DepartmentsComponent_Template_p_dialog_visibleChange_13_listener($event) {
            return ctx.changeStatusCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Change Department Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DepartmentsComponent_ng_template_16_Template, 1, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function DepartmentsComponent_Template_p_dialog_visibleChange_17_listener($event) {
            return ctx.cardCrudDialog = $event;
          })("onHide", function DepartmentsComponent_Template_p_dialog_onHide_17_listener() {
            ctx.cardCrudDialog = false;
            ctx.departmentName = "";
            return ctx.department_head = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16)(19, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DepartmentsComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.departmentName = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 18)(21, "p-dropdown", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DepartmentsComponent_Template_p_dropdown_ngModelChange_21_listener($event) {
            return ctx.department_head = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 20)(23, "p-button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_Template_p_button_click_23_listener() {
            ctx.cardCrudDialog = false;
            ctx.departmentName = "";
            return ctx.department_head = "";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentsComponent_Template_p_button_click_24_listener() {
            return !ctx.updatingDept ? ctx.addDeptDialogExec() : ctx.updateDepartmentExec();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.depts)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.changeStatusCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", !ctx.updatingDept ? "Add Department" : "Update ")("visible", ctx.cardCrudDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.departmentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.department_head)("options", ctx.allUsers)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.departmentName === "");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_14__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe],
      styles: [".options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}"]
    });
  }
  return DepartmentsComponent;
})();

/***/ }),

/***/ 77193:
/*!**********************************************************************!*\
  !*** ./src/app/admin/goal-management/add-goal/add-goal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddGoalComponent: () => (/* binding */ AddGoalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goallists.service */ 87613);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 53714);











function AddGoalComponent_div_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddGoalComponent_div_8_ng_container_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.addObjective());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.addGoalform.get("goals").valid);
  }
}
function AddGoalComponent_div_8_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddGoalComponent_div_8_ng_container_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.removeObjective(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function AddGoalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddGoalComponent_div_8_ng_container_6_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddGoalComponent_div_8_ng_container_8_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("htmlFor", "objective" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Objective ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "objective" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 > 0);
  }
}
let AddGoalComponent = /*#__PURE__*/(() => {
  class AddGoalComponent {
    constructor(formBuilder, goallistService, messageService, auth) {
      this.formBuilder = formBuilder;
      this.goallistService = goallistService;
      this.messageService = messageService;
      this.auth = auth;
      this.addGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
      this.editing = false;
      this.products = [];
      this.goallistSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.createAddGoalForm();
    }
    ngOnInit() {
      //check if the form input has been cleared
      this.addGoalform.get('goals')?.valueChanges.subscribe(currentValue => {
        if (currentValue === '' && this.initialGoalValue) {
          this.editing = false;
          // Input has been cleared, revert to 'add' mode
          // ... your logic to switch to 'add' mode
          this.initialGoalValue = null; // Reset the initial value
        }
      });
    }

    ngOnChanges(changes) {
      if (changes['editGoalNameData']) {
        this.newData = changes['editGoalNameData'].currentValue;
        // Check if newData is not empty and has 'goals' and 'objectives'
        if (this.newData && this.newData.goals && this.newData.objectives) {
          // Patch the 'goals' field
          this.addGoalform.patchValue({
            goals: this.newData.goals
          });
          // Check if newData.objectives is an array
          if (Array.isArray(this.newData.objectives)) {
            // Clear existing objectives and add new ones from newData
            this.objectivesArray.clear();
            this.newData.objectives.forEach(objectiveData => {
              this.objectivesArray.push(this.formBuilder.group({
                objective: objectiveData.objective
              }));
            });
          }
          this.initialGoalValue = this.newData.goals;
          this.editing = true;
        } else {
          // Reset form and set editing to false if no meaningful data is received
          this.addGoalform.reset();
          this.editing = false;
        }
      }
    }
    createAddGoalForm() {
      this.addGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        objectives: this.formBuilder.array([this.createObjective()]) // FormArray of FormGroups
      });
    }

    createObjective() {
      return this.formBuilder.group({
        objective: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] // FormGroup with a single 'objective' control
      });
    }

    get objectivesArray() {
      return this.addGoalform.get('objectives');
    }
    addObjective() {
      this.objectivesArray.push(this.createObjective());
    }
    removeObjective(index) {
      this.objectivesArray.removeAt(index);
    }
    addGoalExec(form) {
      let newobjectives = [];
      let {
        goals,
        objectives
      } = form.value;
      newobjectives.push(objectives.map(e => {
        return {
          objective: e.objective,
          createdBy: this.auth.getTokenUserID()
        };
      }));
      let data = {
        goals: goals,
        createdBy: this.auth.getTokenUserID(),
        objectives: newobjectives
      };
      this.goallistService.getRoute('post', 'goallists', 'addGoal', form.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.goallistSubscription)).subscribe({
        next: data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${form.value.goals} added successfully`
          }); // Display error message
          this.clearForm();
          this.addGoalEvent.emit({
            success: true,
            data: data.data
          });
        },
        error: error => {
          console.error('Error fetching data:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to add goal'
          }); // Display error message
        }
      });
    }

    updateGoal(form) {
      this.goallistService.getRoute('put', 'goallists', 'updateGoalList', {
        id: this.newData.id,
        goals: form.value.goals,
        objectives: form.value.objectives
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.goallistSubscription)).subscribe({
        next: data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${form.value.goals} updated successfully`
          });
          this.clearForm();
          this.addGoalEvent.emit({
            success: true,
            data: data.data
          });
          this.editing = false;
        },
        error: error => {
          console.error('Error updating data:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update goal'
          });
        }
      });
    }
    clearForm() {
      this.addGoalform.reset(); // Reset the entire form
      // Reset objectives array to its default state (one objective)
      this.objectivesArray.clear();
      this.objectivesArray.push(this.createObjective());
      this.editing = false; // Reset editing flag if needed
    }

    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.goallistSubscription.next();
      this.goallistSubscription.complete();
    }
    static #_ = this.ɵfac = function AddGoalComponent_Factory(t) {
      return new (t || AddGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_0__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AddGoalComponent,
      selectors: [["app-add-goal"]],
      inputs: {
        editGoalNameData: "editGoalNameData",
        addGoalMessageResults: "addGoalMessageResults"
      },
      outputs: {
        addGoalEvent: "addGoalEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 6,
      consts: [[1, "p-fluid"], [1, "field", "col-12", "md:col-12"], [3, "formGroup"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "goals", "autocomplete", "off", "formControlName", "goals", "required", "", 1, "flex-auto", 3, "ngClass"], ["formArrayName", "objectives", 1, "field"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "mt-4", 3, "label", "severity", "disabled", "click"], ["type", "button", "pButton", "", "label", "Clear", 1, "p-button-outlined", 3, "click"], [3, "formGroupName"], [3, "htmlFor"], [1, "flex", "align-items-center"], ["pInputText", "", "formControlName", "objective", "required", "", 3, "id"], [4, "ngIf"], ["type", "button", "pButton", "", "icon", "pi pi-plus", 3, "disabled", "click"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 3, "click"]],
      template: function AddGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Goal name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddGoalComponent_div_8_Template, 9, 6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddGoalComponent_Template_p_button_click_9_listener() {
            return ctx.editing ? ctx.updateGoal(ctx.addGoalform) : ctx.addGoalExec(ctx.addGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddGoalComponent_Template_button_click_11_listener() {
            return ctx.clearForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (ctx.addGoalform == null ? null : ctx.addGoalform.get("goals").touched) && (ctx.addGoalform == null ? null : ctx.addGoalform.controls["goals"].errors == null ? null : ctx.addGoalform.controls["goals"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.objectivesArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.editing ? "Edit" : "Save")("severity", ctx.editing ? "warning" : "primary")("disabled", !ctx.addGoalform.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText]
    });
  }
  return AddGoalComponent;
})();

/***/ }),

/***/ 27453:
/*!********************************************************************!*\
  !*** ./src/app/admin/goal-management/goal-management.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalManagementComponent: () => (/* binding */ GoalManagementComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-goal/add-goal.component */ 77193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var _goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goal-table/goal-table.component */ 69037);






_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_1__.AddGoalComponent;
let GoalManagementComponent = /*#__PURE__*/(() => {
  class GoalManagementComponent {
    // @Output() editGoalNameDataParent = new EventEmitter<any>();
    constructor() {
      this.newGoalData = {};
      this.editGoalNameDataParent = {};
    }
    //original parent operation to the child
    addGoalEvent(event) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.newGoalData = event;
      })();
    }
    editGoalName(event) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.editGoalNameDataParent = event;
      })();
    }
    static #_ = this.ɵfac = function GoalManagementComponent_Factory(t) {
      return new (t || GoalManagementComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GoalManagementComponent,
      selectors: [["app-goal-management"]],
      decls: 12,
      vars: 3,
      consts: [[1, "col-12"], [1, "card"], [1, "grid"], [1, "col-5", "flex", "align-items-center", "justify-content-center", 3, "addGoalMessageResults", "editGoalNameData", "addGoalEvent"], [1, "col-1"], ["layout", "vertical"], [1, "col-6", "align-items-center", "justify-content-center"], [3, "newGoalDataFromParent", "editGoalName"]],
      template: function GoalManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Goal Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "app-add-goal", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addGoalEvent", function GoalManagementComponent_Template_app_add_goal_addGoalEvent_5_listener($event) {
            return ctx.addGoalEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p-divider", 5)(8, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "app-goal-table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("editGoalName", function GoalManagementComponent_Template_app_goal_table_editGoalName_11_listener($event) {
            return ctx.editGoalName($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("addGoalMessageResults", ctx.addGoalMessageResultsPost)("editGoalNameData", ctx.editGoalNameDataParent);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("newGoalDataFromParent", ctx.newGoalData);
        }
      },
      dependencies: [primeng_divider__WEBPACK_IMPORTED_MODULE_4__.Divider, _add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_1__.AddGoalComponent, _goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_2__.GoalTableComponent]
    });
  }
  return GoalManagementComponent;
})();

/***/ }),

/***/ 69037:
/*!**************************************************************************!*\
  !*** ./src/app/admin/goal-management/goal-table/goal-table.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalTableComponent: () => (/* binding */ GoalTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressspinner */ 97680);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ 3904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 96814);










function GoalTableComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-progressSpinner", 0);
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GoalTableComponent_Conditional_1_Conditional_0_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.expandAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("icon", "pi pi-fw ", ctx_r4.isExpanded ? "pi-minus" : "pi-plus", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", ctx_r4.isExpanded ? "Collapse All" : "Expand All");
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Goal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-sortIcon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "div", 17)(8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GoalTableComponent_Conditional_1_Conditional_0_ng_template_5_Template_i_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const goal_r10 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.updateGoal(goal_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GoalTableComponent_Conditional_1_Conditional_0_ng_template_5_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const goal_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.deleteGoal(goal_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const goal_r10 = ctx.$implicit;
    const expanded_r11 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pRowToggler", goal_r10)("icon", expanded_r11 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, goal_r10.goals), " ");
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Objectives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const objective_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, objective_r19.objective), " ");
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " There are no Objectives for this goal yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 20)(2, "div", 21)(3, "p-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_4_Template, 4, 0, "ng-template", 7)(5, GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_5_Template, 4, 3, "ng-template", 8)(6, GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_ng_template_6_Template, 3, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const goal_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", goal_r15.objectives);
  }
}
function GoalTableComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "p-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GoalTableComponent_Conditional_1_Conditional_0_ng_template_3_Template, 2, 2, "ng-template", 6)(4, GoalTableComponent_Conditional_1_Conditional_0_ng_template_4_Template, 7, 0, "ng-template", 7)(5, GoalTableComponent_Conditional_1_Conditional_0_ng_template_5_Template, 11, 5, "ng-template", 8)(6, GoalTableComponent_Conditional_1_Conditional_0_ng_template_6_Template, 7, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.goals)("expandedRowKeys", ctx_r2.expandedRows);
  }
}
function GoalTableComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Goals Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function GoalTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GoalTableComponent_Conditional_1_Conditional_0_Template, 7, 2, "div", 2)(1, GoalTableComponent_Conditional_1_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx_r1.goals.length !== 0 ? 0 : 1);
  }
}
let GoalTableComponent = /*#__PURE__*/(() => {
  class GoalTableComponent {
    constructor(goalService, messageService, confirmationService, cdRef) {
      this.goalService = goalService;
      this.messageService = messageService;
      this.confirmationService = confirmationService;
      this.cdRef = cdRef;
      this.goals = [];
      this.editGoalName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.filteredGoals = [];
      this.loading = false;
      this.position = 'top';
      this.goalTableSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      // expanded table var
      this.expandedRows = {};
      this.isExpanded = false;
      //get all goalists
      this.getAllGoalLists();
    }
    ngOnChanges(changes) {
      if (changes['newGoalDataFromParent'] && changes['newGoalDataFromParent'].currentValue) {
        this.loading = true;
        const newGoal = changes['newGoalDataFromParent'].currentValue;
        // Check if newGoal.data exists and is an object
        if (newGoal.data && typeof newGoal.data === 'object') {
          const existingGoalIndex = this.goals.findIndex(goal => goal.id === newGoal.data.id);
          if (existingGoalIndex !== -1) {
            // Update existing goal
            this.goals[existingGoalIndex] = newGoal.data;
          } else {
            // Add new goal
            this.goals.unshift(newGoal.data);
          }
          this.cdRef.detectChanges();
          this.loading = false;
        } else {
          console.error('Invalid newGoalDataFromParent format:', newGoal);
          // Handle the error appropriately
        }
      }
    }

    getAllGoalLists(data) {
      if (data) {
        this.goals = data;
        this.loading = false;
        return; // Stop execution if data is truthy
      }

      this.loading = true;
      this.goalService.fetch('get', 'goallists', 'getAllGoalLists').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.goalTableSubscription)).subscribe({
        next: data => {
          this.goals = data.data[0] || [];
          this.loading = false;
        },
        error: error => {
          console.error('Error fetching data:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to Fetch goal'
          }); // Display error message
        }
      });
    }

    updateGoal(object) {
      this.editGoalName.emit(object);
    }
    deleteGoal(id) {
      this.filteredGoals = this.goals.filter(goal => goal.id !== id);
      setTimeout(() => {
        this.confirmationService.confirm({
          message: 'Are you sure you want to proceed?',
          header: 'Delete',
          icon: 'pi pi-info-circle',
          acceptIcon: 'none',
          rejectIcon: 'none',
          rejectButtonStyleClass: 'p-button-text',
          accept: () => {
            this.loading = true;
            this.goalService.fetch('put', 'goallists', 'deleteGoalLists', {
              id: id
            }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.goalTableSubscription)).subscribe({
              next: data => {
                if (data.success) {
                  // this.goals = this.filteredGoals;
                  this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'Delete submitted'
                  });
                  this.getAllGoalLists(this.filteredGoals);
                }
              },
              error: error => {
                console.error('Error fetching data:', error);
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Failed to Delete goal'
                }); // Display error message
              }
            });
          },

          reject: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'Process incomplete',
              life: 3000
            });
          },
          key: 'positionDialog'
        });
      }, 0);
    }
    expandAll() {
      if (!this.isExpanded) {
        this.goals.forEach(goal => goal.goals ? this.expandedRows[goal.goals] = true : '');
      } else {
        this.expandedRows = {};
      }
      this.isExpanded = !this.isExpanded;
    }
    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.goalTableSubscription.next();
      this.goalTableSubscription.complete();
    }
    static #_ = this.ɵfac = function GoalTableComponent_Factory(t) {
      return new (t || GoalTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GoalTableComponent,
      selectors: [["app-goal-table"]],
      inputs: {
        goals: "goals",
        newGoalDataFromParent: "newGoalDataFromParent"
      },
      outputs: {
        editGoalName: "editGoalName"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [["ariaLabel", "loading"], ["key", "positionDialog", "rejectButtonStyleClass", "p-button-outlined", 3, "position"], ["class", "col-12"], [1, "col-12"], [1, "card"], ["dataKey", "goals", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pButton", "", 3, "icon", "label", "click"], [1, "flex", "table-header"], [2, "width", "3rem"], ["pSortableColumn", "goals"], ["field", "goals"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], [2, "min-width", "12rem"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["colspan", "7"], [1, "p-3"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value"], ["pTemplate", "emptymessage"], ["pSortableColumn", "id"], ["field", "price"], ["colspan", "6"], [1, "flex", "justify-content-between", "mt-2"]],
      template: function GoalTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GoalTableComponent_Conditional_0_Template, 1, 0, "p-progressSpinner", 0)(1, GoalTableComponent_Conditional_1_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-confirmDialog", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.loading ? 0 : 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx.position);
        }
      },
      dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_7__.ProgressSpinner, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialog, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe],
      styles: [".p-orderlist-item {\n  cursor: default;\n}"]
    });
  }
  return GoalTableComponent;
})();

/***/ }),

/***/ 89021:
/*!**************************************************************!*\
  !*** ./src/app/admin/goals/add-files/add-files.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddFilesComponent: () => (/* binding */ AddFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 13931);











const _c0 = () => ({
  width: "50rem"
});
const _c1 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
let AddFilesComponent = /*#__PURE__*/(() => {
  class AddFilesComponent {
    constructor(messageService, fileService, formBuilder, auth) {
      this.messageService = messageService;
      this.fileService = fileService;
      this.formBuilder = formBuilder;
      this.auth = auth;
      this.childAddFile = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.getAddFilesComponentSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.uploadedFiles = [];
      this.AllObjectivesFiles = [];
      this.USERID = this.auth.getTokenUserID();
    }
    ngOnChanges(changes) {
      const addFileTrigger = changes['addNewFile']?.currentValue;
      this.addFileTrigger = changes['addNewFile']?.currentValue;
      if (addFileTrigger && addFileTrigger.addFile) {
        this.addObjectiveFileDialogCard = true;
        this.objectiveIDforFile = addFileTrigger?.objectiveId;
        this.frequencyFileName = addFileTrigger?.frequencyFileName;
      }
    }
    ngOnInit() {
      this.createaddFileForm();
    }
    ngOnDestroy() {
      this.getAddFilesComponentSubscription.next();
      this.getAddFilesComponentSubscription.complete();
    }
    createaddFileForm() {
      this.addFileForm = this.formBuilder.group({
        files: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });
    }
    onUpload(event) {
      for (const file of event.files) {
        this.uploadedFiles.push(file);
      }
      if (!(0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_0__.validateFileType)(this.uploadedFiles)) {
        this.messageService.add({
          severity: 'error',
          summary: 'File Unsupported',
          detail: 'Unsupported file type! Please select only images, documents, or spreadsheets'
        });
        event.preventDefault();
      }
      this.fileService.addObjectiveFiles({
        user_id: this.USERID,
        objectiveId: this.objectiveIDforFile,
        files: this.uploadedFiles,
        frequencyFileName: this.frequencyFileName ? this.frequencyFileName : ''
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.getAddFilesComponentSubscription)).subscribe({
        next: data => {
          this.childAddFile.emit({
            USERID: this.USERID,
            objectiveId: this.objectiveIDforFile,
            viewObjectiveFileDialogCard: false,
            frequencyFileNameForUpdate: data.fileNames[0],
            frequencyFileName: this.frequencyFileName
          });
          this.addObjectiveFileDialogCard = false;
          this.AllObjectivesFiles = [];
          if (data.success) {
            this.messageService.add({
              severity: 'success  ',
              summary: 'View the files',
              detail: 'Files added successfully'
            });
            this.addFileForm.reset();
            this.uploadedFiles = [];
            this.addObjectiveFileDialogCard = false;
            // this.viewObjectiveFileDialogCard = false;
          }
        },

        error: error => {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: error.message
          });
        },
        complete: () => {}
      });
    }
    static #_ = this.ɵfac = function AddFilesComponent_Factory(t) {
      return new (t || AddFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddFilesComponent,
      selectors: [["app-add-files"]],
      inputs: {
        addNewFile: "addNewFile"
      },
      outputs: {
        childAddFile: "childAddFile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 8,
      consts: [["styleClass", "addObjective", "header", "Drag and Drop Files", "position", "top", 3, "visible", "breakpoints", "visibleChange"], [1, "p-fluid"], [3, "formGroup"], ["name", "files", "customUpload", "true", "multiple", "false", "maxFileSize", "20000000", "formControlName", "files", "ngDefaultControl", "", 3, "files", "uploadHandler"]],
      template: function AddFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function AddFilesComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.addObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "form", 2)(3, "p-fileUpload", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("uploadHandler", function AddFilesComponent_Template_p_fileUpload_uploadHandler_3_listener($event) {
            return ctx.onUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00A0\u00A0\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.addObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addFileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("files", ctx.uploadedFiles);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUpload]
    });
  }
  return AddFilesComponent;
})();

/***/ }),

/***/ 35993:
/*!***************************************************************!*\
  !*** ./src/app/admin/goals/add-goal/adding-goal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddingGoalComponent: () => (/* binding */ AddingGoalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/goallists.service */ 87613);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 53965);















const _c0 = () => ({
  width: "25rem"
});
let AddingGoalComponent = /*#__PURE__*/(() => {
  class AddingGoalComponent {
    constructor(formBuilder, dept, messageService, camp, auth, goallistService, goal) {
      this.formBuilder = formBuilder;
      this.dept = dept;
      this.messageService = messageService;
      this.camp = camp;
      this.auth = auth;
      this.goallistService = goallistService;
      this.goal = goal;
      this.childAddGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
      this.addGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.deptDropdownValue = [];
      this.deptDropdownCampusValue = [];
      this.deptDropdownGoalListValue = [];
      this.addGoalDialogCard = false;
      this.USERID = this.auth.getTokenUserID();
    }
    ngOnInit() {
      this.createAddGoalForm();
      this.initializeDropdown();
      this.getAllCampuses();
      this.getAllDept();
      this.getAllGoallistsDropdown();
    }
    initializeDropdown() {
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
    }
    // campus dropdown
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.addGoalSubscription)).subscribe({
        next: data => {
          this.deptDropdownCampusValue = data.data[0];
        },
        error: error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to Campus Dropdown'
          }); // Display error message
        },

        complete: () => {}
      });
    }
    getAllGoallistsDropdown() {
      this.goallistService.getRoute('get', 'goallists', 'getAllGoallistsDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.addGoalSubscription)).subscribe({
        next: data => {
          this.deptDropdownGoalListValue = data.data[0].map(item => ({
            ...item,
            name: (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_0__.customTitleCase)(item.name)
          }));
          this.originalStrategicObjective = this.strategicObjectiveList = data.data[0].flatMap(e => e.objectives.map(objective => ({
            ...objective,
            name: (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_0__.customTitleCase)(objective.name)
          })));
        },
        error: error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to Goallist Dropdown'
          }); // Display error message
        },

        complete: () => {}
      });
    }
    // department dropdown
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.addGoalSubscription)).subscribe({
        next: data => {
          this.deptDropdownValue = data.data[0];
        },
        error: error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to Department Dropdown'
          }); // Display error message
        },

        complete: () => {}
      });
    }
    createAddGoalForm() {
      this.addGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        strategic_objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        // budget: ['', [Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
    }
    ngOnChanges(changes) {
      this.addGoalTrigger = changes['addNewGoal']?.currentValue;
      if (this.addGoalTrigger && this.addGoalTrigger.addGoal) {
        this.addGoalDialogCard = true;
      }
    }
    addGoalDialogExec(form) {
      let data = {
        goals: form.value.goals.name || this.customGoalName,
        strategic_objective: form.value.strategic_objective.name || this.customstrageticObjectiveName,
        strategic_id: form.value.strategic_objective.id,
        campus: this.formGroupCampus.value.selectedCampus.name,
        department: this.formGroupDemo.value.selectDepartment.name,
        createdBy: this.USERID,
        goallistsId: this.selectedGoalId || ''
      };
      if (data.goals === '' || data.campus === '' || data.department === '') {
        // Handle the error (display a message, log to console, etc.)
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error: One or more required fields are missing or empty.'
        }); // Display error message
        return; // Stop further execution
      }

      this.goal.fetch('post', 'goals', 'addGoals', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.addGoalSubscription)).subscribe(data => {
        if (data.success) {
          // this.getAllObjectivesWithObjectives();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.addGoalDialogCard = false;
          this.addGoalform.reset();
          this.formGroupDemo.reset();
          this.formGroupCampus.reset();
          this.childAddGoalEvent.emit({
            success: true,
            message: 'Added Goal Successfully'
          });
        } else {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    onHide() {
      this.addGoalDialogCard = false;
    }
    onGoalChange(event) {
      this.strategicObjectiveList = this.originalStrategicObjective;
      if (event.value) {
        this.selectedGoalId = event.value.id;
        this.filterStrategicObjectives(event.value.id);
      }
    }
    filterStrategicObjectives(goal_id) {
      this.filteredStrategicObjectiveList = this.strategicObjectiveList.filter(objective => objective.goal_id === goal_id);
      this.strategicObjectiveList = this.filteredStrategicObjectiveList;
    }
    ngOnDestroy() {
      this.addGoalSubscription.next();
      this.addGoalSubscription.complete();
    }
    static #_ = this.ɵfac = function AddingGoalComponent_Factory(t) {
      return new (t || AddingGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_2__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__.GoalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddingGoalComponent,
      selectors: [["app-adding-goal"]],
      inputs: {
        addNewGoal: "addNewGoal"
      },
      outputs: {
        childAddGoalEvent: "childAddGoalEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 25,
      vars: 15,
      consts: [["header", "Add Goal", 3, "visible", "visibleChange", "onHide"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [1, "field"], ["htmlFor", "department"], ["formControlName", "goals", "optionLabel", "name", "placeholder", "Select a Goal", 3, "options", "editable", "onChange"], ["formControlName", "strategic_objective", "optionLabel", "name", "placeholder", "Select a Strategic Objectives", 3, "options", "editable"], ["formControlName", "selectDepartment", "filterBy", "name", "optionLabel", "name", "placeholder", "Select a Department", 3, "options", "filter", "showClear"], ["formControlName", "selectedCampus", "optionLabel", "name", "placeholder", "Select a Campus", 3, "options"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"]],
      template: function AddingGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function AddingGoalComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.addGoalDialogCard = $event;
          })("onHide", function AddingGoalComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.onHide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Goal name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p-dropdown", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function AddingGoalComponent_Template_p_dropdown_onChange_7_listener($event) {
            return ctx.onGoalChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Strategic Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "p-dropdown", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4)(13, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-dropdown", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "p-dropdown", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 10)(23, "p-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddingGoalComponent_Template_p_button_click_23_listener() {
            return ctx.addGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddingGoalComponent_Template_p_button_click_24_listener() {
            return ctx.addGoalDialogExec(ctx.addGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.addGoalDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownGoalListValue)("editable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.strategicObjectiveList)("editable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupDemo);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownValue)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupCampus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownCampusValue);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown]
    });
  }
  return AddingGoalComponent;
})();

/***/ }),

/***/ 31172:
/*!**********************************************************************!*\
  !*** ./src/app/admin/goals/add-objective/add-objective.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddObjectiveComponent: () => (/* binding */ AddObjectiveComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/goallists.service */ 87613);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 75167);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 96218);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/radiobutton */ 21865);





















function AddObjectiveComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-radioButton", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputId", category_r6.key)("value", category_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", category_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", category_r6.name, " ");
  }
}
function AddObjectiveComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p-radioButton", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputId", category_r7.key)("value", category_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", category_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", category_r7.name, " ");
  }
}
function AddObjectiveComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-inputNumber", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "month_", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Goal For the ", month_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "month_", i_r10, "")("formControlName", "month_", i_r10, "");
  }
}
function AddObjectiveComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddObjectiveComponent_div_44_div_2_Template, 4, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.months);
  }
}
function AddObjectiveComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "div", 32)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Goal For the Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "p-inputNumber", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "yearly_", 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "yearly_", 0, "")("formControlName", "yearly_", 0, "");
  }
}
function AddObjectiveComponent_div_46_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-inputNumber", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quarter_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "quarter_", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Goal For the ", quarter_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "quarter_", i_r13, "")("formControlName", "quarter_", i_r13, "");
  }
}
function AddObjectiveComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddObjectiveComponent_div_46_div_2_Template, 4, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.quarters);
  }
}
function AddObjectiveComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "p-inputNumber", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "semi_annual_", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Goal For the ", period_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "semi_annual_", i_r16, "")("formControlName", "semi_annual_", i_r16, "");
  }
}
function AddObjectiveComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddObjectiveComponent_div_47_div_2_Template, 4, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.semi_annual);
  }
}
const _c0 = () => ({
  width: "50rem"
});
const _c1 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
let AddObjectiveComponent = /*#__PURE__*/(() => {
  class AddObjectiveComponent {
    constructor(formBuilder, messageService, auth, obj, goallistService, goals) {
      this.formBuilder = formBuilder;
      this.messageService = messageService;
      this.auth = auth;
      this.obj = obj;
      this.goallistService = goallistService;
      this.goals = goals;
      this.childAddObjectiveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
      this.addObjectiveGoalDialogCard = false;
      this.addObjectiveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.goalDataRemainingBudget = 0;
      this.frequencyOptions = [{
        name: 'yearly',
        code: 'yearly'
      }, {
        name: 'quarterly',
        code: 'quarterly'
      }, {
        name: 'semi_annual',
        code: 'semi_annual'
      }, {
        name: 'monthly',
        code: 'monthly'
      }];
      this.months = [];
      this.quarters = [];
      this.semi_annual = [];
      this.yearly = [];
      this.targetValSwitch = false;
      this.typeOfComputationValSwitch = false;
      this.targetValPercentSwitch = false;
      this.targetValCountSwitch = false;
      this.typeOfComputationValCumulativeSwitch = false;
      this.typeOfComputationValNonCumulativeSwitch = false;
      this.targetTypes = [{
        name: 'percent',
        code: 'percent'
      }, {
        name: 'count',
        code: 'count'
      }];
      this.typeOfComputations = [{
        name: 'cumulative',
        code: 'cumulative'
      }, {
        name: 'non-cumulative',
        code: 'non-cumulative'
      }];
      this.USERID = this.auth.getTokenUserID();
      for (let month = 0; month < 12; month++) {
        this.months.push(new Date(0, month).toLocaleString('default', {
          month: 'short'
        }));
      }
      // Initialize quarters array
      this.quarters = ['Q1 (Jan-Mar)', 'Q2 (Apr-Jun)', 'Q3 (Jul-Sep)', 'Q4 (Oct-Dec)'];
      this.semi_annual = ['(Jan-Feb-Mar-Apr-May-Jun)', '(Jul-Aug-Sep-Oct-Nov-Dec)'];
      this.yearly = ['Year'];
      // Initialize yearly array
      this.yearly = ['yearly'];
      this.targetValCountSwitch = true;
      this.typeOfComputationValNonCumulativeSwitch = true;
    }
    ngOnInit() {
      this.createAddObjectiveGoalform();
      this.formGroupDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        selectedDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
      });
      this.dropdwonSelection = [{
        name: 'daily',
        code: 'Daily'
      }, {
        name: 'weekly',
        code: 'Weekly'
      }, {
        name: 'monthly',
        code: 'Monthly'
      }, {
        name: 'yearly',
        code: 'Yearly'
      }, {
        name: 'quarterly',
        code: 'Quarterly'
      }, {
        name: 'biannually',
        code: 'Biannually'
      }];
      // Disable the strategic_objective form control
      this.addObjectiveGoalform.get('target_type').setValue(this.targetTypes[1].name);
      this.addObjectiveGoalform.get('type_of_computation').setValue(this.typeOfComputations[1].name);
    }
    ngOnDestroy() {
      this.addObjectiveSubscription.next();
      this.addObjectiveSubscription.complete();
    }
    ngOnChanges(changes) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.addGoalTrigger = changes['addNewObjective']?.currentValue;
        let id = _this.addGoalTrigger?.goallistsId;
        _this.addExecutionGoalId = _this.addGoalTrigger?.goalId;
        _this.addExecutionGoal_Id = _this.addGoalTrigger?.goal_ObjectId;
        if (_this.addGoalTrigger?.addObjective && _this.addGoalTrigger?.goallistsId) {
          // Ensure the form is initialized
          if (!_this.addObjectiveGoalform) {
            _this.createAddObjectiveGoalform();
          }
          // this.getAllGoallistsDropdown(id);
          _this.getTheGoalData(_this.addExecutionGoalId || _this.addGoalTrigger?.goalId);
          _this.addObjectiveGoalform.get('strategic_objective').disable();
          setTimeout(() => {
            _this.addObjectiveGoalDialogCard = true;
          }, 0);
        }
      })();
    }
    getTheGoalData(goal) {
      this.goals.fetch('get', 'goals', `getGoalForCreatingObjective/${goal}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.addObjectiveSubscription)).subscribe(data => {
        if (data.success) {
          this.addObjectiveGoalform.patchValue({
            strategic_objective: (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_1__.customTitleCase)(data.goal.strategic_objective)
          });
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Failed',
            detail: 'Failed to get goal data'
          });
        }
      });
    }
    onFrequencyChange(event) {
      const frequency = event.value.name;
      // Clear existing dynamic controls
      // this.clearDynamicControls();
      (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__.clearDynamicControls)(this.addObjectiveGoalform, this.months, this.quarters, this.semi_annual, this.yearly);
      if (frequency === 'yearly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__.addYearlyControlsSimple)(this.addObjectiveGoalform, this.yearly);
      } else if (frequency === 'quarterly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__.addQuarterlyControlsSimple)(this.addObjectiveGoalform, this.quarters);
      } else if (frequency === 'semi_annual') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__.addSemiAnnualControlsSimple)(this.addObjectiveGoalform, this.semi_annual);
      } else if (frequency === 'monthly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_2__.addMonthlyControlsSimple)(this.addObjectiveGoalform, this.months);
      }
      // if (frequency === 'yearly') {
      //     this.addYearlyControls();
      // } else if (frequency === 'quarterly') {
      //     this.addQuarterlyControls();
      // } else if (frequency === 'semi_annual') {
      //     this.addSemiAnnualControls();
      // } else if (frequency === 'monthly') {
      //     this.addMonthlyControls();
      // }
      // Update the form control value
      this.addObjectiveGoalform.get('frequency_monitoring').setValue(frequency);
    }
    // clearDynamicControls() {
    //     this.months.forEach((_, i) => {
    //         if (this.addObjectiveGoalform.contains(`month_${i}`)) {
    //             this.addObjectiveGoalform.removeControl(`month_${i}`);
    //         }
    //     });
    //     this.quarters.forEach((_, i) => {
    //         if (this.addObjectiveGoalform.contains(`quarter_${i}`)) {
    //             this.addObjectiveGoalform.removeControl(`quarter_${i}`);
    //         }
    //     });
    //     this.semi_annual.forEach((_, i) => {
    //         if (this.addObjectiveGoalform.contains(`semi_annual_${i}`)) {
    //             this.addObjectiveGoalform.removeControl(`semi_annual_${i}`);
    //         }
    //     });
    //     this.yearly.forEach((_, i) => {
    //         if (this.addObjectiveGoalform.contains(`yearly_${i}`)) {
    //             this.addObjectiveGoalform.removeControl(`yearly_${i}`);
    //         }
    //     });
    // }
    // addMonthlyControls() {
    //     this.months.forEach((_, i) => {
    //         this.addObjectiveGoalform.addControl(
    //             `month_${i}`,
    //             new FormControl(0, Validators.min(0))
    //         );
    //     });
    // }
    // addYearlyControls() {
    //     this.yearly.forEach((_, i) => {
    //         this.addObjectiveGoalform.addControl(
    //             `yearly_${i}`,
    //             new FormControl(0, Validators.min(0))
    //         );
    //     });
    // }
    // addQuarterlyControls() {
    //     this.quarters.forEach((_, i) => {
    //         this.addObjectiveGoalform.addControl(
    //             `quarter_${i}`,
    //             new FormControl(0, Validators.min(0))
    //         );
    //     });
    // }
    // addSemiAnnualControls() {
    //     this.semi_annual.forEach((_, i) => {
    //         this.addObjectiveGoalform.addControl(
    //             `semi_annual_${i}`,
    //             new FormControl(0, Validators.min(0))
    //         );
    //     });
    // }
    ngAfterViewInit() {}
    createAddObjectiveGoalform() {
      this.addObjectiveGoalform = this.formBuilder.group({
        userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        goalId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        strategic_objective: [{
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        functional_objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        performance_indicator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        formula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        programs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        responsible_persons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        // clients: ['', [Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        data_source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        target_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        type_of_computation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        // Add form controls for monthly and quarterly timetable values
        month_0: [0],
        month_1: [0],
        month_2: [0],
        month_3: [0],
        month_4: [0],
        month_5: [0],
        month_6: [0],
        month_7: [0],
        month_8: [0],
        month_9: [0],
        month_10: [0],
        month_11: [0],
        yearly_0: [0],
        quarter_0: [0],
        quarter_1: [0],
        quarter_2: [0],
        quarter_3: [0],
        semi_annual_1: [0],
        semi_annual_0: [0]
      });
    }
    clearAddObjectiveGoalDialogCardDatas() {
      this.addObjectiveGoalDialogCard = false;
      this.addObjectiveGoalform.reset();
    }
    addSubObjectiveGoalDialogExec(e) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Enable the strategic_objective form control before accessing the form value
        _this2.addObjectiveGoalform.get('strategic_objective').enable();
        let patterns = [];
        if (e.value.frequency_monitoring === 'semi_annual') {
          patterns.push('semi_annual_[i]');
        }
        if (e.value.frequency_monitoring === 'monthly') {
          patterns.push('month_[i]');
        }
        if (e.value.frequency_monitoring === 'yearly') {
          patterns.push('yearly_[i]');
        }
        if (e.value.frequency_monitoring === 'quarterly') {
          patterns.push('quarter_[i]');
        }
        const {
          addExecutionGoalId,
          formGroupDropdown,
          goal_ObjectId,
          USERID,
          targetValSwitch,
          typeOfComputationValSwitch
        } = _this2;
        let data = {
          ...e.value,
          userId: USERID,
          goalId: addExecutionGoalId,
          goal_Id: _this2.addExecutionGoal_Id,
          createdBy: USERID,
          target_type: !targetValSwitch ? 'percent' : targetValSwitch,
          type_of_computation: !typeOfComputationValSwitch ? 'cumulative' : typeOfComputationValSwitch
        };
        const updatedData = yield _this2.addGoalPeriods(data, patterns);
        _this2.obj.fetch('post', 'objectives', 'addObjectives', updatedData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this2.addObjectiveSubscription)).subscribe(data => {
          if (data.success) {
            _this2.addObjectiveGoalDialogCard = false;
            _this2.messageService.add({
              severity: 'success',
              summary: 'Done',
              detail: data.message
            });
            _this2.goal_ObjectId = data.data.goal_Id;
            _this2.addObjectiveGoalform.reset();
            _this2.formGroupDropdown.reset();
            _this2.goalDataRemainingBudget = 0;
            _this2.childAddObjectiveEvent.emit(data.data.goalId);
          } else {
            _this2.messageService.add({
              severity: 'warn'
            });
          }
        });
      })();
    }
    onGoalChange(event) {
      // capture here the goallist id if needed
    }
    addGoalPeriods(obj, patterns) {
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const newObj = {
          ...obj
        }; // Create a copy of the original object
        patterns.forEach(pattern => {
          const regex = new RegExp(`^${pattern.replace('[i]', '(\\d+)')}$`);
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              const match = key.match(regex);
              if (match) {
                const periodIndex = match[1];
                newObj[`goal_${pattern.replace('[i]', periodIndex)}`] = obj[key];
                newObj[key] = 0; // Set the value to 0
              }
            }
          }
        });

        return newObj;
      })();
    }
    static #_ = this.ɵfac = function AddObjectiveComponent_Factory(t) {
      return new (t || AddObjectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_4__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_5__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_6__.GoalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AddObjectiveComponent,
      selectors: [["app-add-objective"]],
      inputs: {
        addNewObjective: "addNewObjective"
      },
      outputs: {
        childAddObjectiveEvent: "childAddObjectiveEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 59,
      vars: 24,
      consts: [["styleClass", "addObjective", "header", "Add Objectives", "position", "top", 3, "visible", "breakpoints", "visibleChange", "onHide"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [1, "field"], ["htmlFor", "department"], ["pInputText", "", "id", "strategic_objective", "autocomplete", "off", "formControlName", "strategic_objective", "required", "", 1, "flex-auto", 3, "ngClass"], ["rows", "5", "cols", "30", "placeholder", "Message...", "formControlName", "functional_objective", "required", "", "pInputTextarea", "", 3, "ngClass"], ["htmlFor", "name1"], ["rows", "5", "cols", "30", "placeholder", "Message...", "formControlName", "performance_indicator", "required", "", "pInputTextarea", "", 3, "ngClass"], ["mode", "decimal", "formControlName", "target", 3, "showButtons", "ngClass"], [1, "flex", "flex-row", "align-items-center", "justify-content-evenly", "mt-2"], [1, "card", "flex", "justify-content-between"], [1, "flex", "flex-row", "gap-3"], ["class", "field-checkbox", 4, "ngFor", "ngForOf"], ["rows", "5", "cols", "30", "placeholder", "Message...", "formControlName", "formula", "required", "", "pInputTextarea", "", 3, "ngClass"], ["rows", "5", "cols", "30", "placeholder", "Message...", "formControlName", "programs", "required", "", "pInputTextarea", "", 3, "ngClass"], ["pInputText", "", "id", "responsible_persons", "autocomplete", "off", "formControlName", "responsible_persons", "required", "", 1, "flex-auto", 3, "ngClass"], ["formControlName", "frequency_monitoring", "optionLabel", "name", "placeholder", "Select a Frequency", 3, "options", "onChange"], [1, "flex", "flex-row", "align-items-center", "justify-content-evenly"], [4, "ngIf"], ["pInputText", "", "id", "data_source", "autocomplete", "off", "formControlName", "data_source", "required", "", 1, "flex-auto", 3, "ngClass"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"], [1, "field-checkbox"], ["name", "target_type", "formControlName", "target_type", 3, "inputId", "value"], [1, "ml-2", 3, "for"], ["name", "type_of_computation", "formControlName", "type_of_computation", 3, "inputId", "value"], [1, "grid"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "for"], [3, "id", "formControlName"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"]],
      template: function AddObjectiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function AddObjectiveComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.addObjectiveGoalDialogCard = $event;
          })("onHide", function AddObjectiveComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Strategic Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Functional Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "textarea", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 4)(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Performance Indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "textarea", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 4)(17, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "p-inputNumber", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AddObjectiveComponent_div_23_Template, 4, 4, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 4)(25, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "textarea", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 4)(29, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Programs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "textarea", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 4)(33, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Responsible Persons");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 4)(37, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Frequency Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "p-dropdown", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function AddObjectiveComponent_Template_p_dropdown_onChange_39_listener($event) {
            return ctx.onFrequencyChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 19)(41, "div", 12)(42, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, AddObjectiveComponent_div_43_Template, 4, 4, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, AddObjectiveComponent_div_44_Template, 3, 1, "div", 20)(45, AddObjectiveComponent_div_45_Template, 6, 3, "div", 20)(46, AddObjectiveComponent_div_46_Template, 3, 1, "div", 20)(47, AddObjectiveComponent_div_47_Template, 3, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 4)(49, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Means of Verification(Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 4)(53, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " budget ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "p-inputNumber", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 23)(57, "p-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddObjectiveComponent_Template_p_button_click_57_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "p-button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddObjectiveComponent_Template_p_button_click_58_listener() {
            return ctx.addSubObjectiveGoalDialogExec(ctx.addObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.addObjectiveGoalDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addObjectiveGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_4_0 = ctx.addObjectiveGoalform.get("strategic_objective")) == null ? null : tmp_4_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["strategic_objective"].errors == null ? null : ctx.addObjectiveGoalform.controls["strategic_objective"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_5_0 = ctx.addObjectiveGoalform.get("functional_objective")) == null ? null : tmp_5_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_6_0 = ctx.addObjectiveGoalform.get("performance_indicator")) == null ? null : tmp_6_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showButtons", true)("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("target").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["target"].errors == null ? null : ctx.addObjectiveGoalform.controls["target"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.targetTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_10_0 = ctx.addObjectiveGoalform.get("formula")) == null ? null : tmp_10_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_11_0 = ctx.addObjectiveGoalform.get("programs")) == null ? null : tmp_11_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : (tmp_12_0 = ctx.addObjectiveGoalform.get("responsible_persons")) == null ? null : tmp_12_0.touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.frequencyOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.typeOfComputations);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addObjectiveGoalform.get("frequency_monitoring").value === "monthly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addObjectiveGoalform.get("frequency_monitoring").value === "yearly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addObjectiveGoalform.get("frequency_monitoring").value === "quarterly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addObjectiveGoalform.get("frequency_monitoring").value === "semi_annual");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("data_source").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showButtons", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumber, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextarea, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_19__.RadioButton],
      styles: [".addObjective {\n  overflow-y: auto;\n}"]
    });
  }
  return AddObjectiveComponent;
})();

/***/ }),

/***/ 22024:
/*!**************************************************************!*\
  !*** ./src/app/admin/goals/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalDashboardComponent: () => (/* binding */ GoalDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/chip */ 42169);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/card */ 94532);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/skeleton */ 14227);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/dataFilter */ 42162);
/* harmony import */ var _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utlis/general.pipes */ 6701);




















function GoalDashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-chart", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.donutData)("options", ctx_r0.donutOptions);
  }
}
function GoalDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-skeleton", 12);
  }
}
function GoalDashboardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-skeleton", 13);
  }
}
function GoalDashboardComponent_Conditional_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Goal Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Percentage Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Total Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Completed Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Incomplete Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function GoalDashboardComponent_Conditional_22_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "p-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "objectiveNames");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "completedObjectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "incompleteObjectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r8 = ctx.$implicit;
    const expanded_r9 = ctx.expanded;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pRowToggler", goal_r8)("icon", expanded_r9 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 14, goal_r8.users.email.split("@")[0].split(".")[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("image", ctx_r5.auth.domain + "/images/" + goal_r8.users.profile_pic || "no-photo.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](goal_r8.goals);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](goal_r8.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](12, 16, goal_r8.budget, "PHP", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](15, 20, goal_r8.budgetMinusAllObjectiveBudget, "PHP", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](18, 24, goal_r8.remainingBudget, "PHP", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](goal_r8.completion_percentage + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 28, goal_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((goal_r8.objectivesDetails == null ? null : goal_r8.objectivesDetails.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 30, goal_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 32, goal_r8));
  }
}
function GoalDashboardComponent_Conditional_22_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c0 = (a0, a1) => ({
  "pi-check-circle text-green-500": a0,
  "pi-times-circle text-red-500": a1
});
function GoalDashboardComponent_Conditional_22_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "formatFrequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const objective_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objective_r13.functional_objective, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, objective_r13.frequency_monitoring), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](8, 6, objective_r13.budget, "PHP", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](10, _c0, objective_r13.complete, !objective_r13.complete));
  }
}
function GoalDashboardComponent_Conditional_22_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 21)(2, "div", 22)(3, "p-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, GoalDashboardComponent_Conditional_22_ng_template_3_ng_template_4_Template, 9, 0, "ng-template", 15)(5, GoalDashboardComponent_Conditional_22_ng_template_3_ng_template_5_Template, 11, 13, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const goal_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", goal_r10.objectivesDetails);
  }
}
function GoalDashboardComponent_Conditional_22_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Totals");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "td")(10, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r7.totalBudget, "PHP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 5, ctx_r7.usedBudget, "PHP"));
  }
}
function GoalDashboardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, GoalDashboardComponent_Conditional_22_ng_template_1_Template, 24, 0, "ng-template", 15)(2, GoalDashboardComponent_Conditional_22_ng_template_2_Template, 32, 34, "ng-template", 16)(3, GoalDashboardComponent_Conditional_22_ng_template_3_Template, 6, 1, "ng-template", 17)(4, GoalDashboardComponent_Conditional_22_ng_template_4_Template, 11, 8, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r3.goals)("expandedRowKeys", ctx_r3.expandedRows);
  }
}
let GoalDashboardComponent = /*#__PURE__*/(() => {
  class GoalDashboardComponent {
    constructor(goal, goalService, obj, productService, auth) {
      this.goal = goal;
      this.goalService = goalService;
      this.obj = obj;
      this.productService = productService;
      this.auth = auth;
      this.dashboardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.goals = [];
      this.products = [];
      this.loading = false;
      this.isExpanded = false;
      this.expandedRows = {};
    }
    ngOnInit() {
      this.loading = true;
      this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
      this.getAllObjectivesForTable();
      this.getGoals();
      this.getObjectiveViewPieChart();
      this.getAllObjectives();
      this.loading = false;
    }
    getCompletedObjectives(goal) {
      return goal.objectivesDetails?.filter(o => o.complete && !o.deleted).length || 0;
    }
    getObjectiveNames(goal) {
      return goal.objectivesDetails?.filter(o => o.functional_objective).map(o => o.functional_objective).join(', ') || '';
    }
    getIncompleteObjectives(goal) {
      return goal.objectivesDetails?.filter(o => !o.complete && !o.deleted).length || 0;
    }
    getGoals() {
      this.goal.fetch('get', 'goals', 'getGoalsForDashboard').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        console.log({
          getGoals: data
        });
        this.goalForTables = data?.data[0]?.totalBudget[0]?.totalAmount || 0;
        this.goalCount = data?.data[0]?.goalCount;
      });
    }
    formatFrequencyString(frequency) {
      return (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.formatFrequencyString)(frequency);
    }
    getAllObjectives() {
      // this.obj
      //     .fetch('get', 'objectives', `getAllObjectivesBudget`)
      //     .pipe(takeUntil(this.dashboardSubscription))
      //     .subscribe((data: any) => {
      //         this.objectiveBudget = data.data;
      //     });
    }
    getAllObjectivesForTable(office) {
      this.goals = [];
      this.obj.fetch('get', 'goals', `getAllObjectivesWithObjectives/${office}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        console.log({
          getAllObjectivesForTable: data
        });
        this.allObjectiveBudget = data.goals.map(o => o.objectivesDetails.map(o => o.budget).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
        this.goals = data.goals;
        this.calculateBudget(data.goals);
        this.calculateUsed(data.goals);
        this.calculateRemaining(data.goals);
        this.officeList = data.office_dropdown;
        this.officeListCombine = data.office_dropdown.map(office => office.name).join(', ');
      });
    }
    getObjectiveViewPieChart() {
      this.goalService.fetch('get', 'goals', `getObjectivesViewTable`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        console.log(data);
        this.initBarCharts(data?.goals || []);
      });
    }
    ngOnDestroy() {
      this.dashboardSubscription.unsubscribe();
    }
    initBarCharts(goal) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        // Function to generate random color
        const getIncrementalColor = () => {
          const randomColor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256) // Blue
          ];
          // Return the color in rgba format with fixed alpha of 0.5
          return `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.5)`;
        };
        const labels = [];
        const dataGoal = [];
        const dataGoalObjective = [];
        const dataObjectiveBudget = [];
        goal.forEach(t => {
          labels.push(t.department);
          dataGoal.push(t.budget);
          dataGoalObjective.push(t.objectivesDetails.map(o => o.budget).reduce((a, b) => a + b, 0));
          dataObjectiveBudget.push(t.objectivesDetails.map(o => o.budget));
        });
        _this.donutData = {
          labels: labels,
          datasets: [{
            type: 'bar',
            label: 'Objective Budget',
            data: dataObjectiveBudget,
            backgroundColor: documentStyle.getPropertyValue('--green-500'),
            borderWidth: 1
          }, {
            type: 'bar',
            label: 'Total Budget',
            data: dataGoalObjective,
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderWidth: 1
          }]
        };
        _this.donutOptions = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false
            },
            legend: {
              labels: {
                color: textColor
              }
            },
            datalabels: {
              formatter: value => (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.abbreviateNumber)(value),
              color: textColor,
              font: {
                size: 15
              }
            }
          },
          scales: {
            x: {
              stacked: true,
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder,
                drawBorder: false
              }
            },
            y: {
              stacked: true,
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
      })();
    }
    expandAll() {
      if (!this.isExpanded) {
        this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');
      } else {
        this.expandedRows = {};
      }
      this.isExpanded = !this.isExpanded;
    }
    onChangeOffice(event = '') {
      //reset the goals
      this.goals = [];
      this.getAllObjectivesForTable(event?.value?.name);
    }
    onClearOffice() {
      this.goals = [];
      this.getAllObjectivesForTable();
    }
    calculateBudget(goals) {
      let total = 0;
      for (let calc of goals) {
        total += calc.budget;
      }
      this.totalBudget = total;
    }
    calculateUsed(goals) {
      let total = 0;
      for (let calc of goals) {
        total += calc.budgetMinusAllObjectiveBudget;
      }
      this.usedBudget = total;
    }
    calculateRemaining(goals) {
      let total = 0;
      for (let calc of goals) {
        total += calc.remainingBudget;
      }
      this.remainingTotal = total;
    }
    static #_ = this.ɵfac = function GoalDashboardComponent_Factory(t) {
      return new (t || GoalDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_2__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_2__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: GoalDashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 23,
      vars: 12,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["type", "bar", 3, "data", "options"], ["header", "Goal Summary"], [1, "align-items-center"], [1, "block", "text-base", "font-bold", "mb-1"], ["icon", "pi pi-money-bill", "styleClass", "m-2", 3, "label"], ["icon", "pi pi-money-bill", "styleClass", "m-2 mb-0", 3, "label"], [1, "mt-2"], ["optionLabel", "name", "placeholder", "Select Goal Under Each Offices", "styleClass", "w-full mb-2", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange", "onClear"], ["class", "my-auto", "width", "100%", "height", "18rem"], ["width", "18rem", "height", "18rem", 1, "my-auto"], ["width", "100%", "height", "18rem", 1, "my-auto"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "footer"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], ["styleClass", "m-1", 3, "label", "image"], ["colspan", "110"], [1, "p-3"], [3, "value"], [1, "pi", 3, "ngClass"], ["colspan", "4", 1, "text-right"], ["colspan", "5", 1, "text-right"]],
      template: function GoalDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Goals with Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, GoalDashboardComponent_Conditional_5_Template, 1, 2, "p-chart", 3)(6, GoalDashboardComponent_Conditional_6_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "p-card", 4)(10, "div", 5)(11, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "p-chip", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "p-chip", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9)(20, "p-dropdown", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function GoalDashboardComponent_Template_p_dropdown_ngModelChange_20_listener($event) {
            return ctx.selectedOffice = $event;
          })("onChange", function GoalDashboardComponent_Template_p_dropdown_onChange_20_listener($event) {
            return ctx.onChangeOffice($event);
          })("onClear", function GoalDashboardComponent_Template_p_dropdown_onClear_20_listener() {
            return ctx.onClearOffice();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, GoalDashboardComponent_Conditional_21_Template, 1, 0, "p-skeleton", 11)(22, GoalDashboardComponent_Conditional_22_Template, 5, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](5, !ctx.loading ? 5 : 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 8, ctx.officeListCombine));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("label", "Goal : ", ctx.goals.length, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("label", "Total Objective Budget : ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 10, ctx.allObjectiveBudget || 0), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("options", ctx.officeList)("ngModel", ctx.selectedOffice)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](21, ctx.loading ? 21 : 22);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.UIChart, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.RowToggler, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.Dropdown, primeng_chip__WEBPACK_IMPORTED_MODULE_18__.Chip, primeng_card__WEBPACK_IMPORTED_MODULE_19__.Card, primeng_skeleton__WEBPACK_IMPORTED_MODULE_20__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_6__.PesoPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_7__.ObjectiveNamesPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_7__.CompletedObjectivesPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_7__.IncompleteObjectivesPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_7__.FormatFrequencyPipe]
    });
  }
  return GoalDashboardComponent;
})();

/***/ }),

/***/ 1801:
/*!************************************************!*\
  !*** ./src/app/admin/goals/goals.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalsComponent: () => (/* binding */ GoalsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 99397);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26306);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 58504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-table/print-table.component */ 69990);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/multiselect */ 34055);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var _add_goal_adding_goal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-goal/adding-goal.component */ 35993);
/* harmony import */ var _add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-objective/add-objective.component */ 31172);
/* harmony import */ var _update_goal_update_goal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-goal/update-goal.component */ 89763);
/* harmony import */ var _update_objective_update_objective_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-objective/update-objective.component */ 93764);
/* harmony import */ var _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-files/add-files.component */ 89021);
/* harmony import */ var _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remarks/remarks.component */ 16417);
/* harmony import */ var _print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./print-qom/print-qom.component */ 2012);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pipes/dataFilter */ 42162);

































const _c0 = ["filter"];
function GoalsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r27.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function GoalsComponent_ng_template_10_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r29.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_11_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 49)(1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", option_r34.name, " ");
  }
}
function GoalsComponent_ng_template_11_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p-multiSelect", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onChange", function GoalsComponent_ng_template_11_ng_template_7_Template_p_multiSelect_onChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r36);
      const filter_r32 = restoredCtx.filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](filter_r32($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, GoalsComponent_ng_template_11_ng_template_7_ng_template_1_Template, 3, 1, "ng-template", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", value_r31)("options", ctx_r30.deptDropdownValue);
  }
}
function GoalsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "th", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, " Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "p-columnFilter", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "th", 39)(6, "p-columnFilter", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, GoalsComponent_ng_template_11_ng_template_7_Template, 2, 2, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "th", 39)(9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, " Campus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "p-columnFilter", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "th", 39)(13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "p-columnFilter", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "th", 39)(17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](19, "p-columnFilter", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "th", 39)(21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, " Progress Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "th", 39)(24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("showMenu", false);
  }
}
function GoalsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39);
      const goal_r37 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r38.getObjectives(goal_r37.id, goal_r37._id, goal_r37.goallistsId, goal_r37.goals, goal_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "td")(18, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "td")(21, "div", 53)(22, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39);
      const goal_r37 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r40.updateGoal(goal_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_i_click_23_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39);
      const goal_r37 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r41.deleteGoalDialog($event, goal_r37._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "p-confirmPopup", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 6, goal_r37.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 8, goal_r37.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 10, goal_r37.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 12, goal_r37.users.username), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](16, 14, goal_r37.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", goal_r37.completion_percentage, "% ");
  }
}
function GoalsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "No Goals found Admin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Loading Goals data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_41_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r43.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "p-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_41_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r45.addSubGoal(ctx_r45.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "p-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_41_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r46.printDocument(ctx_r46.subOnjectiveHeaderData == null ? null : ctx_r46.subOnjectiveHeaderData.department, ctx_r46.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_41_Template_p_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r44);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r47.printDocumentQOM(ctx_r47.subOnjectiveHeaderData == null ? null : ctx_r47.subOnjectiveHeaderData.department, ctx_r47.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function GoalsComponent_ng_template_41_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](40);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r48.onGlobalFilter(_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("outlined", true);
  }
}
function GoalsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "th", 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "th", 39)(7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "p-columnFilter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "th", 39)(11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, " Functional Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "p-columnFilter", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "th", 39)(15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, " Performance Indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "p-columnFilter", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "th", 39)(19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20, " Formula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "p-columnFilter", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "th", 39)(23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "p-columnFilter", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "th", 39)(27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, " Responsible Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "p-columnFilter", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "th", 67)(31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32, " Frequency Monitoring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](33, "p-columnFilter", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "th", 39)(35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36, " Data Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "p-columnFilter", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "th", 39)(39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](40, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](41, "p-columnFilter", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "th", 39)(43, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "p-columnFilter", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "th", 39)(47, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "p-columnFilter", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "th", 39)(51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, " Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](53, "p-columnFilter", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "th", 73)(55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](57, "p-columnFilter", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "th", 75)(59, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](60, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_43_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("rowspan", ctx_r51.objectiveDatas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, ctx_r51.subObjectiveHeaders + " (" + objectiveData_r49.strategic_objective + ")"), " ");
  }
}
function GoalsComponent_ng_template_43_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", objectiveData_r49.goalVsActual, " ");
  }
}
function GoalsComponent_ng_template_43_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", objectiveData_r49.goalVsActual + "%", " ");
  }
}
function GoalsComponent_ng_template_43_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", objectiveData_r49.countNonCumulative + " %", " ");
  }
}
function GoalsComponent_ng_template_43_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", objectiveData_r49.countNonCumulative, " ");
  }
}
function GoalsComponent_ng_template_43_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_43_Conditional_48_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r65);
      const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r63.viewFilesHistory(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function GoalsComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, GoalsComponent_ng_template_43_td_1_Template, 3, 4, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, GoalsComponent_ng_template_43_Conditional_3_Template, 1, 1)(4, GoalsComponent_ng_template_43_Conditional_4_Template, 1, 1)(5, GoalsComponent_ng_template_43_Conditional_5_Template, 1, 1)(6, GoalsComponent_ng_template_43_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](25, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](31, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](34, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "td")(39, "p-button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_43_Template_p_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r66.openRemarksDialog(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "td")(41, "p-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_43_Template_p_button_click_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r68.updateSubGoal(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](42, "p-confirmPopup", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "td")(45, "div", 81)(46, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_43_Template_i_click_46_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r69.viewFiles(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](48, GoalsComponent_ng_template_43_Conditional_48_Template, 1, 0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "td")(50, "div", 53)(51, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_43_Template_i_click_51_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r70.deleteSubGoal(objectiveData_r49.id, objectiveData_r49.goalId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](52, "p-confirmPopup", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const objectiveData_r49 = ctx.$implicit;
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", rowIndex_r50 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](3, objectiveData_r49.type_of_computation === "cumulative" && objectiveData_r49.target_type === "count" ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](4, objectiveData_r49.type_of_computation === "cumulative" && objectiveData_r49.target_type === "percent" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](5, objectiveData_r49.type_of_computation === "non-cumulative" && objectiveData_r49.target_type === "percent" ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](6, objectiveData_r49.type_of_computation === "non-cumulative" && objectiveData_r49.target_type === "count" ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" as of ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](8, 21, ctx_r9.currentDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", objectiveData_r49.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 24, objectiveData_r49.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 26, objectiveData_r49.performance_indicator), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 28, objectiveData_r49.formula), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](22, 30, objectiveData_r49.programs), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](25, 32, objectiveData_r49.responsible_persons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](28, 34, ctx_r9.formatText(objectiveData_r49.frequency_monitoring)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](31, 36, objectiveData_r49.data_source), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](34, 38, objectiveData_r49.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](37, 40, objectiveData_r49.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", true)("raised", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", true)("raised", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](48, ctx_r9.USERID !== (objectiveData_r49 == null ? null : objectiveData_r49.createdBy) ? 48 : -1);
  }
}
function GoalsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "No Objectives found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, " Loading Objectives data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 33)(1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_53_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r72.clear(_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "input", 87, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function GoalsComponent_ng_template_53_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r74.onGlobalFilter(_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r13.blockedPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r13.blockedPanel);
  }
}
function GoalsComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "th", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, " Objectives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "th", 39)(5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, " Frequency File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "th", 39)(8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "th", 39)(11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "th", 75)(14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_55_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "i", 92);
  }
}
function GoalsComponent_ng_template_55_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_55_Conditional_15_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r80);
      const AllObjectivesFile_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r78.deleteSubGoalFile(AllObjectivesFile_r75.id, AllObjectivesFile_r75.source));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function GoalsComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td")(7, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td")(13, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, GoalsComponent_ng_template_55_Conditional_14_Template, 1, 0, "i", 90)(15, GoalsComponent_ng_template_55_Conditional_15_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "p-confirmPopup", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesFile_r75 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 6, AllObjectivesFile_r75 == null ? null : AllObjectivesFile_r75.objectives == null ? null : AllObjectivesFile_r75.objectives.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r15.getFrequencyKeys(AllObjectivesFile_r75), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("href", ctx_r15.auth.domain + "/images/files/" + AllObjectivesFile_r75.source, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", ctx_r15.getIcon(AllObjectivesFile_r75.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](11, 8, AllObjectivesFile_r75.date_added, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](14, ctx_r15.blockedPanel ? 14 : 15);
  }
}
function GoalsComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p-button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_58_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r81.hideViewFileDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", true);
  }
}
function GoalsComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_65_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r84.clear(_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function GoalsComponent_ng_template_65_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r85);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](52);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r86.onGlobalFilter(_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "th", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "th", 39)(5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "th", 39)(8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, " Date Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "th", 39)(11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "td")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "td")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesHistoryFiles_r87 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("href", ctx_r22.auth.domain + "/images/files/" + AllObjectivesHistoryFiles_r87.source, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", ctx_r22.getIcon(AllObjectivesHistoryFiles_r87.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](6, 9, AllObjectivesHistoryFiles_r87.date_added, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r87.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](10, 12, AllObjectivesHistoryFiles_r87.updatedAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r87.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](AllObjectivesHistoryFiles_r87.status ? "Active" : "Deleted");
  }
}
function GoalsComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p-button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_ng_template_70_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r88.hideViewFileHistoryDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("text", true);
  }
}
const _c1 = () => ["goals", "budget", "department", "campus", "users.username", "createdAt", "options"];
const _c2 = () => ({
  width: "60rem",
  overflow: "auto"
});
const _c3 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c4 = () => ["", "target", "functional_objective", "performance_indicator", "formula", "programs", "department", "responsible_persons", "frequency_monitoring", "data_source", "budget", "createdAt", "Files", "options"];
const _c5 = () => ({
  "min-width": "50rem"
});
const _c6 = () => ({
  width: "60rem"
});
const _c7 = () => ["objectives.functional_objective", "date_added"];
const _c8 = () => ["name", "code", "options"];
let GoalsComponent = /*#__PURE__*/(() => {
  class GoalsComponent {
    constructor(messageService, formBuilder, confirmationService, goal, auth, obj, dept, fileService, camp, changeDetectorRef) {
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.confirmationService = confirmationService;
      this.goal = goal;
      this.auth = auth;
      this.obj = obj;
      this.dept = dept;
      this.fileService = fileService;
      this.camp = camp;
      this.changeDetectorRef = changeDetectorRef;
      this.getGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
      this.remarksEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_17__.EventEmitter();
      this.printQOMObjectiveTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_17__.EventEmitter();
      //table data
      this.goals = [];
      this.Alldepts = [];
      this.AllObjectivesFiles = [];
      this.AllObjectivesHistoryFiles = [];
      this.ViewBudget = [];
      this.deptDropdownCampusValue = [];
      this.loading = false;
      this.currentDate = Date.now();
      this.uploadedFiles = [];
      this.deptDropdownValue = [];
      this.ObjectivesGoals = [];
      //cards dialog
      this.subGoalObjective = false;
      this.addGoalDialogCard = false;
      this.addObjectiveGoalDialogCard = false;
      this.updateGoalDialogCard = false;
      this.viewObjectiveFileDialogCard = false;
      this.viewObjectiveFileHistoryDialogCard = false;
      this.parentPrintQom = {};
      this.valSwitch = false;
      // progress bar
      this.value = 0;
      // goalDataRemainingBudget: number = 0;
      this.goalBudget = 0;
      // set initial value
      this.onclickCompletionButton = [];
      this.isPrintableVisible = false;
      this.printingHead = false;
      this.nameValue = ''; // Declare variables to hold values
      this.officeValue = '';
      this.printingOfficeName = '';
      //add goal child component
      this.parentAddnewGoal = {};
      this.parentEditGoal = {};
      this.parentupdateObjective = {};
      this.parentAddnewObjective = {};
      // add files child component
      this.parentAddnewFile = {};
      this.parentPrintFile = {};
      this.parentPrintFileQom = {};
      this.frequencyOptions = [{
        name: 'yearly',
        code: 'yearly'
      }, {
        name: 'quarterly',
        code: 'quarterly'
      }, {
        name: 'semi_annual',
        code: 'semi_annual'
      }, {
        name: 'monthly',
        code: 'monthly'
      }];
      this.months = [];
      this.quarters = [];
      this.semi_annual = [];
      this.USERID = this.auth.getTokenUserID();
      this.ROLE = this.auth.getUserRole();
    }
    ngOnInit() {
      this.getAllObjectivesWithObjectives();
      this.getAllDept();
      this.dropdwonSelection = [{
        name: 'daily',
        code: 'Daily'
      }, {
        name: 'weekly',
        code: 'Weekly'
      }, {
        name: 'monthly',
        code: 'Monthly'
      }, {
        name: 'yearly',
        code: 'Yearly'
      }, {
        name: 'quarterly',
        code: 'Quarterly'
      }, {
        name: 'biannually',
        code: 'Biannually'
      }];
      this.cols = [{
        field: 'goals',
        header: 'Goals'
      }, {
        field: 'budget',
        header: 'Budget'
      }, {
        field: 'department',
        header: 'Department'
      }, {
        field: 'campus',
        header: 'Campus'
      }, {
        field: 'createdBy',
        header: 'CreatedBy'
      }, {
        field: 'createdAt',
        header: 'CreatedAt'
      }, {
        field: 'options',
        header: 'Options'
      }];
      this.createAddGoalForm();
      this.createUpdateGoalForm();
      this.createAddObjectiveGoalform();
      this.createaddFileForm();
      this.getAllCampuses();
      this.formGroupDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroup({
        selectedDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl()
      });
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl()
      });
      // progress bar
      this.interval = setInterval(() => {
        this.value = this.value + Math.floor(Math.random() * 10) + 1;
        if (this.value >= 100) {
          this.value = 100;
          clearInterval(this.interval);
        }
      }, 2000);
    }
    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.getGoalSubscription.unsubscribe();
    }
    createAddGoalForm() {
      this.addGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
      });
    }
    createaddFileForm() {
      this.addFileForm = this.formBuilder.group({
        files: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
      });
    }
    createAddObjectiveGoalform() {
      this.addObjectiveGoalform = this.formBuilder.group({
        // department: ['', [Validators.required]],
        userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        goalId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        functional_objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        performance_indicator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        formula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        programs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        responsible_persons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        clients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        timetable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        data_source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
      });
    }
    createUpdateGoalForm() {
      this.updateGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
      });
    }
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    getAllObjectivesWithObjectives() {
      const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject(); // Create a new Subject to emit success or failure
      this.loading = true;
      this.goal.fetch('get', 'goals', 'getAllObjectivesWithObjectives').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(data => {
        this.goals = data.goals;
        this.loading = false;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.catchError)(error => {
        this.loading = false; // Set loading to false on error
        this.messageService.add({
          severity: 'error',
          summary: 'Error getAllObjectivesWithObjectives',
          detail: error.message
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.throwError)(() => error); // Re-throw the error if necessary
      })).subscribe(); // Trigger the observable
      return resultSubject; // Return the subject to the caller
    }
    /*
     */
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        this.deptDropdownValue = data?.data[0];
      });
    }
    getObjectives(id, objectId = '', goallistsId = '', subHeader = '', goalData = []) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        //passed data needed for the subgoal table or adding table modal
        _this.subObjectiveGoalID = id;
        _this.goallistsId = goallistsId;
        _this.goal_ObjectId = objectId || goalData._id || '';
        //open the objective modal
        _this.subGoalObjective = true;
        //remaining budget needed in adding objective input
        //headers in objective table
        _this.subOnjectiveHeaderData = goalData;
        // this.goalDataRemainingBudget =
        //     goalDataRemainingBudget ||
        //     this.subOnjectiveHeaderData?.remainingBudget;
        // this.goalBudget = this.subOnjectiveHeaderData?.budget;
        _this.subObjectiveHeaders = _this.customTitleCase(subHeader || _this.subObjectiveHeaders || '');
        //get all goals with subobjective
        _this.loading = false;
        if (id) {
          _this.loading = true;
          _this.obj.fetch('get', 'objectives', `getAllByIdObjectives/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(_this.getGoalSubscription)).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              console.log(data);
              _this.objectiveDatas = data.Objectives;
              _this.goalBudget = data.budget;
              _this.loading = false;
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      })();
    }
    getObjectivesReload(id) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //get all goals with subobjective
        if (id) {
          _this2.loading = true;
          _this2.obj.fetch('get', 'objectives', `getAllByIdObjectives/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(_this2.getGoalSubscription)).subscribe(data => {
            _this2.objectiveDatas = data.Objectives;
            _this2.goalBudget = data.budget;
            let subBudget = data.Objectives.reduce((acc, e) => {
              return acc + e.budget;
            }, 0);
            // this.goalDataRemainingBudget = this.goalBudget - subBudget;
            _this2.changeDetectorRef.detectChanges();
            _this2.loading = false;
            _this2.makeChanges = false;
          });
        }
      })();
    }
    getAllFilesFromObjectiveLoad(id, objectiveID) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this3.loading = true;
          _this3.fileService.getAllFilesFromObjective(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(_this3.getGoalSubscription)).subscribe(data => {
            _this3.AllObjectivesFiles = data.data;
            _this3.loading = false;
          });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      })();
    }
    getAllFilesHistoryFromObjectiveLoad(id, objectiveID) {
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.loading = true;
        _this4.fileService.getAllFilesHistoryFromObjectiveLoad(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(_this4.getGoalSubscription)).subscribe(data => {
          _this4.AllObjectivesHistoryFiles = data.data;
          _this4.changeDetectorRef.detectChanges();
          _this4.loading = false;
        });
        return true;
      })();
    }
    addSubGoal(data) {
      this.parentAddnewObjective = {
        addObjective: true,
        goallistsId: this.goallistsId,
        goalId: this.subObjectiveGoalID,
        goal_ObjectId: this.goal_ObjectId
      };
    }
    addFiles(objectiveData) {
      this.parentAddnewFile = {
        addFile: true,
        objectiveId: this.childComponentAddfileObjectiveId
      };
    }
    addGoal() {
      this.parentAddnewGoal = {
        addGoal: true
      };
    }
    updateGoal(goal) {
      this.parentEditGoal = {
        editGoal: true,
        goal: goal,
        updateGoalID: goal.id
      };
    }
    updateSubGoal(data) {
      console.log({
        updateSubGoal: data
      });
      this.parentupdateObjective = {
        editGoal: true,
        data
      };
    }
    receivedUpdateObjective(editObjectiveMessageResults) {
      const {
        success,
        id: goalID
      } = editObjectiveMessageResults;
      //track if changes is made for the table to reload
      this.makeChanges = true;
      this.getObjectivesReload(goalID);
      this.getAllObjectivesWithObjectives();
    }
    deleteGoalDialog(event, _id) {
      this.confirmationService.confirm({
        key: 'deleteGoal',
        target: event.target || new EventTarget(),
        message: 'Stop! Deleting this goal will delete all objectives under it?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.goal.fetch('put', 'goals', 'deleteGoals', {
            _id: _id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
            if (data.success) {
              this.getAllObjectivesWithObjectives();
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
              this.updateGoalDialogCard = false;
              this.updateGoalform.reset();
            } else {
              this.messageService.add({
                severity: 'error  ',
                summary: 'Error',
                detail: data.message
              });
            }
          });
        }
      });
    }
    deleteSubGoal(id, goalId) {
      this.confirmationService.confirm({
        key: 'deleteSubGoal',
        target: event.target || new EventTarget(),
        message: 'Deleting Objectives Will Delete All Files. Continue?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.loading = true;
          this.goal.fetch('put', 'objectives', 'setInactiveObjectives', {
            id: id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
            if (data.success) {
              this.getObjectivesReload(goalId);
              //tag is as changes so if close will recalculate the data
              this.makeChanges = true;
              this.loading = false;
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
              // this.updateGoalDialogCard = false;
              // this.updateGoalform.reset();
            } else {
              this.messageService.add({
                severity: 'error  ',
                summary: 'Error',
                detail: data.message
              });
            }
          });
        }
      });
    }
    deleteSubGoalFile(id, source) {
      // alert(`delete sub goal file ${id} ${source}`);
      this.confirmationService.confirm({
        key: 'deleteSubGoalFile',
        target: event.target || new EventTarget(),
        message: 'Delete File',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.fileService.deleteFileObjective({
            id: id,
            source: source
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
            if (data.success) {
              this.getAllFilesFromObjectiveLoad(this.USERID, this.objectiveIDforFile);
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
            } else {
              this.messageService.add({
                severity: 'error  ',
                summary: 'Error',
                detail: data.message
              });
            }
          });
        }
      });
    }
    viewFiles(objectiveData) {
      //block view files if complete
      this.blockedPanel = objectiveData.complete;
      // alert(objectiveID);
      this.viewObjectiveFileDialogCard = true;
      this.objectiveIDforFile = objectiveData.id;
      //use this when triggering the child component for adding file
      this.childComponentAddfileObjectiveId = objectiveData.id;
      // alert(JSON.stringify(objectiveData));
      this.getAllFilesFromObjectiveLoad(this.USERID, objectiveData.id);
    }
    viewFilesHistory(objectiveData) {
      this.viewObjectiveFileHistoryDialogCard = true;
      this.getAllFilesHistoryFromObjectiveLoad(objectiveData?.users?.id, objectiveData.id);
    }
    clearAddObjectiveGoalDialogCardDatas() {
      this.addObjectiveGoalDialogCard = false;
      this.updateObjectiveGoalFlag = false;
      this.tobeUpdatedSubGoal = null;
      this.addObjectiveGoalform.reset();
    }
    hidviewObjectRefetch() {}
    hideViewObjectiveTable(id) {
      this.subGoalObjective = false;
      this.subObjectiveGoalID = null;
      this.objectiveDatas = [];
      if (this.makeChanges) {
        this.getAllObjectivesWithObjectives().subscribe(isSuccessful => {
          if (isSuccessful) {
            this.makeChanges = false; // Reset makeChanges only if the operation was successful
          } else {
            // Handle error scenario if needed
          }
        });
      }
      //after they click the switch it and close the dialog will refetch
      // if (id) {
      //     this.hidviewObjectRefetch(id);
      // }
    }

    hideViewFileDialogCard() {
      // destroy the data needed on that dialog
      this.objectiveIDforFile = null;
      this.viewObjectiveFileDialogCard = false;
    }
    hideViewFileHistoryDialogCard() {
      this.viewObjectiveFileHistoryDialogCard = false;
    }
    getFrequencyKeys(objectiveFile) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_2__.getFrequencyKeys)(objectiveFile);
    }
    // viewObjectiveFileHistoryDialogCard
    getIcon(name) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_2__.getIcon)(name);
    }
    customTitleCase(str) {
      // Split the string into words
      const words = str.split(/\s+/);
      const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      // Join the formatted words back into a string
      return formattedWords.join(' ');
    }
    clear(table) {
      table.clear();
      this.filter.nativeElement.value = '';
    }
    closeSubGoalTable() {
      this.subGoalObjective = false;
      this.objectiveDatas = [];
    }
    onGlobalFilter(table, event) {
      table.filterGlobal(event.target.value, 'contains');
    }
    receivedAddGoalEvent(addGoalMessageResults) {
      //track if changes is made for the table to reload
      this.makeChanges = true;
      if (addGoalMessageResults.success) {
        this.getAllObjectivesWithObjectives().subscribe(isSuccessful => {
          if (isSuccessful) {
            this.makeChanges = false; // Reset makeChanges only if the operation was successful
          } else {
            // Handle error scenario if needed
          }
        });
      }
    }
    receivedAddFileEvent(addNewFileEvent) {
      const {
        USERID,
        objectiveId,
        viewObjectiveFileDialogCard
      } = addNewFileEvent;
      this.loading = true;
      this.getAllFilesFromObjectiveLoad(USERID, objectiveId).then(data => {
        if (data.success) {
          // Run the code below if the return is true
          this.viewObjectiveFileDialogCard = viewObjectiveFileDialogCard;
          this.loading = false;
        } else {
          // Notify if the return is false
          // Handle error scenario if needed
        }
      }).catch(error => {
        // Handle error scenario if needed
      });
    }
    receivedEditGoalEvent(editGoalMessageResults) {
      //track if changes is made for the table to reload
      this.makeChanges = true;
      this.getAllObjectivesWithObjectives().subscribe(isSuccessful => {
        if (isSuccessful) {
          this.makeChanges = false; // Reset makeChanges only if the operation was successful
        } else {
          // Handle error scenario if needed
        }
      });
    }
    receivedAddObjectiveEvent(id) {
      //track if changes is made for the table to reload
      this.makeChanges = true;
      this.getObjectivesReload(id);
    }
    printDocument() {
      //   this.printingHead = true;
      this.parentPrintFile = {
        printFile: true,
        objectData: this.objectiveDatas,
        printingHead: true,
        subObjectiveHeaders: this.subObjectiveHeaders,
        subOnjectiveHeaderData: this.subOnjectiveHeaderData?.department,
        printingOfficeName: this.printingOfficeName
      };
    }
    // printDocumentQOM() {
    //     //   this.printingHead = true;
    //     this.parentPrintFileQom = {
    //         printFile: true,
    //         objectData: this.objectiveDatas,
    //         printingHead: true,
    //         subObjectiveHeaders: this.subObjectiveHeaders,
    //         subOnjectiveHeaderData: this.subOnjectiveHeaderData?.department,
    //         printingOfficeName: this.printingOfficeName,
    //     };
    // }
    ngAfterViewInit() {}
    openRemarksDialog(event) {
      this.parentRemarks = {
        remarksDialogCard: true,
        data: event
      };
    }
    formatText(text) {
      return text.replace(/_/g, ' ');
    }
    receivedPrintQOMObjectiveTableEvent(event) {
      console.log({
        receivedPrintQOMObjectiveTableEvent: event
      });
      const {
        header,
        data,
        printQOMObjectiveTable
      } = event;
      this.parentPrintQom = {
        printQOMObjectiveTable: printQOMObjectiveTable,
        data: data,
        header: header
      };
    }
    printDocumentQOM(header, data) {
      console.log('printDocumentQOM');
      this.parentPrintQom = {
        printQOMObjectiveTable: true,
        data: data,
        header: header
      };
      // this.printQOMObjectiveTableEvent.emit({
      //     printQOMObjectiveTable: true,
      //     data: data,
      //     header: header,
      // });
    }
    static #_ = this.ɵfac = function GoalsComponent_Factory(t) {
      return new (t || GoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_24__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_24__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_3__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_5__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_6__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_7__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_8__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
      type: GoalsComponent,
      selectors: [["app-goals"]],
      viewQuery: function GoalsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_print_table_print_table_component__WEBPACK_IMPORTED_MODULE_1__.PrintTableComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.printTableComponent = _t.first);
        }
      },
      outputs: {
        remarksEvent: "remarksEvent",
        printQOMObjectiveTableEvent: "printQOMObjectiveTableEvent"
      },
      decls: 74,
      vars: 84,
      consts: [[3, "autoZIndex"], [1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["pButton", "", "icon", "pi pi-compass", "label", "Add Goal", 3, "click"], ["id", "goalTable", "dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [3, "addNewGoal", "childAddGoalEvent"], [3, "editGoal", "childEditGoalEvent"], ["responsiveLayout", "stack", 3, "visible", "breakpoints", "maximizable", "visibleChange", "onHide"], [1, "col-12", "md:col-6", "p-6", "text-center", "md:text-left", "flex", "align-items-center", "surface-section", "text-800"], [1, "block", "text-6xl", "font-bold", "mb-1"], [1, "text-6xl", "text-primary", "font-bold", "mb-3"], [1, "mt-0", "mb-4", "text-700", "line-height-3"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt2", ""], ["pTemplate", "body", "styleClass", "custom-table-style"], [3, "addNewObjective", "childAddObjectiveEvent"], [3, "updateObjective", "childUpdateObjective"], ["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], ["dt3", ""], ["pTemplate", "footer"], [3, "addNewFile", "childAddFile"], [3, "printFile"], [3, "printQOMFile"], [3, "remarksFromGoalParent"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "goals", "display", "menu", "placeholder", "Search by Goals"], ["field", "department", "matchMode", "in", 3, "showMenu"], ["pTemplate", "filter"], ["type", "text", "field", "campus", "display", "menu", "placeholder", "Search by Campus"], ["type", "text", "field", "users.username", "display", "menu", "placeholder", "Search by Created By"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["id", "departmentSelectId", "placeholder", "Search by Department", "optionLabel", "name", "optionValue", "name", 3, "ngModel", "options", "onChange"], ["pTemplate", "item"], [1, "inline-block", "vertical-align-middle"], [1, "ml-1", "mt-1"], ["pButton", "", "pRipple", "", "type", "button", "pTooltip", "Show/Add objectives", "tooltipPosition", "top", 1, "p-button-help", "p-button-text", 3, "click"], [1, "text-center"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteGoal"], ["colspan", "8"], ["icon", "pi pi-plus", "severity", "success", "pTooltip", "Add Objectives", "tooltipPosition", "top", 3, "outlined", "click"], ["icon", "pi pi-file-pdf", "label", "QOAP", "severity", "info", "pTooltip", "Print PDF", "tooltipPosition", "top", 3, "outlined", "click"], ["icon", "pi pi-file-pdf", "label", "QOM", "severity", "success", "pTooltip", "Print PDF", "tooltipPosition", "top", 3, "outlined", "click"], ["type", "text", "field", "target", "display", "menu", "placeholder", "Search by Target"], ["type", "text", "field", "functional_objective", "display", "menu", "placeholder", "Search by Functional Objective"], ["type", "text", "field", "performance_indicator", "display", "menu", "placeholder", "Search by Performance Indicator"], ["type", "text", "field", "formula", "display", "menu", "placeholder", "Search by Formula"], ["type", "text", "field", "programs", "display", "menu", "placeholder", "Search by Programs"], ["type", "text", "field", "responsible_persons", "display", "menu", "placeholder", "Search by Responsible Persons"], [2, "min-width", "4rem"], ["type", "text", "field", "frequency_monitoring", "display", "menu", "placeholder", "Search by Frequency Monitoring"], ["type", "text", "field", "data_source", "display", "menu", "placeholder", "Search by Data Source"], ["type", "text", "field", "budget", "display", "menu", "placeholder", "Search by Budget"], ["type", "text", "field", "remarks", "display", "menu", "placeholder", "Search by Remarks"], ["type", "text", "field", "complete", "display", "menu", "placeholder", "Search by Completion"], [2, "min-width", "6rem"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "Search by Files"], [2, "min-width", "9rem"], [4, "ngIf"], ["severity", "help", "icon", "\n                              pi pi-comments\n                            ", "label", "Remarks", 3, "text", "raised", "click"], ["severity", "help", "icon", "\n                                  pi pi-external-link\n                                ", "label", "View", 3, "text", "raised", "click"], ["key", "updateObjectiveComplete"], ["confirmPopupRef", ""], [1, "flex", "flex-row", "align-items-center"], ["pTooltip", "File List", "tooltipPosition", "top", 1, "pi", "pi-folder", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-folder-open", "cursor-pointer", 3, "click"], ["pTooltip", "File History", "tooltipPosition", "top", "class", "pi pi-cog text-2xl hover:text-4xl text-yellow-400 transition ease-in-out duration-200 hover:pi-cog cursor-pointer"], ["key", "deleteSubGoal"], ["pTooltip", "File History", "tooltipPosition", "top", 1, "pi", "pi-cog", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-cog", "cursor-pointer", 3, "click"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "disabled", "click"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "disabled", "input"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], ["class", "pi pi-trash text-xl", "style", "color: #868585"], ["key", "deleteSubGoalFile"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#868585"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"]],
      template: function GoalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "p-toast", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function GoalsComponent_Template_button_click_7_listener() {
            return ctx.addGoal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p-table", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, GoalsComponent_ng_template_10_Template, 6, 0, "ng-template", 9)(11, GoalsComponent_ng_template_11_Template, 26, 1, "ng-template", 10)(12, GoalsComponent_ng_template_12_Template, 25, 17, "ng-template", 11)(13, GoalsComponent_ng_template_13_Template, 3, 0, "ng-template", 12)(14, GoalsComponent_ng_template_14_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "app-adding-goal", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("childAddGoalEvent", function GoalsComponent_Template_app_adding_goal_childAddGoalEvent_15_listener($event) {
            return ctx.receivedAddGoalEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "app-update-goal", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("childEditGoalEvent", function GoalsComponent_Template_app_update_goal_childEditGoalEvent_16_listener($event) {
            return ctx.receivedEditGoalEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "p-dialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_17_listener($event) {
            return ctx.subGoalObjective = $event;
          })("onHide", function GoalsComponent_Template_p_dialog_onHide_17_listener() {
            return ctx.hideViewObjectiveTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 1)(19, "div", 17)(20, "section")(21, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](23, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](29, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 17)(31, "section")(32, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](34, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 2)(39, "p-table", 21, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, GoalsComponent_ng_template_41_Template, 9, 3, "ng-template", 9)(42, GoalsComponent_ng_template_42_Template, 61, 0, "ng-template", 10)(43, GoalsComponent_ng_template_43_Template, 53, 43, "ng-template", 23)(44, GoalsComponent_ng_template_44_Template, 3, 0, "ng-template", 12)(45, GoalsComponent_ng_template_45_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "app-add-objective", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("childAddObjectiveEvent", function GoalsComponent_Template_app_add_objective_childAddObjectiveEvent_46_listener($event) {
            return ctx.receivedAddObjectiveEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "app-update-objective", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("childUpdateObjective", function GoalsComponent_Template_app_update_objective_childUpdateObjective_47_listener($event) {
            return ctx.receivedUpdateObjective($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "p-dialog", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_48_listener($event) {
            return ctx.viewObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "div", 1)(50, "div", 2)(51, "p-table", 21, 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](53, GoalsComponent_ng_template_53_Template, 6, 2, "ng-template", 9)(54, GoalsComponent_ng_template_54_Template, 16, 0, "ng-template", 10)(55, GoalsComponent_ng_template_55_Template, 17, 11, "ng-template", 11)(56, GoalsComponent_ng_template_56_Template, 3, 0, "ng-template", 12)(57, GoalsComponent_ng_template_57_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](58, GoalsComponent_ng_template_58_Template, 1, 1, "ng-template", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "app-add-files", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("childAddFile", function GoalsComponent_Template_app_add_files_childAddFile_59_listener($event) {
            return ctx.receivedAddFileEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "p-dialog", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_60_listener($event) {
            return ctx.viewObjectiveFileHistoryDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "div", 1)(62, "div", 2)(63, "p-table", 21, 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](65, GoalsComponent_ng_template_65_Template, 6, 0, "ng-template", 9)(66, GoalsComponent_ng_template_66_Template, 13, 0, "ng-template", 10)(67, GoalsComponent_ng_template_67_Template, 14, 15, "ng-template", 11)(68, GoalsComponent_ng_template_68_Template, 3, 0, "ng-template", 12)(69, GoalsComponent_ng_template_69_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, GoalsComponent_ng_template_70_Template, 1, 1, "ng-template", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](71, "app-print-table", 30)(72, "app-print-qom", 31)(73, "app-remarks", 32);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("autoZIndex", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.goals)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](71, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("addNewGoal", ctx.parentAddnewGoal);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("editGoal", ctx.parentEditGoal);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](72, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("visible", ctx.subGoalObjective)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](73, _c3))("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](23, 61, ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.users == null ? null : ctx.subOnjectiveHeaderData.users.username), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 63, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.campus) || "Campus"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](29, 65, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.department) || "Department"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](34, 67, ctx.subObjectiveHeaders), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](37, 69, ctx.goalBudget || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.objectiveDatas)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](74, _c4))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](75, _c5))("rowHover", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("addNewObjective", ctx.parentAddnewObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("updateObjective", ctx.parentupdateObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](76, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("header", ctx.blockedPanel ? "Files Locked: Objective Marked Complete" : "File List")("visible", ctx.viewObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](77, _c3))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.AllObjectivesFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](78, _c7))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](79, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("addNewFile", ctx.parentAddnewFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](80, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("header", "File HistoryList")("visible", ctx.viewObjectiveFileHistoryDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](81, _c3))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.AllObjectivesHistoryFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](82, _c8))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](83, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("printFile", ctx.parentPrintFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("printQOMFile", ctx.parentPrintQom);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("remarksFromGoalParent", ctx.parentRemarks);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_26__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_27__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_24__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_27__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_28__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_28__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_29__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputText, primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__.MultiSelect, primeng_toast__WEBPACK_IMPORTED_MODULE_32__.Toast, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_33__.ConfirmPopup, _add_goal_adding_goal_component__WEBPACK_IMPORTED_MODULE_9__.AddingGoalComponent, _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_1__.PrintTableComponent, _add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_10__.AddObjectiveComponent, _update_goal_update_goal_component__WEBPACK_IMPORTED_MODULE_11__.UpdateGoalComponent, _update_objective_update_objective_component__WEBPACK_IMPORTED_MODULE_12__.UpdateObjectiveComponent, _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_13__.AddFilesComponent, _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_14__.RemarksComponent, _print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_15__.PrintQomComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_16__.PesoPipe],
      styles: ["@charset \"UTF-8\";\n.custom-table-style[_ngcontent-%COMP%]   td[rowspan][_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  cursor: default !important;\n}\n\n.custom-table-style[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not([rowspan]) {\n  background-color: #f0f0f0;\n}\n\n  #goalTable .p-datatable-wrapper {\n  height: 53vh !important;\n}\n\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"]
    });
  }
  return GoalsComponent;
})();

/***/ }),

/***/ 66851:
/*!****************************************************************!*\
  !*** ./src/app/admin/goals/objectives/objectives.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectivesComponent: () => (/* binding */ ObjectivesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dynamicdialog */ 65118);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ 78743);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputnumber */ 75167);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/dataFilter */ 42162);
























const _c0 = ["filter"];
function ObjectivesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_7_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "p-columnFilter", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 44)(6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Campus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "p-columnFilter", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 44)(10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Office ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-columnFilter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 44)(14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Goal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "p-columnFilter", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 44)(18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Goal Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "p-columnFilter", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 44)(22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Functional Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "p-columnFilter", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 44)(26, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Performance Indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "p-columnFilter", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 44)(30, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "p-columnFilter", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th", 44)(34, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "p-columnFilter", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "th", 44)(38, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Responsible Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "p-columnFilter", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 44)(42, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Clients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "p-columnFilter", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "th", 57)(46, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " Frequency Monitoring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "p-columnFilter", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "th", 44)(50, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Data Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "p-columnFilter", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "th", 44)(54, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "p-columnFilter", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 44)(58, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "p-columnFilter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th", 44)(62, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "p-columnFilter", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th", 63)(66, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "p-columnFilter", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "th", 65)(70, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "td")(47, "p-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadingChange", function ObjectivesComponent_ng_template_9_Template_p_button_loadingChange_47_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.onclickCompletionButton[rowIndex_r25] = $event);
    })("click", function ObjectivesComponent_ng_template_9_Template_p_button_click_47_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const objectiveData_r24 = restoredCtx.$implicit;
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.updateObjectiveComplete($event, objectiveData_r24, rowIndex_r25, objectiveData_r24 == null ? null : objectiveData_r24.complete));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "p-confirmPopup", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "td")(51, "div", 69)(52, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_9_Template_i_click_52_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.viewFiles(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_9_Template_i_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.viewFilesHistory(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "td")(56, "div", 72)(57, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_9_Template_i_click_57_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.updateSubGoal(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_9_Template_i_click_58_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.deleteSubGoal(objectiveData_r24 == null ? null : objectiveData_r24.id, objectiveData_r24 == null ? null : objectiveData_r24.goalId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "p-confirmPopup", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const objectiveData_r24 = ctx.$implicit;
    const rowIndex_r25 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 21, objectiveData_r24 == null ? null : objectiveData_r24.users.username), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 23, objectiveData_r24 == null ? null : objectiveData_r24.goals.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 25, objectiveData_r24 == null ? null : objectiveData_r24.users.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 27, objectiveData_r24 == null ? null : objectiveData_r24.goals.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 29, objectiveData_r24 == null ? null : objectiveData_r24.goals.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 31, objectiveData_r24 == null ? null : objectiveData_r24.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 33, objectiveData_r24 == null ? null : objectiveData_r24.performance_indicator), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 35, objectiveData_r24 == null ? null : objectiveData_r24.target), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 37, objectiveData_r24 == null ? null : objectiveData_r24.formula), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 39, objectiveData_r24 == null ? null : objectiveData_r24.responsible_persons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 41, objectiveData_r24 == null ? null : objectiveData_r24.clients), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 43, objectiveData_r24 == null ? null : objectiveData_r24.frequency_monitoring), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 45, objectiveData_r24 == null ? null : objectiveData_r24.data_source), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 47, objectiveData_r24 == null ? null : objectiveData_r24.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](45, 49, objectiveData_r24 == null ? null : objectiveData_r24.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true)("raised", true)("severity", (objectiveData_r24 == null ? null : objectiveData_r24.complete) ? "success" : "warning")("icon", (objectiveData_r24 == null ? null : objectiveData_r24.complete) ? "pi pi-check" : "pi pi-times")("label", (objectiveData_r24 == null ? null : objectiveData_r24.complete) ? "Yes" : "No")("loading", ctx_r3.onclickCompletionButton[rowIndex_r25]);
  }
}
function ObjectivesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Objectives found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Loading Objectives data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 78, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_17_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.onGlobalFilter(_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.blockedPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.blockedPanel);
  }
}
function ObjectivesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 65)(8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 83);
  }
}
function ObjectivesComponent_ng_template_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_19_Conditional_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);
      const AllObjectivesFile_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r41.deleteSubGoalFile(AllObjectivesFile_r38.id, AllObjectivesFile_r38.source));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ObjectivesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ObjectivesComponent_ng_template_19_Conditional_9_Template, 1, 0, "i", 81)(10, ObjectivesComponent_ng_template_19_Conditional_10_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "p-confirmPopup", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesFile_r38 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r9.auth.domain + "/images/files/" + AllObjectivesFile_r38.source, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r9.getIcon(AllObjectivesFile_r38.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 4, AllObjectivesFile_r38.date_added, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](9, ctx_r9.blockedPanel ? 9 : 10);
  }
}
function ObjectivesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_22_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.hideViewFileDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true);
  }
}
function ObjectivesComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_85_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_85_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.onGlobalFilter(_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 44)(8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Date Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th", 44)(11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesHistoryFiles_r50 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r16.auth.domain + "/images/files/" + AllObjectivesHistoryFiles_r50.source, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r16.getIcon(AllObjectivesHistoryFiles_r50.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 9, AllObjectivesHistoryFiles_r50.date_added, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r50.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 12, AllObjectivesHistoryFiles_r50.updatedAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r50.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](AllObjectivesHistoryFiles_r50.status ? "Active" : "Deleted");
  }
}
function ObjectivesComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_90_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r51.hideViewFileHistoryDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true);
  }
}
const _c1 = () => ["users.username", "goals.campus", "users.department", "goals.goals", "goals.budget", "functional_objective", "performance_indicator", "target", "formula", "programs", "department", "responsible_persons", "clients", "frequency_monitoring", "data_source", "budget", "createdAt", "Files", "options"];
const _c2 = () => ({
  "min-width": "50rem"
});
const _c3 = () => ({
  width: "60rem"
});
const _c4 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c5 = () => ["name", "code", "options"];
const _c6 = () => ({
  width: "50rem"
});
let ObjectivesComponent = /*#__PURE__*/(() => {
  class ObjectivesComponent {
    constructor(obj, messageService, confirmationService, dialogService, fileService, formBuilder, auth, goal) {
      this.obj = obj;
      this.messageService = messageService;
      this.confirmationService = confirmationService;
      this.dialogService = dialogService;
      this.fileService = fileService;
      this.formBuilder = formBuilder;
      this.auth = auth;
      this.goal = goal;
      this.objectiveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.objectives = [];
      this.objectiveDatas = [];
      this.onclickCompletionButton = [];
      this.AllObjectivesFiles = [];
      this.uploadedFiles = [];
      this.AllObjectivesHistoryFiles = [];
      this.loading = true;
      this.addObjectiveGoalDialogCard = false;
      this.USERID = this.auth.getTokenUserID();
      this.getAllobjectivesGoalsUsers();
    }
    ngOnInit() {
      // this.getAllobjectives();
      this.getAllobjectivesGoalsUsers();
      this.createaddFileForm();
      this.dropdwonSelection = [{
        name: 'daily',
        code: 'Daily'
      }, {
        name: 'weekly',
        code: 'Weekly'
      }, {
        name: 'monthly',
        code: 'Monthly'
      }, {
        name: 'yearly',
        code: 'Yearly'
      }, {
        name: 'quarterly',
        code: 'Quarterly'
      }, {
        name: 'biannually',
        code: 'Biannually'
      }];
      this.createAddObjectiveGoalform();
      this.formGroupDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        selectedDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
      });
    }
    createaddFileForm() {
      this.addFileForm = this.formBuilder.group({
        files: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
    }
    getAllobjectives() {
      this.loading = true;
      this.obj.fetch('get', 'objectives', 'getAllObjectives').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
        this.objectiveDatas = data.Objectives;
        for (let i = 0; i < this.objectiveDatas.length; i++) {
          this.onclickCompletionButton[i] = false;
        }
        this.loading = false;
      });
    }
    getAllobjectivesGoalsUsers() {
      this.loading = true;
      this.obj.fetch('get', 'objectives', 'getAllByIdObjectivesWithGoalsAndUsers').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
        this.objectiveDatas = data.data;
        this.loading = false;
      });
    }
    createAddObjectiveGoalform() {
      this.addObjectiveGoalform = this.formBuilder.group({
        // department: ['', [Validators.required]],
        userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        goalId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        functional_objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        performance_indicator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        formula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        programs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        responsible_persons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        clients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        // timetable: ['', [Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        data_source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
    }
    updateObjectiveComplete(event, data, index = 0, completeStatus) {
      var _this = this;
      this.onclickCompletionButton[index] = true;
      let goalIDs = data.goalId;
      this.confirmationService.confirm({
        key: 'updateObjectiveComplete',
        target: event.target,
        message: `Marking Objective ${completeStatus ? 'as Incomplete' : ' as Complete? Will Lock Files'}, Are You Sure?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          this.loading = true;
          this.obj.fetch('put', 'objectives', 'updateobjectivecompletion', {
            id: data.id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
              if (results.success) {
                _this.messageService.add({
                  severity: 'success  ',
                  summary: 'Done',
                  detail: results.message,
                  life: 5000
                });
                // this.getAllobjectives();
                _this.getAllobjectivesGoalsUsers();
                _this.loading = false;
              } else {
                _this.messageService.add({
                  severity: 'error  ',
                  summary: 'Error',
                  detail: results.message
                });
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          // this.onclickCompletionButton = false;
          this.onclickCompletionButton[index] = false;
        },
        reject: () => {
          this.onclickCompletionButton[index] = false;
          this.messageService.add({
            severity: 'info',
            summary: 'Done',
            detail: 'Nothing happens',
            life: 3000
          });
        }
      });
    }
    viewFiles(objectiveData) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //block view files if complete
        _this2.blockedPanel = objectiveData.complete;
        // alert(objectiveID);
        _this2.viewObjectiveFileDialogCard = true;
        _this2.objectiveIDforFile = objectiveData.id;
        // alert(JSON.stringify(objectiveData));
        _this2.getAllFilesFromObjectiveLoad(_this2.USERID, objectiveData.id);
      })();
    }
    hideViewFileDialogCard() {
      // destroy the data needed on that dialog
      this.objectiveIDforFile = null;
      this.viewObjectiveFileDialogCard = false;
    }
    addFiles(objectiveData) {
      // alert(objectiveID);
      this.addObjectiveFileDialogCard = true;
      // alert(JSON.stringify(objectiveData));
    }

    getAllFilesFromObjectiveLoad(id, objectiveID) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.loading = true;
        _this3.fileService.getAllFilesFromObjective(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this3.objectiveSubscription)).subscribe(data => {
          _this3.AllObjectivesFiles = data.data;
          _this3.loading = false;
        });
        return true;
      })();
    }
    onUpload(event) {
      for (const file of event.files) {
        this.uploadedFiles.push(file);
      }
      if (!(0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.validateFileType)(this.uploadedFiles)) {
        this.messageService.add({
          severity: 'error',
          summary: 'File Unsupported',
          detail: 'Unsupported file type! Please select only images, documents, or spreadsheets'
        });
        event.preventDefault();
      }
      this.fileService.addMultipleFiles(this.USERID, this.objectiveIDforFile, this.uploadedFiles).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
        // after adding files it did not add the new files just reload, clear the data to fix the issue
        this.AllObjectivesFiles = [];
        this.getAllFilesFromObjectiveLoad(this.USERID, this.objectiveIDforFile);
        if (data.success) {
          this.messageService.add({
            severity: 'success  ',
            summary: 'View the files',
            detail: 'Files added successfully'
          });
          this.addObjectiveFileDialogCard = false;
          this.addFileForm.reset();
          this.uploadedFiles = [];
          this.viewObjectiveFileDialogCard = false;
        } else {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    clearAddObjectiveGoalDialogCardDatas() {
      this.addObjectiveGoalDialogCard = false;
      this.updateObjectiveGoalFlag = false;
      this.tobeUpdatedSubGoal = null;
      this.addObjectiveGoalform.reset();
    }
    updateSubGoal(data) {
      this.tobeUpdatedSubGoal = data.id;
      //reset every after click
      this.addObjectiveGoalform.reset();
      // this.formGroupDropdown.reset();
      this.updateObjectiveGoalFlag = true;
      this.addObjectiveGoalDialogCard = true;
      this.formGroupDropdown.setValue({
        selectedDropdown: this.dropdwonSelection.find(dept => dept.name === data.frequency_monitoring) || {
          name: 'daily',
          code: 'Daily'
        }
      });
      this.addObjectiveGoalform.patchValue({
        // department: ['', [Validators.required]],
        userId: data.userId,
        goalId: data.goalId,
        functional_objective: data.functional_objective,
        performance_indicator: data.performance_indicator,
        target: data.target,
        formula: data.formula,
        programs: data.programs,
        responsible_persons: data.responsible_persons,
        clients: data.clients,
        // timetable: [
        //     new Date(data.timetable[0]),
        //     new Date(data.timetable[1]),
        // ],
        frequency_monitoring: data.frequency_monitoring,
        data_source: data.data_source,
        budget: data.budget
      });
    }
    updateSubObjectiveGoalDialogExec(form) {
      this.loading = true;
      form.value.id = this.tobeUpdatedSubGoal;
      form.value.frequency_monitoring = this.formGroupDropdown.value.selectedDropdown.name;
      this.obj.fetch('put', 'objectives', 'updateObjectives', form.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
        if (data.success) {
          // this.getAllObjectivesWithObjectives();
          // this.getObjectives(this.subObjectiveGoalID);
          // this.getAllobjectives();
          this.getAllobjectivesGoalsUsers();
          this.getAllFilesFromObjectiveLoad(this.USERID, this.objectiveIDforFile);
          this.addObjectiveGoalDialogCard = false;
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.loading = false;
        } else {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    viewFilesHistory(objectiveData) {
      this.viewObjectiveFileHistoryDialogCard = true;
      this.getAllFilesHistoryFromObjectiveLoad(this.USERID, objectiveData.id);
    }
    getAllFilesHistoryFromObjectiveLoad(id, objectiveID) {
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.loading = true;
        _this4.fileService.getAllFilesHistoryFromObjectiveLoad(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this4.objectiveSubscription)).subscribe(data => {
          _this4.AllObjectivesHistoryFiles = data.data;
          _this4.loading = false;
        });
        return true;
      })();
    }
    hideViewFileHistoryDialogCard() {
      this.viewObjectiveFileHistoryDialogCard = false;
    }
    getIcon(name) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.getIcon)(name);
    }
    deleteSubGoal(id, goalId) {
      this.confirmationService.confirm({
        key: 'deleteSubGoal',
        target: event.target || new EventTarget(),
        message: 'Deleting Objectives Will Delete All Files. Continue?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.loading = true;
          this.goal.fetch('put', 'objectives', 'setInactiveObjectives', {
            id: id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
            if (data.success) {
              this.getAllobjectives();
              this.loading = false;
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
              // this.updateGoalDialogCard = false;
              // this.updateGoalform.reset();
            } else {
              this.messageService.add({
                severity: 'error  ',
                summary: 'Error',
                detail: data.message
              });
            }
          });
        }
      });
    }
    deleteSubGoalFile(id, source) {
      // alert(`delete sub goal file ${id} ${source}`);
      this.confirmationService.confirm({
        key: 'deleteSubGoalFile',
        target: event.target || new EventTarget(),
        message: 'Delete File',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.fileService.deleteFileObjective({
            id: id,
            source: source
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
            if (data.success) {
              this.getAllobjectives();
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
              this.viewObjectiveFileDialogCard = false;
            } else {
              this.messageService.add({
                severity: 'error  ',
                summary: 'Error',
                detail: data.message
              });
            }
          });
        }
      });
    }
    clear(table) {
      table.clear();
      this.filter.nativeElement.value = '';
    }
    onGlobalFilter(table, event) {
      table.filterGlobal(event.target.value, 'contains');
    }
    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.objectiveSubscription.unsubscribe();
    }
    static #_ = this.ɵfac = function ObjectivesComponent_Factory(t) {
      return new (t || ObjectivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_2__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__.GoalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ObjectivesComponent,
      selectors: [["app-objectives"]],
      viewQuery: function ObjectivesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 91,
      vars: 74,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt2", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], ["dt3", ""], ["pTemplate", "footer"], ["styleClass", "addObjective", "header", "Drag and Drop Files", "position", "top", 3, "visible", "breakpoints", "visibleChange"], [1, "p-fluid"], [3, "formGroup"], ["name", "files", "customUpload", "true", "multiple", "true", "maxFileSize", "20000000", "formControlName", "files", "ngDefaultControl", "", 3, "files", "uploadHandler"], ["styleClass", "addObjective", "position", "top", 3, "header", "visible", "breakpoints", "visibleChange", "onHide"], [1, "field", "col-10", "md:col-10"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "functional_objective", "autocomplete", "off", "formControlName", "functional_objective", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "performance_indicator", "autocomplete", "off", "formControlName", "performance_indicator", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "target", "autocomplete", "off", "formControlName", "target", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "formula", "autocomplete", "off", "formControlName", "formula", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "programs", "autocomplete", "off", "formControlName", "programs", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "responsible_persons", "autocomplete", "off", "formControlName", "responsible_persons", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "clients", "autocomplete", "off", "formControlName", "clients", "required", "", 1, "flex-auto", 3, "ngClass"], ["formControlName", "timetable", "selectionMode", "range", 3, "readonlyInput"], ["htmlFor", "department"], ["formControlName", "selectedDropdown", "optionLabel", "name", "placeholder", "Select a Frequency", 3, "options"], ["pInputText", "", "id", "data_source", "autocomplete", "off", "formControlName", "data_source", "required", "", 1, "flex-auto", 3, "ngClass"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], [3, "label", "click"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "users.username", "display", "menu", "placeholder", "Search by Created By"], ["type", "text", "field", "goals.campus", "display", "menu", "placeholder", "Search by Campus"], ["type", "text", "field", "users.department", "display", "menu", "placeholder", "Search by Office"], ["type", "text", "field", "goals.goals", "display", "menu", "placeholder", "Search by Office"], ["type", "text", "field", "goals.budget", "display", "menu", "placeholder", "Search by Goal Budget"], ["type", "text", "field", "functional_objective", "display", "menu", "placeholder", "Search by Functional Objective"], ["type", "text", "field", "performance_indicator", "display", "menu", "placeholder", "Search by Performance Indicator"], ["type", "text", "field", "target", "display", "menu", "placeholder", "Search by Target"], ["type", "text", "field", "programs", "display", "menu", "placeholder", "Search by Programs"], ["type", "text", "field", "responsible_persons", "display", "menu", "placeholder", "Search by Responsible Persons"], ["type", "text", "field", "clients", "display", "menu", "placeholder", "Search by Clients"], [2, "min-width", "4rem"], ["type", "text", "field", "frequency_monitoring", "display", "menu", "placeholder", "Search by Frequency Monitoring"], ["type", "text", "field", "data_source", "display", "menu", "placeholder", "Search by Data Source"], ["type", "text", "field", "budget", "display", "menu", "placeholder", "Search by Budget"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["type", "text", "field", "complete", "display", "menu", "placeholder", "Search by Completion"], [2, "min-width", "6rem"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "Search by Files"], [2, "min-width", "9rem"], [3, "text", "raised", "severity", "icon", "label", "loading", "loadingChange", "click"], ["key", "updateObjectiveComplete"], ["confirmPopupRef", ""], [1, "flex", "flex-row", "align-items-center"], ["pTooltip", "File List", "tooltipPosition", "top", 1, "pi", "pi-folder", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-folder-open", "cursor-pointer", 3, "click"], ["pTooltip", "File History", "tooltipPosition", "top", 1, "pi", "pi-cog", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-cog", "cursor-pointer", 3, "click"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteSubGoal"], ["colspan", "8"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "disabled", "click"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "disabled", "input"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], ["class", "pi pi-trash text-xl", "style", "color: #868585"], ["key", "deleteSubGoalFile"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#868585"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"]],
      template: function ObjectivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p-table", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ObjectivesComponent_ng_template_7_Template, 6, 0, "ng-template", 7)(8, ObjectivesComponent_ng_template_8_Template, 72, 0, "ng-template", 8)(9, ObjectivesComponent_ng_template_9_Template, 60, 52, "ng-template", 9)(10, ObjectivesComponent_ng_template_10_Template, 3, 0, "ng-template", 10)(11, ObjectivesComponent_ng_template_11_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_12_listener($event) {
            return ctx.viewObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 0)(14, "div", 1)(15, "p-table", 5, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ObjectivesComponent_ng_template_17_Template, 6, 2, "ng-template", 7)(18, ObjectivesComponent_ng_template_18_Template, 10, 0, "ng-template", 8)(19, ObjectivesComponent_ng_template_19_Template, 12, 7, "ng-template", 9)(20, ObjectivesComponent_ng_template_20_Template, 3, 0, "ng-template", 10)(21, ObjectivesComponent_ng_template_21_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ObjectivesComponent_ng_template_22_Template, 1, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_23_listener($event) {
            return ctx.addObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 16)(25, "form", 17)(26, "p-fileUpload", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("uploadHandler", function ObjectivesComponent_Template_p_fileUpload_uploadHandler_26_listener($event) {
            return ctx.onUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " \u00A0\u00A0\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "p-dialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_28_listener($event) {
            return ctx.addObjectiveGoalDialogCard = $event;
          })("onHide", function ObjectivesComponent_Template_p_dialog_onHide_28_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 16)(30, "div", 20)(31, "form", 17)(32, "div", 21)(33, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Functional Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 21)(37, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Performance Indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 21)(41, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 21)(45, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 21)(49, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Programs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 21)(53, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Responsible Persons");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 21)(57, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 21)(61, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Timetable");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "p-calendar", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 21)(65, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Frequency Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "p-dropdown", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 21)(70, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Means of Verification(Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 21)(74, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, " budget ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "p-inputNumber", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 35)(78, "p-button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_Template_p_button_click_78_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "p-button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_Template_p_button_click_79_listener() {
            return ctx.updateSubObjectiveGoalDialogExec(ctx.addObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_80_listener($event) {
            return ctx.viewObjectiveFileHistoryDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 0)(82, "div", 1)(83, "p-table", 5, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, ObjectivesComponent_ng_template_85_Template, 6, 0, "ng-template", 7)(86, ObjectivesComponent_ng_template_86_Template, 13, 0, "ng-template", 8)(87, ObjectivesComponent_ng_template_87_Template, 14, 15, "ng-template", 9)(88, ObjectivesComponent_ng_template_88_Template, 3, 0, "ng-template", 10)(89, ObjectivesComponent_ng_template_89_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, ObjectivesComponent_ng_template_90_Template, 1, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.objectiveDatas)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](60, _c1))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](61, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](62, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", ctx.blockedPanel ? "Files Locked: Objective Marked Complete" : "File List")("visible", ctx.viewObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](63, _c4))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.AllObjectivesFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](64, _c5))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](65, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.addObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](67, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addFileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("files", ctx.uploadedFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](68, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "Add  Objectives")("visible", ctx.addObjectiveGoalDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](69, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addObjectiveGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("functional_objective").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("performance_indicator").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("target").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["target"].errors == null ? null : ctx.addObjectiveGoalform.controls["target"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("formula").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("programs").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("responsible_persons").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("clients").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["clients"].errors == null ? null : ctx.addObjectiveGoalform.controls["clients"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonlyInput", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroupDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.dropdwonSelection);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("data_source").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx.updateObjectiveGoalFlag ? "Update" : "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](70, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "File History List")("visible", ctx.viewObjectiveFileHistoryDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](71, _c4))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.AllObjectivesHistoryFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](72, _c5))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](73, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.Dialog, primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__.InputNumber, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_22__.ConfirmPopup, primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__.FileUpload, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_6__.PesoPipe],
      styles: ["@charset \"UTF-8\";\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"]
    });
  }
  return ObjectivesComponent;
})();

/***/ }),

/***/ 2012:
/*!**************************************************************!*\
  !*** ./src/app/admin/goals/print-qom/print-qom.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintQomComponent: () => (/* binding */ PrintQomComponent)
/* harmony export */ });
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 53714);








const _c0 = ["printTable"];
const _forTrack1 = ($index, $item) => $item._id;
function PrintQomComponent_tbody_82_tr_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_0, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_1, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_2, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_3, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_4, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_5, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_6, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_7, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_8, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_9, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_10, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const obj_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.monthPointerValue.monthPointer_11, " ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " 0 ");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Ongoing");
  }
}
function PrintQomComponent_tbody_82_tr_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Done");
  }
}
function PrintQomComponent_tbody_82_tr_1_For_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rem_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rem_r49.remarks);
  }
}
function PrintQomComponent_tbody_82_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PrintQomComponent_tbody_82_tr_1_Conditional_7_Template, 1, 1)(8, PrintQomComponent_tbody_82_tr_1_Conditional_8_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PrintQomComponent_tbody_82_tr_1_Conditional_10_Template, 1, 1)(11, PrintQomComponent_tbody_82_tr_1_Conditional_11_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PrintQomComponent_tbody_82_tr_1_Conditional_13_Template, 1, 1)(14, PrintQomComponent_tbody_82_tr_1_Conditional_14_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PrintQomComponent_tbody_82_tr_1_Conditional_16_Template, 1, 1)(17, PrintQomComponent_tbody_82_tr_1_Conditional_17_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PrintQomComponent_tbody_82_tr_1_Conditional_19_Template, 1, 1)(20, PrintQomComponent_tbody_82_tr_1_Conditional_20_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PrintQomComponent_tbody_82_tr_1_Conditional_22_Template, 1, 1)(23, PrintQomComponent_tbody_82_tr_1_Conditional_23_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PrintQomComponent_tbody_82_tr_1_Conditional_25_Template, 1, 1)(26, PrintQomComponent_tbody_82_tr_1_Conditional_26_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PrintQomComponent_tbody_82_tr_1_Conditional_28_Template, 1, 1)(29, PrintQomComponent_tbody_82_tr_1_Conditional_29_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, PrintQomComponent_tbody_82_tr_1_Conditional_31_Template, 1, 1)(32, PrintQomComponent_tbody_82_tr_1_Conditional_32_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, PrintQomComponent_tbody_82_tr_1_Conditional_34_Template, 1, 1)(35, PrintQomComponent_tbody_82_tr_1_Conditional_35_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, PrintQomComponent_tbody_82_tr_1_Conditional_37_Template, 1, 1)(38, PrintQomComponent_tbody_82_tr_1_Conditional_38_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, PrintQomComponent_tbody_82_tr_1_Conditional_40_Template, 1, 1)(41, PrintQomComponent_tbody_82_tr_1_Conditional_41_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, PrintQomComponent_tbody_82_tr_1_Conditional_44_Template, 1, 0)(45, PrintQomComponent_tbody_82_tr_1_Conditional_45_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](49, PrintQomComponent_tbody_82_tr_1_For_50_Template, 3, 1, null, null, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 17, obj_r8.performance_indicator));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r8.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](7, obj_r8.monthPointer === 0 ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](10, obj_r8.monthPointer === 1 ? 10 : 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, obj_r8.monthPointer === 2 ? 13 : 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](16, obj_r8.monthPointer === 3 ? 16 : 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](19, obj_r8.monthPointer === 4 ? 19 : 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](22, obj_r8.monthPointer === 5 ? 22 : 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](25, obj_r8.monthPointer === 6 ? 25 : 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](28, obj_r8.monthPointer === 7 ? 28 : 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](31, obj_r8.monthPointer === 8 ? 31 : 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](34, obj_r8.monthPointer === 9 ? 34 : 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](37, obj_r8.monthPointer === 10 ? 37 : 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](40, obj_r8.monthPointer === 11 ? 40 : 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", obj_r8.total + "/" + obj_r8.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](44, obj_r8.target !== obj_r8.total ? 44 : 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r8.data_source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](obj_r8.remarks);
  }
}
function PrintQomComponent_tbody_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintQomComponent_tbody_82_tr_1_Template, 51, 19, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.objectiveDatas);
  }
}
const _c2 = () => ({
  width: "25rem"
});
const _c3 = a0 => ({
  hidden: a0
});
src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_0__.formatDate;
let PrintQomComponent = /*#__PURE__*/(() => {
  class PrintQomComponent {
    constructor(authService) {
      this.authService = authService;
      // @Input() objectiveDatas: any[] = [];
      this.printingOfficeName = '';
      this.printFlag = false;
      this.isPrintableVisible = false;
      this.printingHead = false;
      this.nameValue = '';
      this.officeValue = '';
      this.subOnjectiveHeaderData = '';
      this.preparedByValue = '';
      this.preparedByofficeValue = '';
      this.counterCheckedValue = '';
      this.counterCheckedofficeValue = '';
      this.verifiedByValue = '';
      this.verifiedByofficeValue = '';
      this.subObjectiveHeaders = '';
      this.date = new Date();
    }
    ngOnChanges(changes) {
      const {
        data,
        header,
        printQOMObjectiveTable
      } = changes['printQOMFile']?.currentValue;
      console.log({
        QOMPRINTINGtest: changes['printQOMFile']?.currentValue
      });
      this.objectiveDatas = data;
      this.subOnjectiveHeaderData = header;
      this.printingHead = printQOMObjectiveTable;
    }
    ngOnInit() {
      this.imageSrc = this.authService.domain + '/images/logo.png'; // Get the image source
      this.imageSrcOptimized = this.authService.domain + '/images/chmsu-logo-optimized.png'; // Get the image source
      this.imageSrcLogo = this.authService.domain + '/images/chmsu-logo.png'; // Get the image source
      this.formattedDate = (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_0__.formatDate)(this.date);
    }
    getFrequencyKeys(frequency_monitoring) {
      // Replace underscores with spaces
      return frequency_monitoring.replace(/_/g, ' ');
    }
    printPdf() {
      // this.isPrintableVisible = true;
      let print, win;
      print = document.getElementById('printQom').innerHTML;
      win = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      win.document.open();
      win.document.write(`
          <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/print.min.css" />

            <style>

            * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}

body {
  /* padding: 0.25in; */
  width: 13in;
  height: 8.5in;
  /* outline: 1px solid; */
}

@media print {
  body {
    padding: unset;
    width: 100%;
    height: 100%;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
}

table:not(:is(.nested-table, .nested-table2)) {
  border-top: 1px solid;
  border-left: 1px solid;
}

table :is(th, td) {
  padding: 1px 4px;
  border-right: 1px solid;
  border-bottom: 1px solid;
}

.nested-table {
  tr {
    td {
      &[rowspan="4"] {
        border-bottom: 0;
      }
      &[rowspan="3"] {
        border-bottom: 0;
      }
    }
    &:first-child {
      td {
        &:last-child {
          border-right: 0;
          aspect-ratio: 1 / 1;
        }
      }
    }
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
}

.nested-table2 {
  tr {
    th {
      border-color: black;
      border-top: 0;
      border-bottom: 0;
      background-color: lightblue;
      font-weight: normal;
      padding: 5px;
      &:nth-child(1) {
        background-color: darkred;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding-left: 90px;
      }
      &:nth-child(2) {
        background-color: darkblue;
        color: white;
        font-size: 14px;
        font-weight: 600;
      }
      &:last-child {
        border-right: 0;
      }
    }
  }
}

.logo {
  width: 0;
  img {
    width: 60px;
    height: 60px;
    margin: 3px;
    display: block;
  }
  & + td {
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      > h1 {
        font-size: 18px;
        margin-left: 6px;
        text-transform: uppercase;
      }
      > h5 {
        color: #064f7c;
      }
      > hr {
        margin-top: 8px;
        width: 80%;
        border: 1px solid;
      }
    }
  }
}

tbody.data-cells {
  font-stretch: condensed;
  & tr {
    & > td {
      height: 50px;
      font-size: 16px;
      text-align: center;
      padding: 1px;
      padding-bottom: 1em;
      &:is(:nth-child(1), :nth-last-child(1), :nth-last-child(2), :nth-last-child(3)) {
        font-weight: 600;
        text-align: start;
        word-break: break-word;
      }
      & > p {
        font-size: 16px;
        &:not(:last-child) {
          margin-bottom: 1em;
        }
      }
    }
  }
}

tfoot {
  & tr td {
    padding: 0;
    & > div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      & > div {
        &:not(:last-child) {
          border-right: 1px solid;
        }
        & > div {
          font-size: 14px;
          padding: 1px 6px;
          &:not(:last-child) {
            border-bottom: 1px solid;
          }
          &:nth-child(2) {
            text-align: center;
            font-size: 16px;
            padding-top: 1.75em;
            font-weight: 600;
            padding-bottom: 0px;
            font-stretch: condensed;
          }
          &:last-child {
            text-align: center;
            font-size: 14px;
            font-stretch: condensed;
            font-style: italic;
          }
        }
      }
    }
  }
}

.border-0 {
  /* border: 0px; */
}

.p-0 {
  padding: 0px;
}

.text-align-end {
  text-align: end;
}

.border-x-0 {
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.font-condensed {
  font-stretch: condensed;
}

.bold {
  font-weight: 600;
}

.italic {
  font-style: italic;
}
 </style>

  <body>
    <div id="tobeprinted">
      <table>
        <thead>
          <tr>
            <th class="p-0" colspan="17">
              <table class="nested-table">
                <tr>
                  <td rowspan="4" class="logo">
                    <img src="${this.imageSrcOptimized}" alt="CHMSU Logo" />
                  </td>
                  <td rowspan="4">
                    <div>
                      <h1>Quality Objectives and Monitoring</h1>
                    </div>
                  </td>
                  <td class="bold font-condensed" width="105">Document Code:</td>
                  <td align="center" width="140">F.02-PME -CHMSU</td>
                  <td class="italic" align="center" width="100">Status</td>
                  <td rowspan="4" width="85"></td>
                </tr>
                <tr>
                  <td class="bold font-condensed">Revision Number</td>
                  <td align="center">0</td>
                  <td rowspan="3"></td>
                </tr>
                <tr>
                  <td class="bold font-condensed">Date of Effectivity</td>
                  <td align="center">August 19, 2024</td>
                </tr>
                <tr>
                  <td class="bold font-condensed">Page No.</td>
                  <td align="center">Page 1 of 1</td>
                </tr>
              </table>
            </th>
          </tr>
          <tr>
            <th colspan="17" class="p-0">
              <table class="nested-table2">
                <tr>
                  <th align="left" width="38%">${this.subOnjectiveHeaderData?.toUpperCase() || this.printingOfficeName?.toUpperCase()}</th>
                  <th width="12%">AY or CY</th>
                  <th align="left">Monitoring No.: 1</th>
                  <th align="left">Recency: as of: ${this.formattedDate}</th>
                  <th align="left">Date of Previous Monitoring: N/A</th>
                </tr>
              </table>
            </th>
          </tr>
          <tr>
            <th class="border-x-0" colspan="17"></th>
          </tr>
           </thead>
                 <body onload="window.print();window.close()">${print}</body>
                 <tbody class="data-cells">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th class="border-x-0" colspan="17"></th>
          </tr>
          <tr>
            <td colspan="17">
              <div>
                  <div>
                    <div>Prepared by:</div>
                    <div>${this.preparedByValue.toLocaleUpperCase()}</div>
                    <div>${this.preparedByofficeValue.toLocaleUpperCase()}</div>
                  </div>
                  <div>
                    <div>Counter Checked by:</div>
                    <div>${this.counterCheckedValue.toLocaleUpperCase()}</div>
                    <div>${this.counterCheckedofficeValue.toLocaleUpperCase()}</div>
                  </div>
                  <div>
                    <div>Reviewed by:</div>
                    <div>${this.reviewedByValue.toLocaleUpperCase()}</div>
                    <div>${this.reviewedByofficeValue.toLocaleUpperCase()}</div>
                  </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </body>
</html>

              `);
      this.isPrintableVisible = true;
      win.document.close();
      this.isPrintableVisible = false;
      this.printingOfficeName = '';
      this.preparedByValue = '';
      this.preparedByofficeValue = '';
      this.counterCheckedValue = '';
      this.counterCheckedofficeValue = '';
      this.verifiedByValue = '';
      this.verifiedByofficeValue = '';
      this.reviewedByValue = '';
      this.reviewedByofficeValue = '';
    }
    static #_ = this.ɵfac = function PrintQomComponent_Factory(t) {
      return new (t || PrintQomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrintQomComponent,
      selectors: [["app-print-qom"]],
      viewQuery: function PrintQomComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.printTableElement = _t.first);
        }
      },
      inputs: {
        printingOfficeName: "printingOfficeName",
        printFlag: "printFlag",
        printQOMFile: "printQOMFile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 83,
      vars: 14,
      consts: [["header", "Office Head", 3, "visible", "visibleChange"], [1, "p-text-secondary", "block", "mb-5"], [1, "flex", "align-items-center", "gap-3", "mb-3"], ["for", "username", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "name", "placeholder", "e.g Benrie Nufable, PHD. TM", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["nameInput", ""], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["for", "email", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "office", "placeholder", "e.g MIS Head - DPO", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["officeInput", ""], ["pInputText", "", "id", "name", "placeholder", "e.g Yrika Marie R. Dusaran, PhD", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Director for Quality Management", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "name", "placeholder", "e.g Rosalinda S. Tuvilla", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Chief Adminstrative Officer - Admin", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "onClick"], ["label", "Save", 3, "onClick"], ["id", "printQom", 3, "ngClass"], [1, "font-condensed"], ["rowspan", "2", 2, "width", "10%"], ["rowspan", "2", 2, "width", "7%"], ["colspan", "12"], ["rowspan", "2", 2, "width", "6%"], ["rowspan", "2", 2, "width", "8%"], ["rowspan", "2", 2, "width", "22%"], ["colspan", "17", 1, "border-x-0"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
      template: function PrintQomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function PrintQomComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.printingHead = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Prepared By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.preparedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.preparedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Counter Checked by:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2)(16, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 10, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.counterCheckedValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 11, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.counterCheckedofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Verified By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 2)(28, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.reviewedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintQomComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.reviewedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14)(38, "p-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintQomComponent_Template_p_button_onClick_38_listener() {
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintQomComponent_Template_p_button_onClick_39_listener() {
            ctx.printPdf();
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "table", 17)(41, "thead")(42, "tr", 18)(43, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Indicators");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Target & Target Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Overall Result");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "MOV/Data Source");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Remarks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "tr", 18)(56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Jan.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Feb.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Mar.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Apr.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "May");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "June");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "July");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Aug.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Sep.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Oct.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Nov.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Dec.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, PrintQomComponent_tbody_82_Template, 2, 1, "tbody", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.printingHead);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.preparedByValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.preparedByofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.counterCheckedValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.counterCheckedofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reviewedByValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reviewedByofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c3, !ctx.isPrintableVisible));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.objectiveDatas == null ? null : ctx.objectiveDatas.length) != 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe]
    });
  }
  return PrintQomComponent;
})();

/***/ }),

/***/ 69990:
/*!******************************************************************!*\
  !*** ./src/app/admin/goals/print-table/print-table.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintTableComponent: () => (/* binding */ PrintTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/dataFilter */ 42162);








const _c0 = ["printTable"];
function PrintTableComponent_tbody_75_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("rowspan", ctx_r12.objectiveDatas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r12.subObjectiveHeaders + " (" + obj_r10.strategic_objective + ")"), " ");
  }
}
function PrintTableComponent_tbody_75_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintTableComponent_tbody_75_tr_1_td_1_Template, 3, 4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const obj_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r11 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, obj_r10.functional_objective));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 12, obj_r10.performance_indicator));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r10.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 14, obj_r10.formula));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, obj_r10.programs));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 18, obj_r10.responsible_persons));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 20, ctx_r9.getFrequencyKeys(obj_r10.frequency_monitoring)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 22, obj_r10.data_source));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 24, obj_r10.budget));
  }
}
function PrintTableComponent_tbody_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintTableComponent_tbody_75_tr_1_Template, 28, 26, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.objectiveDatas);
  }
}
const _c1 = () => ({
  width: "25rem"
});
const _c2 = a0 => ({
  hidden: a0
});
let PrintTableComponent = /*#__PURE__*/(() => {
  class PrintTableComponent {
    constructor(authService) {
      this.authService = authService;
      // @Input() objectiveDatas: any[] = [];
      this.printingOfficeName = '';
      this.printFlag = false;
      this.isPrintableVisible = false;
      this.printingHead = false;
      this.preparedByValue = '';
      this.preparedByofficeValue = '';
      this.counterCheckedValue = '';
      this.counterCheckedofficeValue = '';
      this.verifiedByValue = '';
      this.verifiedByofficeValue = '';
      this.subOnjectiveHeaderData = '';
      this.subObjectiveHeaders = '';
    } // Inject AuthService if needed
    ngOnInit() {
      this.imageSrc = this.authService.domain + '/images/logo.png'; // Get the image source
      // this.authService.domain + '/images/logo.png'; // Get the image source
    }
    /*
      this.parentPrintFile = {
            printFile: true,
            objectData: this.objectiveDatas,
            printingHead: true,
            subObjectiveHeaders: this.subObjectiveHeaders,
            subOnjectiveHeaderData: this.subOnjectiveHeaderData?.department,
            printingOfficeName: this.printingOfficeName,
        };
    */
    ngOnChanges(changes) {
      const {
        objectData: data,
        header,
        subObjectiveHeaders,
        printFile: printObjectiveTable,
        subOnjectiveHeaderData
      } = changes['printFile']?.currentValue;
      console.log(data, header, subObjectiveHeaders, printObjectiveTable);
      this.subOnjectiveHeaderData = subOnjectiveHeaderData;
      this.objectiveDatas = data;
      this.subObjectiveHeaders = subObjectiveHeaders;
      this.printingHead = printObjectiveTable;
    }
    getFrequencyKeys(frequency_monitoring) {
      // Replace underscores with spaces
      return frequency_monitoring.replace(/_/g, ' ');
    }
    printPdf() {
      // this.isPrintableVisible = true;
      let print, win;
      print = document.getElementById('print').innerHTML;
      win = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      win.document.open();
      win.document.write(`
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
            </head>
            <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
          }

          body {
            width: 11in;
            height: 8.5in;
          }

          @media print {
            body {
              padding: unset;
              width: unset;
              height: unset;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              size: landscape;
            }
            margin: 1.5in 0in 0in 0in;
          }

          table {
            border-collapse: collapse;
            width: 100%;
          }

          table:not(:is(.nested-table)) {
            border-top: 1px solid;
            border-left: 1px solid;
            table-layout: fixed;
          }

          table :is(th, td) {
            padding: 4px 6px;
            border-right: 1px solid;
            border-bottom: 1px solid;
          }

          .nested-table {
            tr {
              td {
            font-weight: 600;
            &[rowspan="4"] {
              border-bottom: 0;
            }
            &:last-child {
              border-right: 0;
            }
              }
              &:last-child {
            td {
              &:last-child {
                border-bottom: 0;
              }
            }
              }
            }
          }

          .logo {
            border-right: 0;
            img {
              width: 80px;
              height: 80px;
              margin-left: auto;
              display: block;
            }
            & + td {
              & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > h1 {
              font-size: 26px;
            }
            > h5 {
              color: #064f7c;
            }
            > hr {
              margin-top: 8px;
              width: 80%;
              border: 1px solid;
            }
              }
            }
          }

          tr.font-condensed {
            & > th {
              font-size: 18px;
              padding: 8px 6px;
              &:first-child {
            background-color: #f57e3a;
              }
              &:nth-child(2) {
            background-color: #057a40;
              }
              &:last-child {
            background-color: #efdf10;
              }
            }
            & + tr {
              & > th {
            padding: 8px;
              }
              & + tr {
            & > th {
              padding: 0px 4px;
              font-stretch: condensed;
              font-size: 16px;
            }
            & + tr {
              & > th {
                padding: 2px;
              }
            }
              }
            }
          }

          tbody.data-cells {
            font-stretch: condensed;
            & tr {
              & > td {
            height: 0;
            & > div {
              height: 100%;
              display: flex;
              flex-direction: column;
              gap: 1rem;
              justify-content: space-evenly;
              text-align: center;
              & p {
                font-size: 14px;
              }
            }
              }
            }
          }

          tfoot {
            font-stretch: condensed;
            & tr td {
              padding: 0;
              & > div {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            & > div {
              &:not(:last-child) {
                border-right: 1px solid;
              }
              & > div {
                font-size: 14px;
                padding: 3px 6px;
                &:not(:last-child) {
                  border-bottom: 1px solid;
                }
                &:nth-child(2) {
                  text-align: center;
                  font-size: 16px;
                  padding-top: 32px;
                  font-weight: 600;
                  padding-bottom: 0px;
                }
                &:last-child {
                  text-align: center;
                  font-size: 14px;
                }
              }
            }
              }
            }
          }

          .p-0 {
            padding: 0px;
          }

          .text-align-end {
            text-align: end;
          }

          .border-x-0 {
            border-left: 1px solid white;
            border-right: 1px solid white;
          }

          .font-condensed {
            font-stretch: condensed;
          }

            </style>
            <body>
              <div id="tobeprinted">
            <table>
              <thead>
                <tr>
                  <th class="p-0" rowspan="4" colspan="10">
                <table class="nested-table">
                  <tr>
                    <td rowspan="4" class="logo">
                      <img src="${this.imageSrc}" alt="CHMSU Logo" />
                    </td>
                    <td rowspan="4">
                      <div>
                    <h1>Carlos Hilado Memorial State University</h1>
                    <h5>Alijis Campus . Binalbagan Campus . Fortune Towne Campus . Talisay Campus</h5>
                    <hr />
                      </div>
                    </td>
                    <td>Revision No.</td>
                  </tr>
                  <tr>
                    <td>Date of Revision</td>
                  </tr>
                  <tr>
                    <td>Date of Effectivity</td>
                  </tr>
                  <tr>
                    <td>Page No.</td>
                  </tr>
                </table>
                  </th>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <th class="text-align-end">Page 2</th>
                </tr>
                <tr class="font-condensed">
               <th colspan="7">${this.subOnjectiveHeaderData?.toUpperCase() || this.printingOfficeName?.toUpperCase()}</th>
                  <th colspan="3">QUALITY OBJECTIVES AND ACTION PLAN</th>
                  <th class="text-align-end" colspan="1">CY</th>
                </tr>
                <tr>
                  <th class="border-x-0" colspan="11"></th>
                </tr>
                <tr>
                  <th class="border-x-0" colspan="11"></th>
                </tr>
              </thead>
              <body onload="window.print();window.close()">${print}</body>
              <tfoot>
                <tr>
                  <td colspan="11">
                <div>
                  <div>
                    <div>Prepared by:</div>
                    <div>${this.preparedByValue.toLocaleUpperCase()}</div>
                    <div>${this.preparedByofficeValue.toLocaleUpperCase()}</div>
                  </div>
                  <div>
                    <div>Counter Checked by:</div>
                    <div>${this.counterCheckedValue.toLocaleUpperCase()}</div>
                    <div>${this.counterCheckedofficeValue.toLocaleUpperCase()}</div>
                  </div>
                  <div>
                    <div>Reviewed by:</div>
                    <div>${this.reviewedByValue.toLocaleUpperCase()}</div>
                    <div>${this.reviewedByofficeValue.toLocaleUpperCase()}</div>
                  </div>
                  <div>
                    <div>Approved by:</div>
                    <div>${this.verifiedByValue.toLocaleUpperCase()}</div>
                    <div>${this.verifiedByofficeValue.toLocaleUpperCase()}</div>
                  </div>
                </div>
                  </td>
                </tr>
              </tfoot>
            </table>
              </div>
            </body>
          </html>
              `);
      this.isPrintableVisible = true;
      win.document.close();
      this.isPrintableVisible = false;
      this.printingOfficeName = '';
      this.preparedByValue = '';
      this.preparedByofficeValue = '';
      this.counterCheckedValue = '';
      this.counterCheckedofficeValue = '';
      this.verifiedByValue = '';
      this.verifiedByofficeValue = '';
      this.reviewedByValue = '';
      this.reviewedByofficeValue = '';
    }
    static #_ = this.ɵfac = function PrintTableComponent_Factory(t) {
      return new (t || PrintTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrintTableComponent,
      selectors: [["app-print-table"]],
      viewQuery: function PrintTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.printTableElement = _t.first);
        }
      },
      inputs: {
        printingOfficeName: "printingOfficeName",
        printFlag: "printFlag",
        printFile: "printFile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 76,
      vars: 16,
      consts: [["header", "Printing Details", 3, "visible", "visibleChange"], [1, "p-text-secondary", "block", "mb-5"], [1, "flex", "align-items-center", "gap-3", "mb-3"], ["for", "username", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "name", "placeholder", "e.g Benrie Nufable, PHD. TM", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["nameInput", ""], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["for", "email", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "office", "placeholder", "e.g MIS Head - DPO", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["officeInput", ""], ["pInputText", "", "id", "name", "placeholder", "e.g Yrika Marie R. Dusaran, PhD", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Director for Quality Management", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "name", "placeholder", "e.g Rosalinda S. Tuvilla", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Chief Adminstrative Officer - Admin", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "onClick"], ["label", "Save", 3, "onClick"], ["id", "print", 3, "ngClass"], ["colspan", "2"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "2", 4, "ngIf"]],
      template: function PrintTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function PrintTableComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.printingHead = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Prepared By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.preparedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.preparedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Counter Checked by:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2)(16, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 10, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.counterCheckedValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 11, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.counterCheckedofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Verified By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 2)(28, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.reviewedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.reviewedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Approved By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 2)(40, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.verifiedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 6)(45, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintTableComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.verifiedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14)(50, "p-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintTableComponent_Template_p_button_onClick_50_listener() {
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintTableComponent_Template_p_button_onClick_51_listener() {
            ctx.printPdf();
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 17)(53, "thead")(54, "tr")(55, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Breakthrough Goals and Strategic Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Functional Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Performance Indicators");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Programs, Projects or Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Responsible Persons & Partners");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Frequency of Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Means of Verification (Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, PrintTableComponent_tbody_75_Template, 2, 1, "tbody", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.printingHead);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.preparedByValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.preparedByofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.counterCheckedValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.counterCheckedofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reviewedByValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reviewedByofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.verifiedByValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.verifiedByofficeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c2, !ctx.isPrintableVisible));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.objectiveDatas == null ? null : ctx.objectiveDatas.length) != 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_1__.PesoPipe]
    });
  }
  return PrintTableComponent;
})();

/***/ }),

/***/ 16417:
/*!**********************************************************!*\
  !*** ./src/app/admin/goals/remarks/remarks.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemarksComponent: () => (/* binding */ RemarksComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_demo_service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/base.service */ 17852);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/editor */ 26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 96814);












const _forTrack0 = ($index, $item) => $item._id;
function RemarksComponent_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14)(7, "span", 15)(8, "sup", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const remark_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, remark_r3.users == null ? null : remark_r3.users.firstname), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, remark_r3.createdAt, "shortDate"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", remark_r3.remarks, " ");
  }
}
function RemarksComponent_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 15)(7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "sup", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const remark_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, remark_r3.users == null ? null : remark_r3.users.firstname), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", remark_r3.remarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 5, remark_r3.createdAt, "shortDate"), " : ");
  }
}
function RemarksComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RemarksComponent_For_6_Conditional_0_Template, 13, 8, "li", 9)(1, RemarksComponent_For_6_Conditional_1_Template, 12, 8);
  }
  if (rf & 2) {
    const remark_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, ctx_r0.USERID === remark_r3.userId ? 0 : 1);
  }
}
function RemarksComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 24)(2, "button", 25)(3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RemarksComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function RemarksComponent_ng_template_11_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r12.text = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.showEditorDialogCard = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function RemarksComponent_ng_template_11_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r14.submitRemarks();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.showEditorDialogCard = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
  }
}
const _c1 = () => ({
  width: "25rem",
  overflow: "auto"
});
const _c2 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c3 = () => ({
  width: "25rem"
});
const _c4 = () => ({
  height: "320px"
});
let RemarksComponent = /*#__PURE__*/(() => {
  class RemarksComponent {
    constructor(baseService, messageService, authService) {
      this.baseService = baseService;
      this.messageService = messageService;
      this.authService = authService;
      this.childAddObjectiveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.remarksSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.remarks = [];
      this.remarksDialogCard = false;
      this.showEditorDialogCard = false;
    }
    ngOnInit() {}
    ngOnChanges(changes) {
      if (changes['remarksFromGoalParent']?.currentValue) {
        this.USERID = this.authService.getTokenUserID();
        this.clickRemarksFromObjectiveTable = changes['remarksFromGoalParent']?.currentValue;
        const {
          remarksDialogCard,
          data
        } = this.clickRemarksFromObjectiveTable;
        const {
          userId,
          id
        } = data;
        this.objectiveId = id;
        this.objectiveData = {
          userId,
          objectiveId: id
        };
        //load the remarks
        this.getRemarks();
        this.remarksDialogCard = remarksDialogCard ?? false;
      }
    }
    getRemarks() {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.baseService.getRoutePublic('get', 'remark', `remarks/${_this.objectiveId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this.remarksSubscriptions)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this.remarks = data;
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      })();
    }
    addRemarks() {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.showEditorDialogCard = true;
      })();
    }
    submitRemarks() {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.showEditorDialogCard = false;
        if (_this3.text) {
          const plainText = _this3.text.replace(/<\/?[^>]+(>|$)/g, '');
          _this3.baseService.getRoutePublic('post', 'remark', 'remarks', {
            remarks: plainText,
            objectiveId: _this3.objectiveId,
            userId: _this3.USERID
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this3.remarksSubscriptions)).subscribe( /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              // reload the remarks
              _this3.getRemarks();
              _this3.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Remarks added'
              });
              _this3.text = '';
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
      })();
    }
    ngOnDestroy() {
      this.remarksSubscriptions.next();
      this.remarksSubscriptions.complete();
    }
    static #_ = this.ɵfac = function RemarksComponent_Factory(t) {
      return new (t || RemarksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RemarksComponent,
      selectors: [["app-remarks"]],
      inputs: {
        remarksFromGoalParent: "remarksFromGoalParent"
      },
      outputs: {
        childAddObjectiveEvent: "childAddObjectiveEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 14,
      consts: [["header", "Remarks", 3, "visible", "breakpoints", "visibleChange"], [1, "card"], [1, "flex", "align-items-end", "justify-content-between", "flex-row-reverse"], ["pButton", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [1, "p-0", "mx-0", "mt-0", "mb-4", "list-none"], ["header", "Remarks", 3, "visible", "visibleChange"], [3, "ngModel", "ngModelChange"], ["pTemplate", "header"], ["pTemplate", "footer"], ["class", "flex justify-content-between flex-row-reverse align-items-center py-2 border-bottom-1 surface-border"], [1, "flex", "justify-content-between", "flex-row-reverse", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "text-xl", "text-blue-500"], [1, "text-xs", "text-500", "text-center"], [1, "flex", "align-items-center", "justify-content-center"], [1, "text-700", "line-height-3"], [1, "text-xs", "text-500", "text-left", "pt-3"], [1, "pt-3"], [1, "flex", "justify-content-between", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "text-xl", "text-orange-500"], [1, ""], [1, "text-xs", "text-500", "text-right"], [1, "ql-formats"], ["type", "button", "aria-label", "Bold", 1, "ql-bold"], ["type", "button", "aria-label", "Italic", 1, "ql-italic"], ["type", "button", "aria-label", "Underline", 1, "ql-underline"], ["label", "Cancel", "severity", "secondary", 3, "text", "onClick"], ["label", "Save", "severity", "secondary", 3, "outlined", "onClick"]],
      template: function RemarksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function RemarksComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.remarksDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RemarksComponent_Template_button_click_3_listener() {
            return ctx.addRemarks();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](5, RemarksComponent_For_6_Template, 2, 1, null, null, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-dialog", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function RemarksComponent_Template_p_dialog_visibleChange_7_listener($event) {
            return ctx.showEditorDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "p-editor", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RemarksComponent_Template_p_editor_ngModelChange_9_listener($event) {
            return ctx.text = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RemarksComponent_ng_template_10_Template, 4, 0, "ng-template", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RemarksComponent_ng_template_11_Template, 2, 2, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.remarksDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.remarks);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.showEditorDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.text);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_editor__WEBPACK_IMPORTED_MODULE_10__.Editor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
      styles: [".p-menu-overlay {\n  position: absolute;\n  top: 131px;\n  left: 280px;\n}\n\n  .card {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}"]
    });
  }
  return RemarksComponent;
})();

/***/ }),

/***/ 55070:
/*!**************************************************************!*\
  !*** ./src/app/admin/goals/reporting/reporting.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingComponent: () => (/* binding */ ReportingComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ 95962);






let ReportingComponent = /*#__PURE__*/(() => {
  class ReportingComponent {
    constructor(goalService, messageService) {
      this.goalService = goalService;
      this.messageService = messageService;
      // charts data
      this.multi = [];
      // view: any[] = [700, 400];
      this.view = [undefined, undefined];
      // options
      this.showXAxis = true;
      this.showYAxis = true;
      this.showLegend = true;
      this.showXAxisLabel = true;
      this.xAxisLabel = 'Goals';
      this.showYAxisLabel = true;
      this.yAxisLabel = 'Budgets';
      this.legendTitle = 'Objectives';
      this.gradient = false;
      this.colorScheme = {
        domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
      };
      this.loading = false;
      this.getDashboardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
      this.getBarCharstData();
    }
    getBarCharstData(campus = undefined) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        _this.multi = [];
        _this.goalService.fetch('get', 'goals', `getAllObjectivesWithObjectivesForBarChartsDashboard/${campus}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(_this.getDashboardSubscription)).subscribe({
          next: data => {
            _this.multi = data.multi;
            // this.changeDetectorRef.detectChanges();
          },

          error: error => {
            console.error('Error fetching data:', error);
            _this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to fetch goals'
            }); // Display error message
            _this.loading = false;
          }
        });
      })();
    }
    ngOnDestroy() {
      this.getDashboardSubscription.next();
      this.getDashboardSubscription.complete();
    }
    static #_ = this.ɵfac = function ReportingComponent_Factory(t) {
      return new (t || ReportingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_1__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReportingComponent,
      selectors: [["app-reporting"]],
      decls: 9,
      vars: 12,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], [1, "chart-parents", 2, "max-height", "50vh"], [3, "groupPadding", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "gradient"], ["myBarChart", ""]],
      template: function ReportingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ngx-charts-bar-vertical-2d", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupPadding", 0)("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("legendTitle", ctx.legendTitle)("gradient", ctx.gradient);
        }
      },
      dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__.BarVertical2DComponent],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(80, 92, 117, 0.3);\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #505c75;\n}\n\napp[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.arrow-down[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #fff;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.arrow-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #fff;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 5px 5px 5px;\n  display: block;\n  background: transparent;\n  color: #fff;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #5264ae;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  margin: 5px 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  justify-content: center;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%]   .chart-col[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 25%;\n  bottom: 0;\n}\nmain[_ngcontent-%COMP%]   .chart-col[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  width: 25%;\n  height: 100vh;\n  top: 0;\n  right: 75%;\n  left: 0;\n  bottom: 0;\n  background: #2f3646;\n  color: #fff;\n  font-size: 0.6em;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 100;\n  text-transform: uppercase;\n  display: block;\n  margin: 0;\n  background: #1f89ff;\n  padding: 15px;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  line-height: 1.3em;\n  color: white;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small.subtitle[_ngcontent-%COMP%] {\n  display: block;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 10px 0 0 0;\n  text-transform: uppercase;\n  color: #a8b2c7;\n  -webkit-user-select: none;\n          user-select: none;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2c7;\n  text-decoration: none;\n}\nmain[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #1b1e27;\n  font-size: 12px;\n  line-height: 1em;\n  max-height: 400px;\n  overflow: auto;\n  padding: 15px;\n}\n\n.dark[_ngcontent-%COMP%] {\n  \n\n\n\n  \n\n\n\n  background: #1b1e27;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: #a0aabe;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .tooltip-anchor[_ngcontent-%COMP%] {\n  fill: rgb(255, 255, 255);\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .gridline-path[_ngcontent-%COMP%] {\n  stroke: #2f3646;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .refline-path[_ngcontent-%COMP%] {\n  stroke: #455066;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .reference-area[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .grid-panel.odd[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.05);\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .number-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f0f1f6;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .gauge[_ngcontent-%COMP%]   .background-arc[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #2f3646;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .gauge[_ngcontent-%COMP%]   .gauge-tick[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #a0aabe;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .gauge[_ngcontent-%COMP%]   .gauge-tick[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: #a0aabe;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .linear-gauge[_ngcontent-%COMP%]   .background-bar[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #2f3646;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .linear-gauge[_ngcontent-%COMP%]   .units[_ngcontent-%COMP%] {\n  fill: #72809b;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .brush-background[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.05);\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .brush[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.1);\n  stroke: #aaa;\n}\n.dark[_ngcontent-%COMP%]   .ngx-charts[_ngcontent-%COMP%]   .polar-chart[_ngcontent-%COMP%]   .polar-chart-background[_ngcontent-%COMP%] {\n  fill: rgb(30, 34, 46);\n}\n.dark[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-labels[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05) !important;\n}\n.dark[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.dark[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n.dark[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .legend-label-text[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.dark[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .scale-legend-label[_ngcontent-%COMP%] {\n  color: #a0aabe;\n}\n.dark[_ngcontent-%COMP%]   .advanced-pie-legend[_ngcontent-%COMP%] {\n  color: #a0aabe;\n}\n.dark[_ngcontent-%COMP%]   .advanced-pie-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n.dark[_ngcontent-%COMP%]   .number-card[_ngcontent-%COMP%]   .number-card-label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #a0aabe;\n}"]
    });
  }
  return ReportingComponent;
})();

/***/ }),

/***/ 89763:
/*!******************************************************************!*\
  !*** ./src/app/admin/goals/update-goal/update-goal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateGoalComponent: () => (/* binding */ UpdateGoalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 75167);


















const _c0 = () => ({
  width: "25rem"
});
let UpdateGoalComponent = /*#__PURE__*/(() => {
  class UpdateGoalComponent {
    constructor(messageService, goal, formBuilder, auth, dept, objective, file, campus) {
      this.messageService = messageService;
      this.goal = goal;
      this.formBuilder = formBuilder;
      this.auth = auth;
      this.dept = dept;
      this.objective = objective;
      this.file = file;
      this.campus = campus;
      this.childEditGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
      this.updateGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.updateGoalDialogCard = false;
      this.deptDropdownValue = [];
      this.deptDropdownCampusValue = [];
      this.getAllDept();
      this.getAllCampuses();
      this.createUpdateGoalForm();
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
    }
    ngOnInit() {}
    ngOnDestroy() {
      this.updateGoalSubscription.next();
      this.updateGoalSubscription.complete();
    }
    ngOnChanges(changes) {
      this.editGoalTrigger = changes['editGoal']?.currentValue;
      let goal = changes['editGoal']?.currentValue?.goal;
      this.goalName = goal?.goals;
      this.goalId = goal?.id;
      if (this.editGoalTrigger && this.editGoalTrigger.editGoal) {
        this.formGroupDemo.setValue({
          selectDepartment: this.deptDropdownValue.find(dept => dept.name === goal.department)
        });
        this.formGroupCampus.setValue({
          selectedCampus: this.deptDropdownCampusValue.find(dept => dept.name === goal.campus)
        });
        this.updateGoalform = this.formBuilder.group({
          goals: [goal.goals],
          // goals: [goal.goals || '', [Validators.required]],
          budget: [goal.budget || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
        });
        this.updateGoalform.get('goals')?.disable();
        this.updateGoalDialogCard = true;
      }
    }
    createUpdateGoalForm() {
      this.updateGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
    }
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
        this.deptDropdownValue = data?.data[0];
      });
    }
    getAllCampuses() {
      this.campus.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    updateGoalDialogExec(form) {
      let data = {
        id: this.goalId,
        // no edit assign manually
        goals: this.goalName,
        // goals: form.value.goals,
        budget: form.value.budget,
        department: this.formGroupDemo.value.selectDepartment.name,
        campus: this.formGroupCampus.value.selectedCampus.name
      };
      this.goal.fetch('put', 'goals', 'updateGoals', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
        if (data.success) {
          // this.getAllObjectivesWithObjectives();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.updateGoalDialogCard = false;
          this.childEditGoalEvent.emit({
            success: true
          });
          this.updateGoalform.reset();
        } else {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    static #_ = this.ɵfac = function UpdateGoalComponent_Factory(t) {
      return new (t || UpdateGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_5__.CampusService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UpdateGoalComponent,
      selectors: [["app-update-goal"]],
      inputs: {
        editGoal: "editGoal"
      },
      outputs: {
        childEditGoalEvent: "childEditGoalEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 25,
      vars: 12,
      consts: [["header", "Update Goal", 3, "visible", "visibleChange"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "goals", "autocomplete", "off", "formControlName", "goals", "pTooltip", "Edit not allowed due to Objective values present", "tooltipPosition", "top", 1, "flex-auto"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], ["htmlFor", "department"], ["formControlName", "selectDepartment", "optionLabel", "name", "placeholder", "Select a Department", "filterBy", "name", "optionLabel", "name", "placeholder", "Select a Department", 3, "options", "filter", "showClear"], ["formControlName", "selectedCampus", "optionLabel", "name", "placeholder", "Select a Campus", 3, "options"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"]],
      template: function UpdateGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function UpdateGoalComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.updateGoalDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Goals name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "p-inputNumber", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4)(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-dropdown", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 4)(18, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "p-dropdown", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11)(23, "p-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateGoalComponent_Template_p_button_click_23_listener() {
            return ctx.updateGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UpdateGoalComponent_Template_p_button_click_24_listener() {
            return ctx.updateGoalDialogExec(ctx.updateGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.updateGoalDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.updateGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupDemo);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownValue)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupCampus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownCampusValue);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumber]
    });
  }
  return UpdateGoalComponent;
})();

/***/ }),

/***/ 93764:
/*!****************************************************************************!*\
  !*** ./src/app/admin/goals/update-objective/update-objective.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateObjectiveComponent: () => (/* binding */ UpdateObjectiveComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/goallists.service */ 87613);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 75167);
/* harmony import */ var _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-files/add-files.component */ 89021);


















function UpdateObjectiveComponent_div_4_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
const _c0 = a0 => [a0];
function UpdateObjectiveComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-inputGroup")(4, "p-inputGroupAddon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_div_4_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const i_r7 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.onUpload($event, "yearly", i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UpdateObjectiveComponent_div_4_div_2_i_12_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "yearly_", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Goal : ", ctx_r5.objectiveDatas["goal_yearly_" + i_r7], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "month_", i_r7, "")("formControlName", "yearly_", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("formControlName", "file_yearly_", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.objectiveDatas["file_yearly_" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c0, i_r7)] ? "Upload More.." : "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.editObjectiveGoalform.get("file_yearly_" + i_r7).value);
  }
}
function UpdateObjectiveComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdateObjectiveComponent_div_4_div_2_Template, 13, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.yearly);
  }
}
function UpdateObjectiveComponent_div_5_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function UpdateObjectiveComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-inputGroup")(4, "p-inputGroupAddon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_div_5_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const i_r13 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onUpload($event, "month", i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UpdateObjectiveComponent_div_5_div_2_i_12_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "Month", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](month_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Goal : ", ctx_r11.objectiveDatas["goal_month_" + i_r13], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "month_", i_r13, "")("formControlName", "month_", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("formControlName", "file_month_", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.objectiveDatas["file_month_" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, i_r13)] ? "Upload More.." : "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.editObjectiveGoalform.get("file_month_" + i_r13).value);
  }
}
function UpdateObjectiveComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdateObjectiveComponent_div_5_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.months);
  }
}
function UpdateObjectiveComponent_div_6_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function UpdateObjectiveComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-inputGroup")(4, "p-inputGroupAddon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_div_6_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const i_r19 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.onUpload($event, "quarter", i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UpdateObjectiveComponent_div_6_div_2_i_12_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "quarter_", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Q", i_r19 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Goal : ", ctx_r17.objectiveDatas["goal_quarter_" + i_r19], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "quarter_", i_r19, "")("formControlName", "quarter_", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("formControlName", "file_quarter_", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r17.objectiveDatas["file_quarter_" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, i_r19)] ? "Upload More.." : "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.editObjectiveGoalform.get("file_quarter_" + i_r19).value);
  }
}
const _c1 = () => [0, 1, 2, 3];
function UpdateObjectiveComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdateObjectiveComponent_div_6_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c1));
  }
}
function UpdateObjectiveComponent_div_7_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function UpdateObjectiveComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-inputGroup")(4, "p-inputGroupAddon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_div_7_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const i_r25 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.onUpload($event, "semi_annual", i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, UpdateObjectiveComponent_div_7_div_2_i_12_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("for", "semi_annual_", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Semi ", i_r25 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Goal : ", ctx_r23.objectiveDatas["goal_semi_annual_" + i_r25], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "semi_annual_", i_r25, "")("formControlName", "semi_annual_", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("formControlName", "file_semi_annual_", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r23.objectiveDatas["file_semi_annual_" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, i_r25)] ? "Upload More.." : "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r23.editObjectiveGoalform.get("file_semi_annual_" + i_r25).value);
  }
}
const _c2 = () => [0, 1];
function UpdateObjectiveComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdateObjectiveComponent_div_7_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c2));
  }
}
function UpdateObjectiveComponent_app_add_files_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-add-files", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("childAddFile", function UpdateObjectiveComponent_app_add_files_11_Template_app_add_files_childAddFile_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.receivedAddFileEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("addNewFile", ctx_r4.parentAddnewFile);
  }
}
const _c3 = () => ({
  width: "50rem"
});
const _c4 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
let UpdateObjectiveComponent = /*#__PURE__*/(() => {
  class UpdateObjectiveComponent {
    constructor(formBuilder, messageService, auth, obj, goallistService, fileService, cdr) {
      this.formBuilder = formBuilder;
      this.messageService = messageService;
      this.auth = auth;
      this.obj = obj;
      this.goallistService = goallistService;
      this.fileService = fileService;
      this.cdr = cdr;
      this.childUpdateObjective = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
      this.editObjectiveGoalDialogCard = false;
      this.updateObjectiveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.goalDataRemainingBudget = 0;
      this.frequencyOptions = [{
        name: 'yearly',
        code: 'yearly'
      }, {
        name: 'quarterly',
        code: 'quarterly'
      }, {
        name: 'semi_annual',
        code: 'semi_annual'
      }, {
        name: 'monthly',
        code: 'monthly'
      }];
      this.months = [];
      this.quarters = [];
      this.semi_annual = [];
      this.file_semi_annual = [];
      this.yearly = [];
      // file service
      this.uploadedFiles = [];
      this.AllObjectivesFiles = [];
      this.disableUpload = false;
      this.uploadSuccessFlag = false;
      // file service child
      this.showAddFilesComponent = false;
      this.uploadInProgress = false;
      this.counter = 0;
      this.USERID = this.auth.getTokenUserID();
      for (let month = 0; month < 12; month++) {
        this.months.push(new Date(0, month).toLocaleString('default', {
          month: 'short'
        }));
      }
      // Initialize quarters array
      this.quarters = ['quarter_0', 'quarter_1', 'quarter_2', 'quarter_3'];
      this.semi_annual = ['semi_annual_0', 'semi_annual_1'];
      this.file_semi_annual = ['file_semi_annual_0', 'file_semi_annual_1'];
      this.yearly = ['yearly_0'];
    }
    ngOnInit() {
      this.createeditObjectiveGoalform();
      this.formGroupDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
        selectedDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
      });
      this.dropdwonSelection = [{
        name: 'daily',
        code: 'Daily'
      }, {
        name: 'weekly',
        code: 'Weekly'
      }, {
        name: 'monthly',
        code: 'Monthly'
      }, {
        name: 'yearly',
        code: 'Yearly'
      }, {
        name: 'quarterly',
        code: 'Quarterly'
      }, {
        name: 'biannually',
        code: 'Biannually'
      }];
      this.uploadSuccessFlag = false;
    }
    ngOnDestroy() {
      this.updateObjectiveSubscription.next();
      this.updateObjectiveSubscription.complete();
    }
    ngOnChanges(changes) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // add this to make sure it will not detect the previous value only current value
        if (changes['updateObjective']?.currentValue) {
          const {
            editGoal,
            data
          } = changes['updateObjective']?.currentValue;
          _this.originalDataToCompare = data;
          console.log({
            editGoal,
            data
          });
          if (editGoal && data) {
            const {
              id,
              goalId,
              frequency_monitoring
            } = data;
            _this.goal_ObjectId = goalId;
            _this.tobeUpdatedSubGoal = id;
            yield _this.getObjectiveById(id, frequency_monitoring);
            // Update the form control value
          }
        }
      })();
    }

    onFrequencyChange(event, data) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const frequency = event?.value?.name || event;
        _this2.selectedfrequencyOptions = {
          name: event?.value?.name || event,
          code: event?.value?.name || event
        };
        console.log({
          frequency,
          data
        });
        // console.log({
        //     editObjectiveGoalform: this.editObjectiveGoalform.value,
        // });
        // Clear existing dynamic controls
        //await this.clearDynamicControls();
        yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.clearDynamicControls)(_this2.editObjectiveGoalform, _this2.months, _this2.yearly, _this2.quarters, _this2.semi_annual);
        // console.log({ frequency: data });
        // console.log({
        //     editObjectiveGoalform: this.editObjectiveGoalform.value,
        // });
        if (frequency === 'monthly') {
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addMonthlyControls)(_this2.editObjectiveGoalform, _this2.months, yield data);
          // await this.addMonthlyControls(await data);
        } else if (frequency === 'quarterly') {
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addQuarterlyControls)(_this2.editObjectiveGoalform, _this2.quarters, yield data);
          // await this.addQuarterlyControls(await data);
        } else if (frequency === 'semi_annual') {
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addSemiAnnualControls)(_this2.editObjectiveGoalform, _this2.semi_annual, yield data);
          // await this.addSemiAnnualControls(await data);
        } else if (frequency === 'yearly') {
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addYearlyControls)(_this2.editObjectiveGoalform, _this2.yearly, yield data);
          // await this.addYearlyControls(await data);
        }
      })();
    }

    getObjectiveById(id, frequency_monitoring) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.obj.fetch('get', 'objectives', `getObjectiveById/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this3.updateObjectiveSubscription)).subscribe(data => {
          console.log('getObjectiveById', data);
          _this3.objectiveDatas = data.data;
          _this3.onFrequencyChange(frequency_monitoring, data.data);
          _this3.editObjectiveGoalform.get('frequency_monitoring').setValue(frequency_monitoring);
          //add delay to prepare the forms
          setTimeout(() => {
            _this3.editObjectiveGoalDialogCard = true;
            _this3.cdr.detectChanges();
          }, 300);
        });
      })();
    }
    createeditObjectiveGoalform() {
      this.editObjectiveGoalform = this.formBuilder.group({
        // department: ['', [Validators.required]],
        // userId: ['', [Validators.required]],
        // goalId: ['', [Validators.required]],
        // functional_objective: ['', [Validators.required]],
        // performance_indicator: ['', [Validators.required]],
        // target: ['', [Validators.required]],
        // formula: ['', [Validators.required]],
        // programs: ['', [Validators.required]],
        // responsible_persons: ['', [Validators.required]],
        // clients: ['', [Validators.required]],
        // timetable: ['', [Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        // data_source: ['', [Validators.required]],
        // remarks: ['', [Validators.required]],
        // budget: ['', [Validators.required]],
      });
    }

    clearEditObjectiveGoalDialogCardDatas() {
      //reset the form so no data will be left off before getting a new one
      // this.editObjectiveGoalform.reset();
      this.editObjectiveGoalDialogCard = false;
    }
    updateSubObjectiveGoalDialogExec(form) {
      form.value.id = this.tobeUpdatedSubGoal;
      form.value.goalId = this.goal_ObjectId;
      let data = {};
      const currentDate = new Date().toISOString().split('T')[0];
      console.log('form.value', form.value);
      for (const key in form.value) {
        // if (form.value[key] !== '' && form.value[key] !== 0) {
        if (form.value[key] !== '') {
          data[key] = form.value[key];
          if (key.includes('file') && key.includes(form.value.frequency_monitoring)) {
            data[key] = '💾 File Added...';
            if (!key.includes(form.value.frequency_monitoring)) {
              delete data[key];
            }
          }
          if (form.value.frequency_monitoring === 'monthly' && key.startsWith('month_')) {
            const index = key.split('_')[1];
            data[`month_${index}_date`] = currentDate;
          } else if (form.value.frequency_monitoring === 'quarterly' && key.startsWith('quarter_')) {
            const index = key.split('_')[1];
            data[`quarter_${index}_date`] = currentDate;
          } else if (form.value.frequency_monitoring === 'semi_annual' && key.startsWith('semi_annual_')) {
            const index = key.split('_')[2];
            data[`semi_annual_${index}_date`] = currentDate;
          } else if (form.value.frequency_monitoring === 'yearly' && key.startsWith('yearly_')) {
            const index = key.split('_')[1];
            data[`yearly_${index}_date`] = currentDate;
          }
        }
      }
      console.log('updateSubObjectiveGoalDialogExec', data);
      this.obj.fetch('put', 'objectives', 'updateObjectives', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.updateObjectiveSubscription)).subscribe(data => {
        if (data.success) {
          this.editObjectiveGoalDialogCard = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Done',
            detail: data.message
          });
          this.childUpdateObjective.emit({
            success: true,
            id: data.data?.goalId
          });
          //reset the form so no data will be left off before getting a new one
          // this.editObjectiveGoalform.reset();
          this.cdr.detectChanges();
          //reset the flag
          this.uploadSuccessFlag = false;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    onGoalChange(event) {
      // capture here the goallist id if needed
    }
    onUpload(event, type, index) {
      this.showAddFilesComponent = true;
      this.parentAddnewFile = {
        addFile: true,
        objectiveId: this.tobeUpdatedSubGoal,
        frequencyFileName: `file_${type}_${index}`
      };
    }
    receivedAddFileEvent(event) {
      if (event) {
        //close the child component
        this.showAddFilesComponent = false;
      }
      // Handle the event when a file is added
      this.onFileUploadSuccess(event.frequencyFileName, event.frequencyFileNameForUpdate);
    }
    onFileUploadSuccess(controlName, fileName) {
      //hide the input and show the check icon
      this.uploadSuccessFlag = true;
      if (this.editObjectiveGoalform.contains(controlName)) {
        this.editObjectiveGoalform.get(controlName).setValue('🏷️ File added hit submit');
      } else {
        this.editObjectiveGoalform.addControl(controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(fileName));
      }
    }
    static #_ = this.ɵfac = function UpdateObjectiveComponent_Factory(t) {
      return new (t || UpdateObjectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: UpdateObjectiveComponent,
      selectors: [["app-update-objective"]],
      inputs: {
        updateObjective: "updateObjective"
      },
      outputs: {
        childUpdateObjective: "childUpdateObjective"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 14,
      consts: [["styleClass", "addObjective", "header", "Note: Once file is uploaded dialog cannot be cancelled", "position", "top", 3, "visible", "breakpoints", "closable", "visibleChange", "onHide"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [4, "ngIf"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "disabled", "click"], ["label", "Edit", 3, "click"], [3, "addNewFile", "childAddFile", 4, "ngIf"], [1, "grid", "flex-column"], ["class", "col-3 frequency", 4, "ngFor", "ngForOf"], [1, "col-3", "frequency"], [3, "for"], [3, "id", "formControlName", "min"], [1, "p-float-label", "p-input-icon-left"], [1, "pi", "pi-file-import"], ["type", "text", "id", "lefticon", "pInputText", "", 3, "formControlName", "click"], ["for", "lefticon"], ["class", "pi pi-check-circle text-teal-400 text-2xl pr-3 pb-2", 4, "ngIf"], [1, "pi", "pi-check-circle", "text-teal-400", "text-2xl", "pr-3", "pb-2"], [3, "addNewFile", "childAddFile"]],
      template: function UpdateObjectiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function UpdateObjectiveComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.editObjectiveGoalDialogCard = $event;
          })("onHide", function UpdateObjectiveComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.clearEditObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UpdateObjectiveComponent_div_4_Template, 3, 1, "div", 4)(5, UpdateObjectiveComponent_div_5_Template, 3, 1, "div", 4)(6, UpdateObjectiveComponent_div_6_Template, 3, 2, "div", 4)(7, UpdateObjectiveComponent_div_7_Template, 3, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "p-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_Template_p_button_click_9_listener() {
            return ctx.clearEditObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateObjectiveComponent_Template_p_button_click_10_listener() {
            return ctx.updateSubObjectiveGoalDialogExec(ctx.editObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, UpdateObjectiveComponent_app_add_files_11_Template, 1, 1, "app-add-files", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.editObjectiveGoalDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c4))("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.editObjectiveGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editObjectiveGoalform.get("frequency_monitoring").value === "yearly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editObjectiveGoalform.get("frequency_monitoring").value === "monthly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editObjectiveGoalform.get("frequency_monitoring").value === "quarterly");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editObjectiveGoalform.get("frequency_monitoring").value === "semi_annual");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.uploadSuccessFlag);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAddFilesComponent);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumber, _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_6__.AddFilesComponent],
      styles: [".addObjective {\n  overflow-x: hidden;\n}\n\n.frequency[_ngcontent-%COMP%] {\n  display: flex;\n  column-gap: 1rem;\n  align-items: flex-end;\n  width: 60%;\n}\n\n.grid.flex-column[_ngcontent-%COMP%] {\n  width: 150% !important;\n}\n\n@media (max-width: 440px) {\n  .grid.flex-column[_ngcontent-%COMP%] {\n    width: 200% !important;\n  }\n}\n@media (max-width: 372px) {\n  .grid.flex-column[_ngcontent-%COMP%] {\n    width: 260% !important;\n  }\n}\n@media (max-width: 305px) {\n  .grid.flex-column[_ngcontent-%COMP%] {\n    width: 260% !important;\n  }\n}"]
    });
  }
  return UpdateObjectiveComponent;
})();

/***/ }),

/***/ 38346:
/*!**********************************************!*\
  !*** ./src/app/admin/logs/logs.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsComponent: () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var src_app_demo_service_logs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/logs.service */ 22034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/scroller */ 26489);









const _c0 = ["filter"];
const _c1 = a0 => ({
  "surface-ground": a0
});
function LogsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " \u00A0 | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \u00A0 \u00A0 | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r1 = ctx.$implicit;
    const options_r2 = ctx.options;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, options_r2.odd));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", log_r1 == null ? null : log_r1.user == null ? null : log_r1.user.username)("src", ctx_r0.auth.domain + "/images/" + ctx_r0.getUserProfilePic(log_r1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (log_r1 == null ? null : log_r1.user == null ? null : log_r1.user.username) === ctx_r0.USERNAME ? "You" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 9, log_r1 == null ? null : log_r1.user == null ? null : log_r1.user.username), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 11, log_r1 == null ? null : log_r1.actionMade));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.getArticle(log_r1 == null ? null : log_r1.resource), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 13, log_r1 == null ? null : log_r1.resource), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 15, ctx_r0.getLogDisplayValue(log_r1)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 17, log_r1 == null ? null : log_r1.createdAt, "medium"), " ");
  }
}
const _c2 = () => ({
  width: "70vw",
  height: "50vh"
});
src_app_demo_service_logs_service__WEBPACK_IMPORTED_MODULE_1__.LogService;
let LogsComponent = /*#__PURE__*/(() => {
  class LogsComponent {
    constructor(log, auth) {
      this.log = log;
      this.auth = auth;
      this.getdepartmenttSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.logs = [];
      this.loading = true;
      this.first = 0;
      this.rows = 10;
      this.USERNAME = this.auth.getTokenUsername() || localStorage.getItem('username');
      this.getAllLogs();
      this.cols = [{
        field: 'method',
        header: 'Action'
      }, {
        field: 'status',
        header: 'Results'
      }, {
        field: 'url',
        header: ' Api Call'
      }, {
        field: 'user.username',
        header: 'User'
      }, {
        field: 'createdAt',
        header: 'Date'
      }];
    }
    getAllLogs() {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        _this.log.getAllLogs('get', 'logs', 'getAllLogs/' + _this.auth.getTokenUserID()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this.getdepartmenttSubscription)).subscribe(data => {
          _this.logs = data.data[0];
          _this.loading = false;
        });
      })();
    }
    onPageChange(event) {
      this.first = event.first;
      this.rows = event.rows;
    }
    clear(table) {
      table.clear();
      this.filter.nativeElement.value = '';
    }
    getArticle(resource) {
      if (!resource) return '';
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      return vowels.includes(resource[0].toLowerCase()) ? 'an' : 'a';
    }
    // getLogDisplayValue(log: any): string {
    //     if (log?.objectives?.[0]?.functional_objective) {
    //         return log.objectives[0].functional_objective;
    //     } else if (log?.ParamsObjectives?.[0]?.functional_objective) {
    //         return log.ParamsObjectives[0].functional_objective;
    //     } else if (log?.body?._id) {
    //         return 'ID: ' + log.body._id;
    //     } else if (log?.body?.username === log?.user.username) {
    //         return 'For Himself';
    //     } else if (log?.body?.functional_objective) {
    //         return log.body.functional_objective;
    //     } else if (log?.goals?.[0]?.goals || log?.body?.goals) {
    //         return log?.goals?.[0]?.goals || log?.body?.goals;
    //     } else {
    //         return 'for Himself';
    //     }
    // }
    getLogDisplayValue(log) {
      if (!log) {
        // Check if 'log' itself is undefined
        return 'Unknown'; // Or some other appropriate default value
      }

      if (log?.objectives?.[0]?.functional_objective) {
        return log.objectives[0].functional_objective;
      } else if (log?.ParamsObjectives?.[0]?.functional_objective) {
        return log.ParamsObjectives[0].functional_objective;
      } else if (log?.body?._id) {
        return 'ID: ' + log.body._id;
      } else if (log?.body?.username && log?.user?.username && log.body.username === log.user.username) {
        return 'For Himself';
      } else if (log?.body?.functional_objective) {
        return log.body.functional_objective;
      } else if (log?.goals?.[0]?.goals || log?.body?.goals) {
        return log?.goals?.[0]?.goals || log?.body?.goals;
      } else {
        return 'for Himself';
      }
    }
    getUserProfilePic(image) {
      return image?.user?.profile_pic === 'no-photo.png' ? image?.body?.profile_pic ? image?.body?.profile_pic : image?.user?.profile_pic : image?.user?.profile_pic;
    }
    static #_ = this.ɵfac = function LogsComponent_Factory(t) {
      return new (t || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_logs_service__WEBPACK_IMPORTED_MODULE_1__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LogsComponent,
      selectors: [["app-logs"]],
      viewQuery: function LogsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 7,
      vars: 7,
      consts: [[1, "grid"], [1, "card"], [1, "add-user-heading", "my-4"], [1, "text-xl", "font-medium", "my-4", "text-slate-950"], ["styleClass", "border-1 surface-border", 3, "items", "itemSize", "showLoader", "delay"], ["pTemplate", "item"], [1, "flex", "align-items-center", "p-2", 2, "height", "50px", 3, "ngClass"], ["width", "32", 1, "border-circle", 2, "vertical-align", "middle", 3, "alt", "src"], [1, "font-bold", "ml-2"], [1, "underline"], [1, "font-medium"], [1, "text-orange-500"]],
      template: function LogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Activity Logs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p-scroller", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LogsComponent_ng_template_6_Template, 21, 22, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.logs)("itemSize", 50)("showLoader", true)("delay", 250);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_8__.Scroller, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["[_nghost-%COMP%]     .p-scroller-viewport {\n  flex: none;\n}\n[_nghost-%COMP%]     p-skeleton {\n  width: 100%;\n}"]
    });
  }
  return LogsComponent;
})();

/***/ }),

/***/ 92535:
/*!************************************************************!*\
  !*** ./src/app/admin/users/add-user/add-user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddUserComponent: () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants */ 9878);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/password */ 47158);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 53965);


















function AddUserComponent_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You must enter an email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_div_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Only Chmsu addresses (chmsu.edu.ph) are accepted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddUserComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddUserComponent_div_19_span_1_Template, 2, 0, "span", 26)(2, AddUserComponent_div_19_span_2_Template, 2, 0, "span", 26)(3, AddUserComponent_div_19_span_3_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.Addform.get("email").touched && ctx_r0.Addform.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.Addform.get("email").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.Addform.get("email").hasError("pattern"));
  }
}
function AddUserComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "form", 2)(2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Vice Presidents");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "p-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.formGroupVP);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r1.selectVPDropdown);
  }
}
function AddUserComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "form", 2)(2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroupDirector);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r2.selectDirectorDropdown);
  }
}
const _c0 = () => ({
  width: "50vw"
});
const _c1 = () => ({
  "1199px": "50vw",
  "890px": "40vw",
  "500px": "30vw"
});
let AddUserComponent = /*#__PURE__*/(() => {
  class AddUserComponent {
    ngOnInit() {
      this.createFormAddUser();
      this.formGroupVP = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectVP: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.formGroupDirector = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectDirector: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.Addform.get('role').valueChanges.subscribe(role => {
        this.getAllVicePresident();
        this.getAllDirectors();
        if (role && role.code) {
          if (role.code === 'vice-president') {
            this.isVicePresident = true;
          }
          if (role.code === 'director') {
            this.isDirector = true;
            this.isVicePresident = false;
          }
          if (role.code === 'office-head') {
            this.isDirector = false;
            this.isVicePresident = false;
          }
        }
      });
    }
    ngOnChanges(changes) {
      this.addnewUserEventFromParent = changes['addNewUser']?.currentValue;
      if (this.addnewUserEventFromParent && this.addnewUserEventFromParent.addNewUser) {
        this.addUserDialogCard = this.addnewUserEventFromParent.addUserDialogCard;
        this.getAllCampuses();
        this.getAllDepartmentDropdown();
        this.getAllVicePresident();
        this.getAllDirectors();
      }
    }
    constructor(AddUserFormBuilder, auth, dept, camp, user, messageService, formBuilder) {
      this.AddUserFormBuilder = AddUserFormBuilder;
      this.auth = auth;
      this.dept = dept;
      this.camp = camp;
      this.user = user;
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.childAddUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
      // dropdown values
      this.deptDropdownCampusValue = [];
      this.dropdownVPValue = [];
      this.deptDropdownValue = [];
      this.selectVPDropdown = [];
      this.selectDirectorDropdown = [];
      this.addUserDialogCard = false;
      this.roleOptions = _contants__WEBPACK_IMPORTED_MODULE_1__.ROLE_OPTIONS;
      this.getUserSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.isVicePresident = false;
      this.isDirector = false;
    }
    createFormAddUser() {
      this.Addform = this.AddUserFormBuilder.group({
        firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^.+@chmsu.edu.ph$')]],
        // department: new FormControl(),
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        // vice_president: new FormControl(''),
        // director: new FormControl(''),
        // office_head: ['', [Validators.required]],
      });
    }

    getAllVicePresident() {
      this.user.fetch('get', 'users', 'getAllVicePresident').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.selectVPDropdown = data.data[0] || [];
      });
    }
    getAllDirectors() {
      this.user.fetch('get', 'users', 'getAllDirector').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.selectDirectorDropdown = data.data[0] || [];
      });
    }
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    getAllDepartmentDropdown() {
      this.camp.fetch('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownValue = data.data[0];
      });
    }
    addUserFunction(form) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let data = {
          firstname: form.value.firstname,
          lastname: form.value.lastname,
          username: form.value.username,
          email: form.value.email,
          department: _this.formGroupDemo.value.selectDepartment.code,
          department_id: _this.formGroupDemo.value.selectDepartment.id,
          campus: _this.formGroupCampus.value.selectedCampus.name,
          password: form.value.password.trim(),
          confirm: form.value.confirm.trim(),
          role: form.value.role?.code || '',
          vice_president_id: _this.formGroupVP?.value?.selectVP?.id || '',
          vice_president_name: _this.formGroupVP?.value?.selectVP?.fullname || '',
          director_id: _this.formGroupDirector?.value?.selectDirector?.id || '',
          director_name: _this.formGroupDirector.value?.selectDirector?.fullname || ''
        };
        if (form.value.firstname == null || !form.value.firstname && !form.value.lastname || form.value.lastname == null) {
          return _this.messageService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: 'First Name and Last Name are required'
          });
        }
        console.log({
          addUserFunction: data
        });
        _this.user.fetch('post', 'users', 'addUser', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(_this.getUserSubscription)).subscribe(data => {
          if (data.success) {
            // this.getAllusers();
            _this.childAddUserEvent.emit({
              data: data.data,
              addNewUser: true
            });
            _this.messageService.add({
              severity: 'success  ',
              summary: 'Done',
              detail: data.message
            });
            _this.addUserDialogCard = false;
            _this.isDirector = false;
            _this.isVicePresident = false;
            _this.formGroupVP.reset();
            _this.formGroupDirector.reset();
            _this.formGroupDemo.reset();
            _this.formGroupCampus.reset();
            _this.Addform.reset();
          } else {
            _this.messageService.add({
              severity: 'error  ',
              summary: 'Error',
              detail: data.message
            });
          }
        });
      })();
    }
    resetForm() {
      this.Addform.reset();
      this.formGroupCampus.reset();
      this.formGroupDemo.reset();
      this.formGroupDirector.reset();
      this.formGroupVP.reset();
    }
    getErrorMessage(formControlName) {
      if (this.Addform.get(formControlName)?.hasError('required')) {
        return 'You must enter a value.';
      } else if (this.Addform.get(formControlName)?.hasError('email')) {
        return 'Please enter a valid email address.';
      } else if (this.Addform.get(formControlName)?.hasError('pattern')) {
        return 'Only Chmsu addresses (chmsu.edu.ph) are accepted.';
      }
      return '';
    }
    ngOnDestroy() {
      this.getUserSubscription.next();
      this.getUserSubscription.complete();
    }
    static #_ = this.ɵfac = function AddUserComponent_Factory(t) {
      return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_4__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddUserComponent,
      selectors: [["app-add-user"]],
      inputs: {
        addNewUser: "addNewUser"
      },
      outputs: {
        childAddUserEvent: "childAddUserEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
      decls: 48,
      vars: 27,
      consts: [["header", "Add User", "id", "tester", "showEffect", "fade", 3, "visible", "breakpoints", "draggable", "resizable", "visibleChange", "onHide"], [1, "card", "p-fluid"], [3, "formGroup"], [1, "field"], ["for", "firstname"], ["pInputText", "", "id", "firstname", "autocomplete", "off", "formControlName", "firstname", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "lastname"], ["pInputText", "", "id", "lastname", "autocomplete", "off", "formControlName", "lastname", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "username"], ["pInputText", "", "id", "username", "autocomplete", "off", "formControlName", "username", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "email"], ["pInputText", "", "id", "email", "formControlName", "email", "autocomplete", "off", "required", "", 1, "flex-auto", 3, "ngClass"], ["class", "bg-red-500 text-white p-2 rounded", 4, "ngIf"], ["for", "password"], ["id", "password", "autocomplete", "off", "formControlName", "password", "required", "", 1, "flex-auto", 3, "ngClass", "toggleMask"], ["for", "confirm"], ["id", "confirm", "formControlName", "confirm", "autocomplete", "off", "required", "", 1, "flex-auto", 3, "ngClass", "toggleMask"], ["htmlFor", "department"], ["formControlName", "role", "optionLabel", "name", "placeholder", "Select a Role", 3, "options"], ["class", "field", 4, "ngIf"], ["formControlName", "selectDepartment", "optionLabel", "name", "filterBy", "name", "placeholder", "Search a Department", 3, "options", "filter", "showClear"], ["formControlName", "selectedCampus", "optionLabel", "name", "placeholder", "Select a Campus", 3, "options"], [1, "field", "footer-button-adduser"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"], [1, "bg-red-500", "text-white", "p-2", "rounded"], [4, "ngIf"], ["formControlName", "selectVP", "optionLabel", "fullname", "placeholder", "Select a VP", 3, "options"], ["formControlName", "selectDirector", "optionLabel", "fullname", "placeholder", "Select a Director", 3, "options"]],
      template: function AddUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function AddUserComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.addUserDialogCard = $event;
          })("onHide", function AddUserComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 3)(16, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddUserComponent_div_19_Template, 4, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 3)(21, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "p-password", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 3)(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "p-password", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 3)(29, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "p-dropdown", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AddUserComponent_div_32_Template, 5, 2, "div", 19)(33, AddUserComponent_div_33_Template, 5, 2, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 3)(35, "form", 2)(36, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "p-dropdown", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 3)(40, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "p-dropdown", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 22)(45, "p-button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddUserComponent_Template_p_button_click_45_listener() {
            return ctx.addUserDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " \u00A0\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddUserComponent_Template_p_button_click_47_listener() {
            return ctx.addUserFunction(ctx.Addform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.addUserDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c1))("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.Addform);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("firstname").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["firstname"].errors == null ? null : ctx.Addform.controls["firstname"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("lastname").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["lastname"].errors == null ? null : ctx.Addform.controls["lastname"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("username").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["username"].errors == null ? null : ctx.Addform.controls["username"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("email").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["email"].errors == null ? null : ctx.Addform.controls["email"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Addform.get("email").hasError("required") && ctx.Addform.get("email").touched || ctx.Addform.get("email").hasError("email") || ctx.Addform.get("email").hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("password").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["password"].errors == null ? null : ctx.Addform.controls["password"].errors.required) ? "ng-invalid ng-dirty" : "")("toggleMask", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (ctx.Addform == null ? null : ctx.Addform.get("confirm").touched) && (ctx.Addform == null ? null : ctx.Addform.controls["confirm"].errors == null ? null : ctx.Addform.controls["confirm"].errors.required) ? "ng-invalid ng-dirty" : "")("toggleMask", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.roleOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isVicePresident);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isDirector && !ctx.isVicePresident);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupDemo);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownValue)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroupCampus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.deptDropdownCampusValue);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_password__WEBPACK_IMPORTED_MODULE_14__.Password, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown],
      styles: [".p-dialog {\n  overflow-y: auto;\n}"]
    });
  }
  return AddUserComponent;
})();

/***/ }),

/***/ 9878:
/*!*****************************************!*\
  !*** ./src/app/admin/users/contants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROLE_OPTIONS: () => (/* binding */ ROLE_OPTIONS)
/* harmony export */ });
// src/app/constants/constants.ts
const ROLE_OPTIONS = [{
  name: 'Admin',
  code: 'admin'
}, {
  name: 'President',
  code: 'president'
}, {
  name: 'Vice President',
  code: 'vice-president'
}, {
  name: 'Director',
  code: 'director'
}, {
  name: 'Office Head',
  code: 'office-head'
}];

/***/ }),

/***/ 57669:
/*!**************************************************************!*\
  !*** ./src/app/admin/users/edit-user/edit-user.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditUserComponent: () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants */ 9878);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ 47158);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 53965);

















function EditUserComponent_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You must enter an email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditUserComponent_div_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditUserComponent_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Only Chmsu addresses (chmsu.edu.ph) are accepted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EditUserComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EditUserComponent_div_19_span_1_Template, 2, 0, "span", 27)(2, EditUserComponent_div_19_span_2_Template, 2, 0, "span", 27)(3, EditUserComponent_div_19_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").touched && ctx_r0.form.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").hasError("pattern"));
  }
}
function EditUserComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vice Presidents");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.selectVP);
  }
}
function EditUserComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-dropdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r2.selectDiretor);
  }
}
const _c0 = () => ({
  width: "50vw"
});
const _c1 = () => ({
  "1199px": "50vw",
  "890px": "40vw",
  "500px": "30vw"
});
let EditUserComponent = /*#__PURE__*/(() => {
  class EditUserComponent {
    constructor(AddUserFormBuilder, auth, dept, camp, user, messageService, formBuilder) {
      this.AddUserFormBuilder = AddUserFormBuilder;
      this.auth = auth;
      this.dept = dept;
      this.camp = camp;
      this.user = user;
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.childEditUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
      this.deptDropdownCampusValue = [];
      this.deptDropdownValue = [];
      this.dropdownVPValue = [];
      this.selectDiretor = [];
      this.selectVP = [];
      this.updateUserCard = false;
      this.getUserSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
      this.roleOptions = _contants__WEBPACK_IMPORTED_MODULE_0__.ROLE_OPTIONS;
      this.isVicePresident = false;
      this.isDirector = false;
    }
    ngOnInit() {
      this.createForm();
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.formGroupVP = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        selectVP: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
      this.getAllCampuses();
      this.getAllVicePresident();
      this.getAllDepartmentDropdown();
      this.getAllDirectors();
      this.form.get('role').valueChanges.subscribe(role => {
        this.getAllVicePresident();
        if (role && role.code) {
          if (role.code === 'vice-president') {
            this.isVicePresident = true;
          }
          if (role.code === 'director') {
            this.isDirector = true;
            this.isVicePresident = false;
          }
          if (role.code === 'office-head') {
            this.isDirector = false;
            this.isVicePresident = false;
          }
        }
      });
    }
    ngOnChanges(changes) {
      // this.getAllCampuses();
      // this.getAllVicePresident();
      // this.getAllDepartmentDropdown();
      const data = changes['updateUser']?.currentValue?.data;
      this.editNewUserEventFromParent = changes['updateUser']?.currentValue;
      console.log({
        ngOnChanges: data
      });
      if (data && (!data.vice_president_id || !data.vice_president_name)) {
        this.isVicePresident = false;
        this.form.controls['vice_president'].setValue('');
      }
      if (data && (!data.director_id || !data.director_name)) {
        this.isDirector = false;
        this.form.controls['director'].setValue('');
      }
      if (this.editNewUserEventFromParent && this.editNewUserEventFromParent.updateUser) {
        this.updateUserCard = this.editNewUserEventFromParent.updateUserCard;
        this.selectedDept = data.department;
        this.selectedRole = data.role;
        this.formGroupDemo.setValue({
          selectDepartment: this.deptDropdownValue.find(dept => dept.code === data.department)
        });
        // if (data.role === 'director') {
        //     this.isDirector = true;
        //     this.isVicePresident = true;
        //     selectedVp = this.selectVP.find(
        //         (vp) => vp.id === data.vice_president_id
        //     );
        //     // this.form.controls['vice_president'].setValue('');
        //     this.form.controls['director'].setValue(data.director);
        // } else if (data.role === 'vice-president') {
        //     this.isVicePresident = false;
        //     this.isDirector = false;
        //     this.form.controls['vice_president'].setValue(
        //         data.vice_president
        //     );
        //     this.form.controls['director'].setValue('');
        // } else {
        //     this.isDirector = false;
        //     this.isVicePresident = false;
        //     this.form.controls['vice_president'].setValue('');
        //     this.form.controls['director'].setValue('');
        // }
        const rolesSelected = this.roleOptions.find(role => role.code === data.role);
        this.formGroupCampus.setValue({
          selectedCampus: this.deptDropdownCampusValue.find(dept => dept.code === data.campus)
        });
        const selectedDirector = this.selectDiretor.find(director => director.id === data.director_id);
        const selectedVp = this.selectVP.find(vp => vp.id === data.vice_president_id);
        this.form.setValue({
          firstname: data.firstname ? data.firstname : 'tester',
          lastname: data.lastname ? data.lastname : '',
          username: data.username ? data.username : '',
          email: data.email ? data.email : '',
          department: data.department ? data.department : '',
          role: rolesSelected || '',
          vice_president: selectedVp || '',
          director: selectedDirector || '',
          office_head: '',
          campus: data.campus ? data.campus : '',
          password: '',
          confirm: ''
        });
        this.updateUserCard = true;
        this.updateUserId = data.id;
      }
    }
    createForm() {
      this.form = this.formBuilder.group({
        firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        vice_president: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        director: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        office_head: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
    }
    getAllVicePresident() {
      this.user.fetch('get', 'users', 'getAllVicePresident').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.selectVP = data.data[0] || [];
      });
    }
    getAllDirectors() {
      this.user.fetch('get', 'users', 'getAllDirector').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.selectDiretor = data.data[0] || [];
        console.log({
          getAllDirectors: this.selectDiretor
        });
      });
    }
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    getAllDepartmentDropdown() {
      this.camp.fetch('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownValue = data.data[0];
      });
    }
    ngOnDestroy() {
      this.getUserSubscription.next();
      this.getUserSubscription.complete();
    }
    updateUserExecution(form) {
      let data = {
        id: this.updateUserId,
        username: form.value.username,
        email: form.value.email,
        department: this.formGroupDemo.value.selectDepartment.code,
        department_id: this.formGroupDemo.value.selectDepartment.id,
        campus: this.formGroupCampus.value.selectedCampus.name,
        role: form.value.role.code
      };
      if (form.value.vice_president.id) {
        data.vice_president_id = form.value.vice_president.id;
        data.vice_president_name = form.value.vice_president.fullname;
      }
      if (form.value.director.id) {
        data.director_id = form.value.director.id;
        data.director_name = form.value.director.fullname;
      }
      if (form.value.password.trim() || form.value.confirm.trim()) {
        if (form.value.password.trim() !== form.value.confirm.trim()) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Password and confirm password do not match'
          });
          return;
        } else {
          data.password = form.value.password.trim();
          data.confirm = form.value.confirm.trim();
        }
      }
      console.log({
        updateUserExecution: data
      });
      this.user.fetch('put', 'users', 'updateUserAdmin', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        if (data.success) {
          this.childEditUserEvent.emit({
            data: data.data,
            addEditedUser: true
          });
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.updateUserCard = false;
          this.form.reset();
        } else {
          this.messageService.add({
            severity: 'danger  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    static #_ = this.ɵfac = function EditUserComponent_Factory(t) {
      return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_3__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: EditUserComponent,
      selectors: [["app-edit-user"]],
      inputs: {
        updateUser: "updateUser"
      },
      outputs: {
        childEditUserEvent: "childEditUserEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
      decls: 48,
      vars: 27,
      consts: [["header", "Edit User", "showEffect", "fade", 3, "visible", "breakpoints", "draggable", "resizable", "visibleChange", "onHide"], [1, "card", "p-fluid"], ["autocomplete", "off", 3, "formGroup"], [1, "field"], ["for", "firstname"], ["pInputText", "", "id", "firstname", "autocomplete", "off", "formControlName", "firstname", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "lastname"], ["pInputText", "", "id", "lastname", "autocomplete", "off", "formControlName", "lastname", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "username"], ["pInputText", "", "id", "username", "autocomplete", "off", "formControlName", "username", "required", "", 1, "flex-auto", 3, "ngClass"], ["for", "email"], ["pInputText", "", "id", "email", "formControlName", "email", "autocomplete", "off", "required", "", 1, "flex-auto", 3, "ngClass"], ["class", "bg-red-500 text-white p-2 rounded", 4, "ngIf"], ["for", "password"], ["id", "password", "autocomplete", "off", "type", "password", "formControlName", "password", "required", "", 1, "flex-auto", 3, "ngClass", "toggleMask"], ["for", "confirm"], ["id", "confirm", "formControlName", "confirm", "autocomplete", "off", "type", "password", "required", "", 1, "flex-auto", 3, "ngClass", "toggleMask"], ["htmlFor", "department"], ["formControlName", "role", "optionLabel", "name", "placeholder", "Select a Role", 3, "options"], ["class", "field", 4, "ngIf"], [3, "formGroup"], ["formControlName", "selectDepartment", "optionLabel", "name", "filterBy", "name", "placeholder", "Search a Department", 3, "options", "filter", "showClear"], ["formControlName", "selectedCampus", "optionLabel", "name", "placeholder", "Select a Campus", 3, "options"], [1, "field", "footer-button-adduser"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"], [1, "bg-red-500", "text-white", "p-2", "rounded"], [4, "ngIf"], ["formControlName", "vice_president", "optionLabel", "fullname", "placeholder", "Select a VP", 3, "options"], ["formControlName", "director", "optionLabel", "fullname", "placeholder", "Select a Director", 3, "options"]],
      template: function EditUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function EditUserComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.updateUserCard = $event;
          })("onHide", function EditUserComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.form.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3)(16, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, EditUserComponent_div_19_Template, 4, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3)(21, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "p-password", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 3)(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "p-password", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 3)(29, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "p-dropdown", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EditUserComponent_div_32_Template, 4, 1, "div", 19)(33, EditUserComponent_div_33_Template, 4, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 3)(35, "form", 20)(36, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "p-dropdown", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 3)(40, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "form", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "p-dropdown", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 23)(45, "p-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditUserComponent_Template_p_button_click_45_listener() {
            return ctx.updateUserCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " \u00A0\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "p-button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditUserComponent_Template_p_button_click_47_listener() {
            return ctx.updateUserExecution(ctx.form);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.updateUserCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c1))("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("firstname").touched) && (ctx.form == null ? null : ctx.form.controls["firstname"].errors == null ? null : ctx.form.controls["firstname"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("lastname").touched) && (ctx.form == null ? null : ctx.form.controls["lastname"].errors == null ? null : ctx.form.controls["lastname"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("username").touched) && (ctx.form == null ? null : ctx.form.controls["username"].errors == null ? null : ctx.form.controls["username"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("email").touched) && (ctx.form == null ? null : ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.form.get("email").touched || ctx.form.get("email").hasError("email") || ctx.form.get("email").hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("password").touched) && (ctx.form == null ? null : ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors.required) ? "ng-invalid ng-dirty" : "")("toggleMask", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx.form == null ? null : ctx.form.get("confirm").touched) && (ctx.form == null ? null : ctx.form.controls["confirm"].errors == null ? null : ctx.form.controls["confirm"].errors.required) ? "ng-invalid ng-dirty" : "")("toggleMask", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.roleOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isVicePresident);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDirector && !ctx.isVicePresident);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroupDemo);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.deptDropdownValue)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroupCampus);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.deptDropdownCampusValue);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_password__WEBPACK_IMPORTED_MODULE_13__.Password, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown]
    });
  }
  return EditUserComponent;
})();

/***/ }),

/***/ 89909:
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/chip */ 42169);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ 92535);
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ 57669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 96814);

















const _c0 = ["filter"];
function UsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function UsersComponent_ng_template_9_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function UsersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th", 25)(6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 25)(10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "p-columnFilter", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 25)(14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "p-columnFilter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 25)(18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Campus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "p-columnFilter", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 25)(22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "p-columnFilter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th", 25)(26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function UsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "p-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td")(17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_11_Template_span_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const user_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.changeUserStatus(user_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td")(20, "div", 35)(21, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_11_Template_i_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const user_r12 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.updateUser(user_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_11_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const user_r12 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.deleteUser(user_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", user_r12.firstname ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 9, user_r12.firstname) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, "no firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("image", user_r12.profile_pic ? ctx_r3.auth.domain + "/images/" + user_r12.profile_pic : ctx_r3.auth.domain + "/images/no-photo.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r12.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 13, user_r12.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 15, user_r12.role), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 17, user_r12.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + user_r12.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r12.status);
  }
}
function UsersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Users found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Loading Users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.changeUserStatuExecution());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_ng_template_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.deleteUserExec());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c1 = () => ["username", "email", "department", "role", "campus", "status", "options"];
const _c2 = () => ({
  width: "20vw"
});
const _c3 = () => ({
  "960px": "50vw"
});
let UsersComponent = /*#__PURE__*/(() => {
  class UsersComponent {
    constructor(user, auth, dept, camp, messageService, formBuilder, AddUserFormBuilder) {
      this.user = user;
      this.auth = auth;
      this.dept = dept;
      this.camp = camp;
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.AddUserFormBuilder = AddUserFormBuilder;
      this.users = [];
      this.statuses = [];
      this.deptDropdownValue = [];
      this.deptDropdownCampusValue = [];
      this.loading = true;
      this.changeStatusCard = false;
      this.updateUserCard = false;
      this.addUserDialogCard = false;
      this.getUserSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.roles = [{
        name: 'admin',
        code: 'admin'
      }, {
        name: 'user',
        code: 'user'
      }];
    }
    ngOnInit() {
      this.getAllusers();
      this.getAllDepartments();
      this.getAllCampuses();
      this.getAllDepartmentDropdown();
      this.cols = [{
        field: 'username',
        header: 'Username'
      }, {
        field: 'email',
        header: 'Email'
      }, {
        field: 'department',
        header: 'Department'
      }, {
        field: 'status',
        header: 'Status'
      }, {
        field: 'role',
        header: 'Role'
      }];
      this.statuses = [{
        label: 'Inactive',
        value: 'unqualified'
      }, {
        label: 'Active',
        value: 'qualified'
      }, {
        label: 'Pending',
        value: 'proposal'
      }];
      this.createForm();
      // this.createFormAddUser();
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
      });
    }
    createForm() {
      this.form = this.formBuilder.group({
        username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
    }
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    getAllDepartmentDropdown() {
      this.camp.fetch('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.deptDropdownValue = data.data[0];
      });
    }
    getAllusers() {
      this.loading = true;
      this.user.fetch('get', 'users', `getAllUsersExceptLoggedIn/${this.auth.getTokenUserID()}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        console.log({
          getAllusers: data
        });
        this.users = data.users;
        this.loading = false;
      });
    }
    ngOnDestroy() {
      // Do not forget to unsubscribe the event
      this.getUserSubscription.unsubscribe();
    }
    onGlobalFilter(table, event) {
      table.filterGlobal(event.target.value, 'contains');
    }
    clear(table) {
      table.clear();
      this.filter.nativeElement.value = '';
    }
    updateUserExecution(form) {
      let data = {
        id: this.updateUserId,
        username: form.value.username,
        email: form.value.email,
        department: this.formGroupDemo.value.selectDepartment.name,
        campus: this.formGroupCampus.value.selectedCampus.name
        // role: form.value.role.name,
      };

      this.user.fetch('put', 'users', 'updateUser', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        if (data.success) {
          this.getAllusers();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.updateUserCard = false;
        } else {
          this.messageService.add({
            severity: 'danger  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    deleteUser(id) {
      this.deleteUserCard = true;
      this.deleteUserId = id;
    }
    deleteUserExec() {
      this.user.fetch('put', 'users', 'setInactiveUser', {
        id: this.deleteUserId
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        if (data.success) {
          this.getAllusers();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.deleteUserCard = false;
        } else {
          this.messageService.add({
            severity: 'danger  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    changeUserStatus(id) {
      this.changeStatusCard = true;
      this.changeStatusId = id;
    }
    changeUserStatuExecution(id) {
      this.changeStatusCard = false;
      this.user.fetch('put', 'users', 'changeUserStatus', {
        id: this.changeStatusId
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        if (data.success) {
          this.getAllusers();
          this.changeStatusCard = false;
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
        } else {
          this.messageService.add({
            severity: 'danger  ',
            summary: 'Error',
            detail: data.message
          });
          this.changeStatusCard = false;
        }
      });
    }
    getAllDepartments() {
      this.dept.getRoute('get', 'department', 'getAllDepartment').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.getUserSubscription)).subscribe(data => {
        this.AllDepartments = data.department;
      });
    }
    getErrorMessage(formControlName) {
      if (this.Addform.get(formControlName)?.hasError('required')) {
        return 'You must enter a value.';
      } else if (this.Addform.get(formControlName)?.hasError('email')) {
        return 'Please enter a valid email address.';
      } else if (this.Addform.get(formControlName)?.hasError('pattern')) {
        return 'Only Chmsu addresses (chmsu.edu.ph) are accepted.';
      }
      return '';
    }
    updateUser(data) {
      this.parentUpdateUser = {
        updateUser: 'updateUser',
        updateUserCard: true,
        data: data
      };
    }
    receivedEditUserEvent(event) {
      if (event.addEditedUser) {
        this.getAllusers();
      }
    }
    // add user child component
    addUserDialogButton() {
      this.parentAddNewUser = {
        addNewUser: 'addNewUser',
        addUserDialogCard: true
      };
      // this.addUserDialogCard = true;
    }

    receivedAddUserEvent(event) {
      if (event.addNewUser) {
        this.getAllusers();
      }
    }
    static #_ = this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_3__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["ngx-users"]],
      viewQuery: function UsersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 24,
      vars: 21,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["pButton", "", "icon", "pi pi-user-plus", "label", "Add User", 3, "click"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["header", "Change User", "id", "tester", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "line-height-3", "m-0"], ["pTemplate", "footer"], ["header", "Dialog", "id", "tester", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "updateUser", "childEditUserEvent"], [3, "addNewUser", "childAddUserEvent"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "username", "display", "menu", "placeholder", "Search by Username"], ["type", "text", "field", "email", "display", "menu", "placeholder", "Search by Email"], ["type", "text", "field", "department", "display", "menu", "placeholder", "Search by Department"], ["type", "text", "field", "role", "display", "menu", "placeholder", "Search by Role"], ["type", "text", "field", "campus", "display", "menu", "placeholder", "Search by Campus"], ["type", "text", "field", "status", "display", "menu", "placeholder", "Search by Status"], ["styleClass", "m-1", 3, "label", "image"], [3, "click"], [1, "options-users"], [1, "pi", "pi-user-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["colspan", "8"], ["pButton", "", "icon", "pi pi-check", "label", "Ok", 1, "p-button-outlined", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_6_listener() {
            return ctx.addUserDialogButton();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p-table", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UsersComponent_ng_template_9_Template, 6, 0, "ng-template", 8)(10, UsersComponent_ng_template_10_Template, 28, 0, "ng-template", 9)(11, UsersComponent_ng_template_11_Template, 23, 19, "ng-template", 10)(12, UsersComponent_ng_template_12_Template, 3, 0, "ng-template", 11)(13, UsersComponent_ng_template_13_Template, 3, 0, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p-dialog", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function UsersComponent_Template_p_dialog_visibleChange_14_listener($event) {
            return ctx.changeStatusCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Change Users Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UsersComponent_ng_template_17_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p-dialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function UsersComponent_Template_p_dialog_visibleChange_18_listener($event) {
            return ctx.deleteUserCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Delete User?");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UsersComponent_ng_template_21_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "app-edit-user", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("childEditUserEvent", function UsersComponent_Template_app_edit_user_childEditUserEvent_22_listener($event) {
            return ctx.receivedEditUserEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "app-add-user", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("childAddUserEvent", function UsersComponent_Template_app_add_user_childAddUserEvent_23_listener($event) {
            return ctx.receivedAddUserEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.users)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.changeStatusCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.deleteUserCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("updateUser", ctx.parentUpdateUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("addNewUser", ctx.parentAddNewUser);
        }
      },
      dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_chip__WEBPACK_IMPORTED_MODULE_15__.Chip, _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent, _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__.EditUserComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe],
      styles: [".options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n@media screen and (max-width: 757px) {\n  .footer-button-adduser[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n}"]
    });
  }
  return UsersComponent;
})();

/***/ }),

/***/ 31457:
/*!*****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-typescript.min.js ***!
  \*****************************************************************/
/***/ (() => {

!function (e) {
  e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var s = e.languages.extend("typescript", {});
  delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: s
        }
      }
    }
  }), e.languages.ts = e.languages.typescript;
}(Prism);

/***/ }),

/***/ 92927:
/*!*****************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js ***!
  \*****************************************************************************/
/***/ (() => {

(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
    return;
  }
  var LINE_NUMBERS_CLASS = 'line-numbers';
  var LINKABLE_LINE_NUMBERS_CLASS = 'linkable-line-numbers';
  var NEW_LINE_EXP = /\n(?!$)/g;

  /**
   * @param {string} selector
   * @param {ParentNode} [container]
   * @returns {HTMLElement[]}
   */
  function $$(selector, container) {
    return Array.prototype.slice.call((container || document).querySelectorAll(selector));
  }

  /**
   * Returns whether the given element has the given class.
   *
   * @param {Element} element
   * @param {string} className
   * @returns {boolean}
   */
  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  /**
   * Calls the given function.
   *
   * @param {() => any} func
   * @returns {void}
   */
  function callFunction(func) {
    func();
  }

  // Some browsers round the line-height, others don't.
  // We need to test for it to position the elements properly.
  var isLineHeightRounded = function () {
    var res;
    return function () {
      if (typeof res === 'undefined') {
        var d = document.createElement('div');
        d.style.fontSize = '13px';
        d.style.lineHeight = '1.5';
        d.style.padding = '0';
        d.style.border = '0';
        d.innerHTML = '&nbsp;<br />&nbsp;';
        document.body.appendChild(d);
        // Browsers that round the line-height should have offsetHeight === 38
        // The others should have 39.
        res = d.offsetHeight === 38;
        document.body.removeChild(d);
      }
      return res;
    };
  }();

  /**
   * Returns the top offset of the content box of the given parent and the content box of one of its children.
   *
   * @param {HTMLElement} parent
   * @param {HTMLElement} child
   */
  function getContentBoxTopOffset(parent, child) {
    var parentStyle = getComputedStyle(parent);
    var childStyle = getComputedStyle(child);

    /**
     * Returns the numeric value of the given pixel value.
     *
     * @param {string} px
     */
    function pxToNumber(px) {
      return +px.substr(0, px.length - 2);
    }
    return child.offsetTop + pxToNumber(childStyle.borderTopWidth) + pxToNumber(childStyle.paddingTop) - pxToNumber(parentStyle.paddingTop);
  }

  /**
   * Returns whether the Line Highlight plugin is active for the given element.
   *
   * If this function returns `false`, do not call `highlightLines` for the given element.
   *
   * @param {HTMLElement | null | undefined} pre
   * @returns {boolean}
   */
  function isActiveFor(pre) {
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return false;
    }
    if (pre.hasAttribute('data-line')) {
      return true;
    }
    if (pre.id && Prism.util.isActive(pre, LINKABLE_LINE_NUMBERS_CLASS)) {
      // Technically, the line numbers plugin is also necessary but this plugin doesn't control the classes of
      // the line numbers plugin, so we can't assume that they are present.
      return true;
    }
    return false;
  }
  var scrollIntoView = true;
  Prism.plugins.lineHighlight = {
    /**
     * Highlights the lines of the given pre.
     *
     * This function is split into a DOM measuring and mutate phase to improve performance.
     * The returned function mutates the DOM when called.
     *
     * @param {HTMLElement} pre
     * @param {string | null} [lines]
     * @param {string} [classes='']
     * @returns {() => void}
     */
    highlightLines: function highlightLines(pre, lines, classes) {
      lines = typeof lines === 'string' ? lines : pre.getAttribute('data-line') || '';
      var ranges = lines.replace(/\s+/g, '').split(',').filter(Boolean);
      var offset = +pre.getAttribute('data-line-offset') || 0;
      var parseMethod = isLineHeightRounded() ? parseInt : parseFloat;
      var lineHeight = parseMethod(getComputedStyle(pre).lineHeight);
      var hasLineNumbers = Prism.util.isActive(pre, LINE_NUMBERS_CLASS);
      var codeElement = pre.querySelector('code');
      var parentElement = hasLineNumbers ? pre : codeElement || pre;
      var mutateActions = /** @type {(() => void)[]} */[];
      var lineBreakMatch = codeElement.textContent.match(NEW_LINE_EXP);
      var numberOfLines = lineBreakMatch ? lineBreakMatch.length + 1 : 1;
      /**
       * The top offset between the content box of the <code> element and the content box of the parent element of
       * the line highlight element (either `<pre>` or `<code>`).
       *
       * This offset might not be zero for some themes where the <code> element has a top margin. Some plugins
       * (or users) might also add element above the <code> element. Because the line highlight is aligned relative
       * to the <pre> element, we have to take this into account.
       *
       * This offset will be 0 if the parent element of the line highlight element is the `<code>` element.
       */
      var codePreOffset = !codeElement || parentElement == codeElement ? 0 : getContentBoxTopOffset(pre, codeElement);
      ranges.forEach(function (currentRange) {
        var range = currentRange.split('-');
        var start = +range[0];
        var end = +range[1] || start;
        end = Math.min(numberOfLines + offset, end);
        if (end < start) {
          return;
        }

        /** @type {HTMLElement} */
        var line = pre.querySelector('.line-highlight[data-range="' + currentRange + '"]') || document.createElement('div');
        mutateActions.push(function () {
          line.setAttribute('aria-hidden', 'true');
          line.setAttribute('data-range', currentRange);
          line.className = (classes || '') + ' line-highlight';
        });

        // if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
        if (hasLineNumbers && Prism.plugins.lineNumbers) {
          var startNode = Prism.plugins.lineNumbers.getLine(pre, start);
          var endNode = Prism.plugins.lineNumbers.getLine(pre, end);
          if (startNode) {
            var top = startNode.offsetTop + codePreOffset + 'px';
            mutateActions.push(function () {
              line.style.top = top;
            });
          }
          if (endNode) {
            var height = endNode.offsetTop - startNode.offsetTop + endNode.offsetHeight + 'px';
            mutateActions.push(function () {
              line.style.height = height;
            });
          }
        } else {
          mutateActions.push(function () {
            line.setAttribute('data-start', String(start));
            if (end > start) {
              line.setAttribute('data-end', String(end));
            }
            line.style.top = (start - offset - 1) * lineHeight + codePreOffset + 'px';
            line.textContent = new Array(end - start + 2).join(' \n');
          });
        }
        mutateActions.push(function () {
          line.style.width = pre.scrollWidth + 'px';
        });
        mutateActions.push(function () {
          // allow this to play nicely with the line-numbers plugin
          // need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
          parentElement.appendChild(line);
        });
      });
      var id = pre.id;
      if (hasLineNumbers && Prism.util.isActive(pre, LINKABLE_LINE_NUMBERS_CLASS) && id) {
        // This implements linkable line numbers. Linkable line numbers use Line Highlight to create a link to a
        // specific line. For this to work, the pre element has to:
        //  1) have line numbers,
        //  2) have the `linkable-line-numbers` class or an ascendant that has that class, and
        //  3) have an id.

        if (!hasClass(pre, LINKABLE_LINE_NUMBERS_CLASS)) {
          // add class to pre
          mutateActions.push(function () {
            pre.classList.add(LINKABLE_LINE_NUMBERS_CLASS);
          });
        }
        var start = parseInt(pre.getAttribute('data-start') || '1');

        // iterate all line number spans
        $$('.line-numbers-rows > span', pre).forEach(function (lineSpan, i) {
          var lineNumber = i + start;
          lineSpan.onclick = function () {
            var hash = id + '.' + lineNumber;

            // this will prevent scrolling since the span is obviously in view
            scrollIntoView = false;
            location.hash = hash;
            setTimeout(function () {
              scrollIntoView = true;
            }, 1);
          };
        });
      }
      return function () {
        mutateActions.forEach(callFunction);
      };
    }
  };
  function applyHash() {
    var hash = location.hash.slice(1);

    // Remove pre-existing temporary lines
    $$('.temporary.line-highlight').forEach(function (line) {
      line.parentNode.removeChild(line);
    });
    var range = (hash.match(/\.([\d,-]+)$/) || [, ''])[1];
    if (!range || document.getElementById(hash)) {
      return;
    }
    var id = hash.slice(0, hash.lastIndexOf('.'));
    var pre = document.getElementById(id);
    if (!pre) {
      return;
    }
    if (!pre.hasAttribute('data-line')) {
      pre.setAttribute('data-line', '');
    }
    var mutateDom = Prism.plugins.lineHighlight.highlightLines(pre, range, 'temporary ');
    mutateDom();
    if (scrollIntoView) {
      document.querySelector('.temporary.line-highlight').scrollIntoView();
    }
  }
  var fakeTimer = 0; // Hack to limit the number of times applyHash() runs

  Prism.hooks.add('before-sanity-check', function (env) {
    var pre = env.element.parentElement;
    if (!isActiveFor(pre)) {
      return;
    }

    /*
     * Cleanup for other plugins (e.g. autoloader).
     *
     * Sometimes <code> blocks are highlighted multiple times. It is necessary
     * to cleanup any left-over tags, because the whitespace inside of the <div>
     * tags change the content of the <code> tag.
     */
    var num = 0;
    $$('.line-highlight', pre).forEach(function (line) {
      num += line.textContent.length;
      line.parentNode.removeChild(line);
    });
    // Remove extra whitespace
    if (num && /^(?: \n)+$/.test(env.code.slice(-num))) {
      env.code = env.code.slice(0, -num);
    }
  });
  Prism.hooks.add('complete', function completeHook(env) {
    var pre = env.element.parentElement;
    if (!isActiveFor(pre)) {
      return;
    }
    clearTimeout(fakeTimer);
    var hasLineNumbers = Prism.plugins.lineNumbers;
    var isLineNumbersLoaded = env.plugins && env.plugins.lineNumbers;
    if (hasClass(pre, LINE_NUMBERS_CLASS) && hasLineNumbers && !isLineNumbersLoaded) {
      Prism.hooks.add('line-numbers', completeHook);
    } else {
      var mutateDom = Prism.plugins.lineHighlight.highlightLines(pre);
      mutateDom();
      fakeTimer = setTimeout(applyHash, 1);
    }
  });
  window.addEventListener('hashchange', applyHash);
  window.addEventListener('resize', function () {
    var actions = $$('pre').filter(isActiveFor).map(function (pre) {
      return Prism.plugins.lineHighlight.highlightLines(pre);
    });
    actions.forEach(callFunction);
  });
})();

/***/ }),

/***/ 96758:
/*!*************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js ***!
  \*************************************************************************/
/***/ (() => {

(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }

  /**
   * Plugin name which is used as a class name for <pre> which is activating the plugin
   *
   * @type {string}
   */
  var PLUGIN_NAME = 'line-numbers';

  /**
   * Regular expression used for determining line breaks
   *
   * @type {RegExp}
   */
  var NEW_LINE_EXP = /\n(?!$)/g;

  /**
   * Global exports
   */
  var config = Prism.plugins.lineNumbers = {
    /**
     * Get node for provided line number
     *
     * @param {Element} element pre element
     * @param {number} number line number
     * @returns {Element|undefined}
     */
    getLine: function (element, number) {
      if (element.tagName !== 'PRE' || !element.classList.contains(PLUGIN_NAME)) {
        return;
      }
      var lineNumberRows = element.querySelector('.line-numbers-rows');
      if (!lineNumberRows) {
        return;
      }
      var lineNumberStart = parseInt(element.getAttribute('data-start'), 10) || 1;
      var lineNumberEnd = lineNumberStart + (lineNumberRows.children.length - 1);
      if (number < lineNumberStart) {
        number = lineNumberStart;
      }
      if (number > lineNumberEnd) {
        number = lineNumberEnd;
      }
      var lineIndex = number - lineNumberStart;
      return lineNumberRows.children[lineIndex];
    },
    /**
     * Resizes the line numbers of the given element.
     *
     * This function will not add line numbers. It will only resize existing ones.
     *
     * @param {HTMLElement} element A `<pre>` element with line numbers.
     * @returns {void}
     */
    resize: function (element) {
      resizeElements([element]);
    },
    /**
     * Whether the plugin can assume that the units font sizes and margins are not depended on the size of
     * the current viewport.
     *
     * Setting this to `true` will allow the plugin to do certain optimizations for better performance.
     *
     * Set this to `false` if you use any of the following CSS units: `vh`, `vw`, `vmin`, `vmax`.
     *
     * @type {boolean}
     */
    assumeViewportIndependence: true
  };

  /**
   * Resizes the given elements.
   *
   * @param {HTMLElement[]} elements
   */
  function resizeElements(elements) {
    elements = elements.filter(function (e) {
      var codeStyles = getStyles(e);
      var whiteSpace = codeStyles['white-space'];
      return whiteSpace === 'pre-wrap' || whiteSpace === 'pre-line';
    });
    if (elements.length == 0) {
      return;
    }
    var infos = elements.map(function (element) {
      var codeElement = element.querySelector('code');
      var lineNumbersWrapper = element.querySelector('.line-numbers-rows');
      if (!codeElement || !lineNumbersWrapper) {
        return undefined;
      }

      /** @type {HTMLElement} */
      var lineNumberSizer = element.querySelector('.line-numbers-sizer');
      var codeLines = codeElement.textContent.split(NEW_LINE_EXP);
      if (!lineNumberSizer) {
        lineNumberSizer = document.createElement('span');
        lineNumberSizer.className = 'line-numbers-sizer';
        codeElement.appendChild(lineNumberSizer);
      }
      lineNumberSizer.innerHTML = '0';
      lineNumberSizer.style.display = 'block';
      var oneLinerHeight = lineNumberSizer.getBoundingClientRect().height;
      lineNumberSizer.innerHTML = '';
      return {
        element: element,
        lines: codeLines,
        lineHeights: [],
        oneLinerHeight: oneLinerHeight,
        sizer: lineNumberSizer
      };
    }).filter(Boolean);
    infos.forEach(function (info) {
      var lineNumberSizer = info.sizer;
      var lines = info.lines;
      var lineHeights = info.lineHeights;
      var oneLinerHeight = info.oneLinerHeight;
      lineHeights[lines.length - 1] = undefined;
      lines.forEach(function (line, index) {
        if (line && line.length > 1) {
          var e = lineNumberSizer.appendChild(document.createElement('span'));
          e.style.display = 'block';
          e.textContent = line;
        } else {
          lineHeights[index] = oneLinerHeight;
        }
      });
    });
    infos.forEach(function (info) {
      var lineNumberSizer = info.sizer;
      var lineHeights = info.lineHeights;
      var childIndex = 0;
      for (var i = 0; i < lineHeights.length; i++) {
        if (lineHeights[i] === undefined) {
          lineHeights[i] = lineNumberSizer.children[childIndex++].getBoundingClientRect().height;
        }
      }
    });
    infos.forEach(function (info) {
      var lineNumberSizer = info.sizer;
      var wrapper = info.element.querySelector('.line-numbers-rows');
      lineNumberSizer.style.display = 'none';
      lineNumberSizer.innerHTML = '';
      info.lineHeights.forEach(function (height, lineNumber) {
        wrapper.children[lineNumber].style.height = height + 'px';
      });
    });
  }

  /**
   * Returns style declarations for the element
   *
   * @param {Element} element
   */
  function getStyles(element) {
    if (!element) {
      return null;
    }
    return window.getComputedStyle ? getComputedStyle(element) : element.currentStyle || null;
  }
  var lastWidth = undefined;
  window.addEventListener('resize', function () {
    if (config.assumeViewportIndependence && lastWidth === window.innerWidth) {
      return;
    }
    lastWidth = window.innerWidth;
    resizeElements(Array.prototype.slice.call(document.querySelectorAll('pre.' + PLUGIN_NAME)));
  });
  Prism.hooks.add('complete', function (env) {
    if (!env.code) {
      return;
    }
    var code = /** @type {Element} */env.element;
    var pre = /** @type {HTMLElement} */code.parentNode;

    // works only for <code> wrapped inside <pre> (not inline)
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Abort if line numbers already exists
    if (code.querySelector('.line-numbers-rows')) {
      return;
    }

    // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
    if (!Prism.util.isActive(code, PLUGIN_NAME)) {
      return;
    }

    // Remove the class 'line-numbers' from the <code>
    code.classList.remove(PLUGIN_NAME);
    // Add the class 'line-numbers' to the <pre>
    pre.classList.add(PLUGIN_NAME);
    var match = env.code.match(NEW_LINE_EXP);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;
    var lines = new Array(linesNum + 1).join('<span></span>');
    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;
    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }
    env.element.appendChild(lineNumbersWrapper);
    resizeElements([pre]);
    Prism.hooks.run('line-numbers', env);
  });
  Prism.hooks.add('line-numbers', function (env) {
    env.plugins = env.plugins || {};
    env.plugins.lineNumbers = true;
  });
})();

/***/ }),

/***/ 59138:
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/***/ ((module) => {

/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = function (_self) {
  // Private helper vars
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;

  // The grammar object for plaintext
  var plainTextGrammar = {};
  var _ = {
    /**
     * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
     * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
     * additional languages or plugins yourself.
     *
     * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
     *
     * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.manual = true;
     * // add a new <script> to load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @memberof Prism
     * @public
     */
    manual: _self.Prism && _self.Prism.manual,
    /**
     * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
     * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
     * own worker, you don't want it to do this.
     *
     * By setting this value to `true`, Prism will not add its own listeners to the worker.
     *
     * You obviously have to change this value before Prism executes. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.disableWorkerMessageHandler = true;
     * // Load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @memberof Prism
     * @public
     */
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    /**
     * A namespace for utility methods.
     *
     * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
     * change or disappear at any time.
     *
     * @namespace
     * @memberof Prism
     */
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      /**
       * Returns the name of the type of the given value.
       *
       * @param {any} o
       * @returns {string}
       * @example
       * type(null)      === 'Null'
       * type(undefined) === 'Undefined'
       * type(123)       === 'Number'
       * type('foo')     === 'String'
       * type(true)      === 'Boolean'
       * type([1, 2])    === 'Array'
       * type({})        === 'Object'
       * type(String)    === 'Function'
       * type(/abc+/)    === 'RegExp'
       */
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      /**
       * Returns a unique number for the given object. Later calls will still return the same number.
       *
       * @param {Object} obj
       * @returns {number}
       */
      objId: function (obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }
        return obj['__id'];
      },
      /**
       * Creates a deep clone of the given object.
       *
       * The main intended use of this function is to clone language definitions.
       *
       * @param {T} o
       * @param {Record<number, any>} [visited]
       * @returns {T}
       * @template T
       */
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case 'Object':
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = /** @type {Record<string, any>} */{};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return (/** @type {any} */clone
            );
          case 'Array':
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            /** @type {Array} */ /** @type {any} */o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return (/** @type {any} */clone
            );
          default:
            return o;
        }
      },
      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function (element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return 'none';
      },
      /**
       * Sets the Prism `language-xxxx` class of the given element.
       *
       * @param {Element} element
       * @param {string} language
       * @returns {void}
       */
      setLanguage: function (element, language) {
        // remove all `language-xxxx` classes
        // (this might leave behind a leading space)
        element.className = element.className.replace(RegExp(lang, 'gi'), '');

        // add the new `language-xxxx` class
        // (using `classList` will automatically clean up spaces for us)
        element.classList.add('language-' + language);
      },
      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function () {
        if (typeof document === 'undefined') {
          return null;
        }
        if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
          return (/** @type {any} */document.currentScript
          );
        }

        // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts

        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)

          var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
          if (src) {
            var scripts = document.getElementsByTagName('script');
            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }
          return null;
        }
      },
      /**
       * Returns whether a given class is active for `element`.
       *
       * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
       * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
       * given class is just the given class with a `no-` prefix.
       *
       * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
       * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
       * ancestors have the given class or the negated version of it, then the default activation will be returned.
       *
       * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
       * version of it, the class is considered active.
       *
       * @param {Element} element
       * @param {string} className
       * @param {boolean} [defaultActivation=false]
       * @returns {boolean}
       */
      isActive: function (element, className, defaultActivation) {
        var no = 'no-' + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    /**
     * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
     *
     * @namespace
     * @memberof Prism
     * @public
     */
    languages: {
      /**
       * The grammar for plain, unformatted text.
       */
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      /**
       * Creates a deep copy of the language with the given id and appends the given tokens.
       *
       * If a token in `redef` also appears in the copied language, then the existing token in the copied language
       * will be overwritten at its original position.
       *
       * ## Best practices
       *
       * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
       * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
       * understand the language definition because, normally, the order of tokens matters in Prism grammars.
       *
       * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
       * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
       *
       * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
       * @param {Grammar} redef The new tokens to append.
       * @returns {Grammar} The new language created.
       * @public
       * @example
       * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
       *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
       *     // at its original position
       *     'comment': { ... },
       *     // CSS doesn't have a 'color' token, so this token will be appended
       *     'color': /\b(?:red|green|blue)\b/
       * });
       */
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang[key] = redef[key];
        }
        return lang;
      },
      /**
       * Inserts tokens _before_ another token in a language definition or any other grammar.
       *
       * ## Usage
       *
       * This helper method makes it easy to modify existing languages. For example, the CSS language definition
       * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
       * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
       * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
       * this:
       *
       * ```js
       * Prism.languages.markup.style = {
       *     // token
       * };
       * ```
       *
       * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
       * before existing tokens. For the CSS example above, you would use it like this:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'cdata', {
       *     'style': {
       *         // token
       *     }
       * });
       * ```
       *
       * ## Special cases
       *
       * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
       * will be ignored.
       *
       * This behavior can be used to insert tokens after `before`:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'comment', {
       *     'comment': Prism.languages.markup.comment,
       *     // tokens after 'comment'
       * });
       * ```
       *
       * ## Limitations
       *
       * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
       * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
       * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
       * deleting properties which is necessary to insert at arbitrary positions.
       *
       * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
       * Instead, it will create a new object and replace all references to the target object with the new one. This
       * can be done without temporarily deleting properties, so the iteration order is well-defined.
       *
       * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
       * you hold the target object in a variable, then the value of the variable will not change.
       *
       * ```js
       * var oldMarkup = Prism.languages.markup;
       * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
       *
       * assert(oldMarkup !== Prism.languages.markup);
       * assert(newMarkup === Prism.languages.markup);
       * ```
       *
       * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
       * object to be modified.
       * @param {string} before The key to insert before.
       * @param {Grammar} insert An object containing the key-value pairs to be inserted.
       * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
       * object to be modified.
       *
       * Defaults to `Prism.languages`.
       * @returns {Grammar} The new grammar object.
       * @public
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || /** @type {any} */_.languages;
        var grammar = root[inside];
        /** @type {Grammar} */
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            // Do not insert token which also occur in insert. See #1525
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;

        // Update references in other language definitions
        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    /**
     * This is the most high-level function in Prism’s API.
     * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
     * each one of them.
     *
     * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
     *
     * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
     * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
     * @memberof Prism
     * @public
     */
    highlightAll: function (async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    /**
     * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
     * {@link Prism.highlightElement} on each one of them.
     *
     * The following hooks will be run:
     * 1. `before-highlightall`
     * 2. `before-all-elements-highlight`
     * 3. All hooks of {@link Prism.highlightElement} for each element.
     *
     * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
     * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
     * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
     * @memberof Prism
     * @public
     */
    highlightAllUnder: function (container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      _.hooks.run('before-highlightall', env);
      env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
      _.hooks.run('before-all-elements-highlight', env);
      for (var i = 0, element; element = env.elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    /**
     * Highlights the code inside a single element.
     *
     * The following hooks will be run:
     * 1. `before-sanity-check`
     * 2. `before-highlight`
     * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
     * 4. `before-insert`
     * 5. `after-highlight`
     * 6. `complete`
     *
     * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
     * the element's language.
     *
     * @param {Element} element The element containing the code.
     * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
     * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
     * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
     * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
     *
     * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
     * asynchronous highlighting to work. You can build your own bundle on the
     * [Download page](https://prismjs.com/download.html).
     * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
     * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
     * @memberof Prism
     * @public
     */
    highlightElement: function (element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);
      var grammar = _.languages[language];

      // Set language on the element, if not present
      _.util.setLanguage(element, language);

      // Set language on the parent, for styling
      var parent = element.parentElement;
      if (parent && parent.nodeName.toLowerCase() === 'pre') {
        _.util.setLanguage(parent, language);
      }
      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };
      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;
        _.hooks.run('before-insert', env);
        env.element.innerHTML = env.highlightedCode;
        _.hooks.run('after-highlight', env);
        _.hooks.run('complete', env);
        callback && callback.call(env.element);
      }
      _.hooks.run('before-sanity-check', env);

      // plugins may change/add the parent/element
      parent = env.element.parentElement;
      if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
        parent.setAttribute('tabindex', '0');
      }
      if (!env.code) {
        _.hooks.run('complete', env);
        callback && callback.call(env.element);
        return;
      }
      _.hooks.run('before-highlight', env);
      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }
      if (async && _self.Worker) {
        var worker = new Worker(_.filename);
        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };
        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
     * and the language definitions to use, and returns a string with the HTML produced.
     *
     * The following hooks will be run:
     * 1. `before-tokenize`
     * 2. `after-tokenize`
     * 3. `wrap`: On each {@link Token}.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @param {string} language The name of the language definition passed to `grammar`.
     * @returns {string} The highlighted HTML.
     * @memberof Prism
     * @public
     * @example
     * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
     */
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      _.hooks.run('before-tokenize', env);
      if (!env.grammar) {
        throw new Error('The language "' + env.language + '" has no grammar.');
      }
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run('after-tokenize', env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    /**
     * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
     * and the language definitions to use, and returns an array with the tokenized code.
     *
     * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
     *
     * This method could be useful in other contexts as well, as a very crude parser.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @returns {TokenStream} An array of strings and tokens, a token stream.
     * @memberof Prism
     * @public
     * @example
     * let code = `var foo = 0;`;
     * let tokens = Prism.tokenize(code, Prism.languages.javascript);
     * tokens.forEach(token => {
     *     if (token instanceof Prism.Token && token.type === 'number') {
     *         console.log(`Found numeric literal: ${token.content}`);
     *     }
     * });
     */
    tokenize: function (text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    /**
     * @namespace
     * @memberof Prism
     * @public
     */
    hooks: {
      all: {},
      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string} name The name of the hook.
       * @param {HookCallback} callback The callback function which is given environment variables.
       * @public
       */
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      /**
       * Runs a hook invoking all registered callbacks with the given environment variables.
       *
       * Callbacks will be invoked synchronously and in the order in which they were registered.
       *
       * @param {string} name The name of the hook.
       * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
       * @public
       */
      run: function (name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _;

  // Typescript note:
  // The following can be used to import the Token type in JSDoc:
  //
  //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  /**
   * Creates a new token.
   *
   * @param {string} type See {@link Token#type type}
   * @param {string | TokenStream} content See {@link Token#content content}
   * @param {string|string[]} [alias] The alias(es) of the token.
   * @param {string} [matchedStr=""] A copy of the full string this token was created from.
   * @class
   * @global
   * @public
   */
  function Token(type, content, alias, matchedStr) {
    /**
     * The type of the token.
     *
     * This is usually the key of a pattern in a {@link Grammar}.
     *
     * @type {string}
     * @see GrammarToken
     * @public
     */
    this.type = type;
    /**
     * The strings or tokens contained by this token.
     *
     * This will be a token stream if the pattern matched also defined an `inside` grammar.
     *
     * @type {string | TokenStream}
     * @public
     */
    this.content = content;
    /**
     * The alias(es) of the token.
     *
     * @type {string|string[]}
     * @see GrammarToken
     * @public
     */
    this.alias = alias;
    // Copy of the full string this token was created from
    this.length = (matchedStr || '').length | 0;
  }

  /**
   * A token stream is an array of strings and {@link Token Token} objects.
   *
   * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
   * them.
   *
   * 1. No adjacent strings.
   * 2. No empty strings.
   *
   *    The only exception here is the token stream that only contains the empty string and nothing else.
   *
   * @typedef {Array<string | Token>} TokenStream
   * @global
   * @public
   */

  /**
   * Converts the given token or token stream to an HTML representation.
   *
   * The following hooks will be run:
   * 1. `wrap`: On each {@link Token}.
   *
   * @param {string | Token | TokenStream} o The token or token stream to be converted.
   * @param {string} language The name of current language.
   * @returns {string} The HTML representation of the token or token stream.
   * @memberof Token
   * @static
   */
  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }
    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run('wrap', env);
    var attributes = '';
    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }
    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };

  /**
   * @param {RegExp} pattern
   * @param {number} pos
   * @param {string} text
   * @param {boolean} lookbehind
   * @returns {RegExpExecArray | null}
   */
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      // change the match to remove the text matched by the Prism lookbehind group
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }

  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {RematchOptions} [rematch]
   * @returns {void}
   * @private
   *
   * @typedef RematchOptions
   * @property {string} cause
   * @property {number} reach
   */
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + ',' + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
        }

        /** @type {RegExp} */
        var pattern = patternObj.pattern || patternObj;
        for (
        // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1; // this is the to parameter of removeBetween
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;

            // find the node that contains the match
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            // adjust pos (and p)
            p -= currentNode.value.length;
            pos = p;

            // the current node is a Token, then the match starts inside another Token, which is invalid
            if (currentNode.value instanceof Token) {
              continue;
            }

            // find the last node which is affected by this match
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;

            // replace with the new match
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }

          // eslint-disable-next-line no-redeclare
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            // at least one Token object was removed, so we have to do some rematching
            // this can only happen if the current pattern is greedy

            /** @type {RematchOptions} */
            var nestedRematch = {
              cause: token + ',' + j,
              reach: reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

            // the reach might have been extended because of the rematching
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }

  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   * @private
   */

  /**
   * @template T
   * @private
   */
  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = {
      value: null,
      prev: null,
      next: null
    };
    /** @type {LinkedListNode<T>} */
    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;

    /** @type {LinkedListNode<T>} */
    this.head = head;
    /** @type {LinkedListNode<T>} */
    this.tail = tail;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the list.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */
  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }
    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data);
        var lang = message.language;
        var code = message.code;
        var immediateClose = message.immediateClose;
        _self.postMessage(_.highlight(code, _.languages[lang], lang));
        if (immediateClose) {
          _self.close();
        }
      }, false);
    }
    return _;
  }

  // Get current script and highlight
  var script = _.util.currentScript();
  if (script) {
    _.filename = script.src;
    if (script.hasAttribute('data-manual')) {
      _.manual = true;
    }
  }
  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }
  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;
    if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
      document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }
  return _;
}(_self);
if ( true && module.exports) {
  module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
  global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },

      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    Prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: Prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
        // See rest below
      }
    },

    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;
  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(Prism);

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};

/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (
    // constant
    /NaN|Infinity/.source + '|' +
    // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' +
    // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' +
    // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' +
    // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' +
    // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: RegExp(
    // lookbehind
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
    // Regex pattern:
    // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
    // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
    // with the only syntax, so we have to define 2 different regex patterns.
    /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' +
    // `v` flag syntax. This supports 3 levels of nested character classes.
    /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' +
    // lookahead
    /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: Prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
Prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');

  // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
  Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}
Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  var LOADING_MESSAGE = 'Loading…';
  var FAILURE_MESSAGE = function (status, message) {
    return '✖ Error ' + status + ' while fetching file: ' + message;
  };
  var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
  var EXTENSIONS = {
    'js': 'javascript',
    'py': 'python',
    'rb': 'ruby',
    'ps1': 'powershell',
    'psm1': 'powershell',
    'sh': 'bash',
    'bat': 'batch',
    'h': 'c',
    'tex': 'latex'
  };
  var STATUS_ATTR = 'data-src-status';
  var STATUS_LOADING = 'loading';
  var STATUS_LOADED = 'loaded';
  var STATUS_FAILED = 'failed';
  var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

  /**
   * Loads the given file.
   *
   * @param {string} src The URL or path of the source file to load.
   * @param {(result: string) => void} success
   * @param {(reason: string) => void} error
   */
  function loadFile(src, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status < 400 && xhr.responseText) {
          success(xhr.responseText);
        } else {
          if (xhr.status >= 400) {
            error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
          } else {
            error(FAILURE_EMPTY_MESSAGE);
          }
        }
      }
    };
    xhr.send(null);
  }

  /**
   * Parses the given range.
   *
   * This returns a range with inclusive ends.
   *
   * @param {string | null | undefined} range
   * @returns {[number, number | undefined] | undefined}
   */
  function parseRange(range) {
    var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
    if (m) {
      var start = Number(m[1]);
      var comma = m[2];
      var end = m[3];
      if (!comma) {
        return [start, start];
      }
      if (!end) {
        return [start, undefined];
      }
      return [start, Number(end)];
    }
    return undefined;
  }
  Prism.hooks.add('before-highlightall', function (env) {
    env.selector += ', ' + SELECTOR;
  });
  Prism.hooks.add('before-sanity-check', function (env) {
    var pre = /** @type {HTMLPreElement} */env.element;
    if (pre.matches(SELECTOR)) {
      env.code = ''; // fast-path the whole thing and go to complete

      pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

      // add code element with loading message
      var code = pre.appendChild(document.createElement('CODE'));
      code.textContent = LOADING_MESSAGE;
      var src = pre.getAttribute('data-src');
      var language = env.language;
      if (language === 'none') {
        // the language might be 'none' because there is no language set;
        // in this case, we want to use the extension as the language
        var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
        language = EXTENSIONS[extension] || extension;
      }

      // set language classes
      Prism.util.setLanguage(code, language);
      Prism.util.setLanguage(pre, language);

      // preload the language
      var autoloader = Prism.plugins.autoloader;
      if (autoloader) {
        autoloader.loadLanguages(language);
      }

      // load file
      loadFile(src, function (text) {
        // mark as loaded
        pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

        // handle data-range
        var range = parseRange(pre.getAttribute('data-range'));
        if (range) {
          var lines = text.split(/\r\n?|\n/g);

          // the range is one-based and inclusive on both ends
          var start = range[0];
          var end = range[1] == null ? lines.length : range[1];
          if (start < 0) {
            start += lines.length;
          }
          start = Math.max(0, Math.min(start - 1, lines.length));
          if (end < 0) {
            end += lines.length;
          }
          end = Math.max(0, Math.min(end, lines.length));
          text = lines.slice(start, end).join('\n');

          // add data-start for line numbers
          if (!pre.hasAttribute('data-start')) {
            pre.setAttribute('data-start', String(start + 1));
          }
        }

        // highlight code
        code.textContent = text;
        Prism.highlightElement(code);
      }, function (error) {
        // mark as failed
        pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
        code.textContent = error;
      });
    }
  });
  Prism.plugins.fileHighlight = {
    /**
     * Executes the File Highlight plugin for all matching `pre` elements under the given container.
     *
     * Note: Elements which are already loaded or currently loading will not be touched by this method.
     *
     * @param {ParentNode} [container=document]
     */
    highlight: function highlight(container) {
      var elements = (container || document).querySelectorAll(SELECTOR);
      for (var i = 0, element; element = elements[i++];) {
        Prism.highlightElement(element);
      }
    }
  };
  var logged = false;
  /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
      logged = true;
    }
    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
})();

/***/ })

}]);