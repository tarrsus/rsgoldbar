(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"], {
    /***/
    "GdRo":
    /*!***********************************************************!*\
      !*** ./src/app/modules/privacy/privacy-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PrivacyRoutingModule */

    /***/
    function GdRo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function () {
        return PrivacyRoutingModule;
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


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "LpOB");

      var routes = [{
        path: '',
        component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"]
      }];

      var PrivacyRoutingModule = function PrivacyRoutingModule() {
        _classCallCheck(this, PrivacyRoutingModule);
      };

      PrivacyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PrivacyRoutingModule
      });
      PrivacyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PrivacyRoutingModule_Factory(t) {
          return new (t || PrivacyRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrivacyRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyRoutingModule, [{
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
    "LpOB":
    /*!**************************************************************!*\
      !*** ./src/app/modules/privacy/privacy/privacy.component.ts ***!
      \**************************************************************/

    /*! exports provided: PrivacyComponent */

    /***/
    function LpOB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
        return PrivacyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrivacyComponent = /*#__PURE__*/function () {
        function PrivacyComponent() {
          _classCallCheck(this, PrivacyComponent);
        }

        _createClass(PrivacyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyComponent;
      }();

      PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) {
        return new (t || PrivacyComponent)();
      };

      PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyComponent,
        selectors: [["app-privacy"]],
        decls: 83,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "row", "mt-4"]],
        template: function PrivacyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy Policy of RSGoldBar.com spells out the obligations of the Users.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What information do we collect? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Phone number or other details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mailing address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Although all information collected when you place an order on our site.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "How We Use Your Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To present our Website and its contents to you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "To provide you with information, products, or services that you request from us.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "To fulfill any other purpose for which you provide it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "To allow you to participate in interactive features on our Website.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "In any other way we may describe when you provide the information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "For any other purpose with your consent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " This website services, advertisements can use cookies and other technologies such as pixel tags and web beacons.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " When you visit Website, your browser may automatically transmit infiormation to these Websites throughout the visit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " As most websites, we gather information automatically and store it server.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Cookies are only used to remember the currency preferences of your choice. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Third-Party Websites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " We use third-party web beacons from Google Analytics and other similar software, to help analyze where visitors go and what they do while visiting our website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Google Analytics may also use anonymous information about your visits to this and other websites in order to improve its products and services and provide advertisements about goods and services of interest to you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Changes of privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "We do keep the right to modify this policy as needed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Data subjects shall be informed about such changes on our website and/or via email that has been provided by data subject.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Contact Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " If you have any questions or concerns about the privacy policy or terms of service should be addressed to support@rsgoldbarhelp.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 200px 0 !important;\n}\n\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n[_nghost-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: circle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ByaXZhY3kuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0M7RUFDRyxjQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFESTtFQUNJLDBCQUFBO0FBR1I7O0FBRFE7RUFDSSx1QkFBQTtBQUdaIiwiZmlsZSI6InByaXZhY3kuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXG4gICAgY29sb3I6IHdoaXRlXG5cblxcOmhvc3RcbiAgICBkaXNwbGF5OiBibG9ja1xuICAgIHBhZGRpbmc6IDIwMHB4IDAgIWltcG9ydGFudFxuICAgIGgzXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXG4gICAgb2xcbiAgICAgICAgbGlcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy',
            templateUrl: './privacy.component.html',
            styleUrls: ['./privacy.component.sass']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "rKAF":
    /*!***************************************************!*\
      !*** ./src/app/modules/privacy/privacy.module.ts ***!
      \***************************************************/

    /*! exports provided: PrivacyModule */

    /***/
    function rKAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyModule", function () {
        return PrivacyModule;
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


      var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacy-routing.module */
      "GdRo");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "LpOB");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var PrivacyModule = function PrivacyModule() {
        _classCallCheck(this, PrivacyModule);
      };

      PrivacyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PrivacyModule
      });
      PrivacyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PrivacyModule_Factory(t) {
          return new (t || PrivacyModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrivacyModule, {
          declarations: [_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _privacy_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivacyRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=privacy-privacy-module-es5.js.map