webpackJsonp([9],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancerPageModule", function() { return CancerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancer__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancerPageModule = (function () {
    function CancerPageModule() {
    }
    CancerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancer__["a" /* CancerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancer__["a" /* CancerPage */]),
            ],
        })
    ], CancerPageModule);
    return CancerPageModule;
}());

//# sourceMappingURL=cancer.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancerPage = (function () {
    function CancerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancerPage');
    };
    CancerPage.prototype.goToOnePollutant = function () {
        this.navCtrl.push('OnePollutantPage');
    };
    CancerPage.prototype.goTomultiplePollutant = function () {
        this.navCtrl.push('MultiplecancerPage');
    };
    CancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancer',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\cancer\cancer.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n        Carcinogenic\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image:url(\'https://www.codeproject.com/KB/mobile/439871/BackgroundImage.png\');background-repeat: no-repeat;background-size: 100% 100%">\n  <button ion-button block color="primary" (click)="goToOnePollutant()">\n    Single Pollutant\n  </button>\n\n  <button ion-button block color="primary" (click)="goTomultiplePollutant()">\n    Multiple Pollutant \n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\cancer\cancer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CancerPage);
    return CancerPage;
}());

//# sourceMappingURL=cancer.js.map

/***/ })

});
//# sourceMappingURL=9.js.map