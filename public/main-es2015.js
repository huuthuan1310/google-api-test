(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/@share/components/folder/folder.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/@share/components/folder/folder.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"d-flex align-items-center justify-content-between folder--container\"\n  matRipple\n>\n  <i class=\"material-icons\">folder_shared</i>\n  <div class=\"folder--text\">{{ folder.name }}</div>\n  <i class=\"material-icons\" (click)=\"log()\">more_vert</i>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\n<button (click)=\"signIn()\">sign in</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <app-folder [folder]=\"item\" *ngFor=\"let item of folders\"></app-folder>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"signOut()\">Sign Out</button>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found works!</p>\n"

/***/ }),

/***/ "./src/@core/core.modules.ts":
/*!***********************************!*\
  !*** ./src/@core/core.modules.ts ***!
  \***********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

// Angular Imports

// This Module's Components
let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: []
    })
], CoreModule);



/***/ }),

/***/ "./src/@share/components/folder/folder.component.scss":
/*!************************************************************!*\
  !*** ./src/@share/components/folder/folder.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".folder--container {\n  width: 250px;\n  padding: 5px 10px;\n  border: 1px solid;\n  border-radius: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.folder--text {\n  padding: 0 12px;\n  flex: 1;\n  display: inline-block;\n  width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW9uZ3V5ZW4vUHJvamVjdHMvZ29vZ2xlLWFwaS10ZXN0L3NyYy9Ac2hhcmUvY29tcG9uZW50cy9mb2xkZXIvZm9sZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL0BzaGFyZS9jb21wb25lbnRzL2ZvbGRlci9mb2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL0BzaGFyZS9jb21wb25lbnRzL2ZvbGRlci9mb2xkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9sZGVyIHtcbiAgJi0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAmLS10ZXh0IHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG4iLCIuZm9sZGVyLS1jb250YWluZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mb2xkZXItLXRleHQge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/@share/components/folder/folder.component.ts":
/*!**********************************************************!*\
  !*** ./src/@share/components/folder/folder.component.ts ***!
  \**********************************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FolderComponent = class FolderComponent {
    constructor() {
        this.folder = {
            id: '1',
            name: 'd'
        };
    }
    log() {
        console.log('log');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FolderComponent.prototype, "folder", void 0);
FolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: __webpack_require__(/*! raw-loader!./folder.component.html */ "./node_modules/raw-loader/index.js!./src/@share/components/folder/folder.component.html"),
        styles: [__webpack_require__(/*! ./folder.component.scss */ "./src/@share/components/folder/folder.component.scss")]
    })
], FolderComponent);



/***/ }),

/***/ "./src/@share/components/folder/folder.module.ts":
/*!*******************************************************!*\
  !*** ./src/@share/components/folder/folder.module.ts ***!
  \*******************************************************/
/*! exports provided: FolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderModule", function() { return FolderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _folder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folder.component */ "./src/@share/components/folder/folder.component.ts");

// Angular Imports



// This Module's Components

let FolderModule = class FolderModule {
};
FolderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [_folder_component__WEBPACK_IMPORTED_MODULE_4__["FolderComponent"]],
        exports: [_folder_component__WEBPACK_IMPORTED_MODULE_4__["FolderComponent"]]
    })
], FolderModule);



/***/ }),

/***/ "./src/@share/components/folder/index.ts":
/*!***********************************************!*\
  !*** ./src/@share/components/folder/index.ts ***!
  \***********************************************/
/*! exports provided: FolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.module */ "./src/@share/components/folder/folder.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderModule", function() { return _folder_module__WEBPACK_IMPORTED_MODULE_0__["FolderModule"]; });




/***/ }),

/***/ "./src/@share/components/index.ts":
/*!****************************************!*\
  !*** ./src/@share/components/index.ts ***!
  \****************************************/
/*! exports provided: FolderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "./src/@share/components/folder/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderModule", function() { return _folder__WEBPACK_IMPORTED_MODULE_0__["FolderModule"]; });




/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ "./src/app/selective-preloading-strategy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_1__["SelectivePreloadingStrategyService"]
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");



let AppComponent = class AppComponent {
    constructor(gapiService) {
        this.gapiService = gapiService;
        this.title = 'google-api-test';
        // First make sure gapi is loaded can be in AppInitilizer
        this.gapiService.onLoad().subscribe();
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: ng_gapi__WEBPACK_IMPORTED_MODULE_2__["GoogleApiService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_core_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../@core/core.modules */ "./src/@core/core.modules.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");














const gapiClientConfig = {
    client_id: '402271985389-atpk31e9attb5s1vbs0u38dunn5uoah9.apps.googleusercontent.com',
    discoveryDocs: [
        'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'
    ],
    ux_mode: 'popup',
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.metadata',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
        'https://www.googleapis.com/auth/drive.photos.readonly',
        'https://www.googleapis.com/auth/drive.readonly'
    ].join(' ')
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
            }),
            ng_gapi__WEBPACK_IMPORTED_MODULE_11__["GoogleApiModule"].forRoot({
                provide: ng_gapi__WEBPACK_IMPORTED_MODULE_11__["NG_GAPI_CONFIG"],
                useValue: gapiClientConfig
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _core_core_modules__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




const authRoutes = [{ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        const url = `/${route.path}`;
        return this.checkLogin(url);
    }
    checkLogin(url) {
        if (this.authService.isUserSignedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        if (url) {
            sessionStorage.setItem('redirectUrl', url);
        }
        this.authService.redirectUrl = url
            ? url
            : sessionStorage.getItem('redirectUrl');
        // Create a dummy session id
        const sessionId = 123456789;
        // Set our navigation extras object
        // that contains our global query params and fragment
        const navigationExtras = {
            queryParams: { session_id: sessionId },
            fragment: 'anchor'
        };
        // Navigate to the login page with extras
        // this.router.navigate(['/login'], navigationExtras);
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
        ],
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ]
    })
], AuthModule);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_gapi_lib_GoogleAuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gapi/lib/GoogleAuthService */ "./node_modules/ng-gapi/lib/GoogleAuthService.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(googleAuthService, router, ngZone) {
        this.googleAuthService = googleAuthService;
        this.router = router;
        this.ngZone = ngZone;
        this.SESSION_STORAGE_KEY = 'accessToken';
        this.user = undefined;
    }
    signIn() {
        this.googleAuthService.getAuth().subscribe(auth => {
            auth
                .signIn()
                .then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
        });
    }
    isUserSignedIn() {
        return !lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](sessionStorage.getItem(this.SESSION_STORAGE_KEY));
    }
    // TODO: Rework
    signOut() {
        this.googleAuthService.getAuth().subscribe(auth => {
            try {
                auth.signOut().then(res => {
                    this.ngZone.run(() => {
                        sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
                        this.router.navigateByUrl('/login');
                    });
                }, err => console.log(err));
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    signInSuccessHandler(res) {
        this.ngZone.run(() => {
            this.user = res;
            sessionStorage.setItem(this.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
            this.router.navigateByUrl('');
        });
    }
    signInErrorHandler(err) {
        console.warn(err);
    }
    setUser(user) {
        this.user = user;
    }
    getCurrentUser() {
        return this.user;
    }
    getToken() {
        const token = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error('no token set , authentication required');
        }
        return sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    }
};
AuthService.ctorParameters = () => [
    { type: ng_gapi_lib_GoogleAuthService__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (this.authService.isUserSignedIn()) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            const redirect = this.authService.redirectUrl
                ? this.router.parseUrl(this.authService.redirectUrl)
                : sessionStorage.getItem('redirectUrl')
                    ? sessionStorage.getItem('redirectUrl')
                    : '/';
            // Redirect the user
            this.router.navigateByUrl(redirect);
        }
    }
    signIn() {
        this.authService.signIn();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_resources_google_drive_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/resources/google-drive-resource */ "./src/app/resources/google-drive-resource.ts");





let HomeComponent = class HomeComponent {
    constructor(router, authService, driveResource) {
        this.router = router;
        this.authService = authService;
        this.driveResource = driveResource;
        this.folders = [];
    }
    ngOnInit() {
        this.driveResource.getList(this.authService.getToken()).subscribe(res => {
            this.folders = res.files.map((x) => {
                return { id: x.id, name: x.name };
            });
        }, (err) => {
            console.log(err);
            if (err.status === 401) {
                this.authService.signOut();
                sessionStorage.setItem('redirectUrl', this.router.url);
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_resources_google_drive_resource__WEBPACK_IMPORTED_MODULE_4__["DriveResource"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingMoule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingMoule", function() { return LayoutRoutingMoule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
                children: []
            }
        ]
    }
];
let LayoutRoutingMoule = class LayoutRoutingMoule {
};
LayoutRoutingMoule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], LayoutRoutingMoule);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LayoutComponent = class LayoutComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    signOut() {
        this.authService.signOut();
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _resources_google_drive_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../resources/google-drive-resource */ "./src/app/resources/google-drive-resource.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var src_share_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@share/components */ "./src/@share/components/index.ts");








let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingMoule"], src_share_components__WEBPACK_IMPORTED_MODULE_7__["FolderModule"]],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
        providers: [_resources_google_drive_resource__WEBPACK_IMPORTED_MODULE_3__["DriveResource"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (this.authService.isUserSignedIn()) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            const redirect = this.authService.redirectUrl
                ? this.router.parseUrl(this.authService.redirectUrl)
                : '';
            // Redirect the user
            this.router.navigateByUrl(redirect);
        }
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/resources/google-drive-resource.ts":
/*!****************************************************!*\
  !*** ./src/app/resources/google-drive-resource.ts ***!
  \****************************************************/
/*! exports provided: DriveResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveResource", function() { return DriveResource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DriveResource = class DriveResource {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://www.googleapis.com/drive/v3/files';
        this.fields = 'files(mimeType,parents,driveId,iconLink,id,name,ownedByMe,owners,shared,sharingUser)';
        this.q = '"0B1p9BpazNQwDaVJqY2lPbkRsemM" in parents';
    }
    // authtoken as parameter only for demo purpose , better use a UserService to get the token
    getList(authtoken) {
        return this.httpClient.get(this.API_URL + '?fields=' + this.fields + '&q=' + this.q, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }
    getById(id, authtoken) {
        return this.httpClient.get(this.API_URL + '?fields=' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Bearer ${authtoken}`
            })
        });
    }
};
DriveResource.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DriveResource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DriveResource);



/***/ }),

/***/ "./src/app/selective-preloading-strategy.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/selective-preloading-strategy.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SelectivePreloadingStrategyService = class SelectivePreloadingStrategyService {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    }
};
SelectivePreloadingStrategyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SelectivePreloadingStrategyService);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leonguyen/Projects/google-api-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map