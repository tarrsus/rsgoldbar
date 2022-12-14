(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swap-swap-module"], {
    /***/
    "8r5n":
    /*!*********************************************!*\
      !*** ./src/app/modules/swap/swap.module.ts ***!
      \*********************************************/

    /*! exports provided: SwapModule */

    /***/
    function r5n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwapModule", function () {
        return SwapModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _swap_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./swap-routing.module */
      "tgRS");
      /* harmony import */


      var _swap_swap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./swap/swap.component */
      "U9X/");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var SwapModule = function SwapModule() {
        _classCallCheck(this, SwapModule);
      };

      SwapModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SwapModule
      });
      SwapModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SwapModule_Factory(t) {
          return new (t || SwapModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SwapRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SwapModule, {
          declarations: [_swap_swap_component__WEBPACK_IMPORTED_MODULE_3__["SwapComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SwapRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SwapModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_swap_swap_component__WEBPACK_IMPORTED_MODULE_3__["SwapComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swap_routing_module__WEBPACK_IMPORTED_MODULE_2__["SwapRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "U9X/":
    /*!*****************************************************!*\
      !*** ./src/app/modules/swap/swap/swap.component.ts ***!
      \*****************************************************/

    /*! exports provided: SwapComponent */

    /***/
    function U9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwapComponent", function () {
        return SwapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var mathjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! mathjs */
      "acA/");
      /* harmony import */


      var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/utils */
      "9uVP");
      /* harmony import */


      var src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/stock.service */
      "8T64");
      /* harmony import */


      var src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/order.service */
      "yL2D");
      /* harmony import */


      var src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/watcher.service */
      "Qn77");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SwapComponent = /*#__PURE__*/function () {
        function SwapComponent(stockService, order, watcher) {
          _classCallCheck(this, SwapComponent);

          this.stockService = stockService;
          this.order = order;
          this.watcher = watcher;
          this.type = 'osrs';
          this.rsn = '';
          this.amount = 0;
          this.osrsBuying = 0;
          this.rs3Buying = 0;
          this.getCurrencyConverted = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrencyConverted"];
          this.getCurrencySymbol = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"];
          this.currency = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrentCurrency"])() || 'USD';
          this.rates = {
            rs3: 0,
            osrs: 0
          };
          this.rsn1 = '';
          this.rsn2 = '';
          this.amount1 = 0;
          this.amount2 = 0;
        }

        _createClass(SwapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.watcher.getCurrency().subscribe(function (r) {
              _this.currency = r;
            });
            this.stockService.getStock().subscribe(function (response) {
              if (!Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyOrNull"])(response)) {
                _this.osrsBuying = response.osrs.buying;
                _this.rs3Buying = response.rs3.buying;
              }
            });
            this.order.getRates().subscribe(function (response) {
              _this.rates = response.result;
            });
          }
        }, {
          key: "openLiveChat",
          value: function openLiveChat(flag, type, amount, rsn) {
            if (flag) {
              return;
            }

            var w = window;
            var to = type === 'OSRS' ? 'RS3' : 'OSRS';

            if (type === 'OSRS') {
              Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["sendLiveChatMessage"])("Hello, I would like to swap ".concat(Object(mathjs__WEBPACK_IMPORTED_MODULE_1__["round"])(amount), "M ").concat(type, " for ").concat(amount * this.rates.rs3, " ").concat(to, "\nRSN: ").concat(rsn));
            } else {
              Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["sendLiveChatMessage"])("Hello, I would like to swap ".concat(Object(mathjs__WEBPACK_IMPORTED_MODULE_1__["round"])(amount), "M ").concat(type, " for ").concat(amount * this.rates.osrs, " ").concat(to, "\nRSN: ").concat(rsn));
            }
          }
        }, {
          key: "disabled1",
          value: function disabled1() {
            return !this.amount1 || this.amount1 <= 0;
          }
        }, {
          key: "disabled2",
          value: function disabled2() {
            return !this.amount2 || this.amount2 <= 0;
          }
        }, {
          key: "getRates",
          value: function getRates() {
            var _this2 = this;

            this.order.getRates().subscribe(function (response) {
              _this2.rates = response.result;
              console.log(response.result);
            });
          }
        }]);

        return SwapComponent;
      }();

      SwapComponent.??fac = function SwapComponent_Factory(t) {
        return new (t || SwapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__["WatcherService"]));
      };

      SwapComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SwapComponent,
        selectors: [["app-swap"]],
        decls: 152,
        vars: 6,
        consts: [[1, "swap-page"], [1, "main-container"], [1, "container-fluid"], [1, "row"], [1, "col-12", "landing-title"], [1, "color-gold"], [1, "row", "mt-2"], [1, "col-12", "landing-description", "landing-description-mb"], [1, "offset-lg-2", "col-lg-4", "col-xl-4", "col-md-4"], [1, "transparent-container", "ml-auto", "mr-auto"], [1, "col-12"], ["src", "./assets/images/branding/logo-osrs.png"], [1, "row", "mt-4"], [1, "col-12", "box-title"], [1, "box-buy"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["rs3", ""], [1, "box-buy", "flex-row", "d-flex", "justify-content-center"], [2, "color", "#fff", "align-self", "center"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], [1, "p-4"], ["mat-flat-button", "", "color", "primary", 1, "w-100", "mr-auto", "ml-auto", "d-block", 3, "click"], [1, "col-lg-4", "col-xl-4", "col-md-4"], ["src", "./assets/images/branding/logo-rs3.png"], ["osrs", ""], [1, "box-buy", "d-flex", "flex-row", "justify-content-center"], ["src", "./assets/images/branding/buy-bg-lower.png", 1, "overlay-2"], [1, "col-12", "text-center", "mb-4", "landing-title"], [1, "row", 2, "margin-bottom", "60px"], [1, "col-lg-3", "col-xl-3", "col-md-4"], [1, "rounded-box", "text-center"], ["src", "./assets/images/branding/choosecurrency.png", 1, "contactus"], [1, "col-12", "title"], ["src", "./assets/images/branding/enteramount.png", 1, "handshake"], ["src", "./assets/images/branding/contactus.png", 1, "reward"], ["src", "./assets/images/branding/verification-logo.png", 1, "verification"], [1, "row", "mt-2", "mb-4"], [1, "col-12", "text-center", "landing-description"]],
        template: function SwapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " SWAP YOUR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "RUNESCAPE GOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Save your time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, ", get everything that you need ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Amount You'd Wish To Swap To ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "RS3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwapComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.amount1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " What you get in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "RS3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Enter Character Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwapComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.rsn1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwapComponent_Template_button_click_51_listener() {
              return ctx.openLiveChat(ctx.disabled1(), "OSRS", ctx.amount1, ctx.rsn1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " SWAP NOW ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Amount You'd Wish To Swap To ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "OSRS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "input", 15, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwapComponent_Template_input_ngModelChange_67_listener($event) {
              return ctx.amount2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " What you get in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "OSRS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Enter Character Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SwapComponent_Template_input_ngModelChange_86_listener($event) {
              return ctx.rsn2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SwapComponent_Template_button_click_90_listener() {
              return ctx.openLiveChat(ctx.disabled2(), "RS3", ctx.amount2, ctx.rsn2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " SWAP NOW ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " How to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Swap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Runescape Gold ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Choose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Enter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " Amount ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Receive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, " your gold ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, " The rate at which we ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "swap RuneScape gold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " are always changing. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, " We constantly check competitors' prices to ensure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "that our OSRS Gold prices are the best in the market.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.amount1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (_r0.value * ctx.rates.rs3).toFixed(2), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.rsn1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.amount2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (_r1.value * ctx.rates.osrs).toFixed(2), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.rsn2);
          }
        },
        directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".white[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.red-light[_ngcontent-%COMP%] {\n  color: #F62727;\n}\n\n[_nghost-%COMP%]     {\n  position: relative;\n  font-family: \"Nexa Bold\", sans-serif;\n  background: #0a101a;\n  padding-bottom: 100px;\n}\n\n[_nghost-%COMP%]     .landing-title {\n  font-size: 36px;\n  line-height: 36px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     .landing-description {\n  font-size: 1rem;\n  line-height: 14px;\n  color: white;\n  text-align: center;\n  font-family: \"Century Gothic\";\n}\n\n[_nghost-%COMP%]     .landing-description-mb {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29sb3JzLnNhc3MiLCIuLi8uLi8uLi8uLi8uLi9zd2FwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLFlBQUE7QUNwQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QUFMQztFQUNHLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVFSOztBQVBJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFTUjs7QUFSUTtFQUNJLG1CQUFBO0FBVVoiLCJmaWxlIjoic3dhcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHByaW1hcnktY29sb3I6ICMwMEE4RThcbiRjb2xvci1iYWNrZ3JvdW5kOiAjMzQ4ZmViXG5cbiRtYWluLWJhY2tncm91bmQtY29sb3I6ICMwMDE3MUZcbiRuYXZiYXItYmFja2dyb3VuZC1jb2xvcjogIzEyMWUzMFxuXG4kY29udGFpbmVyLWJnLWNvbG9yOiAjZWZlZmVmXG4kc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMTI5LCAyNTEsIDEyOSwgMC41KSAhaW1wb3J0YW50XG4kb3V0cHV0LWZvbnQtY29sb3I6ICMzNGI5MzQgIWltcG9ydGFudFxuXG4kb2xkLWNvbG9yOiAjMDA3MkJDXG4kcHJpbWFyeS1jb2xvci1iZzogIzAwQThFOFxuJHByaW1hcnktY29sb3ItdHh0OiBibGFja1xuJGJvcmRlci1jb2xvcjogIzAwQThFOFxuJGZvb3Rlci1iZy1jb2xvcjogIzAwQThFOFxuXG4kbWFpbi1jb2xvcjogIzAwQThFOFxuXG4kZ3JlZW4tY29sb3I6ICMxZWEwMWVcblxuLndoaXRlXG4gICAgY29sb3I6IHdoaXRlXG4ucmVkLWxpZ2h0XG4gICAgY29sb3I6ICNGNjI3MjdcblxuJGZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2NvbG9ycydcblxcOmhvc3QgOjpuZy1kZWVwXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgZm9udC1mYW1pbHk6ICdOZXhhIEJvbGQnLCBzYW5zLXNlcmlmXG4gICAgYmFja2dyb3VuZDogIzBhMTAxYVxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweFxuXG4gICAgLmxhbmRpbmctdGl0bGVcbiAgICAgICAgZm9udC1zaXplOiAzNnB4XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4XG4gICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgIC5sYW5kaW5nLWRlc2NyaXB0aW9uXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbVxuICAgICAgICBsaW5lLWhlaWdodDogMTRweFxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnXG4gICAgICAgICYtbWJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHgiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SwapComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-swap',
            templateUrl: './swap.component.html',
            styleUrls: ['./swap.component.sass']
          }]
        }], function () {
          return [{
            type: src_app_shared_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"]
          }, {
            type: src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
          }, {
            type: src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__["WatcherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tgRS":
    /*!*****************************************************!*\
      !*** ./src/app/modules/swap/swap-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SwapRoutingModule */

    /***/
    function tgRS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwapRoutingModule", function () {
        return SwapRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _swap_swap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./swap/swap.component */
      "U9X/");

      var routes = [{
        path: '',
        component: _swap_swap_component__WEBPACK_IMPORTED_MODULE_2__["SwapComponent"]
      }];

      var SwapRoutingModule = function SwapRoutingModule() {
        _classCallCheck(this, SwapRoutingModule);
      };

      SwapRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SwapRoutingModule
      });
      SwapRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SwapRoutingModule_Factory(t) {
          return new (t || SwapRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SwapRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SwapRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=swap-swap-module-es5.js.map