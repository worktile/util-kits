(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utilMisc"] = factory();
	else
		root["utilMisc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uri__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return __WEBPACK_IMPORTED_MODULE_1__cookie__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return __WEBPACK_IMPORTED_MODULE_2__uri__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return __WEBPACK_IMPORTED_MODULE_0__browser__["a"]; });




var version = '0.0.1';


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultLanguage = 'en-us';
var supportLanguages = [
    'zh-cn',
    'zh-tw',
    'en-us'
];

/* harmony default export */ __webpack_exports__["a"] = ({
    getLanguage: function() {
        var language = (navigator.language || navigator.userLanguage).toLowerCase();
        if (supportLanguages.indexOf(language) >= 0) {
            return language;
        } else {
            return defaultLanguage;
        }
    }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* unused harmony export set */
function get(name) {
    var nameEqual = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        // there will be spaces after ';'
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEqual) === 0) {
            return cookie.substring(nameEqual.length, cookie.length);
        }
    }
    return null;
}

function set(name, value, options) {
    var expires = options.expires;
    var domain = options.domain;
    var path = options.path;
    var secure = options.secure;
    var httponly = options.httponly;

    var expiresDate = expires ? new Date(
        // in case expires is an integer, it should specify the number of days till the cookie expires
        typeof expires === 'number' ? new Date().getTime() + (expires * 864e5) :
        // else expires should be either a Date object or in a format recognized by Date.parse()
        expires
    ) : null;

    document.cookie = (name + '=' + value) +
        (expiresDate && expiresDate.getTime() >= 0 ? ';expires=' + expiresDate.toUTCString() : '') +
        (domain ? ';domain=' + domain : '') + // Add domain
        (path ? ';path=' + path : '') + // Add path
        (secure ? ';secure' : '') + // Add secure option
        (httponly ? ';httponly' : '');
}



/* harmony default export */ __webpack_exports__["a"] = (function(name, value, options) {
    options = options || {};
    // set
    if (value !== undefined) {
        set(name, value, options);
    } else {
        return get(name);
    }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function URI(uri) {
    this.parse(uri);
}

URI.prototype.parseSearch = function(search) {
    const query = {}
    if (search.length > 1) {
        search.slice(1).split('&').forEach(function(s) {
            const pair = s.split('=');
            const key = decodeURIComponent(pair[0].replace(/\+/g, ' '));
            const value = pair.length === 1 ? '' : decodeURIComponent(pair[1].replace(/\+/g, ' '));
            if (query[key] == null) {
                query[key] = value;
            } else {
                if (query[key].constructor !== Array) {
                    query[key] = [query[key]];
                }
                query[key].push(value);
            }
        });
    }
    return query
}

URI.prototype.parse = function(uri) {
    var uriObject = null;
    if (uri) {
        uriObject = document.createElement('a');
        uriObject.href = uri;
        // IE doesn't populate all link properties when setting .href with a relative URL,
        // however .href will return an absolute URL which then can be used on itself
        // to populate these additional fields.
        uriObject.href = uriObject.href;
    } else {
        uriObject = window.location;
    }

    this.protocol = uriObject.protocol;
    this.hostname = uriObject.hostname;
    this.port = uriObject.port;
    this.search = uriObject.search;
    this.hash = uriObject.hash;
    this.query = this.parseSearch(uriObject.search);
    // pathname doesn't include the leading slash in IE
    this.pathname = uriObject.pathname;
    if (this.pathname.charAt(0) !== '/') {
        this.pathname = '/' + this.pathname;
    }
}

URI.query = function(name) {
    var search = window.document.location.search;
    if (search) {
        var rs = new RegExp("(^|)" + name + "=([^\&]*)(\&|$)", "gi").exec(search);
        if (rs && rs.length > 2) {
            return rs[2];
        }
        return '';
    } else {
        return '';
    }
}

/* harmony default export */ __webpack_exports__["a"] = (URI);

/***/ })
/******/ ]);
});
//# sourceMappingURL=util.bundle.js.map