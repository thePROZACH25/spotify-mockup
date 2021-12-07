"use strict";
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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        __source: {\n            fileName: \"/Users/ZachLedford/Desktop/Side Projects/spotify-mockup/pages/login.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/ZachLedford/Desktop/Side Projects/spotify-mockup/pages/login.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ZachLedford/Desktop/Side Projects/spotify-mockup/pages/login.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                        className: \"bg-[#18d860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(provider.id, {\n                                callbackUrl: '/'\n                            })\n                        ,\n                        __source: {\n                            fileName: \"/Users/ZachLedford/Desktop/Side Projects/spotify-mockup/pages/login.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    })\n                }, provider.name)\n            )\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDNkI7U0FFN0NHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QixNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF3RTs7Ozs7Ozs7aUZBQ3BGQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBVztnQkFBQ0UsR0FBRyxFQUFDLENBQWlDO2dCQUFDQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7WUFFdEVDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxTQUFTLEVBQUVRLEdBQUcsRUFBRUMsUUFBUSx3RUFDcENSLENBQUc7Ozs7Ozs7b0dBQ0RTLENBQU07d0JBQUNSLFNBQVMsRUFBQyxDQUEwQzt3QkFDNURTLE9BQU8sTUFBUWIsdURBQU0sQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ0MsV0FBVyxFQUFFLENBQUc7NEJBQUEsQ0FBQzs7Ozs7Ozs7OzRCQUNyRCxDQUFXOzRCQUFDSixRQUFRLENBQUNLLElBQUk7OzttQkFIbEJMLFFBQVEsQ0FBQ0ssSUFBSTs7OztBQVEvQixDQUFDO0FBRUQsaUVBQWVmLEtBQUssRUFBQztBQUVkLGVBQWVnQixrQkFBa0IsR0FBRyxDQUFDO0lBQzFDLEtBQUssQ0FBQ2YsU0FBUyxHQUFHLEtBQUssQ0FBQ0gsNkRBQVk7SUFFcEMsTUFBTSxDQUFDLENBQUM7UUFDTm1CLEtBQUssRUFBRSxDQUFDO1lBQ05oQixTQUFTO1FBQ1gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZnVuY3Rpb24gTG9naW4oeyBwcm92aWRlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ibGFjayBtaW4taC1zY3JlZW4gdy1mdWxsIGp1c3RpZnktY2VudGVyJz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBtYi01XCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzl4bFwiIGFsdD1cIlwiIC8+XG4gICAgICBcbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLVsjMThkODYwXSB0ZXh0LXdoaXRlIHAtNSByb3VuZGVkLWZ1bGwnIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCwgeyBjYWxsYmFja1VybDogJy8nfSl9XG4gICAgICAgICAgPkxvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImdldFByb3ZpZGVycyIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJjYWxsYmFja1VybCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();