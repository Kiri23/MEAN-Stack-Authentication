webpackJsonp([1,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
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



/**
 * This class will contain all the Http request to the API to retrieve information about the user
 * @export
 * @class UsersService
 */
var UsersService = (function () {
    /**
     * Creates an instance of UsersService.
     * @param {Http} http
     *
     * @memberOf UsersService
     */
    function UsersService(http) {
        this.http = http;
    }
    /**
     * Retrieve a user from the db with his Id
     * @param {Number} id - The id of the user
     * @returns
     * @memberOf UsersService
     */
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
    UsersService.prototype.getUserByEscuela = function (escuela) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/getUserByEscuela/' + escuela, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    /**
     * Get the last five (5) user registered to the app.
     * @returns
     * @memberOf UsersService
     */
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
    /**
     * Return all the users from the db
     * @returns
     * @memberOf UsersService
     */
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
    /**
     * Send email to user email to reset the password
     * @param {string} email - The email of the user to recover password.
     * @returns
     * @memberOf UsersService
     */
    //Send email to user to restore the password
    UsersService.prototype.sendForgotEmail = function (email) {
        console.log('user service forgot email');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.post('/users/forgot?email=' + email, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    /**
     * Restore User Password
     * @param {string} password - The new password to set.
     * @param {string} token - The token to restore password.
     * @returns
     * @memberOf UsersService
     */
    //Restore user password
    UsersService.prototype.resetPassword = function (password, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.post('/users/reset/' + token, { headers: headers, password: password }).map(function (res) {
            return res.json();
        });
    };
    /**
     * This function skip user in the db.
     * @param {Number} number - The number of users to skip.
     * @returns
     * @memberOf UsersService
     */
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
    /**
     * Get a file by the name of the file
     * @param {String} fileName - The name of the file to retrieve
     * @returns
     * @memberOf UsersService
     */
    // Get a file store in db by his name
    UsersService.prototype.getFile = function (fileName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
        return this.http.get('/file/' + fileName, { headers: headers });
    };
    /**
     * Retrieve the latest file of a user
     * @returns
     * @memberOf UsersService
     */
    UsersService.prototype.getLatestFile = function () {
        console.log("llamada al metodo getlatesfile");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
        return this.http.get('/getLatestfile', { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    /**
     * Retrieves all the files of a user by the user Id
     * @param {any} userId - The Id of the user
     * @returns
     *
     * @memberOf UsersService
     */
    UsersService.prototype.getFilesUploaded = function (userId) {
        console.log("llamada al metodo getFileUploaded - users.service" + "\n userId:" + userId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options.
        return this.http.get('users/getFilesUploaded?userId=' + userId, { headers: headers }).map(function (res) {
            // ya aqui en el serve side ya se ha hecho la validacion si es nullo, undefined, vacio
            return res.json();
        });
    };
    /**
     * Get a role of a user by his Id
     * @param {any} id - The id of the user to get the role
     * @returns
     *
     * @memberOf UsersService
     */
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
    /**
     * Retrieves all the School that are in the DB with the profesor of each schools
     * @returns
     * @memberOf UsersService
     */
    UsersService.prototype.getAllSchoolAndProfessor = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/users/escuelas', { headers: headers }).map(function (res) {
            // This is how can I send only the _id or the role in this method
            // console.log(res.json()[0]._id," reuktado from the call");
            return res.json();
        });
    };
    UsersService.prototype.getNumberOfFilesBySchools = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.get('/getAllArchivosEscuela', { headers: headers }).map(function (res) {
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(224);
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
        console.log("rol de que registra: " + user.role);
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
        console.log("Estes es el token", this.authToken);
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
    AuthService.prototype.getUserIdLoggedIn = function () {
        if (this.checkLoggedIn()) {
            var userId = localStorage.getItem('user');
            return userId;
        }
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* https://work.smarchal.com/twbscolor/ genrate boostrap color */\n\n/* Custom Color*/\n.main-color-bg{\n  background-color: #93c54b !important;\n  border-color: #c0932b !important ;\n  color: #ffffff !important;\n}\n\n/* dropdown button */\n.dropdown .btn-default{\n  color: #4D4848;\n  background-color:lightgrey; /* AFADB3  */\n  border-color: #130269;\n}\n\n/* Header */\n#header{\n  background: #333358;\n  color:#ffffff;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n}\n\n#header .create .btn-default{\n  margin-top: 20px;\n}\n\n/*Breadcrumb*/\n\n.breadcrumb{\n  background: #cccccc;\n  color: #333333;\n}\n\n.breadcrumb a {\n  color: #333333;\n}\n\n/* Progress Bar */\n/*.progress-bar{\n  background: #333333;\n  color: #ffffff;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
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
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
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
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaypalService = (function () {
    function PaypalService(http) {
        this.http = http;
    }
    /**
   * Retrieve a user from the db with his Id
   * @param {Number} id - The id of the user
   * @returns
   * @memberOf UsersService
   */
    // getUserById
    PaypalService.prototype.createPayment = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //set the Content-Type to application/json
        headers.append('Content-Type', 'application/json');
        // return an observable with the response
        // tslint:disable-next-line:max-line-length
        // here I make the Post http call. The second parameter is the data the I want to send to the post call,third parameter are the options. .map map or convert every value to a json
        return this.http.post('/pay', { headers: headers }).map(function (res) { return res.json(); });
    };
    return PaypalService;
}());
PaypalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaypalService);

var _a;
//# sourceMappingURL=paypal.service.js.map

/***/ }),
/* 145 */
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
        var expresion = user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.nombreEscuela == undefined;
        if (expresion) {
            // console.log("Registeration services register")
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
/* 164 */,
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
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 174;


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(220);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_js__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_raven_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomErrorHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// external modules

// external js files 

var CustomErrorHandler = (function () {
    function CustomErrorHandler(flashMessage) {
        this.flashMessage = flashMessage;
    }
    CustomErrorHandler.prototype.handleError = function (error) {
        console.log('Este error es cogido desde mi aplicacion global');
        console.log('Este es el error que se producio ', error.message);
        console.log('Esto es lo que causo el error ', error.stack);
        __WEBPACK_IMPORTED_MODULE_2_raven_js__["captureException"](error);
        __WEBPACK_IMPORTED_MODULE_2_raven_js__["context"](function () { }, {
            error: error,
            errorMessage: error.msg,
            errorStack: error.stack
        });
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    return CustomErrorHandler;
}());
CustomErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesModule"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesModule"]) === "function" && _a || Object])
], CustomErrorHandler);

var _a;
//# sourceMappingURL=CustomErrorHandler.js.map

/***/ }),
/* 189 */
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
        template: __webpack_require__(316),
        styles: [__webpack_require__(278)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raven_js__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CustomErrorHandler__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_components_listgroup_listgroup_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_icon_icon_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_sidebar_sidebar_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_progressbar_progressbar_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_box_box_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_boxes_boxes_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_components_table_table_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_components_modal_modal_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_users_admin_users_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_admin_register_admin_register_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_upload_portfolio_upload_portfolio_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_upload_file_upload_file_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_display_professors_display_professors_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_user_timeline_user_timeline_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_forgot_password_forgot_password_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_reset_password_reset_password_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_download_professor_files_download_professor_files_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pay_pay_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_not_found_path_not_found_path_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_validate_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__guards_auth_guard__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__guards_administrtor_guard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_utilities_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_administration_administrator_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_organization_organization_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_paypal_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// External Modules



//External Js File 

// My own modules

// Components



























//Services









__WEBPACK_IMPORTED_MODULE_8_raven_js__["config"]('https://8437f0ecddb64e0b9af3912881bec74f@sentry.io/203113')
    .install();
//appRoutes - va a contener todas las routes del angular app
var appRoutes = [
    // Home Route
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    // protect route
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */] },
    // protect route
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    // protect route
    { path: 'adminDashboard', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_40__guards_administrtor_guard__["a" /* AdministratorGuard */]] },
    { path: 'adminUsers', component: __WEBPACK_IMPORTED_MODULE_26__components_admin_users_admin_users_component__["a" /* AdminUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_40__guards_administrtor_guard__["a" /* AdministratorGuard */]] },
    // I will want this route to be protected only another administrator can create other
    // administrator
    { path: 'register/admin', component: __WEBPACK_IMPORTED_MODULE_27__components_admin_register_admin_register_component__["a" /* AdminRegisterComponent */] },
    // administrator upload templates - ponerle protected route
    { path: 'admin/upload', component: __WEBPACK_IMPORTED_MODULE_29__components_upload_file_upload_file_component__["a" /* UploadFileComponent */] },
    { path: 'admin/professors', component: __WEBPACK_IMPORTED_MODULE_30__components_display_professors_display_professors_component__["a" /* DisplayProfessorsComponent */] },
    { path: 'admin/DownloadProfessorsFiles/:escuela', component: __WEBPACK_IMPORTED_MODULE_34__components_download_professor_files_download_professor_files_component__["a" /* DownloadProfessorFilesComponent */] },
    // user upload portfolios - ponerle protected route
    { path: 'users/upload', component: __WEBPACK_IMPORTED_MODULE_28__components_upload_portfolio_upload_portfolio_component__["a" /* UploadPortfolioComponent */] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_31__components_user_timeline_user_timeline_component__["a" /* UserTimelineComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_32__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_33__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'pay', component: __WEBPACK_IMPORTED_MODULE_35__components_pay_pay_component__["a" /* PayComponent */] },
    //This route need to be at the end if none of this route match send to this route
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_36__components_not_found_path_not_found_path_component__["a" /* NotFoundPathComponent */] }
    // {path:'succes',component:PayComponent}
];
// enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_dashboard_components_listgroup_listgroup_component__["a" /* ListGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_icon_icon_component__["a" /* IconComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_dashboard_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_components_progressbar_progressbar_component__["a" /* ProgressbarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dashboard_components_box_box_component__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dashboard_components_boxes_boxes_component__["a" /* BoxesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dashboard_components_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dashboard_components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_admin_users_admin_users_component__["a" /* AdminUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_admin_register_admin_register_component__["a" /* AdminRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_upload_file_upload_file_component__["a" /* UploadFileComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_28__components_upload_portfolio_upload_portfolio_component__["a" /* UploadPortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_display_professors_display_professors_component__["a" /* DisplayProfessorsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_user_timeline_user_timeline_component__["a" /* UserTimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_download_professor_files_download_professor_files_component__["a" /* DownloadProfessorFilesComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_pay_pay_component__["a" /* PayComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_not_found_path_not_found_path_component__["a" /* NotFoundPathComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_37__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_38__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_39__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_40__guards_administrtor_guard__["a" /* AdministratorGuard */],
            __WEBPACK_IMPORTED_MODULE_41__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_42__services_utilities_service__["a" /* UtilitiesService */], __WEBPACK_IMPORTED_MODULE_43__services_administration_administrator_service__["a" /* AdministratorsService */], __WEBPACK_IMPORTED_MODULE_44__services_organization_organization_service__["a" /* OrganizationsService */], __WEBPACK_IMPORTED_MODULE_45__services_paypal_service__["a" /* PaypalService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9__CustomErrorHandler__["a" /* CustomErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(39);
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

/**
 *
 * @class AdminDashboardComponent
 * @implements {OnInit}
 */
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
        template: __webpack_require__(317),
        styles: [__webpack_require__(46)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], AdminDashboardComponent);

var _a;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),
/* 192 */
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
        template: __webpack_require__(318),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [])
], AdminRegisterComponent);

//# sourceMappingURL=admin-register.component.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(39);
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

/**
 *
 * @class AdminUsersComponent
 * @implements {OnInit}
 */
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
        template: __webpack_require__(319),
        styles: [__webpack_require__(280), __webpack_require__(46)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], AdminUsersComponent);

var _a;
//# sourceMappingURL=admin-users.component.js.map

/***/ }),
/* 194 */
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
        template: __webpack_require__(320),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [])
], BoxComponent);

//# sourceMappingURL=box.component.js.map

/***/ }),
/* 195 */
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
        template: __webpack_require__(321),
        styles: [__webpack_require__(282), __webpack_require__(46)]
    }),
    __metadata("design:paramtypes", [])
], BoxesComponent);

//# sourceMappingURL=boxes.component.js.map

/***/ }),
/* 196 */
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
        template: __webpack_require__(322),
        styles: [__webpack_require__(283), __webpack_require__(46)]
    }),
    __metadata("design:paramtypes", [])
], ListGroupComponent);

//# sourceMappingURL=listgroup.component.js.map

/***/ }),
/* 197 */
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
        template: __webpack_require__(323),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),
/* 198 */
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
        template: __webpack_require__(324),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [])
], ProgressbarComponent);

//# sourceMappingURL=progressbar.component.js.map

/***/ }),
/* 199 */
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
        template: __webpack_require__(325),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
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


/**
 * This is a child class for the AdminDashBoardComponent that contain the information of the schools and their s
 * @see {@link AdminDashboardComponent }
 * @class TableComponent
 * @implements {OnInit}
 */
var TableComponent = (function () {
    /**
     * Creates an instance of TableComponent.
     * @param {UsersService} userService
     * @param {NgZone} zone
     *
     * @memberOf TableComponent
     */
    function TableComponent(userService, zone) {
        this.userService = userService;
        this.zone = zone;
        /**
         * A boolean to indicate if the search bar should be displayed
         * @type {boolean}
         * @memberOf TableComponent
         */
        this.showFilter = false;
        /**
         * Give Css Class to Specific elements
         * @memberOf TableComponent
         */
        this.className = "";
        /**
         *
         * The text of the header in the table
         * @memberOf TableComponent
         */
        this.text = "N/A";
        /**
         * The Current Page to show in the table
         * @memberOf TableComponent
         */
        this.currentPage = 1;
        /**
         * Property to export to a parent element
         * @memberOf TableComponent
         */
        // Output the currentPage Property. This is how to pass a property from a child element to a parent element that integrate this component
        this.exportProp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * How many user you want to show in the table
         * @memberOf TableComponent
         */
        this.showUsersSkipNumber = 0;
        /**
         * The profesors on each schools
         * @memberOf TableComponent
         */
        this.professors = [];
        /**
         * Files of each professor
         * @memberOf TableComponent
         */
        this.numberProfessorsFiles = [];
        this.count = 0;
        this.arra = [];
        this.dictionaryKeys = Object.keys;
        this.dictionary = {};
    }
    /**
     * Initialization of the componet
     * @memberOf TableComponent
     */
    TableComponent.prototype.ngOnInit = function () {
        // this.currentPage = 1;
        this.skipUser(this.currentPage);
        this.showSchoolNamesAndProfessor2();
        // this.dictionary["Escuela uno"] = ["Nuevos nombres puestos","Por mi para ","Saber si funcionan"];
    }; // End NGonInit()
    /**
     * Method for the paginantion to work in the table. Show only a limite result of user in the table
     * @param {any} currentPage The current Page to show
     *
     * @memberOf TableComponent
     */
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
    };
    /**
     * Function to retrieve all the School in the DB with his professor
     * @memberOf TableComponent
     */
    TableComponent.prototype.showSchoolNamesAndProfessor = function () {
        var _this = this;
        this.userService.getAllSchoolAndProfessor().subscribe(function (data) {
            var count = 0;
            /** Number of files for each school */
            var countFilesOfSchools = 0;
            console.log("Data de escuela: " + JSON.stringify(data.professors, null, 4));
            _this.schoolNames = data.schools;
            for (var index = 0; index < data.schools.length; index++) {
                _this.professors.push(data.schools[index]);
                if (index > 0) {
                    if (index < data.schools.length) {
                        console.log("pushing number: " + countFilesOfSchools);
                        _this.numberProfessorsFiles.push(countFilesOfSchools);
                        countFilesOfSchools = 0;
                    }
                }
                if (count < data.professors.length) {
                    for (var index = 0; index < 3; index++) {
                        if (count < data.professors.length) {
                            console.log("count: " + count);
                            _this.professors.push(data.professors[count].name);
                            countFilesOfSchools = data.professors[count].file.length;
                            countFilesOfSchools += countFilesOfSchools;
                            console.log("Count of files: " + countFilesOfSchools);
                            count++;
                        }
                    }
                }
            }
            console.log("Data de escuela: " + JSON.stringify(_this.professors, null, 4));
        });
    };
    /**
    * Function to retrieve all the School in the DB with his professor
    * @memberOf TableComponent
    */
    TableComponent.prototype.showSchoolNamesAndProfessor2 = function () {
        var _this = this;
        this.userService.getAllSchoolAndProfessor().subscribe(function (data) {
            console.log("Data de escuela: " + JSON.stringify(data.professors, null, 4));
            _this.schoolNames = data.schools;
            _this.professors = data.professors;
            var arra = [];
            var start = 0;
            var end = data.numberOfSchool[_this.schoolNames[0]];
            for (var index = 0; index < data.schools.length; index++) {
                // this.professors.push(data.professors[index].name)
                _this.dictionary[_this.schoolNames[index]] = _this.professors.slice(start, end);
                console.log("Start antes : " + start + " ,End antes: " + end + "\n");
                console.log("School Names:  " + _this.schoolNames[index]);
                console.log("Professor slice: ", _this.professors.slice(start, end));
                console.log("Cantida de profesores : " + data.numberOfSchool[_this.schoolNames[index]] + " para escuela: " + _this.schoolNames[index]);
                console.log("Index del loop: " + index + "\n \n");
                start = end;
                end += data.numberOfSchool[_this.schoolNames[index + 1]];
                console.log("Start despues : " + start + " ,End despues: " + end + "\n");
                console.log("Professor slice de la proxima linea: ", _this.professors.slice(start, end));
                console.log("--------------------------------------");
            }
            console.log("Profesores de escuela: " + JSON.stringify(_this.professors, null, 4));
            console.log("Escuela uno " + _this.dictionary["Escuela uno"]);
        });
    };
    TableComponent.prototype.showSchoolNamesAndProfessor3 = function () {
        var _this = this;
        this.userService.getAllSchoolAndProfessor().subscribe(function (data) {
            console.log("Data de escuela: " + JSON.stringify(data.professors, null, 4));
            _this.schoolNames = data.schools;
            _this.professors = data.professors;
            var arra = [];
            var start = 0;
            var end = data.numberOfSchool[_this.schoolNames[0]];
            for (var index = 0; index < data.schools.length; index++) {
                // this.professors.push(data.professors[index].name)
                if (index != data.schools.length - 1) {
                    _this.dictionary[_this.schoolNames[index]] = _this.professors.slice(start, end);
                    console.log("Start: " + start + " ,End: " + end + "\n");
                    console.log("School Names:  " + _this.schoolNames[index]);
                    console.log("Professor slice: ", _this.professors.slice(start, end));
                    console.log("numero: " + data.numberOfSchool[_this.schoolNames[index]]);
                    console.log("Index: " + index);
                    console.log("--------------------------------------");
                    start = end;
                    end += data.numberOfSchool[_this.schoolNames[index]];
                }
                if (index == data.schools.length - 1) {
                    console.log("Start: " + start + " end " + end);
                    // start = end - data.numberOfSchool[this.schoolNames[index -1 ]]
                    start = end;
                    end += data.numberOfSchool[_this.schoolNames[index]];
                    console.log("Ultima escuela");
                    console.log("data number school anterior: " + data.numberOfSchool[_this.schoolNames[index - 1]]);
                    console.log("index: " + index);
                    console.log("Start: " + start + " ,End: " + end + "\n");
                    _this.dictionary[_this.schoolNames[index]] = _this.professors.slice(start, end);
                    console.log("profesores: ", _this.professors.slice(start, end));
                }
            }
            console.log("Profesores de escuela: " + JSON.stringify(_this.professors, null, 4));
            console.log("Escuela uno " + _this.dictionary["Escuela uno"]);
        });
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
        template: __webpack_require__(326),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=table.component.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
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
    function DashboardComponent(route) {
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(327),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayProfessorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayProfessorsComponent = (function () {
    function DisplayProfessorsComponent(userService) {
        this.userService = userService;
        /**
         * The profesors on each schools
         * @memberOf TableComponent
         */
        this.professors = [];
        this.dictionaryKeys = Object.keys;
        this.filesDictionary = {};
        this.numberOfFilesDictionary = {};
        this.files = 0;
        this.dictionary = {};
    }
    DisplayProfessorsComponent.prototype.ngOnInit = function () {
        this.showSchoolNamesAndProfessor2();
        // this.numbersOFFilesCount()
    };
    DisplayProfessorsComponent.prototype.numbersOFFilesCount = function () {
        console.log("files dictionary: " + this.dictionary["mi s"]);
        this.userService.getNumberOfFilesBySchools().subscribe(function (schoolFiles) {
            console.log("Escuela Numbers of Files: " + JSON.stringify(schoolFiles, null, 4));
        });
    };
    /**
    * Function to retrieve all the School in the DB with his professor
    * @memberOf TableComponent
    */
    DisplayProfessorsComponent.prototype.showSchoolNamesAndProfessor2 = function () {
        var _this = this;
        this.userService.getAllSchoolAndProfessor().subscribe(function (data) {
            console.log("Data de escuela: " + JSON.stringify(data.data, null, 4));
            _this.schoolNames = data.schools;
            _this.professors = data.professors;
            var arra = [];
            var start = 0;
            var end = data.numberOfSchool[_this.schoolNames[0]];
            var count = 0;
            var co = -1;
            var achivos = 0;
            var nu = 0;
            var multipl = 1;
            var files = data.data[5].file;
            console.log('Data files:' + files);
            for (var index = 0; index < data.schools.length; index++) {
                // this.professors.push(data.professors[index].name)
                _this.dictionary[_this.schoolNames[index]] = _this.professors.slice(start, end);
                start = end;
                end += data.numberOfSchool[_this.schoolNames[index + 1]];
                if (index != data.schools.length - 1) {
                    multipl += data.numberOfSchool[_this.schoolNames[index + 1]];
                }
            }
            // multiplicar todos los numberschool para saber las repeteciones
            for (var index2 = 0; index2 < 10000; index2++) {
                console.log("count: " + index2);
                _this.files += data.data[index].file.length;
                if (co == -1) {
                    count = data.numberOfSchool[_this.schoolNames[nu]];
                    co = 0;
                }
                if (co < count) {
                    console.log("co " + co + " es menor que " + "count " + count);
                    if (co == 0) {
                        achivos = nu;
                    }
                    co++;
                    console.log("Escuela: " + _this.schoolNames[achivos]);
                    console.log("Escuela: " + data.data[achivos].nombreEscuela);
                    //  console.log("index: " + achivos)              
                    _this.filesDictionary[_this.schoolNames[achivos]] = data.data[achivos].file.length;
                    console.log("Archivos Lenght: " + data.data[achivos].file.length);
                    console.log("***************");
                }
                else {
                    console.log("----------------");
                    nu++;
                    count = data.numberOfSchool[_this.schoolNames[nu]];
                    // console.log("El nuevo count es " + count)
                    // console.log("----------------")                
                    co = 0;
                }
                if (count == undefined) {
                    break;
                }
            }
            console.log("multipli es " + multipl);
            console.log("Profesores de escuela: " + JSON.stringify(_this.professors, null, 4));
            console.log("Escuela uno " + _this.dictionary["Escuela uno"]);
            console.log("files dictionary: " + _this.dictionary["mi s"]);
            _this.userService.getNumberOfFilesBySchools().subscribe(function (schoolFiles) {
                console.log("Escuela Numbers of Files: " + JSON.stringify(schoolFiles, null, 4));
                for (var index = 0; index < schoolFiles.length; index++) {
                    if (_this.dictionary[schoolFiles[index].nombreEscuela]) {
                        console.log("no es nullo");
                        var escuela = schoolFiles[index].nombreEscuela;
                        var numberOfFiles = schoolFiles[index].numberOfFiles;
                        _this.numberOfFilesDictionary[escuela] = numberOfFiles;
                        console.log("Escuela " + escuela);
                        console.log("Archivos: " + _this.numberOfFilesDictionary[escuela]);
                    }
                }
            });
        });
    };
    return DisplayProfessorsComponent;
}());
DisplayProfessorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-display-professors',
        template: __webpack_require__(328),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], DisplayProfessorsComponent);

var _a;
//# sourceMappingURL=display-professors.component.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadProfessorFilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadProfessorFilesComponent = (function () {
    function DownloadProfessorFilesComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.escuela = "";
        this.listOfFileNames = [];
    }
    DownloadProfessorFilesComponent.prototype.ngOnInit = function () {
        this.escuela = this.route.snapshot.queryParams["escuela"];
        console.log('parameter escuela:' + this.escuela);
        this.loadFiles();
    };
    DownloadProfessorFilesComponent.prototype.loadFiles = function () {
        var _this = this;
        console.log('escuela load');
        this.userService.getUserByEscuela(this.escuela).subscribe(function (data) {
            console.log("Escuela: " + JSON.stringify(data.files, null, 4));
            for (var index = 0; index < data.files.length; index++) {
                for (var index2 = 0; index2 < data.files[index].length; index2++) {
                    console.log(data.files[index][index2]);
                    _this.listOfFileNames.push(data.files[index][index2]);
                }
            }
        });
    };
    return DownloadProfessorFilesComponent;
}());
DownloadProfessorFilesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-download-professor-files',
        template: __webpack_require__(329),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], DownloadProfessorFilesComponent);

var _a, _b;
//# sourceMappingURL=download-professor-files.component.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services 

// external modules 

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(usersService, flashMessage) {
        this.usersService = usersService;
        this.flashMessage = flashMessage;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        console.log('Forgot Password : ' + this.email);
        this.usersService.sendForgotEmail(this.email).subscribe(function (data) {
            if (data.success === 'undefined') {
                console.log(' data succes data succes nullo');
                return;
            }
            if (data.success) {
                if (data.msg === 'undefined') {
                    console.log('Forgot password data msg nullo');
                    return;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
                }
            }
            else if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
            }
            else {
                _this.flashMessage.show("Un error inesperado ocurrio enviando el email para recuperar la contrasena", { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(330),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ForgotPasswordComponent);

var _a, _b;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),
/* 205 */
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
        template: __webpack_require__(331),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 206 */
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
        template: __webpack_require__(332),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

//# sourceMappingURL=icon.component.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
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
        template: __webpack_require__(333),
        styles: [__webpack_require__(294)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(10);
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

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
    name: 'James Morrison',
    email: 'jamesmorrison@example.com',
    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
});
LogRocket.getSessionURL(function (sessionURL) {
    console.log(sessionURL);
});
LogRocket.track('Register User');
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
        this.flashMessage.show("Has sido desconectado correctamente!", { cssClass: 'alert-success', timeout: 4000 });
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
        // console.log("User Role from NavBar: " + this.userRole);
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
            // console.log("Nav Bar Role: " + this.userRole);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("Un error ocurrió determinando su rol", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            _this.router.navigate(['/login']);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(334),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPathComponent = (function () {
    function NotFoundPathComponent() {
    }
    NotFoundPathComponent.prototype.ngOnInit = function () {
    };
    return NotFoundPathComponent;
}());
NotFoundPathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found-path',
        template: __webpack_require__(335),
        styles: [__webpack_require__(296)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundPathComponent);

//# sourceMappingURL=not-found-path.component.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_paypal_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// services

// external modules

var PayComponent = (function () {
    function PayComponent(paypalService, flashMessage, router) {
        this.paypalService = paypalService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    PayComponent.prototype.ngOnInit = function () {
    };
    PayComponent.prototype.onPaySubmit = function () {
        console.log("payment submited");
        this.paypalService.createPayment().subscribe(function (data) {
            console.log(data);
            window.location.href = data.paymentLink;
            if (data.success === 'undefined') {
                console.log(' data succes data succes nullo');
                return;
            }
        });
    };
    PayComponent.prototype.alertT = function () {
        alert('Hola from Pay');
    };
    return PayComponent;
}());
PayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pay',
        template: __webpack_require__(336),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_paypal_service__["a" /* PaypalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_paypal_service__["a" /* PaypalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PayComponent);

var _a, _b, _c;
//# sourceMappingURL=pay.component.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
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







/**
 * This Componet will show the user profile.
 * @class ProfileComponent
 * @implements {OnInit}
 */
var ProfileComponent = (function () {
    /**
     * Creates an instance of ProfileComponent.
     * @param {AuthService} authService
     * @param {Router} router
     * @param {FlashMessagesService} flashMessage
     * @param {UsersService} userService
     * @param {DomSanitizer} sanitizer
     *
     * @memberOf ProfileComponent
     */
    // Inject the service into the constructor
    function ProfileComponent(authService, router, flashMessage, userService, sanitizer) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.sanitizer = sanitizer;
        /**
         * Flag to verify is the file is downloading
         * @type {boolean}
         * @memberOf ProfileComponent
         */
        this.isDownloading = true;
    }
    /**
     * Initialize component. This method get call when the component is render for the first time
     * @memberOf ProfileComponent
     */
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.getFileByName("Christian Nogueras Rosado Resume v3-July 25, 2017, 11:41:53 AM.docx");
        this.getListOfFileNames();
    };
    /**
     * Get profile of the user.
     * @return {Object} User The user information
     * @throws error Show an error message of the operation
     * @memberOf ProfileComponent
     */
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        // get request to users/profile to authenticate user with a token.
        this.authService.getProfile().subscribe(function (profile) {
            // user send with the response
            console.log("este es profile", profile);
            if (profile.user) {
                /**
                 * El usuario obtenido de la llamada Http
                 * @type {Object}*/
                _this.user = profile.user;
            }
            else {
                // Show a error message
                _this.flashMessage.show("Error obteniendo informacion del usuario" + " - code ang", { cssClass: 'alert-danger', timeout: 30000 }); // 30 segundos
            }
            if (_this.user) {
                console.log("Se debe mostrar");
            }
        }, function (err) {
            // observable can also return error
            console.log(err);
            console.log('aqui succed erro???!!!!! en profile component angular');
            // Show a error message
            _this.flashMessage.show("Error. Verifique que usted tenga conexion a internet. Contacte un representates de OPAS si el problema persiste y muestrele este error. Extra informacion: No se pudo comunicar con el servidor express. Tuvo que haber ocurrido un error con la aplicacion Node. Este es el error:  " + err.msg + " - code ang", { cssClass: 'alert-danger', timeout: 50000 });
            // redirect to the login page
            _this.router.navigate(['/dashboard']);
            return false;
        });
    };
    /**
     * Retrieve a file from the db with his name.
     * @param {String} filename the name of the file to retrieve
     * @memberOf ProfileComponent
     */
    ProfileComponent.prototype.getFileByName = function (filename) {
        var _this = this;
        // get request to users/profile to authenticate user with a token.
        this.userService.getFile(filename).subscribe(function (file) {
            // user send with the response
            _this.fileLink = file.toString();
            _this.fileLink = _this.fileLink.split("http://")[_this.fileLink.split("http://").length - 1];
            _this.safeFileLink = _this.sanitizer.bypassSecurityTrustUrl(_this.fileLink);
            _this.fileUrl = "http://" + _this.fileLink;
            console.log("file url from method:" + _this.fileLink);
            console.log("Response from server: " + file);
            console.log("Safe Link Url: " + _this.safeFileLink);
            _this.isDownloading = false;
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("Error retrieving the file", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            // this.router.navigate(['/login']);
            return false;
        });
    };
    /**
     * Funcion para obtener los archivos que el usuario tiene que descargar. Estos archivos son proveidos por los templates que suba el administrador
     * @memberOf ProfileComponent
     */
    ProfileComponent.prototype.getListOfFileNames = function () {
        var _this = this;
        this.userService.getLatestFile().subscribe(function (file) {
            if (!__WEBPACK_IMPORTED_MODULE_6_underscore__["isEmpty"](file) &&
                !__WEBPACK_IMPORTED_MODULE_6_underscore__["isNull"](file) &&
                !__WEBPACK_IMPORTED_MODULE_6_underscore__["isUndefined"](file)) {
                // user send with the response
                _this.listOfFileNames = file;
            }
            else {
                _this.listOfFileNames = [{ name: "No file to show" }];
            }
            console.log("file object is " + file);
            console.log("length of file " + file.length);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("Error mostrando los archivos para descargar", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            return false;
        });
    };
    ProfileComponent.prototype.downloadLink = function () {
        // alert("hello")
        // window.setTimeout(function(){
        //   alert("Hello downloading file")
        //   // window.location.replace(this.safeFileLink);
        // },2000)
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(337),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(10);
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
        // role;
        this.text = "Regístrate";
        this.role = 2;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // role of administrator
        // cambiar esto
        console.log('role es ', this.role);
    };
    RegisterComponent.prototype.cho = function () {
        console.log("hhelo baby");
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Aqui tengo que mandar el rol del usuario pa asegurar quien lo creo y que rol tiene este
        // usuario nuevo
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            role: this.role,
            CreatedDate: new Date(),
            file: [],
            nombreEscuela: this.escuela.toString().toLowerCase()
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            // tslint:disable-next-line:max-line-length
            // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
            this.flashMessage.show("Porfavor llena todo los encasillados antes de crear la cuenta.", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // tslint:disable-next-line:max-line-length
            // send a flash message error. contains options you want to show eg. cssClass,timeout-set a timeout to go away watch angular2-flash message documentaion on google
            this.flashMessage.show("Porfavor utiliza una direccion de correo electronico valida o completa", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register user. since it's an observable we need to subcribe to it.
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            // callback with the data(aka json)
            // data.succes I refer to this as the json come with the respond. if user register
            if (data.success) {
                // show a message
                _this.flashMessage.show("Ahora estas registrado y puedes conectarte!", { cssClass: 'alert-success', timeout: 3000 });
                if (LogRocket) {
                    LogRocket.track('Register User');
                }
                // Redirect to login
                _this.router.navigate(['/login']);
            }
            else {
                // show a message. sugestion maye in the json can be a error message
                _this.flashMessage.show("Error: " + data.msg || data.error.errors.nombreEscuela.message, { cssClass: 'alert-danger', timeout: 10000 });
                // Redirect to login
                // this.router.navigate(['/register'])
            }
        });
        // console.log(this.name,this.username,this.email, "role: ",this.role + " escuela: " + this.escuela.toString().toLowerCase());
        //  data.error.errors.file.message - mostrar el mensajes de error de excdeio file archivos
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "role", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(338),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services 


// external modules 

var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(usersService, flashMessage, router, route, authService) {
        this.usersService = usersService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
        this.authService = authService;
        // token = "453bc3b66146c23fecd2055f0d022efe3a910ae0"
        this.token = 'No token';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.token = this.route.snapshot.queryParams["token"];
        console.log('token param ' + this.token);
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        // 453bc3b66146c23fecd2055f0d022efe3a910ae0
        console.log('pass' + this.password);
        this.usersService.resetPassword(this.password, this.token).subscribe(function (data) {
            if (data.success === 'undefined') {
                console.log(' data succes data succes nullo');
                return;
            }
            if (data.success) {
                if (data.msg === 'undefined') {
                    console.log('Forgot password data msg nullo');
                    return;
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
                    _this.router.navigate(['/login']);
                }
            }
            else if (!data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 8000 });
            }
            else {
                _this.flashMessage.show("Un error inesperado ocurrio para cambiar la contrasena", { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(339),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], ResetPasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
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



// modules


var userId = localStorage.getItem('user');
var URL = "administrator/upload";
var UploadFileComponent = (function () {
    function UploadFileComponent(userService, flashMessage, authService) {
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.rows = [{ name: 'Chris Daly' }];
        this.name = "";
        //declare a property called fileuploader and assign it to an instance of a new fileUploader.
        //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'file',
            additionalParameter: (_a = {}, _a["name"] = "christian", _a)
        });
        var _a;
    }
    UploadFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onBeforeUploadItem = function () {
            console.log("before");
        };
        console.log(this.uploader.options.additionalParameter["name"]);
        // this.uploader.options.removeAfterUpload = true;
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", response);
        };
        this.userService.getLatestFile().subscribe(function (file) {
            if (!__WEBPACK_IMPORTED_MODULE_5_underscore__["isEmpty"](file) &&
                !__WEBPACK_IMPORTED_MODULE_5_underscore__["isNull"](file) &&
                !__WEBPACK_IMPORTED_MODULE_5_underscore__["isUndefined"](file)) {
                // user send with the response
                _this.listOfFileNames = file;
            }
            else {
                _this.listOfFileNames = [{ name: "No file to show" }];
            }
            console.log("file object is " + file);
            console.log("length of file " + file.length);
        }, function (err) {
            // observable can also return error
            console.log(err);
            // Show a error message
            _this.flashMessage.show("Error mostrando los archivos que se subieron", { cssClass: 'alert-danger', timeout: 5000 });
            // redirect to the login page
            return false;
        });
    };
    UploadFileComponent.prototype.addRow = function () {
        console.log("filename: " + this.listOfFileNames[0].name);
        console.log("filename length " + this.listOfFileNames.length);
        if (this.rows.length <= 4) {
            this.rows.push({ name: this.name });
            this.name = '';
        }
    };
    UploadFileComponent.prototype.uploadAll = function () {
        console.log("llamada a uploadAll");
        console.log("lenght not uploaded item: " + this.uploader.getNotUploadedItems().length);
        var uploadFile;
        if (this.listOfFileNames.length >= 4) {
            var lengthOfList = this.listOfFileNames.length;
            // this will match the last hyphen [^-]*[^ -]$
            // this will match the first hyphen ^[^-]*[^ -]
            // regex expresion will retrieve everything before the last "-" hyphen que va
            // a ser el que yo le pongo en el server
            var lastFile = this.listOfFileNames[lengthOfList - 1].name.match(/^[^-]*[^-]/g);
            // matche everything before a -
            var filetoUpload = this.uploader.queue.concat()[0]._file.name.match(/^[^-]*[^ -]/g);
            // console.log("file tp" + filetoUpload);
            uploadFile = window.confirm("El archivo: \"" + lastFile + "\" sera remplazado con el archivo \"" + filetoUpload + "\" ");
        }
        if (uploadFile == true || this.listOfFileNames.length <= 4) {
            console.log("uplaod file es true");
            this.uploader.uploadAll();
        }
        else if (uploadFile == false) {
            window.alert("La subida del archivo fue cancelada");
        }
        else {
            window.alert("Un error ocurrio al subir el archivo");
        }
    };
    return UploadFileComponent;
}());
UploadFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-file',
        template: __webpack_require__(340),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], UploadFileComponent);

var _a, _b, _c;
//# sourceMappingURL=upload-file.component.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// services


// modules


// Third Party Libraries

var userId = localStorage.getItem('user');
var URL = "users/upload?userId=" + userId;
var UploadPortfolioComponent = (function () {
    function UploadPortfolioComponent(userService, flashMessage, authService) {
        this.userService = userService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        //declare a property called fileuploader and assign it to an instance of a new fileUploader.
        //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'file',
            additionalParameter: (_a = {}, _a["name"] = "christian", _a)
        });
        var _a;
    }
    UploadPortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Upload Component Initializar");
        if (this.authService.checkLoggedIn()) {
            var userId_1 = this.authService.getUserIdLoggedIn();
            this.userService.getFilesUploaded(userId_1).subscribe(function (file) {
                console.log("arcvivos: ");
                console.log(JSON.stringify(file.file[0].file, null, 4));
                if (file.success) {
                    _this.files = file.file[0].file;
                }
                else if (__WEBPACK_IMPORTED_MODULE_5_underscore__["isEmpty"](file)) {
                    _this.files = ["No hay ningun Archivo subido por usuario"];
                }
                else {
                    // ya aqui en el server side se hace toda validacion si el archvivo es
                    // nullo , undefined o vacio
                    if (!file.success) {
                        _this.files = [file.msg];
                    }
                    else {
                        _this.files = ["Error. No se ha podido obtener los archivos del usuarios"];
                    }
                }
            }, function (err) {
                // observable can also return error
                console.log(err);
                // Show a error message
                _this.flashMessage.show("Error Obteniendo archivos subidos por usuario", { cssClass: 'alert-danger', timeout: 5000 });
                return false;
            });
        }
        else {
            this.files = ["Error. No hay ningun usuario conectado"];
        }
        // Upload File
        //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onBeforeUploadItem = function () {
            console.log("before");
        };
        console.log(this.uploader.options.additionalParameter["name"]);
        // this.uploader.options.removeAfterUpload = true;
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", response);
        };
    };
    UploadPortfolioComponent.prototype.uploadAll = function () {
        console.log("llamada a uploadAll");
        console.log("lenght not uploaded item: " + this.uploader.getNotUploadedItems().length);
        var uploadFile;
        if (this.files.length >= 4) {
            var lengthOfList = this.files.length;
            // this will match the last hyphen [^-]*[^ -]$
            // this will match the first hyphen ^[^-]*[^ -]
            // regex expresion will retrieve everything before the last "-" hyphen que va
            // a ser el que yo le pongo en el server
            var lastFile = this.files[lengthOfList - 1].match(/^[^-]*[^-]/g);
            // matche everything before a -
            var filetoUpload = this.uploader.queue.concat()[0]._file.name.match(/^[^-]*[^ -]/g);
            // console.log("file tp" + filetoUpload);
            uploadFile = window.confirm("El archivo: \"" + lastFile + "\" sera remplazado con el archivo \"" + filetoUpload + "\" ");
        }
        if (uploadFile == true || this.files.length <= 4) {
            console.log("uplaod file es true");
            this.uploader.uploadAll();
        }
        else if (uploadFile == false) {
            window.alert("La subida del archivo fue cancelada");
        }
        else {
            window.alert("Un error ocurrio al subir el archivo");
        }
    };
    return UploadPortfolioComponent;
}());
UploadPortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-portfolio',
        template: __webpack_require__(341),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], UploadPortfolioComponent);

var _a, _b, _c;
//# sourceMappingURL=upload-portfolio.component.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTimelineComponent; });
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
 *
 *
 * @export
 * @class UserTimelineComponent
 * @implements {OnInit}
 */
var UserTimelineComponent = (function () {
    function UserTimelineComponent(cd) {
        this.cd = cd;
    }
    UserTimelineComponent.prototype.ngOnInit = function () {
        console.log(alertT2);
        console.log("Componente initializado");
        loadTimeline();
    };
    UserTimelineComponent.prototype.alertT = function () {
        alertT2();
    };
    return UserTimelineComponent;
}());
UserTimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-timeline',
        template: __webpack_require__(342),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], UserTimelineComponent);

var _a;
//# sourceMappingURL=user-timeline.component.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(10);
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
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module__);
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
    /**
     * Auth Guard canActivate Method
     * @memberOf AuthGuard
     * @returns {Boolean} True if you have acces. False if you dont have acces to this * route
     */
    // Protect Route with lowercase c. to restrict whatever page you nedd to extend the CanActivate interface and include the canActivate function. inside the function you put whatever logic you want and return true or false to Authorized access    
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
    /**
     * Helper Function to get the role of a user. This function use the userId store in local storage to retrieve the role of a user
     * @throws show an error message if can't get the role of the user
     * @memberOf AuthGuard
     */
    // Helper Method
    AuthGuard.prototype.getRoleOfUser = function () {
        var _this = this;
        /**
         * The id of the user
         * @type {string}
         * @readonly
         */
        var userId = localStorage.getItem('user');
        // var id;
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
    /**
     * @summary Function to detect if someone try to change the local Storage
     *
     * @desc I use this function to verify if someone try to change his role, if someone do that I redirect to the last page they were using ``` window.location.reload()```
     *
     * @memberOf AuthGuard
     */
    AuthGuard.prototype.detectLocalStorageChange = function () {
        window.addEventListener("storage", function () {
            console.log("localstorage cambio");
            // Le doy redirect a una pagina 400 o a una pagina especial dicindole que ellos
            // no deben modificar el storage. Using below code
            // window.location.replace(Page Especial Url);
            this.location.reload();
        }, false);
    };
    /**
     * Show a message that the user is not logged in using the flashMessage Module
     * @see {@link https://github.com/moff/angular2-flash-messages }
     * @memberOf AuthGuard
     */
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _e || Object])
], AuthGuard);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth.guard.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__administration_administrator_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_organization_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(7);
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
/* 220 */
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
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "#footer{\n  background: #333333;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  overflow-y: auto;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  /*margin: 300 5 0 5;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".dash-box{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".panel-title{\n  color: #ffffff;\n}\n\na{\n  color: #3e3f3a;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".badge{\n  /*Mientras mas bajito mas gris(fuerte) es el color*/\n  background: #797979;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* Progress Bar */\n.progress-bar{\n  background: #333333 ;\n  color: #ffffff ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* Custom Color*/\n.main-color-bg{\n  background-color: #93c54b !important;\n  border-color: #c0932b !important ;\n  color: #ffffff !important;\n}\n .panel-title{\n   color: #ffffff;\n }\n\n .panel-heading{\n   background-color: #93c54b ;\n   border-color: black  ;\n }\n\n/*.pagination{}*/\n.center {\n  margin-left: 200px;\n}\n\n/* Make Inout Search Field Smaller*/\n.makeSmaller{\n  height: 34px;\n}\n\n/** ------------------------------- ** /\n/** Display Grid Wrapper */\n.grid-wrapper{\n  /* display: -ms-grid; */\n  display: inline;\n  /* -ms-layout-grid-type: 1fr,1fr,1fr; */\n  -ms-grid-columns: 1fr,1fr,1fr;\n      grid-template-columns: 1fr,1fr,1fr;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 40px;\n  font-family: 'Open Sans', 'sans-serif';\n  background-color: #fff;\n  color: #444;\n}\n\nh1, p {\n  margin: 0 0 1em 0;\n}\n\n.wrapper {\n  max-width: 940px;\n  margin: 0 20px;\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 10px;\n}\n\n\n@media screen and (min-width: 500px) {\n\n  /* no grid support? */\n  .sidebar {\n    float: left;\n    width: 19.1489%;\n  }\n\n  .content {\n    float: right;\n    width: 79.7872%;\n  }\n\n  .wrapper {\n    margin: 0 auto;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n  }\n  \n  .header, .footer {\n    grid-column: 1 / -1;\n    /* needed for the floated layout */\n    clear: both;\n  }\n\n\n}\n\n .s{\n   color:blue;\n }\n  .wrapper2{\n     display: -ms-grid;\n     display: grid;\n     color:darkcyan;\n  }\n  .wrapper2{\n    -ms-grid-columns: 1fr 3fr;\n        grid-template-columns: 1fr 3fr;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 40px;\n  font-family: 'Open Sans', 'sans-serif';\n  background-color: #fff;\n  /* color: #444; */\n}\n\nh1,\np {\n  margin: 0 0 1em 0;\n}\n\n.wrapper {\n  max-width: 940px;\n  margin: 0 20px; \n  display: -ms-grid; \n  display: grid;\n  grid-gap: 48px;\n}\n\n\n/* for no grid support? fallback */\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n/* if it has grid support the browser  */\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  margin: 0 auto;\n  /* si quiero que no se corten las palabras de el nombre de la escuela tengo que\n  hacer que los rows sean fijos lo que quita el responsive pero los nombre de las \n  escuelas no se van a cortar despues de 19 carateres words sin espacios .*/\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr; \n   /* Despues de 19 palabras se corta el nombre de la escuela si no tiene un \n   espacio y si no es la ultimacolumna*/\n  /* the minmax control the width  */   \n   -ms-grid-columns: (minmax(250px, 1fr))[auto-fill];   \n       grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));    \n  /*control the height de todo y el panel  */\n  grid-auto-rows: minmax(250px, auto); \n  grid-auto-columns: minmax(300px,auto);\n\n\n  /* Estilo */\n   /* box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);   */\n\n}\n\n.panel {\n  /* needed for the flex layout if it has not grid support*/\n  margin-left: 5px;\n  margin-right: 5px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 200px;\n          flex: 1 1 200px;\n  /*border to each school */\n  /* border: 3px solid black; */\n  /* height de todo lo que esta dentro del panel   */\n  /* Estilo  */\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    \n  width: auto\n}\n\n.panel:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.header,\n.footer {\n  margin-left: 5px;\n  margin-right: 5px;\n  /* if tt doesnt have grid support  */\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 100%;\n          flex: 0 1 100%;\n  grid-column: 1 / -1;\n}\n\n/* everything inside the wrapper class  */\n.wrapper > * {\n   /* background-color: #444;  */\n  /* color: #fff; */\n  /* border-style: solid; */\n  color: black;\n  border-radius: 5px;\n  padding: 20px;\n  font-size: 150%;\n  margin-bottom: 10px;\n}\n\n .schoolText{\n   /* color: blue;  */\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;   \n  display: inline-block;\n  \n}\n\n.professorText{\n   padding: 10px 10px 10px 5px ;\n   text-align: center;\n    \n}\n\n\n\n\n/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */\n @supports ((display: -ms-grid) or (display: grid)) {\n  .wrapper > * {\n    margin: 0;\n    width: auto;\n  }\n} \n\n/* make the data appear on a fixed weight \nlos nombre de escuela no se va a salir del\ncuadrado pero quita el responsive */\n.wrapper {\n /* grid-template-columns: 1fr 1fr 1fr;      */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "navbar-left::before{\n    content: \"\";\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".myTest{\n    background-color: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**/\n#fileselector {\n    margin: 10px;\n}\n#upload-file-selector {\n    display:none;\n    float: left;\n}\n.margin-correction {\n    margin-right: 10px;\n}\n\n/*Work around for table responsive to work in firefox */\n@-moz-document url-prefix() {\n    fieldset {\n        display: table-cell;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/**/\n#fileselector {\n    margin: 10px;\n}\n#upload-file-selector {\n    display:none;\n    float: left;\n}\n.margin-correction {\n    margin-right: 10px;\n}\n\n/*Work around for table responsive to work in firefox */\n@-moz-document url-prefix() {\n    fieldset {\n        display: table-cell;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* -------------------------------- \n\nPrimary style\n\n-------------------------------- */\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Fira Sans\", sans-serif;\n  color: #383838;\n  background-color: #f8f8f8;\n}\n\na {\n  color: #7b9d6f;\n  text-decoration: none;\n}\n\n/* -------------------------------- \n\nMain Components \n\n-------------------------------- */\n.cd-horizontal-timeline {\n  opacity: 0;\n  margin: 2em auto;\n  transition: opacity 0.2s;\n}\n.cd-horizontal-timeline::before {\n  /* never visible - this is used in jQuery to check the current MQ */\n   content: 'mobile'; \n   display: none; \n}\n.cd-horizontal-timeline.loaded {\n  /* show the timeline after events position has been set (using JavaScript) */\n   opacity: 1; \n}\n.cd-horizontal-timeline .timeline {\n  position: relative;\n  height: 100px;\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.cd-horizontal-timeline .events-wrapper {\n  position: relative;\n  height: 100%;\n  margin: 0 40px;\n  overflow: hidden;\n}\n.cd-horizontal-timeline .events-wrapper::after, .cd-horizontal-timeline .events-wrapper::before {\n  /* these are used to create a shadow effect at the sides of the timeline */\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  height: 100%;\n  width: 20px;\n}\n.cd-horizontal-timeline .events-wrapper::before {\n  left: 0;\n  background-image: linear-gradient(to right, #f8f8f8, rgba(248, 248, 248, 0));\n}\n.cd-horizontal-timeline .events-wrapper::after {\n  right: 0;\n  background-image: linear-gradient(to left, #f8f8f8, rgba(248, 248, 248, 0));\n}\n.cd-horizontal-timeline .events {\n  /* this is the grey line/timeline */\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 49px;\n  height: 2px;\n  /* width will be set using JavaScript */\n  background: #dfdfdf;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n}\n.cd-horizontal-timeline .filling-line {\n  /* this is used to create the green line filling the timeline */\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #7b9d6f;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.cd-horizontal-timeline .events a {\n  position: absolute;\n  bottom: 0;\n  z-index: 2;\n  text-align: center;\n  font-size: 1.3rem;\n  padding-bottom: 15px;\n  color: #383838;\n  /* fix bug on Safari - text flickering while timeline translates */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.cd-horizontal-timeline .events a::after {\n  /* this is used to create the event spot */\n  content: '';\n  position: absolute;\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: -5px;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  background-color: #f8f8f8;\n  transition: background-color 0.3s, border-color 0.3s;\n}\n.no-touch .cd-horizontal-timeline .events a:hover::after {\n  background-color: #7b9d6f;\n  border-color: #7b9d6f;\n}\n.cd-horizontal-timeline .events a.selected {\n  pointer-events: none;\n}\n.cd-horizontal-timeline .events a.selected::after {\n  background-color: #7b9d6f;\n  border-color: #7b9d6f;\n}\n.cd-horizontal-timeline .events a.older-event::after {\n  border-color: #7b9d6f;\n}\n@media only screen and (min-width: 1100px) {\n  .cd-horizontal-timeline {\n    margin: 6em auto;\n  }\n  .cd-horizontal-timeline::before {\n    /* never visible - this is used in jQuery to check the current MQ */\n    content: 'desktop';\n  }\n}\n\n.cd-timeline-navigation a {\n  /* these are the left/right arrows to navigate the timeline */\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  /* replace text with an icon */\n  overflow: hidden;\n  color: transparent;\n  text-indent: 100%;\n  white-space: nowrap;\n  transition: border-color 0.3s;\n}\n.cd-timeline-navigation a::after {\n  /* arrow icon */\n  content: '';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n   background: url(" + __webpack_require__(304) + ") no-repeat 0 0; \n}\n.cd-timeline-navigation a.prev {\n  left: 0;\n  -webkit-transform: translateY(-50%) rotate(180deg);\n  transform: translateY(-50%) rotate(180deg);\n}\n.cd-timeline-navigation a.next {\n  right: 0;\n}\n.no-touch .cd-timeline-navigation a:hover {\n  border-color: #7b9d6f;\n}\n.cd-timeline-navigation a.inactive {\n  cursor: not-allowed;\n}\n.cd-timeline-navigation a.inactive::after {\n  background-position: 0 -16px;\n}\n.no-touch .cd-timeline-navigation a.inactive:hover {\n  border-color: #dfdfdf;\n}\n\n.cd-horizontal-timeline .events-content {\n  position: relative;\n  width: 100%;\n  margin: 2em 0;\n  overflow: hidden;\n  transition: height 0.4s;\n}\n.cd-horizontal-timeline .events-content li {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  left: 0;\n  top: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  padding: 0 5%;\n  opacity: 0;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n.cd-horizontal-timeline .events-content li.selected {\n  /* visible event content */\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n.cd-horizontal-timeline .events-content li.enter-right, .cd-horizontal-timeline .events-content li.leave-right {\n  -webkit-animation-name: cd-enter-right;\n  animation-name: cd-enter-right;\n}\n.cd-horizontal-timeline .events-content li.enter-left, .cd-horizontal-timeline .events-content li.leave-left {\n  -webkit-animation-name: cd-enter-left;\n  animation-name: cd-enter-left;\n}\n.cd-horizontal-timeline .events-content li.leave-right, .cd-horizontal-timeline .events-content li.leave-left {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n}\n.cd-horizontal-timeline .events-content li > * {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.cd-horizontal-timeline .events-content h2 {\n  font-weight: bold;\n  font-size: 2.6rem;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.cd-horizontal-timeline .events-content em {\n  display: block;\n  font-style: italic;\n  margin: 10px auto;\n}\n.cd-horizontal-timeline .events-content em::before {\n  content: '- ';\n}\n.cd-horizontal-timeline .events-content p {\n  font-size: 1.4rem;\n  color: #959595;\n}\n.cd-horizontal-timeline .events-content em, .cd-horizontal-timeline .events-content p {\n  line-height: 1.6;\n}\n@media only screen and (min-width: 768px) {\n  .cd-horizontal-timeline .events-content h2 {\n    font-size: 7rem;\n  }\n  .cd-horizontal-timeline .events-content em {\n    font-size: 2rem;\n  }\n  .cd-horizontal-timeline .events-content p {\n    font-size: 1.8rem;\n  }\n}\n\n@-webkit-keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n/* Reset.css File  */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section, main {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd-arrow.f81f938ac97ef25d1d59.svg";

/***/ }),
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
/* 316 */
/***/ (function(module, exports) {

module.exports = "<!--app navabr for every routes of the application  -->\n<!--Este es el main file. Este File es llamado en el index.html como approot tag  -->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <!--Flash message mdules messages for error-->\n  <flash-messages> </flash-messages>\n  <!--This manage the route for the entire app\n      Esto es lo que se encarga de mostrar todos los componentes (rutas)\n      de la pagina web.\n -->\n  <router-outlet ></router-outlet>\n</div>\n\n<!-- <footer id=\"footer\" flex>\n  <p>Copyright AdminStrap, &copy; 2017</p>\n</footer> -->\n"

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h2><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> DashBoard <small>Maneja las escuelas</small></h2>\n      </div>\n      <div class=\"col-md-3\">\n       <div class=\"dropdown create\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Opciones\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a href=\"/register\">Añade un professor</a></li>\n            <li><a href=\"/register/admin\">Añade un administrador</a></li>\n            <li><a href=\"/admin/upload\">Suba un modelo</a></li>\n            <li><a href=\"/admin/professors\">Busque Escuela con sus professores</a></li>\n            <li><a href=\"/adminUsers\">Vea todos los professores disponibles</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> <!--End div container -->\n</header> <!--End top Part of the website -->\n\n<!--Breadcrumb section  -->\n<section id=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard </li>\n    </ol>\n</section> <!--End breadcrumb section -->\n\n<section id=\"main\">\n  <div class=\"controller\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <!--Sidebar need to have the [] to pass the data to the child -->\n        <app-sidebar [admin-Dashboard-totalUser-Props] = totalUsers></app-sidebar>\n      </div>\n      <div class=\"col-md-9\">\n        <!--Boxes -->\n        <!--Pass the totalUser number to the app-boxes component  -->\n        <app-boxes [admin-Dashboard-totalUser-Props] = totalUsers></app-boxes>\n      </div>\n    </div>\n    <!--Professores Table-->\n    <app-table [dataset] = latestUser text=\"Ultimos Professores Registrados\">\n    </app-table>\n    <app-display-professors> \n      cargando los profesores\n    </app-display-professors>        \n  </div>\n  <!--Add Page Modal  -->\n  <!-- <app-modal modalId=\"addPage\"></app-modal> -->\n</section>\n"

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = "<app-register text = \"Registra un Administrador\" role = 1> </app-register>\n"

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h2><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Profesores <small>Maneja las escuela y sus profesores</small></h2>\n      </div>\n      <!--Dropdown  -->\n      <div class=\"col-md-3\">\n       <div class=\"dropdown create\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Opciones\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a href=\"/register\">Añade un professor</a></li>\n            <li><a href=\"/admin/professors\">Busque Escuela con sus professores</a></li>\n            <li><a type=\"button\" data-toggle = \"modal\" data-target=\"#addPage\">Vea todos los professores disponibles</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> <!--End div container -->\n</header> <!--End top Part of the website -->\n\n<!--Breadcrumb section  -->\n<section id=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"\"> <a href = \"/adminDashboard\">Dashboard </a> </li>\n      <li class=\"active\">Escuelas</li>\n    </ol>\n</section> <!--End breadcrumb section -->\n\n\n<section id=\"main\">\n  <div class=\"controller\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <!--Sidebar -->\n        <app-sidebar [admin-Dashboard-totalUser-Props] = totalUsers> </app-sidebar>\n      </div>\n      <div class=\"col-md-9\">\n        <!--User Table exportProp -> is a prop pass to the admin-users from the app-table-->\n        <app-table [dataset] = allUsers className=\"main-color-bg\" text = \"Users\" showFilter = true (exportProp)=\"skipUser($event)\"></app-table>\n      </div>\n    </div>\n  </div>\n  <!--Add Page Modal  -->\n  <app-modal modalId=\"addPage\"></app-modal>\n</section>\n"

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = "<div class=\"well dash-box\">\n  <h2>\n    <span class={{className}} aria-hidden=\"true\">{{number}}</span>\n  </h2>\n  <h4>{{text}}</h4>\n</div>\n"

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading main-color-bg\">\n    <h3 class=\"panel-title\">Detalles sobre la pagina web</h3>\n  </div>\n  <div class=\"panel-body\">\n    <!--Boxes-->\n    <div class=\"col-md-3\">\n      <a href=\"/adminUsers\">\n        <!--To pass something different that is not a literal number or string need to use the []  -->\n        <app-box className= \"glyphicon glyphicon-user\"\n                 [number] = totalUsers text = \"Professores\" ></app-box>\n      </a>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-list-alt\"\n               number =12 text = \"Escuelas\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-pencil\"\n               number =33 text = \"Post\"></app-box>\n    </div>\n\n    <div class=\"col-md-3\">\n      <app-box className= \"glyphicon glyphicon-stats\"\n               number = 12,334 text = \"Visitors\"></app-box>\n    </div>\n    <!--End Boxes-->\n  </div>\n</div>\n"

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{name}}</h1> -->\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active main-color-bg\">\n    <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n    Dashboard\n  </a>\n  <a href=\"/admin/professors\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n    <span class=\"badge\">12</span>\n    Escuelas y sus professores\n  </a>\n  <a href=\"/adminUsers\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>\n    <!--This property is pass via the parent component admin-dashboard to app-sidebar to this component  -->\n    <span class=\"badge\">{{totalUsers}}</span>\n     Buscar solamente por professor\n   </a>\n</div>\n"

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "\n<!-- Modal -->\n<div class=\"modal fade\" id={{modalId}} tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <form action=\"\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Page</h4>\n      </div> <!--End Modal Header -->\n      <div class=\"modal-body\">\n        <!--Start Form  -->\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Tittle</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Page Tittle\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Page Body</label>\n          <textarea name=\"editor1\" class=\"form-control\" placeholder=\"Page Body\" rows=\"8\" cols=\"80\"></textarea>\n        </div>\n\n        <div class=\"checkbox\">\n          <label for=\"tittle\">\n            <input type=\"checkbox\"name=\"\" value=\"\"> Published\n        </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta tags</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Some Tags\" name=\"\" value=\"\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tittle\">Meta Description</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Add Meta Description\" name=\"\" value=\"\">\n        </div>\n        <!--End Form  -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"Submit\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<!--Progress Bar  -->\n<h4>Disk Space Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 60%;\"> 60%</div>\n</div>\n\n<h4>Bandwidth Used</h4>\n<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 40%;\"> 40%</div>\n</div>\n"

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "<!--List Group  -->\n<!-- <h1>{{totalUserProps}}</h1> -->\n<!--Pass the totalUser data to the listGroup Component that display the totaluser number in the view  -->\n<app-listgroup [side-bar-totalUserProps] = totalUserProps>\n</app-listgroup>\n\n"

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "<!--To add External Javscript file I need to add it to the script section angular-cli.json   -->\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading {{className}} \">\n    <h3 class=\"panel-title \">{{text}}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div *ngIf=\"showFilter\" class=\"form-group\">\n      <!--Show Search Filter  -->\n      <input id=\"filterInput\" class=\"makeSmaller form-control\" onkeyup=\"filterUsersByName()\" type=\"text\" placeholder=\"Buscar Professores\" name=\"\" value=\"\">\n    </div>\n    <table id=\"userTable\" class=\"table table-striped table-hover table-responsive success\">\n      <!-- Table Header -->\n      <tr>\n        <th>Nombre</th>\n        <th>Escuela</th>\n        <th>Dirección de Correo Electrónico</th>\n        <th>Día en que se registro</th>\n      </tr>\n      <!--Table Body -->\n    <tbody>\n      <!-- Do a for loop to show the tables -->\n      <tr *ngFor=\"let record of dataset; let ind = index\">\n          <!-- || - mean alternate text. is Like an If  -->\n          <!-- <h1>{{i}} index</h1> -->\n          <!--if index(i) is greater than 5 dont show more Table data  -->\n          <!--if index > 6 render the tableDate but with a display set to none.That way the search filter will look for all the user in the db and not only the one that are showing in the table  -->\n          <td style=\"display:none\" *ngIf=\"ind > 5\">{{record.name || \"No hay nombre\" }}</td>\n           <td *ngIf=\"ind < 6\">{{record.name || \"No hay nombre\" }}</td>\n\n           <!-- escuela row  -->\n           <td style=\"display:none\" *ngIf=\"ind > 5\">{{record.nombreEscuela || \"No se proveyó nombre de escuela\" }}</td>\n            <td *ngIf=\"ind < 6\">{{record.nombreEscuela || \"No se proveyó nombre de escuela\" }}</td>\n\n           <!-- email -->\n           <td style=\"display:none\" *ngIf=\"ind > 5\">{{record.email || \"No hay email \"}}</td>\n           <td *ngIf=\"ind < 6\">{{record.email || \"No hay email\"}}</td>\n\n           <td style=\"display:none\" *ngIf=\"(record.CreatedDate && ind > 5)\">{{record.CreatedDate | date:'MMM dd' }} at {{record.CreatedDate | date:'hh:mm' }}\n           </td>\n           <!--Show this row if there's a date in the json  -->\n           <td *ngIf=\"(record.CreatedDate && ind < 6)\">{{record.CreatedDate | date:'MMM dd' }} at\n             {{record.CreatedDate | date:'hh:mm' }}\n          </td>\n          <!--Alternate show this row if there is not a date in the json data  -->\n          <td style=\"display:none\" *ngIf=\"(!record.CreatedDate && ind > 5)\"> Niguna fecha fue dada</td>\n          <td *ngIf=\"(!record.CreatedDate && ind < 6)\"> No se otorgo una fecha</td>\n      </tr>\n    </tbody>\n</table>\n  <!--[(page)] - pa pasar la variable  -->\n  <div *ngIf=\"showFilter\" class=\" text-center d-flex justify-content-center\">\n    <ngb-pagination [collectionSize]=\"100\" [(page)]=\"currentPage\" aria-label=\"Default pagination\" (click) = \"skipUser(currentPage)\" size =\"\"></ngb-pagination>\n    <pre></pre>\n  </div>\n  </div>\n</div>\n\n\n <!-- <div *ngFor=\"let school of schoolNames; let index = index\" class=\"bg-gray\">\n  <div class=\"\">\n      <h2 class=\"well\"> {{school || \"No hay niguna escuela registrada\"}} </h2>\n       <h2  *ngFor=\"let item of [1,2,3]; let index = index\"> \n          &nbsp;&nbsp;&nbsp;&nbsp; - {{professors[index]}} \n        </h2> \n  </div> \n </div> -->\n\n\n<!-- <div class=\"wrapper2 s\" style=\"\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-gap: 10px;\n\">\n  <!-- <h2> {{dictionary[\"z escuela\"]}} </h2> \n  <div class=\"gridItemSchool\" *ngFor=\"let school of dictionaryKeys(dictionary)\">\n      <!-- <h2> {{school + ':' + dictionary[school] }} </h2>\n      <h2 class=\"well\">{{school}} </h2>\n      <div class=\"gridItemProfessor\" *ngFor=\"let professor of dictionary[school]\">\n          <h4> &nbsp;&nbsp;&nbsp;&nbsp; - {{professor}} </h4>\n      </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n\n  <!-- <div *ngFor=\"let professor of professors; let index = index\"> \n    <h2 *ngIf=\"index % 4 !=0\" style= \"display:inline;\" >\n      &nbsp;&nbsp;&nbsp;&nbsp; - {{professor|| \"Estas escuelas no tiene ningun profesor\"}} - Files: {{numberProfessorsFiles[index]}}\n    </h2>\n\n    <div *ngIf=\"index % 3 == 0 \">\n      <br>\n      <h2 class=\"well\"> \n        {{professor}}\n      </h2>\n    </div>\n  </div> -->\n\n"

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = " <p class=\"page-header\" style=\"font-size:35px;\">Bienvenido a tu dashboard</p>\n\n\n<!--Breadcrumb section  -->\n<section class=\"breadcrumb\" id=\"breadcrumb\">\n    <div class=\"row\">\n        <div style=\"margin-top: 10px;\" class=\"col-md-9\">\n            <h4 class=\"active\">Dashboard </h4>\n        </div>\n        <div style=\"margin-top: 10px;\" class=\"col-md-3\">\n            <div class=\"dropdown create\">\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                Opciones\n                <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li><a [routerLink]=\"['/profile']\" >Descarque las plantillas</a></li>\n                    <li><a [routerLink]=\"['/users/upload']\">Suba algun archivo</a></li>\n                </ul>\n            </div>\n        </div>\n</div>\n</section> <!--End breadcrumb section -->\n     \n\n<h1 class=\"h1 text-center pad1\">Calendario para Eco Escuelas</h1>\n<app-user-timeline> </app-user-timeline>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h1> Descarga <a [routerLink]=\"['/profile']\">aqui</a> las plantillas de trabajo </h1>\n    </div>\n    <div class=\"col-md-6\">\n        <h1> Sube tus documentos terminados <a [routerLink]=\"['/users/upload']\">aqui</a> </h1>\n    </div>\n</div>"

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n   <!-- <h2> hello {{dictionary[\"z escuela\"]}} </h2>  -->\n    <h2 class=\"loader\" *ngIf=\"!schoolNames\">\n      Cargando escuelas\n    </h2>\n  <div class=\"panel\" *ngFor=\"let school of dictionaryKeys(dictionary)\">\n      <div *ngFor = \"let schoolFiles of dictionaryKeys(filesDictionary)\"> \n        <!-- <h2 >Archivos Subidos - {{filesDictionary[schoolFiles]}}</h2> -->\n      </div>\n       <!-- <h2> {{school + ':' + dictionary[school] }} </h2>  -->\n       <h2 *ngIf=\"!(numberOfFilesDictionary[school]) \">Archivos Subidos: 0/5 </h2>       \n       <h2 *ngIf=\"numberOfFilesDictionary[school]\" >Archivos Subidos: {{numberOfFilesDictionary[school] }}/5 </h2>\n      <h2 class=\"schoolText well\">{{school}}</h2>\n      <div class=\"professorText\" *ngFor=\"let professor of dictionary[school]\">\n          &nbsp;&nbsp;&nbsp;&nbsp; - {{professor}} \n      </div>\n      <!-- <app-download-professor-files [escuela]= school> </app-download-professor-files> -->\n      <a [routerLink]=\"['/admin/DownloadProfessorsFiles/']+ school\" [queryParams]=\"{escuela:school}\" > Ver Archivos</a>\n  </div>\n</div>\n \n"

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = "<!--Tabla de archivos para descargar-->\n<!--Crear Componente aparte -->\n<br>\n<div class=\"row table-responsive\">\n  <div class=\"col-md-12\">\n    <table class=\"table table-bordered table-hover\">\n      <caption style=\"font-size:40px;\">Descargar Archivos:</caption>\n      <!--Header of the table  -->\n      <tr>\n        <th>Numero</th>\n        <th>Nombre del Archivo</th>\n      </tr>\n      <!--Rows of tables  -->\n      <tr *ngFor=\"let file of listOfFileNames;let index = index\" class=\"\">\n        <th *ngIf=\"file.length > 0\" scope=\"row\">{{index + 1}}</th>\n        <td *ngIf=\"file.length > 0\" colspan=\"\">  <a href=\"/file/{{file}}\" > {{file}} \n        </a> </td>\n        <td *ngIf=\"file.length == 0 && index == 0\" colspan=\"2\" class=\"text-center\"> Esta escuela no ha subido ningun archivo</td>\n      </tr> <!-- End of rows Tables -->\n    </table>\n  </div>\n</div>\n\n<h2 *ngIf=\"listOfFileNames.length == 0\">No hay archivos para mostrar al momento</h2>"

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Recupera tu Contraseña</h2>\n<h4> &nbsp; &nbsp; Escribe tu direccion de electronico en el encasillado abajo y te estara llegando un correo electronico para cambiar la Contraseña</h4>\n<form (submit)=\"  sendEmail()\">\n  <div style=\"width: 72%\" class=\"form-group\">\n    <label for=\"email\">Correo electronico</label>\n    <input type=\"email\" required [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" value=\"\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Recuperar Contraseña\">\n</form>  \n"

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1> Carpeta Electrónica para Eco Escuelas </h1>\n    <p class=\"lead\">Bienvenido a tu carpeta electrónica</p>\n  <div>\n    <a [routerLink] = \"['/register']\" class=\"btn btn-primary\">Regístrate</a>\n    <a [routerLink] = \"['/login']\" class=\"btn btn-default\">Conéctate</a>\n  </div>\n  <br>\n  <p  class=\"lead\">Paga la membresia de Opas</p>\n  <button [routerLink]=\"['/pay']\" class=\"btn btn-primary\">Paga aqui</button>\n\n</div>\n\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using mongoose to organize models and query </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-cli to generate components,services and more. Local dev server and easy</p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-sm\">\n    <h3>JWT Tokens</h3>\n    <p>Full feautured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div> -->\n"

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon glyphicon-\" aria-hidden=\"true\"></span>\n"

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Conéctate</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Nombre de usuario</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" value=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Contraseña</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\"  value=\"\">\n  </div>\n  <div class=\"form-group\">\n    <a href=\"/forgot\" class=\"\" style=\"float: left;\" > Olvidaste tu Contraseña?</a>\n    <br>\n    <a href=\"/register\" class=\"\" style=\"float: left;\" > No tienes una cuenta?</a>\n    <br>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Conectar\">\n</form>\n"

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">OPAS</a>\n    </div>\n  <div id=\"navbar\" class=\"collapse navbar-collapse\">\n  <ul class=\"nav navbar-nav navbar-left\">  -->\n    <!--RouterLinkActive es para darle active a las clas cuando se de click en el navbar\n        RouterLinkActiveOption = para que el tab correcto se marque active pq si no se marcan los dos nn -->\n        <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"> <a [routerLink] = \"['/']\">Inicio</a> </li>\n   </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li *ngIf=\"authService.checkLoggedIn()&& isAdminRole()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/adminDashboard']\">Administrador</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()&& isAdminRole()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/admin/upload']\">Suba un modelo</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/profile']\">Perfil</a></li>\n\n    <li *ngIf=\"authService.checkLoggedIn() && !isAdminRole()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/users/upload']\">Subir un archivo</a></li>\n\n    <!--click event  -->\n    <li *ngIf=\"authService.checkLoggedIn()\" > <a href=\"#\" (click)=\"onLogoutClick()\">Salir</a></li>\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]=\"['/login']\">Conéctate</a></li>\n\n    <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]= \"['active']\" [routerLinkActiveOptions]= \"{exact:true}\"><a [routerLink]= \"['/register']\">Regístrate</a></li>\n </ul>\n\n</div>\n\n  </div>\n</nav>\n"

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-path works!\n</p>\n"

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = "<p class=\"lead\"> Paga aqui la membresia para ecoescuelas</p>\n\n<form name=\"registerForm\" (submit)=\"onPaySubmit()\">\n  <input class=\"btn btn-primary\" type=\"submit\" value=\"Pagar\">\n</form>"

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = "<!--ngIf(ifStatement)- Make sure there's a user before showing html  -->\n<div *ngIf=\"user\" class=\"\">\n  <!--Embed the user name -->\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <!--username of the user  -->\n    <li class=\"list-group-item\">\n      Nombre de usuario: {{user.username}}\n\n    </li>\n    <!--Email of the user  -->\n    <li class=\"list-group-item\">\n      Dirrecion de Correo Electrónico: {{user.email}}\n    </li>    \n    <!--Escuela of the user  -->\n    <li *ngIf=\"user.nombreEscuela\" class=\"list-group-item\">\n      Escuela a la que pertenece: {{user.nombreEscuela}}\n    </li>\n    <li *ngIf=\"!user.nombreEscuela\" class=\"list-group-item\">\n      No pertenece a niguna escuela\n    </li>\n  </ul>\n</div>\n\n<!-- <div *ngIf=\"fileLink\" class=\"\">\n  <h2>modelo para descargar\n      <a target=\"_blank\" [href]=fileUrl download (click)=\"downloadLink()\" >Template 1</a>\n  </h2>\n</div> -->\n\n<!-- <div *ngIf=\"isDownloading\" class=\"\">\n  <h2>Descargando archivos</h2>\n</div> -->\n\n\n<!--Tabla de archivos para descargar-->\n<!--Crear Componente aparte -->\n<br>\n<div class=\"row table-responsive\">\n  <div class=\"col-md-12\">\n    <table class=\"table table-bordered table-hover\">\n      <caption style=\"font-size:40px;\">Descargar plantillas de trabajo:</caption>\n      <!--Header of the table  -->\n      <tr>\n        <th>Numero</th>\n        <th>Nombre del Archivo</th>\n      </tr>\n      <!--Rows of tables  -->\n      <tr *ngFor=\"let file of listOfFileNames;let index = index\" class=\"\">\n        <th scope=\"row\">{{index + 1}}</th>\n        <!-- <td colspan=\"\"> <a href=\"/file/{{file.name}}\" download> {{file.name}}  -->\n          <td colspan=\"\"> <a href=\"/file/{{file.name}}\" > {{file.name}} \n        </a> </td>\n        \n      </tr> <!-- End of rows Tables -->\n    </table>\n  </div>\n</div>\n\n<h2 *ngIf=\"!listOfFileNames\">No hay archivos para mostrar al momento</h2>\n"

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">{{text}}</h2>\n\n<form name=\"registerForm\" (submit)=\"onRegisterSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Nombre</label>\n    <input type=\"text\" required [(ngModel)]=\"name\" name=\"name\" ng-model=\"name\"  required class=\"form-control\">\n    <!-- <h1>{{registerForm.name.$touched}}</h1> -->\n    <!--Error message -->\n    <!--Esto es cpmo hacer que muestre un mesnaje a base de true o false de un estado -->\n    <!-- <span ng-show=\"registerForm.name.$touched && registerForm.name.$invalid\">The name is required.</span> -->\n  </div>\n  <div class=\"form-group\">\n    <label for=\"schooName\">Nombre de escuela</label>\n    <input type=\"text\" required [(ngModel)]=\"escuela\" name=\"escuela\" required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"username\">Nombre de usuario</label>\n    <input type=\"text\" required [(ngModel)]=\"username\" name=\"username\" required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Contraseña</label>\n    <input type=\"password\" required [(ngModel)]=\"password\" name=\"password\"  required class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"name\">Dirección de correo electrónico</label>\n    <input type=\"text\" required [(ngModel)]=\"email\" name=\"email\" required class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" name=\"\" value=\"submit\">\n\n</form>\n"

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Cambia tu Contraseña</h2>\n<h4> &nbsp; Escribe tu nueva contraseña en el encasillado de abajo</h4>\n<form (submit)=\"resetPassword()\">\n  <div style=\"width: 72%\" class=\"form-group\">\n    <label for=\"email\">Contraseña</label>\n    <input type=\"password\" required [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Nueva Contrasena\" value=\"\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Cambiar Contrasena\">\n</form> \n  "

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >Subir un modelo o plantilla (template)</a>\n    </div>\n</div>\n\n<div class=\"\">\n<span id=\"fileselector\">\n    <label class=\"btn btn-default\" for=\"upload-file-selector\">\n        <input id=\"upload-file-selector\" type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" >\n        <i class=\"fa_icon icon-upload-alt margin-correction\"></i>Elige un archivo\n    </label>\n</span>\n</div>\n\n<div class=\"\" style=\"margin-bottom: 40px\">\n\n    <h3>Archivos sin subir</h3>\n    <p>Numeros de archivos sin subir: {{ uploader?.queue?.length }}</p>\n\n<table class=\"table\">\n    <thead>\n    <tr>\n        <th width=\"50%\">Nombre del archivo</th>\n        <th>Tamaño</th>\n        <th>Progresso</th>\n        <th>Estado</th>\n        <th>Actiones a tomar</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of uploader.queue\">\n        <!--Nombre del archivo  -->\n        <td><strong>{{ item?.file?.name }}</strong></td>\n        <td *ngIf=\"true\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        <td *ngIf=\"true\">\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n        </td>\n        <!--Signo del Status   -->\n        <td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n        </td>\n        <!--Actions rows nowrap lo pones todos inline -->\n        <td nowrap>\n            <!--When you click the item will upload  -->\n            <button type=\"button\" class=\"btn btn-success btn-xs\"\n                    (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Subir Archivo\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                    (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                    (click)=\"item.remove()\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remover\n            </button>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n<!--Progress Bar  -->\n<div>\n    <div>\n        Progresso:\n        <div class=\"progress\" style=\"\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-success btn-s\"\n            (click)=\"uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Subir todos los archivos\n    </button>\n    <button type=\"button\" class=\"btn btn-warning btn-s\"\n            (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancelar todos los archivos\n    </button>\n    <button type=\"button\" class=\"btn btn-danger btn-s\"\n            (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remover todos los archivos\n    </button>\n</div>\n<!--End Progress bar  -->\n\n<h2> </h2>\n\n</div>\n<br>\n\n<!-- <input *ngIf=\"listOfFileNames\" type=\"button\" (click)=\"addRow()\" [disabled]=\"listOfFileNames.length >=5\" value=\"Add Row\" class=\"btn btn-primary\"> -->\n\n<div class=\"row table-responsive\">\n  <div class=\"col-md-12\">\n    <table class=\"table table-bordered table-hover\">\n      <caption style=\"font-size:40px;\">Archivos Subidos:</caption>\n      <!--Header of the table  -->\n      <tr>\n        <th>Numero</th>\n        <th>Nombre del Archivo</th>\n        <!-- Desactivados 21/diciembre -->\n        <!-- <th style=\"width:80px\">Editar</th>\n        <th style=\"width:80px\">Eliminar</th> -->\n        <!-- <th>Subido Por</th> -->\n      </tr>\n      <!--Rows of tables  -->\n      <tr *ngFor=\"let file of listOfFileNames;let index = index\" class=\"\">\n        <th scope=\"row\">{{index + 1}}</th>\n        <td colspan=\"\">{{file.name}} </td>\n        <!--Edit row Desactivados 21/diciembre 2017 -->\n        <!-- <td>\n          <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\" style=\"display:inline;float:left;\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\" style=\"font-size:12px;\"></span></button></p>\n        </td> -->\n        <!--Delete Row  Desactivados 21/diciembre 2017 -->\n        <!-- <td>\n          <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" > <span class=\"glyphicon glyphicon-trash\" style=\"font-size:12px\"></span></button></p>\n        </td> -->\n        <!--Subido Por Row  -->\n        <td>\n\n        </td>\n      </tr> <!-- End of rows Tables -->\n    </table>\n  </div>\n</div>\n\n<h2 *ngIf=\"!listOfFileNames\">No hay archivos para mostrar al momento</h2>\n\n\n<!--Edit Modal que por ahora 21/diciembre 2017 estaran desactivados-->\n<div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Edita este archivo</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <input class=\"form-control \" type=\"text\" placeholder=\"Mohsin\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control \" type=\"text\" placeholder=\"Irshad\">\n        </div>\n        <div class=\"form-group\">\n          <textarea rows=\"2\" class=\"form-control\" placeholder=\"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan\"></textarea>\n        </div>\n    </div>\n    <div class=\"modal-footer \">\n      <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\"><span class=\"glyphicon glyphicon-ok-sign\"></span>Actualizar</button>\n    </div>\n  </div>\n <!-- /.modal-content -->\n </div>\n<!-- /.modal-dialog -->\n</div> <!-- End Edit Modal -->\n\n<!--Start Delete Modal que por ahora 21/diciembre 2017 estaran desactivados -->\n<div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n <div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n      <h4 class=\"modal-title custom_align\" id=\"Heading\">Eliminar este archivo</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Estas seguro que quieres eliminar este archivo. Los professores no tendran accesso a este archivo</div>\n    </div>\n    <div class=\"modal-footer \">\n      <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\"></span>Si</button>\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\n    </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!--/.modal-dialog -->\n</div>\n<!--End Delete Modal  -->\n"

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  upload-portfolio works!\n</p>\n\n<div *ngIf=\"files\" class=\"\">\n  <h2 *ngIf= \"files.length == 0\">No ha subido ningun archivo</h2>\n  <div *ngFor=\"let file of files;let index = index\" class=\"\">\n    <h2 *ngIf=\"file\">\n        Archivo: {{file}}\n    </h2>\n  </div>\n</div> -->\n\n <!-- Upload Component Start  -->\n\n <div class=\"navbar navbar-default\">\n     <div class=\"navbar-header\">\n         <a class=\"navbar-brand\" >Subir archivo</a>\n     </div>\n </div>\n\n\n <div class=\"\">\n <span id=\"fileselector\">\n     <label class=\"btn btn-primary\" for=\"upload-file-selector\">\n         <input id=\"upload-file-selector\" type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" >\n         <i class=\"fa_icon icon-upload-alt margin-correction\"></i>Elige un archivo\n     </label>\n </span>\n </div>\n\n <div class=\"\" style=\"margin-bottom: 40px\">\n\n     <h3>Archivos sin subir</h3>\n     <p>Numeros de archivos sin subir: {{ uploader?.queue?.length }}</p>\n\n <table class=\"table\">\n     <thead>\n     <tr>\n         <th width=\"50%\">Nombre del archivo</th>\n         <th>Tamaño</th>\n         <th>Progesso</th>\n         <th>Estado</th>\n         <th>Acciones a tomar</th>\n     </tr>\n     </thead>\n     <tbody>\n     <tr *ngFor=\"let item of uploader.queue\">\n         <!--Nombre del archivo  -->\n         <td><strong>{{ item?.file?.name }}</strong></td>\n         <td *ngIf=\"true\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n         <td *ngIf=\"true\">\n             <div class=\"progress\" style=\"margin-bottom: 0;\">\n                 <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n             </div>\n         </td>\n         <!--Signo del Status   -->\n         <td class=\"text-center\">\n             <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n             <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n             <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n         </td>\n         <!--Actions rows nowrap lo pones todos inline -->\n         <td nowrap>\n             <!--When you click the item will upload  -->\n             <button type=\"button\" class=\"btn btn-success btn-xs\"\n                     (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                 <span class=\"glyphicon glyphicon-upload\"></span> Upload\n             </button>\n             <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                     (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                 <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n             </button>\n             <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                     (click)=\"item.remove()\">\n                 <span class=\"glyphicon glyphicon-trash\"></span> Remove\n             </button>\n         </td>\n     </tr>\n     </tbody>\n </table>\n\n <!--Progress Bar  -->\n <div>\n     <div>\n         Progresso:\n         <div class=\"progress\" style=\"\">\n             <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n         </div>\n     </div>\n     <button type=\"button\" class=\"btn btn-success btn-s\"\n             (click)=\"uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n         <span class=\"glyphicon glyphicon-upload\"></span> Subir todos los archivos\n     </button>\n     <button type=\"button\" class=\"btn btn-warning btn-s\"\n             (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n         <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancelar todos los archivos\n     </button>\n     <button type=\"button\" class=\"btn btn-danger btn-s\"\n             (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n         <span class=\"glyphicon glyphicon-trash\"></span> Remover todos los archivos\n     </button>\n </div>\n <!--End Progress bar  -->\n\n <h2> </h2>\n\n </div>\n <br>\n\n <!-- <input *ngIf=\"listOfFileNames\" type=\"button\" (click)=\"addRow()\" [disabled]=\"listOfFileNames.length >=5\" value=\"Add Row\" class=\"btn btn-primary\"> -->\n<div *ngIf=\"files\" class=\"\">\n <h2 *ngIf= \"files.length == 0\">No ha subido ningun archivo</h2>\n</div>\n <div class=\"row table-responsive\">\n   <div class=\"col-md-12\">\n     <table class=\"table table-bordered table-hover\">\n       <caption style=\"font-size:40px;\">Archivos Subidos:</caption>\n       <!--Header of the table  -->\n       <tr>\n         <th>Numero</th>\n         <th>Nombre del Archivo</th>\n         <!-- <th style=\"width:80px\">Editar</th> -->\n         <!-- <th style=\"width:80px\">Eliminar</th> -->\n         <!-- <th>Subido Por</th> -->\n       </tr>\n       <!--Rows of tables  -->\n       <tr *ngFor=\"let file of files;let index = index\" class=\"\">\n         <th scope=\"row\">{{index + 1}}</th>\n         <td colspan=\"\">{{file}} </td>\n         <!--Edit row desactivados 21/diciembre 2017  -->\n         <!-- <td>\n           <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\" style=\"display:inline;float:left;\"><button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" ><span class=\"glyphicon glyphicon-pencil\" style=\"font-size:12px;\"></span></button></p>\n         </td> -->\n         <!--Delete Row desactivados 21/diciembre 2017 -->\n         <!-- <td>\n           <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\" data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\" > <span class=\"glyphicon glyphicon-trash\" style=\"font-size:12px\"></span></button></p>\n         </td> -->\n\n         <!--Subido Por Row  -->\n         <!-- <td>\n\n         </td> -->\n       </tr> <!-- End of rows Tables -->\n     </table>\n   </div>\n </div>\n\n <h2 *ngIf=\"!files\">Error al mostrar los archivos</h2>\n\n\n <!--Edit Modal que por ahora 21/diciembre 2017 estaran desactivados -->\n <div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n   <div class=\"modal-dialog\">\n     <div class=\"modal-content\">\n       <div class=\"modal-header\">\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n         <h4 class=\"modal-title custom_align\" id=\"Heading\">Edit Your Detail</h4>\n       </div>\n       <div class=\"modal-body\">\n         <div class=\"form-group\">\n           <input class=\"form-control \" type=\"text\" placeholder=\"Mohsin\">\n         </div>\n         <div class=\"form-group\">\n           <input class=\"form-control \" type=\"text\" placeholder=\"Irshad\">\n         </div>\n         <div class=\"form-group\">\n           <textarea rows=\"2\" class=\"form-control\" placeholder=\"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan\"></textarea>\n         </div>\n     </div>\n     <div class=\"modal-footer \">\n       <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Update</button>\n     </div>\n   </div>\n  <!-- /.modal-content -->\n  </div>\n <!-- /.modal-dialog -->\n </div> <!-- End Edit Modal -->\n\n <!--Start Delete Modal que por ahora 21/diciembre 2017 estaran desactivados -->\n <div class=\"modal fade\" id=\"delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n   <div class=\"modal-content\">\n     <div class=\"modal-header\">\n       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n       <h4 class=\"modal-title custom_align\" id=\"Heading\">Eliminar este archivo</h4>\n     </div>\n     <div class=\"modal-body\">\n       <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Estas seguro que quieres eliminar este archivo</div>\n     </div>\n     <div class=\"modal-footer \">\n       <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\"></span>SI</button>\n       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> No</button>\n     </div>\n     </div>\n     <!-- /.modal-content -->\n   </div>\n   <!--/.modal-dialog -->\n </div>\n <!--End Delete Modal  -->\n"

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = "\t<!-- \n\t<link rel=\"stylesheet\" href=\"css/reset.css\"> <!-- CSS reset \n\t<link rel=\"stylesheet\" href=\"css/style.css\"> <!-- Resource style\n\t<script src=\"js/modernizr.js\"></script> <!-- Modernizr -->\n  \t\n<section class=\"cd-horizontal-timeline\">\n\t<div class=\"timeline\">\n\t\t<div class=\"events-wrapper\">\n\t\t\t<div class=\"events\">\n\t\t\t\t<ol>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"16/01/2017\" class=\"selected\">16 Jan</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"28/02/2017\">28 Feb</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"20/04/2017\">20 Mar</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"20/05/2017\">20 May</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"09/07/2017\">09 Jul</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"30/08/2017\">30 Aug</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"15/09/2017\">15 Sep</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"01/11/2017\">01 Nov</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"10/12/2017\">10 Dec</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"19/01/2018\">29 Jan</a></li>\n\t\t\t\t\t<li><a href=\"#0\" data-date=\"03/03/2018\">3 Mar</a></li>\n\t\t\t\t</ol>\n\n\t\t\t\t<span class=\"filling-line\" aria-hidden=\"true\"></span>\n\t\t\t</div> <!-- .events -->\n\t\t</div> <!-- .events-wrapper -->\n\t\t\t\n\t\t<ul class=\"cd-timeline-navigation\">\n\t\t\t<li><a href=\"#0\" class=\"prev inactive\">Prev</a></li>\n\t\t\t<li><a href=\"#0\" class=\"next\">Next</a></li>\n\t\t</ul> <!-- .cd-timeline-navigation -->\n\t</div> <!-- .timeline -->\n\n\t<div class=\"events-content\">\n\t\t<ol>\n\t\t\t<li class=\"selected\" data-date=\"16/01/2017\">\n\t\t\t\t<h2>Horizontal Timeline</h2>\n\t\t\t\t<em>January 16th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"28/02/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>February 28th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"20/04/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>March 20th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"20/05/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>May 20th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"09/07/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>July 9th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"30/08/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>August 30th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"15/09/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>September 15th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"01/11/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>November 1st, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"10/12/2017\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>December 10th, 2017</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"19/01/2018\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>January 19th, 2018</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\n\t\t\t<li data-date=\"03/03/2018\">\n\t\t\t\t<h2>Event title here</h2>\n\t\t\t\t<em>March 3rd, 2018</em>\n\t\t\t\t<p>\t\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.\n\t\t\t\t</p>\n\t\t\t</li>\n\t\t</ol>\n\t</div> <!-- .events-content -->\n</section>\n  \n<!-- Load javscript external <button (click)=\"alertT()\" class=\"btn btn-info\" >hola</button> -->"

/***/ }),
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ })
],[381]);
//# sourceMappingURL=main.bundle.js.map