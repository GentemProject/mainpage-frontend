webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/specific/causeList */ \"./components/specific/causeList/index.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  query getOrganizationsFilter(\\n    $page: Float\\n    $country: String\\n    $causeId: String\\n  ) {\\n    getOrganizations(\\n      limit: 12\\n      page: $page\\n      country: $country\\n      causeId: $causeId\\n    ) {\\n      id\\n      name\\n      slug\\n      country\\n      logoUrl\\n      donationLinks\\n      donationBankAccountName\\n      causes {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // Components & Usables\n\n // Apollo\n\n\n// Schema\n\n/* const querySchema = gql`\n  query Organizations(\n    $causeId: String\n    $country: String\n    $donationLinks: Boolean\n    $donationBankAccountName: Boolean\n    $donationProducts: Boolean\n    $endCursor: String\n  ) {\n    getOrganizations(\n      first: 12\n      endCursor: $endCursor\n      causeId: $causeId\n      country: $country\n      donationLinks: $donationLinks\n      donationBankAccountName: $donationBankAccountName\n      donationProducts: $donationProducts\n    ) {\n      pageData {\n        totalOrganizations\n        hasNextPage\n        endCursor\n      }\n      organizations {\n        id\n        name\n        slug\n        country\n        logoUrl\n        donationLinks\n        donationBankAccountName\n        donationProducts\n        causes {\n          name\n        }\n      }\n    }\n  }\n` */\nvar querySchema = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"gql\"])(_templateObject());\nvar filtersDefault = {\n  country: '',\n  causeId: '',\n  page: 0\n  /*   donationLinks: false,\n  donationBankAccountName: false,\n   donationProducts: false, */\n\n  /*   endCursor: '', */\n\n};\n\nvar OngList = function OngList(props) {\n  _s();\n\n  var query = props.query;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(query.data.getOrganizations),\n      organizationArray = _useState[0],\n      setOrganizationArray = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(query.loading),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // Filter State\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(filtersDefault),\n      filters = _useState3[0],\n      setFilters = _useState3[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"])(querySchema, {\n    variables: filters\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      fetchMore = _useQuery.fetchMore; // Filter handlers\n\n\n  var handleCountry = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(country) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                country: country,\n                page: 0\n              }));\n\n            case 2:\n              _context.next = 4;\n              return setLoading(true);\n\n            case 4:\n              _context.next = 6;\n              return refetch();\n\n            case 6:\n              _context.next = 8;\n              return setOrganizationArray(data.getOrganizations);\n\n            case 8:\n              _context.next = 10;\n              return setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleCountry(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleCauseId = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(causeId) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                causeId: causeId,\n                page: 0\n              }));\n              _context2.next = 3;\n              return setLoading(true);\n\n            case 3:\n              _context2.next = 5;\n              return refetch();\n\n            case 5:\n              setOrganizationArray(data.getOrganizations);\n              _context2.next = 8;\n              return setLoading(false);\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleCauseId(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /*  \n  const handleDonationLinks = async (boolean) => {\n    await setFilters({ ...filters, donationLinks: boolean })\n    await refetch()\n  } */\n\n  /*   const handleDonationBankAccountName = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationBankAccountName: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n  /*   const handleDonationProducts = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationProducts: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n\n  var resetFilters = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return setFilters(filtersDefault);\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function resetFilters() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleNextPage = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                page: filters.page + 1\n              }));\n\n            case 2:\n              _context4.next = 4;\n              return fetchMore({\n                variables: filters,\n                updateQuery: function updateQuery(prevResult, _ref5) {\n                  var fetchMoreResult = _ref5.fetchMoreResult;\n                  if (!fetchMoreResult) return prevResult;\n                  console.log(prevResult, 'prev');\n                  console.log(fetchMoreResult, 'more');\n                  return {\n                    getOrganizations: _objectSpread(_objectSpread({}, query.data.getOrganizations), {}, {\n                      data: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query.data.getOrganizations), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : fetchMoreResult.getOrganizations))\n                    })\n                  };\n                }\n              });\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleNextPage() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n  /*         fetchMoreResult.getOrganizations = [\n          ...prevResult.getOrganizations,\n          ...fetchMoreResult.getOrganizations,\n        ]\n        return fetchMoreResult */\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 9\n    }\n  }, \"Organizaciones | gentem\")), __jsx(_components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    select: {\n      handleCauseId: handleCauseId,\n      handleCountry: handleCountry\n    }\n    /*  checkbox={{\n      handleDonationLinks,\n      handleDonationBankAccountName,\n      handleDonationProducts,\n    }} */\n    ,\n    handleNextPage: handleNextPage,\n    filters: filters,\n    resetFilters: resetFilters,\n    loading: loading,\n    data: !loading && organizationArray,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(OngList, \"sZ8Pj1vGxM0nKhQbztEzIhL+zQY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"]];\n});\n\n_c = OngList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OngList);\n\nvar _c;\n\n$RefreshReg$(_c, \"OngList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzRhOTIiXSwibmFtZXMiOlsicXVlcnlTY2hlbWEiLCJncWwiLCJmaWx0ZXJzRGVmYXVsdCIsImNvdW50cnkiLCJjYXVzZUlkIiwicGFnZSIsIk9uZ0xpc3QiLCJwcm9wcyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwiZ2V0T3JnYW5pemF0aW9ucyIsIm9yZ2FuaXphdGlvbkFycmF5Iiwic2V0T3JnYW5pemF0aW9uQXJyYXkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJyZWZldGNoIiwiZmV0Y2hNb3JlIiwiaGFuZGxlQ291bnRyeSIsImhhbmRsZUNhdXNlSWQiLCJyZXNldEZpbHRlcnMiLCJoYW5kbGVOZXh0UGFnZSIsInVwZGF0ZVF1ZXJ5IiwicHJldlJlc3VsdCIsImZldGNoTW9yZVJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FHQTs7Q0FHQTs7QUFFQTtBQStCQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCO0FBMkJBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsU0FBTyxFQUFFLEVBRFk7QUFFckJDLFNBQU8sRUFBRSxFQUZZO0FBR3JCQyxNQUFJLEVBQUU7QUFDTjs7OztBQUlBOztBQVJxQixDQUF2Qjs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTREO0FBQUE7O0FBQUEsTUFDbEVDLEtBRGtFLEdBQ3hERCxLQUR3RCxDQUNsRUMsS0FEa0U7O0FBQUEsa0JBRXhCQyxzREFBUSxDQUV4REQsS0FBSyxDQUFDRSxJQUFOLENBQVdDLGdCQUY2QyxDQUZnQjtBQUFB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Z0JBREE7QUFFZEQsMEJBQUkseUdBQ0NGLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxnQkFEWixnR0FFQ2lCLGVBRkQsYUFFQ0EsZUFGRCx1QkFFQ0EsZUFBZSxDQUFFakIsZ0JBRmxCO0FBRlU7QUFEWCxtQkFBUDtBQVNEO0FBaEJhLGVBQUQsQ0FMTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkYyxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCO0FBeUJBOzs7Ozs7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBREYsRUFJRSxNQUFDLHNFQUFEO0FBQ0UsVUFBTSxFQUFFO0FBQ05GLG1CQUFhLEVBQWJBLGFBRE07QUFFTkQsbUJBQWEsRUFBYkE7QUFGTTtBQUlSOzs7OztBQUxGO0FBVUUsa0JBQWMsRUFBRUcsY0FWbEI7QUFXRSxXQUFPLEVBQUVULE9BWFg7QUFZRSxnQkFBWSxFQUFFUSxZQVpoQjtBQWFFLFdBQU8sRUFBRVYsT0FiWDtBQWNFLFFBQUksRUFBRSxDQUFDQSxPQUFELElBQVlGLGlCQWRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQXVCRCxDQWxIRDs7R0FBTU4sTztVQVFpQ1ksdUQ7OztLQVJqQ1osTzs7QUFvSFNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UsIEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG4vLyBDb21wb25lbnRzICYgVXNhYmxlc1xuaW1wb3J0IENhdXNlTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc3BlY2lmaWMvY2F1c2VMaXN0J1xuXG4vLyBBcG9sbG9cbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQge1xuICBnZXRPcmdhbml6YXRpb25zRmlsdGVycyxcbiAgb3JnYW5pemF0aW9uc1Byb2plY3RzLFxufSBmcm9tICdpbnRlcmZhY2VzL29yZ2FuaXphdGlvbidcblxuaW50ZXJmYWNlIG9yZ2FuaXphdGlvbiB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHNsdWc6IHN0cmluZ1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgbG9nb1VybDogc3RyaW5nXG4gIGRvbmF0aW9uTGlua3M6IHN0cmluZ1tdXG4gIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiBzdHJpbmdcbiAgZG9uYXRpb25Qcm9kdWN0czogc3RyaW5nXG4gIGNhdXNlczogc3RyaW5nW11cbn1cblxuaW50ZXJmYWNlIHBhZ2VEYXRhIHtcbiAgdG90YWxPcmdhbml6YXRpb25zOiBudW1iZXJcbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW5cbiAgZW5kQ3Vyc29yOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIGRhdGEge1xuICBnZXRPcmdhbml6YXRpb25zOiB7XG4gICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9uW11cbiAgfVxufVxuXG4vLyBTY2hlbWFcbi8qIGNvbnN0IHF1ZXJ5U2NoZW1hID0gZ3FsYFxuICBxdWVyeSBPcmdhbml6YXRpb25zKFxuICAgICRjYXVzZUlkOiBTdHJpbmdcbiAgICAkY291bnRyeTogU3RyaW5nXG4gICAgJGRvbmF0aW9uTGlua3M6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IEJvb2xlYW5cbiAgICAkZG9uYXRpb25Qcm9kdWN0czogQm9vbGVhblxuICAgICRlbmRDdXJzb3I6IFN0cmluZ1xuICApIHtcbiAgICBnZXRPcmdhbml6YXRpb25zKFxuICAgICAgZmlyc3Q6IDEyXG4gICAgICBlbmRDdXJzb3I6ICRlbmRDdXJzb3JcbiAgICAgIGNhdXNlSWQ6ICRjYXVzZUlkXG4gICAgICBjb3VudHJ5OiAkY291bnRyeVxuICAgICAgZG9uYXRpb25MaW5rczogJGRvbmF0aW9uTGlua3NcbiAgICAgIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiAkZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgIGRvbmF0aW9uUHJvZHVjdHM6ICRkb25hdGlvblByb2R1Y3RzXG4gICAgKSB7XG4gICAgICBwYWdlRGF0YSB7XG4gICAgICAgIHRvdGFsT3JnYW5pemF0aW9uc1xuICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICBlbmRDdXJzb3JcbiAgICAgIH1cbiAgICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHNsdWdcbiAgICAgICAgY291bnRyeVxuICAgICAgICBsb2dvVXJsXG4gICAgICAgIGRvbmF0aW9uTGlua3NcbiAgICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgICAgZG9uYXRpb25Qcm9kdWN0c1xuICAgICAgICBjYXVzZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYCAqL1xuXG5jb25zdCBxdWVyeVNjaGVtYSA9IGdxbGBcbiAgcXVlcnkgZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcihcbiAgICAkcGFnZTogRmxvYXRcbiAgICAkY291bnRyeTogU3RyaW5nXG4gICAgJGNhdXNlSWQ6IFN0cmluZ1xuICApIHtcbiAgICBnZXRPcmdhbml6YXRpb25zKFxuICAgICAgbGltaXQ6IDEyXG4gICAgICBwYWdlOiAkcGFnZVxuICAgICAgY291bnRyeTogJGNvdW50cnlcbiAgICAgIGNhdXNlSWQ6ICRjYXVzZUlkXG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgc2x1Z1xuICAgICAgY291bnRyeVxuICAgICAgbG9nb1VybFxuICAgICAgZG9uYXRpb25MaW5rc1xuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWVcbiAgICAgIGNhdXNlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgZmlsdGVyc0RlZmF1bHQgPSB7XG4gIGNvdW50cnk6ICcnLFxuICBjYXVzZUlkOiAnJyxcbiAgcGFnZTogMCxcbiAgLyogICBkb25hdGlvbkxpbmtzOiBmYWxzZSxcbiAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IGZhbHNlLFxuXG4gIGRvbmF0aW9uUHJvZHVjdHM6IGZhbHNlLCAqL1xuICAvKiAgIGVuZEN1cnNvcjogJycsICovXG59XG5jb25zdCBPbmdMaXN0ID0gKHByb3BzOiB7IHF1ZXJ5OiBnZXRPcmdhbml6YXRpb25zRmlsdGVycyB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBwcm9wc1xuICBjb25zdCBbb3JnYW5pemF0aW9uQXJyYXksIHNldE9yZ2FuaXphdGlvbkFycmF5XSA9IHVzZVN0YXRlPFxuICAgIG9yZ2FuaXphdGlvbnNQcm9qZWN0c1tdXG4gID4ocXVlcnkuZGF0YS5nZXRPcmdhbml6YXRpb25zKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihxdWVyeS5sb2FkaW5nKVxuICAvLyBGaWx0ZXIgU3RhdGVcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoZmlsdGVyc0RlZmF1bHQpXG4gIGNvbnN0IHsgZGF0YSwgcmVmZXRjaCwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeTxcbiAgICBnZXRPcmdhbml6YXRpb25zRmlsdGVyc1snZGF0YSddXG4gID4ocXVlcnlTY2hlbWEsIHtcbiAgICB2YXJpYWJsZXM6IGZpbHRlcnMsXG4gIH0pXG4gIC8vIEZpbHRlciBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVDb3VudHJ5ID0gYXN5bmMgKGNvdW50cnkpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBjb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgcGFnZTogMCxcbiAgICB9KVxuICAgIGF3YWl0IHNldExvYWRpbmcodHJ1ZSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgICBhd2FpdCBzZXRPcmdhbml6YXRpb25BcnJheShkYXRhLmdldE9yZ2FuaXphdGlvbnMpXG4gICAgYXdhaXQgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVDYXVzZUlkID0gYXN5bmMgKGNhdXNlSWQpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBjYXVzZUlkOiBjYXVzZUlkLFxuICAgICAgcGFnZTogMCxcbiAgICB9KVxuICAgIGF3YWl0IHNldExvYWRpbmcodHJ1ZSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgICBzZXRPcmdhbml6YXRpb25BcnJheShkYXRhLmdldE9yZ2FuaXphdGlvbnMpXG4gICAgYXdhaXQgc2V0TG9hZGluZyhmYWxzZSlcbiAgfVxuICAvKiAgXG4gIGNvbnN0IGhhbmRsZURvbmF0aW9uTGlua3MgPSBhc3luYyAoYm9vbGVhbikgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoeyAuLi5maWx0ZXJzLCBkb25hdGlvbkxpbmtzOiBib29sZWFuIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvbkJhbmtBY2NvdW50TmFtZSA9IGFzeW5jIChib29sZWFuKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7XG4gICAgICAuLi5maWx0ZXJzLFxuICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU6IGJvb2xlYW4sXG4gICAgICBlbmRDdXJzb3I6ICcnLFxuICAgIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgLyogICBjb25zdCBoYW5kbGVEb25hdGlvblByb2R1Y3RzID0gYXN5bmMgKGJvb2xlYW4pID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBkb25hdGlvblByb2R1Y3RzOiBib29sZWFuLFxuICAgICAgZW5kQ3Vyc29yOiAnJyxcbiAgICB9KVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICB9ICovXG4gIGNvbnN0IHJlc2V0RmlsdGVycyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKGZpbHRlcnNEZWZhdWx0KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7XG4gICAgICAuLi5maWx0ZXJzLFxuICAgICAgcGFnZTogZmlsdGVycy5wYWdlICsgMSxcbiAgICB9KVxuICAgIGF3YWl0IGZldGNoTW9yZSh7XG4gICAgICB2YXJpYWJsZXM6IGZpbHRlcnMsXG4gICAgICB1cGRhdGVRdWVyeTogKHByZXZSZXN1bHQ6IGFueSwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXZSZXN1bHRcblxuICAgICAgICBjb25zb2xlLmxvZyhwcmV2UmVzdWx0LCAncHJldicpXG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoTW9yZVJlc3VsdCwgJ21vcmUnKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnM6IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5LmRhdGEuZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgLi4ucXVlcnkuZGF0YS5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgICAuLi5mZXRjaE1vcmVSZXN1bHQ/LmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIC8qICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0LmdldE9yZ2FuaXphdGlvbnMgPSBbXG4gICAgICAgICAgLi4ucHJldlJlc3VsdC5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgIC4uLmZldGNoTW9yZVJlc3VsdC5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICBdXG4gICAgICAgIHJldHVybiBmZXRjaE1vcmVSZXN1bHQgKi9cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Pcmdhbml6YWNpb25lcyB8IGdlbnRlbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2F1c2VMaXN0XG4gICAgICAgIHNlbGVjdD17e1xuICAgICAgICAgIGhhbmRsZUNhdXNlSWQsXG4gICAgICAgICAgaGFuZGxlQ291bnRyeSxcbiAgICAgICAgfX1cbiAgICAgICAgLyogIGNoZWNrYm94PXt7XG4gICAgICAgICAgaGFuZGxlRG9uYXRpb25MaW5rcyxcbiAgICAgICAgICBoYW5kbGVEb25hdGlvbkJhbmtBY2NvdW50TmFtZSxcbiAgICAgICAgICBoYW5kbGVEb25hdGlvblByb2R1Y3RzLFxuICAgICAgICB9fSAqL1xuICAgICAgICBoYW5kbGVOZXh0UGFnZT17aGFuZGxlTmV4dFBhZ2V9XG4gICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgIHJlc2V0RmlsdGVycz17cmVzZXRGaWx0ZXJzfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICBkYXRhPXshbG9hZGluZyAmJiBvcmdhbml6YXRpb25BcnJheX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT25nTGlzdFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogcXVlcnlTY2hlbWEsXG4gICAgdmFyaWFibGVzOiBmaWx0ZXJzRGVmYXVsdCxcbiAgfSlcbiAgYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBxdWVyeSxcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n");

/***/ })

})