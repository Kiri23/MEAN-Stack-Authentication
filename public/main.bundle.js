webpackJsonp([1,5],Array(24).concat([
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(200);
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
    //
    // this always is going to be a user object because i do the validation in the register view
    // this is the post to register a new user
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        if (!user.role) {
            return;
        }
        if (user.role == 2) {
            // return an observable with the response
            // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
            return this.http.post('/users/register', { headers: headers, user: user }).map(function (res) { return res.json(); }); // change this to localhost when testing
        }
        else if (user.role == 1) {
            console.log("registrandolo como administrator");
            return this.http.post('/administrator/register', { headers: headers, user: user }).map(function (res) { return res.json(); });
        }
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
    AuthService.prototype.storeUserData = function (token, user, role) {
        // when using jwt-token it look for this key exactly id_token. saving token to local storage
        localStorage.setItem('id_token', token);
        // save to local storage user. we need to store as a string because it cant store object. when we need it back we parse it back to json
        // localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('user', user);
        // set localStorage role
        localStorage.setItem('role', role);
        // set values to the variable
        this.authToken = token;
        this.user = user;
        // cargar underscore verificar si role no es empty y setiar el role. pq
        // si voy a estar confiando tanto en el role de auth.servoce tengo que asegurarme que nunca
        // sea nullo pq si no esto puede traer mucho comportamiento inesperado 
        this.userRole = role;
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
    AuthService.prototype.loadVariables = function () {
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Modules



var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    // getUserById
    UsersService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/getUserById?userId=' + id, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all users
    UsersService.prototype.getLatestUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/getLatestUsers', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all users
    UsersService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/getAllUsers', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all users
    UsersService.prototype.skipUsers = function (number) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/skipUsers?skipNumber=' + number, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    // Get the role of the user
    UsersService.prototype.getRoleOfUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/getUserRoleById?id=' + id, { headers: headers }).map(function (res) {
            // This is how can I send only the _id or the role in this method
            // console.log(res.json()[0]._id," reuktado from the call");
            return res.json();
        });
    };
    // getRole():string
    UsersService.prototype.getRole = function () {
        return __awaiter(this, void 0, void 0, function () {
            var role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("se esta llamando la funcion getRole htps");
                        console.log("se esta esperando pq la llamada termine");
                        // si el ping.subscirbe no es un promise alomejor no va afuncionar debidamente
                        return [4 /*yield*/, this.ping().subscribe(function (user) {
                                role = user;
                                // no se puede enviar la infomacion aqui adentro pq la devuelve nulla
                            })];
                    case 1:
                        // si el ping.subscirbe no es un promise alomejor no va afuncionar debidamente
                        _a.sent();
                        console.log(" ya se completo la llamada http se supone que yo me llame despues ");
                        setTimeout(function () {
                            console.log(role, ' from getrole');
                            return role;
                        }, 500);
                        return [2 /*return*/, role];
                }
            });
        });
    };
    // getUserById
    UsersService.prototype.ping = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/ping?', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    UsersService.prototype.sayHello = function () {
        console.log(" me estan llamando h");
        return new Promise(function (resolve, reject) {
            //  setTimeout(() => {
            //    resolve(this.getRole())
            //  },3000)
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* https://work.smarchal.com/twbscolor/ genrate boostrap color */\n\n/* Custom Color*/\n.main-color-bg{\n  background-color: #e74c3c !important;\n  border-color: #c0932b !important ;\n  color: #ffffff !important;\n}\n\n/* dropdown button */\n.dropdown .btn-default{\n  color: #4D4848;\n  background-color:lightgrey; /* AFADB3  */\n  border-color: #130269;\n}\n\n/* Header */\n#header{\n  background: #333333;\n  color:#ffffff;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n\n#header .create .btn-default{\n  margin-top: 20px;\n}\n\n/*Breadcrumb*/\n\n.breadcrumb{\n  background: #cccccc;\n  color: #333333;\n}\n\n.breadcrumb a {\n  color: #333333;\n}\n\n/* Progress Bar */\n/*.progress-bar{\n  background: #333333;\n  color: #ffffff;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
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
/* 65 */,
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
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
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
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
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


// Third Party

var TableComponent = (function () {
    function TableComponent(userService, zone) {
        this.userService = userService;
        this.zone = zone;
        this.showFilter = false;
        this.className = "";
        this.text = "N/A";
        this.columns = [];
        this.currentPage = 1;
        // Output the currentPage Property. This is how to pass a property from a child element to a parent element that integrate this component
        this.exportProp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showUsersSkipNumber = 0;
        this.cuu = 1;
        this.user = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.currentPage = 1;
        this.skipUser(this.currentPage);
        this.userService.getAllUsers().subscribe(function (user) {
            _this.totalUsersCount = __WEBPACK_IMPORTED_MODULE_2_underscore__["size"](user);
        });
    }; // End NGonInit()
    TableComponent.prototype.skipUser = function (currentPage) {
        var _this = this;
        //  Logic to skip the right user for it to show it on the table. currentPage = 2. currentPage(2) - 1 = (1 * 5) + 1 = 6. 6 is the right amount of user I want to skip over. and this will also work with currentPage = 3,4,5 etc. each currentPage will only show #5 users. I wan to skip every 5 integer number each time
        this.showUsersSkipNumber = ((currentPage - 1) * 5) + 1;
        // This are the first five users. I dont want to skip this users.This mean tha thi's the first page. I don't want to skip users I want to skip before showUsersSkipNumber is > 5
        if (this.showUsersSkipNumber < 5) {
            // dont skip no one show the first 5 in the table
            this.showUsersSkipNumber = 0;
        }
        // call to the database to skip user
        this.userService.skipUsers(this.showUsersSkipNumber).subscribe(function (user) {
            console.log(user, " user from skip user");
            // emit a event aka send the exportProp to the parent element
            _this.exportProp.emit(user);
        });
        //  console.log(this.);
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "dataset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "showFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "className", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableComponent.prototype, "exportProp", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(284),
        styles: [__webpack_require__(264)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=table.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorsService; });

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



var AdministratorsService = (function () {
    function AdministratorsService(http) {
        this.http = http;
    }
    // getAdministratorById
    AdministratorsService.prototype.getAdministratorById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/administrators/getAdministratorById?AdministratorId=' + id, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all administrator
    AdministratorsService.prototype.getLatestAdministrators = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/administrator/getLatestAdministrators', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all administrator
    AdministratorsService.prototype.getAllAdministrators = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/administrator/getAllAdministrators', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all administrator
    AdministratorsService.prototype.skipAdministrators = function (number) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/administrator/skipAdministrators?skipNumber=' + number, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    AdministratorsService.prototype.getRoleOfAdministrator = function () {
    };
    // getAdministratorById
    AdministratorsService.prototype.ping = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/administrator/ping?', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    return AdministratorsService;
}());
AdministratorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdministratorsService);

var _a;
//# sourceMappingURL=administrator.service.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsService; });

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



var OrganizationsService = (function () {
    function OrganizationsService(http) {
        this.http = http;
    }
    // getOrganizationById
    OrganizationsService.prototype.getOrganizationById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/getOrganizationById?OrganizationId=' + id, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all organization
    OrganizationsService.prototype.getLatestOrganizations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/getLatestOrganizations', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all organization
    OrganizationsService.prototype.getAllOrganizations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/getAllOrganizations', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    //Get all organization
    OrganizationsService.prototype.skipOrganizations = function (number) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/skipOrganizations?skipNumber=' + number, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    OrganizationsService.prototype.getRoleOfOrganization = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/skipOrganizations?skipNumber=', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    // getOrganizationById
    OrganizationsService.prototype.ping = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/organization/ping?', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    return OrganizationsService;
}());
OrganizationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], OrganizationsService);

var _a;
//# sourceMappingURL=organization.service.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
/* 163 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 163;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(195);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// I can Use nodemon -e ts and will always watch file extension ts and restart

// Este file es el controller de cada componente
// Este file es el unico que yo incluyo en el index.html
var AppComponent = (function () {
    function AppComponent() {
        // esto es como si fueras un argument en una funcion. 
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // El selector es como yo llamo el componente en los html tags.
        selector: 'app-root',
        template: __webpack_require__(273),
        styles: [__webpack_require__(254)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_components_listgroup_listgroup_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_icon_icon_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_components_sidebar_sidebar_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_components_progressbar_progressbar_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_box_box_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_boxes_boxes_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_table_table_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_modal_modal_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_users_admin_users_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_components_table_columns_table_columns_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_register_admin_register_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_validate_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_administrtor_guard__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_utilities_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_administration_administrator_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_organization_organization_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_upload_file_upload_file_component__ = __webpack_require__(336);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    // protect route
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    // protect route
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    // protect route
    { path: 'adminDashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_administrtor_guard__["a" /* AdministratorGuard */]] },
    { path: 'adminUsers', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_users_admin_users_component__["a" /* AdminUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    // I will want this route to be protected only another administrator can create other
    // administrator
    { path: 'register/admin', component: __WEBPACK_IMPORTED_MODULE_26__components_admin_register_admin_register_component__["a" /* AdminRegisterComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_35__components_upload_file_upload_file_component__["a" /* UploadFileComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_dashboard_components_listgroup_listgroup_component__["a" /* ListGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_icon_icon_component__["a" /* IconComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_dashboard_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_dashboard_components_progressbar_progressbar_component__["a" /* ProgressbarComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_box_box_component__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_boxes_boxes_component__["a" /* BoxesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_users_admin_users_component__["a" /* AdminUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dashboard_components_table_columns_table_columns_component__["a" /* TableColumnsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_admin_register_admin_register_component__["a" /* AdminRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_upload_file_upload_file_component__["a" /* UploadFileComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_27__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_30__guards_administrtor_guard__["a" /* AdministratorGuard */],
            __WEBPACK_IMPORTED_MODULE_31__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_32__services_utilities_service__["a" /* UtilitiesService */], __WEBPACK_IMPORTED_MODULE_33__services_administration_administrator_service__["a" /* AdministratorsService */], __WEBPACK_IMPORTED_MODULE_34__services_organization_organization_service__["a" /* OrganizationsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
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


// third party
// How I add an javascript libary

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(userService) {
        this.userService = userService;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLatestUsers().subscribe(function (user) {
            _this.latestUser = user;
        });
        // This is for counting all User.
        this.userService.getAllUsers().subscribe(function (user) {
            // use underscore size - return the size of an object
            _this.totalUsers = __WEBPACK_IMPORTED_MODULE_2_underscore__["size"](user);
        });
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__(274),
        styles: [__webpack_require__(44)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], AdminDashboardComponent);

var _a;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminRegisterComponent = (function () {
    function AdminRegisterComponent() {
    }
    AdminRegisterComponent.prototype.ngOnInit = function () {
    };
    return AdminRegisterComponent;
}());
AdminRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-register',
        template: __webpack_require__(275),
        styles: [__webpack_require__(255)]
    }),
    __metadata("design:paramtypes", [])
], AdminRegisterComponent);

//# sourceMappingURL=admin-register.component.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Third Party Javscript libaries

var AdminUsersComponent = (function () {
    function AdminUsersComponent(userService) {
        this.userService = userService;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (user) {
            _this.allUsers = user;
            // use underscore size - return the size of an object
            _this.totalUsers = __WEBPACK_IMPORTED_MODULE_2_underscore__["size"](user);
        });
    };
    // this function only get call when in the parent Component (Aka app-table) fire a onClick Function (aka onClick pagination item). passing data(currentPage int) from parent component(app-table) to this component admin-users.
    AdminUsersComponent.prototype.skipUser = function (user) {
        this.allUsers = user;
    };
    return AdminUsersComponent;
}());
AdminUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-users',
        template: __webpack_require__(276),
        styles: [__webpack_require__(256), __webpack_require__(44)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], AdminUsersComponent);

var _a;
//# sourceMappingURL=admin-users.component.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(277),
        styles: [__webpack_require__(257)]
    }),
    __metadata("design:paramtypes", [])
], BoxComponent);

//# sourceMappingURL=box.component.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('admin-Dashboard-totalUser-Props'),
    __metadata("design:type", Object)
], BoxesComponent.prototype, "totalUsers", void 0);
BoxesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-boxes',
        template: __webpack_require__(278),
        styles: [__webpack_require__(258), __webpack_require__(44)]
    }),
    __metadata("design:paramtypes", [])
], BoxesComponent);

//# sourceMappingURL=boxes.component.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    ListGroupComponent.prototype.ngOnInit = function () {
    };
    return ListGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('side-bar-totalUserProps'),
    __metadata("design:type", Object)
], ListGroupComponent.prototype, "totalUsers", void 0);
ListGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listgroup',
        template: __webpack_require__(279),
        styles: [__webpack_require__(259), __webpack_require__(44)]
    }),
    __metadata("design:paramtypes", [])
], ListGroupComponent);

//# sourceMappingURL=listgroup.component.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(280),
        styles: [__webpack_require__(260)]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(281),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [])
], ProgressbarComponent);

//# sourceMappingURL=progressbar.component.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        // this.totalUser = this.chi
        // console.log(this.totalUser);
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('admin-Dashboard-totalUser-Props'),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "totalUserProps", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(282),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_table_component__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColumnsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableColumnsComponent = (function () {
    function TableColumnsComponent(table) {
    }
    TableColumnsComponent.prototype.ngOnInit = function () {
    };
    return TableColumnsComponent;
}());
TableColumnsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-columns',
        template: __webpack_require__(283),
        styles: [__webpack_require__(263)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__table_table_component__["a" /* TableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__table_table_component__["a" /* TableComponent */]) === "function" && _a || Object])
], TableColumnsComponent);

var _a;
//# sourceMappingURL=table-columns.component.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(285),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(286),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(287),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

//# sourceMappingURL=icon.component.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(26);
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
    // Esta funcion es llamada cuando el form es submit it.
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(this.password);
        //Auth service Make http call to Login user
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                console.log("user Role from login component: " + data.user.role);
                // authenticate user with the token and store User Data in local storage
                _this.authService.storeUserData(data.token, data.user.id, data.user.role);
                // show message login
                _this.flashMessage.show("You are now logged in", { cssClass: 'alert-success', timeout: 5000 });
                // window.location.replace(window.location.hostname + ":3002/dashboard");
                if (_this.authService.userRole == 1) {
                    // Navigate to Admin DashBoard
                    _this.router.navigate(['/adminDashboard']);
                }
                else {
                    // User DashBoard
                    _this.router.navigate(['/dashboard']);
                }
                // reload nav Bar component
                setTimeout(function () {
                    window.location.reload();
                }, 1);
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
        template: __webpack_require__(288),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
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
    function NavbarComponent(authService, userService, router, flashMessage) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // if the user is logged In retrieve the role of the user
        if (this.authService.checkLoggedIn()) {
            console.log("User is Logge In from Navbar");
            // Retrieve the user role.
            this.getRoleOfUser();
        }
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
        // if I want to reload the page when the user logge out. I wan this because the navbar item
        // doesnt get removed when a new person logged in. 
        // setTimeout(function(){
        //   window.location.reload();
        // },10)
        return false;
    };
    NavbarComponent.prototype.isAdminRole = function () {
        // if User Role is administrator(Aka 1) sent true otherwise sent false
        console.log("User Role from NavBar: " + this.userRole);
        return this.userRole == 1 ? true : false;
    };
    NavbarComponent.prototype.getRoleOfUser = function () {
        var _this = this;
        // Ge the Id of the user.
        var userId = localStorage.getItem('user');
        // make an http call to the API
        this.userService.getRoleOfUser(userId).subscribe(function (user) {
            // user send with the response
            _this.userRole = user[0].role;
            console.log("Nav Bar Role: " + _this.userRole);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("An error has ocurred retrieving the role", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            _this.router.navigate(['/login']);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(289),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(26);
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
        template: __webpack_require__(290),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(26);
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
        this.text = "Register";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // role of administrator
        this.role = 1;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.name, this.username, this.email);
        // Aqui tengo que mandar el rol del usuario pa asegurar quien lo creo y que rol tiene este
        // usuario nuevo
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            role: this.role,
            CreatedDate: new Date()
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
        template: __webpack_require__(291),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
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
    function AuthGuard(authService, router, flashMessage, userService, http) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.http = http;
        // this.getRole()
    }
    // Protect Route with lowercase c. to restrict whatever page you nedd to extend the CanActivate interface and include the canActivate function. inside the function you put whatever logic you want and return true or false to Authorized access.
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.checkLoggedIn()) {
            // console.log("role from authservice: " + this.authService.userRole);
            //  restrict the acces for user and admin
            // if the user is Login check for the role of the user
            this.getRoleOfUser();
            this.detectLocalStorageChange();
            console.log(localStorage.getItem('role'), ' role second');
            //  get the role of a user from local storage
            var role = localStorage.getItem('role');
            // user access
            if (role.localeCompare("2") == 0) {
                console.log("El rol del usuario es 2 enviar ahora falso");
                return true;
            }
            else if (role.localeCompare("1") == 0) {
                console.log("el rol es uno");
                // Show a error message
                this.flashMessage.show("Acces Unathorized", { cssClass: 'alert-danger', timeout: 5000 });
                //  Wait half and second then set it back to the page they last visited
                //  setTimeout(function(){
                //    window.history.back();
                //  }, 2500);
                return false;
            }
        }
        else {
            this.showMessageUserNotLoggedIn();
        }
    };
    // Helper Method
    AuthGuard.prototype.getRoleOfUser = function () {
        var _this = this;
        var userId = localStorage.getItem('user');
        var id;
        // make an http call to the API
        this.userService.getRoleOfUser(userId).subscribe(function (user) {
            // user send with the response
            localStorage.setItem('role', user[0].role);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("An error has ocurred retrieving the role", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard.prototype.detectLocalStorageChange = function () {
        window.addEventListener("storage", function () {
            console.log("localstorage cambio");
            // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
            // no deben modificar el storage. Using below code
            // window.location.replace(Page Especial Url);
            this.location.reload();
        }, false);
    };
    AuthGuard.prototype.showMessageUserNotLoggedIn = function () {
        // Unathorized Access
        // Show a error message
        this.flashMessage.show("Unathorized acces. Not login session found. ", { cssClass: 'alert-danger', timeout: 5000 });
        // redirect to the login page
        // redirect to login
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _e || Object])
], AuthGuard);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__administration_administrator_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_organization_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilitiesService = (function () {
    function UtilitiesService(administrator, organization, user) {
        this.administrator = administrator;
        this.organization = organization;
        this.user = user;
    }
    UtilitiesService.prototype.getRole = function (id) {
        return this.administrator.getRoleOfAdministrator() || this.user.getRoleOfUser(id);
    };
    return UtilitiesService;
}());
UtilitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__administration_administrator_service__["a" /* AdministratorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__administration_administrator_service__["a" /* AdministratorsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__organization_organization_service__["a" /* OrganizationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__organization_organization_service__["a" /* OrganizationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _c || Object])
], UtilitiesService);

var _a, _b, _c;
//# sourceMappingURL=utilities.service.js.map

/***/ }),
/* 195 */
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
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#footer{\n  background: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  overflow-y: auto;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  /*margin: 300 5 0 5;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".dash-box{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".panel-title{\n  color: #ffffff;\n}\n\na{\n  color: #3e3f3a;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".badge{\n  /*Mientras mas bajito mas gris(fuerte) es el color*/\n  background: #797979;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* Progress Bar */\n.progress-bar{\n  background: #333333 ;\n  color: #ffffff ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/* Custom Color*/\n.main-color-bg{\n  background-color: #e74c3c !important;\n  border-color: #c0932b !important ;\n  color: #ffffff !important;\n}\n .panel-title{\n   color: #ffffff;\n }\n\n .panel-heading{\n   background-color: black ;\n   border-color: black  ;\n }\n\n/*.pagination{}*/\n.center {\n  margin-left: 200px;\n}\n\n/* Make Inout Search Field Smaller*/\n.makeSmaller{\n  height: 34px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 272 */,
/* 273 */
/***/ (function(module, exports) {

module.exports = "<!--app navabr for every routes of the application  -->\n<!--Este es el main file. Este File es llamado en el index.html como approot tag  -->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <!--Flash message mdules messages for error-->\n  <flash-messages> </flash-messages>\n  <!--This manage the route for the entire app\n      Esto es lo que se encarga de mostrar todos los componentes (rutas)\n      de la pagina web.\n -->\n  <router-outlet ></router-outlet>\n</div>\n\n<!-- <footer id=\"footer\" flex>\n  <p>Copyright AdminStrap, &copy; 2017</p>\n</footer> -->\n"

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h2><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> DashBoard <small>Manage your website</small></h2>\n      </div>\n      <div class=\"col-md-3\">\n       <div class=\"dropdown create\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Create Content\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a type=\"button\" data-toggle = \"modal\" data-target=\"#addPage\">Add Page</a></li>\n            <li><a href=\"#\">Add Post</a></li>\n            <li><a href=\"/register\">Add User</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> <!--End div container -->\n</header> <!--End top Part of the website -->\n\n<!--Breadcrumb section  -->\n<section id=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard </li>\n    </ol>\n</section> <!--End breadcrumb section -->\n\n<section id=\"main\">\n  <div class=\"controller\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <!--Sidebar need to have the [] to pass the data to the child -->\n        <app-sidebar [admin-Dashboard-totalUser-Props] = totalUsers></app-sidebar>\n      </div>\n      <div class=\"col-md-9\">\n        <!--Boxes -->\n        <!--Pass the totalUser number to the app-boxes component  -->\n        <app-boxes [admin-Dashboard-totalUser-Props] = totalUsers></app-boxes>\n        <!--User Table-->\n        <app-table [dataset] = latestUser text=\"Latest Users\">\n          <!-- <app-table-columns value='name' header='Name'></app-table-columns>\n\n          <app-table-columns value='email' header='email'></app-table-columns>\n\n          <app-table-columns value='CreatedDate' header='Joined'></app-table-columns> -->\n\n        </app-table>\n      </div>\n    </div>\n  </div>\n  <!--Add Page Modal  -->\n  <app-modal modalId=\"addPage\"></app-modal>\n</section>\n"

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = "<app-register text = \"Register an Admin\"> </app-register>\n"

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h2><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Users <small>Manage Site User</small></h2>\n      </div>\n      <div class=\"col-md-3\">\n       <div class=\"dropdown create\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Create Content\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a type=\"button\" data-toggle = \"modal\" data-target=\"#addPage\">Add Page</a></li>\n            <li><a href=\"#\">Add Post</a></li>\n            <li><a href=\"/register\">Add User</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> <!--End div container -->\n</header> <!--End top Part of the website -->\n\n<!--Breadcrumb section  -->\n<section id=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"\"> <a href = \"/adminDashboard\">Dashboard </a> </li>\n      <li class=\"active\">Users</li>\n    </ol>\n</section> <!--End breadcrumb section -->\n\n\n<section id=\"main\">\n  <div class=\"controller\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <!--Sidebar -->\n        <app-sidebar [admin-Dashboard-totalUser-Props] = totalUsers> </app-sidebar>\n      </div>\n      <div class=\"col-md-9\">\n        <!--User Table exportProp -> is a prop pass to the admin-users from the app-table-->\n        <app-table [dataset] = allUsers className=\"main-color-bg\" text = \"Users\" showFilter = true (exportProp)=\"skipUser($event)\"></app-table>\n      </div>\n    </div>\n  </div>\n  <!--Add Page Modal  -->\n  <app-modal modalId=\"addPage\"></app-modal>\n</section>\n"

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = "<div class=\"well dash-box\">\n  <h2>\n    <span class={{className}} aria-hidden=\"true\">{{number}}</span>\n  </h2>\n  <h4>{{text}}</h4>\n</div>\n"

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading main-color-bg\">\n    <h3 class=\"panel-title\">Website Overview</h3>\n  </div>\n  <div class=\"panel-body\">\n    <!--Boxes-->\n    <div class=\"col-md-3\">\n      <a href=\"/adminUsers\">\n        <!--To pass something different that is not a literal number or string need to use the []  -->\n        <app-box className= \"glyphicon glyphicon-user\"\n                 [number] = totalUsers text = \"Users\" ></app-box>\n      </a>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-list-alt\"\n               number =12 text = \"Pages\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-pencil\"\n               number =33 text = \"Post\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-stats\"\n               number = 12,334 text = \"Visitors\"></app-box>\n    </div>\n    <!--End Boxes-->\n  </div>\n</div>\n"

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{name}}</h1> -->\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active main-color-bg\">\n    <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n    Dashboard\n  </a>\n  <a href=\"pages.html\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n    <span class=\"badge\">12</span>\n    Pages\n  </a>\n  <a href=\"post.html\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Post\n    <span class=\"badge\">33</span>\n   </a>\n  <a href=\"/adminUsers\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n    <!--This property is pass via the parent component admin-dashboard to app-sidebar to this component  -->\n    <span class=\"badge\">{{totalUsers}}</span>\n     Users\n   </a>\n</div>\n"

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = "\n<!-- Modal -->\n<div class=\"modal fade\" id={{modalId}} tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <form action=\"\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Page</h4>\n      </div> <!--End Modal Header -->\n      <div class=\"modal-body\">\n        <!--Start Form  -->\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Tittle</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Page Tittle\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Body</label>\n          <textarea name=\"editor1\" class=\"form-control\" placeholder=\"Page Body\" rows=\"8\" cols=\"80\"></textarea>\n        </div>\n\n        <div class=\"checkbox\">\n          <label for=\"tittle\">\n            <input type=\"checkbox\"name=\"\" value=\"\"> Published\n        </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta tags</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Some Tags\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta Description</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Meta Description\" name=\"\" value=\"\">\n        </div>\n        <!--End Form  -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"Submit\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = "<!--Progress Bar  -->\n<h4>Disk Space Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 60%;\"> 60%</div>\n</div>\n\n<h4>Bandwidth Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 40%;\"> 40%</div>\n</div>\n"

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = "<!--List Group  -->\n<!-- <h1>{{totalUserProps}}</h1> -->\n<!--Pass the totalUser data to the listGroup Component that display the totaluser number in the view  -->\n<app-listgroup [side-bar-totalUserProps] = totalUserProps>\n</app-listgroup>\n<!--Progress Bar -->\n<div class=\"weel\">\n  <app-progressbar></app-progressbar>\n</div>\n"

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = "<!--To add External Javscript file I need to add it to the script section angular-cli.json   -->\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading {{className}} \">\n    <h3 class=\"panel-title \">{{text}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div *ngIf=\"showFilter\" class=\"form-group\">\n      <!--Show Search Filter  -->\n      <input id=\"filterInput\" class=\"makeSmaller form-control\" onkeyup=\"filterUsersByName()\" type=\"text\" placeholder=\"Search Filter\" name=\"\" value=\"\">\n    </div>\n    <table id=\"userTable\" class=\"table table-striped table-hover\">\n      <!-- Table Header -->\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Joined</th>\n      </tr>\n      <!--Table Body -->\n    <tbody>\n      <!-- Do a for loop to show the tables -->\n      <tr *ngFor=\"let record of dataset; let ind = index\">\n          <!-- || - mean alternate text. is Like an If  -->\n          <!-- <h1>{{i}} index</h1> -->\n          <!--if index(i) is greater than 5 dont show more Table data  -->\n          <!--if index > 6 render the tableDate but with a display set to none.That way the search filter will look for all the user in the db and not only the one that are showing in the table  -->\n          <td style=\"display:none\" *ngIf=\"ind > 5\">{{record.name || \"No name\" }}</td>\n           <td *ngIf=\"ind < 6\">{{record.name || \"No name\" }}</td>\n\n           <td style=\"display:none\" *ngIf=\"ind > 5\">{{record.email || \"No email\"}}</td>\n           <td *ngIf=\"ind < 6\">{{record.email || \"No email\"}}</td>\n\n           <td style=\"display:none\" *ngIf=\"(record.CreatedDate && ind > 5)\">{{record.CreatedDate | date:'MMM dd' }} at {{record.CreatedDate | date:'hh:mm' }}\n           </td>\n           <!--Show this row if there's a date in the json  -->\n           <td *ngIf=\"(record.CreatedDate && ind < 6)\">{{record.CreatedDate | date:'MMM dd' }} at\n             {{record.CreatedDate | date:'hh:mm' }}\n          </td>\n          <!--Alternate show this row if there is not a date in the json data  -->\n          <td style=\"display:none\" *ngIf=\"(!record.CreatedDate && ind > 5)\"> No Date Provided</td>\n          <td *ngIf=\"(!record.CreatedDate && ind < 6)\"> No Date Provided</td>\n      </tr>\n    </tbody>\n</table>\n  <!--[(page)] - pa pasar la variable  -->\n  <div *ngIf=\"showFilter\" class=\" text-center d-flex justify-content-center\">\n    <ngb-pagination [collectionSize]=\"70\" [(page)]=\"currentPage\" aria-label=\"Default pagination\" (click) = \"skipUser(currentPage)\" size =\"\"></ngb-pagination>\n    <pre> users: {{showUsers}}</pre>\n  </div>\n  </div>\n</div>\n\n<!-- <tr>\n  <table>\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of columns\">{{column.header}}</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let row of dataset\">\n    <h1>{{row}}</h1>\n    El row va a ser como si fuera user.persons.value -> row.value\n    <tr>\n      <td *ngFor=\"let column of columns\">{{row[colum.value]}}</td>\n  </tr>\n  </tbody>\n</table>\n\n\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading {{className}} \">\n    <h3 class=\"panel-title \">{{text}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table table-striped table-hover\">\n      Table Header\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Joined</th>\n      </tr>\n      <tr>\n        <td> jose shus</td>\n      </tr>\n\n    </table>\n   Do a for loop to show the tables\n   <tbody>\n  <tr *ngFor=\"let record of user;let i = index\">\n    <td>{{record.name}}</td>\n    <td>{{record[i]}}</td>\n    <td>{{record.email}}</td>\n    <td>dec {{items}}</td>\n  </tr>\n</tbody>\n  </div>\n</div>\n\n  <td>Jill Smith</td>\n  <td>jillsmith@gmail.com</td>\n  <td>Dec 12, 2016</td>\n</tr>\n<tr>\n  <td>Smith Foster</td>\n  <td>foster23@gmail.com</td>\n  <td>Mar 12, 2016</td>\n</tr>\n<tr>\n  <td>Julian Smith</td>\n  <td>JualianSmith@gmail.com</td>\n  <td>Feb 23, 2016</td>\n</tr>\n<tr>\n  <td>John tue</td>\n  <td>Johnutru@gmail.com</td>\n  <td>Jul 2, 2016</td>\n\n   <ng-template ngFor let-item [ngForOf]=\"createRange(5)\" let-currentElementIndex=\"index+1\">\n    <th class=\"table-active\"> {{name.headers[currentElementIndex - 1]}} </th>\n  </ng-template>\n</tr> -->\n"

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">\n  DashBoard\n</h2>\n\n<p>Welcome to your dashboard</p>\n"

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1> MEAN Authentication App </h1>\n    <p class=\"lead\">Welcome to our custom MEAN authentication built from scratch</p>\n  <div>\n    <a [routerLink] = \"['/register']\" class=\"btn btn-primary\">Register</a>\n    <a [routerLink] = \"['/login']\" class=\"btn btn-default\">Login</a>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using mongoose to organize models and query </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-cli to generate components,services and more. Local dev server and easy</p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>JWT Tokens</h3>\n    <p>Full feautured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>\n"

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon glyphicon-\" aria-hidden=\"true\"></span>\n"

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" value=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"  value=\"\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Mean Auth App</a>\n    </div>\n  <div id=\"navbar\" class=\"collapse navbar-collapse\">\n  <ul class=\"nav navbar-nav navbar-left\">  -->\n    <!--RouterLinkActive es para darle active a las clas cuando se de click en el navbar\n        RouterLinkActiveOption = para que el tab correcto se marque active pq si no se marcan los dos nn -->\n        <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink] = \"['/']\">Home</a> </li>\n   </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li *ngIf=\"authService.checkLoggedIn()&& isAdminRole()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/adminDashboard']\">Admin</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]= \"['/register']\">Register</a></li>\n    <!--click event  -->\n    <li *ngIf=\"authService.checkLoggedIn()\" > <a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n </ul>\n\n</div>\n\n  </div>\n</nav>\n"

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = "<!--ngIf(ifStatement)- Make sure there's a user before showing html  -->\n<div *ngIf=\"user\" class=\"\">\n  <!--Embed the user name -->\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <!--username of the user  -->\n    <li class=\"list-group-item\">\n      Username: {{user.username}}\n    </li>\n    <!--Email of the user  -->\n    <li class=\"list-group-item\">\n      Email: {{user.email}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">{{text}}</h2>\n\n<form name=\"registerForm\" (submit)=\"onRegisterSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" required [(ngModel)]=\"name\" name=\"name\" ng-model=\"name\"  required class=\"form-control\">\n    <!-- <h1>{{registerForm.name.$touched}}</h1> -->\n    <!--Error message -->\n    <!--Esto es cpmo hacer que muestre un mesnaje a base de true o false de un estado -->\n    <!-- <span ng-show=\"registerForm.name.$touched && registerForm.name.$invalid\">The name is required.</span> -->\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" required [(ngModel)]=\"username\" name=\"username\" required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Password</label>\n    <input type=\"password\" required [(ngModel)]=\"password\" name=\"password\"  required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Email</label>\n    <input type=\"text\" required [(ngModel)]=\"email\" name=\"email\" required class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" name=\"\" value=\"submit\">\n\n</form>\n"

/***/ }),
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ }),
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorGuard; });
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

var AdministratorGuard = (function () {
    function AdministratorGuard(authService, router, flashMessage, userService, http) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.http = http;
        // this.getRole()
    }
    // Protect Route with lowercase c. to restrict whatever page you nedd to extend the CanActivate interface and include the canActivate function. inside the function you put whatever logic you want and return true or false to Authorized access.
    AdministratorGuard.prototype.canActivate = function () {
        if (this.authService.checkLoggedIn()) {
            //  restrict the acces for user and admin
            // if the user is Login check for the role of the user
            this.getRoleOfUser();
            this.detectLocalStorageChange();
            console.log(localStorage.getItem('role'), ' role second');
            //  get the role of a user from local storage
            var role = localStorage.getItem('role');
            // user access
            if (role.localeCompare("1") == 0) {
                console.log("El rol del usuario es 1 enviar ahora true");
                return true;
            }
            else if (role.localeCompare("2") == 0) {
                console.log("el rol es uno");
                // Show a error message
                this.flashMessage.show("Acces Unathorized", { cssClass: 'alert-danger', timeout: 5000 });
                window.history.back();
                return false;
            }
        }
        else {
            this.showMessageUserNotLoggedIn();
        }
    };
    // Helper Method
    AdministratorGuard.prototype.getRoleOfUser = function () {
        var _this = this;
        var userId = localStorage.getItem('user');
        var id;
        // make an http call to the API
        this.userService.getRoleOfUser(userId).subscribe(function (user) {
            // user send with the response
            localStorage.setItem('role', user[0].role);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("An error has ocurred retrieving the role", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AdministratorGuard.prototype.detectLocalStorageChange = function () {
        window.addEventListener("storage", function () {
            console.log("localstorage cambio");
            // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
            // no deben modificar el storage. Using below code
            // window.location.replace(Page Especial Url);
            this.location.reload();
        }, false);
    };
    AdministratorGuard.prototype.showMessageUserNotLoggedIn = function () {
        // Unathorized Access
        // Show a error message
        this.flashMessage.show("Unathorized acces", { cssClass: 'alert-danger', timeout: 5000 });
        // redirect to the login page
        // redirect to login
        this.router.navigate(['/login']);
        return false;
    };
    return AdministratorGuard;
}());
AdministratorGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _e || Object])
], AdministratorGuard);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=administrtor.guard.js.map

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import the file uploader plugin

var URL = "/upload";
var UploadFileComponent = (function () {
    function UploadFileComponent() {
        //declare a property called fileuploader and assign it to an instance of a new fileUploader.
        //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'file' });
    }
    UploadFileComponent.prototype.ngOnInit = function () {
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    return UploadFileComponent;
}());
UploadFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-file',
        template: __webpack_require__(338),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [])
], UploadFileComponent);

//# sourceMappingURL=upload-file.component.js.map

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >File Upload</a>\n    </div>\n</div>\n<!-- File input for the file-upload plugin, with special ng2-file-upload directive called ng2FileSelect -->\n<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n<!-- button to trigger the file upload when submitted -->\n<!-- <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n      Upload with ng-2 file uploader\n</button> -->\n\n<div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n<table class=\"table\">\n    <thead>\n    <tr>\n        <th width=\"50%\">Name</th>\n        <th>Size</th>\n        <th>Progress</th>\n        <th>Status</th>\n        <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of uploader.queue\">\n        <td><strong>{{ item?.file?.name }}</strong></td>\n        <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        <td *ngIf=\"uploader.isHTML5\">\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n        </td>\n        <td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n        </td>\n        <td nowrap>\n            <button type=\"button\" class=\"btn btn-success btn-xs\"\n                    (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                    (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                    (click)=\"item.remove()\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<div>\n    <div>\n        Queue progress:\n        <div class=\"progress\" style=\"\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-success btn-s\"\n            (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n    </button>\n    <button type=\"button\" class=\"btn btn-warning btn-s\"\n            (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n    </button>\n    <button type=\"button\" class=\"btn btn-danger btn-s\"\n            (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n    </button>\n</div>\n\n<h2> </h2>\n\n</div>\n"

/***/ })
]),[331]);
//# sourceMappingURL=main.bundle.js.map