"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[6535],{

/***/ 71015:
/*!*********************************************!*\
  !*** ./src/app/director/ai/ai.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7313:
/*!***********************************************************!*\
  !*** ./src/app/director/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/angular */ 2495);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 94532);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/skeleton */ 14227);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/user.service */ 1206);



















function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.completedGoalsFromApi + ctx_r0.uncompletedGoalsFromApi || "0", " ");
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 14);
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Done: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " \u00A0 | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "In-Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.completedGoalsFromApi || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.uncompletedGoalsFromApi || 0, " ");
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 18);
  }
}
function DashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r4.getAllObjectivesUnderADirectorData == null ? null : ctx_r4.getAllObjectivesUnderADirectorData.Incompleted) + (ctx_r4.getAllObjectivesUnderADirectorData == null ? null : ctx_r4.getAllObjectivesUnderADirectorData.completed) || 0, " ");
  }
}
function DashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 14);
  }
}
function DashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Done: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " \u00A0 | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "In-Progress: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.getAllObjectivesUnderADirectorData == null ? null : ctx_r6.getAllObjectivesUnderADirectorData.completed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.getAllObjectivesUnderADirectorData == null ? null : ctx_r6.getAllObjectivesUnderADirectorData.Incompleted, " ");
  }
}
function DashboardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 18);
  }
}
function DashboardComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-chart", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("responsive", true)("data", ctx_r8.pieCharts)("options", ctx_r8.PieChartOptions);
  }
}
function DashboardComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\uD83D\uDE34");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-chart", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("responsive", true)("data", ctx_r11.pieChartsBudgetUsed)("options", ctx_r11.PieChartBudgetUsedOptions);
  }
}
function DashboardComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\uD83D\uDE34");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  width: "2.5rem",
  height: "2.5rem"
});
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(changeDetector, obj, auth, userService) {
      this.changeDetector = changeDetector;
      this.obj = obj;
      this.auth = auth;
      this.userService = userService;
      this.COLORS = ['#f06292', '#ba68c8', '#4dd0e1', '#aed581', '#ffca28'];
      this.calendarVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)(true);
      this.objectiveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.currentEvents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)([]);
      this.loading = true;
      this.pieDataBool = false;
      this.totalBudget = 0;
      this.totalSubBudget = 0;
      this.remainingBudget = 0;
      this.completionPercentage = 0;
      this.completedGoals = 0;
      this.inProgressGoals = 0;
      this.barChartType = 'line';
    }
    ngOnInit() {
      this.userId = this.auth.getTokenUserID();
      this.userId = this.auth.getTokenUserID();
      this.getAllObjectivesUnderADirector();
      // this.getAllusersUnderDirectors();
    }

    onChangeDepartment(event = '') {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.barCharts = [];
        if (event.value) {
          const matchingGoals = _this.goals.filter(goal => goal.department === event.value.name);
          _this.barChartType = 'bar';
          yield _this.selectedBarChartDepartments(matchingGoals);
        }
      })();
    }
    getAllObjectivesUnderADirector() {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.userService.fetch('get', 'director_query', `getAllObjectivesUnderADirectorV2/${_this2.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(_this2.objectiveSubscription)).subscribe(data => {
          console.log({
            getAllObjectivesUnderADirector: data
          });
          _this2.getAllObjectivesUnderADirectorData = data;
          _this2.completedGoalsFromApi = data.completedGoals;
          _this2.uncompletedGoalsFromApi = data.uncompletedGoals;
          _this2.goals = data.goals || [];
          _this2.goalBarChartList = data.dropdown || [];
          _this2.pieChart(data.goals || _this2.goals || []);
          _this2.thisBarCharts(data.goals);
          _this2.processDashboardData(data);
        });
      })();
    }
    processDashboardData(data) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // total of objectives
        const objectives = data.goals?.reduce((sum, goal) => sum + (goal.objectivesDetails?.length || 0), 0) || 0;
        _this3.totalBudget = data.goals?.reduce((sum, goal) => sum + (goal.budget || 0), 0) || 0;
        _this3.totalSubBudget = (data.goals ?? []).reduce((sum, goal) => {
          return sum + (goal.objectivesDetails?.reduce((subSum, obj) => subSum + (obj.budget || 0), 0) ?? 0);
        }, 0);
        // Calculate remaining budget
        _this3.knobValue = _this3.remainingBudget = _this3.totalBudget - (_this3.totalSubBudget || 0);
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
        _this3.completedGoals = completedGoals;
        _this3.inProgressGoals = inProgressGoals;
        // Calculate totalObjectivesCount by subtracting completed and in-progress goals and no negative values
        _this3.totalObjectivesCount = Math.abs(_this3.completedGoals + _this3.inProgressGoals);
        // Correctly calculate completion percentage
        _this3.completionPercentage = goalsWithObjectives.length > 0 ? _this3.completedGoals / goalsWithObjectives.length * 100 : 0;
      })();
    }
    pieChart(data = []) {
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const labels = data.map(goal => goal.department);
        const budgets = data.map(goal => goal.budgetMinusAllObjectiveBudget);
        const budgetsUsed = data.map(goal => goal.budgetMinusAllObjectiveBudget);
        const budgetsRemaining = data.map(goal => goal.remainingBudget);
        const percentageCompletion = data.map(goal => goal.completion_percentage);
        const generateRandomColor = () => {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          return `rgba(${r}, ${g}, ${b}, 0.2)`;
        };
        const backgroundColors = labels.map(() => generateRandomColor());
        const hoverBackgroundColors = backgroundColors.map(color => color.replace('0.2', '0.4'));
        _this4.pieCharts = data = {
          labels: labels,
          datasets: [{
            data: budgets,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }]
        };
        _this4.PieChartOptions = {
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
        _this4.pieChartsBudgetUsed = {
          labels: labels,
          datasets: [{
            data: budgetsUsed,
            backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--bluegray-500'), documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--bluegray-400'), documentStyle.getPropertyValue('--red-400')]
          }]
        };
        _this4.PieChartBudgetUsedOptions = {
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
      })();
    }
    selectedBarChartDepartments(data) {
      var _this5 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const labelsObjectiveName = [];
        const incompleteGoals = [];
        // const actualBudget = [];
        const completedGoals = [];
        // const monthData = [];
        // const currentMonth = new Date().getMonth() + 1; // Current month (1-12)
        data.forEach(goal => {
          let objectiveName = goal.objectivesDetails.map(e => e.functional_objective);
          if (goal.department && goal.budget && goal.date_added) {
            // const dateAdded = new Date(goal.date_added);
            // const monthAdded = dateAdded.getMonth() + 1; // Month (1-12)
            labelsObjectiveName.push(objectiveName);
            // actualBudget.push(goal.budget);
            completedGoals.push(goal.completion_percentage === 100 ? goal.completion_percentage : 0);
            incompleteGoals.push(goal.completion_percentage < 100 ? goal.completion_percentage : 0);
            // monthData.push(monthAdded);
          }
        });

        const datasets = [{
          label: 'Completed',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: completedGoals
        }, {
          label: 'Percentage',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          borderColor: 'white',
          data: incompleteGoals
        }];
        _this5.barCharts = {
          labels: labelsObjectiveName,
          // labels: this.months({ count: currentMonth }),
          datasets: datasets
        };
        _this5.options = {
          type: 'line',
          data: datasets,
          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder,
                drawBorder: false
              }
            },
            x: {
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
    onClearDepartment() {
      this.barCharts = [];
      this.selectedBarDepartmentDropdown = undefined;
      this.barChartType = 'line';
      this.thisBarCharts(this.goals);
    }
    thisBarCharts(data = []) {
      var _this6 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const labelsObjectiveName = [];
        const labelsOfficeName = [];
        const actualBudget = [];
        const actualBudgetCompleted = [];
        const budgetData = [];
        const monthData = [];
        const currentMonth = new Date().getMonth() + 1; // Current month (1-12)
        data.forEach(goal => {
          let objectiveName = goal.objectivesDetails.map(e => e.functional_objective);
          let objectiveCompleted = goal.objectivesDetails.map(e => {
            if (e.complete) {
              actualBudgetCompleted.push(goal.budget);
            }
          });
          if (goal.department && goal.budget && goal.date_added) {
            const dateAdded = new Date(goal.date_added);
            const monthAdded = dateAdded.getMonth() + 1; // Month (1-12)
            labelsObjectiveName.push(objectiveName);
            actualBudget.push(goal.budget);
            budgetData.push(goal.remainingBudget);
            monthData.push(monthAdded);
          }
        });
        const datasets = [{
          label: 'Budget',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          borderColor: 'white',
          data: budgetData,
          stack: 'combined',
          type: 'bar'
        }, {
          label: 'Actual Budget',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          data: actualBudget,
          stack: 'combined'
        }, {
          label: 'Completed',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: actualBudgetCompleted,
          // stack: 'combined',
          type: 'bar'
        }
        // {
        //     label: 'Current Month',
        //     backgroundColor: 'rgba(255, 159, 64, 0.2)',
        //     borderColor: 'rgb(255, 159, 64)',
        //     data: Array(labelsObjectiveName.length).fill(currentMonth),
        // },
        ];

        _this6.barCharts = {
          // labels: this.months({ count: currentMonth }),
          labels: labelsObjectiveName,
          datasets: datasets
        };
        _this6.options = {
          type: 'line',
          data: datasets,
          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder,
                drawBorder: false
              }
            },
            x: {
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
    getCurrentGoalAndActual(entry) {
      // Parse the createdAt date into a Date object
      const createdAt = new Date(entry.createdAt);
      const currentDate = new Date(); // Get the current date
      // Calculate the difference in months from createdAt to currentDate
      const diffMonths = (currentDate.getFullYear() - createdAt.getFullYear()) * 12 + currentDate.getMonth() - createdAt.getMonth();
      // Check the frequency_monitoring field
      const frequency = entry.frequency_monitoring;
      if (frequency === 'yearly') {
        // Use the current month index directly
        const currentMonth = currentDate.getMonth() + 1;
        return `Goal: ${entry[`goal_month_${currentMonth}`] ?? 'Not Available'} | Actual: ${entry[`month_${currentMonth}`] ?? 'Not Available'}`;
      } else if (frequency === 'quarterly') {
        // Find the current quarter index (0 to 3)
        const currentQuarter = Math.floor(diffMonths / 3) % 4;
        return `Goal: ${entry[`goal_quarter_${currentQuarter}`] ?? 'Not Available'} | Actual: ${entry[`quarter_${currentQuarter}`] ?? 'Not Available'}`;
      } else if (frequency === 'semi_annual') {
        // Find the current half-year index (0 or 1)
        const currentHalf = Math.floor(diffMonths / 6) % 2;
        return `Goal: ${entry[`goal_semi_annual_${currentHalf}`] ?? 'Not Available'} | Actual: ${entry[`semi_annual_${currentHalf}`] ?? 'Not Available'}`;
      } else {
        // Return a fallback message for unsupported or undefined frequency
        return 'Frequency not supported or data not available';
      }
    }
    ngOnDestroy() {
      this.objectiveSubscription.unsubscribe();
    }
    static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 12,
      consts: [[1, "grid"], [1, "col-12", "lg:col-12", "xl:col-6"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], ["class", "text-900 font-medium text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-users", "text-blue-500", "text-xl"], [1, "pi", "pi-map", "text-blue-500", "text-xl"], [1, "card", "flex", "flex-column", "align-items-center"], [1, "text-left", "w-full"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "text-900", "font-medium", "text-xl"], ["shape", "circle", "size", "3rem", "styleClass", "mr-2"], [1, "text-500"], [1, "text-green-500", "font-medium"], [1, "text-red-500", "font-medium"], ["width", "12rem", "height", "2rem"], ["type", "pie", 3, "responsive", "data", "options"], ["id", "emoji", 2, "font-size", "xxx-large"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardComponent_Conditional_7_Template, 2, 1, "div", 5)(8, DashboardComponent_Conditional_8_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DashboardComponent_Conditional_11_Template, 9, 2)(12, DashboardComponent_Conditional_12_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "div", 3)(16, "div")(17, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DashboardComponent_Conditional_19_Template, 2, 1, "div", 5)(20, DashboardComponent_Conditional_20_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DashboardComponent_Conditional_23_Template, 9, 2)(24, DashboardComponent_Conditional_24_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 1)(26, "div", 9)(27, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Office Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, DashboardComponent_ng_container_29_Template, 2, 3, "ng-container", 11)(30, DashboardComponent_ng_template_30_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 1)(33, "div", 9)(34, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Objective Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, DashboardComponent_ng_container_36_Template, 2, 3, "ng-container", 11)(37, DashboardComponent_ng_template_37_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](7, ctx.getAllObjectivesUnderADirectorData ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](11, ctx.getAllObjectivesUnderADirectorData ? 11 : 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](19, ctx.getAllObjectivesUnderADirectorData ? 19 : 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](23, ctx.getAllObjectivesUnderADirectorData ? 23 : 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pieCharts == null ? null : ctx.pieCharts.datasets[0] == null ? null : ctx.pieCharts.datasets[0].data.length)("ngIfElse", _r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pieChartsBudgetUsed == null ? null : ctx.pieChartsBudgetUsed.datasets[0] == null ? null : ctx.pieChartsBudgetUsed.datasets[0].data.length)("ngIfElse", _r10);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_11__.FullCalendarModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__.Skeleton, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.UIChart, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule]
    });
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 29352:
/*!*****************************************************!*\
  !*** ./src/app/director/director-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectorRoutingModule: () => (/* binding */ DirectorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7313);
/* harmony import */ var _goal_goal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal/goal.component */ 89536);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai/ai.component */ 71015);
/* harmony import */ var _goal_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goal/dashboard/dashboard.component */ 41468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 65879);



// import { GoalDashboardComponent } from './goals/dashboard/dashboard.component';
// import { ObjectivesComponent } from './goals/objectives/objectives.component';




// import { CalendarComponent } from './goals/calendar/calendar.component';
let DirectorRoutingModule = /*#__PURE__*/(() => {
  class DirectorRoutingModule {
    static #_ = this.ɵfac = function DirectorRoutingModule_Factory(t) {
      return new (t || DirectorRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: DirectorRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'goals',
        component: _goal_goal_component__WEBPACK_IMPORTED_MODULE_1__.GoalComponent
      }, {
        path: 'goals/dashboard',
        component: _goal_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.GoalDashboardComponent
      }, {
        path: 'ai',
        component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_2__.AiComponent
      },
      // { path: 'goals/dashboard', component: GoalDashboardComponent },
      // { path: 'goals/objectives', component: ObjectivesComponent },
      // { path: 'goals/calendar', component: CalendarComponent },
      {
        path: '**',
        redirectTo: '/dashboard'
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
  return DirectorRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DirectorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 64560:
/*!************************************************!*\
  !*** ./src/app/director/director.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectorComponent: () => (/* binding */ DirectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 75187);


// import { ProductService } from '../demo/service/product.service';
let DirectorComponent = /*#__PURE__*/(() => {
  class DirectorComponent {
    constructor() {}
    ngOnInit() {}
    ngOnDestroy() {}
    static #_ = this.ɵfac = function DirectorComponent_Factory(t) {
      return new (t || DirectorComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DirectorComponent,
      selectors: [["app-director"]],
      decls: 1,
      vars: 0,
      template: function DirectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      encapsulation: 2
    });
  }
  return DirectorComponent;
})();

/***/ }),

/***/ 96535:
/*!*********************************************!*\
  !*** ./src/app/director/director.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectorModule: () => (/* binding */ DirectorModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai/ai.component */ 71015);
/* harmony import */ var _director_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./director-routing.module */ 29352);
/* harmony import */ var _goal_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goal/dashboard/dashboard.component */ 41468);
/* harmony import */ var _goal_goal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goal/goal.component */ 89536);
/* harmony import */ var _goal_goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goal/goal-table/goal-table.component */ 25101);
/* harmony import */ var _goal_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goal/add-goal/add-goal.component */ 32566);
/* harmony import */ var _goal_edit_goal_edit_goal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goal/edit-goal/edit-goal.component */ 11888);
/* harmony import */ var _goal_delete_files_delete_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goal/delete-files/delete-files.component */ 33709);
/* harmony import */ var _goal_objective_table_objective_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goal/objective-table/objective-table.component */ 24272);
/* harmony import */ var _goal_add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./goal/add-objective/add-objective.component */ 47975);
/* harmony import */ var _goal_edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goal/edit-objective/edit-objective.component */ 39455);
/* harmony import */ var _goal_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./goal/add-files/add-files.component */ 94572);
/* harmony import */ var _goal_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./goal/view-files/view-files.component */ 73950);
/* harmony import */ var _director_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./director.component */ 64560);
/* harmony import */ var _goal_view_file_history_view_file_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./goal/view-file-history/view-file-history.component */ 79586);
/* harmony import */ var _goal_print_objective_table_print_objective_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./goal/print-objective-table/print-objective-table.component */ 98099);
/* harmony import */ var _goal_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./goal/remarks/remarks.component */ 494);
/* harmony import */ var _goal_print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goal/print-qom/print-qom.component */ 35723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 65879);
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ChartModule } from 'primeng/chart';
// import { MenuModule } from 'primeng/menu';
// import { TableModule } from 'primeng/table';
// import { ButtonModule } from 'primeng/button';
// import { StyleClassModule } from 'primeng/styleclass';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserComponent } from './user.component';
// import { UserRoutingModule } from './user-routing.module';


// import { GoalsComponent } from './goals/goals.component';
// import { ObjectivesComponent } from './goals/objectives/objectives.component';
// import { GoalDashboardComponent } from './goals/dashboard/dashboard.component';



















let DirectorModule = /*#__PURE__*/(() => {
  class DirectorModule {
    static #_ = this.ɵfac = function DirectorModule_Factory(t) {
      return new (t || DirectorModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: DirectorModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      providers: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__.FileUpload],
      imports: [_director_routing_module__WEBPACK_IMPORTED_MODULE_2__.DirectorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
  return DirectorModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](DirectorModule, {
    declarations: [_goal_edit_goal_edit_goal_component__WEBPACK_IMPORTED_MODULE_7__.EditGoalComponent, _director_component__WEBPACK_IMPORTED_MODULE_14__.DirectorComponent, _goal_goal_component__WEBPACK_IMPORTED_MODULE_4__.GoalComponent, _goal_add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_6__.AddGoalComponent, _goal_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.GoalDashboardComponent, _ai_ai_component__WEBPACK_IMPORTED_MODULE_1__.AiComponent, _goal_goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_5__.GoalTableComponent, _goal_objective_table_objective_table_component__WEBPACK_IMPORTED_MODULE_9__.ObjectiveTableComponent, _goal_add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_10__.AddObjectiveComponent, _goal_edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_11__.EditObjectiveComponent, _goal_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_12__.AddFilesComponent, _goal_view_files_view_files_component__WEBPACK_IMPORTED_MODULE_13__.ViewFilesComponent, _goal_view_file_history_view_file_history_component__WEBPACK_IMPORTED_MODULE_15__.ViewFileHistoryComponent, _goal_print_objective_table_print_objective_table_component__WEBPACK_IMPORTED_MODULE_16__.PrintObjectiveTableComponent, _goal_remarks_remarks_component__WEBPACK_IMPORTED_MODULE_17__.RemarksComponent, _goal_print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_18__.PrintQomComponent],
    imports: [_director_routing_module__WEBPACK_IMPORTED_MODULE_2__.DirectorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _goal_delete_files_delete_files_component__WEBPACK_IMPORTED_MODULE_8__.DeleteFilesComponent]
  });
})();

/***/ }),

/***/ 94572:
/*!****************************************************************!*\
  !*** ./src/app/director/goal/add-files/add-files.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 32566:
/*!**************************************************************!*\
  !*** ./src/app/director/goal/add-goal/add-goal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddGoalComponent: () => (/* binding */ AddGoalComponent)
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
let AddGoalComponent = /*#__PURE__*/(() => {
  class AddGoalComponent {
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
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
    }
    ngOnChanges(changes) {
      this.addGoalTrigger = changes['addNewGoal']?.currentValue;
      if (this.addGoalTrigger && this.addGoalTrigger.addGoal) {
        this.addGoalDialogCard = this.addGoalTrigger.addGoal;
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
      console.log('addGoalDialogExec', data);
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
            message: 'Added Goal Successfully',
            userId: this.USERID
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
      //ever change set the goal back to the original list
      this.strategicObjectiveList = this.originalStrategicObjective;
      if (event.value) {
        this.selectedGoalId = event.value.id;
        this.filterStrategicObjectives(event.value.id); // Added
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
    static #_ = this.ɵfac = function AddGoalComponent_Factory(t) {
      return new (t || AddGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_2__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__.GoalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddGoalComponent,
      selectors: [["app-add-goal"]],
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
      template: function AddGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function AddGoalComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.addGoalDialogCard = $event;
          })("onHide", function AddGoalComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.onHide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Goal name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p-dropdown", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function AddGoalComponent_Template_p_dropdown_onChange_7_listener($event) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddGoalComponent_Template_p_button_click_23_listener() {
            return ctx.addGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddGoalComponent_Template_p_button_click_24_listener() {
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
  return AddGoalComponent;
})();

/***/ }),

/***/ 47975:
/*!************************************************************************!*\
  !*** ./src/app/director/goal/add-objective/add-objective.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddObjectiveComponent: () => (/* binding */ AddObjectiveComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/general-utils */ 94184);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
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
      this.childSuccessAddObjectiveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
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
      this.typeOfComputationValSwitch = false;
      this.targetValSwitch = false;
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
          _this.getTheGoalData(_this.addExecutionGoalId || _this.addGoalTrigger?.goalId);
          // this.getAllGoallistsDropdown(id);
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
            strategic_objective: (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_2__.customTitleCase)(data.goal.strategic_objective)
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
      (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.clearDynamicControls)(this.addObjectiveGoalform, this.months, this.quarters, this.semi_annual, this.yearly);
      if (frequency === 'yearly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addYearlyControlsSimple)(this.addObjectiveGoalform, this.yearly);
      } else if (frequency === 'quarterly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addQuarterlyControlsSimple)(this.addObjectiveGoalform, this.quarters);
      } else if (frequency === 'semi_annual') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addSemiAnnualControlsSimple)(this.addObjectiveGoalform, this.semi_annual);
      } else if (frequency === 'monthly') {
        (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addMonthlyControlsSimple)(this.addObjectiveGoalform, this.months);
      }
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
    // }
    // addMonthlyControls() {
    //     this.months.forEach((_, i) => {
    //         this.addObjectiveGoalform.addControl(
    //             `month_${i}`,
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
    // async getAllGoallistsDropdown(id: string) {
    //     this.goallistService
    //         .getRoute(
    //             'get',
    //             'goallists',
    //             `getAllAddObjectivesGoallistsDropdown/${id}`
    //         )
    //         .pipe(takeUntil(this.addObjectiveSubscription))
    //         .subscribe({
    //             next: (data: any) => {
    //                 this.dropdwonGoallistSelection = data.objectives;
    //             },
    //             error: (error) => {
    //                 this.messageService.add({
    //                     severity: 'error',
    //                     summary: 'Error',
    //                     detail: 'Failed to Goallist Dropdown',
    //                 });
    //             },
    //             complete: () => {},
    //         });
    // }
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
          createdBy: USERID
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
            _this2.childSuccessAddObjectiveEvent.emit({
              addedNewObjective: true,
              success: true,
              data: data.data
            });
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
        childSuccessAddObjectiveEvent: "childSuccessAddObjectiveEvent"
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

/***/ 41468:
/*!****************************************************************!*\
  !*** ./src/app/director/goal/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      this.loading = true;
      this.isExpanded = false;
      this.expandedRows = {};
    }
    ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
      this.USERID = this.auth.getTokenUserID();
      this.getAllObjectivesForTable();
      this.getGoals();
      this.getObjectiveViewPieChart();
      this.getAllObjectives();
    }
    getCompletedObjectives(goal) {
      return goal.objectivesDetails?.filter(o => o.complete && !o.deleted).length || 0;
    }
    getIncompleteObjectives(goal) {
      return goal.objectivesDetails?.filter(o => !o.complete && !o.deleted).length || 0;
    }
    getGoals() {
      this.goal.fetch('get', 'director_query', 'getGoalsForDashboardDirector/' + this.USERID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.goalForTables = data?.data[0]?.totalBudget[0]?.totalAmount || 0;
        this.goalCount = data?.data[0]?.goalCount;
        this.loading = false;
      });
    }
    getAllObjectives() {
      this.obj.fetch('get', 'objectives', `getAllObjectivesBudget/` + this.USERID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.objectiveBudget = data.data;
      });
    }
    // getAllObjectivesForTable() {
    //     this.obj
    //         .fetch(
    //             'get',
    //             'goals',
    //             `getAllObjectivesWithObjectives/${this.USERID}`
    //         )
    //         .pipe(takeUntil(this.dashboardSubscription))
    //         .subscribe((data: any) => {
    //             this.goals = data.goals;
    //         });
    // }
    getAllObjectivesForTable(office) {
      this.obj.fetch('get', 'director_query', `getAllObjectivesWithObjectivesForDirector/${this.USERID}/${office}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.goals = data.goals || [];
        this.allObjectiveBudget = this.goals.map(o => o.objectivesDetails.map(o => o.budget).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
        this.calculateBudget(this.goals);
        this.calculateUsed(this.goals);
        this.calculateRemaining(this.goals);
        this.officeList = data.office_dropdown || [];
        this.officeListCombine = this.officeList.map(office => office.name).join(', ');
      });
    }
    getObjectiveNames(goal) {
      return goal.objectivesDetails?.filter(o => o.functional_objective).map(o => o.functional_objective).join(', ') || '';
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
    getObjectiveViewPieChart() {
      this.goalService.fetch('get', 'director_query', `getObjectivesViewTableDirector/${this.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
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
        const dataRemainingBudget = [];
        goal.forEach(t => {
          labels.push(t.department);
          dataGoal.push(t.budget);
          dataGoalObjective.push(t.objectivesDetails.map(o => o.budget).reduce((a, b) => a + b, 0));
          dataRemainingBudget.push(t.remainingBudget);
        });
        _this.donutData = {
          labels: labels,
          datasets: [{
            type: 'bar',
            label: 'Goal Budget',
            data: dataGoal,
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderWidth: 1
          }, {
            type: 'bar',
            label: 'Goal Remaining',
            data: dataRemainingBudget,
            backgroundColor: documentStyle.getPropertyValue('--green-500'),
            borderWidth: 1
          }, {
            type: 'bar',
            label: 'Objective Budget Total',
            data: dataGoalObjective,
            backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
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
        _this.loading = false;
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
      this.getAllObjectivesForTable(event.value.name);
    }
    onClearOffice() {
      this.goals = [];
      this.getAllObjectivesForTable();
    }
    formatFrequencyString(frequency) {
      return (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.formatFrequencyString)(frequency);
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

/***/ 33709:
/*!**********************************************************************!*\
  !*** ./src/app/director/goal/delete-files/delete-files.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteFilesComponent: () => (/* binding */ DeleteFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let DeleteFilesComponent = /*#__PURE__*/(() => {
  class DeleteFilesComponent {
    static #_ = this.ɵfac = function DeleteFilesComponent_Factory(t) {
      return new (t || DeleteFilesComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteFilesComponent,
      selectors: [["app-delete-files"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      template: function DeleteFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete-files works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
    });
  }
  return DeleteFilesComponent;
})();

/***/ }),

/***/ 11888:
/*!****************************************************************!*\
  !*** ./src/app/director/goal/edit-goal/edit-goal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditGoalComponent: () => (/* binding */ EditGoalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 75167);















const _c0 = () => ({
  width: "25rem"
});
let EditGoalComponent = /*#__PURE__*/(() => {
  class EditGoalComponent {
    constructor(messageService, goal, formBuilder, dept, campus) {
      this.messageService = messageService;
      this.goal = goal;
      this.formBuilder = formBuilder;
      this.dept = dept;
      this.campus = campus;
      this.childEditGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.updateGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.updateGoalDialogCard = false;
      this.deptDropdownValue = [];
      this.deptDropdownCampusValue = [];
      this.getAllDept();
      this.getAllCampuses();
      this.createUpdateGoalForm();
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
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
          budget: [goal.budget || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
        this.updateGoalform.get('goals')?.disable();
        this.updateGoalDialogCard = true;
      }
    }
    createUpdateGoalForm() {
      this.updateGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
      });
    }
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
        this.deptDropdownValue = data?.data[0];
      });
    }
    getAllCampuses() {
      this.campus.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
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
      this.goal.fetch('put', 'goals', 'updateGoals', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.updateGoalSubscription)).subscribe(data => {
        if (data.success) {
          // this.getAllObjectivesWithObjectives();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.updateGoalDialogCard = false;
          this.childEditGoalEvent.emit({
            success: true,
            data: data.data
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
    static #_ = this.ɵfac = function EditGoalComponent_Factory(t) {
      return new (t || EditGoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_1__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_2__.CampusService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EditGoalComponent,
      selectors: [["app-edit-goal"]],
      inputs: {
        editGoal: "editGoal"
      },
      outputs: {
        childEditGoalEvent: "childEditGoalEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 25,
      vars: 12,
      consts: [["header", "Update Goal", 3, "visible", "visibleChange"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "goals", "autocomplete", "off", "formControlName", "goals", "pTooltip", "Edit not allowed due to Objective values present", "tooltipPosition", "top", 1, "flex-auto"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], ["htmlFor", "department"], ["formControlName", "selectDepartment", "optionLabel", "name", "filterBy", "name", "optionLabel", "name", "placeholder", "Select a Department", 3, "options", "filter", "showClear"], ["formControlName", "selectedCampus", "optionLabel", "name", "placeholder", "Select a Campus", 3, "options"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"]],
      template: function EditGoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function EditGoalComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.updateGoalDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Goals name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p-inputNumber", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4)(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "p-dropdown", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4)(18, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-dropdown", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11)(23, "p-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditGoalComponent_Template_p_button_click_23_listener() {
            return ctx.updateGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditGoalComponent_Template_p_button_click_24_listener() {
            return ctx.updateGoalDialogExec(ctx.updateGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.updateGoalDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.updateGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroupDemo);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.deptDropdownValue)("filter", true)("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroupCampus);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.deptDropdownCampusValue);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumber]
    });
  }
  return EditGoalComponent;
})();

/***/ }),

/***/ 39455:
/*!**************************************************************************!*\
  !*** ./src/app/director/goal/edit-objective/edit-objective.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditObjectiveComponent: () => (/* binding */ EditObjectiveComponent)
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
/* harmony import */ var _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-files/add-files.component */ 94572);


















function EditObjectiveComponent_div_4_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
const _c0 = a0 => [a0];
function EditObjectiveComponent_div_4_div_2_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_div_4_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const i_r7 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.onUpload($event, "yearly", i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditObjectiveComponent_div_4_div_2_i_12_Template, 1, 0, "i", 18);
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
function EditObjectiveComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditObjectiveComponent_div_4_div_2_Template, 13, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.yearly);
  }
}
function EditObjectiveComponent_div_5_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function EditObjectiveComponent_div_5_div_2_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_div_5_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const i_r13 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onUpload($event, "month", i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditObjectiveComponent_div_5_div_2_i_12_Template, 1, 0, "i", 18);
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
function EditObjectiveComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditObjectiveComponent_div_5_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.months);
  }
}
function EditObjectiveComponent_div_6_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function EditObjectiveComponent_div_6_div_2_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_div_6_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const i_r19 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.onUpload($event, "quarter", i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditObjectiveComponent_div_6_div_2_i_12_Template, 1, 0, "i", 18);
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
function EditObjectiveComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditObjectiveComponent_div_6_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c1));
  }
}
function EditObjectiveComponent_div_7_div_2_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
function EditObjectiveComponent_div_7_div_2_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_div_7_div_2_Template_input_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const i_r25 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.onUpload($event, "semi_annual", i_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditObjectiveComponent_div_7_div_2_i_12_Template, 1, 0, "i", 18);
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
function EditObjectiveComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditObjectiveComponent_div_7_div_2_Template, 13, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c2));
  }
}
function EditObjectiveComponent_app_add_files_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-add-files", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("childAddFile", function EditObjectiveComponent_app_add_files_11_Template_app_add_files_childAddFile_0_listener($event) {
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
let EditObjectiveComponent = /*#__PURE__*/(() => {
  class EditObjectiveComponent {
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
        if (changes['getObjective']?.currentValue) {
          const {
            editObjective,
            data
          } = changes['getObjective']?.currentValue;
          if (editObjective && data) {
            const {
              id,
              goalId,
              frequency_monitoring
            } = data;
            _this.goal_ObjectId = goalId;
            _this.tobeUpdatedSubGoal = id;
            yield _this.getObjectiveById(id, frequency_monitoring);
            // Update the form control valueks
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
        // Clear existing dynamic controls
        // await this.clearDynamicControls();
        yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.clearDynamicControls)(_this2.editObjectiveGoalform, _this2.months, _this2.quarters, _this2.semi_annual, _this2.yearly);
        if (frequency === 'monthly') {
          // await this.addMonthlyControls(await data);
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addMonthlyControls)(_this2.editObjectiveGoalform, _this2.months, yield data);
        } else if (frequency === 'quarterly') {
          // await this.addQuarterlyControls(await data);
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addQuarterlyControls)(_this2.editObjectiveGoalform, _this2.quarters, yield data);
        } else if (frequency === 'semi_annual') {
          // await this.addSemiAnnualControls(await data);
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addSemiAnnualControls)(_this2.editObjectiveGoalform, _this2.semi_annual, yield data);
        } else {
          // await this.addYearlyControls(await data);
          yield (0,src_app_utlis_general_utils__WEBPACK_IMPORTED_MODULE_1__.addYearlyControls)(_this2.editObjectiveGoalform, _this2.yearly, yield data);
        }
      })();
    }
    getObjectiveById(id, frequency_monitoring) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.obj.fetch('get', 'objectives', `getObjectiveById/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this3.updateObjectiveSubscription)).subscribe(data => {
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
      for (const key in form.value) {
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
      this.obj.fetch('put', 'objectives', 'updateObjectives', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.updateObjectiveSubscription)).subscribe(data => {
        if (data.success) {
          //close the objective table
          this.editObjectiveGoalDialogCard = false;
          this.messageService.add({
            severity: 'success  ',
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
            severity: 'error  ',
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
    static #_ = this.ɵfac = function EditObjectiveComponent_Factory(t) {
      return new (t || EditObjectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_3__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goallists_service__WEBPACK_IMPORTED_MODULE_4__.GoallistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: EditObjectiveComponent,
      selectors: [["app-edit-objective"]],
      inputs: {
        getObjective: "getObjective"
      },
      outputs: {
        childUpdateObjective: "childUpdateObjective"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 14,
      consts: [["styleClass", "addObjective", "header", "Note: Once file is uploaded dialog cannot be cancelled", "position", "top", 3, "visible", "breakpoints", "closable", "visibleChange", "onHide"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [4, "ngIf"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "disabled", "click"], ["label", "Edit", 3, "click"], [3, "addNewFile", "childAddFile", 4, "ngIf"], [1, "grid", "flex-column"], ["class", "col-3 frequency", 4, "ngFor", "ngForOf"], [1, "col-3", "frequency"], [3, "for"], [3, "id", "formControlName", "min"], [1, "p-float-label", "p-input-icon-left"], [1, "pi", "pi-file-import"], ["type", "text", "id", "lefticon", "pInputText", "", 3, "formControlName", "click"], ["for", "lefticon"], ["class", "pi pi-check-circle text-teal-400 text-2xl pr-3 pb-2", 4, "ngIf"], [1, "pi", "pi-check-circle", "text-teal-400", "text-2xl", "pr-3", "pb-2"], [3, "addNewFile", "childAddFile"]],
      template: function EditObjectiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function EditObjectiveComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.editObjectiveGoalDialogCard = $event;
          })("onHide", function EditObjectiveComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.clearEditObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EditObjectiveComponent_div_4_Template, 3, 1, "div", 4)(5, EditObjectiveComponent_div_5_Template, 3, 1, "div", 4)(6, EditObjectiveComponent_div_6_Template, 3, 2, "div", 4)(7, EditObjectiveComponent_div_7_Template, 3, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "p-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_Template_p_button_click_9_listener() {
            return ctx.clearEditObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditObjectiveComponent_Template_p_button_click_10_listener() {
            return ctx.updateSubObjectiveGoalDialogExec(ctx.editObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, EditObjectiveComponent_app_add_files_11_Template, 1, 1, "app-add-files", 8);
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
  return EditObjectiveComponent;
})();

/***/ }),

/***/ 25101:
/*!******************************************************************!*\
  !*** ./src/app/director/goal/goal-table/goal-table.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalTableComponent: () => (/* binding */ GoalTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 99397);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26306);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 58504);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/multiselect */ 34055);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 96814);
















function GoalTableComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoalTableComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function GoalTableComponent_ng_template_10_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function GoalTableComponent_ng_template_11_ng_template_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
  }
}
function GoalTableComponent_ng_template_11_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-multiSelect", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function GoalTableComponent_ng_template_11_ng_template_7_Template_p_multiSelect_onChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const filter_r12 = restoredCtx.filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](filter_r12($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GoalTableComponent_ng_template_11_ng_template_7_ng_template_1_Template, 3, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", value_r11)("options", ctx_r10.deptDropdownValue);
  }
}
function GoalTableComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p-columnFilter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 20)(6, "p-columnFilter", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GoalTableComponent_ng_template_11_ng_template_7_Template, 2, 2, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 20)(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Campus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p-columnFilter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 20)(13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-columnFilter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 20)(17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 20)(21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Progress Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 20)(24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMenu", false);
  }
}
function GoalTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoalTableComponent_ng_template_12_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const goal_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.getObjectives(goal_r17.id, goal_r17._id, goal_r17.goallistsId, goal_r17.goals, goal_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td")(21, "div", 34)(22, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoalTableComponent_ng_template_12_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const goal_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.updateGoal(goal_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoalTableComponent_ng_template_12_Template_i_click_23_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const goal_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.deleteGoalDialog($event, goal_r17._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "p-confirmPopup", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, goal_r17.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, goal_r17.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, goal_r17.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 12, goal_r17.users.username), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 14, goal_r17.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", goal_r17.completion_percentage, "% ");
  }
}
function GoalTableComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Goals found Admin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function GoalTableComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading Goals data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = () => ["goals", "budget", "department", "campus", "users.username", "createdAt", "options"];
let GoalTableComponent = /*#__PURE__*/(() => {
  class GoalTableComponent {
    constructor(goal, messageService, auth, confirmationService, dept) {
      this.goal = goal;
      this.messageService = messageService;
      this.auth = auth;
      this.confirmationService = confirmationService;
      this.dept = dept;
      this.getGoalTableSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.editObjective = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.addedaGoal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.editedAGoal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.deletedAGoal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.addNewGoalButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.editGoalButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.deleteGoalButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.getObjectiveButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.goals = [];
      this.loading = false;
      this.deptDropdownValue = [];
    }
    ngOnChanges(changes) {
      this.editObjectiveTrigger = changes['editObjective']?.currentValue;
      this.addGoalTrigger = changes['addedaGoal']?.currentValue;
      this.editGoalTrigger = changes['editedAGoal']?.currentValue;
      this.deleteGoalTrigger = changes['deletedAGoal']?.currentValue;
      if (this.addGoalTrigger && this.addGoalTrigger.addedNewGoal) {
        this.goalsTableData(this.addGoalTrigger.userId);
      }
      if (this.editGoalTrigger && this.editGoalTrigger.editedAGoal) {
        this.goalsTableData(this.USERID);
      }
      if (this.deleteGoalTrigger && this.deleteGoalTrigger.deleteAGoal) {
        this.goalsTableData(this.USERID);
      }
      if (this.editObjectiveTrigger && this.editObjectiveTrigger.success) {
        this.goalsTableData(this.USERID);
      }
    }
    ngOnInit() {
      this.loading = true;
      this.USERID = this.auth.getTokenUserID();
      this.goalsTableData(this.USERID);
    }
    ngOnDestroy() {
      this.getGoalTableSubscription.unsubscribe();
    }
    goalsTableData(userId) {
      const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.loading;
      this.goal.fetch('get', 'director_query', `getAllObjectivesUnderADirector/${userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getGoalTableSubscription), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
        this.goals = data.goals;
        this.deptDropdownValue = data?.dropdown;
        this.loading = false;
        resultSubject.next(true); // Emit true on success
        resultSubject.complete(); // Complete the subject
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        this.loading = false; // Set loading to false on error
        this.messageService.add({
          severity: 'error',
          summary: 'Error getAllObjectivesUnderADirector',
          detail: error.message
        });
        resultSubject.next(false); // Emit false on error
        resultSubject.complete(); // Complete the subject
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => error); // Re-throw the error if necessary
      })).subscribe(); // Trigger the observable
      return resultSubject;
    }
    addGoal() {
      this.addNewGoalButtonClick.emit({
        addNewGoal: true
      }); // Emit the event with the new goal
    }

    updateGoal(goal) {
      this.editGoalButtonClick.emit({
        editGoal: true,
        goal: goal
      });
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
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getGoalTableSubscription)).subscribe(data => {
            if (data.success) {
              this.messageService.add({
                severity: 'success  ',
                summary: 'Done',
                detail: data.message
              });
              this.goalsTableData(this.USERID);
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
    getObjectives(id, _id, listsId, goal,
    // remainingBudget: any,
    goalData) {
      this.getObjectiveButtonClick.emit({
        id: id,
        _id: _id,
        listsId: listsId,
        goal: goal,
        // remainingBudget: remainingBudget,
        goalData: goalData
      });
    }
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getGoalTableSubscription)).subscribe(data => {
        this.deptDropdownValue = data?.data[0];
      });
    }
    static #_ = this.ɵfac = function GoalTableComponent_Factory(t) {
      return new (t || GoalTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: GoalTableComponent,
      selectors: [["app-goal-table"]],
      inputs: {
        editObjective: "editObjective",
        addedaGoal: "addedaGoal",
        editedAGoal: "editedAGoal",
        deletedAGoal: "deletedAGoal"
      },
      outputs: {
        addNewGoalButtonClick: "addNewGoalButtonClick",
        editGoalButtonClick: "editGoalButtonClick",
        deleteGoalButtonClick: "deleteGoalButtonClick",
        getObjectiveButtonClick: "getObjectiveButtonClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 15,
      vars: 8,
      consts: [[3, "autoZIndex"], [1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["pButton", "", "icon", "pi pi-compass", "label", "Add Goal", 3, "click"], ["id", "goalTable", "dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "goals", "display", "menu", "placeholder", "Search by Goals"], ["field", "department", "matchMode", "in", 3, "showMenu"], ["pTemplate", "filter"], ["type", "text", "field", "campus", "display", "menu", "placeholder", "Search by Campus"], ["type", "text", "field", "users.username", "display", "menu", "placeholder", "Search by Created By"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["id", "departmentSelectId", "placeholder", "Search by Department", "optionLabel", "name", "optionValue", "name", 3, "ngModel", "options", "onChange"], ["pTemplate", "item"], [1, "inline-block", "vertical-align-middle"], [1, "ml-1", "mt-1"], ["pButton", "", "pRipple", "", "type", "button", "pTooltip", "Show/Add objectives", "tooltipPosition", "top", 1, "p-button-help", "p-button-text", 3, "click"], [1, "text-center"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteGoal"], ["colspan", "8"]],
      template: function GoalTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-toast", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoalTableComponent_Template_button_click_7_listener() {
            return ctx.addGoal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p-table", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GoalTableComponent_ng_template_10_Template, 6, 0, "ng-template", 9)(11, GoalTableComponent_ng_template_11_Template, 26, 1, "ng-template", 10)(12, GoalTableComponent_ng_template_12_Template, 25, 17, "ng-template", 11)(13, GoalTableComponent_ng_template_13_Template, 3, 0, "ng-template", 12)(14, GoalTableComponent_ng_template_14_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoZIndex", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.goals)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_multiselect__WEBPACK_IMPORTED_MODULE_15__.MultiSelect, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_17__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
      styles: ["@charset \"UTF-8\";\n  #goalTable .p-datatable-wrapper {\n  height: 53vh !important;\n}\n\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"]
    });
  }
  return GoalTableComponent;
})();

/***/ }),

/***/ 89536:
/*!*************************************************!*\
  !*** ./src/app/director/goal/goal.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalComponent: () => (/* binding */ GoalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var _edit_goal_edit_goal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-goal/edit-goal.component */ 11888);
/* harmony import */ var _add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-goal/add-goal.component */ 32566);
/* harmony import */ var _goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goal-table/goal-table.component */ 25101);
/* harmony import */ var _objective_table_objective_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objective-table/objective-table.component */ 24272);
/* harmony import */ var _add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-objective/add-objective.component */ 47975);
/* harmony import */ var _edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-objective/edit-objective.component */ 39455);
/* harmony import */ var _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-files/add-files.component */ 94572);
/* harmony import */ var _view_files_view_files_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-files/view-files.component */ 73950);
/* harmony import */ var _view_file_history_view_file_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-file-history/view-file-history.component */ 79586);
/* harmony import */ var _print_objective_table_print_objective_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./print-objective-table/print-objective-table.component */ 98099);
/* harmony import */ var _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remarks/remarks.component */ 494);
/* harmony import */ var _print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print-qom/print-qom.component */ 35723);

















let GoalComponent = /*#__PURE__*/(() => {
  class GoalComponent {
    constructor(confirmationService, messageService, goal) {
      this.confirmationService = confirmationService;
      this.messageService = messageService;
      this.goal = goal;
      this.deleteGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
      //add goal
      this.parentAddnewGoal = {};
      this.parentEmitAddnewGoal = {};
      //edit goal
      this.parentEditGoal = {};
      this.parentEmitEditGoal = {};
      //delete goal
      this.parentEmitDeleteGoal = {};
      this.parentDeleteGoal = {};
      //get objective
      this.parentGetObjective = {};
      this.parentEmitGetObjective = {};
      // add objective
      this.parentAddnewObjective = {};
      this.parentEmitAddObjective = {};
      //print file
      this.parentPrintFile = {};
      this.parentPrintQom = {};
    }
    ngOnInit() {}
    ngOnDestroy() {
      this.deleteGoalSubscription.next();
      this.deleteGoalSubscription.complete();
    }
    receivedAddGoalEvent(event) {
      if (event?.success) {
        this.parentEmitAddnewGoal = {
          addedNewGoal: true,
          userId: event.userId
        };
      }
    }
    receivedAddNewGoalButtonClick(event) {
      this.parentAddnewGoal = {
        addGoal: event.addNewGoal
      };
    }
    receivedEditGoalEvent(event) {
      if (event?.success) {
        this.parentEmitEditGoal = {
          editedAGoal: true,
          goal: event.data
        };
      }
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
    receivedEditGoalButtonClick(event) {
      this.parentEditGoal = {
        editGoal: event.editGoal,
        goal: event.goal
      };
    }
    receivedGetObjectiveButtonClick(event) {
      const {
        id: id,
        _id: _id,
        listsId: listsId,
        goal: goal,
        remainingBudget: remainingBudget,
        goalData: goalData
      } = event;
      this.parentGetObjective = {
        getObjective: true,
        id: id,
        _id: _id,
        listsId: listsId,
        goal: goal,
        remainingBudget: remainingBudget,
        goalData: goalData
      };
    }
    receivedGetObjectiveEvent(event) {
      // this.parentEmitGetObjective = {
      //     getObjective: true,
      // };
    }
    // add objective
    receivedAddObjectiveEvent(event) {
      const {
        addObjective,
        goallistsId,
        goalId,
        goal_ObjectId,
        data
      } = event;
      if (event?.addObjective) {
        this.parentEmitAddObjective = {
          addedNewObjective: true,
          addObjective,
          goallistsId,
          goalId,
          goal_ObjectId,
          data
        };
      }
    }
    receivedAddSuccessObjectiveEvent(event) {
      const {
        addedNewObjective,
        success,
        data
      } = event;
      if (success) {
        this.parentEmitSuccessAddObjective = {
          addedNewObjective,
          success,
          data
        };
      }
    }
    receivedEditObjectiveEvent(event) {
      const {
        editObjective,
        data
      } = event;
      this.parentEditObjective = {
        editObjective: editObjective,
        data: data
      };
    }
    receivedUpdateObjective(event) {
      const {
        success,
        id: goalID
      } = event;
      if (success) {
        this.parentEditSuccessObjective = {
          success: success,
          id: goalID
        };
      }
    }
    receivedAddFileEvent(event) {
      const {
        USERID,
        objectiveId,
        viewObjectiveFileDialogCard,
        frequencyFileNameForUpdate,
        frequencyFileName
      } = event;
    }
    receivedViewFilesButtonClick(event) {
      const {
        viewFiles,
        data
      } = event;
      this.parentViewFiles = {
        viewFiles: viewFiles,
        data: data
      };
    }
    receivedViewFilesHistoryButtonClick(event) {
      const {
        viewFilesHistory,
        data
      } = event;
      this.parentViewFileHistory = {
        viewFilesHistory: viewFilesHistory,
        data: data
      };
    }
    receivedPrintObjectiveTableEvent(event) {
      const {
        header,
        data,
        printObjectiveTable
      } = event;
      this.parentPrintFile = {
        printObjectiveTable: printObjectiveTable,
        data: data,
        header: header
      };
    }
    receivedRemarksEvent(event) {
      const {
        remarksDialogCard,
        data
      } = event;
      this.parentRemarks = {
        remarksDialogCard: remarksDialogCard,
        data: data
      };
    }
    static #_ = this.ɵfac = function GoalComponent_Factory(t) {
      return new (t || GoalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: GoalComponent,
      selectors: [["app-goal"]],
      decls: 13,
      vars: 17,
      consts: [["key", "deleteGoal"], [3, "addedaGoal", "editedAGoal", "deletedAGoal", "editObjective", "addNewGoalButtonClick", "editGoalButtonClick", "getObjectiveButtonClick"], [3, "addNewGoal", "childAddGoalEvent"], [3, "editGoal", "childEditGoalEvent"], [3, "getObjective", "addNewSuccessObjective", "editObjective", "childGetObjectiveEvent", "childAddObjectiveEvent", "childEditObjectiveEvent", "viewFilesEvent", "viewFilesHistoryEvent", "printObjectiveTableEvent", "remarksEvent", "printQOMObjectiveTableEvent"], [3, "addNewObjective", "childSuccessAddObjectiveEvent"], [3, "addNewFile", "childAddFile"], [3, "viewFiles"], [3, "getObjective", "childUpdateObjective"], [3, "viewFilesHistory"], [3, "printFile"], [3, "printQOMFile"], [3, "remarksFromGoalParent", "childRemarksEvent"]],
      template: function GoalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "p-confirmPopup", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "app-goal-table", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("addNewGoalButtonClick", function GoalComponent_Template_app_goal_table_addNewGoalButtonClick_1_listener($event) {
            return ctx.receivedAddNewGoalButtonClick($event);
          })("editGoalButtonClick", function GoalComponent_Template_app_goal_table_editGoalButtonClick_1_listener($event) {
            return ctx.receivedEditGoalButtonClick($event);
          })("getObjectiveButtonClick", function GoalComponent_Template_app_goal_table_getObjectiveButtonClick_1_listener($event) {
            return ctx.receivedGetObjectiveButtonClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-add-goal", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childAddGoalEvent", function GoalComponent_Template_app_add_goal_childAddGoalEvent_2_listener($event) {
            return ctx.receivedAddGoalEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "app-edit-goal", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childEditGoalEvent", function GoalComponent_Template_app_edit_goal_childEditGoalEvent_3_listener($event) {
            return ctx.receivedEditGoalEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "app-objective-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childGetObjectiveEvent", function GoalComponent_Template_app_objective_table_childGetObjectiveEvent_4_listener($event) {
            return ctx.receivedGetObjectiveEvent($event);
          })("childAddObjectiveEvent", function GoalComponent_Template_app_objective_table_childAddObjectiveEvent_4_listener($event) {
            return ctx.receivedAddObjectiveEvent($event);
          })("childEditObjectiveEvent", function GoalComponent_Template_app_objective_table_childEditObjectiveEvent_4_listener($event) {
            return ctx.receivedEditObjectiveEvent($event);
          })("viewFilesEvent", function GoalComponent_Template_app_objective_table_viewFilesEvent_4_listener($event) {
            return ctx.receivedViewFilesButtonClick($event);
          })("viewFilesHistoryEvent", function GoalComponent_Template_app_objective_table_viewFilesHistoryEvent_4_listener($event) {
            return ctx.receivedViewFilesHistoryButtonClick($event);
          })("printObjectiveTableEvent", function GoalComponent_Template_app_objective_table_printObjectiveTableEvent_4_listener($event) {
            return ctx.receivedPrintObjectiveTableEvent($event);
          })("remarksEvent", function GoalComponent_Template_app_objective_table_remarksEvent_4_listener($event) {
            return ctx.receivedRemarksEvent($event);
          })("printQOMObjectiveTableEvent", function GoalComponent_Template_app_objective_table_printQOMObjectiveTableEvent_4_listener($event) {
            return ctx.receivedPrintQOMObjectiveTableEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "app-add-objective", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childSuccessAddObjectiveEvent", function GoalComponent_Template_app_add_objective_childSuccessAddObjectiveEvent_5_listener($event) {
            return ctx.receivedAddSuccessObjectiveEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "app-add-files", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childAddFile", function GoalComponent_Template_app_add_files_childAddFile_6_listener($event) {
            return ctx.receivedAddFileEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "app-view-files", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "app-edit-objective", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childUpdateObjective", function GoalComponent_Template_app_edit_objective_childUpdateObjective_8_listener($event) {
            return ctx.receivedUpdateObjective($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "app-view-file-history", 9)(10, "app-print-objective-table", 10)(11, "app-print-qom", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "app-remarks", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("childRemarksEvent", function GoalComponent_Template_app_remarks_childRemarksEvent_12_listener($event) {
            return ctx.receivedRemarksEvent($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("addedaGoal", ctx.parentEmitAddnewGoal)("editedAGoal", ctx.parentEmitEditGoal)("deletedAGoal", ctx.parentEmitDeleteGoal)("editObjective", ctx.parentEditSuccessObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("addNewGoal", ctx.parentAddnewGoal);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("editGoal", ctx.parentEditGoal);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("getObjective", ctx.parentGetObjective)("addNewSuccessObjective", ctx.parentEmitSuccessAddObjective)("editObjective", ctx.parentEditSuccessObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("addNewObjective", ctx.parentEmitAddObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("addNewFile", ctx.parentAddnewFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewFiles", ctx.parentViewFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("getObjective", ctx.parentEditObjective);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("viewFilesHistory", ctx.parentViewFileHistory);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("printFile", ctx.parentPrintFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("printQOMFile", ctx.parentPrintQom);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("remarksFromGoalParent", ctx.parentRemarks);
        }
      },
      dependencies: [primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_16__.ConfirmPopup, _edit_goal_edit_goal_component__WEBPACK_IMPORTED_MODULE_1__.EditGoalComponent, _add_goal_add_goal_component__WEBPACK_IMPORTED_MODULE_2__.AddGoalComponent, _goal_table_goal_table_component__WEBPACK_IMPORTED_MODULE_3__.GoalTableComponent, _objective_table_objective_table_component__WEBPACK_IMPORTED_MODULE_4__.ObjectiveTableComponent, _add_objective_add_objective_component__WEBPACK_IMPORTED_MODULE_5__.AddObjectiveComponent, _edit_objective_edit_objective_component__WEBPACK_IMPORTED_MODULE_6__.EditObjectiveComponent, _add_files_add_files_component__WEBPACK_IMPORTED_MODULE_7__.AddFilesComponent, _view_files_view_files_component__WEBPACK_IMPORTED_MODULE_8__.ViewFilesComponent, _view_file_history_view_file_history_component__WEBPACK_IMPORTED_MODULE_9__.ViewFileHistoryComponent, _print_objective_table_print_objective_table_component__WEBPACK_IMPORTED_MODULE_10__.PrintObjectiveTableComponent, _remarks_remarks_component__WEBPACK_IMPORTED_MODULE_11__.RemarksComponent, _print_qom_print_qom_component__WEBPACK_IMPORTED_MODULE_12__.PrintQomComponent]
    });
  }
  return GoalComponent;
})();

/***/ }),

/***/ 24272:
/*!****************************************************************************!*\
  !*** ./src/app/director/goal/objective-table/objective-table.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectiveTableComponent: () => (/* binding */ ObjectiveTableComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/custom-title-case */ 8215);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/dataFilter */ 42162);



















function ObjectiveTableComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_24_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.addSubGoal(ctx_r9.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_24_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.printDocument(ctx_r10.subOnjectiveHeaderData == null ? null : ctx_r10.subOnjectiveHeaderData.department, ctx_r10.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_24_Template_p_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.printDocumentQOM(ctx_r11.subOnjectiveHeaderData == null ? null : ctx_r11.subOnjectiveHeaderData.department, ctx_r11.objectiveDatas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function ObjectiveTableComponent_ng_template_24_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("outlined", true);
  }
}
function ObjectiveTableComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "th", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 23)(7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "p-columnFilter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 23)(11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Functional Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "p-columnFilter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th", 23)(15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Performance Indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th", 23)(19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " Formula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th", 23)(23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "p-columnFilter", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th", 23)(27, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Responsible Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "p-columnFilter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th", 31)(31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Frequency Monitoring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "p-columnFilter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th", 23)(35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " Data Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "p-columnFilter", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th", 23)(39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "p-columnFilter", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th", 23)(43, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "p-columnFilter", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th", 23)(47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, " Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "p-columnFilter", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th", 23)(51, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, " Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "p-columnFilter", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th", 38)(55, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "p-columnFilter", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "th", 40)(59, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ObjectiveTableComponent_ng_template_26_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("rowspan", ctx_r15.objectiveDatas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r15.subObjectiveHeaders + " (" + objectiveData_r13.strategic_objective + ")"), " ");
  }
}
function ObjectiveTableComponent_ng_template_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objectiveData_r13.goalVsActual, " ");
  }
}
function ObjectiveTableComponent_ng_template_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objectiveData_r13.goalVsActual + "%", " ");
  }
}
function ObjectiveTableComponent_ng_template_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objectiveData_r13.countNonCumulative + " %", " ");
  }
}
function ObjectiveTableComponent_ng_template_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objectiveData_r13.countNonCumulative, " ");
  }
}
function ObjectiveTableComponent_ng_template_26_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_26_Conditional_48_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const objectiveData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.viewFilesHistory(objectiveData_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ObjectiveTableComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ObjectiveTableComponent_ng_template_26_td_1_Template, 3, 4, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ObjectiveTableComponent_ng_template_26_Conditional_3_Template, 1, 1)(4, ObjectiveTableComponent_ng_template_26_Conditional_4_Template, 1, 1)(5, ObjectiveTableComponent_ng_template_26_Conditional_5_Template, 1, 1)(6, ObjectiveTableComponent_ng_template_26_Conditional_6_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "td")(39, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_26_Template_p_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const objectiveData_r13 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.openRemarksDialog(objectiveData_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "td")(41, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_26_Template_p_button_click_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const objectiveData_r13 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.updateSubGoal(objectiveData_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "p-confirmPopup", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "td")(45, "div", 46)(46, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_26_Template_i_click_46_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const objectiveData_r13 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r33.viewFiles(objectiveData_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ObjectiveTableComponent_ng_template_26_Conditional_48_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "td")(50, "div", 49)(51, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ObjectiveTableComponent_ng_template_26_Template_i_click_51_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const objectiveData_r13 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.deleteSubGoal(objectiveData_r13.id, objectiveData_r13.goalId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "p-confirmPopup", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const objectiveData_r13 = ctx.$implicit;
    const rowIndex_r14 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", rowIndex_r14 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](3, objectiveData_r13.type_of_computation === "cumulative" && objectiveData_r13.target_type === "count" ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](4, objectiveData_r13.type_of_computation === "cumulative" && objectiveData_r13.target_type === "percent" ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](5, objectiveData_r13.type_of_computation === "non-cumulative" && objectiveData_r13.target_type === "percent" ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](6, objectiveData_r13.type_of_computation === "non-cumulative" && objectiveData_r13.target_type === "count" ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" as of ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 21, ctx_r3.currentDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", objectiveData_r13.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 24, objectiveData_r13.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 26, objectiveData_r13.performance_indicator), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 28, objectiveData_r13.formula), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 30, objectiveData_r13.programs), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 32, objectiveData_r13.responsible_persons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 34, ctx_r3.formatText(objectiveData_r13.frequency_monitoring)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 36, objectiveData_r13.data_source), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 38, objectiveData_r13.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](37, 40, objectiveData_r13.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", true)("raised", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("text", true)("raised", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](48, ctx_r3.USERID !== (objectiveData_r13 == null ? null : objectiveData_r13.createdBy) ? 48 : -1);
  }
}
function ObjectiveTableComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No Objectives found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ObjectiveTableComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Loading Objectives data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c0 = () => ({
  width: "60rem",
  overflow: "auto"
});
const _c1 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c2 = () => ["", "target", "functional_objective", "performance_indicator", "formula", "programs", "department", "responsible_persons", "frequency_monitoring", "data_source", "budget", "createdAt", "Files", "options"];
const _c3 = () => ({
  "min-width": "50rem"
});
let ObjectiveTableComponent = /*#__PURE__*/(() => {
  class ObjectiveTableComponent {
    // childAddObjectiveEvent: any;
    constructor(objective, messageService, confirmationService, auth, department, goal, campus, changeDetectorRef) {
      this.objective = objective;
      this.messageService = messageService;
      this.confirmationService = confirmationService;
      this.auth = auth;
      this.department = department;
      this.goal = goal;
      this.campus = campus;
      this.changeDetectorRef = changeDetectorRef;
      this.objectiveTableSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.getObjective = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.editObjective = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.addNewSuccessObjective = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.childAddObjectiveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.childEditObjectiveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.viewFilesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.viewFilesHistoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.printObjectiveTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.remarksEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.printQOMObjectiveTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      this.subGoalObjective = false;
      this.loading = false;
      this.objectiveDatas = [];
      this.currentDate = new Date();
    }
    ngOnInit() {
      this.loading = true;
      this.USERID = this.auth.getTokenUserID();
    }
    ngOnDestroy() {
      this.objectiveTableSubscription.next();
      this.objectiveTableSubscription.complete();
      this.objectiveTableSubscription.unsubscribe();
    }
    hideViewObjectiveTable(id) {
      this.subGoalObjective = false;
    }
    ngOnChanges(changes) {
      this.getObjectiveTableTrigger = changes['getObjective']?.currentValue;
      this.addNewObjectiveTableTrigger = changes['addNewSuccessObjective']?.currentValue;
      this.editObjectiveTableTrigger = changes['editObjective']?.currentValue;
      if (this.getObjectiveTableTrigger && this.getObjectiveTableTrigger.getObjective) {
        const {
          id: id,
          _id: objectId,
          listsId: goallistsId,
          goal: subHeader,
          // remainingBudget: goalDataRemainingBudget,
          goalData: goalData
        } = this.getObjectiveTableTrigger;
        this.loading = true;
        //passed data needed for the subgoal table or adding table modal
        this.subObjectiveGoalID = id;
        this.goallistsId = goallistsId;
        this.goal_ObjectId = objectId || goalData._id || '';
        //open the objective modal
        this.subGoalObjective = true;
        //remaining budget needed in adding objective input
        //headers in objective table
        this.subOnjectiveHeaderData = goalData;
        // this.goalDataRemainingBudget =
        //     goalDataRemainingBudget ||
        //     this.subOnjectiveHeaderData?.remainingBudget;
        this.goalBudget = this.subOnjectiveHeaderData?.budget;
        this.subObjectiveHeaders = (0,src_app_utlis_custom_title_case__WEBPACK_IMPORTED_MODULE_1__.customTitleCase)(subHeader || this.subObjectiveHeaders || '');
        this.getTableData(id);
      }
      if (this.addNewObjectiveTableTrigger && this.addNewObjectiveTableTrigger.addedNewObjective) {
        this.loading = true;
        this.getTableData(this.addNewObjectiveTableTrigger.data.goalId);
      }
      if (this.editObjectiveTableTrigger?.success && this.editObjectiveTableTrigger?.id) {
        const {
          success,
          id
        } = this.editObjectiveTableTrigger;
        this.loading = success;
        this.getTableData(id);
      }
    }
    getTableData(id) {
      var _this = this;
      //clear the table
      // this.objectiveDatas = [];
      if (id) {
        this.loading = true;
        this.objective.fetch('get', 'objectives', `getAllByIdObjectives/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveTableSubscription)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this.objectiveDatas = yield data.Objectives;
            _this.changeDetectorRef.markForCheck();
            _this.loading = false;
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }
    addSubGoal(data) {
      this.childAddObjectiveEvent.emit({
        addObjective: true,
        goallistsId: this.goallistsId,
        goalId: this.subObjectiveGoalID,
        goal_ObjectId: this.goal_ObjectId,
        data: data
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
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveTableSubscription)).subscribe(data => {
            if (data.success) {
              //tag is as changes so if close will recalculate the data
              this.loading = false;
              this.messageService.add({
                severity: 'success',
                summary: 'Done',
                detail: data.message
              });
              // Unsubscribe after getting the data
              this.getTableData(goalId);
              this.loading = false;
              this.changeDetectorRef.detectChanges();
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: data.message
              });
              this.loading = false;
            }
          });
        },
        reject: () => {
          this.loading = false;
          this.messageService.add({
            severity: 'info',
            summary: 'Done',
            detail: 'Delete Cancelled'
          });
        }
      });
    }
    updateSubGoal(data) {
      this.childEditObjectiveEvent.emit({
        editObjective: true,
        data: data
      });
    }
    viewFilesHistory(objectiveData) {
      this.viewFilesHistoryEvent.emit({
        viewFilesHistory: true,
        data: objectiveData
      });
    }
    viewFiles(objectives) {
      this.viewFilesEvent.emit({
        viewFiles: true,
        data: objectives
      });
    }
    printDocumentQOM(header, data) {
      console.log('printDocumentQOM');
      this.printQOMObjectiveTableEvent.emit({
        printQOMObjectiveTable: true,
        data: data,
        header: header
      });
    }
    printDocument(header, data) {
      //   this.printingHead = true;
      this.printObjectiveTableEvent.emit({
        printObjectiveTable: true,
        data: data,
        header: header
      });
    }
    openRemarksDialog(data) {
      this.remarksEvent.emit({
        remarksDialogCard: true,
        data: data
      });
    }
    formatText(text) {
      return text.replace(/_/g, ' ');
    }
    static #_ = this.ɵfac = function ObjectiveTableComponent_Factory(t) {
      return new (t || ObjectiveTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_2__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_4__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_6__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ObjectiveTableComponent,
      selectors: [["app-objective-table"]],
      inputs: {
        getObjective: "getObjective",
        editObjective: "editObjective",
        addNewSuccessObjective: "addNewSuccessObjective"
      },
      outputs: {
        childAddObjectiveEvent: "childAddObjectiveEvent",
        childEditObjectiveEvent: "childEditObjectiveEvent",
        viewFilesEvent: "viewFilesEvent",
        viewFilesHistoryEvent: "viewFilesHistoryEvent",
        printObjectiveTableEvent: "printObjectiveTableEvent",
        remarksEvent: "remarksEvent",
        printQOMObjectiveTableEvent: "printQOMObjectiveTableEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
      decls: 29,
      vars: 32,
      consts: [["responsiveLayout", "stack", 3, "visible", "breakpoints", "maximizable", "visibleChange", "onHide"], [1, "grid"], [1, "col-12", "md:col-6", "p-6", "text-center", "md:text-left", "flex", "align-items-center", "surface-section", "text-800"], [1, "block", "text-6xl", "font-bold", "mb-1"], [1, "text-6xl", "text-primary", "font-bold", "mb-3"], [1, "mt-0", "mb-4", "text-700", "line-height-3"], [1, "col-12"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt2", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body", "styleClass", "custom-table-style"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], ["icon", "pi pi-plus", "severity", "success", "pTooltip", "Add Objectives", "tooltipPosition", "top", 3, "outlined", "click"], ["icon", "pi pi-file-pdf", "label", "QOAP", "severity", "info", "pTooltip", "Print PDF", "tooltipPosition", "top", 3, "outlined", "click"], ["icon", "pi pi-file-pdf", "label", "QOM", "severity", "success", "pTooltip", "Print PDF", "tooltipPosition", "top", 3, "outlined", "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "target", "display", "menu", "placeholder", "Search by Target"], ["type", "text", "field", "functional_objective", "display", "menu", "placeholder", "Search by Functional Objective"], ["type", "text", "field", "performance_indicator", "display", "menu", "placeholder", "Search by Performance Indicator"], ["type", "text", "field", "formula", "display", "menu", "placeholder", "Search by Formula"], ["type", "text", "field", "programs", "display", "menu", "placeholder", "Search by Programs"], ["type", "text", "field", "responsible_persons", "display", "menu", "placeholder", "Search by Responsible Persons"], [2, "min-width", "4rem"], ["type", "text", "field", "frequency_monitoring", "display", "menu", "placeholder", "Search by Frequency Monitoring"], ["type", "text", "field", "data_source", "display", "menu", "placeholder", "Search by Data Source"], ["type", "text", "field", "budget", "display", "menu", "placeholder", "Search by Budget"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["type", "text", "field", "remarks", "display", "menu", "placeholder", "Search by Remarks"], ["type", "text", "field", "complete", "display", "menu", "placeholder", "Search by Completion"], [2, "min-width", "6rem"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "Search by Files"], [2, "min-width", "9rem"], [4, "ngIf"], ["severity", "help", "icon", "\n                              pi pi-comments\n                            ", "label", "Remarks", 3, "text", "raised", "click"], ["severity", "help", "icon", "\n                                  pi pi-external-link\n                                ", "label", "View", 3, "text", "raised", "click"], ["key", "updateObjectiveComplete"], ["confirmPopupRef", ""], [1, "flex", "flex-row", "align-items-center"], ["pTooltip", "File List", "tooltipPosition", "top", 1, "pi", "pi-folder", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-folder-open", "cursor-pointer", 3, "click"], ["pTooltip", "File History", "tooltipPosition", "top", "class", "pi pi-cog text-2xl hover:text-4xl text-yellow-400 transition ease-in-out duration-200 hover:pi-cog cursor-pointer"], [1, "options-users"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteSubGoal"], ["pTooltip", "File History", "tooltipPosition", "top", 1, "pi", "pi-cog", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-cog", "cursor-pointer", 3, "click"], ["colspan", "8"]],
      template: function ObjectiveTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleChange", function ObjectiveTableComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.subGoalObjective = $event;
          })("onHide", function ObjectiveTableComponent_Template_p_dialog_onHide_0_listener() {
            return ctx.hideViewObjectiveTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "section")(4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 2)(14, "section")(15, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 6)(22, "p-table", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, ObjectiveTableComponent_ng_template_24_Template, 9, 3, "ng-template", 9)(25, ObjectiveTableComponent_ng_template_25_Template, 61, 0, "ng-template", 10)(26, ObjectiveTableComponent_ng_template_26_Template, 53, 43, "ng-template", 11)(27, ObjectiveTableComponent_ng_template_27_Template, 3, 0, "ng-template", 12)(28, ObjectiveTableComponent_ng_template_28_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.subGoalObjective)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c1))("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 18, ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.users == null ? null : ctx.subOnjectiveHeaderData.users.username), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 20, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.campus) || "Campus"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 22, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.department) || "Department"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 24, ctx.subObjectiveHeaders), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 26, ctx.goalBudget || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.objectiveDatas)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](30, _c2))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c3))("rowHover", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_15__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_18__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_7__.PesoPipe]
    });
  }
  return ObjectiveTableComponent;
})();

/***/ }),

/***/ 98099:
/*!****************************************************************************************!*\
  !*** ./src/app/director/goal/print-objective-table/print-objective-table.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintObjectiveTableComponent: () => (/* binding */ PrintObjectiveTableComponent)
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
function PrintObjectiveTableComponent_tbody_75_tr_1_td_1_Template(rf, ctx) {
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
function PrintObjectiveTableComponent_tbody_75_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintObjectiveTableComponent_tbody_75_tr_1_td_1_Template, 3, 4, "td", 21);
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
function PrintObjectiveTableComponent_tbody_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintObjectiveTableComponent_tbody_75_tr_1_Template, 28, 26, "tr", 20);
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
let PrintObjectiveTableComponent = /*#__PURE__*/(() => {
  class PrintObjectiveTableComponent {
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
    } // Inject AuthService if needed
    ngOnInit() {
      this.imageSrc = this.authService.domain + '/images/logo.png'; // Get the image source
    }

    ngOnChanges(changes) {
      const {
        data,
        header,
        printObjectiveTable
      } = changes['printFile']?.currentValue;
      this.objectiveDatas = data;
      this.subOnjectiveHeaderData = header;
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
                   <th colspan="5">${this.subOnjectiveHeaderData?.toUpperCase() || this.printingOfficeName?.toUpperCase()}</th>
                   <th colspan="5">QUALITY OBJECTIVES AND ACTION PLAN</th>
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
    static #_ = this.ɵfac = function PrintObjectiveTableComponent_Factory(t) {
      return new (t || PrintObjectiveTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrintObjectiveTableComponent,
      selectors: [["app-print-objective-table"]],
      viewQuery: function PrintObjectiveTableComponent_Query(rf, ctx) {
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
      consts: [["header", "Office Head", 3, "visible", "visibleChange"], [1, "p-text-secondary", "block", "mb-5"], [1, "flex", "align-items-center", "gap-3", "mb-3"], ["for", "username", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "name", "placeholder", "e.g Benrie Nufable, PHD. TM", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["nameInput", ""], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["for", "email", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "office", "placeholder", "e.g MIS Head - DPO", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["officeInput", ""], ["pInputText", "", "id", "name", "placeholder", "e.g Yrika Marie R. Dusaran, PhD", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Director for Quality Management", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "name", "placeholder", "e.g Rosalinda S. Tuvilla", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["pInputText", "", "id", "office", "placeholder", "e.g Chief Adminstrative Officer - Admin", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "onClick"], ["label", "Save", 3, "onClick"], ["id", "print", 3, "ngClass"], ["colspan", "2"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "2", 4, "ngIf"]],
      template: function PrintObjectiveTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function PrintObjectiveTableComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.printingHead = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Prepared By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.preparedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_11_listener($event) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.counterCheckedValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 11, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_23_listener($event) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.reviewedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_35_listener($event) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.verifiedByValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 6)(45, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintObjectiveTableComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.verifiedByofficeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14)(50, "p-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintObjectiveTableComponent_Template_p_button_onClick_50_listener() {
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p-button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function PrintObjectiveTableComponent_Template_p_button_onClick_51_listener() {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, PrintObjectiveTableComponent_tbody_75_Template, 2, 1, "tbody", 19);
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
  return PrintObjectiveTableComponent;
})();

/***/ }),

/***/ 35723:
/*!****************************************************************!*\
  !*** ./src/app/director/goal/print-qom/print-qom.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 494:
/*!************************************************************!*\
  !*** ./src/app/director/goal/remarks/remarks.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 13)(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const remark_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", remark_r3.remarks, " ");
  }
}
function RemarksComponent_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 19)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "sup", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RemarksComponent_For_6_Conditional_0_Template, 6, 1, "li", 9)(1, RemarksComponent_For_6_Conditional_1_Template, 12, 8);
  }
  if (rf & 2) {
    const remark_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](0, ctx_r0.USERID === remark_r3.userId ? 0 : 1);
  }
}
function RemarksComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 23)(2, "button", 24)(3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RemarksComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function RemarksComponent_ng_template_11_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r12.text = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.showEditorDialogCard = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-button", 27);
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
      consts: [["header", "Remarks", 3, "visible", "breakpoints", "visibleChange"], [1, "card"], [1, "flex", "align-items-end", "justify-content-between", "flex-row-reverse"], ["pButton", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [1, "p-0", "mx-0", "mt-0", "mb-4", "list-none"], ["header", "Remarks", 3, "visible", "visibleChange"], [3, "ngModel", "ngModelChange"], ["pTemplate", "header"], ["pTemplate", "footer"], ["class", "flex justify-content-between flex-row-reverse align-items-center py-2 border-bottom-1 surface-border"], [1, "flex", "justify-content-between", "flex-row-reverse", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-user", "text-xl", "text-blue-500"], [1, "text-900", "line-height-3"], [1, "text-700"], [1, "flex", "justify-content-between", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "text-xl", "text-orange-500"], [1, "text-xs", "text-500", "text-center"], [1, "text-700", "line-height-3"], [1, ""], [1, "text-xs", "text-500", "text-right"], [1, "ql-formats"], ["type", "button", "aria-label", "Bold", 1, "ql-bold"], ["type", "button", "aria-label", "Italic", 1, "ql-italic"], ["type", "button", "aria-label", "Underline", 1, "ql-underline"], ["label", "Cancel", "severity", "secondary", 3, "text", "onClick"], ["label", "Save", "severity", "secondary", 3, "outlined", "onClick"]],
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

/***/ 79586:
/*!********************************************************************************!*\
  !*** ./src/app/director/goal/view-file-history/view-file-history.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewFileHistoryComponent: () => (/* binding */ ViewFileHistoryComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var src_app_demo_service_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/route.service */ 94342);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 53714);













function ViewFileHistoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewFileHistoryComponent_ng_template_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ViewFileHistoryComponent_ng_template_6_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ViewFileHistoryComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 17)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Date Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 17)(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ViewFileHistoryComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesHistoryFiles_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r3.auth.domain + "/images/files/" + AllObjectivesHistoryFiles_r11.source, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r3.getIcon(AllObjectivesHistoryFiles_r11.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 9, AllObjectivesHistoryFiles_r11.date_added, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r11.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 12, AllObjectivesHistoryFiles_r11.updatedAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r11.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](AllObjectivesHistoryFiles_r11.status ? "Active" : "Deleted");
  }
}
function ViewFileHistoryComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ViewFileHistoryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ViewFileHistoryComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewFileHistoryComponent_ng_template_11_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.hideViewFileHistoryDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", true);
  }
}
const _c0 = () => ({
  width: "60rem"
});
const _c1 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c2 = () => ["name", "code", "options"];
const _c3 = () => ({
  "min-width": "50rem"
});
let ViewFileHistoryComponent = /*#__PURE__*/(() => {
  class ViewFileHistoryComponent {
    constructor(fileService, route, changeDetectorRef, auth) {
      this.fileService = fileService;
      this.route = route;
      this.changeDetectorRef = changeDetectorRef;
      this.auth = auth;
      this.getGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject(); // Subscription for getting goal
      this.viewObjectiveFileHistoryDialogCard = false;
      this.loading = false;
      this.AllObjectivesHistoryFiles = [];
      this.cardOptions = false;
    }
    ngOnInit() {}
    ngOnDestroy() {}
    ngOnChanges(changes) {
      if (changes['viewFilesHistory']?.currentValue) {
        const {
          data,
          viewFilesHistory
        } = changes['viewFilesHistory']?.currentValue;
        this.objectiveIDforFile = data.id;
        //use this when triggering the child component for adding file
        this.getAllFilesHistoryFromObjectiveLoad(data.userId, data.id);
        this.viewObjectiveFileHistoryDialogCard = viewFilesHistory;
      }
    }
    hideViewFileHistoryDialogCard() {
      this.viewObjectiveFileHistoryDialogCard = false;
    }
    getIcon(name) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.getIcon)(name);
    }
    getAllFilesHistoryFromObjectiveLoad(id, objectiveID) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this.loading = true;
          _this.route.getRoute('get', 'vice_president_query', `getAllFilesHistoryFromObjectiveLoad/${id}/${objectiveID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this.getGoalSubscription)).subscribe(data => {
            _this.AllObjectivesHistoryFiles = data.data;
            _this.loading = false;
          });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      })();
    }
    static #_ = this.ɵfac = function ViewFileHistoryComponent_Factory(t) {
      return new (t || ViewFileHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ViewFileHistoryComponent,
      selectors: [["app-view-file-history"]],
      inputs: {
        viewFilesHistory: "viewFilesHistory"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 19,
      consts: [["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], [1, "grid"], [1, "col-12"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt3", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["pTemplate", "footer"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], ["colspan", "8"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"]],
      template: function ViewFileHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function ViewFileHistoryComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.viewObjectiveFileHistoryDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "p-table", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ViewFileHistoryComponent_ng_template_6_Template, 6, 0, "ng-template", 5)(7, ViewFileHistoryComponent_ng_template_7_Template, 13, 0, "ng-template", 6)(8, ViewFileHistoryComponent_ng_template_8_Template, 14, 15, "ng-template", 7)(9, ViewFileHistoryComponent_ng_template_9_Template, 3, 0, "ng-template", 8)(10, ViewFileHistoryComponent_ng_template_10_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ViewFileHistoryComponent_ng_template_11_Template, 1, 1, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "File HistoryList")("visible", ctx.viewObjectiveFileHistoryDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](16, _c1))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.loading, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.AllObjectivesHistoryFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c2))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c3));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"],
      changeDetection: 0
    });
  }
  return ViewFileHistoryComponent;
})();

/***/ }),

/***/ 73950:
/*!******************************************************************!*\
  !*** ./src/app/director/goal/view-files/view-files.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewFilesComponent: () => (/* binding */ ViewFilesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);













function ViewFilesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewFilesComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ViewFilesComponent_ng_template_5_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.blockedPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.blockedPanel);
  }
}
function ViewFilesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Objectives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 17)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Frequency File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 17)(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 19)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ViewFilesComponent_ng_template_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 25);
  }
}
function ViewFilesComponent_ng_template_7_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewFilesComponent_ng_template_7_Conditional_15_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const AllObjectivesFile_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.deleteSubGoalFile(AllObjectivesFile_r11.id, AllObjectivesFile_r11.source));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ViewFilesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td")(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ViewFilesComponent_ng_template_7_Conditional_14_Template, 1, 0, "i", 23)(15, ViewFilesComponent_ng_template_7_Conditional_15_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-confirmPopup", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesFile_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, AllObjectivesFile_r11 == null ? null : AllObjectivesFile_r11.objectives == null ? null : AllObjectivesFile_r11.objectives.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.getFrequencyKeys(AllObjectivesFile_r11), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r3.auth.domain + "/images/files/" + AllObjectivesFile_r11.source, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.getIcon(AllObjectivesFile_r11.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, AllObjectivesFile_r11.date_added, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](14, ctx_r3.blockedPanel ? 14 : 15);
  }
}
function ViewFilesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ViewFilesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ViewFilesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewFilesComponent_ng_template_10_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.hideViewFileDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", true);
  }
}
const _c0 = () => ({
  width: "60rem"
});
const _c1 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c2 = () => ["objectives.functional_objective", "date_added"];
const _c3 = () => ({
  "min-width": "50rem"
});
let ViewFilesComponent = /*#__PURE__*/(() => {
  class ViewFilesComponent {
    constructor(messageService, auth, file, confirmationService) {
      this.messageService = messageService;
      this.auth = auth;
      this.file = file;
      this.confirmationService = confirmationService;
      this.viewFilesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
      this.viewObjectiveFileDialogCard = false;
      this.AllObjectivesFiles = [];
      this.loading = false;
    }
    ngOnChanges(changes) {
      if (changes['viewFiles']?.currentValue) {
        const {
          data,
          viewFiles
        } = changes['viewFiles']?.currentValue;
        this.objectiveIDforFile = data.id;
        //use this when triggering the child component for adding file
        this.getAllFilesFromObjectiveLoad(this.USERID, data.id);
        this.viewObjectiveFileDialogCard = viewFiles;
      }
    }
    ngOnInit() {
      this.USERID = this.auth.getTokenUserID();
    }
    ngOnDestroy() {}
    hideViewFileDialogCard() {
      this.viewObjectiveFileDialogCard = false;
    }
    getAllFilesFromObjectiveLoad(id, objectiveID) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this.loading = true;
          _this.file.getAllFilesFromObjective(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(_this.viewFilesSubscription)).subscribe(data => {
            _this.AllObjectivesFiles = data.data;
            _this.loading = false;
          });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      })();
    }
    getFrequencyKeys(objectiveFile) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.getFrequencyKeys)(objectiveFile);
    }
    getIcon(name) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.getIcon)(name);
    }
    // delete file
    deleteSubGoalFile(id, source) {
      // alert(`delete sub goal file ${id} ${source}`);
      this.confirmationService.confirm({
        key: 'deleteSubGoalFile',
        target: event.target || new EventTarget(),
        message: 'Delete File',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.file.deleteFileObjective({
            id: id,
            source: source
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.viewFilesSubscription)).subscribe(data => {
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
    static #_ = this.ɵfac = function ViewFilesComponent_Factory(t) {
      return new (t || ViewFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ViewFilesComponent,
      selectors: [["app-view-files"]],
      inputs: {
        viewFiles: "viewFiles"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 18,
      consts: [["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], [1, "grid"], [1, "col-12"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt3", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["pTemplate", "footer"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "disabled", "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "disabled", "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], [2, "min-width", "9rem"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], [1, "options-users"], ["class", "pi pi-trash text-xl", "style", "color: #868585"], ["key", "deleteSubGoalFile"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#868585"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["colspan", "8"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"]],
      template: function ViewFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function ViewFilesComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.viewObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "p-table", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ViewFilesComponent_ng_template_5_Template, 6, 2, "ng-template", 5)(6, ViewFilesComponent_ng_template_6_Template, 16, 0, "ng-template", 6)(7, ViewFilesComponent_ng_template_7_Template, 17, 11, "ng-template", 7)(8, ViewFilesComponent_ng_template_8_Template, 3, 0, "ng-template", 8)(9, ViewFilesComponent_ng_template_9_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ViewFilesComponent_ng_template_10_Template, 1, 1, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("header", "File List")("visible", ctx.viewObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.AllObjectivesFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c2))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c3));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe]
    });
  }
  return ViewFilesComponent;
})();

/***/ })

}]);