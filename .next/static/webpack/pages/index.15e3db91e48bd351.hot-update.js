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

/***/ "./components/BookingSummary.js":
/*!**************************************!*\
  !*** ./components/BookingSummary.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/bookingSummary.module.css */ \"./styles/bookingSummary.module.css\");\n/* harmony import */ var _styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BookingSummary = (param)=>{\n    let { booking, onBackToForm } = param;\n    if (!booking) return null;\n    // Format date and time\n    const formattedDate = new Date(booking.date).toLocaleString('en-US', {\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric',\n        hour: '2-digit',\n        minute: '2-digit'\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading),\n                children: \"Booking Confirmation\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    booking.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Contact:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    booking.contact\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Date & Time:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    formattedDate\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Guests:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    booking.guests\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_bookingSummary_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),\n                onClick: onBackToForm,\n                children: \"Make Another Booking\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kunda\\\\OneDrive\\\\Desktop\\\\vs code\\\\KARTHIK\\\\Restaurant Booking\\\\restaurant-booking-frontend\\\\components\\\\BookingSummary.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BookingSummary;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingSummary);\nvar _c;\n$RefreshReg$(_c, \"BookingSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tpbmdTdW1tYXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5RDtBQUV6RCxNQUFNQyxpQkFBaUI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUM3QyxJQUFJLENBQUNELFNBQVMsT0FBTztJQUVyQix1QkFBdUI7SUFDdkIsTUFBTUUsZ0JBQWdCLElBQUlDLEtBQUtILFFBQVFJLElBQUksRUFBRUMsY0FBYyxDQUFDLFNBQVM7UUFDakVDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsUUFBUTtJQUNaO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdkLG9GQUFnQjs7MEJBQzVCLDhEQUFDZ0I7Z0JBQUdGLFdBQVdkLGtGQUFjOzBCQUFFOzs7Ozs7MEJBQy9CLDhEQUFDa0I7Z0JBQUVKLFdBQVdkLGlGQUFhOztrQ0FDdkIsOERBQUNvQjtrQ0FBTzs7Ozs7O29CQUFjO29CQUFFbEIsUUFBUW1CLElBQUk7Ozs7Ozs7MEJBRXhDLDhEQUFDSDtnQkFBRUosV0FBV2QsaUZBQWE7O2tDQUN2Qiw4REFBQ29CO2tDQUFPOzs7Ozs7b0JBQWlCO29CQUFFbEIsUUFBUW9CLE9BQU87Ozs7Ozs7MEJBRTlDLDhEQUFDSjtnQkFBRUosV0FBV2QsaUZBQWE7O2tDQUN2Qiw4REFBQ29CO2tDQUFPOzs7Ozs7b0JBQXFCO29CQUFFaEI7Ozs7Ozs7MEJBRW5DLDhEQUFDYztnQkFBRUosV0FBV2QsaUZBQWE7O2tDQUN2Qiw4REFBQ29CO2tDQUFPOzs7Ozs7b0JBQWdCO29CQUFFbEIsUUFBUXFCLE1BQU07Ozs7Ozs7MEJBRTVDLDhEQUFDQztnQkFBT1YsV0FBV2QsaUZBQWE7Z0JBQUV5QixTQUFTdEI7MEJBQWM7Ozs7Ozs7Ozs7OztBQUtyRTtLQWhDTUY7QUFrQ04saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca3VuZGFcXE9uZURyaXZlXFxEZXNrdG9wXFx2cyBjb2RlXFxLQVJUSElLXFxSZXN0YXVyYW50IEJvb2tpbmdcXHJlc3RhdXJhbnQtYm9va2luZy1mcm9udGVuZFxcY29tcG9uZW50c1xcQm9va2luZ1N1bW1hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYm9va2luZ1N1bW1hcnkubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBCb29raW5nU3VtbWFyeSA9ICh7IGJvb2tpbmcsIG9uQmFja1RvRm9ybSB9KSA9PiB7XHJcbiAgICBpZiAoIWJvb2tpbmcpIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIEZvcm1hdCBkYXRlIGFuZCB0aW1lXHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoYm9va2luZy5kYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5Cb29raW5nIENvbmZpcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbH0+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+IHtib29raW5nLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29udGFjdDo8L3N0cm9uZz4ge2Jvb2tpbmcuY29udGFjdH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlICYgVGltZTo8L3N0cm9uZz4ge2Zvcm1hdHRlZERhdGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R3Vlc3RzOjwvc3Ryb25nPiB7Ym9va2luZy5ndWVzdHN9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e29uQmFja1RvRm9ybX0+XHJcbiAgICAgICAgICAgICAgICBNYWtlIEFub3RoZXIgQm9va2luZ1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29raW5nU3VtbWFyeTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJvb2tpbmdTdW1tYXJ5IiwiYm9va2luZyIsIm9uQmFja1RvRm9ybSIsImZvcm1hdHRlZERhdGUiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiaGVhZGluZyIsInAiLCJkZXRhaWwiLCJzdHJvbmciLCJuYW1lIiwiY29udGFjdCIsImd1ZXN0cyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BookingSummary.js\n"));

/***/ })

});