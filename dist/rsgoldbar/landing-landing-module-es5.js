(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
    /***/
    "6XDg":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/landing/trustpilot-reviews/trustpilot-reviews.component.ts ***!
      \************************************************************************************/

    /*! exports provided: TrustpilotReviewsComponent */

    /***/
    function XDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrustpilotReviewsComponent", function () {
        return TrustpilotReviewsComponent;
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


      var _trustpilot_review_trustpilot_review_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../trustpilot-review/trustpilot-review.component */
      "BRxP");

      function TrustpilotReviewsComponent_app_trustpilot_review_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-trustpilot-review", 5);
        }

        if (rf & 2) {
          var review_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("review", review_r1);
        }
      }

      var TrustpilotReviewsComponent = /*#__PURE__*/function () {
        function TrustpilotReviewsComponent() {
          var _this = this;

          _classCallCheck(this, TrustpilotReviewsComponent);

          this.reviews = [{
            firstName: 'Tyler',
            lastName: 'Watkins',
            slug: 'I went to atleast 7 different websites???',
            comment: 'I went to atleast 7 different websites to sell my 07 gold and I did not feel comfortable with selling my gold to any of them. At this website, Josh the customer service guy made me feel extremely comfortable and even took his time to let me fix things on my end without hanging up. I recommend this site beyond belief. Great people and they speak english. Josh is the best and I am so grateful for having him as my customer service agent. This is the website I will use from now on to sell my GP!'
          }, {
            firstName: 'John ',
            lastName: 'Zulch',
            slug: 'Great!',
            comment: 'They replied as soon as my payment went through they were fast and very professional and good staff team all in around!'
          }, {
            firstName: 'Aigars',
            lastName: 'Nartiss',
            slug: 'Sold 50m osrs',
            comment: 'Sold 50m osrs, fast and easy trade, ty'
          }, {
            firstName: 'Lukas',
            lastName: 'Smith',
            slug: 'A+ fast trade',
            comment: 'A+ fast trade, josh very easy to deal with'
          }, {
            firstName: 'Steven',
            lastName: 'Moore',
            slug: 'Josh very friendly & helped me ^^',
            comment: ''
          }, {
            firstName: 'Richard',
            lastName: 'Hubbard',
            slug: 'Service was very quick and easy',
            comment: 'Service was very quick and easy. also gave me a great swap rate! Josh was very friendly! Will definitely come back!'
          }];
          this.indexOfFirst = 0;
          this.indexOfLast = 3;
          this.displayedReviews = this.reviews.slice(this.indexOfFirst, this.indexOfLast);

          this.moveForward = function () {
            if (_this.indexOfLast < _this.reviews.length) {
              _this.indexOfLast++;
              _this.indexOfFirst++;
              _this.displayedReviews = _this.reviews.slice(_this.indexOfFirst, _this.indexOfLast);
            }
          };

          this.moveBackWard = function () {
            if (_this.indexOfFirst > 0) {
              _this.indexOfFirst--;
              _this.indexOfLast--;
              _this.displayedReviews = _this.reviews.slice(_this.indexOfFirst, _this.indexOfLast);
            }
          };
        }

        _createClass(TrustpilotReviewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TrustpilotReviewsComponent;
      }();

      TrustpilotReviewsComponent.??fac = function TrustpilotReviewsComponent_Factory(t) {
        return new (t || TrustpilotReviewsComponent)();
      };

      TrustpilotReviewsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TrustpilotReviewsComponent,
        selectors: [["app-trustpilot-reviews"]],
        decls: 6,
        vars: 1,
        consts: [[1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "justify-content-sm-center"], ["src", "/assets/images/branding/right-arrow.png", "alt", "", 1, "arrow", 3, "click"], ["class", "p-2 single-review", 3, "review", 4, "ngFor", "ngForOf"], ["src", "/assets/images/branding/left-arrow.png", "alt", "", 1, "arrow", 3, "click"], ["href", "https://www.trustpilot.com/review/rsgoldbar.com", "target", "_blank", 1, "review-link"], [1, "p-2", "single-review", 3, "review"]],
        template: function TrustpilotReviewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TrustpilotReviewsComponent_Template_img_click_1_listener() {
              return ctx.moveBackWard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TrustpilotReviewsComponent_app_trustpilot_review_2_Template, 1, 1, "app-trustpilot-review", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TrustpilotReviewsComponent_Template_img_click_3_listener() {
              return ctx.moveForward();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Write Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.displayedReviews);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _trustpilot_review_trustpilot_review_component__WEBPACK_IMPORTED_MODULE_2__["TrustpilotReviewComponent"]],
        styles: [".single-review[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media (max-width: 600px) {\n  .single-review[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n.review-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: gold;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: lighter;\n  background: url(/assets/images/branding/rwlinkbg.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 20px 30px;\n}\n.arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  cursor: pointer;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RydXN0cGlsb3QtcmV2aWV3cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjtBQUNFO0VBSEY7SUFJSSxVQUFBO0VBRUY7QUFDRjtBQURBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUlGO0FBRkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLRiIsImZpbGUiOiJ0cnVzdHBpbG90LXJldmlld3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2xlLXJldmlld1xuICB3aWR0aDogMzAlXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVxuICAgIHdpZHRoOiA3MCVcblxuLnJldmlldy1saW5rXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICBjb2xvcjogZ29sZFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gIGZvbnQtc2l6ZTogMXJlbVxuICBmb250LXdlaWdodDogbGlnaHRlclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYnJhbmRpbmcvcndsaW5rYmcucG5nKVxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgcGFkZGluZzogMjBweCAzMHB4XG5cbi5hcnJvd1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgaGVpZ2h0OiAyMHB4XG4gIGN1cnNvcjogcG9pbnRlclxuICBhbGlnbi1zZWxmOiBjZW50ZXJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TrustpilotReviewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trustpilot-reviews',
            templateUrl: './trustpilot-reviews.component.html',
            styleUrls: ['./trustpilot-reviews.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "BRxP":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/landing/trustpilot-review/trustpilot-review.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: TrustpilotReviewComponent */

    /***/
    function BRxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrustpilotReviewComponent", function () {
        return TrustpilotReviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TrustpilotReviewComponent = /*#__PURE__*/function () {
        function TrustpilotReviewComponent() {
          _classCallCheck(this, TrustpilotReviewComponent);
        }

        _createClass(TrustpilotReviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TrustpilotReviewComponent;
      }();

      TrustpilotReviewComponent.??fac = function TrustpilotReviewComponent_Factory(t) {
        return new (t || TrustpilotReviewComponent)();
      };

      TrustpilotReviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TrustpilotReviewComponent,
        selectors: [["app-trustpilot-review"]],
        inputs: {
          review: "review"
        },
        decls: 13,
        vars: 4,
        consts: [[1, "text-left", "single-review"], [1, "header", "d-flex", "flex-row"], ["src", "./assets/images/branding/img-placeholder.png", "alt", ""], [1, "color-gold"], ["src", "./assets/images/branding/user-rating.png", "alt", ""]],
        template: function TrustpilotReviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.review.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.review.lastName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.review.slug);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.review.comment, " ");
          }
        },
        styles: [".single-review[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.single-review[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.single-review[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RydXN0cGlsb3QtcmV2aWV3LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InRydXN0cGlsb3QtcmV2aWV3LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1yZXZpZXdcbiAgLy8gd2lkdGg6IDMwJVxuICBjb2xvcjogI2ZmZlxuXG4gIGltZ1xuICAgIG1hcmdpbi1yaWdodDogMXJlbVxuXG4gIGg2XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgIG1hcmdpbi10b3A6IDFyZW1cbiAgICBmb250LXNpemU6IC44cmVtXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TrustpilotReviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-trustpilot-review',
            templateUrl: './trustpilot-review.component.html',
            styleUrls: ['./trustpilot-review.component.sass']
          }]
        }], function () {
          return [];
        }, {
          review: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "D7nd":
    /*!**************************************************************!*\
      !*** ./src/app/modules/landing/landing/landing.component.ts ***!
      \**************************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function D7nd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/watcher.service */
      "Qn77");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _trustpilot_reviews_trustpilot_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../trustpilot-reviews/trustpilot-reviews.component */
      "6XDg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent(title, meta, router, route, watcher) {
          _classCallCheck(this, LandingComponent);

          this.title = title;
          this.meta = meta;
          this.router = router;
          this.route = route;
          this.watcher = watcher;
          this.osrsBuying = 0;
          this.rs3Buying = 0;
          this.getCurrencyConverted = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrencyConverted"];
          this.getCurrencySymbol = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrencySymbol"];
          this.currency = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrentCurrency"])() || 'USD';
          this.rsn1 = '';
          this.rsn2 = '';
          this.amount1 = 0;
          this.amount2 = 0;
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["isEmptyOrNull"])(this.route.snapshot.data) && !Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["isEmptyOrNull"])(this.route.snapshot.data.stock)) {
              this.osrsBuying = this.route.snapshot.data.stock.osrs.buying;
              this.rs3Buying = this.route.snapshot.data.stock.rs3.buying;
            }

            this.watcher.getCurrency().subscribe(function (r) {
              _this2.currency = r;
            });
          }
        }, {
          key: "goTo",
          value: function goTo(path) {
            this.router.navigate(["/buy/".concat(path)]);
          }
        }, {
          key: "openLiveChat",
          value: function openLiveChat(flag, type, amount) {
            if (flag) {
              return;
            }

            var w = window;
            Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["sendLiveChatMessage"])("Hello, I would like to sell ".concat(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["round"])(amount), "M ").concat(type));
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
        }]);

        return LandingComponent;
      }();

      LandingComponent.??fac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__["WatcherService"]));
      };

      LandingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 257,
        vars: 12,
        consts: [[1, "selling-page"], [1, "main-container"], [1, "container-fluid"], [1, "row"], [1, "col-12", "landing-title"], [1, "color-gold"], [1, "row", "mt-2"], [1, "col-12", "landing-description"], [1, "offset-lg-2", "col-lg-4", "col-xl-4", "col-md-4"], [1, "transparent-container", "ml-auto", "mr-auto"], [1, "col-12"], ["src", "./assets/images/branding/logo-osrs.png"], [1, "col-12", "transparent-title"], [1, "col-12", "transparent-description"], [1, "row", "mt-4"], [1, "col-12", "box-title"], [1, "box-buy"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], [1, "p-4"], ["mat-flat-button", "", "color", "primary", 1, "w-100", "mr-auto", "ml-auto", "d-block", 3, "click"], [1, "col-lg-4", "col-xl-4", "col-md-4"], ["src", "./assets/images/branding/logo-rs3.png"], [1, "second-container"], [1, "col-lg-4", "col-xl-4", "col-md-6"], [1, "rounded-box"], ["src", "./assets/images/branding/coins-sell.png", 1, "coins-sell"], [1, "col-12", "title"], [1, "col-12", "description"], ["src", "./assets/images/branding/coins-buy.png", 1, "coins-buy"], ["src", "./assets/images/branding/coins-swap.png", 1, "coins-swap"], ["src", "./assets/images/branding/infernal-logo.png", 1, "account-rental"], ["src", "./assets/images/branding/rsgoldbar-team.png", 1, "rsgoldbar-team"], ["src", "./assets/images/branding/crypto-logo.png", 1, "crypto-logo"], [1, "trustpilot-container"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between"], [1, "p-2", "review-text", "text-center"], [1, "p-2"], [1, "title"], [1, "description", "color-gold"], [1, "description"], [1, "p-2", "text-center", "reviews-container"], [1, "average-review"], ["src", "./assets/images/branding/stars-4.5.svg", "alt", ""], [1, "fourth-container"], [1, "faq-content"], [1, "title", "title-md"], [1, "third-container"], [1, "col-12", "text-center"], ["src", "./assets/images/footer/sepa.png"], ["src", "./assets/images/footer/crypto.png"], ["src", "./assets/images/footer/swedbank.png"], ["src", "./assets/images/footer/seb.png"], ["src", "./assets/images/footer/paysera.png"], ["src", "./assets/images/footer/paypal.png"], ["src", "./assets/images/footer/skrill.png"], ["src", "./assets/images/footer/neteller.png"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " WELCOME TO RS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "GOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "BAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Save your time,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " get everything that you need ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " WE\u2019RE CURRENTLY ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "BUYING GOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " FOR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Amount You\u2019d Wish To Sell:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.amount1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Enter Character Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_43_listener($event) {
              return ctx.rsn1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LandingComponent_Template_button_click_47_listener() {
              return ctx.openLiveChat(ctx.disabled1(), "OSRS", ctx.amount1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Sell Now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " WE\u2019RE CURRENTLY ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "BUYING GOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " FOR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Amount You\u2019d Wish To Sell:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.amount2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Enter Character Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LandingComponent_Template_input_ngModelChange_77_listener($event) {
              return ctx.rsn2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LandingComponent_Template_button_click_81_listener() {
              return ctx.openLiveChat(ctx.disabled2(), "RS3", ctx.amount2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Sell Now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " selling runescape ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "gold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " Buying runescape gold from us is simple, once you decide how much you want to buy and through which payment method, just message a live chat agent who will be always there to satisfy your needs or you can place your order automatically using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "cryptocurrencies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " or any other payment method. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " BUYING runescape ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "gold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " With years of experience our team is offering you the best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "runescape 3 & oldschool runescape");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " gold rates! Just chose with one runescape gold you want to sell and contact us. If you have any question feel free to ask our live chat agent! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " runescape ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "gold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " SWAPPING ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " Our team is always ready to swap your gold \u201Cboth ways\u201D at the best rate possible, just go to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\u201CSwap Gold\u201D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " and enter the quanity! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " INFERNAL ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " All our employees are experienced runescape players so we will guarantee the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "professional and safe service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " RS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "GOLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "BAR TEAM ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " We have over ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "2 years of experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " which we apply in various situations. There are no unresolved things with us! Our live chat agents is ready to help you ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "24/7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "CRYPTO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "CURRENCIES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " We are looking to buy any ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "cryptocurrency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " for any of our available payment methods. Contact us for more information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h2", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, " WRITE A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "REVIEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " AFTER A SUCCESFUL TRADE! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, " Your opinion is very important to us.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " By leaving your feedback, you help us to continue to improve.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "We want to provide our customers with security, good price and fast services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Thank you for choosing us!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Trustpilot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](213, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "4.5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "app-trustpilot-reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h2", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "FREQUENTLY ASKED QUESTIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "h3", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "How to buy Runescape Gold?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "ol", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "1.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " Enter the amount of gold you would like to purchase. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "2.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " Complete the payment. (Crypto, bank transfer, skrill, etc.) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "3.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, " After successful payment you will be directed to Live Chat for details. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "4.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, " Meet us in-game for a face-to-face trade. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "5.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " Enjoy your gold!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "img", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "img", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.getCurrencySymbol(ctx.currency), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 8, ctx.getCurrencyConverted(ctx.osrsBuying)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.amount1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.rsn1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.getCurrencySymbol(ctx.currency), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](63, 10, ctx.getCurrencyConverted(ctx.rs3Buying)), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.amount2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.rsn2);
          }
        },
        directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _trustpilot_reviews_trustpilot_reviews_component__WEBPACK_IMPORTED_MODULE_8__["TrustpilotReviewsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]],
        styles: [".white[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.red-light[_ngcontent-%COMP%] {\n  color: #F62727;\n}\n\n[_nghost-%COMP%]     {\n  position: relative;\n  font-family: \"Nexa Bold\", sans-serif;\n}\n\n[_nghost-%COMP%]     .mat-expansion-panel {\n  background-color: transparent !important;\n  font-size: 48px;\n  line-height: 48px;\n  color: #f6b000;\n  text-align: left;\n  font-family: \"Century Gothic\";\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .mat-expansion-panel-header-title {\n  font-size: 32px;\n  line-height: 32px;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  padding: 10px 0;\n  color: white;\n}\n\n[_nghost-%COMP%]     .mat-expansion-indicator::after {\n  color: white !important;\n}\n\n[_nghost-%COMP%]     .landing-title {\n  font-size: 48px;\n  line-height: 48px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     .landing-description {\n  font-size: 26px;\n  line-height: 26px;\n  color: white;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  text-transform: uppercase;\n  margin-bottom: 40px;\n}\n\n[_nghost-%COMP%]     .second-container {\n  height: 100%;\n  width: 100%;\n  background: #0a101a;\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n[_nghost-%COMP%]     .second-container .title {\n  font-size: 24px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Century Gothic\";\n  margin-top: 10px;\n}\n\n[_nghost-%COMP%]     .second-container .description {\n  font-size: 16px;\n  color: white;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  margin-bottom: 30px;\n  padding: 10px 60px;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box {\n  height: 100%;\n  width: 100%;\n  max-width: 150px;\n  max-height: 150px;\n  min-width: 150px;\n  min-height: 150px;\n  background: transparent url(/assets/images/branding/rounded-img-sm.png) center center no-repeat;\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: contain;\n  -moz-background-size: contain;\n  -o-background-size: contain;\n  margin: 0 auto;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.coins-sell {\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  display: block;\n  padding-top: 30px;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.coins-buy {\n  width: 125px;\n  padding: 30px 0 0 18px;\n  margin: 0 auto;\n  display: block;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.coins-swap {\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  display: block;\n  padding-top: 30px;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.account-rental {\n  height: 100%;\n  margin: 0 auto;\n  display: block;\n  padding: 20px;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.rsgoldbar-team {\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  display: block;\n  padding-top: 30px;\n}\n\n[_nghost-%COMP%]     .second-container .rounded-box img.crypto-logo {\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  display: block;\n  padding-top: 30px;\n}\n\n[_nghost-%COMP%]     .trustpilot-container {\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  background: #0a101a url(/assets/images/branding/trustpilot-bg.png) center center no-repeat;\n  background-size: 100% 100%;\n  margin: 0 auto;\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n[_nghost-%COMP%]     .trustpilot-container .title {\n  font-size: 3rem;\n  line-height: 48px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Century Gothic\";\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     .trustpilot-container .title-md {\n  font-size: 2rem;\n  text-transform: none;\n  margin-bottom: 0;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%]     .trustpilot-container .title {\n    font-size: 1.8rem;\n  }\n}\n\n[_nghost-%COMP%]     .trustpilot-container .description {\n  font-size: 1.5rem;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  color: white;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%]     .trustpilot-container .description {\n    font-size: 1.1rem;\n  }\n}\n\n[_nghost-%COMP%]     .review-text {\n  width: 50%;\n}\n\n[_nghost-%COMP%]     .review-text img {\n  width: 300px;\n  align-self: center;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%]     .review-text {\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]     .reviews-container {\n  width: 50%;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%]     .reviews-container {\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]     .reviews-container h2 {\n  text-transform: uppercase;\n  color: #fff;\n  font-size: 1.4rem;\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .reviews-container h2 .color-gold {\n  font-weight: 700;\n}\n\n[_nghost-%COMP%]     .reviews-container .average-review {\n  color: #fff;\n  font-size: 2rem;\n}\n\n[_nghost-%COMP%]     .reviews-container .average-review img {\n  height: 50%;\n  width: 200px;\n  margin-right: 10px;\n}\n\n[_nghost-%COMP%]     .fourth-container {\n  height: 100%;\n  width: 100%;\n  background: #0a101a;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n[_nghost-%COMP%]     .fourth-container .expansion-container {\n  max-width: 80% !important;\n  margin: 0 auto;\n}\n\n[_nghost-%COMP%]     .fourth-container .title {\n  font-size: 1.8rem;\n  line-height: 48px;\n  font-weight: bold;\n  color: #f6b000;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     .fourth-container .title-md {\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 36px;\n  text-transform: none;\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .fourth-container .faq-content {\n  background: url(/assets/images/branding/faq-bg.png) center center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n}\n\n[_nghost-%COMP%]     .fourth-container .faq-content ol {\n  list-style-type: none;\n  font-size: 1rem;\n}\n\n[_nghost-%COMP%]     .fourth-container .description {\n  font-size: 32px;\n  line-height: 32px;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  padding: 10px 0;\n  color: white;\n}\n\n[_nghost-%COMP%]     .fourth-container .rounded-box {\n  height: 100%;\n  width: 100%;\n  max-width: 150px;\n  max-height: 150px;\n  min-width: 150px;\n  min-height: 150px;\n  background: transparent url(/assets/images/branding/rounded-img-sm.png) center center no-repeat;\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: contain;\n  -moz-background-size: contain;\n  -o-background-size: contain;\n  margin: 0 auto;\n}\n\n[_nghost-%COMP%]     .third-container {\n  width: 100%;\n  background: #0a101a url(/assets/images/branding/Bottom_Payment_backgroud.png) center center no-repeat;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding-top: 200px;\n  padding-bottom: 200px;\n  margin-bottom: 2rem;\n}\n\n[_nghost-%COMP%]     .third-container .container-fluid img {\n  margin-right: 30px;\n}\n\n[_nghost-%COMP%]     .third-container .max-size {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n[_nghost-%COMP%]     .third-container .title {\n  font-size: 48px;\n  line-height: 48px;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Century Gothic\";\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     .third-container .title-md {\n  font-size: 18px;\n  text-transform: none;\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .third-container .description {\n  font-size: 24px;\n  line-height: 24px;\n  text-align: center;\n  font-family: \"Century Gothic\";\n  padding: 10px 0;\n  color: white;\n}\n\n@media only screen and (max-width: 800px) {\n  [_nghost-%COMP%]     .mini-container {\n    max-width: unset;\n    max-height: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29sb3JzLnNhc3MiLCIuLi8uLi8uLi8uLi8uLi9sYW5kaW5nLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLFlBQUE7QUNwQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QUFKQztFQUNHLGtCQUFBO0VBQ0Esb0NBQUE7QUFPSjs7QUFOSTtFQUNJLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUVI7O0FBTkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFRUjs7QUFQSTtFQUNJLHVCQUFBO0FBU1I7O0FBUkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVVSOztBQVRJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBV1I7O0FBVkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVlSOztBQVhRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQWFaOztBQVpRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWNaOztBQVpRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtGQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFjWjs7QUFiWTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWVoQjs7QUFkWTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBZ0JoQjs7QUFmWTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWlCaEI7O0FBaEJZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWtCaEI7O0FBakJZO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBbUJoQjs7QUFsQlk7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFvQmhCOztBQWxCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwRkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFvQlI7O0FBbEJRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFvQlo7O0FBbkJZO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFxQmhCOztBQXBCWTtFQWJKO0lBY1EsaUJBQUE7RUF1QmQ7QUFDRjs7QUF2QlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBeUJaOztBQXZCWTtFQU5KO0lBT1EsaUJBQUE7RUEwQmQ7QUFDRjs7QUF6Qkk7RUFDSSxVQUFBO0FBMkJSOztBQXpCUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQTJCWjs7QUF6QlE7RUFQSjtJQVFRLFdBQUE7RUE0QlY7QUFDRjs7QUEzQkk7RUFDSSxVQUFBO0FBNkJSOztBQTNCUTtFQUhKO0lBSVEsV0FBQTtFQThCVjtBQUNGOztBQTdCUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUErQlo7O0FBOUJZO0VBQ0ksZ0JBQUE7QUFnQ2hCOztBQS9CUTtFQUtJLFdBQUE7RUFDQSxlQUFBO0FBNkJaOztBQWxDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFvQ2hCOztBQWpDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbUNSOztBQWxDUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQW9DWjs7QUFuQ1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXFDWjs7QUFwQ1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBc0NoQjs7QUFwQ1E7RUFDSSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUFzQ1o7O0FBcENZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBc0NoQjs7QUFwQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFzQ1o7O0FBckNRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtGQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUF1Q1o7O0FBdENJO0VBQ0ksV0FBQTtFQUNBLHFHQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXdDUjs7QUFyQ1k7RUFDSSxrQkFBQTtBQXVDaEI7O0FBdENRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBd0NaOztBQXZDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUF5Q1o7O0FBeENZO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUEwQ2hCOztBQXpDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTJDWjs7QUF6Q0k7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUEyQ1Y7QUFDRiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kcHJpbWFyeS1jb2xvcjogIzAwQThFOFxuJGNvbG9yLWJhY2tncm91bmQ6ICMzNDhmZWJcblxuJG1haW4tYmFja2dyb3VuZC1jb2xvcjogIzAwMTcxRlxuJG5hdmJhci1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxZTMwXG5cbiRjb250YWluZXItYmctY29sb3I6ICNlZmVmZWZcbiRzZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgxMjksIDI1MSwgMTI5LCAwLjUpICFpbXBvcnRhbnRcbiRvdXRwdXQtZm9udC1jb2xvcjogIzM0YjkzNCAhaW1wb3J0YW50XG5cbiRvbGQtY29sb3I6ICMwMDcyQkNcbiRwcmltYXJ5LWNvbG9yLWJnOiAjMDBBOEU4XG4kcHJpbWFyeS1jb2xvci10eHQ6IGJsYWNrXG4kYm9yZGVyLWNvbG9yOiAjMDBBOEU4XG4kZm9vdGVyLWJnLWNvbG9yOiAjMDBBOEU4XG5cbiRtYWluLWNvbG9yOiAjMDBBOEU4XG5cbiRncmVlbi1jb2xvcjogIzFlYTAxZVxuXG4ud2hpdGVcbiAgICBjb2xvcjogd2hpdGVcbi5yZWQtbGlnaHRcbiAgICBjb2xvcjogI0Y2MjcyN1xuXG4kZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWZcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29sb3JzJ1xuXG5cXDpob3N0IDo6bmctZGVlcFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIGZvbnQtZmFtaWx5OiAnTmV4YSBCb2xkJywgc2Fucy1zZXJpZlxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcbiAgICAgICAgZm9udC1zaXplOiA0OHB4XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4XG4gICAgICAgIGNvbG9yOiAjZjZiMDAwXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYydcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICAgIC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGVcbiAgICAgICAgZm9udC1zaXplOiAzMnB4XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJ1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudFxuICAgIC5sYW5kaW5nLXRpdGxlXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweFxuICAgICAgICBsaW5lLWhlaWdodDogNDhweFxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAubGFuZGluZy1kZXNjcmlwdGlvblxuICAgICAgICBmb250LXNpemU6IDI2cHhcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHhcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJ1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHhcbiAgICAuc2Vjb25kLWNvbnRhaW5lclxuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgYmFja2dyb3VuZDogIzBhMTAxYVxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHhcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4XG4gICAgICAgIC50aXRsZVxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYydcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHhcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJ1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA2MHB4XG4gICAgICAgICAgICBcbiAgICAgICAgLnJvdW5kZWQtYm94XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweFxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweFxuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHhcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvYXNzZXRzL2ltYWdlcy9icmFuZGluZy9yb3VuZGVkLWltZy1zbS5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY29udGFpblxuICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICAgICAgaW1nLmNvaW5zLXNlbGxcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweClcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHhcbiAgICAgICAgICAgIGltZy5jb2lucy1idXlcbiAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHhcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMCAxOHB4XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG9cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAgICAgaW1nLmNvaW5zLXN3YXBcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweClcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHhcbiAgICAgICAgICAgIGltZy5hY2NvdW50LXJlbnRhbFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4XG4gICAgICAgICAgICBpbWcucnNnb2xkYmFyLXRlYW1cbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweClcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHhcbiAgICAgICAgICAgIGltZy5jcnlwdG8tbG9nb1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KVxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweFxuXG4gICAgLnRydXN0cGlsb3QtY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBtYXgtd2lkdGg6IDEwMCVcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYTEwMWEgdXJsKC9hc3NldHMvaW1hZ2VzL2JyYW5kaW5nL3RydXN0cGlsb3QtYmcucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJVxuICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHhcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4XG4gICAgICAgIFxuICAgICAgICAudGl0bGVcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbVxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHhcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJ1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgICAgICAgICAgJi1tZFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbVxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtXG4gICAgICAgIC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW1cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYydcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW1cbiAgICBcbiAgICAucmV2aWV3LXRleHRcbiAgICAgICAgd2lkdGg6IDUwJVxuXG4gICAgICAgIGltZ1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgLnJldmlld3MtY29udGFpbmVyXG4gICAgICAgIHdpZHRoOiA1MCVcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgICAgIGgyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgIC5jb2xvci1nb2xkXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxuICAgICAgICAuYXZlcmFnZS1yZXZpZXdcbiAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtXG4gICAgLmZvdXJ0aC1jb250YWluZXJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYTEwMWFcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHhcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHhcbiAgICAgICAgLmV4cGFuc2lvbi1jb250YWluZXJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnRcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgIC50aXRsZVxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW1cbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgICAgICAgICAgY29sb3I6ICNmNmIwMDBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYydcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAgICAgICAgICYtbWRcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbVxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHhcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZVxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgXG4gICAgICAgIC5mYXEtY29udGVudFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JyYW5kaW5nL2ZhcS1iZy5wbmcpIGNlbnRlciBjZW50ZXJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlXG5cbiAgICAgICAgICAgIG9sXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtXG5cbiAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHhcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAucm91bmRlZC1ib3hcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHhcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC9hc3NldHMvaW1hZ2VzL2JyYW5kaW5nL3JvdW5kZWQtaW1nLXNtLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpblxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgLnRoaXJkLWNvbnRhaW5lclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBiYWNrZ3JvdW5kOiAjMGExMDFhIHVybCgvYXNzZXRzL2ltYWdlcy9icmFuZGluZy9Cb3R0b21fUGF5bWVudF9iYWNrZ3JvdWQucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMDBweFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtXG5cbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZFxuICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4XG4gICAgICAgIC5tYXgtc2l6ZVxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHhcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgIC50aXRsZVxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgICAgICAgICAmLW1kXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmVcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgICAgIC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJ1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpXG4gICAgICAgIC5taW5pLWNvbnRhaW5lclxuICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldFxuICAgICAgICAgICAgbWF4LWhlaWdodDogdW5zZXRcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.sass']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__["WatcherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dnha":
    /*!***********************************************************!*\
      !*** ./src/app/modules/landing/landing-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LandingRoutingModule */

    /***/
    function dnha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
        return LandingRoutingModule;
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


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing/landing.component */
      "D7nd");

      var routes = [{
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
      }];

      var LandingRoutingModule = function LandingRoutingModule() {
        _classCallCheck(this, LandingRoutingModule);
      };

      LandingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: LandingRoutingModule
      });
      LandingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function LandingRoutingModule_Factory(t) {
          return new (t || LandingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LandingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingRoutingModule, [{
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
    "eyox":
    /*!***************************************************!*\
      !*** ./src/app/modules/landing/landing.module.ts ***!
      \***************************************************/

    /*! exports provided: LandingModule */

    /***/
    function eyox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
        return LandingModule;
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


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-routing.module */
      "dnha");
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing/landing.component */
      "D7nd");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _trustpilot_reviews_trustpilot_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./trustpilot-reviews/trustpilot-reviews.component */
      "6XDg");
      /* harmony import */


      var _trustpilot_review_trustpilot_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./trustpilot-review/trustpilot-review.component */
      "BRxP");

      var LandingModule = function LandingModule() {
        _classCallCheck(this, LandingModule);
      };

      LandingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: LandingModule
      });
      LandingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function LandingModule_Factory(t) {
          return new (t || LandingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LandingModule, {
          declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _trustpilot_reviews_trustpilot_reviews_component__WEBPACK_IMPORTED_MODULE_5__["TrustpilotReviewsComponent"], _trustpilot_review_trustpilot_review_component__WEBPACK_IMPORTED_MODULE_6__["TrustpilotReviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], _trustpilot_reviews_trustpilot_reviews_component__WEBPACK_IMPORTED_MODULE_5__["TrustpilotReviewsComponent"], _trustpilot_review_trustpilot_review_component__WEBPACK_IMPORTED_MODULE_6__["TrustpilotReviewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=landing-landing-module-es5.js.map