webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/specific/causeList */ \"./components/specific/causeList/index.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  query getOrganizationsFilter(\\n    $page: Float\\n    $country: String\\n    $causeId: String\\n  ) {\\n    getOrganizations(\\n      limit: 12\\n      page: $page\\n      country: $country\\n      causeId: $causeId\\n    ) {\\n      id\\n      name\\n      slug\\n      country\\n      logoUrl\\n      donationLinks\\n      donationBankAccountName\\n      causes {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // Components & Usables\n\n // Apollo\n\n\n// Schema\n\n/* const querySchema = gql`\n  query Organizations(\n    $causeId: String\n    $country: String\n    $donationLinks: Boolean\n    $donationBankAccountName: Boolean\n    $donationProducts: Boolean\n    $endCursor: String\n  ) {\n    getOrganizations(\n      first: 12\n      endCursor: $endCursor\n      causeId: $causeId\n      country: $country\n      donationLinks: $donationLinks\n      donationBankAccountName: $donationBankAccountName\n      donationProducts: $donationProducts\n    ) {\n      pageData {\n        totalOrganizations\n        hasNextPage\n        endCursor\n      }\n      organizations {\n        id\n        name\n        slug\n        country\n        logoUrl\n        donationLinks\n        donationBankAccountName\n        donationProducts\n        causes {\n          name\n        }\n      }\n    }\n  }\n` */\nvar querySchema = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"gql\"])(_templateObject());\nvar filtersDefault = {\n  country: '',\n  causeId: '',\n  page: 0\n  /*   donationLinks: false,\n  donationBankAccountName: false,\n   donationProducts: false, */\n\n  /*   endCursor: '', */\n\n};\n\nvar OngList = function OngList(props) {\n  _s();\n\n  var query = props.query; // Filter State\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(filtersDefault),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"])(querySchema, {\n    variables: filters\n  }),\n      refetch = _useQuery.refetch,\n      fetchMore = _useQuery.fetchMore; // Filter handlers\n\n\n  var handleCountry = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(country) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                country: country,\n                page: 0\n              }));\n\n            case 2:\n              _context.next = 4;\n              return refetch();\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleCountry(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleCauseId = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(causeId) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                causeId: causeId,\n                page: 0\n              }));\n\n            case 2:\n              _context2.next = 4;\n              return refetch();\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleCauseId(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /*  \n  const handleDonationLinks = async (boolean) => {\n    await setFilters({ ...filters, donationLinks: boolean })\n    await refetch()\n  } */\n\n  /*   const handleDonationBankAccountName = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationBankAccountName: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n  /*   const handleDonationProducts = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationProducts: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n\n  var resetFilters = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return setFilters(filtersDefault);\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function resetFilters() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleNextPage = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                page: filters.page + 1\n              }));\n\n            case 2:\n              fetchMore({\n                variables: filters,\n                updateQuery: function updateQuery(prevResult, _ref5) {\n                  var _fetchMoreResult$getO;\n\n                  var fetchMoreResult = _ref5.fetchMoreResult;\n                  if (!fetchMoreResult) return prevResult;\n                  console.log(prevResult, 'prev');\n                  console.log(fetchMoreResult, 'more');\n                  return {\n                    getOrganizations: _objectSpread(_objectSpread({}, query.data.getOrganizations), {}, {\n                      data: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query.data.getOrganizations), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : (_fetchMoreResult$getO = fetchMoreResult.getOrganizations) === null || _fetchMoreResult$getO === void 0 ? void 0 : _fetchMoreResult$getO.organizations))\n                    })\n                  };\n                  /*         fetchMoreResult.getOrganizations = [\n                    ...prevResult.getOrganizations,\n                    ...fetchMoreResult.getOrganizations,\n                  ]\n                  return fetchMoreResult */\n                }\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleNextPage() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 9\n    }\n  }, \"Organizaciones | gentem\")), __jsx(_components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    select: {\n      handleCauseId: handleCauseId,\n      handleCountry: handleCountry\n    }\n    /*  checkbox={{\n      handleDonationLinks,\n      handleDonationBankAccountName,\n      handleDonationProducts,\n    }} */\n    ,\n    handleNextPage: handleNextPage,\n    filters: filters,\n    resetFilters: resetFilters,\n    loading: query.loading,\n    data: !query.loading && query.data.getOrganizations,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(OngList, \"FNJoC3F6Az2SkrERAjWtAQTB3lY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"]];\n});\n\n_c = OngList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OngList);\n\nvar _c;\n\n$RefreshReg$(_c, \"OngList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzRhOTIiXSwibmFtZXMiOlsicXVlcnlTY2hlbWEiLCJncWwiLCJmaWx0ZXJzRGVmYXVsdCIsImNvdW50cnkiLCJjYXVzZUlkIiwicGFnZSIsIk9uZ0xpc3QiLCJwcm9wcyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicmVmZXRjaCIsImZldGNoTW9yZSIsImhhbmRsZUNvdW50cnkiLCJoYW5kbGVDYXVzZUlkIiwicmVzZXRGaWx0ZXJzIiwiaGFuZGxlTmV4dFBhZ2UiLCJ1cGRhdGVRdWVyeSIsInByZXZSZXN1bHQiLCJmZXRjaE1vcmVSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZ2V0T3JnYW5pemF0aW9ucyIsImRhdGEiLCJvcmdhbml6YXRpb25zIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtDQUdBOztDQUdBOztBQUVBO0FBNEJBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0EsSUFBTUEsV0FBVyxHQUFHQywwREFBSCxtQkFBakI7QUEyQkEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxTQUFPLEVBQUUsRUFEWTtBQUVyQkMsU0FBTyxFQUFFLEVBRlk7QUFHckJDLE1BQUksRUFBRTtBQUNOOzs7O0FBSUE7O0FBUnFCLENBQXZCOztBQVVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBNEQ7QUFBQTs7QUFBQSxNQUNsRUMsS0FEa0UsR0FDeERELEtBRHdELENBQ2xFQyxLQURrRSxFQUUxRTs7QUFGMEUsa0JBRzVDQyxzREFBUSxDQUFDUCxjQUFELENBSG9DO0FBQUEsTUFHbkVRLE9BSG1FO0FBQUEsTUFHMURDLFVBSDBEOztBQUFBLGtCQUkzQ0MsK0RBQVEsQ0FBQ1os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QVRoQjtBQVVFLFdBQU8sRUFBRVYsS0FBSyxDQUFDb0IsT0FWakI7QUFXRSxRQUFJLEVBQUUsQ0FBQ3BCLEtBQUssQ0FBQ29CLE9BQVAsSUFBa0JwQixLQUFLLENBQUNrQixJQUFOLENBQVdELGdCQVhyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQW9CRCxDQXZGRDs7R0FBTW5CLE87VUFJMkJNLHVEOzs7S0FKM0JOLE87O0FBeUZTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gQ29tcG9uZW50cyAmIFVzYWJsZXNcbmltcG9ydCBDYXVzZUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3NwZWNpZmljL2NhdXNlTGlzdCdcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcnMgfSBmcm9tICdpbnRlcmZhY2VzL29yZ2FuaXphdGlvbidcblxuaW50ZXJmYWNlIG9yZ2FuaXphdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHNsdWc6IHN0cmluZ1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgbG9nb1VybDogc3RyaW5nXG4gIGRvbmF0aW9uTGlua3M6IHN0cmluZ1tdXG4gIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiBzdHJpbmdcbiAgZG9uYXRpb25Qcm9kdWN0czogc3RyaW5nXG4gIGNhdXNlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcbiAgdG90YWxPcmdhbml6YXRpb25zOiBudW1iZXJcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW5cbiAgZW5kQ3Vyc29yOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIGRhdGEge1xuICBnZXRPcmdhbml6YXRpb25zOiB7XG4gICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9uW11cbiAgfVxufVxuXG4vLyBTY2hlbWFcbi8qIGNvbnN0IHF1ZXJ5U2NoZW1hID0gZ3FsYFxuICBxdWVyeSBPcmdhbml6YXRpb25zKFxuICAgICRjYXVzZUlkOiBTdHJpbmdcbiAgICAkY291bnRyeTogU3RyaW5nXG4gICAgJGRvbmF0aW9uTGlua3M6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25Qcm9kdWN0czogQm9vbGVhblxuICAgICRlbmRDdXJzb3I6IFN0cmluZ1xuICApIHtcbiAgICBnZXRPcmdhbml6YXRpb25zKFxuICAgICAgZmlyc3Q6IDEyXG4gICAgICBlbmRDdXJzb3I6ICRlbmRDdXJzb3JcbiAgICAgIGNhdXNlSWQ6ICRjYXVzZUlkXG4gICAgICBjb3VudHJ5OiAkY291bnRyeVxuICAgICAgZG9uYXRpb25MaW5rczogJGRvbmF0aW9uTGlua3NcbiAgICAgIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgIGRvbmF0aW9uUHJvZHVjdHM6ICRkb25hdGlvblByb2R1Y3RzXG4gICAgKSB7XG4gICAgICBwYWdlRGF0YSB7XG4gICAgICAgIHRvdGFsT3JnYW5pemF0aW9uc1xuICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHNsdWdcbiAgICAgICAgY291bnRyeVxuICAgICAgICBsb2dvVXJsXG4gICAgICAgIGRvbmF0aW9uTGlua3NcbiAgICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgICAgZG9uYXRpb25Qcm9kdWN0c1xuICAgICAgICBjYXVzZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYCAqL1xuXG5jb25zdCBxdWVyeVNjaGVtYSA9IGdxbGBcbiAgcXVlcnkgZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcihcbiAgICAkcGFnZTogRmxvYXRcbiAgICAkY291bnRyeTogU3RyaW5nXG4gICAgJGNhdXNlSWQ6IFN0cmluZ1xuICApIHtcbiAgICBnZXRPcmdhbml6YXRpb25zKFxuICAgICAgbGltaXQ6IDEyXG4gICAgICBwYWdlOiAkcGFnZVxuICAgICAgY291bnRyeTogJGNvdW50cnlcbiAgICAgIGNhdXNlSWQ6ICRjYXVzZUlkXG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgc2x1Z1xuICAgICAgY291bnRyeVxuICAgICAgbG9nb1VybFxuICAgICAgZG9uYXRpb25MaW5rc1xuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgIGNhdXNlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgZmlsdGVyc0RlZmF1bHQgPSB7XG4gIGNvdW50cnk6ICcnLFxuICBjYXVzZUlkOiAnJyxcbiAgcGFnZTogMCxcbiAgLyogICBkb25hdGlvbkxpbmtzOiBmYWxzZSxcbiAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IGZhbHNlLFxuXG4gIGRvbmF0aW9uUHJvZHVjdHM6IGZhbHNlLCAqL1xuICAvKiAgIGVuZEN1cnNvcjogJycsICovXG59XG5jb25zdCBPbmdMaXN0ID0gKHByb3BzOiB7IHF1ZXJ5OiBnZXRPcmdhbml6YXRpb25zRmlsdGVycyB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBwcm9wc1xuICAvLyBGaWx0ZXIgU3RhdGVcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoZmlsdGVyc0RlZmF1bHQpXG4gIGNvbnN0IHsgcmVmZXRjaCwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShxdWVyeVNjaGVtYSwge1xuICAgIHZhcmlhYmxlczogZmlsdGVycyxcbiAgfSlcbiAgLy8gRmlsdGVyIGhhbmRsZXJzXG4gIGNvbnN0IGhhbmRsZUNvdW50cnkgPSBhc3luYyAoY291bnRyeSkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoeyAuLi5maWx0ZXJzLCBjb3VudHJ5OiBjb3VudHJ5LCBwYWdlOiAwIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2F1c2VJZCA9IGFzeW5jIChjYXVzZUlkKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIGNhdXNlSWQ6IGNhdXNlSWQsIHBhZ2U6IDAgfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfVxuICAvKiAgXG4gIGNvbnN0IGhhbmRsZURvbmF0aW9uTGlua3MgPSBhc3luYyAoYm9vbGVhbikgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoeyAuLi5maWx0ZXJzLCBkb25hdGlvbkxpbmtzOiBib29sZWFuIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvbkJhbmtBY2NvdW50TmFtZSA9IGFzeW5jIChib29sZWFuKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7XG4gICAgICAuLi5maWx0ZXJzLFxuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IGJvb2xlYW4sXG4gICAgICBlbmRDdXJzb3I6ICcnLFxuICAgIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvblByb2R1Y3RzID0gYXN5bmMgKGJvb2xlYW4pID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBkb25hdGlvblByb2R1Y3RzOiBib29sZWFuLFxuICAgICAgZW5kQ3Vyc29yOiAnJyxcbiAgICB9KVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICB9ICovXG4gIGNvbnN0IHJlc2V0RmlsdGVycyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRlcnNEZWZhdWx0KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIHBhZ2U6IGZpbHRlcnMucGFnZSArIDEgfSlcbiAgICBmZXRjaE1vcmUoe1xuICAgICAgdmFyaWFibGVzOiBmaWx0ZXJzLFxuICAgICAgdXBkYXRlUXVlcnk6IChwcmV2UmVzdWx0OiBhbnksIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2UmVzdWx0XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJldlJlc3VsdCwgJ3ByZXYnKVxuICAgICAgICBjb25zb2xlLmxvZyhmZXRjaE1vcmVSZXN1bHQsICdtb3JlJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXRPcmdhbml6YXRpb25zOiB7XG4gICAgICAgICAgICAuLi5xdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgIC4uLnF1ZXJ5LmRhdGEuZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAgICAgLi4uZmV0Y2hNb3JlUmVzdWx0Py5nZXRPcmdhbml6YXRpb25zPy5vcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIC8qICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0LmdldE9yZ2FuaXphdGlvbnMgPSBbXG4gICAgICAgICAgLi4ucHJldlJlc3VsdC5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgIC4uLmZldGNoTW9yZVJlc3VsdC5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICBdXG4gICAgICAgIHJldHVybiBmZXRjaE1vcmVSZXN1bHQgKi9cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9yZ2FuaXphY2lvbmVzIHwgZ2VudGVtPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXVzZUxpc3RcbiAgICAgICAgc2VsZWN0PXt7IGhhbmRsZUNhdXNlSWQsIGhhbmRsZUNvdW50cnkgfX1cbiAgICAgICAgLyogIGNoZWNrYm94PXt7XG4gICAgICAgICAgaGFuZGxlRG9uYXRpb25MaW5rcyxcbiAgICAgICAgICBoYW5kbGVEb25hdGlvbkJhbmtBY2NvdW50TmFtZSxcbiAgICAgICAgICBoYW5kbGVEb25hdGlvblByb2R1Y3RzLFxuICAgICAgICB9fSAqL1xuICAgICAgICBoYW5kbGVOZXh0UGFnZT17aGFuZGxlTmV4dFBhZ2V9XG4gICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgIHJlc2V0RmlsdGVycz17cmVzZXRGaWx0ZXJzfVxuICAgICAgICBsb2FkaW5nPXtxdWVyeS5sb2FkaW5nfVxuICAgICAgICBkYXRhPXshcXVlcnkubG9hZGluZyAmJiBxdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnN9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9uZ0xpc3RcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICBjb25zdCBxdWVyeSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IHF1ZXJ5U2NoZW1hLFxuICAgIHZhcmlhYmxlczogZmlsdGVyc0RlZmF1bHQsXG4gIH0pXG4gIGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcXVlcnksXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n");

/***/ })

})