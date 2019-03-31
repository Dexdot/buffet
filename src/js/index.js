/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/init/css-props.js":
/*!**********************************!*\
  !*** ./src/js/init/css-props.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar set = function set() {\n  // Viewport height\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', vh + 'px');\n};\n\nwindow.addEventListener('DOMContentLoaded', set);\nwindow.addEventListener('resize', set);\n\n//# sourceURL=webpack:///./src/js/init/css-props.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! @/init/css-props */ \"./src/js/init/css-props.js\");\n\n/* eslint-disable */\n\nvar msgStyles = ['\\n %c Made with ♥️ by its.agency %c %c %c https://its.agency/ %c %c \\n', 'color: #fff; background: #333333; padding:5px 0;', 'background: #333333; padding:5px 0;', 'background: #333333; padding:5px 0;', 'color: #fff; background: #333333; padding:5px 0;', 'background: #fff; padding:5px 0;', 'color: #333333; background: #fff; padding:5px 0;'];\nwindow.console.log.apply(console, msgStyles);\n\n//# sourceURL=webpack:///./src/js/pages/index.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Dexdot\\Desktop\\Dev\\_buffet\\src\\js\\pages\\index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/pages/index.js?");

/***/ })

/******/ });