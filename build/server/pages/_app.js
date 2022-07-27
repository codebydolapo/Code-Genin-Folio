/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/reducers/reducers.tsx":
/*!******************************************!*\
  !*** ./components/reducers/reducers.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"menuState\": () => (/* binding */ menuState)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst menuState = (state = false, action) => {\n  switch (action.type) {\n    case 'MENU_ACTIVE':\n      return true;\n\n    case 'MENU_INACTIVE':\n      return false;\n\n    default:\n      return state;\n  }\n};\nconst allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  menuState\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allReducers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHVjZXJzL3JlZHVjZXJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFHTyxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLEtBQVQsRUFBZ0JDLE1BQWhCLEtBQXlDO0VBQzlELFFBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtJQUNJLEtBQUssYUFBTDtNQUNJLE9BQU8sSUFBUDs7SUFDSixLQUFLLGVBQUw7TUFDSSxPQUFPLEtBQVA7O0lBQ0o7TUFDSSxPQUFPRixLQUFQO0VBTlI7QUFRSCxDQVRNO0FBV1AsTUFBTUcsV0FBVyxHQUFHTCxzREFBZSxDQUFDO0VBQ2hDQztBQURnQyxDQUFELENBQW5DO0FBSUEsaUVBQWVJLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZHVjZXJzL3JlZHVjZXJzLnRzeD8zOGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWVudVN0YXRlID0gKHN0YXRlID0gZmFsc2UsIGFjdGlvbjoge3R5cGU6IHN0cmluZ30pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlICdNRU5VX0FDVElWRSc6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgY2FzZSAnTUVOVV9JTkFDVElWRSc6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhbGxSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBtZW51U3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbFJlZHVjZXJzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm1lbnVTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFsbFJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reducers/reducers.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_reducers_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reducers/reducers */ \"./components/reducers/reducers.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\iyiola\\\\iyiola\\\\pages\\\\_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_components_reducers_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: store,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxLQUFLLEdBQUdILGtEQUFXLENBQUNFLHFFQUFELENBQXpCOztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUFtRDtFQUNqRCxvQkFDRSw4REFBQyxpREFBRDtJQUFVLEtBQUssRUFBSUgsS0FBbkI7SUFBQSx1QkFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFLRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGFsbFJlZHVjZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvcmVkdWNlcnMvcmVkdWNlcnMnXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcnMpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmUgPSB7c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJQcm92aWRlciIsImFsbFJlZHVjZXJzIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();