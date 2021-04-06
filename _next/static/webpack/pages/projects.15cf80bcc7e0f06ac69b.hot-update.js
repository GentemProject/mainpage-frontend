webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/specific/causeList */ \"./components/specific/causeList/index.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  query getOrganizationsFilter(\\n    $page: Float\\n    $country: String\\n    $causeId: String\\n  ) {\\n    getOrganizations(\\n      limit: 12\\n      page: $page\\n      country: $country\\n      causeId: $causeId\\n    ) {\\n      id\\n      name\\n      slug\\n      country\\n      logoUrl\\n      donationLinks\\n      donationBankAccountName\\n      causes {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // Components & Usables\n\n // Apollo\n\n\n// Schema\n\n/* const querySchema = gql`\n  query Organizations(\n    $causeId: String\n    $country: String\n    $donationLinks: Boolean\n    $donationBankAccountName: Boolean\n    $donationProducts: Boolean\n    $endCursor: String\n  ) {\n    getOrganizations(\n      first: 12\n      endCursor: $endCursor\n      causeId: $causeId\n      country: $country\n      donationLinks: $donationLinks\n      donationBankAccountName: $donationBankAccountName\n      donationProducts: $donationProducts\n    ) {\n      pageData {\n        totalOrganizations\n        hasNextPage\n        endCursor\n      }\n      organizations {\n        id\n        name\n        slug\n        country\n        logoUrl\n        donationLinks\n        donationBankAccountName\n        donationProducts\n        causes {\n          name\n        }\n      }\n    }\n  }\n` */\nvar querySchema = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"gql\"])(_templateObject());\nvar filtersDefault = {\n  country: '',\n  causeId: '',\n  page: 0\n  /*   donationLinks: false,\n  donationBankAccountName: false,\n   donationProducts: false, */\n\n  /*   endCursor: '', */\n\n};\n\nvar OngList = function OngList(props) {\n  _s();\n\n  var query = props.query;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(query.data.getOrganizations),\n      organizationArray = _useState[0],\n      setOrganizationArray = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(query.loading),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // Filter State\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(filtersDefault),\n      filters = _useState3[0],\n      setFilters = _useState3[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"])(querySchema, {\n    variables: filters\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      fetchMore = _useQuery.fetchMore; // Filter handlers\n\n\n  var handleCountry = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(country) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                country: country,\n                page: 0\n              }));\n\n            case 2:\n              _context.next = 4;\n              return setLoading(true);\n\n            case 4:\n              _context.next = 6;\n              return refetch();\n\n            case 6:\n              _context.next = 8;\n              return setOrganizationArray(data.getOrganizations);\n\n            case 8:\n              _context.next = 10;\n              return setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleCountry(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleCauseId = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(causeId) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                causeId: causeId,\n                page: 0\n              }));\n\n            case 2:\n              _context2.next = 4;\n              return setLoading(true);\n\n            case 4:\n              refetch();\n              _context2.next = 7;\n              return setOrganizationArray(data.getOrganizations);\n\n            case 7:\n              _context2.next = 9;\n              return setLoading(false);\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleCauseId(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /*  \n  const handleDonationLinks = async (boolean) => {\n    await setFilters({ ...filters, donationLinks: boolean })\n    await refetch()\n  } */\n\n  /*   const handleDonationBankAccountName = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationBankAccountName: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n  /*   const handleDonationProducts = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationProducts: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n\n  var resetFilters = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return setFilters(filtersDefault);\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function resetFilters() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleNextPage = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                page: filters.page + 1\n              }));\n\n            case 2:\n              _context4.next = 4;\n              return fetchMore({\n                variables: filters,\n                updateQuery: function updateQuery(prevResult, _ref5) {\n                  var fetchMoreResult = _ref5.fetchMoreResult;\n                  if (!fetchMoreResult) return prevResult;\n                  console.log(prevResult, 'prev');\n                  console.log(fetchMoreResult, 'more');\n                  return {\n                    getOrganizations: _objectSpread(_objectSpread({}, query.data.getOrganizations), {}, {\n                      data: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query.data.getOrganizations), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : fetchMoreResult.getOrganizations))\n                    })\n                  };\n                }\n              });\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleNextPage() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n  /*         fetchMoreResult.getOrganizations = [\n          ...prevResult.getOrganizations,\n          ...fetchMoreResult.getOrganizations,\n        ]\n        return fetchMoreResult */\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 9\n    }\n  }, \"Organizaciones | gentem\")), __jsx(_components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    select: {\n      handleCauseId: handleCauseId,\n      handleCountry: handleCountry\n    }\n    /*  checkbox={{\n      handleDonationLinks,\n      handleDonationBankAccountName,\n      handleDonationProducts,\n    }} */\n    ,\n    handleNextPage: handleNextPage,\n    filters: filters,\n    resetFilters: resetFilters,\n    loading: loading,\n    data: !loading && organizationArray,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(OngList, \"sZ8Pj1vGxM0nKhQbztEzIhL+zQY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"]];\n});\n\n_c = OngList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OngList);\n\nvar _c;\n\n$RefreshReg$(_c, \"OngList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzRhOTIiXSwibmFtZXMiOlsicXVlcnlTY2hlbWEiLCJncWwiLCJmaWx0ZXJzRGVmYXVsdCIsImNvdW50cnkiLCJjYXVzZUlkIiwicGFnZSIsIk9uZ0xpc3QiLCJwcm9wcyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwiZ2V0T3JnYW5pemF0aW9ucyIsIm9yZ2FuaXphdGlvbkFycmF5Iiwic2V0T3JnYW5pemF0aW9uQXJyYXkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJyZWZldGNoIiwiZmV0Y2hNb3JlIiwiaGFuZGxlQ291bnRyeSIsImhhbmRsZUNhdXNlSWQiLCJyZXNldEZpbHRlcnMiLCJoYW5kbGVOZXh0UGFnZSIsInVwZGF0ZVF1ZXJ5IiwicHJldlJlc3VsdCIsImZldGNoTW9yZVJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FHQTs7Q0FHQTs7QUFFQTtBQStCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCO0FBMkJBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsU0FBTyxFQUFFLEVBRFk7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxNQUFJLEVBQUU7QUFDTjs7OztBQUlBOztBQVJxQixDQUF2Qjs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTREO0FBQUE7O0FBQUEsTUFDbEVDLEtBRGtFLEdBQ3hERCxLQUR3RCxDQUNsRUMsS0FEa0U7O0FBQUEsa0JBRXhCQyxzREFBUSxDQUV4REQsS0FBSyxDQUFDRSxJQUFOLENBQVdDLGdCQUY2QyxDQUZnQjtBQUFB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TixDQUFXQyxnQkFEQTtBQUVkRCwwQkFBSSx5R0FDQ0YsS0FBSyxDQUFDRSxJQUFOLENBQVdDLGdCQURaLGdHQUVDaUIsZUFGRCxhQUVDQSxlQUZELHVCQUVDQSxlQUFlLENBQUVqQixnQkFGbEI7QUFGVTtBQURYLG1CQUFQO0FBU0Q7QUFoQmEsZUFBRCxDQUxNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRjLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7QUF5QkE7Ozs7Ozs7QUFLQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsQ0FERixFQUlFLE1BQUMsc0VBQUQ7QUFDRSxVQUFNLEVBQUU7QUFDTkYsbUJBQWEsRUFBYkEsYUFETTtBQUVORCxtQkFBYSxFQUFiQTtBQUZNO0FBSVI7Ozs7O0FBTEY7QUFVRSxrQkFBYyxFQUFFRyxjQVZsQjtBQVdFLFdBQU8sRUFBRVQsT0FYWDtBQVlFLGdCQUFZLEVBQUVRLFlBWmhCO0FBYUUsV0FBTyxFQUFFVixPQWJYO0FBY0UsUUFBSSxFQUFFLENBQUNBLE9BQUQsSUFBWUYsaUJBZHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBdUJELENBbEhEOztHQUFNTixPO1VBUWlDWSx1RDs7O0tBUmpDWixPOztBQW9IU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSwgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHMgJiBVc2FibGVzXG5pbXBvcnQgQ2F1c2VMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZUxpc3QnXG5cbi8vIEFwb2xsb1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7XG4gIGdldE9yZ2FuaXphdGlvbnNGaWx0ZXJzLFxuICBvcmdhbml6YXRpb25zUHJvamVjdHMsXG59IGZyb20gJ2ludGVyZmFjZXMvb3JnYW5pemF0aW9uJ1xuXG5pbnRlcmZhY2Ugb3JnYW5pemF0aW9uIHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc2x1Zzogc3RyaW5nXG4gIGNvdW50cnk6IHN0cmluZ1xuICBsb2dvVXJsOiBzdHJpbmdcbiAgZG9uYXRpb25MaW5rczogc3RyaW5nW11cbiAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IHN0cmluZ1xuICBkb25hdGlvblByb2R1Y3RzOiBzdHJpbmdcbiAgY2F1c2VzOiBzdHJpbmdbXVxufVxuXG5pbnRlcmZhY2UgcGFnZURhdGEge1xuICB0b3RhbE9yZ2FuaXphdGlvbnM6IG51bWJlclxuICBoYXNOZXh0UGFnZTogYm9vbGVhblxuICBlbmRDdXJzb3I6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgZGF0YSB7XG4gIGdldE9yZ2FuaXphdGlvbnM6IHtcbiAgICBwYWdlRGF0YTogcGFnZURhdGFcbiAgICBvcmdhbml6YXRpb25zOiBvcmdhbml6YXRpb25bXVxuICB9XG59XG5cbi8vIFNjaGVtYVxuLyogY29uc3QgcXVlcnlTY2hlbWEgPSBncWxgXG4gIHF1ZXJ5IE9yZ2FuaXphdGlvbnMoXG4gICAgJGNhdXNlSWQ6IFN0cmluZ1xuICAgICRjb3VudHJ5OiBTdHJpbmdcbiAgICAkZG9uYXRpb25MaW5rczogQm9vbGVhblxuICAgICRkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogQm9vbGVhblxuICAgICRkb25hdGlvblByb2R1Y3RzOiBCb29sZWFuXG4gICAgJGVuZEN1cnNvcjogU3RyaW5nXG4gICkge1xuICAgIGdldE9yZ2FuaXphdGlvbnMoXG4gICAgICBmaXJzdDogMTJcbiAgICAgIGVuZEN1cnNvcjogJGVuZEN1cnNvclxuICAgICAgY2F1c2VJZDogJGNhdXNlSWRcbiAgICAgIGNvdW50cnk6ICRjb3VudHJ5XG4gICAgICBkb25hdGlvbkxpbmtzOiAkZG9uYXRpb25MaW5rc1xuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6ICRkb25hdGlvbkJhbmtBY2NvdW50TmFtZVxuICAgICAgZG9uYXRpb25Qcm9kdWN0czogJGRvbmF0aW9uUHJvZHVjdHNcbiAgICApIHtcbiAgICAgIHBhZ2VEYXRhIHtcbiAgICAgICAgdG90YWxPcmdhbml6YXRpb25zXG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGVuZEN1cnNvclxuICAgICAgfVxuICAgICAgb3JnYW5pemF0aW9ucyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgc2x1Z1xuICAgICAgICBjb3VudHJ5XG4gICAgICAgIGxvZ29VcmxcbiAgICAgICAgZG9uYXRpb25MaW5rc1xuICAgICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZVxuICAgICAgICBkb25hdGlvblByb2R1Y3RzXG4gICAgICAgIGNhdXNlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gICovXG5cbmNvbnN0IHF1ZXJ5U2NoZW1hID0gZ3FsYFxuICBxdWVyeSBnZXRPcmdhbml6YXRpb25zRmlsdGVyKFxuICAgICRwYWdlOiBGbG9hdFxuICAgICRjb3VudHJ5OiBTdHJpbmdcbiAgICAkY2F1c2VJZDogU3RyaW5nXG4gICkge1xuICAgIGdldE9yZ2FuaXphdGlvbnMoXG4gICAgICBsaW1pdDogMTJcbiAgICAgIHBhZ2U6ICRwYWdlXG4gICAgICBjb3VudHJ5OiAkY291bnRyeVxuICAgICAgY2F1c2VJZDogJGNhdXNlSWRcbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBzbHVnXG4gICAgICBjb3VudHJ5XG4gICAgICBsb2dvVXJsXG4gICAgICBkb25hdGlvbkxpbmtzXG4gICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZVxuICAgICAgY2F1c2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBmaWx0ZXJzRGVmYXVsdCA9IHtcbiAgY291bnRyeTogJycsXG4gIGNhdXNlSWQ6ICcnLFxuICBwYWdlOiAwLFxuICAvKiAgIGRvbmF0aW9uTGlua3M6IGZhbHNlLFxuICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogZmFsc2UsXG5cbiAgZG9uYXRpb25Qcm9kdWN0czogZmFsc2UsICovXG4gIC8qICAgZW5kQ3Vyc29yOiAnJywgKi9cbn1cbmNvbnN0IE9uZ0xpc3QgPSAocHJvcHM6IHsgcXVlcnk6IGdldE9yZ2FuaXphdGlvbnNGaWx0ZXJzIH0pOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHByb3BzXG4gIGNvbnN0IFtvcmdhbml6YXRpb25BcnJheSwgc2V0T3JnYW5pemF0aW9uQXJyYXldID0gdXNlU3RhdGU8XG4gICAgb3JnYW5pemF0aW9uc1Byb2plY3RzW11cbiAgPihxdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnMpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHF1ZXJ5LmxvYWRpbmcpXG4gIC8vIEZpbHRlciBTdGF0ZVxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZShmaWx0ZXJzRGVmYXVsdClcbiAgY29uc3QgeyBkYXRhLCByZWZldGNoLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5PFxuICAgIGdldE9yZ2FuaXphdGlvbnNGaWx0ZXJzWydkYXRhJ11cbiAgPihxdWVyeVNjaGVtYSwge1xuICAgIHZhcmlhYmxlczogZmlsdGVycyxcbiAgfSlcbiAgLy8gRmlsdGVyIGhhbmRsZXJzXG4gIGNvbnN0IGhhbmRsZUNvdW50cnkgPSBhc3luYyAoY291bnRyeSkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoe1xuICAgICAgLi4uZmlsdGVycyxcbiAgICAgIGNvdW50cnk6IGNvdW50cnksXG4gICAgICBwYWdlOiAwLFxuICAgIH0pXG4gICAgYXdhaXQgc2V0TG9hZGluZyh0cnVlKVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICAgIGF3YWl0IHNldE9yZ2FuaXphdGlvbkFycmF5KGRhdGEuZ2V0T3JnYW5pemF0aW9ucylcbiAgICBhd2FpdCBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG4gIGNvbnN0IGhhbmRsZUNhdXNlSWQgPSBhc3luYyAoY2F1c2VJZCkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoe1xuICAgICAgLi4uZmlsdGVycyxcbiAgICAgIGNhdXNlSWQ6IGNhdXNlSWQsXG4gICAgICBwYWdlOiAwLFxuICAgIH0pXG4gICAgYXdhaXQgc2V0TG9hZGluZyh0cnVlKVxuICAgIHJlZmV0Y2goKVxuICAgIGF3YWl0IHNldE9yZ2FuaXphdGlvbkFycmF5KGRhdGEuZ2V0T3JnYW5pemF0aW9ucylcbiAgICBhd2FpdCBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG4gIC8qICBcbiAgY29uc3QgaGFuZGxlRG9uYXRpb25MaW5rcyA9IGFzeW5jIChib29sZWFuKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIGRvbmF0aW9uTGlua3M6IGJvb2xlYW4gfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfSAqL1xuICAvKiAgIGNvbnN0IGhhbmRsZURvbmF0aW9uQmFua0FjY291bnROYW1lID0gYXN5bmMgKGJvb2xlYW4pID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogYm9vbGVhbixcbiAgICAgIGVuZEN1cnNvcjogJycsXG4gICAgfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfSAqL1xuICAvKiAgIGNvbnN0IGhhbmRsZURvbmF0aW9uUHJvZHVjdHMgPSBhc3luYyAoYm9vbGVhbikgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoe1xuICAgICAgLi4uZmlsdGVycyxcbiAgICAgIGRvbmF0aW9uUHJvZHVjdHM6IGJvb2xlYW4sXG4gICAgICBlbmRDdXJzb3I6ICcnLFxuICAgIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgY29uc3QgcmVzZXRGaWx0ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoZmlsdGVyc0RlZmF1bHQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBwYWdlOiBmaWx0ZXJzLnBhZ2UgKyAxLFxuICAgIH0pXG4gICAgYXdhaXQgZmV0Y2hNb3JlKHtcbiAgICAgIHZhcmlhYmxlczogZmlsdGVycyxcbiAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldlJlc3VsdDogYW55LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSByZXR1cm4gcHJldlJlc3VsdFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZSZXN1bHQsICdwcmV2JylcbiAgICAgICAgY29uc29sZS5sb2coZmV0Y2hNb3JlUmVzdWx0LCAnbW9yZScpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0T3JnYW5pemF0aW9uczoge1xuICAgICAgICAgICAgLi4ucXVlcnkuZGF0YS5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAuLi5xdWVyeS5kYXRhLmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgICAgIC4uLmZldGNoTW9yZVJlc3VsdD8uZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgLyogICAgICAgICBmZXRjaE1vcmVSZXN1bHQuZ2V0T3JnYW5pemF0aW9ucyA9IFtcbiAgICAgICAgICAuLi5wcmV2UmVzdWx0LmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgLi4uZmV0Y2hNb3JlUmVzdWx0LmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdCAqL1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9yZ2FuaXphY2lvbmVzIHwgZ2VudGVtPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXVzZUxpc3RcbiAgICAgICAgc2VsZWN0PXt7XG4gICAgICAgICAgaGFuZGxlQ2F1c2VJZCxcbiAgICAgICAgICBoYW5kbGVDb3VudHJ5LFxuICAgICAgICB9fVxuICAgICAgICAvKiAgY2hlY2tib3g9e3tcbiAgICAgICAgICBoYW5kbGVEb25hdGlvbkxpbmtzLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uQmFua0FjY291bnROYW1lLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uUHJvZHVjdHMsXG4gICAgICAgIH19ICovXG4gICAgICAgIGhhbmRsZU5leHRQYWdlPXtoYW5kbGVOZXh0UGFnZX1cbiAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgcmVzZXRGaWx0ZXJzPXtyZXNldEZpbHRlcnN9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIGRhdGE9eyFsb2FkaW5nICYmIG9yZ2FuaXphdGlvbkFycmF5fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPbmdMaXN0XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBxdWVyeVNjaGVtYSxcbiAgICB2YXJpYWJsZXM6IGZpbHRlcnNEZWZhdWx0LFxuICB9KVxuICBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHF1ZXJ5LFxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n");

/***/ })

})