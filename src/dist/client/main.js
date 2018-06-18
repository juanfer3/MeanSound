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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Navbar Navigation-->\n<app-navigation></app-navigation>\n\n\n<!--Router-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _guards_auth_firebase_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-firebase.guard */ "./src/app/guards/auth-firebase.guard.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _guards_auth_mn_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth-mn.guard */ "./src/app/guards/auth-mn.guard.ts");
/* harmony import */ var _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
/* harmony import */ var _servicios_artistas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicios/artistas.service */ "./src/app/servicios/artistas.service.ts");
/* harmony import */ var _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./servicios/auth-mn.service */ "./src/app/servicios/auth-mn.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _artistas_artistas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./artistas/artistas.component */ "./src/app/artistas/artistas.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_no_found_page_no_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-no-found/page-no-found.component */ "./src/app/page-no-found/page-no-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _login_firebase_login_firebase_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login-firebase/login-firebase.component */ "./src/app/login-firebase/login-firebase.component.ts");
/* harmony import */ var _signup_firebase_signup_firebase_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signup-firebase/signup-firebase.component */ "./src/app/signup-firebase/signup-firebase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Firebase */




/* Routers */

/*Material Import*/

// Guards

// Servicios



// Componentes









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _artistas_artistas_component__WEBPACK_IMPORTED_MODULE_18__["ArtistasComponent"],
                _page_no_found_page_no_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNoFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _singup_singup_component__WEBPACK_IMPORTED_MODULE_22__["SingupComponent"],
                _login_firebase_login_firebase_component__WEBPACK_IMPORTED_MODULE_23__["LoginFirebaseComponent"],
                _signup_firebase_signup_firebase_component__WEBPACK_IMPORTED_MODULE_24__["SignupFirebaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [
                _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseAuthService"],
                _servicios_artistas_service__WEBPACK_IMPORTED_MODULE_14__["ArtistasService"],
                _guards_auth_firebase_guard__WEBPACK_IMPORTED_MODULE_6__["AuthFirebaseGuard"],
                _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_15__["AuthMnService"],
                _guards_auth_mn_guard__WEBPACK_IMPORTED_MODULE_12__["AuthMnGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_mn_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth-mn.guard */ "./src/app/guards/auth-mn.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_no_found_page_no_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-no-found/page-no-found.component */ "./src/app/page-no-found/page-no-found.component.ts");
/* harmony import */ var _artistas_artistas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artistas/artistas.component */ "./src/app/artistas/artistas.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");


/*Modulos*/





var App_Routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: 'singup', component: _singup_singup_component__WEBPACK_IMPORTED_MODULE_6__["SingupComponent"],
    },
    {
        path: 'artistas', component: _artistas_artistas_component__WEBPACK_IMPORTED_MODULE_4__["ArtistasComponent"],
        canActivate: [_guards_auth_mn_guard__WEBPACK_IMPORTED_MODULE_1__["AuthMnGuard"]]
    },
    { path: '**', component: _page_no_found_page_no_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNoFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(App_Routes);


/***/ }),

/***/ "./src/app/artistas/artistas.component.html":
/*!**************************************************!*\
  !*** ./src/app/artistas/artistas.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Artistas</h1>\n\n\n<mat-grid-list cols=\"3\" rowHeight=\"3:4\">\n  <!--grid-->\n  <mat-grid-tile *ngFor=\"let artista of artistas\">\n\n    <!--Card Artist-->\n    <mat-card class=\"example-card\" >\n      <mat-card-header>\n        <mat-card-title>{{artista.name}}</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{artista.image[3]['#text']}}\" >\n\n      <mat-card-actions class=\"space_bet\">\n          <button mat-menu-item>\n              <mat-icon>favorite_border</mat-icon>\n              <span>LIKE</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>question_answer</mat-icon>\n                <span>Comentarios</span>\n              </button>\n      </mat-card-actions>\n    </mat-card>\n\n  </mat-grid-tile>\n\n</mat-grid-list>    "

/***/ }),

/***/ "./src/app/artistas/artistas.component.scss":
/*!**************************************************!*\
  !*** ./src/app/artistas/artistas.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/artistas/artistas.component.ts":
/*!************************************************!*\
  !*** ./src/app/artistas/artistas.component.ts ***!
  \************************************************/
/*! exports provided: ArtistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistasComponent", function() { return ArtistasComponent; });
/* harmony import */ var _servicios_artistas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../servicios/artistas.service */ "./src/app/servicios/artistas.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistasComponent = /** @class */ (function () {
    function ArtistasComponent(artist) {
        var _this = this;
        this.artist = artist;
        this.artistas = [];
        // Api Sound
        this.artist.ListarArtistas().subscribe(function (posts) {
            _this.artistas = posts.topartists.artist;
            console.log(_this.artistas);
        });
        // Mongo db
        this.artist.listarArtistasLocal().subscribe(function (posts) {
            console.log('Array Local');
            console.log(posts);
        });
    }
    ArtistasComponent.prototype.ngOnInit = function () {
    };
    ArtistasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artistas',
            template: __webpack_require__(/*! ./artistas.component.html */ "./src/app/artistas/artistas.component.html"),
            styles: [__webpack_require__(/*! ./artistas.component.scss */ "./src/app/artistas/artistas.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_artistas_service__WEBPACK_IMPORTED_MODULE_0__["ArtistasService"]])
    ], ArtistasComponent);
    return ArtistasComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-firebase.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/auth-firebase.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthFirebaseGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFirebaseGuard", function() { return AuthFirebaseGuard; });
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


/**Impor For Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthService } from '../servicios/firebase-auth.service';
import { auth } from 'firebase';
*/
var AuthFirebaseGuard = /** @class */ (function () {
    function AuthFirebaseGuard(router) {
        this.router = router;
    }
    AuthFirebaseGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AuthFirebaseGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthFirebaseGuard);
    return AuthFirebaseGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth-mn.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/auth-mn.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthMnGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMnGuard", function() { return AuthMnGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth-mn.service */ "./src/app/servicios/auth-mn.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**Servicios */

var AuthMnGuard = /** @class */ (function () {
    function AuthMnGuard(authUsers, router) {
        this.authUsers = authUsers;
        this.router = router;
    }
    AuthMnGuard.prototype.canActivate = function (next, state) {
        if (this.authUsers.userAuth()) {
            console.log('=====Mensaje=====');
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthMnGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_2__["AuthMnService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthMnGuard);
    return AuthMnGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-firebase/login-firebase.component.html":
/*!**************************************************************!*\
  !*** ./src/app/login-firebase/login-firebase.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n\n<div class=\"main-div\">\n\n    \n  \n    <form action=\"\" class=\"center\"  #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <h1>Login Con FireBase</h1>\n      <div class=\"example-container\">\n        <!--Input User-->\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" id=\"email\" ngModel>\n        </mat-form-field>\n\n        <!--Input Password-->\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" type=\"password\" name=\"pass\" id=\"pass\" ngModel>\n        </mat-form-field>\n\n        \n        <button mat-raised-button class=\"mybtn-login-gmail\" type=\"submit\">Login</button>\n\n      </div>\n    </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/login-firebase/login-firebase.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/login-firebase/login-firebase.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-firebase/login-firebase.component.ts":
/*!************************************************************!*\
  !*** ./src/app/login-firebase/login-firebase.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFirebaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFirebaseComponent", function() { return LoginFirebaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFirebaseComponent = /** @class */ (function () {
    function LoginFirebaseComponent(myFirebase, router) {
        this.myFirebase = myFirebase;
        this.router = router;
    }
    LoginFirebaseComponent.prototype.ngOnInit = function () {
    };
    LoginFirebaseComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form.value);
        this.myFirebase.loginFirebase(form.value.email, form.value.pass)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            console.log(err);
            _this.router.navigate(['/login']);
        });
    };
    LoginFirebaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-firebase',
            template: __webpack_require__(/*! ./login-firebase.component.html */ "./src/app/login-firebase/login-firebase.component.html"),
            styles: [__webpack_require__(/*! ./login-firebase.component.scss */ "./src/app/login-firebase/login-firebase.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginFirebaseComponent);
    return LoginFirebaseComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n\n<div class=\"main-div\">\n\n    \n  \n    <form action=\"\" class=\"center\"  #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <h1>Login</h1>\n      <div class=\"example-container\">\n\n        \n\n        <!--Input Email-->\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" id=\"email\" ngModel>\n        </mat-form-field>\n\n        <!--Input Password-->\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" id=\"pass\" ngModel>\n        </mat-form-field>\n\n        \n        <button mat-raised-button class=\"mybtn-login-gmail\" type=\"submit\">Login</button>\n\n      </div>\n    </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.center {\n  width: 30%;\n  margin: 10px auto; }\n\n.main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.mybtn-login-gmail {\n  background: #B71C1C;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/auth-mn.service */ "./src/app/servicios/auth-mn.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authUsers, router) {
        this.authUsers = authUsers;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form.value);
        this.authUsers.loginUser(form.value)
            .subscribe(function (res) {
            console.log('Login Confirmado');
            console.log(res);
            _this.userAutenticado = res;
            if (_this.userAutenticado === true) {
                console.log('usuario Autenticado');
                localStorage.setItem('auth', _this.userAutenticado);
                console.log(localStorage.getItem('auth'));
                _this.authUsers.userAuth();
                _this.router.navigate(['']);
            }
            else {
                console.log('Usuario Negado');
                localStorage.setItem('auth', _this.userAutenticado);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_1__["AuthMnService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"my_navar\">\n  <span>My App</span>\n\n\n\n\n  <span class=\"spacer\"></span>\n  <!--Button Menu-->\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <!--Menu-->\n  <mat-menu #menu=\"matMenu\" >\n    \n      <button mat-menu-item (click)=\"Logout()\" *ngIf=\"isLogin\">\n        <mat-icon>alarm_off</mat-icon>\n        <span>Logout</span>\n      </button>\n\n      <button mat-menu-item *ngIf=\"!isLogin\" routerLink=\"/login\">\n        <mat-icon>redeem</mat-icon>\n        <span>Login</span>\n      </button>\n\n    \n  </mat-menu>\n\n</mat-toolbar>\n\n\n<!-- Navegador -->\n<mat-tab-group  *ngIf=\"isLogin\">\n  <!-- Link to Home -->\n  <mat-tab >\n\n    <ng-template mat-tab-label >\n\n      <button mat-button routerLink=\"/\">Inicio</button>\n    </ng-template>\n  </mat-tab>\n  <!-- Link to User-->\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <button mat-button routerLink=\"/artistas\" >Artistas</button>\n    </ng-template>\n  </mat-tab>\n  <!-- Link to Login-->\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <button mat-button routerLink=\"/login\" >Login</button>\n    </ng-template>\n  </mat-tab>\n\n  <!-- Link to Singup-->\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <button mat-button routerLink=\"/singup\" >Singup</button>\n    </ng-template>\n  </mat-tab>\n\n \n\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
/* harmony import */ var _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/auth-mn.service */ "./src/app/servicios/auth-mn.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**Servicios */


/**Componentes */
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(myFirebase, autenticar, router) {
        this.myFirebase = myFirebase;
        this.autenticar = autenticar;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* Navigation con Firebase
        this.myFirebase.getAuthFirebase().subscribe( auth => {
          if (auth) {
            this.isLogin = true;
            this.nombreUser = auth.displayName;
            this.emailUser = auth.email;
          } else {
            this.isLogin = false;
          }
        });
        */
        this.autenticar.mostrarMenu.subscribe(function (mostrar) {
            console.log('Este Es El IMIter');
            console.log(mostrar);
            _this.isLogin = mostrar;
            console.log('este es el login');
            console.log(_this.isLogin);
        });
    };
    NavigationComponent.prototype.Logout = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"],
            _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_3__["AuthMnService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page-no-found/page-no-found.component.html":
/*!************************************************************!*\
  !*** ./src/app/page-no-found/page-no-found.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-no-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-no-found/page-no-found.component.scss":
/*!************************************************************!*\
  !*** ./src/app/page-no-found/page-no-found.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-no-found/page-no-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-no-found/page-no-found.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNoFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNoFoundComponent", function() { return PageNoFoundComponent; });
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

var PageNoFoundComponent = /** @class */ (function () {
    function PageNoFoundComponent() {
    }
    PageNoFoundComponent.prototype.ngOnInit = function () {
    };
    PageNoFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-no-found',
            template: __webpack_require__(/*! ./page-no-found.component.html */ "./src/app/page-no-found/page-no-found.component.html"),
            styles: [__webpack_require__(/*! ./page-no-found.component.scss */ "./src/app/page-no-found/page-no-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNoFoundComponent);
    return PageNoFoundComponent;
}());



/***/ }),

/***/ "./src/app/servicios/artistas.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/artistas.service.ts ***!
  \***********************************************/
/*! exports provided: ArtistasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistasService", function() { return ArtistasService; });
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


var ArtistasService = /** @class */ (function () {
    function ArtistasService(http) {
        this.http = http;
        // tslint:disable-next-line:max-line-length
        this.apiUrl = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json';
        this.apiSound = 'http://localhost:3000/api';
        this.artistas = [];
    }
    ArtistasService.prototype.ListarArtistas = function () {
        return this.http.get(this.apiUrl);
    };
    ArtistasService.prototype.listarArtistasLocal = function () {
        return this.http.get(this.apiSound + '/artistas.json');
    };
    ArtistasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArtistasService);
    return ArtistasService;
}());



/***/ }),

/***/ "./src/app/servicios/auth-mn.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/auth-mn.service.ts ***!
  \**********************************************/
/*! exports provided: AuthMnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMnService", function() { return AuthMnService; });
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


var AuthMnService = /** @class */ (function () {
    function AuthMnService(http) {
        this.http = http;
        this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.apiMongo = 'http://localhost:3000/api';
    }
    AuthMnService.prototype.getUsers = function () {
        return this.http.get(this.apiMongo + '/users.json');
    };
    AuthMnService.prototype.CreateUser = function (newUser) {
        console.log('Crear Usuario');
        return this.http.post(this.apiMongo + '/users/new', newUser);
    };
    AuthMnService.prototype.loginUser = function (newUser) {
        console.log('Inicio De Login');
        return this.http.post(this.apiMongo + '/login', newUser);
    };
    AuthMnService.prototype.userAuth = function () {
        this.autenticado = localStorage.getItem('auth');
        console.log('este es el localstorage auth');
        console.log(localStorage.getItem('auth'));
        if (localStorage.getItem('auth') != null) {
            console.log('Autenticacion Valida');
            this.mostrarMenu.emit(true);
            return true;
        }
        else {
            console.log('Autenticacion Nula');
            this.mostrarMenu.emit(false);
            return false;
        }
    };
    AuthMnService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthMnService);
    return AuthMnService;
}());



/***/ }),

/***/ "./src/app/servicios/firebase-auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/firebase-auth.service.ts ***!
  \****************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseAuthService = /** @class */ (function () {
    function FirebaseAuthService(fba) {
        this.fba = fba;
    }
    FirebaseAuthService.prototype.registrerUserFirebase = function (email, pass) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            _this.fba.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    FirebaseAuthService.prototype.loginFirebase = function (email, pass) {
        var _this = this;
        console.log('entra a firebase');
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
            _this.fba.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    FirebaseAuthService.prototype.getAuthFirebase = function () {
        return this.fba.authState;
    };
    FirebaseAuthService.prototype.logoutFirebase = function () {
        return this.fba.auth.signOut();
    };
    FirebaseAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], FirebaseAuthService);
    return FirebaseAuthService;
}());



/***/ }),

/***/ "./src/app/signup-firebase/signup-firebase.component.html":
/*!****************************************************************!*\
  !*** ./src/app/signup-firebase/signup-firebase.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div class=\"main-div\">\n  <!-- \n  <i class=\"icon ion-md-heart\"></i>\n    -->\n  \n\n  \n    <form action=\"\" class=\"center\"  #userForm=\"ngForm\" (ngSubmit)=\"createUser(userForm)\">\n        <h1>Registro con Firebase</h1>\n\n\n      <div class=\"example-container\">\n        <!--Input User-->\n        <mat-form-field>\n          <input matInput placeholder=\"User\" name=\"user\" id=\"user\" ngModel>\n        </mat-form-field>\n\n        <!--Input Password-->\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" type=\"password\" name=\"pass\" id=\"pass\" ngModel>\n        </mat-form-field>\n\n        <!--Submit-->\n        <button mat-raised-button class=\"mybtn-login-gmail\" type=\"submit\">Login</button>\n\n      </div>\n    </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/signup-firebase/signup-firebase.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/signup-firebase/signup-firebase.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup-firebase/signup-firebase.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/signup-firebase/signup-firebase.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupFirebaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFirebaseComponent", function() { return SignupFirebaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/firebase-auth.service */ "./src/app/servicios/firebase-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupFirebaseComponent = /** @class */ (function () {
    function SignupFirebaseComponent(myFirebase) {
        this.myFirebase = myFirebase;
        this.email = 'hoal';
        this.pass = 'asdf';
    }
    SignupFirebaseComponent.prototype.ngOnInit = function () {
    };
    SignupFirebaseComponent.prototype.createUser = function (form) {
        console.log(form.value);
        this.myFirebase.registrerUserFirebase(form.value.user, form.value.pass)
            .then(function (res) {
            console.log('Good');
            console.log(res);
        }).catch(function (err) {
            console.log('Error');
            console.log(err);
        });
    };
    SignupFirebaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-firebase',
            template: __webpack_require__(/*! ./signup-firebase.component.html */ "./src/app/signup-firebase/signup-firebase.component.html"),
            styles: [__webpack_require__(/*! ./signup-firebase.component.scss */ "./src/app/signup-firebase/signup-firebase.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"]])
    ], SignupFirebaseComponent);
    return SignupFirebaseComponent;
}());



/***/ }),

/***/ "./src/app/singup/singup.component.html":
/*!**********************************************!*\
  !*** ./src/app/singup/singup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div class=\"main-div\">\n  <!-- \n  <i class=\"icon ion-md-heart\"></i>\n    -->\n  \n\n  \n    <form action=\"\" class=\"center\"  #userForm=\"ngForm\" (ngSubmit)=\"createUser(userForm)\">\n        <h1>Registro de usuario</h1>\n\n\n      <div class=\"example-container\">\n\n        <!--Input Nombre-->\n        <mat-form-field>\n            <input matInput placeholder=\"Nombre\" type=\"text\" name=\"nombre\" id=\"nombre\" ngModel>\n          </mat-form-field>\n\n        <!--Input User-->\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" name=\"email\" id=\"email\" ngModel>\n        </mat-form-field>\n\n        <!--Input Password-->\n        <mat-form-field>\n            <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" id=\"password\" ngModel>\n        </mat-form-field>\n\n        <!--Submit-->\n        <button mat-raised-button class=\"mybtn-login-gmail\" type=\"submit\">Login</button>\n\n      </div>\n    </form>\n\n  </div>"

/***/ }),

/***/ "./src/app/singup/singup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/singup/singup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.center {\n  width: 30%;\n  margin: 10px auto; }\n\n.main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.mybtn-login-gmail {\n  background: #B71C1C;\n  color: aliceblue; }\n"

/***/ }),

/***/ "./src/app/singup/singup.component.ts":
/*!********************************************!*\
  !*** ./src/app/singup/singup.component.ts ***!
  \********************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/auth-mn.service */ "./src/app/servicios/auth-mn.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Servicios

// Component
var SingupComponent = /** @class */ (function () {
    function SingupComponent(authUsers) {
        this.authUsers = authUsers;
    }
    SingupComponent.prototype.ngOnInit = function () {
    };
    SingupComponent.prototype.createUser = function (form) {
        console.log(form.value);
        var newUser = {
            nombre: form.value.nombre,
            email: form.value.email,
            password: form.value.password
        };
        this.authUsers.CreateUser(newUser)
            .subscribe(function (user) {
            console.log('Users Nuevo');
            console.log(user);
        });
    };
    SingupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singup',
            template: __webpack_require__(/*! ./singup.component.html */ "./src/app/singup/singup.component.html"),
            styles: [__webpack_require__(/*! ./singup.component.scss */ "./src/app/singup/singup.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_auth_mn_service__WEBPACK_IMPORTED_MODULE_1__["AuthMnService"]])
    ], SingupComponent);
    return SingupComponent;
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
    firebaseConfig: {
        apiKey: 'AIzaSyBo29lSTA-ppV_rUjmjjK8VDyuB8mE9ulI',
        authDomain: 'soudapi-21af9.firebaseapp.com',
        databaseURL: 'https://soudapi-21af9.firebaseio.com',
        projectId: 'soudapi-21af9',
        storageBucket: 'soudapi-21af9.appspot.com',
        messagingSenderId: '607865897807'
    }
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

module.exports = __webpack_require__(/*! C:\Users\Juan\ProyectosAngular\Fronent and Backend Angular y node\ApiSound\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map