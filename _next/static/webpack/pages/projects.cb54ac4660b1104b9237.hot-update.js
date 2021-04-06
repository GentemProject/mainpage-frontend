webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  query getOrganizationsFilter(\\n    $limit: Float\\n    $page: Float\\n    $country: String\\n    $causeId: String\\n  ) {\\n    getOrganizations(\\n      limit: $limit\\n      page: $page\\n      country: $country\\n      causeId: $causeId\\n    ) {\\n      id\\n      name\\n      slug\\n      country\\n      logoUrl\\n      donationLinks\\n      donationBankAccountName\\n      causes {\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // Components & Usables\n\n\n// Schema\n\n/* const querySchema = gql`\n  query Organizations(\n    $causeId: String\n    $country: String\n    $donationLinks: Boolean\n    $donationBankAccountName: Boolean\n    $donationProducts: Boolean\n    $endCursor: String\n  ) {\n    getOrganizations(\n      first: 12\n      endCursor: $endCursor\n      causeId: $causeId\n      country: $country\n      donationLinks: $donationLinks\n      donationBankAccountName: $donationBankAccountName\n      donationProducts: $donationProducts\n    ) {\n      pageData {\n        totalOrganizations\n        hasNextPage\n        endCursor\n      }\n      organizations {\n        id\n        name\n        slug\n        country\n        logoUrl\n        donationLinks\n        donationBankAccountName\n        donationProducts\n        causes {\n          name\n        }\n      }\n    }\n  }\n` */\nvar querySchema = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"gql\"])(_templateObject());\nvar filtersDefault = {\n  country: '',\n  causeId: '',\n  page: 0\n  /*   donationLinks: false,\n  donationBankAccountName: false,\n   donationProducts: false, */\n\n  /*   endCursor: '', */\n\n};\n\nvar OngList = function OngList(props) {\n  _s();\n\n  var query = props.query;\n  console.log(props); // Filter State\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(filtersDefault),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"])(querySchema, {\n    variables: filters\n  }),\n      refetch = _useQuery.refetch,\n      fetchMore = _useQuery.fetchMore; // Filter handlers\n\n\n  var handleCountry = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(country) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                country: country\n              }));\n\n            case 2:\n              _context.next = 4;\n              return refetch();\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleCountry(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleCauseId = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(causeId) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                causeId: causeId\n              }));\n\n            case 2:\n              _context2.next = 4;\n              return refetch();\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleCauseId(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /*  \n  const handleDonationLinks = async (boolean) => {\n    await setFilters({ ...filters, donationLinks: boolean })\n    await refetch()\n  } */\n\n  /*   const handleDonationBankAccountName = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationBankAccountName: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n  /*   const handleDonationProducts = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationProducts: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n\n  var resetFilters = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return setFilters(filtersDefault);\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function resetFilters() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleNextPage = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                page: filters.page + 1\n              }));\n\n            case 2:\n              fetchMore({\n                variables: filters,\n                updateQuery: function updateQuery(prevResult, _ref5) {\n                  var _fetchMoreResult$getO;\n\n                  var fetchMoreResult = _ref5.fetchMoreResult;\n                  if (!fetchMoreResult) return prevResult;\n                  return {\n                    getOrganizations: _objectSpread(_objectSpread({}, query.data.getOrganizations), {}, {\n                      data: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query.data.getOrganizations), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : (_fetchMoreResult$getO = fetchMoreResult.getOrganizations) === null || _fetchMoreResult$getO === void 0 ? void 0 : _fetchMoreResult$getO.organizations))\n                    })\n                  };\n                  /*         fetchMoreResult.getOrganizations = [\n                    ...prevResult.getOrganizations,\n                    ...fetchMoreResult.getOrganizations,\n                  ]\n                  return fetchMoreResult */\n                }\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleNextPage() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 9\n    }\n  }, \"Organizaciones | gentem\")), console.log(props.query.data.getOrganizations));\n};\n\n_s(OngList, \"FNJoC3F6Az2SkrERAjWtAQTB3lY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"]];\n});\n\n_c = OngList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OngList);\n\nvar _c;\n\n$RefreshReg$(_c, \"OngList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzRhOTIiXSwibmFtZXMiOlsicXVlcnlTY2hlbWEiLCJncWwiLCJmaWx0ZXJzRGVmYXVsdCIsImNvdW50cnkiLCJjYXVzZUlkIiwicGFnZSIsIk9uZ0xpc3QiLCJwcm9wcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInJlZmV0Y2giLCJmZXRjaE1vcmUiLCJoYW5kbGVDb3VudHJ5IiwiaGFuZGxlQ2F1c2VJZCIsInJlc2V0RmlsdGVycyIsImhhbmRsZU5leHRQYWdlIiwidXBkYXRlUXVlcnkiLCJwcmV2UmVzdWx0IiwiZmV0Y2hNb3JlUmVzdWx0IiwiZ2V0T3JnYW5pemF0aW9ucyIsImRhdGEiLCJvcmdhbml6YXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FHQTs7QUFLQTtBQTRCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCO0FBMkJBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsU0FBTyxFQUFFLEVBRFk7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxNQUFJLEVBQUU7QUFDTjs7OztBQUlBOztBQVJxQixDQUF2Qjs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTREO0FBQUE7O0FBQUEsTUFDbEVDLEtBRGtFLEdBQ3hERCxLQUR3RCxDQUNsRUMsS0FEa0U7QUFFMUVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBRjBFLENBRzFFOztBQUgwRSxrQkFJNUNJLHNEQUFRLENBQUNULGNBQUQsQ0FKb0M7QUFBQSxNQUluRVUsT0FKbUU7QUFBQSxNQUkxREMsVUFKMEQ7O0FBQUEsa0JBSzNDQywrREFBUSxDQUFPZCxXQUFQLEVBQW9CO0FBQ3pEZSxhQUFTLEVBQUVIO0FBRDhDLEdBQXBCLENBTG1DO0FBQUEsTUFLbEVJLE9BTGtFLGFBS2xFQSxPQUxrRTtBQUFBLE1BS3pEQyxTQUx5RCxhQUt6REEsU0FMeUQsRUFRMUU7OztBQUNBLE1BQU1DLGFBQWE7QUFBQSxnTUFBRyxpQkFBT2YsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZFUsVUFBVSxpQ0FBTUQsT0FBTjtBQUFlVCx1QkFBTyxFQUFFQTtBQUF4QixpQkFESTs7QUFBQTtBQUFBO0FBQUEscUJBRWRhLE9BQU8sRUFGTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiRSxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQUlBLE1BQU1DLGFBQWE7QUFBQSxpTUFBRyxrQkFBT2YsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZFMsVUFBVSxpQ0FBTUQsT0FBTjtBQUFlUix1QkFBTyxFQUFFQTtBQUF4QixpQkFESTs7QUFBQTtBQUFBO0FBQUEscUJBRWRZLE9BQU8sRUFGTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiRyxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5CO0FBSUE7Ozs7OztBQUtBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7OztBQVFBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYlAsVUFBVSxDQUFDWCxjQUFELENBREc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmtCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBSUEsTUFBTUMsY0FBYztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNmUixVQUFVLGlDQUFNRCxPQUFOO0FBQWVQLG9CQUFJLEVBQUVPLE9BQU8sQ0FBQ1AsSUFBUixHQUFlO0FBQXBDLGlCQURLOztBQUFBO0FBRXJCWSx1QkFBUyxDQUFDO0FBQ1JGLHlCQUFTLEVBQUVILE9BREg7QUFFUlUsMkJBQVcsRUFBRSxxQkFBQ0MsVUFBRCxTQUEwQztBQUFBOztBQUFBLHNCQUF0QkMsZUFBc0IsU0FBdEJBLGVBQXNCO0FBQ3JELHNCQUFJLENBQUNBLGVBQUwsRUFBc0IsT0FBT0QsVUFBUDtBQUN0Qix5QkFBTztBQUNMRSxvQ0FBZ0Isa0NBQ1hqQixLQUFLLENBQUNrQixJQUFOLENBQVdELGdCQURBO0FBRWRDLDBCQUFJLHlHQUNDbEIsS0FBSyxDQUFDa0IsSUFBTixDQUFXRCxnQkFEWixnR0FFQ0QsZUFGRCxhQUVDQSxlQUZELGdEQUVDQSxlQUFlLENBQUVDLGdCQUZsQiwwREFFQyxzQkFBbUNFLGFBRnBDO0FBRlU7QUFEWCxtQkFBUDtBQVNBOzs7OztBQUtEO0FBbEJPLGVBQUQsQ0FBVDs7QUFGcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZE4sY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUF1QkEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBREYsRUFLR1osT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ0MsS0FBTixDQUFZa0IsSUFBWixDQUFpQkQsZ0JBQTdCLENBTEgsQ0FERjtBQXNCRCxDQXZGRDs7R0FBTW5CLE87VUFLMkJRLHVEOzs7S0FMM0JSLE87O0FBeUZTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gQ29tcG9uZW50cyAmIFVzYWJsZXNcbmltcG9ydCBDYXVzZUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3NwZWNpZmljL2NhdXNlTGlzdCdcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcnMgfSBmcm9tICdpbnRlcmZhY2VzL29yZ2FuaXphdGlvbidcblxuaW50ZXJmYWNlIG9yZ2FuaXphdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHNsdWc6IHN0cmluZ1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgbG9nb1VybDogc3RyaW5nXG4gIGRvbmF0aW9uTGlua3M6IHN0cmluZ1tdXG4gIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiBzdHJpbmdcbiAgZG9uYXRpb25Qcm9kdWN0czogc3RyaW5nXG4gIGNhdXNlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcbiAgdG90YWxPcmdhbml6YXRpb25zOiBudW1iZXJcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW5cbiAgZW5kQ3Vyc29yOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIGRhdGEge1xuICBnZXRPcmdhbml6YXRpb25zOiB7XG4gICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9uW11cbiAgfVxufVxuXG4vLyBTY2hlbWFcbi8qIGNvbnN0IHF1ZXJ5U2NoZW1hID0gZ3FsYFxuICBxdWVyeSBPcmdhbml6YXRpb25zKFxuICAgICRjYXVzZUlkOiBTdHJpbmdcbiAgICAkY291bnRyeTogU3RyaW5nXG4gICAgJGRvbmF0aW9uTGlua3M6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25Qcm9kdWN0czogQm9vbGVhblxuICAgICRlbmRDdXJzb3I6IFN0cmluZ1xuICApIHtcbiAgICBnZXRPcmdhbml6YXRpb25zKFxuICAgICAgZmlyc3Q6IDEyXG4gICAgICBlbmRDdXJzb3I6ICRlbmRDdXJzb3JcbiAgICAgIGNhdXNlSWQ6ICRjYXVzZUlkXG4gICAgICBjb3VudHJ5OiAkY291bnRyeVxuICAgICAgZG9uYXRpb25MaW5rczogJGRvbmF0aW9uTGlua3NcbiAgICAgIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgIGRvbmF0aW9uUHJvZHVjdHM6ICRkb25hdGlvblByb2R1Y3RzXG4gICAgKSB7XG4gICAgICBwYWdlRGF0YSB7XG4gICAgICAgIHRvdGFsT3JnYW5pemF0aW9uc1xuICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHNsdWdcbiAgICAgICAgY291bnRyeVxuICAgICAgICBsb2dvVXJsXG4gICAgICAgIGRvbmF0aW9uTGlua3NcbiAgICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgICAgZG9uYXRpb25Qcm9kdWN0c1xuICAgICAgICBjYXVzZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYCAqL1xuXG5jb25zdCBxdWVyeVNjaGVtYSA9IGdxbGBcbiAgcXVlcnkgZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcihcbiAgICAkbGltaXQ6IEZsb2F0XG4gICAgJHBhZ2U6IEZsb2F0XG4gICAgJGNvdW50cnk6IFN0cmluZ1xuICAgICRjYXVzZUlkOiBTdHJpbmdcbiAgKSB7XG4gICAgZ2V0T3JnYW5pemF0aW9ucyhcbiAgICAgIGxpbWl0OiAkbGltaXRcbiAgICAgIHBhZ2U6ICRwYWdlXG4gICAgICBjb3VudHJ5OiAkY291bnRyeVxuICAgICAgY2F1c2VJZDogJGNhdXNlSWRcbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBzbHVnXG4gICAgICBjb3VudHJ5XG4gICAgICBsb2dvVXJsXG4gICAgICBkb25hdGlvbkxpbmtzXG4gICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZVxuICAgICAgY2F1c2VzIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBmaWx0ZXJzRGVmYXVsdCA9IHtcbiAgY291bnRyeTogJycsXG4gIGNhdXNlSWQ6ICcnLFxuICBwYWdlOiAwLFxuICAvKiAgIGRvbmF0aW9uTGlua3M6IGZhbHNlLFxuICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogZmFsc2UsXG5cbiAgZG9uYXRpb25Qcm9kdWN0czogZmFsc2UsICovXG4gIC8qICAgZW5kQ3Vyc29yOiAnJywgKi9cbn1cbmNvbnN0IE9uZ0xpc3QgPSAocHJvcHM6IHsgcXVlcnk6IGdldE9yZ2FuaXphdGlvbnNGaWx0ZXJzIH0pOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHByb3BzXG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICAvLyBGaWx0ZXIgU3RhdGVcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoZmlsdGVyc0RlZmF1bHQpXG4gIGNvbnN0IHsgcmVmZXRjaCwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeTxkYXRhPihxdWVyeVNjaGVtYSwge1xuICAgIHZhcmlhYmxlczogZmlsdGVycyxcbiAgfSlcbiAgLy8gRmlsdGVyIGhhbmRsZXJzXG4gIGNvbnN0IGhhbmRsZUNvdW50cnkgPSBhc3luYyAoY291bnRyeSkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoeyAuLi5maWx0ZXJzLCBjb3VudHJ5OiBjb3VudHJ5IH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2F1c2VJZCA9IGFzeW5jIChjYXVzZUlkKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIGNhdXNlSWQ6IGNhdXNlSWQgfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfVxuICAvKiAgXG4gIGNvbnN0IGhhbmRsZURvbmF0aW9uTGlua3MgPSBhc3luYyAoYm9vbGVhbikgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoeyAuLi5maWx0ZXJzLCBkb25hdGlvbkxpbmtzOiBib29sZWFuIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvbkJhbmtBY2NvdW50TmFtZSA9IGFzeW5jIChib29sZWFuKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7XG4gICAgICAuLi5maWx0ZXJzLFxuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IGJvb2xlYW4sXG4gICAgICBlbmRDdXJzb3I6ICcnLFxuICAgIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvblByb2R1Y3RzID0gYXN5bmMgKGJvb2xlYW4pID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBkb25hdGlvblByb2R1Y3RzOiBib29sZWFuLFxuICAgICAgZW5kQ3Vyc29yOiAnJyxcbiAgICB9KVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICB9ICovXG4gIGNvbnN0IHJlc2V0RmlsdGVycyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRlcnNEZWZhdWx0KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIHBhZ2U6IGZpbHRlcnMucGFnZSArIDEgfSlcbiAgICBmZXRjaE1vcmUoe1xuICAgICAgdmFyaWFibGVzOiBmaWx0ZXJzLFxuICAgICAgdXBkYXRlUXVlcnk6IChwcmV2UmVzdWx0OiBhbnksIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2UmVzdWx0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0T3JnYW5pemF0aW9uczoge1xuICAgICAgICAgICAgLi4ucXVlcnkuZGF0YS5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAuLi5xdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgICAgIC4uLmZldGNoTW9yZVJlc3VsdD8uZ2V0T3JnYW5pemF0aW9ucz8ub3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICAvKiAgICAgICAgIGZldGNoTW9yZVJlc3VsdC5nZXRPcmdhbml6YXRpb25zID0gW1xuICAgICAgICAgIC4uLnByZXZSZXN1bHQuZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAuLi5mZXRjaE1vcmVSZXN1bHQuZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gZmV0Y2hNb3JlUmVzdWx0ICovXG4gICAgICB9LFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Pcmdhbml6YWNpb25lcyB8IGdlbnRlbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnMpfVxuICAgICAgey8qICAgICAgIDxDYXVzZUxpc3RcbiAgICAgICAgc2VsZWN0PXt7IGhhbmRsZUNhdXNlSWQsIGhhbmRsZUNvdW50cnkgfX1cbiAgICAgICAgY2hlY2tib3g9e3tcbiAgICAgICAgICBoYW5kbGVEb25hdGlvbkxpbmtzLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uQmFua0FjY291bnROYW1lLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uUHJvZHVjdHMsXG4gICAgICAgIH19XG4gICAgICAgIGhhbmRsZU5leHRQYWdlPXtoYW5kbGVOZXh0UGFnZX1cbiAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgcmVzZXRGaWx0ZXJzPXtyZXNldEZpbHRlcnN9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIGRhdGE9eyFsb2FkaW5nICYmIGRhdGEuZ2V0T3JnYW5pemF0aW9uc31cbiAgICAgIC8+ICovfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9uZ0xpc3RcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICBjb25zdCBxdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IHF1ZXJ5U2NoZW1hLFxuICAgIHZhcmlhYmxlczogZmlsdGVyc0RlZmF1bHQsXG4gIH0pXG4gIGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcXVlcnksXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n");

/***/ })

})