(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "W1PF":
    /*!*********************************************!*\
      !*** ./src/app/core/base-page.component.ts ***!
      \*********************************************/

    /*! exports provided: BasePageComponent */

    /***/
    function W1PF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePageComponent", function () {
        return BasePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var BasePageComponent = /*#__PURE__*/function () {
        function BasePageComponent() {
          _classCallCheck(this, BasePageComponent);

          this.componentDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(BasePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.componentDestroyed$.next(true);
            this.componentDestroyed$.complete();
          }
        }]);

        return BasePageComponent;
      }();

      BasePageComponent.ɵfac = function BasePageComponent_Factory(t) {
        return new (t || BasePageComponent)();
      };

      BasePageComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BasePageComponent
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map