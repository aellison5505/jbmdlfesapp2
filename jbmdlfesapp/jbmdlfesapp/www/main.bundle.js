webpackJsonp([1,4],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BldgtransportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BldgtransportService = (function () {
    function BldgtransportService() {
        this.doc = {};
    }
    BldgtransportService.prototype.passDoc = function (pass) {
        this.doc = pass;
        console.log("emit" + JSON.stringify(this.doc));
    };
    BldgtransportService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], BldgtransportService);
    return BldgtransportService;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/bldgtransport.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pouchdb__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDBService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalDBService = (function () {
    function LocalDBService() {
    }
    LocalDBService.prototype.sync = function () {
        this.remoteDB = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__('https://jbmdl_app:app_jbmdl@app.mobilewebapp.net:8000/test_db/');
        this.db.replicate.from(this.remoteDB).on('complete', function () {
            console.log("syn");
            //	$rootScope.$emit('callFileDone', 'DB Loaded');
        }).on('error', function (err) {
            console.log(err);
        });
        this.remoteDB = null;
    };
    LocalDBService.prototype.init = function () {
        var _this = this;
        this.db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__('jbmdl_db', {
            skip_setup: false
        });
        this.db.info().then(function (info) {
            console.log(info);
            _this.sync();
        }).catch(function (err) {
            console.log("error db setup " + err);
        });
    };
    LocalDBService.prototype.get = function (pull) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.get(pull).then(function (doc) {
                console.log(doc);
                resolve(doc);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    LocalDBService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LocalDBService);
    return LocalDBService;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/localdb.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 334;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
//call for bootstrap
var bootstrap = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
};
//if cordova wait for framework to load then call bootstrap to load angular
if (!!window['cordova']) {
    console.log("cordova");
    document.addEventListener('deviceready', bootstrap);
}
else {
    bootstrap();
}
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localdb_service__ = __webpack_require__(190);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(localdb) {
        this.localdb = localdb;
    }
    AppComponent.prototype.init = function () {
        this.localdb.init();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(523)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__localdb_service__["a" /* LocalDBService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__localdb_service__["a" /* LocalDBService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lookup_lookup_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__localdb_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bldgresult_bldgresult_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bldgtransport_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'lookup', component: __WEBPACK_IMPORTED_MODULE_8__lookup_lookup_component__["a" /* LookupComponent */] },
    { path: 'bldgresult', component: __WEBPACK_IMPORTED_MODULE_10__bldgresult_bldgresult_component__["a" /* BldgResultComponent */] },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '/welcome',
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__lookup_lookup_component__["a" /* LookupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__bldgresult_bldgresult_component__["a" /* BldgResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__localdb_service__["a" /* LocalDBService */], __WEBPACK_IMPORTED_MODULE_11__bldgtransport_service__["a" /* BldgtransportService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bldgtransport_service__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BldgResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BldgResultComponent = (function () {
    function BldgResultComponent(bldg) {
        this.bldg = bldg;
        this.msg = {};
    }
    BldgResultComponent.prototype.ngOnInit = function () {
        this.msg = this.bldg.doc;
    };
    BldgResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(524)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bldgtransport_service__["a" /* BldgtransportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__bldgtransport_service__["a" /* BldgtransportService */]) === 'function' && _a) || Object])
    ], BldgResultComponent);
    return BldgResultComponent;
    var _a;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/bldgresult.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.vis = true;
    }
    HeaderComponent.prototype.show = function () {
        this.vis = false;
    };
    HeaderComponent.prototype.hide = function () {
        this.vis = true;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(525)
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/header.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localdb_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bldgtransport_service__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LookupComponent = (function () {
    function LookupComponent(router, localdb, trans) {
        //    this.err = "test error";
        this.router = router;
        this.localdb = localdb;
        this.trans = trans;
    }
    LookupComponent.prototype.ngOnInit = function () {
    };
    LookupComponent.prototype.sub = function () {
        var _this = this;
        //    this.err = this.bldg;
        if (isNaN(this.bldg)) {
            this.err = "Please enter numbers only!";
        }
        else {
            console.log(this.bldg);
            this.localdb.get(this.bldg).then(function (doc) {
                _this.err = "";
                console.log(doc);
                _this.doc = doc;
                _this.trans.passDoc(_this.doc);
                _this.router.navigateByUrl('/bldgresult');
            }).catch(function (err) {
                if (err.status === 404) {
                    _this.err = "Building is not found!";
                }
                else {
                    _this.err = err.name + ": " + err.message;
                }
                console.log(err);
            });
        }
    };
    LookupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(526)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__localdb_service__["a" /* LocalDBService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__localdb_service__["a" /* LocalDBService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__bldgtransport_service__["a" /* BldgtransportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bldgtransport_service__["a" /* BldgtransportService */]) === 'function' && _c) || Object])
    ], LookupComponent);
    return LookupComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/lookup.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(527)
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/welcome.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/dev/net.mobilewebapp.jbmdlfesapp/src/environment.js.map

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div  class=\"w3-row w3-container w3-content\" >\r\n\r\n\t<h2 class=\"w3-xxxlarge\">Location</h2>\r\n\r\n\r\n\t\t<table class=\"w3-table-all w3-xlarge w3-white\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th colspan=\"2\">BLDG {{msg._id}}</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>GRID</td>\r\n\t\t\t\t<td>{{msg.grd}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Location</td>\r\n\t\t\t\t<td>{{msg.loc}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Use</td>\r\n\t\t\t\t<td>{{msg.bduse}}</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td colspan=\"2\">{{msg.cmt}}</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<nav id=\"SNav\" [hidden]=\"vis\" class=\"w3-sidenav w3-white w3-card-2  w3-large\" >\r\n  <a href=\"#\" id=\"navX\"  (click)=\"hide()\" class=\"w3-closenav w3-xlarge w3-right-align\">&times;</a>\r\n  <a  (click)=\"hide()\" routerLink=\"/welcome\" routerLinkActive=\"active\">Home</a>\r\n  <a  (click)=\"hide()\" routerLink=\"/lookup\" routerLinkActive=\"active\">Lookup Building</a>\r\n  <a  (click)=\"hide()\" href=\"#\">Exit</a>\r\n</nav>\r\n\r\n<header  class=\"w3-container w3-xxlarge w3-text-shadow w3-text-white w3-theme-d5\">\r\n  <span id=\"menu\" (click)=\"show()\" class=\"w3-opennav\">&#9776;</span>\r\n  <span class=\"w3-right-align\">JDMDL FES APP</span>\r\n</header>\r\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row w3-container w3-content\">\r\n  <h2 class=\"w3-xxxlarge\">Building Lookup</h2>\r\n  <form class=\"w3-panel w3-white w3-card-2 w3-display-container\">\r\n    <p class=\"w3-xlarge w3-margin-left\">Enter the building number:<br />\r\n      <span class=\"w3-text-red w3-xlarge\">{{err}}</span><br />\r\n      <input [(ngModel)]=\"bldg\" name=\"bldg\" style=\"width: 150px;\" type=\"text\" required autofocus><br /><br />\r\n      <button class=\"w3-btn w3-theme-d5\" (click)=\"sub()\">Submit</button><br />\r\n    </p>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div  class=\"w3-row w3-container w3-content\" >\n\t<h2 class=\"w3-xxxlarge\">Welcome</h2>\n\n\t<div class=\"w3-panel w3-white w3-card-2 w3-display-container\">\n\n\t<p class=\"w3-xlarge w3-margin-left\">Please select an option from the menu</p>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ })

},[547]);
//# sourceMappingURL=main.bundle.map