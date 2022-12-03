(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "W1PF":
/*!*********************************************!*\
  !*** ./src/app/core/base-page.component.ts ***!
  \*********************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class BasePageComponent {
    constructor() {
        this.componentDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
}
BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(); };
BasePageComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BasePageComponent });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map