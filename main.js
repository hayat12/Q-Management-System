(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer class=\"qms-footer\"></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'qms';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _components_q_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/q-dashboard.component */ "./src/app/components/q-dashboard.component.ts");
/* harmony import */ var _components_main_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-screen.component */ "./src/app/components/main-screen.component.ts");
/* harmony import */ var _components_q_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/q-management.component */ "./src/app/components/q-management.component.ts");
/* harmony import */ var _components_user_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-screen.component */ "./src/app/components/user-screen.component.ts");
/* harmony import */ var _components_p_appointment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/p-appointment.component */ "./src/app/components/p-appointment.component.ts");
/* harmony import */ var _components_m_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/m-dashboard.component */ "./src/app/components/m-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ng-router */ "./src/app/ng-router.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_q_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["QDashboardComponent"],
                _components_main_screen_component__WEBPACK_IMPORTED_MODULE_5__["MainScreenComponent"],
                _components_q_management_component__WEBPACK_IMPORTED_MODULE_6__["QManagementComponent"],
                _components_user_screen_component__WEBPACK_IMPORTED_MODULE_7__["UserScreenComponent"],
                _components_p_appointment_component__WEBPACK_IMPORTED_MODULE_8__["PAppointmentComponent"],
                _components_m_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["MDashboardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_ng_router__WEBPACK_IMPORTED_MODULE_16__["appRoute"])
            ],
            providers: [
                _services_service_service__WEBPACK_IMPORTED_MODULE_14__["ServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/components/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home.component.html":
/*!************************************************!*\
  !*** ./src/app/components/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n\n  <p>Please scn your appointment card/ Enter your I.C. / Passport Number for issue of Queue Ticket</p>\n  <form [formGroup]=\"fGroup\" (ngSubmit)=\"onSubmit(frm.value)\" #frm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-8\">\n        <div class=\"form-group\">\n          <input formControlName=\"search\" type=\"text\" placeholder=\"Search by User ID\" class=\"form-control\" name=\"search\">\n        </div>\n      </div>\n      <div class=\"col-sm-2\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-2 col-md-4 col-md-4\"></div>\n      <div class=\"col-8 col-md-4 col-md-4\">\n        <button class=\"btn btn-primary btn-block\">Submit</button>\n      </div>\n      <div class=\"col-2 col-md-4 col-md-4\"></div>\n    </div>\n  </form>\n\n  <div class=\"row m-3\">\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-4\"></div>\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-1\"><button class=\"btn btn-ls btn-outline-primary btn-block\"> English</button></div>\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-1\"><button class=\"btn btn-ls btn-outline-primary btn-block\"> Chiness</button></div>\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-1\"><button class=\"btn btn-ls btn-outline-primary btn-block\"> Malay</button></div>\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-1\"><button class=\"btn btn-ls btn-outline-primary btn-block\"> Spanish</button></div>\n    <div class=\"col col-12 mt-1 px-md-1 mt-md-0 col-md-2 col-lg-4\"></div>\n  </div>\n\n  <div *ngIf=\"lists\" class=\"alert-success m-3 p-3\">\n    {{lists.name}}\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.lists = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    HomeComponent.prototype.createForm = function () {
        this.fGroup = this.fb.group({
            search: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    HomeComponent.prototype.onSubmit = function (value) {
        // this.service.querySearch(value.search).subscribe((res:any)=>{
        //   this.lists = res;
        // },(err)=>{
        //   console.log(err);
        // })
        this.router.navigate(['q-dash']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/m-dashboard.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/m-dashboard.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/m-dashboard.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/m-dashboard.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  m-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/m-dashboard.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/m-dashboard.component.ts ***!
  \*****************************************************/
/*! exports provided: MDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDashboardComponent", function() { return MDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MDashboardComponent = /** @class */ (function () {
    function MDashboardComponent() {
    }
    MDashboardComponent.prototype.ngOnInit = function () {
    };
    MDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-m-dashboard',
            template: __webpack_require__(/*! ./m-dashboard.component.html */ "./src/app/components/m-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./m-dashboard.component.css */ "./src/app/components/m-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MDashboardComponent);
    return MDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/main-screen.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/main-screen.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main-screen.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/main-screen.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n\n  <br><br><br>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-2\"></div>\n    <div class=\"col-12 col-md-8\">\n      <button type=\"submit\" class=\"btn btn-secondary btn-block\" (click)=\"toUser()\">Dashboard Screen</button>\n      <button type=\"submit\" class=\"btn btn-secondary btn-block\" (click)=\"toUser()\" >Klosk Screen</button>\n      <button type=\"submit\" class=\"btn btn-secondary btn-block\" (click)=\"toUser()\">Desktop Screen</button>\n    </div>\n    <div class=\"col-12 col-md-2\"></div>\n  </div>\n\n  <div class=\"row m-3\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-12 mt-1 mt-md-0 col-md-3\"><button class=\"btn btn-sm btn-outline-primary btn-block\"> English</button></div>\n        <div class=\"col-12 mt-1 mt-md-0 col-md-3\"><button class=\"btn btn-sm btn-outline-primary btn-block\"> Chiness</button></div>\n        <div class=\"col-12 mt-1 mt-md-0 col-md-3\"><button class=\"btn btn-sm btn-outline-primary btn-block\"> Malay</button></div>\n        <div class=\"col-12 mt-1 mt-md-0 col-md-3\"><button class=\"btn btn-sm btn-outline-primary btn-block\"> Spanish</button></div>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n\n  \n  <div class=\"row\">\n    <div class=\"col-1 col-md-2\"></div>\n    <div class=\"col-4 col-md-2\">\n        <label class=\"label\">Select Department </label>\n    </div>\n    <div class=\"col-6 col-md-6\">\n      <div class=\"input-group mb-3\">\n        <select class=\"custom-select\" id=\"inputGroupSelect01\">\n          <option selected>Select Department</option>\n          <option value=\"1\">Laboratory</option>\n          <option value=\"2\">Outpatient</option>\n          <option value=\"3\">Chemotheraphy</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-1 col-md-2\"></div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/main-screen.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/main-screen.component.ts ***!
  \*****************************************************/
/*! exports provided: MainScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenComponent", function() { return MainScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent(router) {
        this.router = router;
    }
    MainScreenComponent.prototype.ngOnInit = function () {
    };
    MainScreenComponent.prototype.toUser = function () {
        this.router.navigate(['user']);
    };
    MainScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-screen',
            template: __webpack_require__(/*! ./main-screen.component.html */ "./src/app/components/main-screen.component.html"),
            styles: [__webpack_require__(/*! ./main-screen.component.css */ "./src/app/components/main-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/p-appointment.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/p-appointment.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/p-appointment.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/p-appointment.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n  <label>Location :  </label>\n  <input type=\"text\" name=\"location\"><span class=\"glyphicon glyphicon-download-alt\"></span>\n    <div class=\"row\">\n      \n      <div class=\"col-sm-11\">\n        <table class=\"table table-bordered table-sm\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th> Time</th>\n              <th> Patient </th>\n              <th> Activity</th>\n              <th> Status</th>\n              <th> Dept</th>\n              <th> Staff</th>\n              <th> MD</th>\n              <th> Location</th>\n              <th> Comment</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td> 9:15</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n                <td> 9:30</td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n              </tr>\n              <tr>\n                  <td> 9:45</td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n              <tr>\n                  <td> 10 AM</td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n          </tbody>\n  \n        </table>\n      </div>\n      <div class=\"col-sm-1\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"toQM()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"toQM()\">Add</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"toQM()\">Change</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"toQM()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"toQM()\">Refresh</button>\n      \n        <span class=\"glyphicon glyphicon-arrow-right\"></span>\n        <label>All</label>\n        <label>All</label>\n      </div>\n  \n  \n  \n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/p-appointment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/p-appointment.component.ts ***!
  \*******************************************************/
/*! exports provided: PAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAppointmentComponent", function() { return PAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PAppointmentComponent = /** @class */ (function () {
    function PAppointmentComponent(router) {
        this.router = router;
    }
    PAppointmentComponent.prototype.ngOnInit = function () {
    };
    PAppointmentComponent.prototype.toQM = function () {
        this.router.navigate(['q-management']);
    };
    PAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-p-appointment',
            template: __webpack_require__(/*! ./p-appointment.component.html */ "./src/app/components/p-appointment.component.html"),
            styles: [__webpack_require__(/*! ./p-appointment.component.css */ "./src/app/components/p-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PAppointmentComponent);
    return PAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/q-dashboard.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/q-dashboard.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tr{\n    color:blue; cursor: pointer;\n    background-color: rgba(63, 135, 230, 0.404);\n}\n.tr:hover{\n    background-color: rgba(63, 135, 230, 0.945);\n}\n.tr:active{\n    background-color: rgba(63, 135, 230, 0.568);\n}"

/***/ }),

/***/ "./src/app/components/q-dashboard.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/q-dashboard.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 p-2\">\r\n                    <div class=\"embed-responsive embed-responsive-21by9\">\r\n                        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 p-2\">\r\n                    <table class=\"table text-center\">\r\n                        <tr class=\"tr\" (click)=\"tr()\">\r\n                            <td>12</td>\r\n                            <td>32</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <table class=\"table text-center table-borderless table-hover\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th>Current Queue Number</th>\r\n                        <th>Room Number</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>089</td>\r\n                        <td>1</td>\r\n                    <tr>\r\n                        <td>090</td>\r\n                        <td>2</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>091</td>\r\n                        <td>3</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class=\"table text-center table-borderless table-hover\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th>Treatment</th>\r\n                        <th>Room </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>089</td>\r\n                        <td>1</td>\r\n                    <tr>\r\n                        <td>090</td>\r\n                        <td>2</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>091</td>\r\n                        <td>3</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/q-dashboard.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/q-dashboard.component.ts ***!
  \*****************************************************/
/*! exports provided: QDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QDashboardComponent", function() { return QDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QDashboardComponent = /** @class */ (function () {
    function QDashboardComponent(router) {
        this.router = router;
    }
    QDashboardComponent.prototype.ngOnInit = function () {
    };
    QDashboardComponent.prototype.tr = function () {
        this.router.navigate(['m-screen']);
    };
    QDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q-dashboard',
            template: __webpack_require__(/*! ./q-dashboard.component.html */ "./src/app/components/q-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./q-dashboard.component.css */ "./src/app/components/q-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QDashboardComponent);
    return QDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/q-management.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/q-management.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/q-management.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/q-management.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <table class=\"table text-center table-bordered table-sm\">\r\n                        <thead class=\"thead-light\">\r\n                            <tr>\r\n                                <th>Treatment</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>089</td>\r\n                                <td>1</td>\r\n                            <tr>\r\n                                <td>090</td>\r\n                                <td>2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>091</td>\r\n                                <td>3</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <table class=\"table text-center table-bordered table-sm\">\r\n                        <thead class=\"thead-light thead-borderless\">\r\n                            <tr>\r\n                                <th>Treatment</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody coll>\r\n                            <tr>\r\n                                <td>089</td>\r\n                                <td>1</td>\r\n                            <tr>\r\n                                <td>090</td>\r\n                                <td>2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>091</td>\r\n                                <td>3</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <table class=\"table text-center table-bordered table-sm\">\r\n                        <thead class=\"thead-light\">\r\n                            <tr>\r\n                                <th>Treatment</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>089</td>\r\n                                <td>1</td>\r\n                            <tr>\r\n                                <td>090</td>\r\n                                <td>2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>091</td>\r\n                                <td>3</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">2</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <table class=\"table text-center table-bordered table-sm\">\r\n                        <thead class=\"thead-light\">\r\n                            <tr>\r\n                                <th>Treatment</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>089</td>\r\n                                <td>1</td>\r\n                            <tr>\r\n                                <td>090</td>\r\n                                <td>2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>091</td>\r\n                                <td>3</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <table class=\"table text-center table-bordered table-sm\">\r\n                        <thead class=\"thead-light\">\r\n                            <tr>\r\n                                <th>Treatment</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>089</td>\r\n                                <td>1</td>\r\n                            <tr>\r\n                                <td>090</td>\r\n                                <td>2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>091</td>\r\n                                <td>3</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6\">2</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\">Select Date</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\">Today</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\">Print</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/q-management.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/q-management.component.ts ***!
  \******************************************************/
/*! exports provided: QManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QManagementComponent", function() { return QManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QManagementComponent = /** @class */ (function () {
    function QManagementComponent() {
    }
    QManagementComponent.prototype.ngOnInit = function () {
    };
    QManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q-management',
            template: __webpack_require__(/*! ./q-management.component.html */ "./src/app/components/q-management.component.html"),
            styles: [__webpack_require__(/*! ./q-management.component.css */ "./src/app/components/q-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QManagementComponent);
    return QManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/user-screen.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/user-screen.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-screen.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/user-screen.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-3\">\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <table class=\"table table-striped\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th> Qno</th>\n            <th> Scheduled </th>\n            <th> Arrived Time</th>\n            <th> Patient Name</th>\n            <th> NRIC/Passport No</th>\n            <th> Status</th>\n            <th> Location</th>\n            <th> Staff</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td> 050</td>\n            <td> 09:20</td>\n            <td> 09:20</td>\n            <td> John</td>\n            <td> 123456789</td>\n            <td> CA-Call</td>\n            <td> Residensi Rm2</td>\n            <td> Dr. Alex</td>\n          </tr>\n        </tbody>\n\n      </table>\n    </div>\n    <div class=\"col-sm-2\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Call</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Miss Queue</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Show All</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Arrived</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Removed Arrived</button>\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"toPM()\">Clear</button>\n    </div>\n\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-screen.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/user-screen.component.ts ***!
  \*****************************************************/
/*! exports provided: UserScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserScreenComponent", function() { return UserScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserScreenComponent = /** @class */ (function () {
    function UserScreenComponent(router) {
        this.router = router;
    }
    UserScreenComponent.prototype.ngOnInit = function () {
    };
    UserScreenComponent.prototype.toPM = function () {
        this.router.navigate(['p-appointment']);
    };
    UserScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-screen',
            template: __webpack_require__(/*! ./user-screen.component.html */ "./src/app/components/user-screen.component.html"),
            styles: [__webpack_require__(/*! ./user-screen.component.css */ "./src/app/components/user-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserScreenComponent);
    return UserScreenComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small indigo bg-dark text-light\">\n      <div class=\"footer-copyright text-center py-3\">\n            Welcome to Medsys Queue System display panel\n      </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-dark bg-dark text-center p-3 text-light\">\n    <div class=\"row\">\n        <div class=\"col-4\"> </div>\n        <div class=\"col-4\">\n            <h4>Medsys Queue System</h4>\n            <h6>Department Name : Outpatient</h6>\n        </div>\n        <div class=\"col-4\"></div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ng-router.ts":
/*!******************************!*\
  !*** ./src/app/ng-router.ts ***!
  \******************************/
/*! exports provided: appRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoute", function() { return appRoute; });
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home.component.ts");
/* harmony import */ var _components_q_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/q-dashboard.component */ "./src/app/components/q-dashboard.component.ts");
/* harmony import */ var _components_main_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-screen.component */ "./src/app/components/main-screen.component.ts");
/* harmony import */ var _components_q_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/q-management.component */ "./src/app/components/q-management.component.ts");
/* harmony import */ var _components_user_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-screen.component */ "./src/app/components/user-screen.component.ts");
/* harmony import */ var _components_p_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/p-appointment.component */ "./src/app/components/p-appointment.component.ts");
/* harmony import */ var _components_m_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/m-dashboard.component */ "./src/app/components/m-dashboard.component.ts");







var appRoute = [
    {
        path: '',
        component: _components_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'home',
        component: _components_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'm-dash',
        component: _components_m_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["MDashboardComponent"]
    },
    {
        path: 'm-screen',
        component: _components_main_screen_component__WEBPACK_IMPORTED_MODULE_2__["MainScreenComponent"]
    },
    {
        path: 'p-appointment',
        component: _components_p_appointment_component__WEBPACK_IMPORTED_MODULE_5__["PAppointmentComponent"]
    },
    {
        path: 'q-dash',
        component: _components_q_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["QDashboardComponent"]
    },
    {
        path: 'user',
        component: _components_user_screen_component__WEBPACK_IMPORTED_MODULE_4__["UserScreenComponent"]
    },
    {
        path: 'q-management',
        component: _components_q_management_component__WEBPACK_IMPORTED_MODULE_3__["QManagementComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.url = 'http://localhost:3004/list';
    }
    ServiceService.prototype.querySearch = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3004/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hayat/Downloads/qms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map