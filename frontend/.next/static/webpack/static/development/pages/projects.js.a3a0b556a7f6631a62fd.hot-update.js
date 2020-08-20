webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./api/filters.ts":
/*!************************!*\
  !*** ./api/filters.ts ***!
  \************************/
/*! exports provided: getDistinct, getAll, getForId, getForFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDistinct\", function() { return getDistinct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAll\", function() { return getAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForId\", function() { return getForId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForFilters\", function() { return getForFilters; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\nvar BASE_API = 'http://localhost:3030';\nvar getDistinct = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var request, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"\".concat(BASE_API, \"/api/projects/distinct\"));\n\n          case 3:\n            request = _context.sent;\n            _context.next = 6;\n            return request.json();\n\n          case 6:\n            response = _context.sent;\n            data = response;\n            return _context.abrupt(\"return\", data);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", console.log(_context.t0));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function getDistinct() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getAll = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var request, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(\"\".concat(BASE_API, \"/api/projects/\"));\n\n          case 3:\n            request = _context2.sent;\n            _context2.next = 6;\n            return request.json();\n\n          case 6:\n            response = _context2.sent;\n            data = response;\n            return _context2.abrupt(\"return\", data);\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", console.log(_context2.t0));\n\n          case 14:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 11]]);\n  }));\n\n  return function getAll() {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getForId = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n    var request, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch(\"\".concat(BASE_API, \"/api/projects/id/\").concat(id));\n\n          case 3:\n            request = _context3.sent;\n            _context3.next = 6;\n            return request.json();\n\n          case 6:\n            response = _context3.sent;\n            data = response;\n            return _context3.abrupt(\"return\", data);\n\n          case 11:\n            _context3.prev = 11;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", console.log(_context3.t0));\n\n          case 14:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 11]]);\n  }));\n\n  return function getForId(_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar getForFilters = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(params) {\n    var request, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return fetch(\"\".concat(BASE_API, \"/api/projects/filters/\").concat(params.country, \"&\").concat(params.products, \"&\").concat(params.paymenData, \"&\").concat(params.transfer, \"&\").concat(params.community));\n\n          case 3:\n            request = _context4.sent;\n            _context4.next = 6;\n            return request.json();\n\n          case 6:\n            response = _context4.sent;\n            data = response;\n            return _context4.abrupt(\"return\", data);\n\n          case 11:\n            _context4.prev = 11;\n            _context4.t0 = _context4[\"catch\"](0);\n            return _context4.abrupt(\"return\", console.log(_context4.t0));\n\n          case 14:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 11]]);\n  }));\n\n  return function getForFilters(_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvZmlsdGVycy50cz9jMjU5Il0sIm5hbWVzIjpbIkJBU0VfQVBJIiwiZ2V0RGlzdGluY3QiLCJmZXRjaCIsInJlcXVlc3QiLCJqc29uIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEFsbCIsImdldEZvcklkIiwiaWQiLCJnZXRGb3JGaWx0ZXJzIiwicGFyYW1zIiwiY291bnRyeSIsInByb2R1Y3RzIiwicGF5bWVuRGF0YSIsInRyYW5zZmVyIiwiY29tbXVuaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLHVCQUFqQjtBQVFPLElBQU1DLFdBQVc7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRURDLEtBQUssV0FBSUYsUUFBSiw0QkFGSjs7QUFBQTtBQUVqQkcsbUJBRmlCO0FBQUE7QUFBQSxtQkFHQUEsT0FBTyxDQUFDQyxJQUFSLEVBSEE7O0FBQUE7QUFHakJDLG9CQUhpQjtBQUlqQkMsZ0JBSmlCLEdBSVZELFFBSlU7QUFBQSw2Q0FNaEJDLElBTmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQVFoQkMsT0FBTyxDQUFDQyxHQUFSLGFBUmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhQLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7QUFXQSxJQUFNUSxNQUFNO0FBQUEsK0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVJUCxLQUFLLFdBQUlGLFFBQUosb0JBRlQ7O0FBQUE7QUFFWkcsbUJBRlk7QUFBQTtBQUFBLG1CQUdLQSxPQUFPLENBQUNDLElBQVIsRUFITDs7QUFBQTtBQUdaQyxvQkFIWTtBQUlaQyxnQkFKWSxHQUlMRCxRQUpLO0FBQUEsOENBTVhDLElBTlc7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBUVhDLE9BQU8sQ0FBQ0MsR0FBUixjQVJXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQU5DLE1BQU07QUFBQTtBQUFBO0FBQUEsR0FBWjtBQVdBLElBQU1DLFFBQVE7QUFBQSwrTEFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUVULEtBQUssV0FBSUYsUUFBSiw4QkFBZ0NXLEVBQWhDLEVBRlA7O0FBQUE7QUFFZFIsbUJBRmM7QUFBQTtBQUFBLG1CQUdHQSxPQUFPLENBQUNDLElBQVIsRUFISDs7QUFBQTtBQUdkQyxvQkFIYztBQUlkQyxnQkFKYyxHQUlQRCxRQUpPO0FBQUEsOENBS2JDLElBTGE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBT2JDLE9BQU8sQ0FBQ0MsR0FBUixjQVBhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJFLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQVdBLElBQU1FLGFBQWE7QUFBQSwrTEFBRyxrQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUhYLEtBQUssV0FDdEJGLFFBRHNCLG1DQUNXYSxNQUFNLENBQUNDLE9BRGxCLGNBQzZCRCxNQUFNLENBQUNFLFFBRHBDLGNBQ2dERixNQUFNLENBQUNHLFVBRHZELGNBQ3FFSCxNQUFNLENBQUNJLFFBRDVFLGNBQ3dGSixNQUFNLENBQUNLLFNBRC9GLEVBRkY7O0FBQUE7QUFFbkJmLG1CQUZtQjtBQUFBO0FBQUEsbUJBS0ZBLE9BQU8sQ0FBQ0MsSUFBUixFQUxFOztBQUFBO0FBS25CQyxvQkFMbUI7QUFNbkJDLGdCQU5tQixHQU1aRCxRQU5ZO0FBQUEsOENBT2xCQyxJQVBrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FTbEJDLE9BQU8sQ0FBQ0MsR0FBUixjQVRrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiSSxhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CIiwiZmlsZSI6Ii4vYXBpL2ZpbHRlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMzAnXG5pbnRlcmZhY2UgcGFyYW1zRmlsdGVycyB7XG4gIGNvdW50cnk6IHN0cmluZ1xuICBwcm9kdWN0czogYm9vbGVhblxuICBwYXltZW5EYXRhOiBib29sZWFuXG4gIHRyYW5zZmVyOiBib29sZWFuXG4gIGNvbW11bml0eTogbnVtYmVyXG59XG5leHBvcnQgY29uc3QgZ2V0RGlzdGluY3QgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke0JBU0VfQVBJfS9hcGkvcHJvamVjdHMvZGlzdGluY3RgKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VcblxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5leHBvcnQgY29uc3QgZ2V0QWxsID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtCQVNFX0FQSX0vYXBpL3Byb2plY3RzL2ApXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBnZXRGb3JJZCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAke0JBU0VfQVBJfS9hcGkvcHJvamVjdHMvaWQvJHtpZH1gKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9yRmlsdGVycyA9IGFzeW5jIChwYXJhbXM6IHBhcmFtc0ZpbHRlcnMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtCQVNFX0FQSX0vYXBpL3Byb2plY3RzL2ZpbHRlcnMvJHtwYXJhbXMuY291bnRyeX0mJHtwYXJhbXMucHJvZHVjdHN9JiR7cGFyYW1zLnBheW1lbkRhdGF9JiR7cGFyYW1zLnRyYW5zZmVyfSYke3BhcmFtcy5jb21tdW5pdHl9YFxuICAgIClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/filters.ts\n");

/***/ })

})