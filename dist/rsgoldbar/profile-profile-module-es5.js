(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "LqSQ":
    /*!***********************************************************!*\
      !*** ./src/app/modules/profile/profile-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function LqSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-change-password/user-change-password.component */
      "Z5rt");
      /* harmony import */


      var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-orders/user-orders.component */
      "ef41");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'change-password'
      }, {
        path: 'change-password',
        component: _user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_2__["UserChangePasswordComponent"]
      }, {
        path: 'orders',
        component: _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_3__["UserOrdersComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileRoutingModule_Factory(t) {
          return new (t || ProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
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
    "Lvw3":
    /*!***************************************************!*\
      !*** ./src/app/modules/profile/profile.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function Lvw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-routing.module */
      "LqSQ");
      /* harmony import */


      var _user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-change-password/user-change-password.component */
      "Z5rt");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-orders/user-orders.component */
      "ef41");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_3__["UserChangePasswordComponent"], _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_5__["UserOrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_3__["UserChangePasswordComponent"], _user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_5__["UserOrdersComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Z5rt":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/profile/user-change-password/user-change-password.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: UserChangePasswordComponent */

    /***/
    function Z5rt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserChangePasswordComponent", function () {
        return UserChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/base-page.component */
      "W1PF");
      /* harmony import */


      var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/utils */
      "9uVP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_base_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/base-page.service */
      "1OqD");
      /* harmony import */


      var src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/watcher.service */
      "Qn77");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "CcaC");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function UserChangePasswordComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Current password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserChangePasswordComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserChangePasswordComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm new password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserChangePasswordComponent = /*#__PURE__*/function (_src_app_core_base_pa) {
        _inherits(UserChangePasswordComponent, _src_app_core_base_pa);

        var _super = _createSuper(UserChangePasswordComponent);

        function UserChangePasswordComponent(basePageService, watcher, userService) {
          var _this;

          _classCallCheck(this, UserChangePasswordComponent);

          _this = _super.call(this);
          _this.basePageService = basePageService;
          _this.watcher = watcher;
          _this.userService = userService;
          _this.matcher = new src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
          _this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            current_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            confirm_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          }, _this.checkPasswords); // this.basePageService.updateTitleDescription('Profile', `${environment.title} User Control Panel`);

          return _this;
        }

        _createClass(UserChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "change",
          value: function change(data) {
            var _this2 = this;

            this.userService.changePassword(data).subscribe(function (r) {
              _this2.watcher.logout();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(UserChangePasswordComponent.prototype), "ngOnDestroy", this).call(this);
          }
        }, {
          key: "checkPasswords",
          value: function checkPasswords(group) {
            var pass = group.get('new_password').value;
            var confirmPass = group.get('confirm_new_password').value;
            return pass === confirmPass ? null : {
              notSame: true
            };
          }
        }]);

        return UserChangePasswordComponent;
      }(src_app_core_base_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

      UserChangePasswordComponent.ɵfac = function UserChangePasswordComponent_Factory(t) {
        return new (t || UserChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_base_page_service__WEBPACK_IMPORTED_MODULE_4__["BasePageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__["WatcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      UserChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserChangePasswordComponent,
        selectors: [["app-user-change-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 31,
        vars: 8,
        consts: [[1, "selling-page"], [1, "main-container"], [1, "container-fluid", "material-ui"], [1, "row"], [1, "col-12"], [1, "common-form", 3, "formGroup", "ngSubmit"], [1, "form-title", "text-center"], ["appearance", "outline"], ["matInput", "", "placeholder", "Current password", "formControlName", "current_password", "type", "password", 3, "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "placeholder", "New password", "formControlName", "new_password", "type", "password", 3, "errorStateMatcher"], ["matInput", "", "placeholder", "Confirm new password", "formControlName", "confirm_new_password", "type", "password", 3, "errorStateMatcher"], ["mat-raised-button", "", "type", "submit", 3, "disabled"]],
        template: function UserChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserChangePasswordComponent_Template_form_ngSubmit_5_listener() {
              return ctx.change(ctx.changePasswordForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Current password is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserChangePasswordComponent_mat_error_14_Template, 4, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "New password is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserChangePasswordComponent_mat_error_21_Template, 4, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm new password is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserChangePasswordComponent_mat_error_28_Template, 4, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Change Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["current_password"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["new_password"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["confirm_new_password"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.changePasswordForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2FzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-change-password',
            templateUrl: './user-change-password.component.html',
            styleUrls: ['./user-change-password.component.sass']
          }]
        }], function () {
          return [{
            type: src_app_shared_base_page_service__WEBPACK_IMPORTED_MODULE_4__["BasePageService"]
          }, {
            type: src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_5__["WatcherService"]
          }, {
            type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ef41":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/profile/user-orders/user-orders.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserOrdersComponent */

    /***/
    function ef41(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function () {
        return UserOrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_core_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/base-page.component */
      "W1PF");
      /* harmony import */


      var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/utils */
      "9uVP");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "CcaC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/watcher.service */
      "Qn77");
      /* harmony import */


      var _shared_components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/common-orders/common-orders.component */
      "Uvqi");

      var UserOrdersComponent = /*#__PURE__*/function (_src_app_core_base_pa2) {
        _inherits(UserOrdersComponent, _src_app_core_base_pa2);

        var _super2 = _createSuper(UserOrdersComponent);

        function UserOrdersComponent(user, router, watcher) {
          var _this3;

          _classCallCheck(this, UserOrdersComponent);

          _this3 = _super2.call(this);
          _this3.user = user;
          _this3.router = router;
          _this3.watcher = watcher;
          _this3.displayedColumns = ['orderId', 'total', 'server', 'subServer', 'description', 'dateCreated', 'lastUpdated'];
          _this3.data = [];
          _this3.p = 1;
          _this3.pgs = [];
          _this3.getCurrencySymbol = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrencySymbol"];
          _this3.getCurrencyConverted = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrencyConverted"];
          _this3.currency = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrentCurrency"])() || 'USD';
          return _this3;
        }

        _createClass(UserOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // this.getPage(1);
            this.user.getUserLimits(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getUser"])().id).subscribe(function (response) {
              _this4.pgs = response;
            });
            this.watcher.getCurrency().subscribe(function (r) {
              _this4.currency = r;
            });
          }
        }, {
          key: "getPage",
          value: function getPage(page) {
            var _this5 = this;

            if (!isNaN(page)) {
              this.loading = true;
              this.user.getUserOrders(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getUser"])().id, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.componentDestroyed$)).subscribe(function (response) {
                _this5.total = response.totalCount;
                _this5.p = page;
                _this5.loading = false;
                _this5.data = response.orders;
              });
            }
          }
        }]);

        return UserOrdersComponent;
      }(src_app_core_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]);

      UserOrdersComponent.ɵfac = function UserOrdersComponent_Factory(t) {
        return new (t || UserOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_6__["WatcherService"]));
      };

      UserOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserOrdersComponent,
        selectors: [["app-user-orders"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 1,
        consts: [[1, "selling-page"], [1, "main-container"], [1, "container-fluid"], [3, "selfUser"]],
        template: function UserOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-common-orders", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selfUser", true);
          }
        },
        directives: [_shared_components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_7__["CommonOrdersComponent"]],
        styles: [".white[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.red-light[_ngcontent-%COMP%] {\n  color: #F62727;\n}\n\n[_nghost-%COMP%]     {\n  background: white;\n  padding-top: 30px;\n}\n\n.f16[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.user-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.user-container-outer[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.user-container-inner[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  color: #00A8E8;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29sb3JzLnNhc3MiLCIuLi8uLi8uLi8uLi8uLi91c2VyLW9yZGVycy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSxZQUFBO0FDcEJKOztBRHFCQTtFQUNJLGNBQUE7QUNsQko7O0FBSkM7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjRGJTO0VDY1QsbUJBQUE7QUFhSiIsImZpbGUiOiJ1c2VyLW9yZGVycy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHByaW1hcnktY29sb3I6ICMwMEE4RThcbiRjb2xvci1iYWNrZ3JvdW5kOiAjMzQ4ZmViXG5cbiRtYWluLWJhY2tncm91bmQtY29sb3I6ICMwMDE3MUZcbiRuYXZiYXItYmFja2dyb3VuZC1jb2xvcjogIzEyMWUzMFxuXG4kY29udGFpbmVyLWJnLWNvbG9yOiAjZWZlZmVmXG4kc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMTI5LCAyNTEsIDEyOSwgMC41KSAhaW1wb3J0YW50XG4kb3V0cHV0LWZvbnQtY29sb3I6ICMzNGI5MzQgIWltcG9ydGFudFxuXG4kb2xkLWNvbG9yOiAjMDA3MkJDXG4kcHJpbWFyeS1jb2xvci1iZzogIzAwQThFOFxuJHByaW1hcnktY29sb3ItdHh0OiBibGFja1xuJGJvcmRlci1jb2xvcjogIzAwQThFOFxuJGZvb3Rlci1iZy1jb2xvcjogIzAwQThFOFxuXG4kbWFpbi1jb2xvcjogIzAwQThFOFxuXG4kZ3JlZW4tY29sb3I6ICMxZWEwMWVcblxuLndoaXRlXG4gICAgY29sb3I6IHdoaXRlXG4ucmVkLWxpZ2h0XG4gICAgY29sb3I6ICNGNjI3MjdcblxuJGZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2NvbG9ycydcblxuXFw6aG9zdCA6Om5nLWRlZXBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuICAgIHBhZGRpbmctdG9wOiAzMHB4XG5cbi5mMTZcbiAgICBmb250LXNpemU6IDE2cHhcblxuLnVzZXJzLXRhYmxlXG4gICAgd2lkdGg6IDEwMCVcblxuLnVzZXItZmllbGRcbiAgICB3aWR0aDogMTAwJVxuICAgIG1hcmdpbi10b3A6IDVweFxuICAgIG1hcmdpbi1ib3R0b206IDVweFxuXG4udXNlci1jb250YWluZXItb3V0ZXJcbiAgICB3aWR0aDogNTAwcHhcbiAgICBwYWRkaW5nOiAxNXB4XG4gICAgbWFyZ2luOiAwIGF1dG9cblxuLnVzZXItY29udGFpbmVyLWlubmVyXG4gICAgcGFkZGluZzogMTVweFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVxuXG4uZm9ybS10aXRsZVxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgZm9udC1zaXplOiAzMnB4XG4gICAgY29sb3I6ICRtYWluLWNvbG9yXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-orders',
            templateUrl: './user-orders.component.html',
            styleUrls: ['./user-orders.component.sass']
          }]
        }], function () {
          return [{
            type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_6__["WatcherService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map