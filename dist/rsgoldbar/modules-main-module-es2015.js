(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-module"],{

/***/ "0MA6":
/*!*********************************************************************!*\
  !*** ./src/app/shared/resolvers/PaymentGatewayResolver.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentGatewayResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGatewayResolver", function() { return PaymentGatewayResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _payment_gateway_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment-gateway.service */ "jqC5");



class PaymentGatewayResolver {
    constructor(paymentGatewayService) {
        this.paymentGatewayService = paymentGatewayService;
    }
    resolve(route, state) {
        return this.paymentGatewayService.getPaymentGateways();
    }
}
PaymentGatewayResolver.ɵfac = function PaymentGatewayResolver_Factory(t) { return new (t || PaymentGatewayResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_payment_gateway_service__WEBPACK_IMPORTED_MODULE_1__["PaymentGatewayService"])); };
PaymentGatewayResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentGatewayResolver, factory: PaymentGatewayResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentGatewayResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _payment_gateway_service__WEBPACK_IMPORTED_MODULE_1__["PaymentGatewayService"] }]; }, null); })();


/***/ }),

/***/ "6nXq":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-not-found"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-not-found[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n  color: black;\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFDSiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ub3QtZm91bmRcbiAgICBtYXJnaW4tdG9wOiAzMHB4XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgY29sb3I6IGJsYWNrXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Bux+":
/*!****************************************!*\
  !*** ./src/app/modules/main.module.ts ***!
  \****************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "Vxll");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _core_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/main/main.component */ "gabB");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/footer/footer.component */ "FxTl");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/navbar/navbar.component */ "R2Se");









class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_core_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _core_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                    _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





const _c0 = function () { return ["/buy/oldschool"]; };
const _c1 = function () { return ["/sell"]; };
const _c2 = function () { return ["/swap"]; };
const _c3 = function () { return ["/infernal"]; };
const _c4 = function () { return ["/"]; };
class FooterComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.showFooter = this.router.url === '/';
        this.openLiveChat = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_1__["openLiveChat"];
    }
    ngOnInit() {
    }
    contactus() {
        const w = window;
        w.$zopim.livechat.window.show();
        w.$zopim.livechat.say(`Hi, I need something!`);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 59, vars: 10, consts: [[1, "footer"], [1, "container-fluid"], [1, "d-flex", "flex-row", "flex-wrap"], [1, "col-sm-6", "col-xs-6", "col-md-3", "col-lg-3", "col-xl-3", "col-6"], [1, "title"], [1, "description"], ["target", "_blank", 3, "routerLink"], ["href", "https://www.sythe.org/threads/rsgoldbar-vouches/", "target", "_blank"], ["href", "https://www.trustpilot.com/review/RSGoldBar.com", "target", "_blank"], ["href", "/terms-of-services", 2, "cursor", "pointer"], ["href", "/privacy-policy", 2, "cursor", "pointer"], [1, "col-sm-6", "col-xs-6", "col-md-3", "col-lg-3", "col-xl-3", "col-6", "text-center"], [1, "title", "d-flex", "justify-content-center"], ["src", "./assets/images/branding/logo.png", 2, "max-width", "30px", "margin-right", "10px"], [1, "pt-1"], [1, "white"], [1, "description", "description-sm", "flex-row", "d-flex", "justify-content-around", "align-items-center"], ["href", "https://www.facebook.com/RsGoldBarShop", "target", "_blank"], ["width", "30px", "src", "./assets/images/branding/facebook.svg", "alt", ""], ["href", "https://discord.com/invite/5Rx5RJf", "target", "_blank"], ["width", "30px", "src", "./assets/images/branding/discord.svg", "alt", "", 2, "color", "gold"], ["href", "https://www.instagram.com/rsgoldbar/", "target", "_blank"], ["width", "30px", "src", "./assets/images/branding/instagram.svg", "alt", ""], [1, "row"], [1, "col-12", "text-center", "description"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Buy Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sell Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Swap Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Infernal Capes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sythe Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Trust Pilot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Terms of Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "RS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "GOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "BAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 2021 RSGoldBar.com. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #0a101a;\n  width: 100%;\n  background: #0a101a url(/assets/images/branding/footer.png) center center no-repeat;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f6b000;\n  font-size: 24px;\n  text-transform: uppercase;\n  font-family: \"Nexa Bold\", sans-serif;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  font-family: \"Century Gothic\" !important;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .description-sm[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQUVaO0FBRFE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7QUFJaEI7QUFIWTtFQUNJLGVBQUE7QUFLaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXFw6aG9zdFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgYmFja2dyb3VuZDogIzBhMTAxYVxuICAgIHdpZHRoOiAxMDAlXG4gICAgYmFja2dyb3VuZDogIzBhMTAxYSB1cmwoL2Fzc2V0cy9pbWFnZXMvYnJhbmRpbmcvZm9vdGVyLnBuZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXRcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG9cbiAgICAuZm9vdGVyXG4gICAgICAgIHdpZHRoOiA5MCVcbiAgICAgICAgbWFyZ2luOiAwIGF1dG9cbiAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICBjb2xvcjogI2Y2YjAwMFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ05leGEgQm9sZCcsIHNhbnMtc2VyaWZcbiAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycgIWltcG9ydGFudFxuICAgICAgICAgICAgaW1nXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgICAgICAgICAmLXNtXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Q6Ne":
/*!************************************************************!*\
  !*** ./src/app/shared/resolvers/StockResolver.resolver.ts ***!
  \************************************************************/
/*! exports provided: StockResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockResolver", function() { return StockResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock.service */ "8T64");



class StockResolver {
    constructor(injector) {
        this.injector = injector;
        this.stock = this.injector.get(_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"]);
    }
    resolve(route, state) {
        return this.stock.getStock();
    }
}
StockResolver.ɵfac = function StockResolver_Factory(t) { return new (t || StockResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
StockResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StockResolver, factory: StockResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "R2Se":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils */ "9uVP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/watcher.service */ "Qn77");
/* harmony import */ var src_app_shared_requests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/requests.service */ "gzKn");
/* harmony import */ var src_app_shared_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/cart.service */ "nBma");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["clickMenuTrigger"];
function NavbarComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const c_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.watcher.setCurrency(c_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/images/flags/" + c_r11.name + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r11.name, " ");
} }
function NavbarComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function NavbarComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ACP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.watcher.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/"]; };
const _c2 = function () { return ["/buy/oldschool"]; };
const _c3 = function () { return ["/sell"]; };
const _c4 = function () { return ["/swap"]; };
const _c5 = function () { return ["/infernal"]; };
const _c6 = function () { return ["/admin/orders"]; };
const _c7 = function () { return ["/admin/stock"]; };
const _c8 = function () { return ["/buy", "oldschool"]; };
class NavbarComponent {
    constructor(watcher, router, route, req, cartService) {
        this.watcher = watcher;
        this.router = router;
        this.route = route;
        this.req = req;
        this.cartService = cartService;
        this.getPaymentGatewayName = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getPaymentGatewayName"];
        this.getCurrencySymbol = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"];
        this.getCurrencyConverted = src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrencyConverted"];
        this.currencies = [];
        this.isLoggedIn = false;
        this.isAdmin = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isAdmin"])();
        this.isWorker = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isWorker"])();
        this.currency = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrentCurrency"])() || 'USD';
        const allPgs = [
            ...this.route.snapshot.data.paymentGateways,
        ];
        Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["setPaymentGateways"])(allPgs);
    }
    ngOnInit() {
        this.router.events.subscribe(result => {
            if (result instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
        if (!Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyOrNull"])(this.route.snapshot) && !Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyOrNull"])(this.route.snapshot.queryParams) && !Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyOrNull"])(this.route.snapshot.queryParams.ref)) {
            localStorage.setItem('ref', this.route.snapshot.queryParams.ref);
        }
        this.isLoggedIn = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isLoggedIn"])();
        this.watcher.get().subscribe(result => {
            if (result.jwt !== undefined) {
                this.isLoggedIn = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isLoggedIn"])();
                this.isAdmin = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isAdmin"])();
                this.isWorker = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["isWorker"])();
            }
        });
        const currenciesUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl}/api/currencies`;
        this.req.get(currenciesUrl).subscribe(result => {
            Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["setCurrencies"])(result);
            for (let currency in result) {
                this.currencies.push({
                    name: currency,
                    rate: result[currency]
                });
            }
            if (Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrentCurrency"])()) {
                this.watcher.subjectCurrency.next(Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrentCurrency"])());
            }
            else {
                Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["setCurrentCurrency"])('USD');
                this.watcher.subjectCurrency.next('USD');
            }
            this.currency = Object(src_app_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getCurrentCurrency"])();
        });
        this.watcher.getCurrency().subscribe(r => {
            this.currency = r;
        });
    }
    redirect(url, externalLink = false) {
        if (externalLink) {
            window.location.href = url;
        }
        else {
            this.router.navigate([url]);
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__["WatcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mobileMatMenuBtn = _t.first);
    } }, decls: 55, vars: 32, consts: [[1, "navbar-header"], [1, "navbar-header-wrapper"], ["mat-button", "", 1, "mat-button", "navbar-link", 3, "routerLink"], ["src", "./assets/images/branding/logo.png", 1, "logo"], ["src", "./assets/images/branding/rsgoldbar.png", 1, "rsgoldbar"], [1, "flex-spacer"], ["mat-button", "", 1, "mat-button", "navbar-link", 3, "matMenuTriggerFor"], [2, "height", "20px", 3, "src"], [1, "fas", "fa-caret-down"], ["currencyMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "class", "mat-button navbar-link", "mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["profileMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/profile/change-password", 1, "mat-button", "navbar-link"], ["mat-menu-item", "", "routerLink", "/profile/orders", 1, "mat-button", "navbar-link"], ["class", "mat-button navbar-link", "mat-menu-item", "", "routerLink", "/admin", 4, "ngIf"], ["mat-button", "", "class", "mat-button navbar-link", "routerLink", "/login", 4, "ngIf"], ["mat-button", "", "class", "mat-button navbar-link", "routerLink", "/register", 4, "ngIf"], ["mat-button", "", "class", "mat-button navbar-link", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "mobile-navigator", 3, "matMenuTriggerFor"], ["clickMenuTrigger", "matMenuTrigger"], [1, "material-icons"], ["dashboardmenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mobileMenuOne", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "mat-button", "", 1, "mat-button", "navbar-link", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLink", "/admin", 1, "mat-button", "navbar-link"], ["mat-button", "", "routerLink", "/login", 1, "mat-button", "navbar-link"], [1, "fas", "fa-sign-in-alt"], ["mat-button", "", "routerLink", "/register", 1, "mat-button", "navbar-link"], [1, "fas", "fa-user"], ["mat-button", "", 1, "mat-button", "navbar-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Buy Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sell Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Swap Gold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Infernal Cape ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_button_23_Template, 3, 2, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_button_24_Template, 3, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_button_31_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NavbarComponent_button_32_Template, 3, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NavbarComponent_button_33_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NavbarComponent_button_34_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-menu", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Stock & Rates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-menu", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Buy Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sell Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Swap Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/images/flags/" + ctx.currency + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isWorker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]:not(i) {\n  font-family: \"Nexa Bold\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiKjpub3QoaSlcbiAgICBmb250LWZhbWlseTogJ05leGEgQm9sZCcsIHNhbnMtc2VyaWZcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.sass']
            }]
    }], function () { return [{ type: src_app_shared_watcher_service__WEBPACK_IMPORTED_MODULE_4__["WatcherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_requests_service__WEBPACK_IMPORTED_MODULE_5__["RequestsService"] }, { type: src_app_shared_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }]; }, { mobileMatMenuBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['clickMenuTrigger']
        }] }); })();


/***/ }),

/***/ "Vxll":
/*!************************************************!*\
  !*** ./src/app/modules/main-routing.module.ts ***!
  \************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/main/main.component */ "gabB");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _shared_auth_root_admin_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth/root-admin-auth.guard */ "sdcz");
/* harmony import */ var _shared_resolvers_PaymentGatewayResolver_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/resolvers/PaymentGatewayResolver.resolver */ "0MA6");
/* harmony import */ var _shared_resolvers_StockResolver_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/resolvers/StockResolver.resolver */ "Q6Ne");









const routes = [
    {
        path: '',
        component: _core_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        resolve: {
            paymentGateways: _shared_resolvers_PaymentGatewayResolver_resolver__WEBPACK_IMPORTED_MODULE_5__["PaymentGatewayResolver"],
            stock: _shared_resolvers_StockResolver_resolver__WEBPACK_IMPORTED_MODULE_6__["StockResolver"]
        },
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | landing-landing-module */ "landing-landing-module").then(__webpack_require__.bind(null, /*! ./landing/landing.module */ "eyox")).then(m => m.LandingModule)
            },
            {
                path: 'buy',
                loadChildren: () => __webpack_require__.e(/*! import() | buy-buy-module */ "buy-buy-module").then(__webpack_require__.bind(null, /*! ./buy/buy.module */ "lNjg")).then(m => m.BuyModule)
            },
            {
                path: 'infernal',
                loadChildren: () => __webpack_require__.e(/*! import() | infernal-infernal-module */ "infernal-infernal-module").then(__webpack_require__.bind(null, /*! ./infernal/infernal.module */ "0zii")).then(m => m.InfernalModule)
            },
            {
                path: 'sell',
                loadChildren: () => __webpack_require__.e(/*! import() | sell-sell-module */ "sell-sell-module").then(__webpack_require__.bind(null, /*! ./sell/sell.module */ "gsoe")).then(m => m.SellModule)
            },
            {
                path: 'swap',
                loadChildren: () => __webpack_require__.e(/*! import() | swap-swap-module */ "swap-swap-module").then(__webpack_require__.bind(null, /*! ./swap/swap.module */ "8r5n")).then(m => m.SwapModule)
            },
            {
                path: 'orders',
                loadChildren: () => __webpack_require__.e(/*! import() | order-single-order-single-module */ "order-single-order-single-module").then(__webpack_require__.bind(null, /*! ./order-single/order-single.module */ "U8WQ")).then(m => m.OrderSingleModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "Lvw3")).then(m => m.ProfileModule)
            },
            {
                path: 'terms-of-services',
                loadChildren: () => __webpack_require__.e(/*! import() | tos-tos-module */ "tos-tos-module").then(__webpack_require__.bind(null, /*! ./tos/tos.module */ "feXJ")).then(m => m.TosModule)
            },
            {
                path: 'privacy-policy',
                loadChildren: () => __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "rKAF")).then(m => m.PrivacyModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() | core-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("core-login-login-module")]).then(__webpack_require__.bind(null, /*! ../core/login/login.module */ "hZ2J")).then(m => m.LoginModule)
            },
            {
                path: 'register',
                loadChildren: () => Promise.all(/*! import() | core-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("core-register-register-module")]).then(__webpack_require__.bind(null, /*! ../core/register/register.module */ "YD3Q")).then(m => m.RegisterModule)
            },
            {
                path: 'forgot-password',
                loadChildren: () => Promise.all(/*! import() | core-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("core-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ../core/forgot-password/forgot-password.module */ "IcR4")).then(m => m.ForgotPasswordModule)
            }
        ]
    },
    {
        path: 'admin',
        canLoad: [_shared_auth_root_admin_auth_guard__WEBPACK_IMPORTED_MODULE_4__["RootAdminAuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "13Ib")).then(m => m.AdminModule)
    },
    {
        path: 'not-found',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gabB":
/*!*********************************************!*\
  !*** ./src/app/core/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "R2Se");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "FxTl");





class MainComponent {
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[1, "vertical-spacer"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 1080px;\n  background: #0a101a !important;\n}\n\n.lower-container[_ngcontent-%COMP%] {\n  background: transparent url(/assets/images/bg-2.png) center center no-repeat;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  min-height: 600px;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n}\n\n.testimonials-container[_ngcontent-%COMP%] {\n  background: #00171F;\n}\n\n.website-landing-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n  font-weight: bold;\n}\n\n.website-landing-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n\n.website-landing-header[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 44px;\n  margin: 90px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUNBO0VBQ0ksNEVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFTSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXFw6aG9zdFxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWluLWhlaWdodDogMTAwJVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgbGVmdDogMFxuICAgIHJpZ2h0OiAwXG4gICAgLy8gbWluLXdpZHRoOiAxOTIwcHhcbiAgICBtaW4taGVpZ2h0OiAxMDgwcHhcbiAgICBiYWNrZ3JvdW5kOiAjMGExMDFhICFpbXBvcnRhbnRcbi5sb3dlci1jb250YWluZXJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctMi5wbmcpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XG4gICAgd2lkdGg6IDEwMCVcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAgIGhlaWdodDogMTAwJVxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuLnRlc3RpbW9uaWFscy1jb250YWluZXJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNzFGXG5cbi53ZWJzaXRlLWxhbmRpbmctdGl0bGVcbiAgICBmb250LXNpemU6IDE0cHhcbiAgICBjb2xvcjogd2hpdGVcbiAgICBmb250LXdlaWdodDogYm9sZFxuLndlYnNpdGUtbGFuZGluZy1kZXNjcmlwdGlvblxuICAgIGZvbnQtc2l6ZTogMTZweFxuICAgIGNvbG9yOiB3aGl0ZVxuLndlYnNpdGUtbGFuZGluZy1oZWFkZXJcbiAgICBmb250LXNpemU6IDQ0cHhcbiAgICBjb2xvcjogd2hpdGVcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICBsaW5lLWhlaWdodDogNDRweFxuICAgIG1hcmdpbjogOTBweCAwXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "sdcz":
/*!******************************************************!*\
  !*** ./src/app/shared/auth/root-admin-auth.guard.ts ***!
  \******************************************************/
/*! exports provided: RootAdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootAdminAuthGuard", function() { return RootAdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "9uVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _watcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../watcher.service */ "Qn77");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class RootAdminAuthGuard {
    constructor(router, watcher, snackBar) {
        this.router = router;
        this.watcher = watcher;
        this.snackBar = snackBar;
    }
    canLoad(route, segments) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isLoggedIn"])() && (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isAdmin"])() || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isWorker"])())) {
            return true;
        }
        this.snackBar.open('You do not have access, please log in', 'Dismiss', {
            duration: 5000,
        });
        this.watcher.logout();
        return false;
    }
}
RootAdminAuthGuard.ɵfac = function RootAdminAuthGuard_Factory(t) { return new (t || RootAdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_watcher_service__WEBPACK_IMPORTED_MODULE_3__["WatcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
RootAdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootAdminAuthGuard, factory: RootAdminAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootAdminAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _watcher_service__WEBPACK_IMPORTED_MODULE_3__["WatcherService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-main-module-es2015.js.map