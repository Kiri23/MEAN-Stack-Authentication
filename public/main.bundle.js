webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Modules



//Third party Module

var AuthService = (function () {
    // inject the http module into the constructor. like the service
    function AuthService(http) {
        this.http = http;
    }
    // this always is going to be a user object because i do the validation in the register view
    // this is the post to register a new user
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.post('/users/register', user, { headers: headers }).map(function (res) { return res.json(); }); // change this to localhost when testing
    };
    // Make Http Call to Login user
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // observable make the http call to authenticate user
        // This is going to send the succes message and the authenticate Token
        return this.http.post('/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    // authenticater user login with the token
    AuthService.prototype.storeUserData = function (token, user) {
        // when using jwt-token it look for this key exactly id_token. saving token to local storage
        localStorage.setItem('id_token', token);
        // save to local storage user. we need to store as a string because it cant store object. when we need it back we parse it back to json
        localStorage.setItem('user', JSON.stringify(user));
        // set values to the variable
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        // set variables to null
        this.authToken = null;
        this.user = null;
        // clear local storage
        localStorage.clear();
    };
    // Get Profile
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        // with this now we have acces to the token.
        this.loadToken();
        // append the token to the header
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // this get request send the token and user info in a json response
        return this.http.get('/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        // Load token from local storage
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // check if there's a user sing in
    AuthService.prototype.checkLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // validate for blank fields
    ValidateService.prototype.validateRegister = function (user) {
        var expresion = user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined;
        if (expresion) {
            return false;
        }
        else {
            return true;
        }
    };
    // validate email
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // return regex bolean expresion 
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// I can Use nodemon -e ts and will always watch file extension ts and restart

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(173),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_components_listgroup_listgroup_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_icon_icon_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_components_sidebar_sidebar_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_progressbar_progressbar_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_box_box_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_boxes_boxes_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_table_table_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_components_modal_modal_component__ = __webpack_require__(239);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// External Modules

// Components









//Services










//appRoutes - va a contener todas las routes del app
var appRoutes = [
    // Home Route
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    // protect route
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    // protect route
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    // protect route
    { path: 'adminDashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_components_listgroup_listgroup_component__["a" /* ListGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_icon_icon_component__["a" /* IconComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_dashboard_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_progressbar_progressbar_component__["a" /* ProgressbarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_box_box_component__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_boxes_boxes_component__["a" /* BoxesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dashboard_components_modal_modal_component__["a" /* ModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__(174),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], AdminDashboardComponent);

//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListGroupComponent = (function () {
    function ListGroupComponent() {
        this.name = "test hello";
    }
    ListGroupComponent.prototype.ngOnInit = function () {
    };
    return ListGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListGroupComponent.prototype, "name", void 0);
ListGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listgroup',
        template: __webpack_require__(175),
        styles: [__webpack_require__(166), __webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], ListGroupComponent);

//# sourceMappingURL=listgroup.component.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(176),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(177),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Modules


// services

// 3rd parthy

var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //Auth service Make http call to Login user
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // authenticate user with the token
                _this.authService.storeUserData(data.token, data.user);
                // show message login
                _this.flashMessage.show("You are now logged in", { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                //data.msg contains user not found or wrong password
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(178),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Modules


// services

// 3rd parthy

var NavbarComponent = (function () {
    // inject the module and service to the constructor
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // click event on log out
    NavbarComponent.prototype.onLogoutClick = function () {
        // como esto es un metodo podemos hacerlo asi. pq no es un observable
        // this just set the variable to null and clear the local storage
        this.authService.logout();
        // show logout message
        this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 4000 });
        // redirect to login
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(179),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    // Inject the service into the constructor
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get request to users/profile to authenticate user with a token.
        this.authService.getProfile().subscribe(function (profile) {
            // user send with the response
            _this.user = profile.user;
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("Unathorized acces", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            _this.router.navigate(['/login']);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(180),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Modules


// Service for validate blank(empty) form and email


// external module 3rd party

var RegisterComponent = (function () {
    //anytime we use a service we need to inject to a constructor and module also need to be injected
    // so we can this.validateService
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.error = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.name, this.username, this.email);
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
            this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register user. since it's an observable we need to subcribe to it.
        this.authService.registerUser(user).subscribe(function (data) {
            // console.log(data);
            // callback with the data(aka json)
            // data.succes I refer to this as the json come with the respond. if user register
            if (data.success) {
                // show a message
                _this.flashMessage.show("You are now registered and can log in", { cssClass: 'alert-success', timeout: 3000 });
                // Redirect to login
                _this.router.navigate(['/login']);
            }
            else {
                // show a message. sugestion maye in the json can be a error message
                _this.flashMessage.show("Something went wrong" + data.error, { cssClass: 'alert-danger', timeout: 3000 });
                // Redirect to login
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(181),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Module


// Service

// 3rd Pathy

var AuthGuard = (function () {
    function AuthGuard(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    // Protect Route with lowercase c
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.checkLoggedIn()) {
            //Authorized acces
            return true;
        }
        else {
            // Unathorized Access
            // Show a error message
            this.flashMessage.show("Unathorized acces", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            // redirect to login
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "#footer{\n  background: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  overflow-y: auto;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  /*margin: 300 5 0 5;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/* https://work.smarchal.com/twbscolor/ genrate boostrap color */\n\n/* Custom Color*/\n.main-color-bg{\n  background-color: #e74c3c !important;\n  border-color: #c0932b !important ;\n  color: #ffffff !important;\n}\n\n/* dropdown button */\n.dropdown .btn-default{\n  color: #4D4848;\n  background-color:lightgrey; /* AFADB3  */\n  border-color: #130269;\n}\n\n/* Header */\n#header{\n  background: #333333;\n  color:#ffffff;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n\n#header .create .btn-default{\n  margin-top: 20px;\n}\n\n/*Breadcrumb*/\n\n.breadcrumb{\n  background: #cccccc;\n  color: #333333;\n}\n\n.breadcrumb a {\n  color: #333333;\n}\n\n/* Progress Bar */\n/*.progress-bar{\n  background: #333333;\n  color: #ffffff;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".badge{\n  /*Mientras mas bajito mas gris(fuerte) es el color*/\n  background: #797979;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = "<!--app navabr for every routes of the application  -->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <!--Flash message mdules messages for error-->\n  <flash-messages> </flash-messages>\n  <!--This manage the route for the entire app -->\n  <router-outlet ></router-outlet>\n</div>\n\n<!-- <footer id=\"footer\" flex>\n  <p>Copyright AdminStrap, &copy; 2017</p>\n</footer> -->\n"

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h2><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> DashBoard <small>Manage your website</small></h2>\n      </div>\n      <div class=\"col-md-3\">\n       <div class=\"dropdown create\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Create Content\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a type=\"button\" data-toggle = \"modal\" data-target=\"#addPage\">Add Page</a></li>\n            <li><a href=\"#\">Add Post</a></li>\n            <li><a href=\"#\">Add User</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> <!--End div container -->\n</header> <!--End top Part of the website -->\n\n<!--Breadcrumb section  -->\n<section id=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard</li>\n    </ol>\n</section> <!--End breadcrumb section -->\n\n<section id=\"main\">\n  <div class=\"controller\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <!--Sidebar -->\n        <app-sidebar></app-sidebar>\n      </div>\n      <div class=\"col-md-9\">\n        <!--Boxes -->\n        <app-boxes></app-boxes>\n        <!--User Table-->\n        <app-table></app-table>\n      </div>\n    </div>\n  </div>\n  <!--Add Page Modal  -->\n  <app-modal modalId=\"addPage\"></app-modal>\n</section>\n"

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{name}}</h1> -->\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active main-color-bg\">\n    <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n    Dashboard\n  </a>\n  <a href=\"pages.html\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n    <span class=\"badge\">12</span>\n    Pages\n  </a>\n  <a href=\"post.html\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Post\n    <span class=\"badge\">33</span>\n   </a>\n  <a href=\"users.html\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n    <span class=\"badge\">203</span>\n     Users\n   </a>\n</div>\n"

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">\n  DashBoard\n</h2>\n\n<p>Welcome to your dashboard</p>\n"

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1> MEAN Authentication App </h1>\n    <p class=\"lead\">Welcome to our custom MEAN authentication built from scratch</p>\n  <div>\n    <a [routerLink] = \"['/register']\" class=\"btn btn-primary\">Register</a>\n    <a [routerLink] = \"['/login']\" class=\"btn btn-default\">Login</a>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using mongoose to organize models and query </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-cli to generate components,services and more. Local dev server and easy</p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>JWT Tokens</h3>\n    <p>Full feautured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" value=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"  value=\"\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Mean Auth App</a>\n    </div>\n  <div id=\"navbar\" class=\"collapse navbar-collapse\">\n  <ul class=\"nav navbar-nav navbar-left\">  -->\n    <!--RouterLinkActive es para darle active a las clas cuando se de click en el navbar\n        RouterLinkActiveOption = para que el tab correcto se marque active pq si no se marcan los dos nn -->\n        <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink] = \"['/']\">Home</a> </li>\n   </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/adminDashboard']\">Admin</a></li>\n    \n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]= \"['/register']\">Register</a></li>\n    <!--click event  -->\n    <li *ngIf=\"authService.checkLoggedIn()\" > <a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n </ul>\n\n</div>\n\n  </div>\n</nav>\n"

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<!--ngIf(ifStatement)- Make sure there's a user before showing html  -->\n<div *ngIf=\"user\" class=\"\">\n  <!--Embed the user name -->\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <!--username of the user  -->\n    <li class=\"list-group-item\">\n      Username: {{user.username}}\n    </li>\n    <!--Email of the user  -->\n    <li class=\"list-group-item\">\n      Email: {{user.email}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register {{error}}</h2>\n\n<form name=\"registerForm\" (submit)=\"onRegisterSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" required [(ngModel)]=\"name\" name=\"name\" ng-model=\"name\"  required class=\"form-control\">\n    <!-- <h1>{{registerForm.name.$touched}}</h1> -->\n    <!--Error message -->\n    <!--Esto es cpmo hacer que muestre un mesnaje a base de true o false de un estado -->\n    <!-- <span ng-show=\"registerForm.name.$touched && registerForm.name.$invalid\">The name is required.</span> -->\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" required [(ngModel)]=\"username\" name=\"username\" required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Password</label>\n    <input type=\"password\" required [(ngModel)]=\"password\" name=\"password\"  required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Email</label>\n    <input type=\"text\" required [(ngModel)]=\"email\" name=\"email\" required class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" name=\"\" value=\"submit\">\n\n</form>\n"

/***/ }),
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
        this.name = "cog";
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    return IconComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IconComponent.prototype, "name", void 0);
IconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-icon',
        template: __webpack_require__(223),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

//# sourceMappingURL=icon.component.js.map

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon glyphicon-\" aria-hidden=\"true\"></span>\n"

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(226),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = "<!--List Group  -->\n<app-listgroup name=\"mi hello comanda\">\n</app-listgroup>\n<!--Progress Bar -->\n<div class=\"weel\">\n  <app-progressbar></app-progressbar>\n</div>\n"

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressbarComponent = (function () {
    function ProgressbarComponent() {
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    return ProgressbarComponent;
}());
ProgressbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-progressbar',
        template: __webpack_require__(229),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], ProgressbarComponent);

//# sourceMappingURL=progressbar.component.js.map

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/* Progress Bar */\n.progress-bar{\n  background: #333333 ;\n  color: #ffffff ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<!--Progress Bar  -->\n<h4>Disk Space Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 60%;\"> 60%</div>\n</div>\n\n<h4>Bandwidth Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 40%;\"> 40%</div>\n</div>\n"

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxComponent = (function () {
    function BoxComponent() {
        this.className = "glyphicon glyphicon-user";
        this.number = 0;
        this.text = "N/A";
    }
    BoxComponent.prototype.ngOnInit = function () {
    };
    return BoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "className", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "number", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "text", void 0);
BoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-box',
        template: __webpack_require__(232),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], BoxComponent);

//# sourceMappingURL=box.component.js.map

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".dash-box{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<div class=\"well dash-box\">\n  <h2>\n    <span class={{className}} aria-hidden=\"true\">{{number}}</span>\n  </h2>\n  <h4>{{text}}</h4>\n</div>\n"

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxesComponent = (function () {
    function BoxesComponent() {
    }
    BoxesComponent.prototype.ngOnInit = function () {
    };
    return BoxesComponent;
}());
BoxesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-boxes',
        template: __webpack_require__(235),
        styles: [__webpack_require__(234), __webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], BoxesComponent);

//# sourceMappingURL=boxes.component.js.map

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".panel-title{\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading main-color-bg\">\n    <h3 class=\"panel-title\">Website Overview</h3>\n  </div>\n  <div class=\"panel-body\">\n    <!--Boxes-->\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-user\"\n               number = 203 text = \"Users\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-list-alt\"\n               number =12 text = \"Pages\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-pencil\"\n               number =33 text = \"Post\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-stats\"\n               number = 12,334 text = \"Visitors\"></app-box>\n    </div>\n    <!--End Boxes-->\n  </div>\n</div>\n"

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(238),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Latest Users</h3>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-striped table-hover\">\n      <tr>\n        <!--Table Headers  -->\n        <th>Name</th>\n        <th>Email</th>\n        <th>Joined</th>\n      </tr>\n      <tr>\n        <!--First Row  -->\n        <td>Jill Smith</td>\n        <td>jillsmith@gmail.com</td>\n        <td>Dec 12, 2016</td>\n      </tr>\n      <tr>\n        <!--Second Row  -->\n        <td>Smith Foster</td>\n        <td>foster23@gmail.com</td>\n        <td>Mar 12, 2016</td>\n      </tr>\n      <tr>\n        <!--Third Row  -->\n        <td>Julian Smith</td>\n        <td>JualianSmith@gmail.com</td>\n        <td>Feb 23, 2016</td>\n      </tr>\n      <tr>\n        <!--Fourt Row  -->\n        <td>John tue</td>\n        <td>Johnutru@gmail.com</td>\n        <td>Jul 2, 2016</td>\n      </tr>\n\n    </table>\n  </div>\n</div>\n"

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.modalId = "modal";
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalId", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(241),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "\n<!-- Modal -->\n<div class=\"modal fade\" id={{modalId}} tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <form action=\"\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Page</h4>\n      </div> <!--End Modal Header -->\n      <div class=\"modal-body\">\n        <!--Start Form  -->\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Tittle</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Page Tittle\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Body</label>\n          <textarea name=\"editor1\" class=\"form-control\" placeholder=\"Page Body\" rows=\"8\" cols=\"80\"></textarea>\n        </div>\n\n        <div class=\"checkbox\">\n          <label for=\"tittle\">\n            <input type=\"checkbox\"name=\"\" value=\"\"> Published\n        </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta tags</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Some Tags\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta Description</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Meta Description\" name=\"\" value=\"\">\n        </div>\n        <!--End Form  -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"Submit\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ })
],[218]);
//# sourceMappingURL=main.bundle.js.map