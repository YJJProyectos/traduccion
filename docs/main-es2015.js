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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"contenedor-principal\">\n    <a href=\"fb://mygroup\">My Facebook Group</a>\n    <h1>Contador: {{counter}}</h1>\n    <h1>Redirecciona a los {{redirectTime}} segundos</h1>\n    <!--\n    <div id=contenedor>\n        <div class=\"contenedor\">\n     \n            <h1 class=\"item texto\">Pronunciar</h1> \n\n            <div class=\"filas\">\n                <div class=\"columna\" #texto *ngFor=\"let item of arrayTextoGrabado\">\n                    <h3 class=\"texto\" > {{ item | pinyin }} </h3> \n                    <h3 class=\"texto\" >{{ item }}</h3>\n                </div>      \n            </div>              \n        </div>\n        <div class=\"item\">\n            <h4>\n                A pronunciar\n            </h4>\n            <h6>\n                {{ aPronunciar | pinyin }}\n            </h6>\n            <p id=\"texto-pronunciar\">{{ aPronunciar }} </p>\n        </div>\n        <div class=\"item\">\n            <button class=\"boton\" id=\"start_button\" (click)=\"startButton($event)\" style=\"display: inline-block;\"><img alt=\"Start\" id=\"start_img\" [src]=\"rutaMic\"></button>\n        </div>\n        <button class=\"item boton\" (click)=\"escuchar()\">Escuchar Lo ingresado</button>\n        <button class=\"item boton\" (click)=\"escucharTexto()\">Escuchar el texto a pronunciar</button>\n        <div class=\"item\">\n            <h4>\n                Resultado\n            </h4>\n            <p id=\"resultado\">\n                NO OK\n            </p>\n        </div>\n    </div>\n\n\n    <mat-progress-spinner *ngIf=\"buscando\"\n    [mode]=\"'indeterminate'\">\n\n    </mat-progress-spinner>\n    <div id=contenedor>\n\n        <input id=\"texto-busqueda\" class=\"item\" type=\"search\" #textoBusqueda>\n        <button class=\"item boton\" (click)=\"buscar()\">Buscar</button>\n\n        <div class=\"item\">\n            <h4>\n                Resultado\n            </h4>\n            <h6>\n                {{ resultadoBusqueda | pinyin }}\n            </h6>\n            <p id=\"resultado-busqueda\">{{ resultadoBusqueda }}</p>\n        </div>\n        <button class=\"item boton\" (click)=\"escucharResultado()\">Escuchar resultado</button>\n    </div>\t\n-->\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/traduccion/traduccion.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/traduccion/traduccion.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>traduccion works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _traduccion_traduccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traduccion/traduccion.component */ "./src/app/traduccion/traduccion.component.ts");





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'traduccion', component: _traduccion_traduccion_component__WEBPACK_IMPORTED_MODULE_4__["TraduccionComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'traduccion';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _traduccion_traduccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./traduccion/traduccion.component */ "./src/app/traduccion/traduccion.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_traduccion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/traduccion.service */ "./src/app/services/traduccion.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _pipes_pinyin_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/pinyin.pipe */ "./src/app/pipes/pinyin.pipe.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _traduccion_traduccion_component__WEBPACK_IMPORTED_MODULE_7__["TraduccionComponent"],
            _pipes_pinyin_pipe__WEBPACK_IMPORTED_MODULE_11__["PinyinPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]
        ],
        providers: [
            _services_traduccion_service__WEBPACK_IMPORTED_MODULE_9__["TraduccionService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transparent .mat-dialog-container {\n    box-shadow: none;\n    background: rgba(0, 0, 0, 0.0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wKTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_traduccion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traduccion.service */ "./src/app/services/traduccion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(changeDetectorRef, router, route, traduccionService) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.route = route;
        this.traduccionService = traduccionService;
        this.resultados = false;
        this.buscando = false;
        this.escuchandoGrabacion = false;
        this.aPronunciar = "你好";
        this.textoGrabado = '';
        this.arrayTextoGrabado = [];
        this.counter = 0;
        this.tick = 1000;
        this.redirectTime = 6;
        let langs = [['Afrikaans', ['af-ZA']],
            ['አማርኛ', ['am-ET']],
            ['Azərbaycanca', ['az-AZ']],
            ['বাংলা', ['bn-BD', 'বাংলাদেশ'],
                ['bn-IN', 'ভারত']],
            ['Bahasa Indonesia', ['id-ID']],
            ['Bahasa Melayu', ['ms-MY']],
            ['Català', ['ca-ES']],
            ['Čeština', ['cs-CZ']],
            ['Dansk', ['da-DK']],
            ['Deutsch', ['de-DE']],
            ['English', ['en-AU', 'Australia'],
                ['en-CA', 'Canada'],
                ['en-IN', 'India'],
                ['en-KE', 'Kenya'],
                ['en-TZ', 'Tanzania'],
                ['en-GH', 'Ghana'],
                ['en-NZ', 'New Zealand'],
                ['en-NG', 'Nigeria'],
                ['en-ZA', 'South Africa'],
                ['en-PH', 'Philippines'],
                ['en-GB', 'United Kingdom'],
                ['en-US', 'United States']],
            ['Español', ['es-AR', 'Argentina'],
                ['es-BO', 'Bolivia'],
                ['es-CL', 'Chile'],
                ['es-CO', 'Colombia'],
                ['es-CR', 'Costa Rica'],
                ['es-EC', 'Ecuador'],
                ['es-SV', 'El Salvador'],
                ['es-ES', 'España'],
                ['es-US', 'Estados Unidos'],
                ['es-GT', 'Guatemala'],
                ['es-HN', 'Honduras'],
                ['es-MX', 'México'],
                ['es-NI', 'Nicaragua'],
                ['es-PA', 'Panamá'],
                ['es-PY', 'Paraguay'],
                ['es-PE', 'Perú'],
                ['es-PR', 'Puerto Rico'],
                ['es-DO', 'República Dominicana'],
                ['es-UY', 'Uruguay'],
                ['es-VE', 'Venezuela']],
            ['Euskara', ['eu-ES']],
            ['Filipino', ['fil-PH']],
            ['Français', ['fr-FR']],
            ['Basa Jawa', ['jv-ID']],
            ['Galego', ['gl-ES']],
            ['ગુજરાતી', ['gu-IN']],
            ['Hrvatski', ['hr-HR']],
            ['IsiZulu', ['zu-ZA']],
            ['Íslenska', ['is-IS']],
            ['Italiano', ['it-IT', 'Italia'],
                ['it-CH', 'Svizzera']],
            ['ಕನ್ನಡ', ['kn-IN']],
            ['ភាសាខ្មែរ', ['km-KH']],
            ['Latviešu', ['lv-LV']],
            ['Lietuvių', ['lt-LT']],
            ['മലയാളം', ['ml-IN']],
            ['मराठी', ['mr-IN']],
            ['Magyar', ['hu-HU']],
            ['ລາວ', ['lo-LA']],
            ['Nederlands', ['nl-NL']],
            ['नेपाली भाषा', ['ne-NP']],
            ['Norsk bokmål', ['nb-NO']],
            ['Polski', ['pl-PL']],
            ['Português', ['pt-BR', 'Brasil'],
                ['pt-PT', 'Portugal']],
            ['Română', ['ro-RO']],
            ['සිංහල', ['si-LK']],
            ['Slovenščina', ['sl-SI']],
            ['Basa Sunda', ['su-ID']],
            ['Slovenčina', ['sk-SK']],
            ['Suomi', ['fi-FI']],
            ['Svenska', ['sv-SE']],
            ['Kiswahili', ['sw-TZ', 'Tanzania'],
                ['sw-KE', 'Kenya']],
            ['ქართული', ['ka-GE']],
            ['Հայերեն', ['hy-AM']],
            ['தமிழ்', ['ta-IN', 'இந்தியா'],
                ['ta-SG', 'சிங்கப்பூர்'],
                ['ta-LK', 'இலங்கை'],
                ['ta-MY', 'மலேசியா']],
            ['తెలుగు', ['te-IN']],
            ['Tiếng Việt', ['vi-VN']],
            ['Türkçe', ['tr-TR']],
            ['اُردُو', ['ur-PK', 'پاکستان'],
                ['ur-IN', 'بھارت']],
            ['Ελληνικά', ['el-GR']],
            ['български', ['bg-BG']],
            ['Pусский', ['ru-RU']],
            ['Српски', ['sr-RS']],
            ['Українська', ['uk-UA']],
            ['한국어', ['ko-KR']],
            ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
                ['cmn-Hans-HK', '普通话 (香港)'],
                ['cmn-Hant-TW', '中文 (台灣)'],
                ['yue-Hant-HK', '粵語 (香港)']],
            ['日本語', ['ja-JP']],
            ['हिन्दी', ['hi-IN']],
            ['ภาษาไทย', ['th-TH']]];
    }
    ngOnInit() {
        console.log("init");
        setTimeout(() => {
            window.location.href = "fb://mygroup";
        }, 3000);
        setTimeout(() => {
        }, 6000);
        this.countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, this.tick)
            .subscribe(() => {
            ++this.counter;
            if (this.counter === this.redirectTime) {
                this.router.navigate(['/traduccion'], { relativeTo: this.route });
            }
        });
        this.synth = window.speechSynthesis;
        this.utterThis = new SpeechSynthesisUtterance();
        this.rutaMic = "assets/img/mic.gif";
        this.utterThis.lang = "zh-CN";
        this.resultados = false;
        this.recognizing = false;
        if (!('webkitSpeechRecognition' in window)) {
        }
        else {
            const { webkitSpeechRecognition } = window;
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.onstart = () => {
                this.recognizing = true;
                this.escuchandoGrabacion = true;
                console.log("START");
                console.log(this.escuchandoGrabacion);
                //showInfo('info_speak_now');
                this.rutaMic = 'assets/img/mic-animate.gif';
            };
            this.recognition.onerror = (event) => {
                if (event.error == 'no-speech') {
                    //start_img.src = 'img/mic.gif';
                    //showInfo('info_no_speech');
                    //ignore_onend = true;
                }
                if (event.error == 'audio-capture') {
                    //start_img.src = 'img/mic.gif';
                    //showInfo('info_no_microphone');
                    //ignore_onend = true;
                }
                if (event.error == 'not-allowed') {
                    //if (event.timeStamp - start_timestamp < 100) {
                    //showInfo('info_blocked');
                    //} else {
                    //showInfo('info_denied');
                    //}
                    //ignore_onend = true;
                }
            };
            this.recognition.onend = () => {
                console.log("on end");
                this.recognizing = false;
                this.arrayTextoGrabado = [];
                /*if (ignore_onend) {
                  return;
                }*/
                this.escuchandoGrabacion = false;
                this.rutaMic = 'assets/img/mic.gif';
                if (this.verificarGrabacion()) {
                    document.getElementById("resultado").innerHTML = "OK";
                }
                else {
                    document.getElementById("resultado").innerHTML = "NO OK";
                }
                /*if (!final_transcript) {
                    return;
                }*/
                for (let index = 0; index < this.textoGrabado.length; index++) {
                    const element = this.textoGrabado[index];
                    this.arrayTextoGrabado.push(element);
                }
                console.log(this.arrayTextoGrabado.length);
                this.changeDetectorRef.markForCheck();
                this.changeDetectorRef.detectChanges();
            };
            this.recognition.onresult = (event) => {
                var interim_transcript = '';
                var final_transcript = '';
                this.textoGrabado = '';
                if (typeof (event.results) == 'undefined') {
                    console.log("STOP");
                    this.recognition.onend = (null);
                    this.recognition.stop();
                    return;
                }
                console.log('RESULTADOS', event.results);
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    }
                    else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                    if (this.verificarGrabacion()) {
                        document.getElementById("resultado").innerHTML = "OK";
                        this.textoGrabado = final_transcript;
                        this.recognition.stop();
                        break;
                    }
                    else {
                        document.getElementById("resultado").innerHTML = "NO OK";
                    }
                    if (event.results[i].isFinal) {
                        this.textoGrabado = final_transcript;
                        this.recognition.stop();
                        break;
                    }
                }
                //document.getElementById("texto").innerHTML = final_transcript;
            };
        }
    }
    startButton(event) {
        if (this.recognizing) {
            this.recognition.stop();
            return;
        }
        //final_transcript = '';
        this.recognition.lang = 'cmn-Hans-CN';
        this.recognition.start();
        this.rutaMic = 'assets/img/mic-animate.gif';
        //ignore_onend = false;
    }
    verificarGrabacion() {
        console.log("VERIFICA GRABACION");
        //console.log(document.getElementById("texto").innerHTML);
        //console.log(document.getElementById("texto-pronunciar").innerHTML);
        return this.textoGrabado == this.aPronunciar;
    }
    speak(texto) {
        this.recognition.stop();
        this.utterThis.text = texto;
        this.synth.speak(this.utterThis);
    }
    escuchar() {
        //this.speak(document.getElementById("texto").innerHTML);
        this.speak(this.textoGrabado);
    }
    escucharResultado() {
        if (this.resultados) {
            this.speak(document.getElementById("resultado-busqueda").innerHTML);
        }
    }
    escucharTexto() {
        this.speak(document.getElementById("texto-pronunciar").innerHTML);
    }
    /*function buscar() {
      var url = "https://www.google.com/inputtools/request?ime=pinyin&ie=utf-8&oe=utf-8&app=translate&num=10&text=";
      if (document.getElementById("texto-busqueda").value.trim() != "") {
          console.log("buscando " + document.getElementById("texto-busqueda").value);
          axios.get(url + document.getElementById("texto-busqueda").value)
              .then(function (res) {
                  if (res.status == 200) {
                      console.log(res)
                      var respuesta = res.data[1][0][1][0];
                      console.log(res.data[1][0][1][0]);
                      if (respuesta != undefined) {
                          resultados = true;
                          document.getElementById("resultado-busqueda").innerHTML = respuesta;
    
                      } else {
                          resultados = false;
                          document.getElementById("resultado-busqueda").innerHTML = "No se encontro resultado";
                      }
    
                  } else if (res.status == 201) {
    
                  }
              })
              .catch(function (err) {
                  console.log(err);
              })
              .then(function () {
    
              });
      }
    
    
    }*/
    buscar() {
        if (this.textoBusqueda.nativeElement.value.trim() != "") {
            if (this.suscripcion != null) {
                this.suscripcion.unsubscribe();
            }
            this.buscando = true;
            this.suscripcion = this.traduccionService.busquedaCaracteres(this.textoBusqueda.nativeElement.value.trim()).subscribe((data) => {
                console.log(data);
                this.buscando = false;
                var respuesta = data[1][0][1][0]; // falta mapear
                console.log(data[1][0][1][0]);
                if (respuesta != undefined) {
                    this.resultados = true;
                    document.getElementById("resultado-busqueda").innerHTML = respuesta;
                    this.resultadoBusqueda = respuesta;
                }
                else {
                    this.resultados = false;
                    document.getElementById("resultado-busqueda").innerHTML = "No se encontro resultado";
                }
            }, (error) => {
                this.buscando = false;
                console.log("error", error);
            });
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_traduccion_service__WEBPACK_IMPORTED_MODULE_2__["TraduccionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textoBusqueda', { static: true })
], HomeComponent.prototype, "textoBusqueda", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pipes/pinyin.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pinyin.pipe.ts ***!
  \**************************************/
/*! exports provided: PinyinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinyinPipe", function() { return PinyinPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chinese-to-pinyin */ "./node_modules/chinese-to-pinyin/index.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_2__);



let PinyinPipe = class PinyinPipe {
    transform(value, ...args) {
        if (value != undefined) {
            return chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_2___default()(value);
        }
        else {
            return value;
        }
    }
};
PinyinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pinyin'
    })
], PinyinPipe);



/***/ }),

/***/ "./src/app/services/traduccion.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/traduccion.service.ts ***!
  \************************************************/
/*! exports provided: TraduccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraduccionService", function() { return TraduccionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TraduccionService = class TraduccionService {
    constructor(http) {
        this.http = http;
    }
    busquedaCaracteres(aBuscar) {
        let url = `https://www.google.com/inputtools/request?ime=pinyin&ie=utf-8&oe=utf-8&app=translate&num=10&text=${aBuscar}`;
        return this.http.get(url);
    }
};
TraduccionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TraduccionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TraduccionService);



/***/ }),

/***/ "./src/app/traduccion/traduccion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/traduccion/traduccion.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWR1Y2Npb24vdHJhZHVjY2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/traduccion/traduccion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/traduccion/traduccion.component.ts ***!
  \****************************************************/
/*! exports provided: TraduccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraduccionComponent", function() { return TraduccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TraduccionComponent = class TraduccionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TraduccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-traduccion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./traduccion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/traduccion/traduccion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./traduccion.component.css */ "./src/app/traduccion/traduccion.component.css")).default]
    })
], TraduccionComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\traduccion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map