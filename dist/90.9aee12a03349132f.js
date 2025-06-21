"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[90],{

/***/ 85476:
/*!*****************************************!*\
  !*** ./src/app/user/ai/ai.component.ts ***!
  \*****************************************/
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
const _c2 = (a0, a1, a2) => ({
  "message-personal": a0,
  "message-ai": a1,
  loading: a2
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](7, _c2, message_r3.isPersonal, !message_r3.isPersonal, message_r3.isLoading));
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AiComponent_div_10_Template, 6, 11, "div", 9);
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
      styles: ["\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  line-height: 1.3;\n  overflow: hidden;\n}\n\n.layout-main-container[_ngcontent-%COMP%] {\n  max-height: 100dvh !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-height: calc(100dvh - 180px);\n  overflow: hidden;\n}\n\n\n\n\n\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100dvh - 252px);\n  z-index: 2;\n  overflow: hidden;\n  background: #fff;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n\n\n\n\n.chat-title[_ngcontent-%COMP%] {\n  flex: 0 1 45px;\n  position: relative;\n  z-index: 2;\n  background: #dbdbdb;\n  color: #444444;\n  text-transform: uppercase;\n  text-align: left;\n  padding: 20px 20px;\n}\n\n\n\n\n\n.messages[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  color: rgba(255, 255, 255, 0.5);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n.messages[_ngcontent-%COMP%]   .messages-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 101%;\n  width: 100%;\n  padding: 10px;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  clear: both;\n  float: left;\n  padding: 10px 15px 7.5px 15px;\n  border-radius: 10px 10px 10px 0;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  font-size: 14px;\n  line-height: 1.4;\n  margin-left: 20px;\n  position: relative;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n}\n.messages[_ngcontent-%COMP%]   .message.timestamp[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  font-size: 9px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -6px;\n  border-top: 6px solid rgba(0, 0, 0, 0.3);\n  left: 0;\n  border-right: 7px solid transparent;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: -15px;\n  left: -35px;\n  border-radius: 30px;\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  border: 2px solid rgba(255, 255, 255, 0.24);\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.messages[_ngcontent-%COMP%]   .message.message-personal[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n  border-radius: 10px 10px 0 10px;\n}\n.messages[_ngcontent-%COMP%]   .message.message-personal[_ngcontent-%COMP%]::before {\n  left: auto;\n  right: 0;\n  border-right: none;\n  border-left: 5px solid transparent;\n  border-top: 4px solid #9ff4ff;\n  bottom: -4px;\n}\n.messages[_ngcontent-%COMP%]   .message.message-ai[_ngcontent-%COMP%] {\n  float: left;\n  color: #444444;\n  text-align: left;\n  border-radius: 10px 10px 10px 0;\n}\n.messages[_ngcontent-%COMP%]   .message.message-ai[_ngcontent-%COMP%]::before {\n  right: auto;\n  left: 0;\n  border-left: none;\n  border-right: 5px solid transparent;\n  border-top: 4px solid #f5f5f5;\n  bottom: -4px;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 30px;\n}\n.messages[_ngcontent-%COMP%]   .message.new[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transform-origin: 0 0;\n  animation: _ngcontent-%COMP%_bounce 500ms linear both;\n}\n.messages[_ngcontent-%COMP%]   .message-personal[_ngcontent-%COMP%], .messages[_ngcontent-%COMP%]   .message-ai[_ngcontent-%COMP%] {\n  float: none; \n\n  margin-left: 0; \n\n}\n.messages[_ngcontent-%COMP%]   .message-personal[_ngcontent-%COMP%] {\n  background-color: #9ff4ff; \n\n  color: #006064; \n\n  align-self: flex-end;\n  text-align: left;\n}\n.messages[_ngcontent-%COMP%]   .message-ai[_ngcontent-%COMP%] {\n  background-color: #f5f5f5; \n\n  color: #212121; \n\n  align-self: flex-start;\n  text-align: left;\n}\n.messages[_ngcontent-%COMP%]   .message.new[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 500ms linear both; \n\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  border: none;\n  animation-delay: 0.15s;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0;\n  width: 20px;\n  height: 10px;\n  position: relative;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  margin-left: -7px;\n}\n.messages[_ngcontent-%COMP%]   .message.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;\n  margin-left: 7px;\n  animation-delay: 0.3s;\n}\n.messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .messages-content[_ngcontent-%COMP%] {\n  display: flex; \n\n  flex-direction: column; \n\n}\n\n\n\n\n\n.message-box[_ngcontent-%COMP%] {\n  flex: 0 1 40px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n  position: relative;\n  height: 70px;\n  display: flex;\n  gap: 10px;\n}\n.message-box[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50px;\n  border: none;\n  outline: none !important;\n  resize: none;\n  color: #444444;\n  font-size: 14px;\n  height: 100%;\n  margin: 0;\n  display: flex;\n  padding: 15px 0px 0px 20px;\n  width: 100%;\n}\n.message-box[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus:-webkit-placeholder {\n  color: transparent;\n}\n.message-box[_ngcontent-%COMP%]   .message-submit[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #fff;\n  border: none;\n  background-color: #248a52;\n  font-size: 14px;\n  text-transform: uppercase;\n  line-height: 1;\n  padding: 0px 20px;\n  border-radius: 10px;\n  outline: none !important;\n  transition: background 0.2s ease;\n}\n.message-box[_ngcontent-%COMP%]   .message-submit[_ngcontent-%COMP%]:hover {\n  background: #1d7745;\n}\n\n\n\n\n\n.mCSB_scrollTools[_ngcontent-%COMP%] {\n  margin: 1px -3px 1px 0;\n  opacity: 0;\n}\n\n.mCSB_inside[_ngcontent-%COMP%]    > .mCSB_container[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  padding: 0 10px;\n}\n\n.mCSB_scrollTools[_ngcontent-%COMP%]   .mCSB_dragger[_ngcontent-%COMP%]   .mCSB_dragger_bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_bounce {\n  0% {\n    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n@keyframes _ngcontent-%COMP%_ball {\n  from {\n    transform: translateY(0) scaleY(0.8);\n  }\n  to {\n    transform: translateY(-10px);\n  }\n}\n.variable-binding[_ngcontent-%COMP%], .variable-textarea[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.variable-binding[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}"]
    });
  }
  return AiComponent;
})();

/***/ }),

/***/ 13684:
/*!*******************************************************!*\
  !*** ./src/app/user/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/skeleton */ 14227);








function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r0.goals == null ? null : ctx_r0.goals.goalCount) || "0", " ");
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-skeleton", 13);
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Active : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Deleted : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (ctx_r2.goals == null ? null : ctx_r2.goals.goalCount) || 0, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (ctx_r2.goals == null ? null : ctx_r2.goals.goalDeletedCount) || 0, " ");
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-skeleton", 17);
  }
}
const _c0 = () => ({
  width: "2.5rem",
  height: "2.5rem"
});
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(goalService, obj, authService) {
      this.goalService = goalService;
      this.obj = obj;
      this.authService = authService;
      this.getDashboardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
      this.userId = this.authService.getTokenUserID();
      this.getAllGoals();
      this.getAllObjectives();
      this.getObjectiveViewPieChart();
    }
    ngOnDestroy() {
      this.getDashboardSubscription.unsubscribe();
    }
    getAllGoals() {
      this.goalService.fetch('get', 'goals', `getGoalsForUserDashboard/${this.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getDashboardSubscription)).subscribe(data => {
        this.goals = data.data[0];
      });
    }
    getAllObjectives() {
      this.obj.fetch('get', 'objectives', `getAllObjectivesForDashboard/${this.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getDashboardSubscription)).subscribe(data => {
        this.objectivesData = data.data[0];
        this.initChartsDoughnut({
          complete: data.data[0].objectiveCompleted,
          uncomplete: data.data[0].objectiveUncompleted
        });
      });
    }
    getObjectiveViewPieChart() {
      this.goalService.fetch('get', 'goals', `getObjectivesViewTable/${this.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.getDashboardSubscription)).subscribe(data => {
        this.initBarCharts(data?.data || []);
      });
    }
    initChartsDoughnut(data) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.objectiveDoughnutData = {
        labels: ['Complete', 'In Progress'],
        datasets: [{
          data: [data.complete, data.uncomplete],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }]
      };
      this.options = {
        cutout: '65%',
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };
    }
    initBarCharts(goal) {
      let objectivesData = goal?.map(e => e.objectives);
      let objectivesDataTrue = goal?.map(e => e.objectives.filter(x => x.deleted == false));
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.barData = {
        labels: [...goal?.map(e => e.goals)],
        datasets: [{
          label: 'Goals',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: [...goal?.map(e => 1)]
        }, {
          label: 'Objectives',
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          data: [...objectivesDataTrue.map(e => e.length ? e.length : 0)]
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
    }
    static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_1__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 26,
      vars: 8,
      consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3", "cursor-pointer"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], ["class", "text-900 font-medium text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-compass", "text-purple-500", "text-xl"], [1, "col-12", "xl:col-6"], [1, "card"], ["type", "bar", 3, "data", "options"], ["type", "doughnut", 3, "data", "options"], [1, "text-900", "font-medium", "text-xl"], ["shape", "circle", "size", "3rem", "styleClass", "mr-2"], [1, "text-500"], [1, "text-green-500", "font-medium"], [1, "text-red-500", "font-medium"], ["width", "12rem", "height", "2rem"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_Conditional_7_Template, 2, 1, "div", 5)(8, DashboardComponent_Conditional_8_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DashboardComponent_Conditional_11_Template, 8, 2)(12, DashboardComponent_Conditional_12_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 1)(14, "div", 1)(15, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "p-chart", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Objective Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p-chart", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](7, ctx.goals ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](11, ctx.goals ? 11 : 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.barData)("options", ctx.barOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.objectiveDoughnutData)("options", ctx.options);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, primeng_chart__WEBPACK_IMPORTED_MODULE_7__.UIChart, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.Skeleton]
    });
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 61400:
/*!***********************************************************!*\
  !*** ./src/app/user/goals/calendar/calendar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ 2495);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 16111);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ 95932);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 21413);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ 15594);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);













function CalendarComponent_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", i_r3 + 1, " - ", event_r2.title, "");
  }
}
function CalendarComponent_full_calendar_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const arg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", arg_r6.event.image_url, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", arg_r6.event.extendedProps.user, " - ", arg_r6.event.title, "");
  }
}
function CalendarComponent_full_calendar_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "full-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarComponent_full_calendar_15_ng_template_1_Template, 4, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.calendarOptions());
  }
}
let CalendarComponent = /*#__PURE__*/(() => {
  class CalendarComponent {
    constructor(changeDetector, obj, auth) {
      this.changeDetector = changeDetector;
      this.obj = obj;
      this.auth = auth;
      this.COLORS = ['#f06292', '#ba68c8', '#4dd0e1', '#aed581', '#ffca28'];
      this.calendarVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(true);
      this.objectiveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.calendarOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)({
        plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"]],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        weekends: true,
        editable: false,
        selectable: false,
        selectMirror: true,
        dayMaxEvents: false,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this)
      });
      this.currentEvents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
      this.loading = true;
    }
    ngOnInit() {
      this.userId = this.auth.getTokenUserID();
      this.getAllobjectivesGoalsUsers();
    }
    getAllobjectivesGoalsUsers() {
      this.loading = true;
      this.obj.fetch('get', 'objectives', `getObjectiveForCalendar/${this.userId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
        const events = this.transformEvents(data.data);
        this.updateCalendarEvents(events);
        this.loading = false;
      });
    }
    transformEvents(data) {
      //   this.color = item.backgroundColor || this.COLORS[Math.floor(Math.random() * this.COLORS.length)]
      return data.map(item => ({
        id: item.id,
        user: item.users.username,
        image_url: this.auth.domain + item.users.profile_pic,
        title: item.goals.goals,
        start: item.timetable[0],
        end: item.timetable[1],
        backgroundColor: item.backgroundColor || this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
        borderColor: item.backgroundColor || this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
        allDay: true
      }));
    }
    updateCalendarEvents(events) {
      this.calendarOptions.update(options => ({
        ...options,
        events: events
      }));
    }
    ngOnDestroy() {
      this.objectiveSubscription.unsubscribe();
    }
    handleCalendarToggle() {
      this.calendarVisible.update(bool => !bool);
    }
    handleWeekendsToggle() {
      this.calendarOptions.update(options => ({
        ...options,
        weekends: !options.weekends
      }));
    }
    handleDateSelect(selectInfo) {
      // const title = prompt('Please enter a new title for your event');
      // const calendarApi = selectInfo.view.calendar;
      // calendarApi.unselect(); // clear date selection
      // if (title) {
      //     calendarApi.addEvent({
      //         id: createEventId(),
      //         title,
      //         start: selectInfo.startStr,
      //         end: selectInfo.endStr,
      //         allDay: selectInfo.allDay,
      //     });
      // }
    }
    handleEventClick(clickInfo) {
      // if (
      //     confirm(
      //         `Are you sure you want to delete the event '${clickInfo.event.title}'`
      //     )
      // ) {
      //     clickInfo.event.remove();
      // }
    }
    handleEvents(events) {
      this.currentEvents.set(events);
      this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
    }
    static #_ = this.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_0__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 3,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], [1, "demo-app"], [1, "demo-app-sidebar"], [1, "demo-app-sidebar-section"], [4, "ngFor", "ngForOf"], [1, "demo-app-main"], [3, "options", 4, "ngIf"], [3, "options"], ["eventContent", ""]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "calendar works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CalendarComponent_ul_13_Template, 3, 2, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CalendarComponent_full_calendar_15_Template, 3, 1, "full-calendar", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("All Events (", ctx.currentEvents().length, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentEvents());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.calendarVisible());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarComponent],
      styles: ["h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.5em;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n  padding: 0;\n}\n\nb[_ngcontent-%COMP%] {\n  \n\n  margin-right: 3px;\n}\n\n.demo-app[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100%;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n.demo-app-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  line-height: 1.5;\n  background: #eaf9ff;\n  border-right: 1px solid #d3e2e8;\n}\n\n.demo-app-sidebar-section[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\n.demo-app-main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 3em;\n}\n\n.fc[_ngcontent-%COMP%] {\n  \n\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.demo-app[_ngcontent-%COMP%] {\n  flex-direction: column-reverse !important;\n}\n\n.demo-app-sidebar[_ngcontent-%COMP%] {\n  width: 100% !important;\n}"]
    });
  }
  return CalendarComponent;
})();

/***/ }),

/***/ 66309:
/*!*************************************************************!*\
  !*** ./src/app/user/goals/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalDashboardComponent: () => (/* binding */ GoalDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressbar */ 66651);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/card */ 94532);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/skeleton */ 14227);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/dataFilter */ 42162);
/* harmony import */ var _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utlis/general.pipes */ 6701);
















function GoalDashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-chart", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.donutData)("options", ctx_r0.donutOptions);
  }
}
function GoalDashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-skeleton", 17);
  }
}
function GoalDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
  }
}
function GoalDashboardComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Goal Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Total Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Completed Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Incomplete Objectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function GoalDashboardComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "completedObjectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "incompleteObjectives");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r6 = ctx.$implicit;
    const expanded_r7 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", goal_r6)("icon", expanded_r7 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](goal_r6.goals);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](7, 7, goal_r6.budget, "PHP", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((goal_r6.objectivesDetails == null ? null : goal_r6.objectivesDetails.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 11, goal_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 13, goal_r6));
  }
}
function GoalDashboardComponent_ng_template_39_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
const _c0 = (a0, a1) => ({
  "pi-check-circle text-green-500": a0,
  "pi-times-circle text-red-500": a1
});
function GoalDashboardComponent_ng_template_39_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const objective_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", objective_r11.functional_objective, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](5, 3, objective_r11.budget, "PHP", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](7, _c0, objective_r11.complete, !objective_r11.complete));
  }
}
function GoalDashboardComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 20)(2, "div", 21)(3, "p-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GoalDashboardComponent_ng_template_39_ng_template_4_Template, 7, 0, "ng-template", 14)(5, GoalDashboardComponent_ng_template_39_ng_template_5_Template, 8, 10, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const goal_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", goal_r8.objectivesDetails);
  }
}
let GoalDashboardComponent = /*#__PURE__*/(() => {
  class GoalDashboardComponent {
    constructor(goal, goalService, obj, auth, productService) {
      this.goal = goal;
      this.goalService = goalService;
      this.obj = obj;
      this.auth = auth;
      this.productService = productService;
      this.dashboardSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.goals = [];
      this.products = [];
      this.loading = true;
      this.isExpanded = false;
      this.expandedRows = {};
      this.USERID = this.auth.getTokenUserID() || localStorage.getItem('id');
      this.getGoals();
      this.getObjectiveViewPieChart();
      this.getAllObjectives();
    }
    ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
      this.obj.fetch('get', 'objectives', `getAllObjectivesForDashboard/${this.USERID}`).subscribe({
        next: data => {
          this.totalObjectives = data.data[0].objectivesCount;
          this.completedObjectives = data.data[0].objectiveCompleted;
          this.completedObjectives = data.data[0].objectiveUncompleted;
          // this.createChart(); // Call to create the chart after data is fetched
        },

        error: error => {
          console.error('Error fetching objectives:', error);
          // Handle the error appropriately
        }
      });

      this.getAllObjectivesForTable();
    }
    getCompletedObjectives(goal) {
      return goal.objectivesDetails?.filter(o => o.complete && !o.deleted).length || 0;
    }
    getIncompleteObjectives(goal) {
      return goal.objectivesDetails?.filter(o => !o.complete && !o.deleted).length || 0;
    }
    // createChart() {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     this.barData = {
    //         labels: ['Goals'],
    //         datasets: [
    //             {
    //                 label: 'Goals',
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--primary-500'),
    //                 data: [this.goalCount],
    //             },
    //             {
    //                 label: 'Total Objectives',
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--primary-400'),
    //                 data: [this.totalObjectives],
    //             },
    //             {
    //                 label: 'Completed Objectives',
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--green-500'),
    //                 data: [this.completedObjectives],
    //             },
    //             {
    //                 label: 'Incomplete Objectives',
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--orange-500'),
    //                 data: [this.completedObjectives],
    //             },
    //         ],
    //     };
    //     this.barOptions = {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: documentStyle.getPropertyValue('--text-color'),
    //                 },
    //             },
    //         },
    //         scales: {
    //             x: {
    //                 stacked: true,
    //                 ticks: {
    //                     color: documentStyle.getPropertyValue(
    //                         '--text-color-secondary'
    //                     ),
    //                 },
    //                 grid: {
    //                     color: documentStyle.getPropertyValue('--surface-d'),
    //                 },
    //             },
    //             y: {
    //                 stacked: true,
    //                 ticks: {
    //                     color: documentStyle.getPropertyValue(
    //                         '--text-color-secondary'
    //                     ),
    //                 },
    //                 grid: {
    //                     color: documentStyle.getPropertyValue('--surface-d'),
    //                 },
    //             },
    //         },
    //     };
    //     const ctx = document.getElementById('myChart') as HTMLCanvasElement; // Replace with your canvas element's ID
    //     this.myChart = new Chart(ctx, {
    //         type: 'bar',
    //         data: this.barData,
    //         options: this.barOptions,
    //     });
    // }
    getGoals() {
      this.goal.fetch('get', 'goals', `getGoalsForDashboard/${this.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.goalForTables = data?.data[0]?.totalBudget[0]?.totalAmount || 0;
        this.goalCount = data?.data[0]?.goalCount;
        this.loading = false;
      });
    }
    getAllObjectives() {
      this.obj.fetch('get', 'objectives', `getAllObjectivesBudget/${this.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.objectiveBudget = data.data;
      });
    }
    getAllObjectivesForTable() {
      this.obj.fetch('get', 'goals', `getAllObjectivesWithObjectives/${this.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.goals = data.goals;
      });
    }
    getObjectiveViewPieChart() {
      this.goalService.fetch('get', 'goals', `getObjectivesViewTable/${this.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.dashboardSubscription)).subscribe(data => {
        this.initBarCharts(data?.data || []);
      });
    }
    ngOnDestroy() {
      this.dashboardSubscription.unsubscribe();
    }
    initBarCharts(goal) {
      let objectivesData = goal?.map(e => e.objectives);
      let objectivesDataTrue = goal?.map(e => e.objectives.filter(x => x.deleted == false));
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.donutData = {
        labels: [...goal?.map(e => e.goals)],
        datasets: [{
          label: 'Goals',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: [...goal?.map(e => 1)]
        }, {
          label: 'Objectives',
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          data: [...objectivesDataTrue.map(e => e.length ? e.length : 0)]
        }]
      };
      this.donutOptions = {
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
    }
    expandAll() {
      if (!this.isExpanded) {
        this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');
      } else {
        this.expandedRows = {};
      }
      this.isExpanded = !this.isExpanded;
    }
    static #_ = this.ɵfac = function GoalDashboardComponent_Factory(t) {
      return new (t || GoalDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_0__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_1__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: GoalDashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 40,
      vars: 16,
      consts: [[1, "grid"], [1, "col-12", "xl:col-6"], [1, "card"], ["type", "bar", 3, "data", "options"], ["header", "Goal Summary"], [1, "flex", "flex-column", "align-items-center"], [3, "value", "showValue"], [1, "mt-3", "text-center", "text-6xl", 2, "font-family", "'Figtree', 'Roboto', 'Noto Sans Hebrew',\n                            'Noto Kufi Arabic', 'Noto Sans JP', sans-serif"], [1, "text-2xl", "text-color-secondary"], [1, "mt-3", "text-xl"], ["header", "Objective Summary Budget"], [4, "ngIf"], [1, "col-12"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["width", "18rem", "height", "18rem", 1, "my-auto"], [2, "width", "3rem"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], ["colspan", "7"], [1, "p-3"], [3, "value"], [1, "pi", 3, "ngClass"]],
      template: function GoalDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GoalDashboardComponent_Conditional_7_Template, 1, 2, "p-chart", 3)(8, GoalDashboardComponent_Conditional_8_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 1)(10, "p-card", 4)(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "p-progressBar", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Total Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 1)(24, "p-card", 10)(25, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, GoalDashboardComponent_div_26_Template, 1, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Total Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 12)(33, "div", 2)(34, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Goals & Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p-table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, GoalDashboardComponent_ng_template_37_Template, 12, 0, "ng-template", 14)(38, GoalDashboardComponent_ng_template_38_Template, 16, 15, "ng-template", 15)(39, GoalDashboardComponent_ng_template_39_Template, 6, 1, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](7, ctx.donutData ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.objectiveBudget / ctx.goalForTables * 100)("showValue", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 10, ctx.goalForTables), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.goalCount, " Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Remaining Budget: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 12, ctx.goalForTables - ctx.objectiveBudget), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 14, ctx.objectiveBudget), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.goals)("expandedRowKeys", ctx.expandedRows);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_chart__WEBPACK_IMPORTED_MODULE_10__.UIChart, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_11__.RowToggler, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__.ProgressBar, primeng_card__WEBPACK_IMPORTED_MODULE_15__.Card, primeng_skeleton__WEBPACK_IMPORTED_MODULE_16__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_4__.PesoPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_5__.CompletedObjectivesPipe, _utlis_general_pipes__WEBPACK_IMPORTED_MODULE_5__.IncompleteObjectivesPipe]
    });
  }
  return GoalDashboardComponent;
})();

/***/ }),

/***/ 95409:
/*!***********************************************!*\
  !*** ./src/app/user/goals/goals.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoalsComponent: () => (/* binding */ GoalsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 15861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 59773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utlis/file-utils */ 32844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/goal.service */ 71187);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/demo/service/objective.service */ 91931);
/* harmony import */ var src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/demo/service/department.service */ 49907);
/* harmony import */ var src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/demo/service/file.service */ 76116);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/demo/service/campus.service */ 89305);
/* harmony import */ var src_app_demo_service_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/demo/service/pdf.service */ 20705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 78743);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputnumber */ 75167);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/progressbar */ 66651);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/chip */ 42169);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/overlaypanel */ 88454);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/card */ 94532);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/tag */ 6263);
/* harmony import */ var _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/dataFilter */ 42162);
































const _c0 = ["filter"];
function GoalsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GoalsComponent_ng_template_10_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Goals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "p-columnFilter", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 72)(6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Budget Utilization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-columnFilter", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 72)(10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "p-columnFilter", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 72)(14, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Campus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "p-columnFilter", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 72)(18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Created By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "p-columnFilter", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th", 72)(22, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "p-columnFilter", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "th", 72)(26, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Progress Completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 72)(29, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 91)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-tag", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 4, obj_r37.clients.substring(0, 12) + "...."), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 6, obj_r37.budget), " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("severity", obj_r37.complete ? "success" : "warning")("value", obj_r37.complete ? "Completed" : "In Progress");
  }
}
function GoalsComponent_ng_template_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Project Yet : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c1 = () => ({
  width: "400px"
});
function GoalsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const goal_r33 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.getObjectives(goal_r33.id, goal_r33._id, goal_r33.goals, goal_r33.remainingBudget, goal_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td")(6, "p-chip", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_p_chip_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r34.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p-overlayPanel", null, 82)(9, "p-card", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, GoalsComponent_ng_template_12_div_12_Template, 10, 8, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, GoalsComponent_ng_template_12_div_14_Template, 4, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td")(28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "p-progressBar", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "td")(31, "div", 87)(32, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_i_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const goal_r33 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.updateGoal(goal_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_12_Template_i_click_33_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const goal_r33 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.deleteGoalDialog($event, goal_r33._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "p-confirmPopup", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const goal_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 14, goal_r33.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](29, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 16, goal_r33.budget))("subheader", "Budget Utilization:  " + (goal_r33.remainingPercentage || 0) + "%" + " | " + " Remaining: " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 18, goal_r33.remainingBudget || "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", goal_r33.objectivesDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !goal_r33.objectivesDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 20, goal_r33.department), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 22, goal_r33.campus), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 24, goal_r33.users.username), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 26, goal_r33.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("color", "#1da750")("value", goal_r33.CompletePercentage)("showValue", true);
  }
}
function GoalsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Goals found Users.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Loading Goals data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_72_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](71);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p-button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_72_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r46.addSubGoal(ctx_r46.objectiveData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p-button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_72_Template_p_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.printTableNeeds((ctx_r47.subOnjectiveHeaderData == null ? null : ctx_r47.subOnjectiveHeaderData.department) || ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GoalsComponent_ng_template_72_Template_input_input_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](71);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.onGlobalFilter(_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("outlined", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("outlined", true);
  }
}
function GoalsComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Functional Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "p-columnFilter", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 72)(6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Performance Indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-columnFilter", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 72)(10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "p-columnFilter", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th", 72)(14, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Formula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "p-columnFilter", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th", 72)(18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "p-columnFilter", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th", 72)(22, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Responsible Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "p-columnFilter", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "th", 72)(26, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Clients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "p-columnFilter", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th", 72)(30, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Timetable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "p-columnFilter", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "th", 106)(34, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Frequency Monitoring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "p-columnFilter", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "th", 72)(38, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " Data Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "p-columnFilter", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "th", 72)(42, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "p-columnFilter", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "th", 72)(46, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "p-columnFilter", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "th", 72)(50, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, " Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "p-columnFilter", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "th", 110)(54, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "p-columnFilter", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "th", 112)(58, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_74_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_74_Conditional_45_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55);
      const objectiveData_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r53.viewFilesHistory(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GoalsComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "td")(39, "p-button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("loadingChange", function GoalsComponent_ng_template_74_Template_p_button_loadingChange_39_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const rowIndex_r50 = restoredCtx.rowIndex;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r56.onclickCompletionButton[rowIndex_r50] = $event);
    })("click", function GoalsComponent_ng_template_74_Template_p_button_click_39_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const objectiveData_r49 = restoredCtx.$implicit;
      const rowIndex_r50 = restoredCtx.rowIndex;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.updateObjectiveComplete($event, objectiveData_r49, rowIndex_r50, objectiveData_r49.complete));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "p-confirmPopup", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "td")(43, "div", 116)(44, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_74_Template_i_click_44_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r59.viewFiles(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, GoalsComponent_ng_template_74_Conditional_45_Template, 2, 0, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "td")(47, "div", 87)(48, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_74_Template_i_click_48_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.updateSubGoal(objectiveData_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_74_Template_i_click_49_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57);
      const objectiveData_r49 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.deleteSubGoal(objectiveData_r49.id, objectiveData_r49.goalId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "p-confirmPopup", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const objectiveData_r49 = ctx.$implicit;
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 23, objectiveData_r49.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 25, objectiveData_r49.performance_indicator), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 27, objectiveData_r49.target), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 29, objectiveData_r49.formula), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 31, objectiveData_r49.programs), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 33, objectiveData_r49.responsible_persons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 35, objectiveData_r49.clients), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](24, 37, objectiveData_r49 == null ? null : objectiveData_r49.timetable[0], "shortDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](25, 40, objectiveData_r49 == null ? null : objectiveData_r49.timetable[1], "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 43, objectiveData_r49.frequency_monitoring), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 45, objectiveData_r49.data_source), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 47, objectiveData_r49.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](37, 49, objectiveData_r49.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", true)("raised", true)("severity", objectiveData_r49.complete ? "success" : "warning")("icon", objectiveData_r49.complete ? "pi pi-check" : "pi pi-times")("label", objectiveData_r49.complete ? "Yes" : "No")("disabled", ctx_r9.role === "user" && objectiveData_r49.complete ? true : false)("pTooltip", ctx_r9.role === "user" ? "Only Admin can enable this button" : "")("tooltipPosition", ctx_r9.top)("loading", ctx_r9.onclickCompletionButton[rowIndex_r50]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](45, ctx_r9.role === "admin" ? 45 : -1);
  }
}
function GoalsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Objectives found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Loading Objectives data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66)(1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_134_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.clear(_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 122, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GoalsComponent_ng_template_134_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.onGlobalFilter(_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r13.blockedPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r13.blockedPanel);
  }
}
function GoalsComponent_ng_template_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "th", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 112)(8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_136_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 127);
  }
}
function GoalsComponent_ng_template_136_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_136_Conditional_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71);
      const AllObjectivesFile_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r69.deleteSubGoalFile(AllObjectivesFile_r66.id, AllObjectivesFile_r66.source));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function GoalsComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td")(8, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, GoalsComponent_ng_template_136_Conditional_9_Template, 1, 0, "i", 125)(10, GoalsComponent_ng_template_136_Conditional_10_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "p-confirmPopup", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesFile_r66 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r15.auth.domain + "/images/files/" + AllObjectivesFile_r66.source, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r15.getIcon(AllObjectivesFile_r66.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 4, AllObjectivesFile_r66.date_added, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](9, ctx_r15.blockedPanel ? 9 : 10);
  }
}
function GoalsComponent_ng_template_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_139_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r72.hideViewFileDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", true);
  }
}
function GoalsComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_150_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.clear(_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function GoalsComponent_ng_template_150_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](133);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r77.onGlobalFilter(_r12, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "th", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 72)(8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Date Deleted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 72)(11, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function GoalsComponent_ng_template_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesHistoryFiles_r78 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("href", ctx_r22.auth.domain + "/images/files/" + AllObjectivesHistoryFiles_r78.source, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r22.getIcon(AllObjectivesHistoryFiles_r78.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 9, AllObjectivesHistoryFiles_r78.date_added, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r78.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](10, 12, AllObjectivesHistoryFiles_r78.updatedAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r78.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](AllObjectivesHistoryFiles_r78.status ? "Active" : "Deleted");
  }
}
function GoalsComponent_ng_template_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function GoalsComponent_ng_template_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_ng_template_155_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r79.hideViewFileHistoryDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", true);
  }
}
function GoalsComponent_tbody_197_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const obj_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 12, obj_r82.functional_objective));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 14, obj_r82.performance_indicator));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 16, obj_r82.target));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 18, obj_r82.formula));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](15, 20, obj_r82.programs));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 22, obj_r82.responsible_persons));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 24, obj_r82.clients));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](24, 26, obj_r82.timetable[0], "MMM d yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](25, 29, obj_r82.timetable[1], "MMM d yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 32, obj_r82.frequency_monitoring));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 34, obj_r82.data_source));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 36, obj_r82.budget));
  }
}
function GoalsComponent_tbody_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, GoalsComponent_tbody_197_tr_1_Template, 35, 38, "tr", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r28.objectiveDatas);
  }
}
const _c2 = () => ["goals", "budget", "department", "campus", "users.username", "createdAt", "options"];
const _c3 = () => ({
  width: "25rem"
});
const _c4 = () => ({
  width: "60rem"
});
const _c5 = () => ({
  "1199px": "75vw",
  "575px": "90vw"
});
const _c6 = () => ["", "functional_objective", "performance_indicator", "target", "formula", "programs", "department", "responsible_persons", "clients", "timetable", "frequency_monitoring", "data_source", "budget", "createdAt", "Files", "options"];
const _c7 = () => ({
  "min-width": "50rem"
});
const _c8 = () => ({
  width: "50rem"
});
const _c9 = () => ["name", "code", "options"];
const _c10 = a0 => ({
  hidden: a0
});
let GoalsComponent = /*#__PURE__*/(() => {
  class GoalsComponent {
    constructor(messageService, formBuilder, confirmationService, goal, auth, obj, dept, fileService, fileUpload, camp, changeDetectorRef, pdfService) {
      this.messageService = messageService;
      this.formBuilder = formBuilder;
      this.confirmationService = confirmationService;
      this.goal = goal;
      this.auth = auth;
      this.obj = obj;
      this.dept = dept;
      this.fileService = fileService;
      this.fileUpload = fileUpload;
      this.camp = camp;
      this.changeDetectorRef = changeDetectorRef;
      this.pdfService = pdfService;
      this.getGoalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
      //table data
      this.goals = [];
      this.Alldepts = [];
      this.AllObjectivesFiles = [];
      this.AllObjectivesHistoryFiles = [];
      this.ViewBudget = [];
      this.deptDropdownCampusValue = [];
      this.loading = true;
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
      this.valSwitch = false;
      // progress bar
      this.value = 0;
      this.goalDataRemainingBudget = 0;
      this.goalBudget = 0;
      // set initial value
      this.onclickCompletionButton = [];
      this.toPrint = false;
      this.isPrintableVisible = false;
      this.printingHead = false;
      this.nameValue = ''; // Declare variables to hold values
      this.officeValue = '';
      this.printingOfficeName = '';
      this.USERID = this.auth.getTokenUserID();
      this.role = this.auth.getUserRole();
      this.userCampus = this.auth.getUserCampus();
      this.userDepartment = this.auth.getUserDepartment();
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
      this.formGroupDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        selectedDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl()
      });
      this.formGroupDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        selectDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl()
      });
      this.formGroupCampus = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        selectedCampus: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl()
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
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
      });
    }
    createaddFileForm() {
      this.addFileForm = this.formBuilder.group({
        files: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
      });
    }
    createAddObjectiveGoalform() {
      this.addObjectiveGoalform = this.formBuilder.group({
        // department: ['', [Validators.required]],
        userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        goalId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        functional_objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        performance_indicator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        formula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        programs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        responsible_persons: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        clients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        timetable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        data_source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
      });
    }
    createUpdateGoalForm() {
      this.updateGoalform = this.formBuilder.group({
        goals: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        campus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
      });
    }
    getAllCampuses() {
      this.camp.fetch('get', 'campus', 'getAllCampus').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        this.deptDropdownCampusValue = data.data[0];
      });
    }
    getAllObjectivesWithObjectives() {
      this.goal.fetch('get', 'goals', 'getAllObjectivesWithObjectives/' + this.USERID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        // this.ObjectivesGoals = data.goals;
        this.goals = data.goals;
        this.loading = false;
      });
    }
    getAllDept() {
      this.dept.getRoute('get', 'department', 'getAllDepartmentDropdown').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        this.deptDropdownValue = data.data[0];
      });
    }
    getObjectives(id, objectId = '', subHeader = '', goalDataRemainingBudget = 0, goalData = []) {
      var _this = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //passed data needed for the subgoal table or adding table modal
        _this.subObjectiveGoalID = id;
        _this.goal_ObjectId = objectId || goalData._id || '';
        //open the objective modal
        _this.subGoalObjective = true;
        //remaining budget needed in adding objective input
        //headers in objective table
        _this.subOnjectiveHeaderData = goalData;
        _this.goalDataRemainingBudget = goalDataRemainingBudget || _this.subOnjectiveHeaderData?.remainingBudget;
        _this.goalBudget = _this.subOnjectiveHeaderData?.budget;
        _this.subObjectiveHeaders = _this.customTitleCase(subHeader || _this.subObjectiveHeaders || '');
        //get all goals with subobjective
        if (id) {
          _this.loading = true;
          _this.obj.fetch('get', 'objectives', `getAllByIdObjectives/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this.getGoalSubscription)).subscribe(data => {
            _this.objectiveDatas = data.Objectives;
            //initialize completion button
            for (let i = 0; i < _this.objectiveDatas.length.length; i++) {
              _this.onclickCompletionButton[i] = false;
            }
            _this.loading = false;
          });
        }
      })();
    }
    getObjectivesReload(id) {
      var _this2 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //get all goals with subobjective
        if (id) {
          _this2.loading = true;
          _this2.obj.fetch('get', 'objectives', `getAllByIdObjectives/${id}/${_this2.USERID}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this2.getGoalSubscription)).subscribe(data => {
            _this2.objectiveDatas = data.Objectives;
            let subBudget = data.Objectives.reduce((acc, e) => {
              return acc + e.budget;
            }, 0);
            _this2.goalDataRemainingBudget = _this2.goalBudget - subBudget;
            _this2.changeDetectorRef.detectChanges();
            //initialize completion button
            for (let i = 0; i < _this2.objectiveDatas.length.length; i++) {
              _this2.onclickCompletionButton[i] = false;
            }
            _this2.loading = false;
          });
        }
      })();
    }
    getAllFilesFromObjectiveLoad(id, objectiveID) {
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.loading = true;
        _this3.fileService.getAllFilesFromObjective(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this3.getGoalSubscription)).subscribe(data => {
          _this3.AllObjectivesFiles = data.data;
          _this3.loading = false;
        });
        return true;
      })();
    }
    getAllFilesHistoryFromObjectiveLoad(id, objectiveID) {
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.loading = true;
        _this4.fileService.getAllFilesHistoryFromObjectiveLoad(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(_this4.getGoalSubscription)).subscribe(data => {
          _this4.AllObjectivesHistoryFiles = data.data;
          _this4.loading = false;
        });
        return true;
      })();
    }
    addSubGoal(data) {
      this.addObjectiveGoalDialogCard = true;
    }
    addGoal() {
      this.addGoalDialogCard = true;
    }
    addFiles(objectiveData) {
      // alert(objectiveID);
      this.addObjectiveFileDialogCard = true;
      // alert(JSON.stringify(objectiveData));
    }

    addGoalDialogExec(form) {
      this.userID = this.USERID;
      let data = {
        goals: form.value.goals,
        budget: form.value.budget,
        campus: this.userCampus,
        department: this.userDepartment,
        createdBy: this.userID
      };
      this.goal.fetch('post', 'goals', 'addGoals', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        if (data.success) {
          this.getAllObjectivesWithObjectives();
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          this.addGoalDialogCard = false;
          this.addGoalform.reset();
        } else {
          this.messageService.add({
            severity: 'error  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    addSubObjectiveGoalDialogExec(e) {
      e.value.userId = this.USERID;
      e.value.goalId = this.subObjectiveGoalID;
      e.value.goal_Id = this.goal_ObjectId;
      e.value.frequency_monitoring = this.formGroupDropdown.value.selectedDropdown.name;
      e.value.createdBy = this.USERID;
      this.obj.fetch('post', 'objectives', 'addObjectives', e.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        if (data.success) {
          this.addObjectiveGoalDialogCard = false;
          //close the objective table
          // this.subGoalObjective = false;
          this.getAllObjectivesWithObjectives();
          this.getObjectivesReload(this.subObjectiveGoalID);
          this.messageService.add({
            severity: 'success  ',
            summary: 'Done',
            detail: data.message
          });
          //fix the error becomes null after adding new objective
          this.goal_ObjectId = data.data.goal_Id;
          // clear the data
          this.addObjectiveGoalform.reset();
          this.formGroupDropdown.reset();
          this.goalDataRemainingBudget = 0;
        } else {
          this.messageService.add({
            severity: 'warn  ',
            summary: 'Error',
            detail: data.message
          });
        }
      });
    }
    updateGoalDialogExec(form) {
      let data = {
        id: this.updateGoalID,
        goals: form.value.goals,
        budget: form.value.budget,
        department: this.userDepartment,
        campus: this.userCampus
      };
      this.goal.fetch('put', 'goals', 'updateGoals', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
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
    updateGoal(goal) {
      this.updateGoalDialogCard = true;
      this.updateGoalID = goal.id;
      this.formGroupDemo.setValue({
        selectDepartment: this.deptDropdownValue.find(dept => dept.name === goal.department)
      });
      this.formGroupCampus.setValue({
        selectedCampus: this.deptDropdownCampusValue.find(dept => dept.name === goal.campus)
      });
      this.updateGoalform = this.formBuilder.group({
        goals: [goal.goals || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        budget: [goal.budget || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
      });
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
        timetable: [new Date(data.timetable[0]), new Date(data.timetable[1])],
        frequency_monitoring: data.frequency_monitoring,
        data_source: data.data_source,
        budget: data.budget
      });
    }
    updateObjectiveComplete(event, data, index = 0, completeStatus) {
      var _this5 = this;
      this.onclickCompletionButton[index] = true;
      let goalIDs = data.goalId;
      if (completeStatus === true && this.role === 'user') {
        this.messageService.add({
          severity: 'error  ',
          summary: 'Nice Try!!!',
          detail: 'Only Admin can enable this..'
        });
        this.onclickCompletionButton[index] = false;
        return;
      }
      this.confirmationService.confirm({
        key: 'updateObjectiveComplete',
        target: event.target,
        message: `Marking Objective ${completeStatus ? 'as Incomplete' : ' as Complete? Will Lock Files only Admin can re enable'}`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          this.obj.fetch('put', 'objectives', 'updateobjectivecompletion', {
            id: data.id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
              if (results.success) {
                _this5.getAllObjectivesWithObjectives();
                // this.getObjectives(goalIDs);
                _this5.getObjectivesReload(goalIDs);
                _this5.messageService.add({
                  severity: 'success  ',
                  summary: 'Done',
                  detail: results.message,
                  life: 5000
                });
                // this saves the objectid instead of refetch by closing the dialog it will run hideview to refetch
                _this5.hideviewObjectiveFileDialogCardID = goalIDs;
                // this.hideviewObjectiveFileDialogCard(goalIDs);
              } else {
                _this5.messageService.add({
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
    updateSubObjectiveGoalDialogExec(form) {
      form.value.id = this.tobeUpdatedSubGoal;
      form.value.frequency_monitoring = this.formGroupDropdown.value.selectedDropdown.name;
      this.obj.fetch('put', 'objectives', 'updateObjectives', form.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        if (data.success) {
          //close the objective table
          this.addObjectiveGoalDialogCard = false;
          // this.subGoalObjective = false;
          this.getAllObjectivesWithObjectives();
          this.getObjectivesReload(this.subObjectiveGoalID);
          this.addObjectiveGoalDialogCard = false;
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
    deleteGoalDialog(event, _id) {
      this.confirmationService.confirm({
        key: 'deleteGoal',
        target: event.target || new EventTarget(),
        message: 'Stop! Deleting this goal will delete all objectives under it?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.goal.fetch('put', 'goals', 'deleteGoals', {
            _id: _id
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
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
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
            if (data.success) {
              this.getObjectives(goalId);
              this.loading = false;
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
    deleteSubGoalFile(id, source) {
      this.confirmationService.confirm({
        key: 'deleteSubGoalFile',
        target: event.target || new EventTarget(),
        message: 'Delete File',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.fileService.deleteFileObjective({
            id: id,
            source: source
          }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
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
      // alert(JSON.stringify(objectiveData));
      this.getAllFilesFromObjectiveLoad(this.USERID, objectiveData.id);
    }
    viewFilesHistory(objectiveData) {
      this.viewObjectiveFileHistoryDialogCard = true;
      this.getAllFilesHistoryFromObjectiveLoad(this.USERID, objectiveData.id);
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
      this.fileService.addMultipleFiles(this.USERID, this.objectiveIDforFile, this.uploadedFiles).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
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
    hidviewObjectRefetch(id) {
      this.obj.fetch('get', 'objectives', `getAllByIdObjectives/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.getGoalSubscription)).subscribe(data => {
        this.objectiveDatas = data.Objectives;
        // remove the data
        this.hideviewObjectiveFileDialogCardID = null;
        this.loading = false;
      });
    }
    hideViewObjectiveTable(id) {
      this.subGoalObjective = false;
      this.subObjectiveGoalID = null;
      this.objectiveDatas = [];
      //after they click the switch it and close the dialog will refetch
      if (id) {
        this.hidviewObjectRefetch(id);
      }
    }
    hideViewFileDialogCard() {
      // destroy the data needed on that dialog
      this.objectiveIDforFile = null;
      this.viewObjectiveFileDialogCard = false;
    }
    hideViewFileHistoryDialogCard() {
      this.viewObjectiveFileHistoryDialogCard = false;
    }
    // viewObjectiveFileHistoryDialogCard
    getIcon(name) {
      return (0,src_app_utlis_file_utils__WEBPACK_IMPORTED_MODULE_1__.getIcon)(name);
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
    printTableNeeds(header) {
      this.printingHead = true;
      this.printingOfficeName = header;
    }
    printTable(subOnjectiveHeaderData = '', name, office) {
      let imageSrc = this.auth.domain + '/images/logo.png';
      this.isPrintableVisible = true;
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
              -webkit-print-color-adjust: exact; /* Enable background graphics */
              print-color-adjust: exact; /* Enable background graphics */
            }
            @page {
              size: landscape; /* Set layout to landscape */
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
                grid-template-columns: repeat(3, 1fr);
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
                              <img src="${imageSrc}" alt="CHMSU Logo" />
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
                    <th colspan="5">${subOnjectiveHeaderData.toUpperCase() || this.printingOfficeName.toUpperCase()}</th>
                      <th colspan="5">QUALITY OBJECTIVES AND ACTION PLAN</th>
                      <th class="text-align-end">CY</th>
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
                            <div>${this.nameValue.toLocaleUpperCase()}</div>
                            <div>${this.officeValue.toLocaleUpperCase()}</div>
                          </div>
                          <div>
                            <div>Reviewed and verified by:</div>
                            <div>YRIKA MARIE R. DUSARAN, PhDTM</div>
                            <div>Director for Quality Management</div>
                          </div>
                          <div>
                            <div>Approved by:</div>
                            <div>ROSALINDA S. TUVILLA</div>
                            <div>Vice President for Administrator and Finance</div>
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
      win.document.close();
      this.isPrintableVisible = false;
      this.printingOfficeName = '';
      this.nameValue = '';
      this.officeValue = '';
    }
    static #_ = this.ɵfac = function GoalsComponent_Factory(t) {
      return new (t || GoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_2__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_4__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_department_service__WEBPACK_IMPORTED_MODULE_5__.DepartmentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_6__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__.FileUpload), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_campus_service__WEBPACK_IMPORTED_MODULE_7__.CampusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_demo_service_pdf_service__WEBPACK_IMPORTED_MODULE_8__.PdfService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: GoalsComponent,
      selectors: [["app-goals"]],
      viewQuery: function GoalsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 198,
      vars: 131,
      consts: [[3, "autoZIndex"], [1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["pButton", "", "icon", "pi pi-compass", "label", "Add Goal", 3, "click"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["header", "Add Goal", 3, "visible", "visibleChange"], [1, "p-fluid"], [1, "field", "col-10", "md:col-10"], [3, "formGroup"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "goals", "autocomplete", "off", "formControlName", "goals", "required", "", 1, "flex-auto", 3, "ngClass"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"], ["header", "Update Goal", 3, "visible", "visibleChange"], ["responsiveLayout", "stack", 3, "visible", "breakpoints", "maximizable", "visibleChange", "onHide"], [1, "col-12", "md:col-6", "p-6", "text-center", "md:text-left", "flex", "align-items-center", "surface-section", "text-800"], [1, "block", "text-6xl", "font-bold", "mb-1"], [1, "text-6xl", "text-primary", "font-bold", "mb-3"], [1, "mt-0", "mb-4", "text-700", "line-height-3"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt2", ""], ["styleClass", "addObjective", "position", "top", 3, "header", "visible", "breakpoints", "visibleChange", "onHide"], ["pInputText", "", "id", "functional_objective", "autocomplete", "off", "formControlName", "functional_objective", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "performance_indicator", "autocomplete", "off", "formControlName", "performance_indicator", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "target", "autocomplete", "off", "formControlName", "target", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "formula", "autocomplete", "off", "formControlName", "formula", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "programs", "autocomplete", "off", "formControlName", "programs", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "responsible_persons", "autocomplete", "off", "formControlName", "responsible_persons", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "clients", "autocomplete", "off", "formControlName", "clients", "required", "", 1, "flex-auto", 3, "ngClass"], ["formControlName", "timetable", "selectionMode", "range", 3, "readonlyInput"], ["htmlFor", "department"], ["formControlName", "selectedDropdown", "optionLabel", "name", "placeholder", "Select a Frequency", 3, "options"], ["pInputText", "", "id", "data_source", "autocomplete", "off", "formControlName", "data_source", "required", "", 1, "flex-auto", 3, "ngClass"], [3, "label", "click"], ["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], ["dt3", ""], ["pTemplate", "footer"], ["styleClass", "addObjective", "header", "Drag and Drop Files", "position", "top", 3, "visible", "breakpoints", "visibleChange"], ["name", "files", "customUpload", "true", "multiple", "true", "maxFileSize", "20000000", "formControlName", "files", "ngDefaultControl", "", 3, "files", "uploadHandler"], ["header", "Office Head", 3, "visible", "visibleChange"], [1, "p-text-secondary", "block", "mb-5"], [1, "flex", "align-items-center", "gap-3", "mb-3"], ["for", "username", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "name", "placeholder", "e.g Benrie Nufable, PHD. TM", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["nameInput", ""], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["for", "email", 1, "font-semibold", "w-6rem"], ["pInputText", "", "id", "office", "placeholder", "e.g MIS Head - DPO", "autocomplete", "off", 1, "flex-auto", 3, "ngModel", "ngModelChange"], ["officeInput", ""], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "onClick"], ["label", "Save", 3, "onClick"], ["id", "print", 3, "ngClass"], [4, "ngIf"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "goals", "display", "menu", "placeholder", "Search by Goals"], ["type", "text", "field", "budget", "display", "menu", "placeholder", "Search by Budget"], ["type", "text", "field", "department", "display", "menu", "placeholder", "Search by Department"], ["type", "text", "field", "campus", "display", "menu", "placeholder", "Search by Campus"], ["type", "text", "field", "createdBy", "display", "menu", "placeholder", "Search by Created By"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["pButton", "", "pRipple", "", "type", "button", "pTooltip", "Show/Add objectives", "tooltipPosition", "top", 1, "p-button-help", "p-button-text", 3, "click"], ["label", "View Budget", "icon", "pi pi-wallet ", "styleClass", "m-1 cursor-pointer bg-teal-200 ", 3, "click"], ["op", ""], [3, "header", "subheader"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "col"], [3, "color", "value", "showValue"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteGoal"], [1, "mb-1"], [1, "pi", "pi-money-bill", "bg-green-400"], [3, "severity", "value"], [1, "pi", "pi-wrench"], ["colspan", "8"], ["icon", "pi pi-plus", "severity", "success", "pTooltip", "Add Objectives", "tooltipPosition", "top", 3, "outlined", "click"], ["icon", "pi pi-file-pdf", "severity", "info", "pTooltip", "Print PDF", "tooltipPosition", "top", 3, "outlined", "click"], ["type", "text", "field", "functional_objective", "display", "menu", "placeholder", "Search by Functional Objective"], ["type", "text", "field", "performance_indicator", "display", "menu", "placeholder", "Search by Performance Indicator"], ["type", "text", "field", "target", "display", "menu", "placeholder", "Search by Target"], ["type", "text", "field", "formula", "display", "menu", "placeholder", "Search by Formula"], ["type", "text", "field", "programs", "display", "menu", "placeholder", "Search by Programs"], ["type", "text", "field", "responsible_persons", "display", "menu", "placeholder", "Search by Responsible Persons"], ["type", "text", "field", "clients", "display", "menu", "placeholder", "Search by Clients"], ["type", "text", "field", "timetable", "display", "menu", "placeholder", "Search by Timetable"], [2, "min-width", "4rem"], ["type", "text", "field", "frequency_monitoring", "display", "menu", "placeholder", "Search by Frequency Monitoring"], ["type", "text", "field", "data_source", "display", "menu", "placeholder", "Search by Data Source"], ["type", "text", "field", "complete", "display", "menu", "placeholder", "Search by Completion"], [2, "min-width", "6rem"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "Search by Files"], [2, "min-width", "9rem"], [3, "text", "raised", "severity", "icon", "label", "disabled", "pTooltip", "tooltipPosition", "loading", "loadingChange", "click"], ["key", "updateObjectiveComplete"], ["confirmPopupRef", ""], [1, "flex", "flex-row", "align-items-center"], ["pTooltip", "File List", "tooltipPosition", "top", 1, "pi", "pi-folder", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-folder-open", "cursor-pointer", 3, "click"], ["pTooltip", "File History", "tooltipPosition", "top", "class", "pi pi-cog text-2xl hover:text-4xl text-yellow-400 transition ease-in-out duration-200 hover:pi-cog cursor-pointer"], ["key", "deleteSubGoal"], ["pTooltip", "File History", "tooltipPosition", "top", 1, "pi", "pi-cog", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-cog", "cursor-pointer", 3, "click"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "disabled", "click"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "disabled", "input"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], ["class", "pi pi-trash text-xl", "style", "color: #868585"], ["key", "deleteSubGoalFile"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#868585"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"], [4, "ngFor", "ngForOf"]],
      template: function GoalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-toast", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Goals");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_button_click_7_listener() {
            return ctx.addGoal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p-table", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, GoalsComponent_ng_template_10_Template, 6, 0, "ng-template", 9)(11, GoalsComponent_ng_template_11_Template, 31, 0, "ng-template", 10)(12, GoalsComponent_ng_template_12_Template, 35, 30, "ng-template", 11)(13, GoalsComponent_ng_template_13_Template, 3, 0, "ng-template", 12)(14, GoalsComponent_ng_template_14_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "p-dialog", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_15_listener($event) {
            return ctx.addGoalDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 15)(17, "div", 16)(18, "form", 17)(19, "div", 18)(20, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Goal name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 18)(24, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "p-inputNumber", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 22)(28, "p-button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_28_listener() {
            return ctx.addGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_29_listener() {
            return ctx.addGoalDialogExec(ctx.addGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p-dialog", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_30_listener($event) {
            return ctx.updateGoalDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 15)(32, "div", 16)(33, "form", 17)(34, "div", 18)(35, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Goal name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 18)(39, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "p-inputNumber", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 22)(43, "p-button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_43_listener() {
            return ctx.updateGoalDialogCard = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "p-button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_44_listener() {
            return ctx.updateGoalDialogExec(ctx.updateGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "p-dialog", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_45_listener($event) {
            return ctx.subGoalObjective = $event;
          })("onHide", function GoalsComponent_Template_p_dialog_onHide_45_listener() {
            return ctx.hideViewObjectiveTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 1)(47, "div", 27)(48, "section")(49, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](51, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](57, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 27)(59, "section")(60, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](62, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](65, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](68, "peso");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 2)(70, "p-table", 31, 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, GoalsComponent_ng_template_72_Template, 8, 2, "ng-template", 9)(73, GoalsComponent_ng_template_73_Template, 60, 0, "ng-template", 10)(74, GoalsComponent_ng_template_74_Template, 51, 52, "ng-template", 11)(75, GoalsComponent_ng_template_75_Template, 3, 0, "ng-template", 12)(76, GoalsComponent_ng_template_76_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "p-dialog", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_77_listener($event) {
            return ctx.addObjectiveGoalDialogCard = $event;
          })("onHide", function GoalsComponent_Template_p_dialog_onHide_77_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 15)(79, "div", 16)(80, "form", 17)(81, "div", 18)(82, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Functional Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](84, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 18)(86, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Performance Indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 18)(90, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 18)(94, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](96, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 18)(98, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Programs");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 18)(102, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Responsible Persons");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](104, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 18)(106, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 18)(110, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "Timetable");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](112, "p-calendar", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 18)(114, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, "Frequency Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](117, "p-dropdown", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 18)(119, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "Means of Verification(Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "div", 18)(123, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, " budget ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](125, "p-inputNumber", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "div", 22)(127, "p-button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_127_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "p-button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function GoalsComponent_Template_p_button_click_128_listener() {
            return ctx.updateObjectiveGoalFlag ? ctx.updateSubObjectiveGoalDialogExec(ctx.addObjectiveGoalform) : ctx.addSubObjectiveGoalDialogExec(ctx.addObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "p-dialog", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_129_listener($event) {
            return ctx.viewObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 1)(131, "div", 2)(132, "p-table", 31, 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](134, GoalsComponent_ng_template_134_Template, 6, 2, "ng-template", 9)(135, GoalsComponent_ng_template_135_Template, 10, 0, "ng-template", 10)(136, GoalsComponent_ng_template_136_Template, 12, 7, "ng-template", 11)(137, GoalsComponent_ng_template_137_Template, 3, 0, "ng-template", 12)(138, GoalsComponent_ng_template_138_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](139, GoalsComponent_ng_template_139_Template, 1, 1, "ng-template", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "p-dialog", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_140_listener($event) {
            return ctx.addObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "div", 15)(142, "form", 17)(143, "p-fileUpload", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("uploadHandler", function GoalsComponent_Template_p_fileUpload_uploadHandler_143_listener($event) {
            return ctx.onUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, " \u00A0\u00A0\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "p-dialog", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_145_listener($event) {
            return ctx.viewObjectiveFileHistoryDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 1)(147, "div", 2)(148, "p-table", 31, 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](150, GoalsComponent_ng_template_150_Template, 6, 0, "ng-template", 9)(151, GoalsComponent_ng_template_151_Template, 13, 0, "ng-template", 10)(152, GoalsComponent_ng_template_152_Template, 14, 15, "ng-template", 11)(153, GoalsComponent_ng_template_153_Template, 3, 0, "ng-template", 12)(154, GoalsComponent_ng_template_154_Template, 3, 0, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](155, GoalsComponent_ng_template_155_Template, 1, 1, "ng-template", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "p-dialog", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleChange", function GoalsComponent_Template_p_dialog_visibleChange_156_listener($event) {
            return ctx.printingHead = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "Update your information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 53)(160, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "input", 55, 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function GoalsComponent_Template_input_ngModelChange_162_listener($event) {
            return ctx.nameValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "div", 57)(165, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "input", 59, 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function GoalsComponent_Template_input_ngModelChange_167_listener($event) {
            return ctx.officeValue = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "div", 61)(170, "p-button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function GoalsComponent_Template_p_button_onClick_170_listener() {
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "p-button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClick", function GoalsComponent_Template_p_button_onClick_171_listener() {
            ctx.printTable();
            return ctx.printingHead = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "table", 64)(173, "thead")(174, "tr")(175, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "Functional Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "Performance Indicators");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, "Programs, Projects or Activities");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Responsible Persons & Partners");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "Target Participants or Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "Timetable");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "Frequency of Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "Means of Verification (Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](196, "Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](197, GoalsComponent_tbody_197_Template, 2, 1, "tbody", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("autoZIndex", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.goals)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](109, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](110, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.addGoalDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.addGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addGoalform == null ? null : ctx.addGoalform.get("goals").touched) && (ctx.addGoalform == null ? null : ctx.addGoalform.controls["goals"].errors == null ? null : ctx.addGoalform.controls["goals"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](111, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.updateGoalDialogCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.updateGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.updateGoalform == null ? null : ctx.updateGoalform.get("goals").touched) && (ctx.updateGoalform == null ? null : ctx.updateGoalform.controls["goals"].errors == null ? null : ctx.updateGoalform.controls["goals"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](112, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.subGoalObjective)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](113, _c5))("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](51, 97, ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.users == null ? null : ctx.subOnjectiveHeaderData.users.username), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 99, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.campus) || "Campus"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](57, 101, (ctx.subOnjectiveHeaderData == null ? null : ctx.subOnjectiveHeaderData.department) || "Department"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](62, 103, ctx.subObjectiveHeaders), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](65, 105, ctx.goalBudget || 0), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Remaining: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](68, 107, ctx.goalDataRemainingBudget || "0"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.objectiveDatas)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](114, _c6))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](115, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](116, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("header", ctx.updateObjectiveGoalFlag ? "Update" : "Add" + " Objectives")("visible", ctx.addObjectiveGoalDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](117, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.addObjectiveGoalform);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("functional_objective").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors == null ? null : ctx.addObjectiveGoalform.controls["functional_objective"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("performance_indicator").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors == null ? null : ctx.addObjectiveGoalform.controls["performance_indicator"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("target").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["target"].errors == null ? null : ctx.addObjectiveGoalform.controls["target"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("formula").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors == null ? null : ctx.addObjectiveGoalform.controls["formula"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("programs").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors == null ? null : ctx.addObjectiveGoalform.controls["programs"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("responsible_persons").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors == null ? null : ctx.addObjectiveGoalform.controls["responsible_persons"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("clients").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["clients"].errors == null ? null : ctx.addObjectiveGoalform.controls["clients"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonlyInput", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.formGroupDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.dropdwonSelection);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.get("data_source").touched) && (ctx.addObjectiveGoalform == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors == null ? null : ctx.addObjectiveGoalform.controls["data_source"].errors.required) ? "ng-invalid ng-dirty" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showButtons", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx.updateObjectiveGoalFlag ? "Update" : "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](118, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("header", ctx.blockedPanel ? "Files Locked: Objective Marked Complete" : "File List")("visible", ctx.viewObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](119, _c5))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.AllObjectivesFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](120, _c9))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](121, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](122, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.addObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](123, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.addFileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("files", ctx.uploadedFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](124, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("header", "File HistoryList")("visible", ctx.viewObjectiveFileHistoryDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](125, _c5))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.AllObjectivesHistoryFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](126, _c9))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](127, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](128, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.printingHead);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.nameValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.officeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](129, _c10, !ctx.isPrintableVisible));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.objectiveDatas == null ? null : ctx.objectiveDatas.length) != 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_18__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_19__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_20__.Dialog, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_24__.InputNumber, primeng_toast__WEBPACK_IMPORTED_MODULE_25__.Toast, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_26__.ConfirmPopup, primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__.FileUpload, primeng_progressbar__WEBPACK_IMPORTED_MODULE_27__.ProgressBar, primeng_chip__WEBPACK_IMPORTED_MODULE_28__.Chip, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_29__.OverlayPanel, primeng_card__WEBPACK_IMPORTED_MODULE_30__.Card, primeng_tag__WEBPACK_IMPORTED_MODULE_31__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_9__.PesoPipe],
      styles: ["@charset \"UTF-8\";\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"]
    });
  }
  return GoalsComponent;
})();

/***/ }),

/***/ 87278:
/*!***************************************************************!*\
  !*** ./src/app/user/goals/objectives/objectives.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function ObjectivesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.clear(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_8_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.onGlobalFilter(_r0, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Goal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "p-columnFilter", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th", 44)(6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Goal Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "p-columnFilter", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 44)(10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Functional Objective ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "p-columnFilter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 44)(14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Performance Indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "p-columnFilter", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 44)(18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Target ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "p-columnFilter", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 44)(22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Formula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "p-columnFilter", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th", 44)(26, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Programs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "p-columnFilter", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 44)(30, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Responsible Persons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "p-columnFilter", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th", 44)(34, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Clients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "p-columnFilter", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "th", 44)(38, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " Timetable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "p-columnFilter", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 56)(42, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Frequency Monitoring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "p-columnFilter", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "th", 44)(46, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " Data Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "p-columnFilter", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "th", 44)(50, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "p-columnFilter", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "th", 44)(54, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "p-columnFilter", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 44)(58, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "p-columnFilter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th", 62)(62, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "p-columnFilter", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th", 64)(66, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_10_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_10_Conditional_51_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const objectiveData_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.viewFilesHistory(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ObjectivesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "peso");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "titlecase");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "td")(45, "p-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("loadingChange", function ObjectivesComponent_ng_template_10_Template_p_button_loadingChange_45_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.onclickCompletionButton[rowIndex_r25] = $event);
    })("click", function ObjectivesComponent_ng_template_10_Template_p_button_click_45_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const objectiveData_r24 = restoredCtx.$implicit;
      const rowIndex_r25 = restoredCtx.rowIndex;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.updateObjectiveComplete($event, objectiveData_r24, rowIndex_r25, objectiveData_r24.complete));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "p-confirmPopup", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "td")(49, "div", 68)(50, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_10_Template_i_click_50_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.viewFiles(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, ObjectivesComponent_ng_template_10_Conditional_51_Template, 2, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "td")(53, "div", 71)(54, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_10_Template_i_click_54_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.updateSubGoal(objectiveData_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_10_Template_i_click_55_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const objectiveData_r24 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.deleteSubGoal(objectiveData_r24.id, objectiveData_r24.goalId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "p-confirmPopup", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const objectiveData_r24 = ctx.$implicit;
    const rowIndex_r25 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 25, objectiveData_r24.goals.goals), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 27, objectiveData_r24.goals.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 29, objectiveData_r24.functional_objective), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 31, objectiveData_r24.performance_indicator), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 33, objectiveData_r24.target), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 35, objectiveData_r24.formula), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 37, objectiveData_r24.programs), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 39, objectiveData_r24.responsible_persons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 41, objectiveData_r24.clients), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](30, 43, objectiveData_r24.timetable[0], "shortDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](31, 46, objectiveData_r24.timetable[1], "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 49, objectiveData_r24.frequency_monitoring), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 51, objectiveData_r24.data_source), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 53, objectiveData_r24.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](43, 55, objectiveData_r24.createdAt, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true)("raised", true)("severity", objectiveData_r24.complete ? "success" : "warning")("icon", objectiveData_r24.complete ? "pi pi-check" : "pi pi-times")("label", objectiveData_r24.complete ? "Yes" : "No")("disabled", ctx_r3.role === "user" && objectiveData_r24.complete ? true : false)("pTooltip", ctx_r3.role === "user" ? "Only Admin can enable this button" : "")("tooltipPosition", ctx_r3.top)("loading", ctx_r3.onclickCompletionButton[rowIndex_r25]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](51, ctx_r3.role === "admin" ? 51 : -1);
  }
}
function ObjectivesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Objectives found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Loading Objectives data. Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r38.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 78, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_18_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.onGlobalFilter(_r6, $event));
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
function ObjectivesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "th", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Date Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th", 64)(8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 83);
  }
}
function ObjectivesComponent_ng_template_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_20_Conditional_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46);
      const AllObjectivesFile_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.deleteSubGoalFile(AllObjectivesFile_r41.id, AllObjectivesFile_r41.source));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ObjectivesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ObjectivesComponent_ng_template_20_Conditional_9_Template, 1, 0, "i", 81)(10, ObjectivesComponent_ng_template_20_Conditional_10_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "p-confirmPopup", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const AllObjectivesFile_r41 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r9.auth.domain + "/images/files/" + AllObjectivesFile_r41.source, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r9.getIcon(AllObjectivesFile_r41.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 4, AllObjectivesFile_r41.date_added, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](9, ctx_r9.blockedPanel ? 9 : 10);
  }
}
function ObjectivesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_23_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.hideViewFileDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true);
  }
}
function ObjectivesComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_86_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.clear(_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function ObjectivesComponent_ng_template_86_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.onGlobalFilter(_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ObjectivesComponent_ng_template_87_Template(rf, ctx) {
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
function ObjectivesComponent_ng_template_88_Template(rf, ctx) {
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
    const AllObjectivesHistoryFiles_r53 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r16.auth.domain + "/images/files/" + AllObjectivesHistoryFiles_r53.source, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r16.getIcon(AllObjectivesHistoryFiles_r53.source.split(".").pop().toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 9, AllObjectivesHistoryFiles_r53.date_added, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r53.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 12, AllObjectivesHistoryFiles_r53.updatedAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("cursor-pointer  customer-badge status-" + (AllObjectivesHistoryFiles_r53.status ? "active" : "inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](AllObjectivesHistoryFiles_r53.status ? "Active" : "Deleted");
  }
}
function ObjectivesComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No Files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Loading Files data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ObjectivesComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_ng_template_91_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.hideViewFileHistoryDialogCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("text", true);
  }
}
const _c1 = () => ["goals.goals", "goals.budget", "functional_objective", "performance_indicator", "target", "formula", "programs", "department", "responsible_persons", "clients", "timetable", "frequency_monitoring", "data_source", "budget", "createdAt", "Files", "options"];
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
    constructor(obj, messageService, confirmationService, dialogService, fileService, formBuilder, auth, goal, cd) {
      this.obj = obj;
      this.messageService = messageService;
      this.confirmationService = confirmationService;
      this.dialogService = dialogService;
      this.fileService = fileService;
      this.formBuilder = formBuilder;
      this.auth = auth;
      this.goal = goal;
      this.cd = cd;
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
      this.role = this.auth.getUserRole();
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
      var _this = this;
      this.loading = true;
      this.obj.fetch('get', 'objectives', 'getAllObjectives/' + this.USERID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.objectiveDatas = yield data.Objectives;
          for (let i = 0; i < _this.objectiveDatas.length; i++) {
            _this.onclickCompletionButton[i] = false;
          }
          _this.loading = false;
          _this.cd.detectChanges();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    getAllobjectivesGoalsUsers() {
      this.loading = true;
      this.obj.fetch('get', 'objectives', 'getAllByIdObjectivesWithGoalsAndUsers/' + this.USERID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.objectiveSubscription)).subscribe(data => {
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
        timetable: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        frequency_monitoring: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        data_source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        budget: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
    }
    updateObjectiveComplete(event, data, index = 0, completeStatus) {
      var _this2 = this;
      this.onclickCompletionButton[index] = true;
      let goalIDs = data.goalId;
      if (completeStatus === true && this.role === 'user') {
        this.messageService.add({
          severity: 'error  ',
          summary: 'Nice Try!!!',
          detail: 'Only Admin can enable this..'
        });
        this.onclickCompletionButton[index] = false;
        return;
      }
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
            var _ref2 = (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
              if (results.success) {
                _this2.messageService.add({
                  severity: 'success  ',
                  summary: 'Done',
                  detail: results.message,
                  life: 5000
                });
                // this.getAllobjectives();
                _this2.getAllobjectivesGoalsUsers();
                _this2.loading = false;
              } else {
                _this2.messageService.add({
                  severity: 'error  ',
                  summary: 'Error',
                  detail: results.message
                });
              }
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
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
      var _this3 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //block view files if complete
        _this3.blockedPanel = objectiveData.complete;
        // alert(objectiveID);
        _this3.viewObjectiveFileDialogCard = true;
        _this3.objectiveIDforFile = objectiveData.id;
        // alert(JSON.stringify(objectiveData));
        _this3.getAllFilesFromObjectiveLoad(_this3.USERID, objectiveData.id);
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
      var _this4 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.loading = true;
        _this4.fileService.getAllFilesFromObjective(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this4.objectiveSubscription)).subscribe(data => {
          _this4.AllObjectivesFiles = data.data;
          _this4.loading = false;
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
        timetable: [new Date(data.timetable[0]), new Date(data.timetable[1])],
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
      var _this5 = this;
      return (0,C_Users_PC_Desktop_THESIS_idm_latest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this5.loading = true;
        _this5.fileService.getAllFilesHistoryFromObjectiveLoad(id, objectiveID).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(_this5.objectiveSubscription)).subscribe(data => {
          _this5.AllObjectivesHistoryFiles = data.data;
          _this5.loading = false;
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
      return new (t || ObjectivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_objective_service__WEBPACK_IMPORTED_MODULE_2__.ObjectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_demo_service_goal_service__WEBPACK_IMPORTED_MODULE_5__.GoalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
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
      decls: 92,
      vars: 73,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "add-user-heading"], [1, "text-xl", "font-medium", "mt-2", "text-slate-950"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields", "tableStyle"], ["dt2", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["responsiveLayout", "stack", "position", "top", 3, "header", "visible", "breakpoints", "maximizable", "closable", "visibleChange"], ["dt3", ""], ["pTemplate", "footer"], ["styleClass", "addObjective", "header", "Drag and Drop Files", "position", "top", 3, "visible", "breakpoints", "visibleChange"], [1, "p-fluid"], [3, "formGroup"], ["name", "files", "customUpload", "true", "multiple", "true", "maxFileSize", "20000000", "formControlName", "files", "ngDefaultControl", "", 3, "files", "uploadHandler"], ["styleClass", "addObjective", "position", "top", 3, "header", "visible", "breakpoints", "visibleChange", "onHide"], [1, "field", "col-10", "md:col-10"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "functional_objective", "autocomplete", "off", "formControlName", "functional_objective", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "performance_indicator", "autocomplete", "off", "formControlName", "performance_indicator", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "target", "autocomplete", "off", "formControlName", "target", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "formula", "autocomplete", "off", "formControlName", "formula", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "programs", "autocomplete", "off", "formControlName", "programs", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "responsible_persons", "autocomplete", "off", "formControlName", "responsible_persons", "required", "", 1, "flex-auto", 3, "ngClass"], ["pInputText", "", "id", "clients", "autocomplete", "off", "formControlName", "clients", "required", "", 1, "flex-auto", 3, "ngClass"], ["formControlName", "timetable", "selectionMode", "range", 3, "readonlyInput"], ["htmlFor", "department"], ["formControlName", "selectedDropdown", "optionLabel", "name", "placeholder", "Select a Frequency", 3, "options"], ["pInputText", "", "id", "data_source", "autocomplete", "off", "formControlName", "data_source", "required", "", 1, "flex-auto", 3, "ngClass"], ["mode", "decimal", "formControlName", "budget", 3, "showButtons"], [1, "flex", "justify-space-between", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Update", 3, "click"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "input"], ["filter", ""], [2, "min-width", "12rem"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "goals.goals", "display", "menu", "placeholder", "Search by Office"], ["type", "text", "field", "goals.budget", "display", "menu", "placeholder", "Search by Goal Budget"], ["type", "text", "field", "functional_objective", "display", "menu", "placeholder", "Search by Functional Objective"], ["type", "text", "field", "performance_indicator", "display", "menu", "placeholder", "Search by Performance Indicator"], ["type", "text", "field", "target", "display", "menu", "placeholder", "Search by Target"], ["type", "text", "field", "formula", "display", "menu", "placeholder", "Search by Formula"], ["type", "text", "field", "programs", "display", "menu", "placeholder", "Search by Programs"], ["type", "text", "field", "responsible_persons", "display", "menu", "placeholder", "Search by Responsible Persons"], ["type", "text", "field", "clients", "display", "menu", "placeholder", "Search by Clients"], ["type", "text", "field", "timetable", "display", "menu", "placeholder", "Search by Timetable"], [2, "min-width", "4rem"], ["type", "text", "field", "frequency_monitoring", "display", "menu", "placeholder", "Search by Frequency Monitoring"], ["type", "text", "field", "data_source", "display", "menu", "placeholder", "Search by Data Source"], ["type", "text", "field", "budget", "display", "menu", "placeholder", "Search by Budget"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "eg. 2024-06-28"], ["type", "text", "field", "complete", "display", "menu", "placeholder", "Search by Completion"], [2, "min-width", "6rem"], ["type", "text", "field", "createdAt", "display", "menu", "placeholder", "Search by Files"], [2, "min-width", "9rem"], [3, "text", "raised", "severity", "icon", "label", "disabled", "pTooltip", "tooltipPosition", "loading", "loadingChange", "click"], ["key", "updateObjectiveComplete"], ["confirmPopupRef", ""], [1, "flex", "flex-row", "align-items-center"], ["pTooltip", "File List", "tooltipPosition", "top", 1, "pi", "pi-folder", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-folder-open", "cursor-pointer", 3, "click"], ["pTooltip", "File History", "tooltipPosition", "top", "class", "pi pi-cog text-2xl hover:text-4xl text-yellow-400 transition ease-in-out duration-200 hover:pi-cog cursor-pointer"], [1, "options-users"], [1, "pi", "pi-file-edit", "text-xl", 2, "color", "#0ea5e9", "cursor", "pointer", 3, "click"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#ef4444", "cursor", "pointer", 3, "click"], ["key", "deleteSubGoal"], ["pTooltip", "File History", "tooltipPosition", "top", 1, "pi", "pi-cog", "text-2xl", "hover:text-4xl", "text-yellow-400", "transition", "ease-in-out", "duration-200", "hover:pi-cog", "cursor-pointer", 3, "click"], ["colspan", "8"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "disabled", "click"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "p-inputtext", "p-component", "p-element", "w-full", 3, "disabled", "input"], ["target", "_blank", 3, "href"], [1, "text-4xl", 3, "ngClass"], ["class", "pi pi-trash text-xl", "style", "color: #868585"], ["key", "deleteSubGoalFile"], [1, "pi", "pi-trash", "text-xl", 2, "color", "#868585"], ["label", "Cancel", "severity", "secondary", 3, "text", "click"]],
      template: function ObjectivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Objectives");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p-table", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ObjectivesComponent_ng_template_8_Template, 6, 0, "ng-template", 7)(9, ObjectivesComponent_ng_template_9_Template, 68, 0, "ng-template", 8)(10, ObjectivesComponent_ng_template_10_Template, 57, 58, "ng-template", 9)(11, ObjectivesComponent_ng_template_11_Template, 3, 0, "ng-template", 10)(12, ObjectivesComponent_ng_template_12_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_13_listener($event) {
            return ctx.viewObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 0)(15, "div", 1)(16, "p-table", 5, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ObjectivesComponent_ng_template_18_Template, 6, 2, "ng-template", 7)(19, ObjectivesComponent_ng_template_19_Template, 10, 0, "ng-template", 8)(20, ObjectivesComponent_ng_template_20_Template, 12, 7, "ng-template", 9)(21, ObjectivesComponent_ng_template_21_Template, 3, 0, "ng-template", 10)(22, ObjectivesComponent_ng_template_22_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ObjectivesComponent_ng_template_23_Template, 1, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_24_listener($event) {
            return ctx.addObjectiveFileDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 16)(26, "form", 17)(27, "p-fileUpload", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("uploadHandler", function ObjectivesComponent_Template_p_fileUpload_uploadHandler_27_listener($event) {
            return ctx.onUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " \u00A0\u00A0\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "p-dialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_29_listener($event) {
            return ctx.addObjectiveGoalDialogCard = $event;
          })("onHide", function ObjectivesComponent_Template_p_dialog_onHide_29_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 16)(31, "div", 20)(32, "form", 17)(33, "div", 21)(34, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Functional Objective");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 21)(38, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Performance Indicator");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 21)(42, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Target");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 21)(46, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Formula");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 21)(50, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Programs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 21)(54, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Responsible Persons");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 21)(58, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 21)(62, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Timetable");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "p-calendar", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 21)(66, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Frequency Monitoring");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "p-dropdown", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 21)(71, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Means of Verification(Data Source)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 21)(75, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " budget ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "p-inputNumber", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 35)(79, "p-button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_Template_p_button_click_79_listener() {
            return ctx.clearAddObjectiveGoalDialogCardDatas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "p-button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ObjectivesComponent_Template_p_button_click_80_listener() {
            return ctx.updateSubObjectiveGoalDialogExec(ctx.addObjectiveGoalform);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function ObjectivesComponent_Template_p_dialog_visibleChange_81_listener($event) {
            return ctx.viewObjectiveFileHistoryDialogCard = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 0)(83, "div", 1)(84, "p-table", 5, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, ObjectivesComponent_ng_template_86_Template, 6, 0, "ng-template", 7)(87, ObjectivesComponent_ng_template_87_Template, 13, 0, "ng-template", 8)(88, ObjectivesComponent_ng_template_88_Template, 14, 15, "ng-template", 9)(89, ObjectivesComponent_ng_template_89_Template, 3, 0, "ng-template", 10)(90, ObjectivesComponent_ng_template_90_Template, 3, 0, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, ObjectivesComponent_ng_template_91_Template, 1, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.objectiveDatas)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](59, _c1))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](60, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](61, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", ctx.blockedPanel ? "Files Locked: Objective Marked Complete" : "File List")("visible", ctx.viewObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](62, _c4))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.AllObjectivesFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](63, _c5))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](64, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](65, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.addObjectiveFileDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addFileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("files", ctx.uploadedFiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](67, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "Add  Objectives")("visible", ctx.addObjectiveGoalDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](68, _c4));
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
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](69, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", "File History List")("visible", ctx.viewObjectiveFileHistoryDialogCard)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](70, _c4))("maximizable", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.AllObjectivesHistoryFiles)("rows", 5)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](71, _c5))("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](72, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.ColumnFilter, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.Dialog, primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_21__.InputNumber, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_22__.ConfirmPopup, primeng_fileupload__WEBPACK_IMPORTED_MODULE_23__.FileUpload, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _pipes_dataFilter__WEBPACK_IMPORTED_MODULE_6__.PesoPipe],
      styles: ["@charset \"UTF-8\";\n.options-users[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.customer-badge.status-active[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #256029;\n}\n\n.customer-badge.status-inactive[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c63737;\n}\n\n.customer-badge.status-pending[_ngcontent-%COMP%] {\n  background: #ffd8b2;\n  color: #805b36;\n}\n\n  .p-dialog-content {\n  overflow-y: visible !important;\n}\n\n  .footer-button {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.add-user-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 1.5rem 0;\n}\n\n  .footer-button {\n  gap: 8rem !important;\n}\n\n  .addObjective {\n  overflow-y: auto;\n}\n\n  .pi-folder:hover {\n  transform: scale(1.2);\n}\n\n  .hover\\:pi-folder-open:hover:before {\n  content: \"\uD83D\uDCC2\";\n}\n\n  .hover\\:pi-cog:hover:before {\n  content: \"\u2699\uFE0F\";\n}\n\n  .p-fileupload-row > div:first-child {\n  display: none !important;\n}\n\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\n  background: #41c5b7;\n}\n\n  .p-overlaypanel .p-overlaypanel-content {\n  padding: 0 !important;\n}\n\n  p-panel {\n  width: 100% !important;\n  z-index: 9999999999;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}\n\n  .p-blockui {\n  z-index: 9999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  transition-property: background-color;\n  align-items: center;\n  justify-content: center;\n}\n\n  .p-blockui.p-component-overlay {\n  position: absolute;\n  display: flex;\n}"]
    });
  }
  return ObjectivesComponent;
})();

/***/ }),

/***/ 16280:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 13684);
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goals/goals.component */ 95409);
/* harmony import */ var _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goals/dashboard/dashboard.component */ 66309);
/* harmony import */ var _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals/objectives/objectives.component */ 87278);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ai/ai.component */ 85476);
/* harmony import */ var _goals_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goals/calendar/calendar.component */ 61400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 65879);









let UserRoutingModule = /*#__PURE__*/(() => {
  class UserRoutingModule {
    static #_ = this.ɵfac = function UserRoutingModule_Factory(t) {
      return new (t || UserRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }, {
        path: 'goals',
        component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_1__.GoalsComponent
      }, {
        path: 'ai',
        component: _ai_ai_component__WEBPACK_IMPORTED_MODULE_4__.AiComponent
      }, {
        path: 'goals/dashboard',
        component: _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.GoalDashboardComponent
      }, {
        path: 'goals/objectives',
        component: _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_3__.ObjectivesComponent
      }, {
        path: 'goals/calendar',
        component: _goals_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__.CalendarComponent
      }, {
        path: '**',
        redirectTo: '/dashboard'
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
  return UserRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 40072:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo/service/product.service */ 20981);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);



// import { ProductService } from '../demo/service/product.service';
let UserComponent = /*#__PURE__*/(() => {
  class UserComponent {
    constructor(productService, layoutService) {
      this.productService = productService;
      this.layoutService = layoutService;
      // this.subscription = this.layoutService.configUpdate$
      // .pipe(debounceTime(25))
      // .subscribe((config) => {
      //     this.initChart();
      // });
    }

    ngOnInit() {
      // this.initChart();
      // this.productService
      //     .getProductsSmall()
      //     .then((data) => (this.products = data));
      // this.items = [
      //     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      //     { label: 'Remove', icon: 'pi pi-fw pi-minus' },
      // ];
    }
    // initChart() {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const textColor = documentStyle.getPropertyValue('--text-color');
    //     const textColorSecondary = documentStyle.getPropertyValue(
    //         '--text-color-secondary'
    //     );
    //     const surfaceBorder =
    //         documentStyle.getPropertyValue('--surface-border');
    //     this.chartData = {
    //         labels: [
    //             'January',
    //             'February',
    //             'March',
    //             'April',
    //             'May',
    //             'June',
    //             'July',
    //         ],
    //         datasets: [
    //             {
    //                 label: 'First Dataset',
    //                 data: [65, 59, 80, 81, 56, 55, 40],
    //                 fill: false,
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--bluegray-700'),
    //                 borderColor:
    //                     documentStyle.getPropertyValue('--bluegray-700'),
    //                 tension: 0.4,
    //             },
    //             {
    //                 label: 'Second Dataset',
    //                 data: [28, 48, 40, 19, 86, 27, 90],
    //                 fill: false,
    //                 backgroundColor:
    //                     documentStyle.getPropertyValue('--green-600'),
    //                 borderColor: documentStyle.getPropertyValue('--green-600'),
    //                 tension: 0.4,
    //             },
    //         ],
    //     };
    //     this.chartOptions = {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: textColor,
    //                 },
    //             },
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     color: textColorSecondary,
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false,
    //                 },
    //             },
    //             y: {
    //                 ticks: {
    //                     color: textColorSecondary,
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false,
    //                 },
    //             },
    //         },
    //     };
    // }
    ngOnDestroy() {
      // if (this.subscription) {
      //     this.subscription.unsubscribe();
      // }
    }
    static #_ = this.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 0,
      vars: 0,
      template: function UserComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return UserComponent;
})();

/***/ }),

/***/ 30090:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 13684);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ 40072);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ 16280);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals/goals.component */ 95409);
/* harmony import */ var _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goals/objectives/objectives.component */ 87278);
/* harmony import */ var _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goals/dashboard/dashboard.component */ 66309);
/* harmony import */ var _ai_ai_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ai/ai.component */ 85476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 65879);










let UserModule = /*#__PURE__*/(() => {
  class UserModule {
    static #_ = this.ɵfac = function UserModule_Factory(t) {
      return new (t || UserModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUpload],
      imports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return UserModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__.GoalsComponent, _goals_objectives_objectives_component__WEBPACK_IMPORTED_MODULE_5__.ObjectivesComponent, _goals_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.GoalDashboardComponent, _ai_ai_component__WEBPACK_IMPORTED_MODULE_7__.AiComponent],
    imports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 95932:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 27882);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 96700);




var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/daygrid',
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayGridView,
      dateProfileGeneratorClass: _internal_js__WEBPACK_IMPORTED_MODULE_1__.TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: 'dayGrid',
      duration: {
        years: 1
      }
    }
  }
});


/***/ }),

/***/ 96700:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/internal.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayGridView: () => (/* binding */ DayTableView),
/* harmony export */   DayTable: () => (/* binding */ DayTable),
/* harmony export */   DayTableSlicer: () => (/* binding */ DayTableSlicer),
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableDateProfileGenerator: () => (/* binding */ TableDateProfileGenerator),
/* harmony export */   TableRows: () => (/* binding */ TableRows),
/* harmony export */   TableView: () => (/* binding */ TableView),
/* harmony export */   buildDayTableModel: () => (/* binding */ buildDayTableModel),
/* harmony export */   buildDayTableRenderRange: () => (/* binding */ buildDayTableRenderRange)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 42711);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 24354);



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
class TableView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  renderSimpleLayout(headerRowContent, bodyContent) {
    let {
      props,
      context
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [] /* TODO: make optional? */,
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      props,
      context
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: props.forPrint,
      colGroups: [{
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
}
function splitSegsByRow(segs, rowCnt) {
  let byRow = [];
  for (let i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];
  for (let i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
const DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});
function hasListItemDisplay(seg) {
  let {
    display
  } = seg.eventRange.ui;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol &&
  // can't be multi-day
  seg.isStart &&
  // "
  seg.isEnd // "
  ;
}

class TableBlockEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj, Object.assign({}, props, {
      elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  }
}
class TableListItemEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, Object.assign({}, props, {
      elTag: "a",
      elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU)(props.seg, context),
      defaultGenerator: renderInnerContent,
      timeText: timeText,
      isResizing: false,
      isDateSelecting: false
    }));
  }
}
function renderInnerContent(renderProps) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: renderProps.borderColor || renderProps.backgroundColor
    }
  }), renderProps.timeText && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-time"
  }, renderProps.timeText), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title"
  }, renderProps.event.title || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0")));
}
class TableCellMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.compileSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(compileSegs);
  }
  render() {
    let {
      props
    } = this;
    let {
      allSegs,
      invisibleSegs
    } = this.compileSegs(props.singlePlacements);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cr, {
      elClasses: ['fc-daygrid-more-link'],
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs: allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: () => {
        let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(seg => {
          let instanceId = seg.eventRange.instance.instanceId;
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
            }
          }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange))));
        }));
      }
    });
  }
}
function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];
  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return {
    allSegs,
    invisibleSegs
  };
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  week: 'narrow'
});
class TableCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      dayNumberId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    this.handleRootEl = el => {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Y)(this.rootElRef, el);
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Y)(this.props.elRef, el);
    };
  }
  render() {
    let {
      context,
      props,
      state,
      rootElRef
    } = this;
    let {
      options,
      dateEnv
    } = context;
    let {
      date,
      dateProfile
    } = props;
    // TODO: memoize this?
    const isMonthStart = props.showDayNumber && shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl, {
      elTag: "td",
      elRef: this.handleRootEl,
      elClasses: ['fc-daygrid-day', ...(props.extraClassNames || [])],
      elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? {
        'aria-labelledby': state.dayNumberId
      } : {}), {
        role: 'gridcell'
      }),
      defaultGenerator: renderTopInner,
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      isMonthStart: isMonthStart,
      extraRenderProps: props.extraRenderProps
    }, (InnerContent, renderProps) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: props.innerElRef,
      className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
      style: {
        minHeight: props.minHeight
      }
    }, props.showWeekNumber && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, {
      elTag: "a",
      elClasses: ['fc-daygrid-week-number'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(context, date, 'week'),
      date: date,
      defaultFormat: DEFAULT_WEEK_NUM_FORMAT
    }), !renderProps.isDisabled && (props.showDayNumber || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm)(options) || props.forceDayTop) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-top"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "a",
      elClasses: ['fc-daygrid-day-number', isMonthStart && 'fc-daygrid-month-start'],
      elAttrs: Object.assign(Object.assign({}, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(context, date)), {
        id: state.dayNumberId
      })
    })) : props.showDayNumber ?
    // for creating correct amount of space (see issue #7162)
    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-top",
      style: {
        visibility: 'hidden'
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: "fc-daygrid-day-number"
    }, "\u00A0")) : undefined, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-events",
      ref: props.fgContentElRef
    }, props.fgContent, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bottom",
      style: {
        marginTop: props.moreMarginTop
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, {
      allDayDate: date,
      singlePlacements: props.singlePlacements,
      moreCnt: props.moreCnt,
      alignmentElRef: rootElRef,
      alignGridTop: !props.showDayNumber,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange
    }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bg"
    }, props.bgContent)));
  }
}
function renderTopInner(props) {
  return props.dayNumberText || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  const {
    start: currentStart,
    end: currentEnd
  } = currentRange;
  const currentEndIncl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bg)(currentEnd, -1);
  const currentFirstYear = dateEnv.getYear(currentStart);
  const currentFirstMonth = dateEnv.getMonth(currentStart);
  const currentLastYear = dateEnv.getYear(currentEndIncl);
  const currentLastMonth = dateEnv.getMonth(currentEndIncl);
  // spans more than one month?
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
  // first date in current view?
  date.valueOf() === currentStart.valueOf() ||
  // a month-start that's within the current range?
  dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf());
}
function generateSegKey(seg) {
  return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
}
function generateSegUid(seg) {
  return generateSegKey(seg) + ':' + seg.lastCol;
}
function computeFgSegPlacement(segs,
// assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy(segEntry => {
    // TODO: more DRY with generateSegUid
    let segUid = segs[segEntry.index].eventRange.instance.instanceId + ':' + segEntry.span.start + ':' + (segEntry.span.end - 1);
    // if no thickness known, assume 1 (if 0, so small it always fits)
    return segHeights[segUid] || 1;
  });
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  // create segInputs only for segs with known heights
  let segInputs = [];
  let unknownHeightSegs = [];
  for (let i = 0; i < segs.length; i += 1) {
    let seg = segs[i];
    let segUid = generateSegUid(seg);
    let eventHeight = segHeights[segUid];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = [];
  // add segs with unknown heights
  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // add the hidden entries
  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // deal with leftover margins
  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    moreCnts,
    moreMarginTops
  };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];
  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col];
    // compute all static segs in singlePlacements
    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    // compute mixed static/absolute segs in multiPlacements
    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
      currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop // claim the margin
        });

        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  };
}
function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];
  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(origRange, {
    start: cells[spanStart].date,
    end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}
class DayGridSegHierarchy extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA {
  constructor() {
    super(...arguments);
    // config
    this.hiddenConsumes = false;
    // allows us to keep hidden entries in the hierarchy so they take up space
    this.forceHidden = {};
  }
  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const {
      entriesByLevel
    } = this;
    const excludeHidden = entry => !this.forceHidden[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(entry)];
    // remove the forced-hidden segs
    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const {
      entriesByLevel,
      forceHidden
    } = this;
    const {
      touchingEntry,
      touchingLevel,
      touchingLateral
    } = insertion;
    // the entry that the new insertion is touching must be hidden
    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          // split up the touchingEntry, reinsert it
          const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), {
            span: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bF)(touchingEntry.span, entry.span)
          });
          // reinsert the area that turned into a "more" link (so no other entries try to
          // occupy the space) but mark it forced-hidden
          const hiddenEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(hiddenEntry);
          forceHidden[hiddenEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
          hiddenEntries.push(hiddenEntry);
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    // will try to reslice...
    super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
}
class TableRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the <td>
    this.frameElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the fc-daygrid-day-frame
    this.fgElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the fc-daygrid-day-events
    this.segHarnessRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // indexed by "instanceId:firstCol"
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    this.handleResize = isForced => {
      if (isForced) {
        this.updateSizing(true); // isExternal=true
      }
    };
  }

  render() {
    let {
      props,
      state,
      context
    } = this;
    let {
      options
    } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let {
      singleColPlacements,
      multiColPlacements,
      moreCnts,
      moreMarginTops
    } = computeFgSegPlacement((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      ref: this.rootElRef,
      role: "row"
    }, props.renderIntro && props.renderIntro(), props.cells.map((cell, col) => {
      let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
      let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, {
        key: cell.key,
        elRef: this.cellElRefs.createRef(cell.key),
        innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraRenderProps: cell.extraRenderProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: this.fgElRefs.createRef(cell.key),
        fgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes)),
        bgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderFillSegs(highlightSegsByCol[col], 'highlight'), this.renderFillSegs(businessHoursByCol[col], 'non-business'), this.renderFillSegs(bgEventSegsByCol[col], 'bg-event')),
        minHeight: props.cellMinHeight
      });
    }));
  }
  componentDidMount() {
    this.updateSizing(true);
    this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E)(prevProps, currentProps));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let {
      props
    } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
  getMirrorSegs() {
    let {
      props
    } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return [];
  }
  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      context
    } = this;
    let {
      eventSelection
    } = this.props;
    let {
      framePositions
    } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];
    if (framePositions) {
      for (let placement of segPlacements) {
        let {
          seg
        } = placement;
        let {
          instanceId
        } = seg.eventRange.instance;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = '';
        let right = '';
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        todo: in print view, for multi-day events, don't display title within non-start/end segs
        */
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: generateSegKey(seg),
          ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)),
          style: {
            visibility: isVisible ? '' : 'hidden',
            marginTop: isAbsolute ? '' : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : '',
            left,
            right
          }
        }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange)))));
      }
    }
    return nodes;
  }
  renderFillSegs(segs, fillType) {
    let {
      isRtl
    } = this.context;
    let {
      todayRange
    } = this.props;
    let {
      framePositions
    } = this.state;
    let nodes = [];
    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT)(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp, Object.assign({
          seg: seg
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co)(fillType)));
      }
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...nodes);
  }
  updateSizing(isExternalSizingChange) {
    let {
      props,
      state,
      frameElRefs
    } = this;
    if (!props.forPrint && props.clientWidth !== null // positioning ready?
    ) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map(cell => frameElRefs.currentMap[cell.key]);
        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          let newPositionCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(originEl, frameEls, true,
          // isHorizontal
          false);
          if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
            this.setState({
              framePositions: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(originEl, frameEls, true,
              // isHorizontal
              false)
            });
          }
        }
      }
      const oldSegHeights = this.state.segHeights;
      const newSegHeights = this.querySegHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let segHeights = {};
    // get the max height amongst instance segs
    for (let segUid in segElMap) {
      let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
      segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
    }
    return segHeights;
  }
  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }
  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(cell => elMap[cell.key]);
  }
}
TableRow.addStateEquality({
  segHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
  return mirrorSegs.map(seg => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};
  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
class TableRows extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
    this.rowRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    // for DayGrid view with many rows, force a min-height on cells so doesn't appear squished
    // choose 7 because a month view will have max 6 rows
    let cellMinHeight = rowCnt >= 7 && props.clientWidth ? props.clientWidth / context.options.aspectRatio / 6 : null;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: "day"
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.cells.map((cells, row) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */ : row // in case there are no cells (like when resource view is loading)
      ,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange: todayRange,
      dateProfile: props.dateProfile,
      cells: cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */,
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      cellMinHeight: cellMinHeight,
      forPrint: props.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    // for if started with zero cells
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      // HACK: need a daygrid wrapper parent to do positioning
      // NOTE: a daygrid resource view w/o resources can have zero cells
      const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
      const rootEl = firstCellEl ? firstCellEl.closest('.fc-daygrid-body') : null;
      if (rootEl) {
        this.rootEl = rootEl;
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      }
    }
  }
  componentWillUnmount() {
    if (this.rootEl) {
      this.context.unregisterInteractiveComponent(this);
      this.rootEl = null;
    }
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootEl, this.rowRefs.collect().map(rowObj => rowObj.getCellEls()[0]),
    // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootEl, this.rowRefs.currentMap[0].getCellEls(),
    // cell els in first row
    true,
    // horizontal
    false);
  }
  queryHit(positionLeft, positionTop) {
    let {
      colPositions,
      rowPositions
    } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  }

  getCellRange(row, col) {
    let start = this.props.cells[row][col].date;
    let end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(start, 1);
    return {
      start,
      end
    };
  }
}
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
class Table extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.elRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.needsScrollReset = false;
  }
  render() {
    let {
      props
    } = this;
    let {
      dayMaxEventRows,
      dayMaxEvents,
      expandRows
    } = props;
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    let classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];

    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.elRef,
      className: classNames.join(' '),
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      className: "fc-scrollgrid-sync-table",
      style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth,
        height: expandRows ? props.clientHeight : ''
      }
    }, props.colGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRows, {
      dateProfile: props.dateProfile,
      cells: props.cells,
      renderRowIntro: props.renderRowIntro,
      showWeekNumbers: props.showWeekNumbers,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      dayMaxEvents: dayMaxEvents,
      dayMaxEventRows: dayMaxEventRows,
      forPrint: props.forPrint,
      isHitComboAllowed: props.isHitComboAllowed
    }))));
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dateProfile !== this.props.dateProfile) {
      this.requestScrollReset();
    } else {
      this.flushScrollReset();
    }
  }
  requestScrollReset() {
    this.needsScrollReset = true;
    this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth // sizes computed?
    ) {
      const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
      if (subjectEl) {
        const originEl = subjectEl.closest('.fc-daygrid-body');
        const scrollEl = originEl.closest('.fc-scroller');
        const scrollTop = subjectEl.getBoundingClientRect().top - originEl.getBoundingClientRect().top;
        scrollEl.scrollTop = scrollTop ? scrollTop + 1 : 0; // overcome border
      }

      this.needsScrollReset = false;
    }
  }
}
function getScrollSubjectEl(containerEl, dateProfile) {
  let el;
  if (dateProfile.currentRangeUnit.match(/year|month/)) {
    el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bx)(dateProfile.currentDate)}-01"]`);
    // even if view is month-based, first-of-month might be hidden...
  }

  if (!el) {
    el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dateProfile.currentDate)}"]`);
    // could still be hidden if an interior-view hidden day
  }

  return el;
}
class DayTableSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bW {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }
}
class DayTable extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, Object.assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  }
}
class DayTableView extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayTableModel);
    this.headerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    // can't override any lifecycle methods from parent
  }

  render() {
    let {
      options,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });
    let bodyContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, {
      ref: this.tableRef,
      dateProfile: props.dateProfile,
      dayTableModel: dayTableModel,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      nextDayThreshold: options.nextDayThreshold,
      colGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      dayMaxEvents: options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      showWeekNumbers: options.weekNumbers,
      expandRows: !props.isHeightAuto,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    });
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }
}
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bV(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
class TableDateProfileGenerator extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.U {
  // Computes the date range that will be rendered
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let {
      props
    } = this;
    return buildDayTableRenderRange({
      currentRange: renderRange,
      snapToWeek: /^(year|month)$/.test(currentRangeUnit),
      fixedWeekCount: props.fixedWeekCount,
      dateEnv: props.dateEnv
    });
  }
}
function buildDayTableRenderRange(props) {
  let {
    dateEnv,
    currentRange
  } = props;
  let {
    start,
    end
  } = currentRange;
  let endOfWeek;
  // year and month views should be aligned with weeks. this is already done for week
  if (props.snapToWeek) {
    start = dateEnv.startOfWeek(start);
    // make end-of-week if not already
    endOfWeek = dateEnv.startOfWeek(end);
    if (endOfWeek.valueOf() !== end.valueOf()) {
      end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bh)(endOfWeek, 1);
    }
  }
  // ensure 6 weeks
  if (props.fixedWeekCount) {
    // TODO: instead of these date-math gymnastics (for multimonth view),
    // compute dateprofiles of all months, then use start of first and end of last.
    let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(currentRange.end, -1)));
    let rowCnt = Math.ceil(
    // could be partial weeks due to hiddenDays
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bi)(lastMonthRenderStart, end));
    end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bh)(end, 6 - rowCnt);
  }
  return {
    start,
    end
  };
}
var css_248z = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ }),

/***/ 16111:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: () => (/* binding */ ExternalDraggable),
/* harmony export */   ThirdPartyDraggable: () => (/* binding */ ThirdPartyDraggable),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 27882);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 42711);


_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait = 500;
let ignoreMouseDepth = 0;
let listenerCnt = 0;
let isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
class PointerDragging {
  constructor(containerEl) {
    this.subjectEl = null;
    // options that can be directly assigned by caller
    this.selector = ''; // will cause subjectEl in all emitted events to be this element
    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    // Mouse
    // ----------------------------------------------------------------------------------------------------
    this.handleMouseDown = ev => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        if (!this.shouldIgnoreMove) {
          document.addEventListener('mousemove', this.handleMouseMove);
        }
        document.addEventListener('mouseup', this.handleMouseUp);
      }
    };
    this.handleMouseMove = ev => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleMouseUp = ev => {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
      this.cleanup(); // call last so that pointerup has access to props
    };
    // Touch
    // ----------------------------------------------------------------------------------------------------
    this.handleTouchStart = ev => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014
        let targetEl = ev.target;
        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', this.handleTouchMove);
        }
        targetEl.addEventListener('touchend', this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = ev => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleTouchEnd = ev => {
      if (this.isDragging) {
        // done to guard against touchend followed by touchcancel
        let targetEl = ev.target;
        targetEl.removeEventListener('touchmove', this.handleTouchMove);
        targetEl.removeEventListener('touchend', this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
        window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
        this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
        this.cleanup(); // call last so that pointerup has access to props
        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };
    this.handleScroll = ev => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.scrollX - this.prevScrollX + this.prevPageX;
        let pageY = window.scrollY - this.prevScrollY + this.prevPageY;
        this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }
  destroy() {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  }
  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;
    if (subjectEl && (!this.handleSelector || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  }
  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    // keep wasTouchScroll around for later access
    this.destroyScrollWatch();
  }
  querySubjectEl(ev) {
    if (this.selector) {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.target, this.selector);
    }
    return this.containerEl;
  }
  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  }

  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.scrollX;
      this.prevScrollY = window.scrollY;
    }
  }
  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0;
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }
  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0;
    // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }
}
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
class ElementMirror {
  constructor() {
    this.isVisible = false; // must be explicitly enabled
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller
    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.scrollX;
    this.origScreenY = pageY - window.scrollY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }
  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.scrollX - this.origScreenX;
    this.deltaY = pageY - window.scrollY - this.origScreenY;
    this.updateElPosition();
  }
  // can be called before start
  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }
        this.isVisible = bool; // needs to happen before updateElPosition
        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }
      this.isVisible = bool;
    }
  }
  // always async
  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && (
    // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }
  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b2)(mirrorEl, () => {
      mirrorEl.style.transition = '';
      callback();
    });
  }
  cleanup() {
    if (this.mirrorEl) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aO)(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  }
  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }
  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.
      mirrorEl.style.userSelect = 'none';
      mirrorEl.style.webkitUserSelect = 'none';
      mirrorEl.style.pointerEvents = 'none';
      mirrorEl.classList.add('fc-event-dragging');
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  }
}

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
class ScrollGeomCache extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bb {
  constructor(scrollController, doesListening) {
    super();
    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };
    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect(); // do last in case it needs cached values
    if (this.doesListening) {
      this.getEventTarget().addEventListener('scroll', this.handleScroll);
    }
  }
  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }
  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {}
}
class ElementScrollGeomCache extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc(el), doesListening);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b3)(this.scrollController.el);
  }
}
class WindowScrollGeomCache extends ScrollGeomCache {
  constructor(doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bd(), doesListening);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
class AutoScroller {
  constructor() {
    // options that can be set by caller
    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels
    this.maxVelocity = 300; // pixels per second
    // internal state
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    // protect against the initial pointerdown being too close to an edge and starting the scroll
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = () => {
      if (this.isAnimating) {
        // wasn't cancelled between animation calls
        let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1000);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false; // will stop animation
        }
      }
    };
  }

  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }
  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.scrollX;
      let pointerScreenY = pageY - window.scrollY;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  }
  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }
  handleSide(edge, seconds) {
    let {
      scrollCache
    } = edge;
    let {
      edgeThreshold
    } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity =
    // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) *
    // quadratic
    this.maxVelocity * seconds;
    let sign = 1;
    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through
      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case 'top':
        sign = -1;
      // falls through
      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(left, top) {
    let {
      edgeThreshold
    } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];
    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top;
      // completely within the rect?
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache,
            name: 'top',
            distance: topDist
          };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }
        /*
        TODO: fix broken RTL scrolling. canScrollLeft always returning false
        https://github.com/fullcalendar/fullcalendar/issues/4837
        */
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache,
            name: 'left',
            distance: leftDist
          };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }
    return bestSide;
  }
  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(el => {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }

      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  }

  queryScrollEls(scrollStartEl) {
    let els = [];
    for (let query of this.scrollQuery) {
      if (typeof query === 'object') {
        els.push(query);
      } else {
        /*
        TODO: in the future, always have auto-scroll happen on element where current Hit came from
        Ticket: https://github.com/fullcalendar/fullcalendar/issues/4593
        */
        els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
      }
    }
    return els;
  }
}

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
class FeaturefulElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl;
    // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well
    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
    this.mirrorNeedsRevert = false;
    this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
    this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;
    this.onPointerDown = ev => {
      if (!this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ar)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.at)(document.body);
        // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        this.emitter.trigger('pointerdown', ev);
        if (this.isInteracting &&
        // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          this.mirror.setIsVisible(false); // reset. caller must set-visible
          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
          this.startDelay(ev);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    this.onPointerMove = ev => {
      if (this.isInteracting) {
        this.emitter.trigger('pointermove', ev);
        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq; // current distance from the origin, squared
          let {
            deltaX,
            deltaY
          } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            this.handleDistanceSurpassed(ev);
          }
        }
        if (this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          this.emitter.trigger('dragmove', ev);
        }
      }
    };
    this.onPointerUp = ev => {
      if (this.isInteracting) {
        this.isInteracting = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.as)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.au)(document.body);
        this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev); // which will stop the mirror
        }

        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.onPointerDown);
    pointer.emitter.on('pointermove', this.onPointerMove);
    pointer.emitter.on('pointerup', this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }
  destroy() {
    this.pointer.destroy();
    // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
    this.onPointerUp({});
  }
  startDelay(ev) {
    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  }
  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }
  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }
  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger('dragstart', ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }
  tryStopDrag(ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }
  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  }
  // fill in the implementations...
  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }
  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }
  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }
}

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
class OffsetTracker {
  constructor(el) {
    this.el = el;
    this.origRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(el);
    // will work fine for divs that have overflow:hidden
    this.scrollCaches = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b5)(el).map(scrollEl => new ElementScrollGeomCache(scrollEl, true));
  }
  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }
  computeLeft() {
    let left = this.origRect.left;
    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  }
  computeTop() {
    let top = this.origRect.top;
    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  }
  isWithinClipping(pageX, pageY) {
    let point = {
      left: pageX,
      top: pageY
    };
    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aF)(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  }
}
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
class HitDragging {
  constructor(dragging, droppableStore) {
    // options that can be set by caller
    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
    this.disablePointCheck = false;
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);
      if (this.initialHit || !this.requireInitial) {
        dragging.setIgnoreMove(false);
        // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
        this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };
    this.handleDragStart = ev => {
      this.emitter.trigger('dragstart', ev);
      this.handleMove(ev, true); // force = fire even if initially null
    };

    this.handleDragMove = ev => {
      this.emitter.trigger('dragmove', ev);
      this.handleMove(ev);
    };
    this.handlePointerUp = ev => {
      this.releaseHits();
      this.emitter.trigger('pointerup', ev);
    };
    this.handleDragEnd = ev => {
      if (this.movingHit) {
        this.emitter.trigger('hitupdate', null, true, ev);
      }
      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger('dragend', ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(ev) {
    let origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;
    if (subjectEl instanceof HTMLElement) {
      // i.e. not a Document/ShadowRoot
      subjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(subjectEl);
      adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aG)(adjustedPoint, subjectRect);
    }
    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aE)(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aH)(slicedSubjectRect);
        }
      }
      this.coordAdjust = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aI)(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  }
  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  }
  prepareHits() {
    this.offsetTrackers = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.droppableStore, interactionSettings => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }
  releaseHits() {
    let {
      offsetTrackers
    } = this;
    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  }
  queryHitForOffset(offsetLeft, offsetTop) {
    let {
      droppableStore,
      offsetTrackers
    } = this;
    let bestHit = null;
    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];
      if (offsetTracker &&
      // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let {
          origRect
        } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;
        if (
        // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit &&
          // make sure the hit is within activeRange, meaning it's not a dead cell
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b9)(hit.dateProfile.activeRange, hit.dateSpan.range) && (
          // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          this.disablePointCheck || offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
          // add-back origins to get coordinate relative to top-left of window viewport
          positionLeft + originLeft - window.scrollX, positionTop + originTop - window.scrollY))) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            // TODO: better way to re-orient rectangle
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  }
}
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bf)(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.datePointTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
class DateClicking extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    this.handlePointerDown = pev => {
      let {
        dragging
      } = this;
      let downEl = pev.origEvent.target;
      // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    };
    // won't even fire if moving was ignored
    this.handleDragEnd = ev => {
      let {
        component
      } = this;
      let {
        pointer
      } = this.dragging;
      if (!pointer.wasTouchScroll) {
        let {
          initialHit,
          finalHit
        } = this.hitDragging;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let {
            context
          } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger('dateClick', arg);
        }
      }
    };
    // we DO want to watch pointer moves because otherwise finalHit won't get populated
    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
class DateSelecting extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;
    this.handlePointerDown = ev => {
      let {
        component,
        dragging
      } = this;
      let {
        options
      } = component.context;
      let canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target);
      // don't bother to watch expensive moves if component won't do selection
      dragging.setIgnoreMove(!canSelect);
      // if touch, require user to hold down
      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };
    this.handleDragStart = ev => {
      this.component.context.calendarApi.unselect(ev); // unselect previous selections
    };

    this.handleHitUpdate = (hit, isFinal) => {
      let {
        context
      } = this.component;
      let dragSelection = null;
      let isInvalid = false;
      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b_)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };

    this.handlePointerUp = pev => {
      if (this.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cu)(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };
    let {
      component
    } = settings;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function getComponentTouchDelay$1(component) {
  let {
    options
  } = component.context;
  let delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.av);
  let props = {};
  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      Object.assign(props, res);
    }
  }
  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}
let EventDragging = /*#__PURE__*/(() => {
  class EventDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
    constructor(settings) {
      super(settings);
      // internal state
      this.subjectEl = null;
      this.subjectSeg = null; // the seg being selected/dragged
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null; // the events being dragged
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
      this.handlePointerDown = ev => {
        let origTarget = ev.origEvent.target;
        let {
          component,
          dragging
        } = this;
        let {
          mirror
        } = dragging;
        let {
          options
        } = component.context;
        let initialContext = component.context;
        this.subjectEl = ev.subjectEl;
        let subjectSeg = this.subjectSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(ev.subjectEl);
        let eventRange = this.eventRange = subjectSeg.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(initialContext.getCurrentData().eventStore, eventInstanceId);
        dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
        dragging.delay =
        // only do a touch delay if touch and this event hasn't been selected yet
        ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;
        if (options.fixedMirrorParent) {
          mirror.parentNode = options.fixedMirrorParent;
        } else {
          mirror.parentNode = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc');
        }
        mirror.revertDuration = options.dragRevertDuration;
        let isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc-event-resizer'); // NOT on a resizer
        dragging.setIgnoreMove(!isValid);
        // disable dragging for elements that are resizable (ie, selectable)
        // but are not draggable
        this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
      };
      this.handleDragStart = ev => {
        let initialContext = this.component.context;
        let eventRange = this.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        if (ev.isTouch) {
          // need to select a different event?
          if (eventInstanceId !== this.component.props.eventSelection) {
            initialContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId
            });
          }
        } else {
          // if now using mouse, but was previous touch interaction, clear selected event
          initialContext.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
        if (this.isDragging) {
          initialContext.calendarApi.unselect(ev); // unselect *date* selection
          initialContext.emitter.trigger('eventDragStart', {
            el: this.subjectEl,
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventRange.def, eventRange.instance),
            jsEvent: ev.origEvent,
            view: initialContext.viewApi
          });
        }
      };
      this.handleHitUpdate = (hit, isFinal) => {
        if (!this.isDragging) {
          return;
        }
        let relevantEvents = this.relevantEvents;
        let initialHit = this.hitDragging.initialHit;
        let initialContext = this.component.context;
        // states based on new hit
        let receivingContext = null;
        let mutation = null;
        let mutatedRelevantEvents = null;
        let isInvalid = false;
        let interaction = {
          affectedEvents: relevantEvents,
          mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
          isEvent: true
        };
        if (hit) {
          receivingContext = hit.context;
          let receivingOptions = receivingContext.options;
          if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
            mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
            if (mutation) {
              mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
              interaction.mutatedEvents = mutatedRelevantEvents;
              if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext)) {
                isInvalid = true;
                mutation = null;
                mutatedRelevantEvents = null;
                interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
              }
            }
          } else {
            receivingContext = null;
          }
        }
        this.displayDrag(receivingContext, interaction);
        if (!isInvalid) {
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
        } else {
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
        }
        if (!isFinal) {
          if (initialContext === receivingContext &&
          // TODO: write test for this
          isHitsEqual(initialHit, hit)) {
            mutation = null;
          }
          this.dragging.setMirrorNeedsRevert(!mutation);
          // render the mirror if no already-rendered mirror
          // TODO: wish we could somehow wait for dispatch to guarantee render
          this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror'));
          // assign states based on new hit
          this.receivingContext = receivingContext;
          this.validMutation = mutation;
          this.mutatedRelevantEvents = mutatedRelevantEvents;
        }
      };
      this.handlePointerUp = () => {
        if (!this.isDragging) {
          this.cleanup(); // because handleDragEnd won't fire
        }
      };

      this.handleDragEnd = ev => {
        if (this.isDragging) {
          let initialContext = this.component.context;
          let initialView = initialContext.viewApi;
          let {
            receivingContext,
            validMutation
          } = this;
          let eventDef = this.eventRange.def;
          let eventInstance = this.eventRange.instance;
          let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventDef, eventInstance);
          let relevantEvents = this.relevantEvents;
          let mutatedRelevantEvents = this.mutatedRelevantEvents;
          let {
            finalHit
          } = this.hitDragging;
          this.clearDrag(); // must happen after revert animation
          initialContext.emitter.trigger('eventDragStop', {
            el: this.subjectEl,
            event: eventApi,
            jsEvent: ev.origEvent,
            view: initialView
          });
          if (validMutation) {
            // dropped within same calendar
            if (receivingContext === initialContext) {
              let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
              initialContext.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: mutatedRelevantEvents
              });
              let eventChangeArg = {
                oldEvent: eventApi,
                event: updatedEventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents // the pre-change data
                  });
                }
              };

              let transformed = {};
              for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                Object.assign(transformed, transformer(validMutation, initialContext));
              }
              initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
                el: ev.subjectEl,
                delta: validMutation.datesDelta,
                jsEvent: ev.origEvent,
                view: initialView
              }));
              initialContext.emitter.trigger('eventChange', eventChangeArg);
              // dropped in different calendar
            } else if (receivingContext) {
              let eventRemoveArg = {
                event: eventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(relevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: relevantEvents
                  });
                }
              };
              initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), {
                draggedEl: ev.subjectEl,
                view: initialView
              }));
              initialContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: relevantEvents
              });
              initialContext.emitter.trigger('eventRemove', eventRemoveArg);
              let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
              let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
              let addedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, addedEventDef, addedEventInstance);
              receivingContext.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: mutatedRelevantEvents
              });
              let eventAddArg = {
                event: addedEventApi,
                relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, receivingContext, addedEventInstance),
                revert() {
                  receivingContext.dispatch({
                    type: 'REMOVE_EVENTS',
                    eventStore: mutatedRelevantEvents
                  });
                }
              };
              receivingContext.emitter.trigger('eventAdd', eventAddArg);
              if (ev.isTouch) {
                receivingContext.dispatch({
                  type: 'SELECT_EVENT',
                  eventInstanceId: eventInstance.instanceId
                });
              }
              receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
                draggedEl: ev.subjectEl,
                jsEvent: ev.origEvent,
                view: finalHit.context.viewApi
              }));
              receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), {
                draggedEl: ev.subjectEl,
                view: finalHit.context.viewApi
              }));
            }
          } else {
            initialContext.emitter.trigger('_noEventDrop');
          }
        }
        this.cleanup();
      };
      let {
        component
      } = this;
      let {
        options
      } = component.context;
      let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
      dragging.pointer.selector = EventDragging.SELECTOR;
      dragging.touchScrollAllowed = false;
      dragging.autoScroller.isEnabled = options.dragScroll;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
      hitDragging.useSubjectCenter = settings.useEventCenter;
      hitDragging.emitter.on('pointerdown', this.handlePointerDown);
      hitDragging.emitter.on('dragstart', this.handleDragStart);
      hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
      hitDragging.emitter.on('pointerup', this.handlePointerUp);
      hitDragging.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    // render a drag state on the next receivingCalendar
    displayDrag(nextContext, state) {
      let initialContext = this.component.context;
      let prevContext = this.receivingContext;
      // does the previous calendar need to be cleared?
      if (prevContext && prevContext !== nextContext) {
        // does the initial calendar need to be cleared?
        // if so, don't clear all the way. we still need to to hide the affectedEvents
        if (prevContext === initialContext) {
          prevContext.dispatch({
            type: 'SET_EVENT_DRAG',
            state: {
              affectedEvents: state.affectedEvents,
              mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
              isEvent: true
            }
          });
          // completely clear the old calendar if it wasn't the initial
        } else {
          prevContext.dispatch({
            type: 'UNSET_EVENT_DRAG'
          });
        }
      }
      if (nextContext) {
        nextContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state
        });
      }
    }
    clearDrag() {
      let initialCalendar = this.component.context;
      let {
        receivingContext
      } = this;
      if (receivingContext) {
        receivingContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
      // the initial calendar might have an dummy drag state from displayDrag
      if (initialCalendar !== receivingContext) {
        initialCalendar.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }
    cleanup() {
      this.subjectSeg = null;
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null;
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
    }
  }
  // TODO: test this in IE11
  // QUESTION: why do we need it on the resizable???
  EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  return EventDragging;
})();
function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(eventInstanceStart);
    } else {
      // Moving from allDate->timed
      // Doesn't matter where on the event the drag began, mutate the event's start-date to date1
      date0 = eventInstanceStart;
    }
  }
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }
  let mutation = {
    datesDelta: delta,
    standardProps
  };
  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  let {
    options
  } = component.context;
  let delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
class EventResizing extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    // internal state
    this.draggingSegEl = null;
    this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = ev => {
      let {
        component
      } = this;
      let segEl = this.querySegEl(ev);
      let seg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component.context.options.eventDragMinDistance;
      // if touch, need to be working with a selected event
      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    this.handleDragStart = ev => {
      let {
        context
      } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        context
      } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: true
      };
      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handleDragEnd = ev => {
      let {
        context
      } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (this.validMutation) {
        let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, context, eventInstance),
          revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events
            });
          }
        };

        context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), {
          el: this.draggingSegEl,
          startDelta: this.validMutation.startDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          endDelta: this.validMutation.endDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      }
      // reset all internal state
      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null;
      // okay to keep eventInstance around. useful to set it in handlePointerDown
    };

    let {
      component
    } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(ev) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.subjectEl, '.fc-event');
  }
}
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }
  return null;
}
class UnselectAuto {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = selectInfo => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = pev => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aR)(pev.origEvent);
      this.matchesCancel = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, unselectCancel);
      this.matchesEvent = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };

    this.onDocumentPointerUp = pev => {
      let {
        context
      } = this;
      let {
        documentPointer
      } = this;
      let calendarState = context.getCurrentData();
      // touch-scrolling should never unfocus any type of selection
      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection &&
        // an existing date selection?
        !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          let unselectAuto = context.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection &&
        // an existing event selected?
        !this.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }
      this.isRecentPointerDateSelect = false;
    };
    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */
    context.emitter.on('select', this.onSelect);
  }
  destroy() {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  }
}
const OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};
const LISTENER_REFINERS = {
  dateClick: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDrop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResize: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  drop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventReceive: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventLeave: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
class ExternalElementDragging {
  constructor(dragging, suppliedDragMeta) {
    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false
    this.suppliedDragMeta = null;
    this.dragMeta = null;
    this.handleDragStart = ev => {
      this.dragMeta = this.buildDragMeta(ev.subjectEl);
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        dragging
      } = this.hitDragging;
      let receivingContext = null;
      let droppableEvent = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: this.dragMeta.create
      };
      if (hit) {
        receivingContext = hit.context;
        if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          isInvalid = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext);
          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
            droppableEvent = null;
          }
        }
      }
      this.displayDrag(receivingContext, interaction);
      // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render
      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        this.receivingContext = receivingContext;
        this.droppableEvent = droppableEvent;
      }
    };
    this.handleDragEnd = pev => {
      let {
        receivingContext,
        droppableEvent
      } = this;
      this.clearDrag();
      if (receivingContext && droppableEvent) {
        let finalHit = this.hitDragging.finalHit;
        let finalView = finalHit.context.viewApi;
        let dragMeta = this.dragMeta;
        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));
        if (dragMeta.create) {
          let addingEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents
          });
          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          }
          // signal that an external event landed
          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }
      this.receivingContext = null;
      this.droppableEvent = null;
    };
    let hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
    hitDragging.requireInitial = false; // will start outside of a component
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }
  buildDragMeta(subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta);
    }
    if (typeof this.suppliedDragMeta === 'function') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta(subjectEl));
    }
    return getDragMetaFromEl(subjectEl);
  }
  displayDrag(nextContext, state) {
    let prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }
  clearDrag() {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }
  canDropElOnCalendar(el, receivingContext) {
    let dropAccept = receivingContext.options.dropAccept;
    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }
    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aQ)(el, dropAccept));
    }
    return true;
  }
}
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
  let defProps = Object.assign({}, dragMeta.leftoverProps);
  for (let transform of context.pluginHooks.externalDefTransforms) {
    Object.assign(defProps, transform(dateSpan, dragMeta));
  }
  let {
    refined,
    extra
  } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(defProps, context);
  let def = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration),
  // hasEnd
  context);
  let start = dateSpan.range.start;
  // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time
  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }
  let end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cv)(dateSpan.allDay, start, context);
  let instance = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aj)(def.defId, {
    start,
    end
  });
  return {
    def,
    instance
  };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
  let str = getEmbeddedElData(el, 'event');
  let obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(obj);
}
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
  let prefix = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix;
  let prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
class ExternalDraggable {
  constructor(el, settings = {}) {
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      let {
        minDistance,
        longPressDelay
      } = this.settings;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.eventDragMinDistance;
      dragging.delay = ev.isTouch ?
      // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.longPressDelay : 0;
    };
    this.handleDragStart = ev => {
      if (ev.isTouch && this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };
    this.settings = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;
    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }
    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }

    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  destroy() {
    this.dragging.destroy();
  }
}

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
class InferredElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH {
  constructor(containerEl) {
    super(containerEl);
    this.shouldIgnoreMove = false;
    this.mirrorSelector = '';
    this.currentMirrorEl = null;
    this.handlePointerDown = ev => {
      this.emitter.trigger('pointerdown', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        this.emitter.trigger('dragstart', ev);
      }
    };
    this.handlePointerMove = ev => {
      if (!this.shouldIgnoreMove) {
        this.emitter.trigger('dragmove', ev);
      }
    };
    this.handlePointerUp = ev => {
      this.emitter.trigger('pointerup', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        this.emitter.trigger('dragend', ev);
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.handlePointerDown);
    pointer.emitter.on('pointermove', this.handlePointerMove);
    pointer.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.pointer.destroy();
  }
  setIgnoreMove(bool) {
    this.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      let mirrorEl = this.mirrorSelector
      // TODO: somehow query FullCalendars WITHIN shadow-roots
      ? document.querySelector(this.mirrorSelector) : null;
      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  }
}

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
class ThirdPartyDraggable {
  constructor(containerOrSettings, settings) {
    let containerEl = document;
    if (
    // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }
    let dragging = this.dragging = new InferredElementDragging(containerEl);
    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }
    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }
    let externalDragging = new ExternalElementDragging(dragging, settings.eventData);
    // The hit-detection system requires that the dnd-mirror-element be pointer-events:none,
    // but this can't be guaranteed for third-party draggables, so disable
    externalDragging.hitDragging.disablePointCheck = true;
  }
  destroy() {
    this.dragging.destroy();
  }
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/interaction',
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});


/***/ }),

/***/ 15594:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 27882);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal.js */ 47284);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 42711);




const OPTION_REFINERS = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
  // noEventsText is defined in base options
};

function createFalsableFormatter(input) {
  return input === false ? null : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(input);
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/list',
  optionRefiners: OPTION_REFINERS,
  views: {
    list: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_2__.ListView,
      buttonTextKey: 'list',
      listDayFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      } // like "January 1, 2016"
    },

    listDay: {
      type: 'list',
      duration: {
        days: 1
      },
      listDayFormat: {
        weekday: 'long'
      } // day-of-week is all we need. full date is probably in headerToolbar
    },

    listWeek: {
      type: 'list',
      duration: {
        weeks: 1
      },
      listDayFormat: {
        weekday: 'long'
      },
      listDaySideFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    listMonth: {
      type: 'list',
      duration: {
        month: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    },

    listYear: {
      type: 'list',
      duration: {
        year: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    }
  }
});



/***/ }),

/***/ 47284:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/list/internal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 42711);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 24354);


class ListViewHeaderRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.state = {
      textId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
  }
  render() {
    let {
      theme,
      dateEnv,
      options,
      viewApi
    } = this.context;
    let {
      cellId,
      dayDate,
      todayRange
    } = this.props;
    let {
      textId
    } = this.state;
    let dayMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(dayDate, todayRange);
    // will ever be falsy?
    let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
    // will ever be falsy? also, BAD NAME "alt"
    let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
    let renderProps = Object.assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text,
      sideText,
      navLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate),
      sideNavLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate, 'day', false)
    }, dayMeta);
    // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "tr",
      elClasses: ['fc-list-day', ...(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aZ)(dayMeta, theme)],
      elAttrs: {
        'data-date': (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDate)
      },
      renderProps: renderProps,
      generatorName: "dayHeaderContent",
      customGenerator: options.dayHeaderContent,
      defaultGenerator: renderInnerContent,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, InnerContent =>
    // TODO: force-hide top border based on :first-child
    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
      scope: "colgroup",
      colSpan: 3,
      id: cellId,
      "aria-labelledby": textId
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-day-cushion', theme.getClass('tableCellShaded')]
    })));
  }
}
function renderInnerContent(props) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.text && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    id: props.textId,
    className: "fc-list-day-text"
  }, props.navLinkAttrs), props.text), props.sideText && /* not keyboard tabbable */(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    "aria-hidden": true,
    className: "fc-list-day-side-text"
  }, props.sideNavLinkAttrs), props.sideText));
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
});
class ListViewEventRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg,
      timeHeaderId,
      eventHeaderId,
      dateHeaderId
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, Object.assign({}, props, {
      elTag: "tr",
      elClasses: ['fc-list-event', seg.eventRange.def.url && 'fc-event-forced-url'],
      defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */,
      seg: seg,
      timeText: "",
      disableDragging: true,
      disableResizing: true
    }), (InnerContent, eventContentArg) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-list-event-graphic"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "fc-list-event-dot",
      style: {
        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
      }
    })), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "td",
      elClasses: ['fc-list-event-title'],
      elAttrs: {
        headers: `${eventHeaderId} ${dateHeaderId}`
      }
    })));
  }
}
function renderEventInnerContent(seg, context) {
  let interactiveAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU)(seg, context);
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  let {
    options
  } = context;
  if (options.displayEventTime !== false) {
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    let doAllDay = false;
    let timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.az)(seg.eventRange.range)) {
      // TODO: use (!isStart || !isEnd) instead?
      if (seg.isStart) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context);
    }
    if (doAllDay) {
      let renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "td",
        elClasses: ['fc-list-event-time'],
        elAttrs: {
          headers: `${timeHeaderId} ${dateHeaderId}`
        },
        renderProps: renderProps,
        generatorName: "allDayContent",
        customGenerator: options.allDayContent,
        defaultGenerator: renderAllDayInner,
        classNameGenerator: options.allDayClassNames,
        didMount: options.allDayDidMount,
        willUnmount: options.allDayWillUnmount
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      className: "fc-list-event-time"
    }, timeText);
  }
  return null;
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
class ListView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.computeDateVars = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(computeDateVars);
    this.eventStoreToSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this._eventStoreToSegs);
    this.state = {
      timeHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      eventHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      dateHeaderIdRoot: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    this.setRootEl = rootEl => {
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dayDates,
      dayRanges
    } = this.computeDateVars(props.dateProfile);
    let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.setRootEl,
      elClasses: ['fc-list', context.theme.getClass('table'), context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : ''],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd, {
      liquid: !props.isHeightAuto,
      overflowX: props.isHeightAuto ? 'visible' : 'hidden',
      overflowY: props.isHeightAuto ? 'visible' : 'auto'
    }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage()));
  }
  renderEmptyMessage() {
    let {
      options,
      viewApi
    } = this.context;
    let renderProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "div",
      elClasses: ['fc-list-empty'],
      renderProps: renderProps,
      generatorName: "noEventsContent",
      customGenerator: options.noEventsContent,
      defaultGenerator: renderNoEventsInner,
      classNameGenerator: options.noEventsClassNames,
      didMount: options.noEventsDidMount,
      willUnmount: options.noEventsWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-empty-cushion']
    }));
  }
  renderSegList(allSegs, dayDates) {
    let {
      theme,
      options
    } = this.context;
    let {
      timeHeaderId,
      eventHeaderId,
      dateHeaderIdRoot
    } = this.state;
    let segsByDay = groupSegsByDay(allSegs); // sparse array
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: "day"
    }, (nowDate, todayRange) => {
      let innerNodes = [];
      for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        let daySegs = segsByDay[dayIndex];
        if (daySegs) {
          // sparse array, so might be undefined
          let dayStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDates[dayIndex]);
          let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
          // append a day header
          innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, {
            key: dayStr,
            cellId: dateHeaderId,
            dayDate: dayDates[dayIndex],
            todayRange: todayRange
          }));
          daySegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(daySegs, options.eventOrder);
          for (let seg of daySegs) {
            innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, Object.assign({
              key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */,
              seg: seg,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId: timeHeaderId,
              eventHeaderId: eventHeaderId,
              dateHeaderId: dateHeaderId
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
          }
        }
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
        className: 'fc-list-table ' + theme.getClass('table')
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: timeHeaderId
      }, options.timeHint), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        "aria-hidden": true
      }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: eventHeaderId
      }, options.eventHint))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes));
    });
  }
  _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.af)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  }
  eventRangesToSegs(eventRanges, dayRanges) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  }
  eventRangeToSegs(eventRange, dayRanges) {
    let {
      dateEnv
    } = this.context;
    let {
      nextDayThreshold
    } = this.context.options;
    let range = eventRange.range;
    let allDay = eventRange.def.allDay;
    let dayIndex;
    let segRange;
    let seg;
    let segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        // detect when range won't go fully into the next day,
        // and mutate the latest seg to the be the end.
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  }
}
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  let dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(dateProfile.renderRange.start);
  let viewEnd = dateProfile.renderRange.end;
  let dayDates = [];
  let dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1)
    });
    dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1);
  }
  return {
    dayDates,
    dayRanges
  };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
  let segsByDay = []; // sparse array
  let i;
  let seg;
  for (i = 0; i < segs.length; i += 1) {
    seg = segs[i];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ }),

/***/ 21413:
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 27882);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 76563);





const OPTION_REFINERS = {
  allDaySlot: Boolean
};
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/timegrid',
  initialView: 'timeGridWeek',
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: '00:30:00',
      slotEventOverlap: true // a bad name. confused with overlap/constraint system
    },

    timeGridDay: {
      type: 'timeGrid',
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: 'timeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});


/***/ }),

/***/ 76563:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/internal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayTimeCols: () => (/* binding */ DayTimeCols),
/* harmony export */   DayTimeColsSlicer: () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   DayTimeColsView: () => (/* binding */ DayTimeColsView),
/* harmony export */   TimeCols: () => (/* binding */ TimeCols),
/* harmony export */   TimeColsSlatsCoords: () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   TimeColsView: () => (/* binding */ TimeColsView),
/* harmony export */   buildDayRanges: () => (/* binding */ buildDayRanges),
/* harmony export */   buildSlatMetas: () => (/* binding */ buildSlatMetas),
/* harmony export */   buildTimeColsModel: () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 42711);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 24354);
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid/internal.js */ 96700);



var css_248z = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);
class AllDaySplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(dateSpan) {
    if (dateSpan.allDay) {
      return ['allDay'];
    }
    return ['timed'];
  }
  getKeysForEventDef(eventDef) {
    if (!eventDef.allDay) {
      return ['timed'];
    }
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP)(eventDef)) {
      return ['timed', 'allDay'];
    }
    return ['allDay'];
  }
}
const DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
});
function TimeColsAxisCell(props) {
  let classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-label', props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'];
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, context => {
    if (!props.isLabeled) {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
        className: classNames.join(' '),
        "data-time": props.isoTimeStr
      });
    }
    let {
      dateEnv,
      options,
      viewApi
    } = context;
    let labelFormat =
    // TODO: fully pre-parse
    options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat[0]) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat);
    let renderProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "td",
      elClasses: classNames,
      elAttrs: {
        'data-time': props.isoTimeStr
      },
      renderProps: renderProps,
      generatorName: "slotLabelContent",
      customGenerator: options.slotLabelContent,
      defaultGenerator: renderInnerContent,
      classNameGenerator: options.slotLabelClassNames,
      didMount: options.slotLabelDidMount,
      willUnmount: options.slotLabelWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion']
    })));
  });
}
function renderInnerContent(props) {
  return props.text;
}
class TimeBodyAxis extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    return this.props.slatMetas.map(slatMeta => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      key: slatMeta.key
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta))));
  }
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  week: 'short'
});
const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
class TimeColsView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.scrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      slatCoords: null
    };
    this.handleScrollTopRequest = scrollTop => {
      let scrollerEl = this.scrollerElRef.current;
      if (scrollerEl) {
        // TODO: not sure how this could ever be null. weirdness with the reducer
        scrollerEl.scrollTop = scrollTop;
      }
    };
    /* Header Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    this.renderHeadAxis = (rowKey, frameHeight = '') => {
      let {
        options
      } = this.context;
      let {
        dateProfile
      } = this.props;
      let range = dateProfile.renderRange;
      let dayCnt = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bl)(range.start, range.end);
      // only do in day views (to avoid doing in week views that dont need it)
      let navLinkAttrs = dayCnt === 1 ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, range.start, 'week') : {};
      if (options.weekNumbers && rowKey === 'day') {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, {
          elTag: "th",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', 'fc-timegrid-axis-frame-liquid'].join(' '),
          style: {
            height: frameHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "a",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner'],
          elAttrs: navLinkAttrs
        })));
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        "aria-hidden": true,
        className: "fc-timegrid-axis"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-axis-frame",
        style: {
          height: frameHeight
        }
      }));
    };
    /* Table Component Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
    // but DayGrid still needs to have classNames on inner elements in order to measure.
    this.renderTableRowAxis = rowHeight => {
      let {
        options,
        viewApi
      } = this.context;
      let renderProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (
        // TODO: make reusable hook. used in list view too
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
          elTag: "td",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          renderProps: renderProps,
          generatorName: "allDayContent",
          customGenerator: options.allDayContent,
          defaultGenerator: renderAllDayInner,
          classNameGenerator: options.allDayClassNames,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''].join(' '),
          style: {
            height: rowHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "span",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner']
        })))
      );
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
    let {
      context,
      props
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        chunk: {
          content: allDayContent
        }
      });
      sections.push({
        type: 'body',
        key: 'all-day-divider',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [{
        width: 'shrink'
      }],
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      context,
      props
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: arg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          content: allDayContent
        }]
      });
      sections.push({
        key: 'all-day-divider',
        type: 'body',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          colSpan: 2,
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    let isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [{
        key: 'axis',
        content: arg =>
        // TODO: make this now-indicator arrow more DRY with TimeColsContent
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-axis-chunk"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
          "aria-hidden": true,
          style: {
            height: arg.expandRows ? arg.clientHeight : ''
          }
        }, arg.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, {
          slatMetas: slatMetas
        }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-now-indicator-container"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
          unit: isNowIndicator ? 'minute' : 'day' /* hacky */
        }, nowDate => {
          let nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate); // might return void
          if (typeof nowIndicatorTop === 'number') {
            return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
              elClasses: ['fc-timegrid-now-indicator-arrow'],
              elStyle: {
                top: nowIndicatorTop
              },
              isAxis: true,
              date: nowDate
            });
          }
          return null;
        })))
      }, {
        key: 'cols',
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        key: 'footer',
        type: 'footer',
        isSticky: true,
        chunks: [{
          key: 'axis',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }, {
          key: 'cols',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: false,
      colGroups: [{
        width: 'shrink',
        cols: [{
          width: 'shrink'
        }]
      }, {
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let {
      dayMaxEvents,
      dayMaxEventRows
    } = this.context.options;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
      // is auto?
      dayMaxEvents = undefined;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
    }

    return {
      dayMaxEvents,
      dayMaxEventRows
    };
  }
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
class TimeColsSlatsCoords {
  constructor(positions, dateProfile, slotDuration) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  safeComputeTop(date) {
    let {
      dateProfile
    } = this;
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.currentRange, date)) {
      let startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
      let timeMs = date.valueOf() - startOfDayDate.valueOf();
      if (timeMs >= (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime) && timeMs < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMaxTime)) {
        return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(timeMs));
      }
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(when);
    }
    return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(when.valueOf() - startOfDayDate.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(duration) {
    let {
      positions,
      dateProfile
    } = this;
    let len = positions.els.length;
    // floating-point value of # of slots covered
    let slatCoverage = (duration.milliseconds - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime)) / (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(this.slotDuration);
    let slatIndex;
    let slatRemainder;
    // compute a floating-point number for how many slats should be progressed through.
    // from 0 to number of slats (inclusive)
    // constrained because slotMinTime/slotMaxTime might be customized.
    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage);
    // an integer index of the furthest whole slat
    // from 0 to number slats (*exclusive*, so len-1)
    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1);
    // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
    // could be 1.0 if slatCoverage is covering *all* the slots
    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  }
}
class TimeColsSlatsBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      slatElRefs
    } = props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map((slatMeta, i) => {
      let renderProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
        key: slatMeta.key,
        ref: slatElRefs.createRef(slatMeta.key)
      }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "td",
        elClasses: ['fc-timegrid-slot', 'fc-timegrid-slot-lane', !slatMeta.isLabeled && 'fc-timegrid-slot-minor'],
        elAttrs: {
          'data-time': slatMeta.isoTimeStr
        },
        renderProps: renderProps,
        generatorName: "slotLaneContent",
        customGenerator: options.slotLaneContent,
        classNameGenerator: options.slotLaneClassNames,
        didMount: options.slotLaneDidMount,
        willUnmount: options.slotLaneWillUnmount
      }));
    }));
  }
}

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
class TimeColsSlats extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.slatElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.rootElRef,
      className: "fc-timegrid-slots"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      "aria-hidden": true,
      className: context.theme.getClass('table'),
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth,
        height: props.minHeight
      }
    }, props.tableColGroupNode /* relies on there only being a single <col> for the axis */, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, {
      slatElRefs: this.slatElRefs,
      axis: props.axis,
      slatMetas: props.slatMetas
    })));
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  }
  updateSizing() {
    let {
      context,
      props
    } = this;
    if (props.onCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      let rootEl = this.rootElRef.current;
      if (rootEl.offsetHeight) {
        // not hidden by css
        props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
      }
    }
  }
}
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(slatMeta => elMap[slatMeta.key]);
}
function splitSegsByCol(segs, colCnt) {
  let segsByCol = [];
  let i;
  for (i = 0; i < colCnt; i += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i = 0; i < segs.length; i += 1) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.col].segs.push(seg);
    }
  }
  return byRow;
}
class TimeColMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cr, {
      elClasses: ['fc-timegrid-more-link'],
      elStyle: {
        top: props.top,
        bottom: props.bottom
      },
      allDayDate: null,
      moreCnt: props.hiddenSegs.length,
      allSegs: props.hiddenSegs,
      hiddenSegs: props.hiddenSegs,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props),
      defaultGenerator: renderMoreLinkInner,
      forceTimed: true
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky']
    }));
  }
}
function renderMoreLinkInner(props) {
  return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  let hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bE)(hiddenEntries);
  let web = buildWeb(hierarchy);
  web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
  let segRects = webToRects(web);
  return {
    segRects,
    hiddenGroups
  };
}
function buildWeb(hierarchy) {
  const {
    entriesByLevel
  } = hierarchy;
  const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
    let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    let nextLevelRes = buildNodes(siblingRange, buildNode);
    let entry = entriesByLevel[level][lateral];
    return [Object.assign(Object.assign({}, entry), {
      nextLevelNodes: nextLevelRes[0]
    }), entry.thickness + nextLevelRes[1] // the pressure builds
    ];
  });

  return buildNodes(entriesByLevel.length ? {
    level: 0,
    lateralStart: 0,
    lateralEnd: entriesByLevel[0].length
  } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  let {
    level,
    lateralStart,
    lateralEnd
  } = siblingRange;
  let lateral = lateralStart;
  let pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [pairs.map(extractNode), pairs[0][1] // first item's pressure
  ];
}

function cmpDescPressures(a, b) {
  return b[1] - a[1];
}
function extractNode(a) {
  return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  let {
    levelCoords,
    entriesByLevel
  } = hierarchy;
  let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  let levelCnt = levelCoords.length;
  let level = subjectLevel;
  // skip past levels that are too high up
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1); // do nothing
  for (; level < levelCnt; level += 1) {
    let entries = entriesByLevel[level];
    let entry;
    let searchIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bD)(entries, subjectEntry.span.start, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bC);
    let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
    let lateralEnd = lateralStart;
    while (
    // loop through entries that horizontally intersect
    (entry = entries[lateralEnd]) &&
    // but not past the whole seg list
    entry.span.start < subjectEntry.span.end) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return {
        level,
        lateralStart,
        lateralEnd
      };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  const stretchNode = cacheable((node, startCoord, prevThickness) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node), (node, startCoord, prevThickness) => {
    let {
      nextLevelNodes,
      thickness
    } = node;
    let allThickness = thickness + prevThickness;
    let thicknessFraction = thickness / allThickness;
    let endCoord;
    let newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      for (let childNode of nextLevelNodes) {
        if (endCoord === undefined) {
          let res = stretchNode(childNode, startCoord, allThickness);
          endCoord = res[0];
          newChildren.push(res[1]);
        } else {
          let res = stretchNode(childNode, endCoord, 0);
          newChildren.push(res[1]);
        }
      }
    }
    let newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, Object.assign(Object.assign({}, node), {
      thickness: newThickness,
      nextLevelNodes: newChildren
    })];
  });
  return topLevelNodes.map(node => stretchNode(node, 0, 0)[1]);
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
  let rects = [];
  const processNode = cacheable((node, levelCoord, stackDepth) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node), (node, levelCoord, stackDepth) => {
    let rect = Object.assign(Object.assign({}, node), {
      levelCoord,
      stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    let stackForward = 0;
    for (let node of nodes) {
      stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
  const cache = {};
  return (...args) => {
    let key = keyFunc(...args);
    return key in cache ? cache[key] : cache[key] = workFunc(...args);
  };
}
function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
  let vcoords = [];
  if (slatCoords) {
    for (let i = 0; i < segs.length; i += 1) {
      let seg = segs[i];
      let spanStart = slatCoords.computeDateTop(seg.start, colDate);
      let spanEnd = Math.max(spanStart + (eventMinHeight || 0),
      // :(
      slatCoords.computeDateTop(seg.end, colDate));
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd) //
      });
    }
  }

  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords,
// might not have for every seg
eventOrderStrict, eventMaxStack) {
  let segInputs = [];
  let dumbSegs = []; // segs without coords
  for (let i = 0; i < segs.length; i += 1) {
    let vcoords = segVCoords[i];
    if (vcoords) {
      segInputs.push({
        index: i,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i]);
    }
  }
  let {
    segRects,
    hiddenGroups
  } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
  let segPlacements = [];
  for (let segRect of segRects) {
    segPlacements.push({
      seg: segs[segRect.index],
      rect: segRect
    });
  }
  for (let dumbSeg of dumbSegs) {
    segPlacements.push({
      seg: dumbSeg,
      rect: null
    });
  }
  return {
    segPlacements,
    hiddenGroups
  };
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
});
class TimeColEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj, Object.assign({}, this.props, {
      elClasses: ['fc-timegrid-event', 'fc-v-event', this.props.isShort && 'fc-timegrid-event-short'],
      defaultTimeFormat: DEFAULT_TIME_FORMAT
    }));
  }
}
class TimeCol extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR);
  }
  // TODO: memoize event-placement?
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let isSelectMirror = options.selectMirror;
    let mirrorSegs =
    // yuck
    props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
    let interactionAffectedInstances =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl, {
      elTag: "td",
      elRef: props.elRef,
      elClasses: ['fc-timegrid-col', ...(props.extraClassNames || [])],
      elAttrs: Object.assign({
        role: 'gridcell'
      }, props.extraDataAttrs),
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraRenderProps: props.extraRenderProps
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-bg"
    }, this.renderFillSegs(props.businessHourSegs, 'non-business'), this.renderFillSegs(props.bgEventSegs, 'bg-event'), this.renderFillSegs(props.dateSelectionSegs, 'highlight')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, this.renderNowIndicator(props.nowIndicatorSegs)), (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm)(options) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-col-misc']
    })));
  }
  renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      props
    } = this;
    if (props.forPrint) {
      return renderPlainFgSegs(sortedFgSegs, props);
    }
    return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
  }
  renderPositionedFgSegs(segs,
  // if not mirror, needs to be sorted
  segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      eventMaxStack,
      eventShortHeight,
      eventOrderStrict,
      eventMinHeight
    } = this.context.options;
    let {
      date,
      slatCoords,
      eventSelection,
      todayRange,
      nowDate
    } = this.props;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
    let {
      segPlacements,
      hiddenGroups
    } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderHiddenGroups(hiddenGroups, segs), segPlacements.map(segPlacement => {
      let {
        seg,
        rect
      } = segPlacement;
      let instanceId = seg.eventRange.instance.instanceId;
      let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
      let vStyle = computeSegVStyle(rect && rect.span);
      let hStyle = !isMirror && rect ? this.computeSegHStyle(rect) : {
        left: 0,
        right: 0
      };
      let isInset = Boolean(rect) && rect.stackForward > 0;
      let isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight; // look at other places for this problem
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: 'fc-timegrid-event-harness' + (isInset ? ' fc-timegrid-event-harness-inset' : ''),
        key: forcedKey || instanceId,
        style: Object.assign(Object.assign({
          visibility: isVisible ? '' : 'hidden'
        }, vStyle), hStyle)
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
        seg: seg,
        isDragging: isDragging,
        isResizing: isResizing,
        isDateSelecting: isDateSelecting,
        isSelected: instanceId === eventSelection,
        isShort: isShort
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
    }));
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(hiddenGroups, segs) {
    let {
      extraDateSpan,
      dateProfile,
      todayRange,
      nowDate,
      eventSelection,
      eventDrag,
      eventResize
    } = this.props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(hiddenGroup => {
      let positionCss = computeSegVStyle(hiddenGroup.span);
      let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bw)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cs)(hiddenSegs)),
        hiddenSegs: hiddenSegs,
        top: positionCss.top,
        bottom: positionCss.bottom,
        extraDateSpan: extraDateSpan,
        dateProfile: dateProfile,
        todayRange: todayRange,
        nowDate: nowDate,
        eventSelection: eventSelection,
        eventDrag: eventDrag,
        eventResize: eventResize
      });
    }));
  }
  renderFillSegs(segs, fillType) {
    let {
      props,
      context
    } = this;
    let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
    let children = segVCoords.map((vcoords, i) => {
      let seg = segs[i];
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT)(seg.eventRange),
        className: "fc-timegrid-bg-harness",
        style: computeSegVStyle(vcoords)
      }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp, Object.assign({
        seg: seg
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange, props.nowDate))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co)(fillType));
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
  }
  renderNowIndicator(segs) {
    let {
      slatCoords,
      date
    } = this.props;
    if (!slatCoords) {
      return null;
    }
    return segs.map((seg, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck
    // key doesn't matter. will only ever be one
    , {
      // key doesn't matter. will only ever be one
      key: i,
      elClasses: ['fc-timegrid-now-indicator-line'],
      elStyle: {
        top: slatCoords.computeDateTop(seg.start, date)
      },
      isAxis: false,
      date: date
    }));
  }
  computeSegHStyle(segHCoords) {
    let {
      isRtl,
      options
    } = this.context;
    let shouldOverlap = options.slotEventOverlap;
    let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
    let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
    let left; // amount of space from left edge, a fraction of the total width
    let right; // amount of space from right edge, a fraction of the total width
    if (shouldOverlap) {
      // double the width, but don't go beyond the maximum forward coordinate (1.0)
      farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
    }
    if (isRtl) {
      left = 1 - farCoord;
      right = nearCoord;
    } else {
      left = nearCoord;
      right = 1 - farCoord;
    }
    let props = {
      zIndex: segHCoords.stackDepth + 1,
      left: left * 100 + '%',
      right: right * 100 + '%'
    };
    if (shouldOverlap && !segHCoords.stackForward) {
      // add padding to the edge so that forward stacked events don't cover the resizer's icon
      props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
    }

    return props;
  }
}
function renderPlainFgSegs(sortedFgSegs, {
  todayRange,
  nowDate,
  eventSelection,
  eventDrag,
  eventResize
}) {
  let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(seg => {
    let instanceId = seg.eventRange.instance.instanceId;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      key: instanceId,
      style: {
        visibility: hiddenInstances[instanceId] ? 'hidden' : ''
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
      seg: seg,
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: instanceId === eventSelection,
      isShort: false
    }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return {
      top: '',
      bottom: ''
    };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map(segEntry => allSegs[segEntry.index]);
}
class TimeColsContent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitNowIndicatorSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    let nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate); // might return void
    let colCnt = props.cells.length;
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-cols",
      ref: this.rootElRef
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth
      }
    }, props.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      role: "row"
    }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-timegrid-col fc-timegrid-axis"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, typeof nowIndicatorTop === 'number' && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
      elClasses: ['fc-timegrid-now-indicator-arrow'],
      elStyle: {
        top: nowIndicatorTop
      },
      isAxis: true,
      date: props.nowDate
    })))), props.cells.map((cell, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, {
      key: cell.key,
      elRef: this.cellElRefs.createRef(cell.key),
      dateProfile: props.dateProfile,
      date: cell.date,
      nowDate: props.nowDate,
      todayRange: props.todayRange,
      extraRenderProps: cell.extraRenderProps,
      extraDataAttrs: cell.extraDataAttrs,
      extraClassNames: cell.extraClassNames,
      extraDateSpan: cell.extraDateSpan,
      fgEventSegs: fgEventSegsByRow[i],
      bgEventSegs: bgEventSegsByRow[i],
      businessHourSegs: businessHourSegsByRow[i],
      nowIndicatorSegs: nowIndicatorSegsByRow[i],
      dateSelectionSegs: dateSelectionSegsByRow[i],
      eventDrag: eventDragByRow[i],
      eventResize: eventResizeByRow[i],
      slatCoords: props.slatCoords,
      eventSelection: props.eventSelection,
      forPrint: props.forPrint
    }))))));
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let {
      props
    } = this;
    if (props.onColCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      props.onColCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true,
      // horizontal
      false));
    }
  }
}
function collectCellEls(elMap, cells) {
  return cells.map(cell => elMap[cell.key]);
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
class TimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.processSlotOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(processSlotOptions);
    this.state = {
      slatCoords: null
    };
    this.handleRootEl = el => {
      if (el) {
        this.context.registerInteractiveComponent(this, {
          el,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
    this.handleScrollRequest = request => {
      let {
        onScrollTopRequest
      } = this.props;
      let {
        slatCoords
      } = this.state;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          let top = slatCoords.computeTimeTop(request.time);
          top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
          if (top) {
            top += 1; // to overcome top border that slots beyond the first have. looks better
          }

          onScrollTopRequest(top);
        }
        return true;
      }
      return false;
    };
    this.handleColCoords = colCoords => {
      this.colCoords = colCoords;
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
      if (this.props.onSlatCoords) {
        this.props.onSlatCoords(slatCoords);
      }
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-body",
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, {
      axis: props.axis,
      dateProfile: props.dateProfile,
      slatMetas: props.slatMetas,
      clientWidth: props.clientWidth,
      minHeight: props.expandRows ? props.clientHeight : '',
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */,
      onCoords: this.handleSlatCoords
    }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, {
      cells: props.cells,
      axis: props.axis,
      dateProfile: props.dateProfile,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange,
      nowDate: props.nowDate,
      nowIndicatorSegs: props.nowIndicatorSegs,
      clientWidth: props.clientWidth,
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.tableColGroupNode,
      slatCoords: state.slatCoords,
      onColCoords: this.handleColCoords,
      forPrint: props.forPrint
    }));
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(positionLeft, positionTop) {
    let {
      dateEnv,
      options
    } = this.context;
    let {
      colCoords
    } = this;
    let {
      dateProfile
    } = this.props;
    let {
      slatCoords
    } = this.state;
    let {
      snapDuration,
      snapsPerSlot
    } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
    let colIndex = colCoords.leftToIndex(positionLeft);
    let slatIndex = slatCoords.positions.topToIndex(positionTop);
    if (colIndex != null && slatIndex != null) {
      let cell = this.props.cells[colIndex];
      let slatTop = slatCoords.positions.tops[slatIndex];
      let slatHeight = slatCoords.positions.getHeight(slatIndex);
      let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
      let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
      let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      let dayDate = this.props.cells[colIndex].date;
      let time = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(dateProfile.slotMinTime, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bo)(snapDuration, snapIndex));
      let start = dateEnv.add(dayDate, time);
      let end = dateEnv.add(start, snapDuration);
      return {
        dateProfile,
        dateSpan: Object.assign({
          range: {
            start,
            end
          },
          allDay: false
        }, cell.extraDateSpan),
        dayEl: colCoords.els[colIndex],
        rect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        },
        layer: 0
      };
    }
    return null;
  }
}
function processSlotOptions(slotDuration, snapDurationOverride) {
  let snapDuration = snapDurationOverride || slotDuration;
  let snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
    // TODO: say warning?
  }

  return {
    snapDuration,
    snapsPerSlot
  };
}
class DayTimeColsSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bW {
  sliceRange(range, dayRanges) {
    let segs = [];
    for (let col = 0; col < dayRanges.length; col += 1) {
      let segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[col]);
      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col
        });
      }
    }
    return segs;
  }
}
class DayTimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.buildDayRanges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayRanges);
    this.slicer = new DayTimeColsSlicer();
    this.timeColsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dateProfile,
      dayTableModel
    } = props;
    let {
      nowIndicator,
      nextDayThreshold
    } = context.options;
    let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
    // give it the first row of cells
    // TODO: would move this further down hierarchy, but sliceNowDate needs it
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: nowIndicator ? 'minute' : 'day'
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, Object.assign({
      ref: this.timeColsRef
    }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
      forPrint: props.forPrint,
      axis: props.axis,
      dateProfile: dateProfile,
      slatMetas: props.slatMetas,
      slotDuration: props.slotDuration,
      cells: dayTableModel.cells[0],
      tableColGroupNode: props.tableColGroupNode,
      tableMinWidth: props.tableMinWidth,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      expandRows: props.expandRows,
      nowDate: nowDate,
      nowIndicatorSegs: nowIndicator && this.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges),
      todayRange: todayRange,
      onScrollTopRequest: props.onScrollTopRequest,
      onSlatCoords: props.onSlatCoords
    })));
  }
}
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  let ranges = [];
  for (let date of dayTableModel.headerDates) {
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }
  return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
const STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  let dayStart = new Date(0);
  let slatTime = slotMinTime;
  let slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0);
  let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  let metas = [];
  while ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slatTime) < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slotMaxTime)) {
    let date = dateEnv.add(dayStart, slatTime);
    let isLabeled = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slatIterator, labelInterval) !== null;
    metas.push({
      date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)(date),
      isLabeled
    });
    slatTime = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatTime, slotDuration);
    slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatIterator, slotDuration);
  }
  return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
  let i;
  let labelInterval;
  let slotsPerLabel;
  // find the smallest stock label interval that results in more than one slots-per-label
  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
    labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration; // fall back
}

class DayTimeColsView extends TimeColsView {
  constructor() {
    super(...arguments);
    this.buildTimeColsModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTimeColsModel);
    this.buildSlatMetas = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildSlatMetas);
  }
  render() {
    let {
      options,
      dateEnv,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let {
      dateProfile
    } = props;
    let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    let splitProps = this.allDaySplitter.splitProps(props);
    let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    let {
      dayMinWidth
    } = options;
    let hasAttachedAxis = !dayMinWidth;
    let hasDetachedAxis = dayMinWidth;
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, {
      dates: dayTableModel.headerDates,
      dateProfile: dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });
    let allDayContent = options.allDaySlot !== false && (contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.DayTable, Object.assign({}, splitProps.allDay, {
      dateProfile: dateProfile,
      dayTableModel: dayTableModel,
      nextDayThreshold: options.nextDayThreshold,
      tableMinWidth: contentArg.tableMinWidth,
      colGroupNode: contentArg.tableColGroupNode,
      renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null,
      showWeekNumbers: false,
      expandRows: false,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    }, this.getAllDayMaxEventProps())));
    let timeGridContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, Object.assign({}, splitProps.timed, {
      dayTableModel: dayTableModel,
      dateProfile: dateProfile,
      axis: hasAttachedAxis,
      slotDuration: options.slotDuration,
      slatMetas: slatMetas,
      forPrint: props.forPrint,
      tableColGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      onSlatCoords: this.handleSlatCoords,
      expandRows: contentArg.expandRows,
      onScrollTopRequest: this.handleScrollTopRequest
    }));
    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  }
}
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bV(daySeries, false);
}


/***/ })

}]);