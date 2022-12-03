(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-single-order-single-module"], {
    /***/
    "6HDw":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/order-single/order-single-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderSingleRoutingModule */

    /***/
    function HDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderSingleRoutingModule", function () {
        return OrderSingleRoutingModule;
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


      var _order_single_order_single_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-single/order-single.component */
      "ZNdE");

      var routes = [{
        path: '',
        component: _order_single_order_single_component__WEBPACK_IMPORTED_MODULE_2__["OrderSingleComponent"],
        pathMatch: 'full',
        redirectTo: ''
      }, {
        path: ':orderId',
        component: _order_single_order_single_component__WEBPACK_IMPORTED_MODULE_2__["OrderSingleComponent"]
      }];

      var OrderSingleRoutingModule = function OrderSingleRoutingModule() {
        _classCallCheck(this, OrderSingleRoutingModule);
      };

      OrderSingleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderSingleRoutingModule
      });
      OrderSingleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderSingleRoutingModule_Factory(t) {
          return new (t || OrderSingleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderSingleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSingleRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "U8WQ":
    /*!*************************************************************!*\
      !*** ./src/app/modules/order-single/order-single.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrderSingleModule */

    /***/
    function U8WQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderSingleModule", function () {
        return OrderSingleModule;
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


      var _order_single_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-single-routing.module */
      "6HDw");
      /* harmony import */


      var _order_single_order_single_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-single/order-single.component */
      "ZNdE");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var OrderSingleModule = function OrderSingleModule() {
        _classCallCheck(this, OrderSingleModule);
      };

      OrderSingleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderSingleModule
      });
      OrderSingleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderSingleModule_Factory(t) {
          return new (t || OrderSingleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_single_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderSingleRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderSingleModule, {
          declarations: [_order_single_order_single_component__WEBPACK_IMPORTED_MODULE_3__["OrderSingleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_single_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderSingleRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSingleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_order_single_order_single_component__WEBPACK_IMPORTED_MODULE_3__["OrderSingleComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_single_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderSingleRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZNdE":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/order-single/order-single/order-single.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: OrderSingleComponent */

    /***/
    function ZNdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderSingleComponent", function () {
        return OrderSingleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/utils */
      "9uVP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/order.service */
      "yL2D");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function OrderSingleComponent_ng_container_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account Title: ", ctx_r1.orderItem.orderAccount.account.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account Price: $", ctx_r1.orderItem.orderAccount.price, " ");
        }
      }

      function OrderSingleComponent_ng_container_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" RSN: ", ctx_r2.orderItem.orderGold.rsn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Amount: ", ctx_r2.orderItem.orderGold.units, " ($", ctx_r2.orderItem.orderGold.unitPrice, "/M)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Price: $", ctx_r2.orderItem.orderGold.amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Type: ", ctx_r2.orderItem.orderGold.type, "");
        }
      }

      function OrderSingleComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderSingleComponent_ng_container_1_div_10_Template, 4, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderSingleComponent_ng_container_1_div_11_Template, 9, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderSingleComponent_ng_container_1_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.startChat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order Id: ", ctx_r0.orderItem.orderId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order Status: ", ctx_r0.orderItem.orderStatus, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order Delivered: ", ctx_r0.orderItem.delivered ? "Yes" : "No", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.orderItem.orderAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.orderItem.orderGold);
        }
      }

      var OrderSingleComponent = /*#__PURE__*/function () {
        function OrderSingleComponent(route, router, order) {
          _classCallCheck(this, OrderSingleComponent);

          this.route = route;
          this.router = router;
          this.order = order;
          this.orderId = this.route.snapshot.params.orderId;
          this.orderStatus = '-';
        }

        _createClass(OrderSingleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.order.getSingleOrder(this.orderId).subscribe(function (result) {
              _this.orderItem = result;
              setTimeout(function () {
                _this.startChat();

                _this.router.navigate(['/']);
              }, 1000);
            });
          }
        }, {
          key: "startChat",
          value: function startChat() {
            if (this.orderItem) {
              var sentence = "Hello,\nMy order ID is ".concat(this.orderItem.orderId);

              if (this.orderItem.account) {} else {
                sentence += "\n".concat(this.orderItem.gold.units, "M of ").concat(this.orderItem.gold.server === 1 ? 'OSRS' : 'RS3', " gold\nPayment gateway: ").concat(this.orderItem.paymentGateway.name, "\nRSN: ").concat(this.orderItem.gold.rsn, "\nSub-total: ").concat(this.orderItem.invoice.subtotal).concat(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrencySymbol"])(this.orderItem.currency), "\nFees: ").concat(this.orderItem.invoice.fee).concat(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrencySymbol"])(this.orderItem.currency), "\nTotal invoice (with discount): ").concat(this.orderItem.invoice.total).concat(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrencySymbol"])(this.orderItem.currency), "\nCoupon used: ").concat(this.orderItem.coupon ? this.orderItem.coupon.code : 'N/A', "\nCurrency: ").concat(this.orderItem.currency);
              }

              Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["sendLiveChatMessage"])(sentence);
            }
          }
        }]);

        return OrderSingleComponent;
      }();

      OrderSingleComponent.ɵfac = function OrderSingleComponent_Factory(t) {
        return new (t || OrderSingleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]));
      };

      OrderSingleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderSingleComponent,
        selectors: [["app-order-single"]],
        decls: 2,
        vars: 1,
        consts: [[1, "container-fluid"], [4, "ngIf"], [1, "row"], [1, "col-12"], [1, "order-item-container"], [1, "order-id"], [1, "order-details"], ["class", "order-details", 4, "ngIf"], [1, "center-chat-button"], ["mat-raised-button", "", "type", "button", 1, "buy-button", 3, "click"]],
        template: function OrderSingleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderSingleComponent_ng_container_1_Template, 17, 5, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".center-chat-button[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  text-align: center;\n}\n\n.order-item-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background: rgba(40, 170, 226, 0.5);\n  padding: 15px;\n}\n\n.order-item-container[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.order-item-container[_ngcontent-%COMP%]   .order-details[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29yZGVyLXNpbmdsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0FBR1I7O0FBRkk7RUFDSSxlQUFBO0FBSVIiLCJmaWxlIjoib3JkZXItc2luZ2xlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jaGF0LWJ1dHRvblxuICAgIG1hcmdpbi10b3A6IDE1cHhcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLm9yZGVyLWl0ZW0tY29udGFpbmVyXG4gICAgbWFyZ2luLXRvcDogMzBweFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE3MCwgMjI2LCAwLjUpXG4gICAgcGFkZGluZzogMTVweFxuICAgIC5vcmRlci1pZFxuICAgICAgICBmb250LXNpemU6IDMycHhcbiAgICAub3JkZXItZGV0YWlsc1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSingleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-single',
            templateUrl: './order-single.component.html',
            styleUrls: ['./order-single.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=order-single-order-single-module-es5.js.map