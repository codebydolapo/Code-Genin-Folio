"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/menu.module.css */ \"./styles/menu.module.css\");\n/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/actions */ \"./components/reducers/actions.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\iyiola\\\\iyiola\\\\components\\\\Menu.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Menu() {\n  _s();\n\n  var menuState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {\n    return state.menuState;\n  });\n\n  function handleBlog() {\n    if (menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_2__.deactivateMenu)());\n    } else if (!menuState) {\n      dispatch((0,_reducers_actions__WEBPACK_IMPORTED_MODULE_2__.activateMenu)());\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: menuState ? (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuActive) : (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      onClick: function onClick() {\n        return window.open(\"https://blog.mohammedadekunle.com.ng/\", \"_blank\");\n      },\n      children: \"Blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      onClick: function onClick() {\n        return window.open(\"https://mohammedadekunle.com.ng/assets/mohammed-adekunle-resume.pdf\", \"_blank\");\n      },\n      children: \"Resume\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/#about\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Menu, \"0wzFSyDHB7ixy8XalVpeRs6ituk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSyxJQUFULEdBQWdCO0VBQUE7O0VBQ2QsSUFBTUMsU0FBUyxHQUFHTCx3REFBVyxDQUFDLFVBQUNNLEtBQUQ7SUFBQSxPQUFnQkEsS0FBSyxDQUFDRCxTQUF0QjtFQUFBLENBQUQsQ0FBN0I7O0VBRUEsU0FBU0UsVUFBVCxHQUFxQjtJQUNqQixJQUFJRixTQUFKLEVBQWU7TUFDYkcsUUFBUSxDQUFDTCxpRUFBYyxFQUFmLENBQVI7SUFDRCxDQUZELE1BRU8sSUFBSSxDQUFDRSxTQUFMLEVBQWdCO01BQ3JCRyxRQUFRLENBQUNOLCtEQUFZLEVBQWIsQ0FBUjtJQUNEO0VBQ0o7O0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUVHLFNBQVMsR0FBR04sMkVBQUgsR0FBdUJBLHFFQUFoRDtJQUFBLHdCQUNFO01BQ0UsT0FBTyxFQUFFO1FBQUEsT0FDUFksTUFBTSxDQUFDQyxJQUFQLENBQVksdUNBQVosRUFBcUQsUUFBckQsQ0FETztNQUFBLENBRFg7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQVFFO01BQ0UsT0FBTyxFQUFFO1FBQUEsT0FDUEQsTUFBTSxDQUFDQyxJQUFQLENBQ0UscUVBREYsRUFFRSxRQUZGLENBRE87TUFBQSxDQURYO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUkYsZUFrQkUsOERBQUMsa0RBQUQ7TUFBTSxJQUFJLEVBQUMsU0FBWDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXdCRDs7R0FuQ1FSO1VBQ1dKOzs7S0FEWEk7QUFxQ1QsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51LnRzeD82MWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9tZW51Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHthY3RpdmF0ZU1lbnUsIGRlYWN0aXZhdGVNZW51fSBmcm9tICcuL3JlZHVjZXJzL2FjdGlvbnMnXHJcblxyXG5mdW5jdGlvbiBNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5tZW51U3RhdGUpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVCbG9nKCl7XHJcbiAgICAgIGlmIChtZW51U3RhdGUpIHtcclxuICAgICAgICBkaXNwYXRjaChkZWFjdGl2YXRlTWVudSgpKTtcclxuICAgICAgfSBlbHNlIGlmICghbWVudVN0YXRlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goYWN0aXZhdGVNZW51KCkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e21lbnVTdGF0ZSA/IHN0eWxlcy5tZW51QWN0aXZlIDogc3R5bGVzLm1lbnV9PlxyXG4gICAgICA8cFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vYmxvZy5tb2hhbW1lZGFkZWt1bmxlLmNvbS5uZy9cIiwgXCJfYmxhbmtcIilcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICBCbG9nXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHBcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9tb2hhbW1lZGFkZWt1bmxlLmNvbS5uZy9hc3NldHMvbW9oYW1tZWQtYWRla3VubGUtcmVzdW1lLnBkZlwiLFxyXG4gICAgICAgICAgICBcIl9ibGFua1wiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgUmVzdW1lXHJcbiAgICAgIDwvcD5cclxuICAgICAgPExpbmsgaHJlZj1cIi8jYWJvdXRcIj5cclxuICAgICAgICA8cD5BYm91dDwvcD5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlbGVjdG9yIiwiTGluayIsImFjdGl2YXRlTWVudSIsImRlYWN0aXZhdGVNZW51IiwiTWVudSIsIm1lbnVTdGF0ZSIsInN0YXRlIiwiaGFuZGxlQmxvZyIsImRpc3BhdGNoIiwibWVudUFjdGl2ZSIsIm1lbnUiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.tsx\n"));

/***/ })

});