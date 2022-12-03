(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XhJ":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/payment-methods/payment-methods.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaymentMethodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsComponent", function() { return PaymentMethodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "9uVP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _payment_gateway_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payment-gateway.service */ "jqC5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PaymentMethodsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentMethodsComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const payment_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.select(payment_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-pg", payment_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", payment_r1.css)("src", "/assets/images/payment-gateways/" + payment_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PaymentMethodsComponent {
    constructor(http, paymentGatewayService) {
        this.http = http;
        this.paymentGatewayService = paymentGatewayService;
        this._paymentMethods = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPaymentGateways"])();
        this.paymentMethods = [];
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTrigger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //cb - visa - mc - zelle - ideal - bancontact
    ngOnInit() {
        // this.http.get('https://extreme-ip-lookup.com/json/').subscribe((r: any) => {
        const selectedPayment = this._paymentMethods.find(x => x.name === this.currentPaymentMethod);
        // switch (r.countryCode) {
        //   case 'US':
        //   case 'CA':
        //   case 'UK':
        //   case 'AU':
        //     if (selectedPayment) {
        //       this.select(selectedPayment);
        //     }
        //     break;
        //   default:
        this.paymentMethods = this._paymentMethods.filter(x => x.name !== 'visa' && x.name !== 'mastercard' && x.name !== 'zelle');
        if (selectedPayment) {
            this.select(selectedPayment);
            //     }
            //     break;
        }
        // })
    }
    select(paymentGateway) {
        this.paymentMethods.forEach(p => p.selected = false);
        const found = this.paymentMethods.find(p => p.name === paymentGateway.name);
        if (found) {
            found.selected = true;
            this.onSelect.emit(found);
        }
    }
    buy() {
        this.onTrigger.emit(true);
    }
}
PaymentMethodsComponent.ɵfac = function PaymentMethodsComponent_Factory(t) { return new (t || PaymentMethodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_payment_gateway_service__WEBPACK_IMPORTED_MODULE_3__["PaymentGatewayService"])); };
PaymentMethodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentMethodsComponent, selectors: [["app-payment-methods"]], inputs: { currentPaymentMethod: "currentPaymentMethod" }, outputs: { onSelect: "onSelect", onTrigger: "onTrigger" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-xs-6 col-sm-6 col-md-6 col-xl-6 col-lg-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-sm-6", "col-md-6", "col-xl-6", "col-lg-6", "mb-4"], [1, "payment-img", "text-center", 3, "click"], [3, "ngClass", "src"]], template: function PaymentMethodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentMethodsComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     {\n  display: block;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]     .title {\n  color: #00A8E8;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]     .payment-methods-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .payment-img {\n  border-radius: 5px;\n  height: 100px;\n  cursor: pointer;\n  background: transparent url(/assets/images/branding/payment-bg.png) center center no-repeat;\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-background-size: contain;\n  -moz-background-size: contain;\n  -o-background-size: contain;\n}\n[_nghost-%COMP%]     img.skrill {\n  width: 100%;\n  max-width: 125px;\n  padding-top: 30px;\n}\n[_nghost-%COMP%]     img.paypal {\n  width: 100%;\n  max-width: 125px;\n  padding-top: 40px;\n}\n[_nghost-%COMP%]     img.sepa {\n  width: 100%;\n  max-width: 125px;\n  padding-top: 35px;\n}\n[_nghost-%COMP%]     img.visa {\n  max-width: 125px;\n  width: 100%;\n  padding-top: 20px;\n}\n[_nghost-%COMP%]     img.mastercard {\n  height: 80px;\n  padding-top: 15px;\n}\n[_nghost-%COMP%]     img.klarna {\n  height: 100px;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]     .trustly {\n  max-width: 150px;\n  width: 100%;\n  padding-top: 30px;\n}\n[_nghost-%COMP%]     img.crypto {\n  padding-top: 40px;\n  max-width: 125px;\n  width: 100%;\n}\n[_nghost-%COMP%]     .selected-pg ::after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\uF00C\";\n  color: #f6b000;\n  position: relative;\n  top: -70px;\n  right: -80px;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBZjtFQUNHLGNBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBR1I7QUFGSTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyRkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFHUjtBQUZJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJUjtBQUhJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFLUjtBQUpJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlJO0VBRUksWUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJSTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtBQUhSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZSO0FBY0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVpSO0FBZUk7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWJSIiwiZmlsZSI6InBheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxcOmhvc3QgOjpuZy1kZWVwXG4gICAgZGlzcGxheTogYmxvY2tcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4XG4gICAgLnRpdGxlXG4gICAgICAgIGNvbG9yOiAjMDBBOEU4XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcblxuICAgIC5wYXltZW50LW1ldGhvZHMtY29udGFpbmVyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4XG4gICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgLnBheW1lbnQtaW1nXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDE3MUZcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XG4gICAgICAgIGhlaWdodDogMTAwcHhcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvYXNzZXRzL2ltYWdlcy9icmFuZGluZy9wYXltZW50LWJnLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cbiAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb250YWluXG4gICAgaW1nLnNrcmlsbFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBtYXgtd2lkdGg6IDEyNXB4XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4XG4gICAgaW1nLnBheXBhbFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBtYXgtd2lkdGg6IDEyNXB4XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4XG4gICAgaW1nLnNlcGFcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweFxuICAgICAgICBwYWRkaW5nLXRvcDogMzVweFxuICAgICAgICAvLyB3aWR0aDogMTAwJVxuICAgICAgICAvLyBoZWlnaHQ6IDYwcHhcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMzBweFxuICAgIC8vIGltZy5wYXlwYWxcbiAgICAvLyAgICAgd2lkdGg6IDEwMCVcbiAgICAvLyAgICAgaGVpZ2h0OiA2MHB4XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDMwcHhcbiAgICBpbWcudmlzYVxuICAgICAgICBtYXgtd2lkdGg6IDEyNXB4XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlXG4gICAgLy8gICAgIGhlaWdodDogNjBweFxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAzMHB4XG4gICAgaW1nLm1hc3RlcmNhcmRcbiAgICAgICAgLy8gd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiA4MHB4XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4XG4gICAgaW1nLmtsYXJuYVxuICAgICAgICAvLyB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMHB4XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4XG4gICAgLnRydXN0bHlcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweFxuICAgICAgICBpbWdcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDBweFxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTBweFxuICAgIC8vIGltZy53ZXN0ZXJuLXVuaW9uXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlXG4gICAgLy8gICAgIGhlaWdodDogMTAwcHhcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMTNweFxuICAgIC8vIGltZy5pbnRlcmFjXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlXG4gICAgLy8gICAgIGhlaWdodDogOTBweFxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAxN3B4XG4gICAgaW1nLmNyeXB0b1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweFxuICAgICAgICBtYXgtd2lkdGg6IDEyNXB4XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIC8vIGhlaWdodDogNjBweFxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAzMHB4XG4gICAgLnNlbGVjdGVkLXBnIDo6YWZ0ZXJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDBcbiAgICAgICAgY29udGVudDogXCJcXGYwMGNcIlxuICAgICAgICBjb2xvcjogI2Y2YjAwMFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgdG9wOiAtNzBweFxuICAgICAgICByaWdodDogLTgwcHhcbiAgICAgICAgZm9udC1zaXplOiAzMnB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentMethodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-methods',
                templateUrl: './payment-methods.component.html',
                styleUrls: ['./payment-methods.component.sass']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _payment_gateway_service__WEBPACK_IMPORTED_MODULE_3__["PaymentGatewayService"] }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], currentPaymentMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "+aHA":
/*!**********************************************************!*\
  !*** ./src/app/shared/modals/banned/banned.component.ts ***!
  \**********************************************************/
/*! exports provided: BannedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannedComponent", function() { return BannedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function BannedComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forbidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannedComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.message, " ");
} }
class BannedComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
}
BannedComponent.ɵfac = function BannedComponent_Factory(t) { return new (t || BannedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
BannedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannedComponent, selectors: [["app-banned"]], decls: 1, vars: 1, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row", "text-center"], [1, "col-12"], [1, "title"], [1, "row", "mt-4"], [1, "description"], ["mat-raised-button", "", "type", "button", 3, "click"]], template: function BannedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BannedComponent_div_0_Template, 13, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Jhbm5lZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSiIsImZpbGUiOiJiYW5uZWQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVcbiAgICBmb250LXNpemU6IDMycHhcblxuLmRlc2NyaXB0aW9uXG4gICAgZm9udC1zaXplOiAyNHB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banned',
                templateUrl: './banned.component.html',
                styleUrls: ['./banned.component.sass']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adisen/Downloads/Compressed/rsgoldbar-main/src/main.ts */"zUnb");


/***/ }),

/***/ "1OqD":
/*!*********************************************!*\
  !*** ./src/app/shared/base-page.service.ts ***!
  \*********************************************/
/*! exports provided: BasePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageService", function() { return BasePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class BasePageService {
    constructor(meta, title) {
        this.meta = meta;
        this.title = title;
    }
    updateTitleDescription(title, description) {
    }
}
BasePageService.ɵfac = function BasePageService_Factory(t) { return new (t || BasePageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BasePageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasePageService, factory: BasePageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasePageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "2fyD":
/*!*******************************************!*\
  !*** ./src/app/shared/account.service.ts ***!
  \*******************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class AccountService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'account';
    }
    getAccount(id) {
        return this.http.get(`${this.defaultController}${this.slug}/${id}`);
    }
    getAvailable(pageNumber = 1, sold, types, text) {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}&sold=${sold}&types=${types}&text=${text}`);
    }
    getAllAccounts(pageNumber = 1) {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}`);
    }
    deleteAccount(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    addAccount(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    editAccount(id, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8T64":
/*!*****************************************!*\
  !*** ./src/app/shared/stock.service.ts ***!
  \*****************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class StockService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'stock';
    }
    getStock() {
        return this.http.get(`${this.defaultController}${this.slug}`);
    }
    updateStock(payload) {
        return this.http.put(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
StockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "9uVP":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: isEmptyOrNull, getJwtToken, isLoggedIn, MyErrorStateMatcher, getUser, isAdmin, isWorker, isBanned, openLiveChat, sendLiveChatMessage, getCurrencies, setCurrencies, setCurrentCurrency, getCurrentCurrency, setPaymentGateways, getPaymentGateways, getCurrencyConverted, openInNewTab, round, deepClone, setCartSkilling, setCartQuests, setCartMinigames, setCartAccounts, getCartQuests, getCartMinigames, getCartSkilling, getCartAccounts, isLocalStorageAvailable, getCurrencySymbol, stripePGs, payopPGs, mapToBlogGeneric, getPaymentGatewayName, getAccountTypes, setLocalStorageArrayIfNotDefined, getLocalStorageArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyOrNull", function() { return isEmptyOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJwtToken", function() { return getJwtToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWorker", function() { return isWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBanned", function() { return isBanned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLiveChat", function() { return openLiveChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendLiveChatMessage", function() { return sendLiveChatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencies", function() { return getCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrencies", function() { return setCurrencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentCurrency", function() { return setCurrentCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentCurrency", function() { return getCurrentCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPaymentGateways", function() { return setPaymentGateways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentGateways", function() { return getPaymentGateways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyConverted", function() { return getCurrencyConverted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInNewTab", function() { return openInNewTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartSkilling", function() { return setCartSkilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartQuests", function() { return setCartQuests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartMinigames", function() { return setCartMinigames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartAccounts", function() { return setCartAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartQuests", function() { return getCartQuests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartMinigames", function() { return getCartMinigames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartSkilling", function() { return getCartSkilling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartAccounts", function() { return getCartAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalStorageAvailable", function() { return isLocalStorageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return getCurrencySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripePGs", function() { return stripePGs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payopPGs", function() { return payopPGs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToBlogGeneric", function() { return mapToBlogGeneric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentGatewayName", function() { return getPaymentGatewayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountTypes", function() { return getAccountTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorageArrayIfNotDefined", function() { return setLocalStorageArrayIfNotDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorageArray", function() { return getLocalStorageArray; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "NuaS");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathjs */ "acA/");


function isEmptyOrNull(value) {
    return value === undefined || value === null || value === '';
}
function getJwtToken() {
    return localStorage.getItem('jwt');
}
function isLoggedIn() {
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    if (!isEmptyOrNull(getJwtToken())) {
        return !helper.isTokenExpired(getJwtToken());
    }
    return false;
}
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
function getUser() {
    if (!isLoggedIn()) {
        return null;
    }
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    const decodedToken = helper.decodeToken(getJwtToken());
    return decodedToken;
}
function isAdmin() {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === 1;
}
function isWorker() {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === 2;
}
function isBanned() {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === -1;
}
function openLiveChat() {
    const w = window;
    w.$zopim.livechat.window.show();
}
function sendLiveChatMessage(message) {
    const w = window;
    w.$zopim.livechat.window.show();
    w.$zopim.livechat.say(message);
}
function getCurrencies() {
    try {
        return JSON.parse(localStorage.getItem('currencies'));
    }
    catch (err) {
        return {};
    }
}
function setCurrencies(input) {
    localStorage.setItem('currencies', JSON.stringify(input));
}
function setCurrentCurrency(input) {
    localStorage.setItem('currency', input);
}
function getCurrentCurrency() {
    return isEmptyOrNull(localStorage.getItem('currency')) ? null : localStorage.getItem('currency');
}
function setPaymentGateways(payment_gateways) {
    localStorage.setItem('payment_gateways', JSON.stringify(payment_gateways));
}
function getPaymentGateways() {
    return isEmptyOrNull(localStorage.getItem('payment_gateways')) ? [] : JSON.parse(localStorage.getItem('payment_gateways'));
}
function getCurrencyConverted(amount) {
    return getCurrentCurrency() !== null && getCurrencies()[getCurrentCurrency()] !== null ? (getCurrentCurrency() === 'USD' ? amount : getCurrencies()[getCurrentCurrency()] * amount) : 0;
}
function openInNewTab(url) {
    window.location.href = url;
}
function round(input) {
    return +mathjs__WEBPACK_IMPORTED_MODULE_1__["round"](input, 3);
}
function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}
function setCartSkilling(cart_skilling) {
    localStorage.setItem('cart_skilling', JSON.stringify(cart_skilling));
}
function setCartQuests(cart_quests) {
    localStorage.setItem('cart_quests', JSON.stringify(cart_quests));
}
function setCartMinigames(cart_minigames) {
    localStorage.setItem('cart_minigames', JSON.stringify(cart_minigames));
}
function setCartAccounts(cart_accounts) {
    localStorage.setItem('cart_accounts', JSON.stringify(cart_accounts));
}
function getCartQuests() {
    return isEmptyOrNull(localStorage.getItem('cart_quests')) ? [] : JSON.parse(localStorage.getItem('cart_quests'));
}
function getCartMinigames() {
    return isEmptyOrNull(localStorage.getItem('cart_minigames')) ? [] : JSON.parse(localStorage.getItem('cart_minigames'));
}
function getCartSkilling() {
    return isEmptyOrNull(localStorage.getItem('cart_skilling')) ? [] : JSON.parse(localStorage.getItem('cart_skilling'));
}
function getCartAccounts() {
    return isEmptyOrNull(localStorage.getItem('cart_accounts')) ? [] : JSON.parse(localStorage.getItem('cart_accounts'));
}
function isLocalStorageAvailable(key) {
    return isEmptyOrNull(localStorage.getItem(key)) ? false : true;
}
function getCurrencySymbol(name) {
    let symbol = '$';
    switch (name) {
        case 'USD':
        case 'CAD':
        case 'NZD':
            symbol = '$';
            break;
        case 'GBP':
            symbol = '£';
            break;
        case 'EUR':
            symbol = '€';
            break;
        case 'CNY':
            symbol = '¥';
            break;
    }
    return symbol;
}
const stripePGs = ['alipay', 'bancontact', 'eps', 'giropay', 'ideal', 'multibanco', 'przelewy24', 'klarna', 'wechat Pay', 'visa', 'mastercard'];
const payopPGs = ['skrill', 'trustly', 'webpay', 'poli', 'qiwi', 'unionpay', 'western union', 'paysafecard'];
const mapToBlogGeneric = (blog) => {
    return Object.assign(Object.assign({}, blog), { author: blog.author ? `${blog.author.email ? blog.author.email : ''}` : 'Anonymous' });
};
function getPaymentGatewayName(input) {
    switch (input) {
        case 'btc':
            return 'Bitcoin';
        case 'ltc':
            return 'Litecoin';
        case 'eth':
            return 'Ethereum';
        case 'usdc':
            return 'USD Coin';
        case 'american-express':
            return 'American Express';
        case 'visa':
            return 'Visa';
        case 'mastercard':
            return 'Mastercard';
        case 'discover':
            return 'Discover';
        case 'zelle':
            return 'Zelle';
        case 'paypal':
            return 'Paypal';
        default:
            return input;
    }
}
function getAccountTypes() {
    return [
        {
            id: 1,
            name: 'Zerker'
        },
        {
            id: 2,
            name: 'Pure'
        },
        {
            id: 3,
            name: 'Main'
        },
        {
            id: 4,
            name: 'Staker'
        },
        {
            id: 5,
            name: 'Starter Build\'s'
        },
        {
            id: 6,
            name: 'Ironman'
        },
        {
            id: 7,
            name: 'HCIM'
        },
        {
            id: 8,
            name: 'PKer'
        },
        {
            id: 9,
            name: 'Skiller'
        }
    ];
}
function setLocalStorageArrayIfNotDefined(key) {
    if (isEmptyOrNull(localStorage.getItem(key))) {
        localStorage.setItem(key, JSON.stringify([]));
    }
}
function getLocalStorageArray(key) {
    return JSON.parse(localStorage.getItem(key));
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: 'http://localhost:3000'
    baseUrl: 'https://www.rsgoldbar.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bblx":
/*!******************************************************!*\
  !*** ./src/app/shared/progressive-loader.service.ts ***!
  \******************************************************/
/*! exports provided: ProgressiveLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveLoaderService", function() { return ProgressiveLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ProgressiveLoaderService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    updateLoader(display) {
        this.subject.next(display);
    }
    getState() {
        return this.subject;
    }
}
ProgressiveLoaderService.ɵfac = function ProgressiveLoaderService_Factory(t) { return new (t || ProgressiveLoaderService)(); };
ProgressiveLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressiveLoaderService, factory: ProgressiveLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressiveLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CcaC":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class UserService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'user';
    }
    addUser(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    getUserPaymentGateways(userId) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/pgs`);
    }
    getUserLimits(userId) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/limits`);
    }
    getUserIps(userId, pageNumber) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/ips?pageNumber=${pageNumber}`);
    }
    getUserReferrals(userId, pageNumber) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/referrals?pageNumber=${pageNumber}`);
    }
    updateUserIp(userId, ipAddressId) {
        return this.http.put(`${this.defaultController}${this.slug}/${userId}/ips/${ipAddressId}`, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    updateUserRef(userId, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${userId}/refCode`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    deleteUserRef(userId, payload) {
        return this.http.delete(`${this.defaultController}${this.slug}/${userId}/refCode`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    getUserRsns(userId, pageNumber) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/rsns?pageNumber=${pageNumber}`);
    }
    getUserNames(userId, pageNumber) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/names?pageNumber=${pageNumber}`);
    }
    updateUserPaymentGateways(id, data) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}/pgs`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    getUser(userId) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}`);
    }
    getUserData(userId) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/data`);
    }
    getUserOrders(userId, pageNumber) {
        return this.http.get(`${this.defaultController}${this.slug}/${userId}/order?pageNumber=${pageNumber}`);
    }
    getAllUsers(pageNumber, filterCriteria) {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`);
    }
    updateUser(id) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    updateUserGroup(id, data) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}/group`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    updateUserRewards(id, data) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}/rewards`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    changePassword(data) {
        return this.http.put(`${this.defaultController}${this.slug}/password`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    deleteUser(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    activateUser(activate = true, payload) {
        return this.http.post(`${this.defaultController}${this.slug}/email/activation/${activate ? 'activate' : 'resend'}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    generatePassword(payload) {
        return this.http.post(`${this.defaultController}${this.slug}/password/generate`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 7000,
            });
        }));
    }
    forgotPassword(payload) {
        return this.http.post(`${this.defaultController}${this.slug}/password`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 7000,
            });
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "KWsW":
/*!********************************************!*\
  !*** ./src/app/shared/services.service.ts ***!
  \********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class ServicesService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'service';
    }
    getService(id) {
        return this.http.get(`${this.defaultController}${this.slug}/${id}`);
    }
    getServices(pageNumber, title = '') {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}&title=${title}`);
    }
    getAllServices() {
        return this.http.get(`${this.defaultController}${this.slug}/all`);
    }
    getAllSkillsTable() {
        return this.http.get(`${this.defaultController}${this.slug}/powerleveling/table`);
    }
    deleteService(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    addService(payload, postfix) {
        return this.http.post(`${this.defaultController}${this.slug}${postfix ? '/' + postfix : ''}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    editService(id, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "L3BY":
/*!********************************************!*\
  !*** ./src/app/shared/referral.service.ts ***!
  \********************************************/
/*! exports provided: ReferralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralService", function() { return ReferralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class ReferralService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'referral';
    }
    addReferral(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    getReferrals(pageNumber, filterCriteria = '') {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`);
    }
    getOrders(id, pageNumber, filterCriteria = '') {
        return this.http.get(`${this.defaultController}${this.slug}/${id}?pageNumber=${pageNumber}${filterCriteria}`);
    }
    getStatistics(id) {
        return this.http.get(`${this.defaultController}${this.slug}/${id}/statistics`);
    }
    updateReferral(id, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    deleteReferral(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
ReferralService.ɵfac = function ReferralService_Factory(t) { return new (t || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ReferralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReferralService, factory: ReferralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _watcher_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./watcher.service */ "Qn77");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./account.service */ "2fyD");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./order.service */ "yL2D");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./stock.service */ "8T64");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./transactions.service */ "kbRu");
/* harmony import */ var _interceptors_authinterceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./interceptors/authinterceptor */ "RE2m");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user.service */ "CcaC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _requests_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./requests.service */ "gzKn");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! countup.js-angular2 */ "+tcz");
/* harmony import */ var _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/payment-methods/payment-methods.component */ "+XhJ");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./blog.service */ "VEdu");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _components_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/generic-table/generic-table.component */ "W/4C");
/* harmony import */ var _base_page_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./base-page.service */ "1OqD");
/* harmony import */ var _components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/common-orders/common-orders.component */ "Uvqi");
/* harmony import */ var _payment_gateway_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./payment-gateway.service */ "jqC5");
/* harmony import */ var _modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./modals/banned/banned.component */ "+aHA");
/* harmony import */ var _referral_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./referral.service */ "L3BY");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./cart.service */ "nBma");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services.service */ "KWsW");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./skill.service */ "lY84");


























































class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HTTP_INTERCEPTORS"], useClass: _interceptors_authinterceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"], multi: true },
                _account_service__WEBPACK_IMPORTED_MODULE_34__["AccountService"],
                _order_service__WEBPACK_IMPORTED_MODULE_35__["OrderService"],
                _stock_service__WEBPACK_IMPORTED_MODULE_36__["StockService"],
                _transactions_service__WEBPACK_IMPORTED_MODULE_37__["TransactionsService"],
                _user_service__WEBPACK_IMPORTED_MODULE_40__["UserService"],
                _watcher_service__WEBPACK_IMPORTED_MODULE_33__["WatcherService"],
                _requests_service__WEBPACK_IMPORTED_MODULE_42__["RequestsService"],
                _blog_service__WEBPACK_IMPORTED_MODULE_46__["BlogService"],
                _base_page_service__WEBPACK_IMPORTED_MODULE_49__["BasePageService"],
                _payment_gateway_service__WEBPACK_IMPORTED_MODULE_51__["PaymentGatewayService"],
                _referral_service__WEBPACK_IMPORTED_MODULE_53__["ReferralService"],
                _cart_service__WEBPACK_IMPORTED_MODULE_54__["CartService"],
                _services_service__WEBPACK_IMPORTED_MODULE_55__["ServicesService"],
                _skill_service__WEBPACK_IMPORTED_MODULE_56__["SkillService"]
            ]
        };
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
            countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
        countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_48__["GenericTableComponent"],
        _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_45__["PaymentMethodsComponent"],
        _components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_50__["CommonOrdersComponent"],
        _modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_52__["BannedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
        countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
        countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"],
        _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_45__["PaymentMethodsComponent"],
        _components_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_48__["GenericTableComponent"],
        _components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_50__["CommonOrdersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_48__["GenericTableComponent"],
                    _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_45__["PaymentMethodsComponent"],
                    _components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_50__["CommonOrdersComponent"],
                    _modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_52__["BannedComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
                    countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"]
                ],
                exports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_43__["NgxPaginationModule"],
                    countup_js_angular2__WEBPACK_IMPORTED_MODULE_44__["CountUpModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_47__["QuillModule"],
                    _components_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_45__["PaymentMethodsComponent"],
                    _components_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_48__["GenericTableComponent"],
                    _components_common_orders_common_orders_component__WEBPACK_IMPORTED_MODULE_50__["CommonOrdersComponent"]
                ],
                entryComponents: [_modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_52__["BannedComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Qn77":
/*!*******************************************!*\
  !*** ./src/app/shared/watcher.service.ts ***!
  \*******************************************/
/*! exports provided: WatcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatcherService", function() { return WatcherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "9uVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class WatcherService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectCurrency = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectPaymentGateway = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectPaymentGateways = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initPaymentGateways = false;
        this.subjectGold = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setVars();
    }
    change(data) {
        this.subject.next(data);
    }
    get() {
        return this.subject.asObservable();
    }
    logout() {
        localStorage.removeItem('jwt');
        this.change({ jwt: null });
        this.router.navigate([`/login`]);
    }
    getItem(name) {
        try {
            return JSON.parse(localStorage.getItem(name));
        }
        catch (err) {
            return [];
        }
    }
    setVars() {
        if (!this.getItem('services')) {
            localStorage.setItem('services', '[]');
        }
        else {
            localStorage.setItem('services', JSON.stringify(this.getItem('services')));
        }
        if (!this.getItem('powerleveling')) {
            localStorage.setItem('powerleveling', '[]');
        }
        else {
            localStorage.setItem('powerleveling', JSON.stringify(this.getItem('powerleveling')));
        }
        if (!this.getItem('accounts')) {
            localStorage.setItem('accounts', '[]');
        }
        else {
            localStorage.setItem('accounts', JSON.stringify(this.getItem('accounts')));
        }
    }
    updatePaymentGateways(paymentGateways) {
        this.subjectPaymentGateways.next(paymentGateways);
    }
    getPaymentGateways() {
        return this.subjectPaymentGateways.asObservable();
    }
    updatePaymentGateway(payload) {
        this.subjectPaymentGateway.next(payload);
    }
    getPaymentGateway() {
        return this.subjectPaymentGateway.asObservable();
    }
    setCurrency(name) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setCurrentCurrency"])(name);
        this.subjectCurrency.next(name);
    }
    getCurrency() {
        return this.subjectCurrency.asObservable();
    }
}
WatcherService.ɵfac = function WatcherService_Factory(t) { return new (t || WatcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WatcherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WatcherService, factory: WatcherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatcherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "RE2m":
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/authinterceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "9uVP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/of */ "I65S");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/banned/banned.component */ "+aHA");
/* harmony import */ var _watcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../watcher.service */ "Qn77");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _progressive_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../progressive-loader.service */ "Bblx");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");











class AuthInterceptor {
    constructor(watcher, snackBar, loader, dialog) {
        this.watcher = watcher;
        this.snackBar = snackBar;
        this.loader = loader;
        this.dialog = dialog;
    }
    intercept(req, next) {
        this.loader.updateLoader(true);
        const authToken = `Bearer ${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getJwtToken"])()}`;
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                switch (event.status) {
                    case 200: // Ok
                        break;
                    case 201: // Created
                        break;
                    case 202: // Accepted
                        break;
                    default:
                        break;
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(response => {
            if (response.status !== 403) {
                this.snackBar.open(response.error, 'Dismiss', {
                    duration: 5000,
                });
            }
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (response.status) {
                    case 400:
                        // this.notification.showError(errorMessage, false, 5);
                        /**
                         * Bad Request
                         */
                        break;
                    case 401:
                        /**
                         * Unauthorized
                         */
                        // this.watcher.logout();
                        break;
                    case 403:
                        // this.notification.showError(errorMessage, false, 5);
                        this.dialog.open(_modals_banned_banned_component__WEBPACK_IMPORTED_MODULE_5__["BannedComponent"], {
                            data: {
                                message: response.error
                            },
                            width: '500px'
                        });
                        break;
                    case 500:
                        /**
                         * Internal Server Error
                         */
                        break;
                    default:
                        if (response.error && response.error.validation && response.error.validation[0]) {
                            // this.notification.onError('Error', response.error.validation[0].errorMessage);
                        }
                        else {
                            // this.notification.onError('Error', response.error.description);
                        }
                        break;
                }
            }
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(response.message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.loader.updateLoader(false);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_watcher_service__WEBPACK_IMPORTED_MODULE_6__["WatcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_progressive_loader_service__WEBPACK_IMPORTED_MODULE_8__["ProgressiveLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _watcher_service__WEBPACK_IMPORTED_MODULE_6__["WatcherService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _progressive_loader_service__WEBPACK_IMPORTED_MODULE_8__["ProgressiveLoaderService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'rsgoldbar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "Uvqi":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/common-orders/common-orders.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommonOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonOrdersComponent", function() { return CommonOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var _referral_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../referral.service */ "L3BY");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "CcaC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");










function CommonOrdersComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Id: ", element_r21.orderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" UUID: ", element_r21.uuid, " ");
} }
function CommonOrdersComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", element_r22.orderType, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CommonOrdersComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Payment Gateway ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.paymentGateway ? element_r23.paymentGateway.name : "MANUAL", " ");
} }
function CommonOrdersComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pending", element_r24.status === "PENDING")("expired", element_r24.status === "EXPIRED" || element_r24.status === "CANCELED")("open", element_r24.status === "OPEN" || element_r24.status === "NEW")("resolved", element_r24.status === "RESOLVED" || element_r24.status === "COMPLETED")("unresolved", element_r24.status === "UNRESOLVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.status ? element_r24.status : "-", " ");
} }
function CommonOrdersComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Subtotal ", ctx_r9.getCurrencySymbol(element_r25.currency), "", element_r25.invoice.subtotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Fee: ", ctx_r9.getCurrencySymbol(element_r25.currency), "", element_r25.invoice.fee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Total: ", ctx_r9.getCurrencySymbol(element_r25.currency), "", element_r25.invoice.total, " ");
} }
function CommonOrdersComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.delivered ? "Yes" : "No", " ");
} }
function CommonOrdersComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Updated: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r27.lastUpdated, "short"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date Created: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, element_r27.dateCreated, "short"), " ");
} }
function CommonOrdersComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonOrdersComponent_td_30_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const element_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.expandedElement = ctx_r29.expandedElement === element_r28 ? null : element_r28; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonOrdersComponent_td_32_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " URL: Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Charge ID: ", element_r31.payment.coinbase.identifier ? element_r31.payment.coinbase.identifier : "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Context: ", element_r31.payment.coinbase.context ? element_r31.payment.coinbase.context : "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Code: ", element_r31.payment.coinbase.code ? element_r31.payment.coinbase.code : "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://commerce.coinbase.com/charges/" + element_r31.payment.coinbase.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CommonOrdersComponent_td_32_hr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function CommonOrdersComponent_td_32_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gold Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" RSN: ", element_r31.gold.rsn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Units: ", element_r31.gold.units, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Server: ", element_r31.gold.server === 1 ? "OldSchool" : "Runescape3", "");
} }
function CommonOrdersComponent_td_32_hr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function CommonOrdersComponent_td_32_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account #", i_r40 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account Id: ", account_r39._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account title: ", account_r39.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account price: $", account_r39.price, " ");
} }
function CommonOrdersComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CommonOrdersComponent_td_32_div_9_Template, 11, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CommonOrdersComponent_td_32_hr_10_Template, 1, 0, "hr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommonOrdersComponent_td_32_div_11_Template, 11, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommonOrdersComponent_td_32_hr_12_Template, 1, 0, "hr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommonOrdersComponent_td_32_div_13_Template, 10, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r16.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r31 == ctx_r16.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" IP Address: ", element_r31.ipAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payment Gateway: ", element_r31.paymentGateway ? element_r31.paymentGateway.name : "MANUAL", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r31.payment.coinbase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r31.gold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r31.gold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isEmptyOrNull(element_r31.accounts));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r31.accounts);
} }
function CommonOrdersComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function CommonOrdersComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 45);
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r18.expandedElement === element_r41);
} }
function CommonOrdersComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function CommonOrdersComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 47);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
const _c1 = function () { return ["expandedDetail"]; };
const _c2 = function (a2, a3) { return { id: "server", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
class CommonOrdersComponent {
    constructor(referralService, user) {
        this.referralService = referralService;
        this.user = user;
        this.selfUser = false;
        this.referralHistory = false;
        this.referralId = '';
        this.isEmptyOrNull = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["isEmptyOrNull"];
        this.getCurrencySymbol = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrencySymbol"];
        this.columnsToDisplay = [
            'orderId',
            'tasks',
            'paymentGateway',
            'status',
            'total',
            'dates',
            'delivered',
            'view'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.data = [];
        this.p = 1;
    }
    ngOnInit() {
        this.getPage(1);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getPage(page) {
        this.loading = true;
        if (this.selfUser) {
            this.user.getUserOrders(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getUser"])().id, page).subscribe(response => {
                this.total = response.totalCount;
                this.p = page;
                this.loading = false;
                this.data = response.orders;
                this.dataSource.data = response.orders;
            });
        }
        if (this.referralHistory && !Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["isEmptyOrNull"])(this.referralId)) {
            this.referralService.getOrders(this.referralId, page).subscribe(response => {
                this.total = response.totalCount;
                this.p = page;
                this.loading = false;
                this.data = response.orders;
                this.dataSource.data = response.orders;
            });
        }
    }
    isDefinedAndNotNull(input) {
        return !Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_3__["isEmptyOrNull"])(input) && Array.isArray(input) && input.length > 0;
    }
}
CommonOrdersComponent.ɵfac = function CommonOrdersComponent_Factory(t) { return new (t || CommonOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_referral_service__WEBPACK_IMPORTED_MODULE_4__["ReferralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
CommonOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonOrdersComponent, selectors: [["app-common-orders"]], inputs: { selfUser: "selfUser", referralHistory: "referralHistory", referralId: "referralId" }, decls: 38, vars: 15, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "paginator"], [1, "spinner", 3, "ngClass"], ["id", "server", 3, "pageChange"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "orderId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "max-width: 300px; width: 300px", 4, "matCellDef"], ["matColumnDef", "tasks"], ["mat-cell", "", "style", "max-width: 100px; width: 100px", 4, "matCellDef"], ["matColumnDef", "paymentGateway"], ["matColumnDef", "status"], ["mat-cell", "", "style", "max-width: 100px; width: 100px", 3, "pending", "expired", "open", "resolved", "unresolved", 4, "matCellDef"], ["matColumnDef", "total"], ["mat-cell", "", "style", "max-width: 150px; width: 150px", 4, "matCellDef"], ["matColumnDef", "delivered"], ["matColumnDef", "dates"], ["matColumnDef", "view"], ["mat-cell", "", "style", "max-width: 50px; width: 50px", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["style", "display: none;", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", "", 2, "max-width", "300px", "width", "300px"], ["mat-cell", "", 2, "max-width", "100px", "width", "100px"], [3, "innerHTML"], ["mat-cell", "", 2, "max-width", "150px", "width", "150px"], ["mat-cell", "", 2, "max-width", "50px", "width", "50px"], [1, "material-icons", 3, "click"], ["mat-cell", ""], [1, "example-element-detail"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["class", "row mb-2", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mb-2"], ["target", "_blank", 3, "href"], [1, "row", "mb-2"], [1, "mb-2"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"], ["mat-row", "", 1, "example-detail-row"], [2, "display", "none"]], template: function CommonOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CommonOrdersComponent_Template_pagination_controls_pageChange_5_listener($event) { return ctx.getPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommonOrdersComponent_th_8_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CommonOrdersComponent_td_9_Template, 4, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommonOrdersComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommonOrdersComponent_td_12_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CommonOrdersComponent_th_14_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CommonOrdersComponent_td_15_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CommonOrdersComponent_th_17_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CommonOrdersComponent_td_18_Template, 2, 11, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CommonOrdersComponent_th_20_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CommonOrdersComponent_td_21_Template, 6, 6, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommonOrdersComponent_th_23_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CommonOrdersComponent_td_24_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CommonOrdersComponent_th_26_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CommonOrdersComponent_td_27_Template, 6, 8, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CommonOrdersComponent_th_29_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CommonOrdersComponent_td_30_Template, 3, 0, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CommonOrdersComponent_td_32_Template, 14, 9, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CommonOrdersComponent_tr_33_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CommonOrdersComponent_tr_34_Template, 1, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CommonOrdersComponent_tr_35_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CommonOrdersComponent_li_36_Template, 1, 0, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "paginate");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 6, ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c2, ctx.p, ctx.total)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  margin-top: 30px;\n  padding: 15px;\n  z-index: 9;\n}\n\n.transactions-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbW1vbi1vcmRlcnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxnQkFBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFGQTtFQUNJLHNCQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KIiwiZmlsZSI6ImNvbW1vbi1vcmRlcnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcXDpob3N0XG4gICAgbWFyZ2luLXRvcDogMzBweFxuICAgIHBhZGRpbmc6IDE1cHhcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxuICAgIHotaW5kZXg6IDkgXG5cblxuLnRyYW5zYWN0aW9ucy10YWJsZVxuICAgIHdpZHRoOiAxMDAlXG4gICAgXG50YWJsZVxuICAgIHdpZHRoOiAxMDAlXG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvd1xuICAgIGhlaWdodDogMFxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZVxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWZcblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGRcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwXG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-orders',
                templateUrl: './common-orders.component.html',
                styleUrls: ['./common-orders.component.sass'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _referral_service__WEBPACK_IMPORTED_MODULE_4__["ReferralService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, { selfUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], referralHistory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], referralId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VEdu":
/*!****************************************!*\
  !*** ./src/app/shared/blog.service.ts ***!
  \****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class BlogService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'blog';
    }
    addBlog(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    getBlogs(pageNumber = 1) {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}`);
    }
    getBlog(id) {
        return this.http.get(`${this.defaultController}${this.slug}/${id}`);
    }
    updateBlog(id, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    deleteBlog(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "W/4C":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/generic-table/generic-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenericTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericTableComponent", function() { return GenericTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function GenericTableComponent_ng_container_6_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getName(column_r3), " ");
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.execute(column_r3, element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r3 === "lastLoginDate" || column_r3 === "dateJoined" || column_r3 === "expirationDate" || column_r3 === "dateCreated" || column_r3 === "lastUpdated" || column_r3 === "lastLogin" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, element_r7[column_r3], "short") : element_r7[column_r3], " ");
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r7[column_r3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_3_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.execute("view", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_4_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.execute("pay", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_5_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.execute("requests", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_6_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.execute("edit", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_7_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.execute("update", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_8_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.execute("settings", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_9_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.execute("revoke", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenericTableComponent_ng_container_6_td_2_ng_container_10_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.execute("delete", element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GenericTableComponent_ng_container_6_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenericTableComponent_ng_container_6_td_2_ng_container_1_Template, 4, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenericTableComponent_ng_container_6_td_2_ng_container_2_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GenericTableComponent_ng_container_6_td_2_ng_container_3_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GenericTableComponent_ng_container_6_td_2_ng_container_4_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GenericTableComponent_ng_container_6_td_2_ng_container_5_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GenericTableComponent_ng_container_6_td_2_ng_container_6_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GenericTableComponent_ng_container_6_td_2_ng_container_7_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GenericTableComponent_ng_container_6_td_2_ng_container_8_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GenericTableComponent_ng_container_6_td_2_ng_container_9_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GenericTableComponent_ng_container_6_td_2_ng_container_10_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GenericTableComponent_ng_container_6_td_2_ng_container_11_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 !== "edit" && column_r3 !== "img" && column_r3 !== "revoke" && column_r3 !== "view" && column_r3 !== "delete" && column_r3 !== "settings" && column_r3 !== "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "revoke");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "send");
} }
function GenericTableComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GenericTableComponent_ng_container_6_th_1_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenericTableComponent_ng_container_6_td_2_Template, 12, 11, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r3);
} }
function GenericTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function GenericTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
class GenericTableComponent {
    constructor() {
        this.displayedColumns = [];
        this.data = [];
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnChanges(changes) {
        if (changes.data !== undefined && changes.data.currentValue !== undefined) {
            this.dataSource.data = changes.data.currentValue;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    execute(action, element) {
        this.action.emit({ action, element });
    }
    getName(input) {
        switch (input) {
            case 'orderId':
                return 'Order ID';
            case 'total':
                return 'Total';
            case 'server':
                return 'Server';
            case 'subServer':
                return 'Sub-Server';
            case 'description':
                return 'Description';
            case 'dateCreated':
                return 'Date Created';
            case 'lastUpdated':
                return 'Last Updated';
            case 'ipAddress':
                return 'IP Address';
            case 'action':
                return 'Action';
            case 'userId':
                return 'User ID';
            case 'groupName':
                return 'Group Name';
            case 'email':
                return 'Email';
            case 'update':
                return 'Update';
            case 'edit':
                return 'Edit';
            case 'rsn':
                return 'RSN';
            case 'refBy':
                return 'Referred By';
            case 'blacklisted':
                return 'Blacklisted';
            case 'totalValue':
                return 'Total Value';
            case 'totalOrders':
                return 'Total Orders';
            case '_id':
                return 'ID';
            case 'view':
                return 'View';
            case 'code':
                return 'Code';
            default:
                return input;
        }
    }
}
GenericTableComponent.ɵfac = function GenericTableComponent_Factory(t) { return new (t || GenericTableComponent)(); };
GenericTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericTableComponent, selectors: [["app-generic-table"]], viewQuery: function GenericTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { displayedColumns: "displayedColumns", data: "data" }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 4, consts: [[1, "generic-table"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], [3, "click"], [2, "height", "50px", 3, "src"], [1, "fas", "fa-hand-holding-usd", 3, "click"], [1, "fas", "fa-paper-plane"], ["mat-header-row", ""], ["mat-row", ""]], template: function GenericTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GenericTableComponent_ng_container_6_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GenericTableComponent_tr_7_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GenericTableComponent_tr_8_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  max-width: 150px;\n  padding: 5px;\n  word-break: break-all;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dlbmVyaWMtdGFibGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFQyxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUtGIiwiZmlsZSI6ImdlbmVyaWMtdGFibGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcXDpob3N0XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB3aWR0aDogMTAwJVxuICBtYXJnaW4tYm90dG9tOiAxNXB4XG50YWJsZSBcbiAgd2lkdGg6IDEwMCVcblxuLm1hdC1pY29uXG4gIGN1cnNvcjogcG9pbnRlclxuXG4ubWF0LWNlbGxcbiAgbWF4LXdpZHRoOiAxNTBweFxuICBwYWRkaW5nOiA1cHhcbiAgd29yZC1icmVhazogYnJlYWstYWxsXG5cbmlcbiAgZm9udC1zaXplOiAyMHB4XG4gIGN1cnNvcjogcG9pbnRlciJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-table',
                templateUrl: './generic-table.component.html',
                styleUrls: ['./generic-table.component.sass']
            }]
    }], function () { return []; }, { displayedColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "CzEO");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gzKn":
/*!********************************************!*\
  !*** ./src/app/shared/requests.service.ts ***!
  \********************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "9uVP");





class RequestsService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getJwtToken"])()}`
            })
        };
    }
    post(url, body) {
        return this.http.post(url, body);
    }
    get(url) {
        return this.http.get(url);
    }
    edit(url, body) {
        return this.http.put(url, body);
    }
    delete(url) {
        return this.http.delete(url);
    }
}
RequestsService.ɵfac = function RequestsService_Factory(t) { return new (t || RequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestsService, factory: RequestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jqC5":
/*!***************************************************!*\
  !*** ./src/app/shared/payment-gateway.service.ts ***!
  \***************************************************/
/*! exports provided: PaymentGatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGatewayService", function() { return PaymentGatewayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class PaymentGatewayService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'paymentgateway';
    }
    getPaymentGateways() {
        return this.http.get(`${this.defaultController}${this.slug}`);
    }
    updatePaymentGateways(payload) {
        return this.http.put(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
PaymentGatewayService.ɵfac = function PaymentGatewayService_Factory(t) { return new (t || PaymentGatewayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
PaymentGatewayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentGatewayService, factory: PaymentGatewayService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentGatewayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "kbRu":
/*!************************************************!*\
  !*** ./src/app/shared/transactions.service.ts ***!
  \************************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TransactionsService {
    constructor(http) {
        this.http = http;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'g2apay-ipn';
    }
    getAllTransactions() {
        return this.http.get(`${this.defaultController}${this.slug}`);
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lY84":
/*!*****************************************!*\
  !*** ./src/app/shared/skill.service.ts ***!
  \*****************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "pWCv");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class SkillService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'skill';
    }
    getSkill(id) {
        return this.http.get(`${this.defaultController}${this.slug}/${id}`);
    }
    getSkills() {
        return this.http.get(`${this.defaultController}${this.slug}`);
    }
    deleteSkill(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    addSkill(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    editSkill(id, payload) {
        return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
    updateSkillOrders(payload) {
        return this.http.put(`${this.defaultController}${this.slug}/order`, payload).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000,
            });
        }));
    }
}
SkillService.ɵfac = function SkillService_Factory(t) { return new (t || SkillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
SkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillService, factory: SkillService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "nBma":
/*!****************************************!*\
  !*** ./src/app/shared/cart.service.ts ***!
  \****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "9uVP");




class CartService {
    constructor() {
        this.subject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        this.subject.next();
    }
    addItem(key, value) {
        let array = JSON.parse(localStorage.getItem(key));
        array.push(value);
        localStorage.setItem(key, JSON.stringify(array));
        this.subject.next();
    }
    removeItem(key, keyId, idValue) {
        let array = JSON.parse(localStorage.getItem(key));
        array = array.filter(x => x[keyId] !== idValue);
        localStorage.setItem(key, JSON.stringify(array));
        this.subject.next();
    }
    updateItem(key, keyId, idValue, newValue) {
        let array = JSON.parse(localStorage.getItem(key));
        if (this.isAdded(key, keyId, idValue)) {
            const index = this.getItemIndex(key, keyId, idValue);
            if (index !== -1) {
                array[index] = newValue;
                this.setItem(key, array);
                this.subject.next();
            }
        }
    }
    isAdded(key, keyId, idValue) {
        let array = JSON.parse(localStorage.getItem(key));
        const found = array.find(x => x[keyId] === idValue);
        return found !== undefined && found !== null;
    }
    getItemIndex(key, keyId, idValue) {
        let array = JSON.parse(localStorage.getItem(key));
        return array.map(x => x[keyId]).indexOf(idValue);
    }
    getItem(key, keyId, idValue) {
        let array = JSON.parse(localStorage.getItem(key));
        return array.find(x => x[keyId] === idValue);
    }
    get cartTotal() {
        const accounts = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getLocalStorageArray"])('accounts');
        const powerleveling = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getLocalStorageArray"])('powerleveling');
        const services = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getLocalStorageArray"])('services');
        let usd = 0;
        let items = 0;
        let totalAccountUsd = 0;
        let totalPowerlevelingUsd = 0;
        let totalServicesUsd = 0;
        accounts.forEach(account => {
            totalAccountUsd += account.price;
            items++;
        });
        powerleveling.forEach(p => {
            totalPowerlevelingUsd += p.price;
            items++;
        });
        services.forEach(q => {
            totalServicesUsd += q.price;
            items++;
        });
        usd = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["round"])(totalAccountUsd + totalPowerlevelingUsd + totalServicesUsd);
        return {
            usd,
            items
        };
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-main-module */ "modules-main-module").then(__webpack_require__.bind(null, /*! ./modules/main.module */ "Bux+")).then(m => m.MainModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yL2D":
/*!*****************************************!*\
  !*** ./src/app/shared/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class OrderService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.defaultController = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}/api/`;
        this.slug = 'order';
    }
    addOrder(payload) {
        return this.http.post(`${this.defaultController}${this.slug}`, payload);
    }
    getOrders(pageNumber = 1, filterCriteria = '') {
        return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`);
    }
    getSingleOrder(id) {
        return this.http.get(`${this.defaultController}order/${id}`);
    }
    updateOrder(id) {
        return this.http
            .put(`${this.defaultController}${this.slug}/${id}`, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000
            });
        }));
    }
    deleteOrder(id) {
        return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.snackBar.open(response.result, 'Dismiss', {
                duration: 5000
            });
        }));
    }
    getRates() {
        return this.http.get(`${this.defaultController}${this.slug}/rates`);
    }
    setRate(curr, newRate) {
        return this.http.put(`${this.defaultController}${this.slug}/rates/${curr}`, { rate: +newRate });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map