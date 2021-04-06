webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/specific/causeList */ \"./components/specific/causeList/index.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/pages/projects.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  query getOrganizationsFilter(\\n    $page: Float\\n    $country: String\\n    $causeId: String\\n  ) {\\n    getOrganizations(\\n      limit: 12\\n      page: $page\\n      country: $country\\n      causeId: $causeId\\n    ) {\\n      id\\n      name\\n      slug\\n      country\\n      logoUrl\\n      donationLinks\\n      donationBankAccountName\\n      causes {\\n        id\\n        name\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // Components & Usables\n\n // Apollo\n\n\n// Schema\n\n/* const querySchema = gql`\n  query Organizations(\n    $causeId: String\n    $country: String\n    $donationLinks: Boolean\n    $donationBankAccountName: Boolean\n    $donationProducts: Boolean\n    $endCursor: String\n  ) {\n    getOrganizations(\n      first: 12\n      endCursor: $endCursor\n      causeId: $causeId\n      country: $country\n      donationLinks: $donationLinks\n      donationBankAccountName: $donationBankAccountName\n      donationProducts: $donationProducts\n    ) {\n      pageData {\n        totalOrganizations\n        hasNextPage\n        endCursor\n      }\n      organizations {\n        id\n        name\n        slug\n        country\n        logoUrl\n        donationLinks\n        donationBankAccountName\n        donationProducts\n        causes {\n          name\n        }\n      }\n    }\n  }\n` */\nvar querySchema = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"gql\"])(_templateObject());\nvar filtersDefault = {\n  country: '',\n  causeId: '',\n  page: 0\n  /*   donationLinks: false,\n  donationBankAccountName: false,\n   donationProducts: false, */\n\n  /*   endCursor: '', */\n\n};\n\nvar OngList = function OngList(props) {\n  _s();\n\n  var query = props.query; // Filter State\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(filtersDefault),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"])(querySchema, {\n    variables: filters\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      fetchMore = _useQuery.fetchMore; // Filter handlers\n\n\n  var handleCountry = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(country) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                country: country,\n                page: 0\n              }));\n\n            case 2:\n              _context.next = 4;\n              return refetch();\n\n            case 4:\n              console.log(data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleCountry(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleCauseId = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(causeId) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                causeId: causeId,\n                page: 0\n              }));\n\n            case 2:\n              console.log(filters);\n              _context2.next = 5;\n              return refetch();\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleCauseId(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /*  \n  const handleDonationLinks = async (boolean) => {\n    await setFilters({ ...filters, donationLinks: boolean })\n    await refetch()\n  } */\n\n  /*   const handleDonationBankAccountName = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationBankAccountName: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n  /*   const handleDonationProducts = async (boolean) => {\n    await setFilters({\n      ...filters,\n      donationProducts: boolean,\n      endCursor: '',\n    })\n    await refetch()\n  } */\n\n\n  var resetFilters = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return setFilters(filtersDefault);\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function resetFilters() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleNextPage = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return setFilters(_objectSpread(_objectSpread({}, filters), {}, {\n                page: filters.page + 1\n              }));\n\n            case 2:\n              fetchMore({\n                variables: filters,\n                updateQuery: function updateQuery(prevResult, _ref5) {\n                  var _fetchMoreResult$getO;\n\n                  var fetchMoreResult = _ref5.fetchMoreResult;\n                  if (!fetchMoreResult) return prevResult;\n                  console.log(prevResult, 'prev');\n                  console.log(fetchMoreResult, 'more');\n                  return {\n                    getOrganizations: _objectSpread(_objectSpread({}, query.data.getOrganizations), {}, {\n                      data: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(query.data.getOrganizations), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult === null || fetchMoreResult === void 0 ? void 0 : (_fetchMoreResult$getO = fetchMoreResult.getOrganizations) === null || _fetchMoreResult$getO === void 0 ? void 0 : _fetchMoreResult$getO.organizations))\n                    })\n                  };\n                  /*         fetchMoreResult.getOrganizations = [\n                    ...prevResult.getOrganizations,\n                    ...fetchMoreResult.getOrganizations,\n                  ]\n                  return fetchMoreResult */\n                }\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleNextPage() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 9\n    }\n  }, \"Organizaciones | gentem\")), __jsx(_components_specific_causeList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    select: {\n      handleCauseId: handleCauseId,\n      handleCountry: handleCountry\n    }\n    /*  checkbox={{\n      handleDonationLinks,\n      handleDonationBankAccountName,\n      handleDonationProducts,\n    }} */\n    ,\n    handleNextPage: handleNextPage,\n    filters: filters,\n    resetFilters: resetFilters,\n    loading: query.loading,\n    data: !query.loading && query.data.getOrganizations,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(OngList, \"UcH3AIWdRqZt4a7pUxTwhXcDFKQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"]];\n});\n\n_c = OngList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OngList);\n\nvar _c;\n\n$RefreshReg$(_c, \"OngList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzRhOTIiXSwibmFtZXMiOlsicXVlcnlTY2hlbWEiLCJncWwiLCJmaWx0ZXJzRGVmYXVsdCIsImNvdW50cnkiLCJjYXVzZUlkIiwicGFnZSIsIk9uZ0xpc3QiLCJwcm9wcyIsInF1ZXJ5IiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsInJlZmV0Y2giLCJmZXRjaE1vcmUiLCJoYW5kbGVDb3VudHJ5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhdXNlSWQiLCJyZXNldEZpbHRlcnMiLCJoYW5kbGVOZXh0UGFnZSIsInVwZGF0ZVF1ZXJ5IiwicHJldlJlc3VsdCIsImZldGNoTW9yZVJlc3VsdCIsImdldE9yZ2FuaXphdGlvbnMiLCJvcmdhbml6YXRpb25zIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtDQUdBOztDQUdBOztBQUVBO0FBNEJBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0EsSUFBTUEsV0FBVyxHQUFHQywwREFBSCxtQkFBakI7QUEyQkEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxTQUFPLEVBQUUsRUFEWTtBQUVyQkMsU0FBTyxFQUFFLEVBRlk7QUFHckJDLE1BQUksRUFBRTtBQUNOOzs7O0FBSUE7O0FBUnFCLENBQXZCOztBQVVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBNEQ7QUFBQTs7QUFBQSxNQUNsRUMsS0FEa0UsR0FDeERELEtBRHdELENBQ2xFQyxLQURrRSxFQUUxRTs7QUFGMEUsa0JBRzVDQyxzREFBUSxDQUFDUCxjQUFELENBSG9DO0FBQUEsTUFHbkVRLE9BSG1FO0FBQUEsTUFHMURDLFVBSDBEOztBQUFBLGtCQUlyQ0MsK0RBQVEsQ0FBQ1os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LGFBQUY7QUFBaUJILG1CQUFhLEVBQWJBO0FBQWpCO0FBQ1I7Ozs7O0FBRkY7QUFPRSxrQkFBYyxFQUFFSyxjQVBsQjtBQVFFLFdBQU8sRUFBRVosT0FSWDtBQVNFLGdCQUFZLEVBQUVXLFlBVGhCO0FBVUUsV0FBTyxFQUFFYixLQUFLLENBQUNvQixPQVZqQjtBQVdFLFFBQUksRUFBRSxDQUFDcEIsS0FBSyxDQUFDb0IsT0FBUCxJQUFrQnBCLEtBQUssQ0FBQ00sSUFBTixDQUFXWSxnQkFYckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFvQkQsQ0F6RkQ7O0dBQU1wQixPO1VBSWlDTSx1RDs7O0tBSmpDTixPOztBQTJGU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSwgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHMgJiBVc2FibGVzXG5pbXBvcnQgQ2F1c2VMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZUxpc3QnXG5cbi8vIEFwb2xsb1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IGdldE9yZ2FuaXphdGlvbnNGaWx0ZXJzIH0gZnJvbSAnaW50ZXJmYWNlcy9vcmdhbml6YXRpb24nXG5cbmludGVyZmFjZSBvcmdhbml6YXRpb24ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzbHVnOiBzdHJpbmdcbiAgY291bnRyeTogc3RyaW5nXG4gIGxvZ29Vcmw6IHN0cmluZ1xuICBkb25hdGlvbkxpbmtzOiBzdHJpbmdbXVxuICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogc3RyaW5nXG4gIGRvbmF0aW9uUHJvZHVjdHM6IHN0cmluZ1xuICBjYXVzZXM6IHN0cmluZ1tdXG59XG5cbmludGVyZmFjZSBwYWdlRGF0YSB7XG4gIHRvdGFsT3JnYW5pemF0aW9uczogbnVtYmVyXG4gIGhhc05leHRQYWdlOiBib29sZWFuXG4gIGVuZEN1cnNvcjogc3RyaW5nXG59XG5cbmludGVyZmFjZSBkYXRhIHtcbiAgZ2V0T3JnYW5pemF0aW9uczoge1xuICAgIHBhZ2VEYXRhOiBwYWdlRGF0YVxuICAgIG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbltdXG4gIH1cbn1cblxuLy8gU2NoZW1hXG4vKiBjb25zdCBxdWVyeVNjaGVtYSA9IGdxbGBcbiAgcXVlcnkgT3JnYW5pemF0aW9ucyhcbiAgICAkY2F1c2VJZDogU3RyaW5nXG4gICAgJGNvdW50cnk6IFN0cmluZ1xuICAgICRkb25hdGlvbkxpbmtzOiBCb29sZWFuXG4gICAgJGRvbmF0aW9uQmFua0FjY291bnROYW1lOiBCb29sZWFuXG4gICAgJGRvbmF0aW9uUHJvZHVjdHM6IEJvb2xlYW5cbiAgICAkZW5kQ3Vyc29yOiBTdHJpbmdcbiAgKSB7XG4gICAgZ2V0T3JnYW5pemF0aW9ucyhcbiAgICAgIGZpcnN0OiAxMlxuICAgICAgZW5kQ3Vyc29yOiAkZW5kQ3Vyc29yXG4gICAgICBjYXVzZUlkOiAkY2F1c2VJZFxuICAgICAgY291bnRyeTogJGNvdW50cnlcbiAgICAgIGRvbmF0aW9uTGlua3M6ICRkb25hdGlvbkxpbmtzXG4gICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogJGRvbmF0aW9uQmFua0FjY291bnROYW1lXG4gICAgICBkb25hdGlvblByb2R1Y3RzOiAkZG9uYXRpb25Qcm9kdWN0c1xuICAgICkge1xuICAgICAgcGFnZURhdGEge1xuICAgICAgICB0b3RhbE9yZ2FuaXphdGlvbnNcbiAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgZW5kQ3Vyc29yXG4gICAgICB9XG4gICAgICBvcmdhbml6YXRpb25zIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBzbHVnXG4gICAgICAgIGNvdW50cnlcbiAgICAgICAgbG9nb1VybFxuICAgICAgICBkb25hdGlvbkxpbmtzXG4gICAgICAgIGRvbmF0aW9uQmFua0FjY291bnROYW1lXG4gICAgICAgIGRvbmF0aW9uUHJvZHVjdHNcbiAgICAgICAgY2F1c2VzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmAgKi9cblxuY29uc3QgcXVlcnlTY2hlbWEgPSBncWxgXG4gIHF1ZXJ5IGdldE9yZ2FuaXphdGlvbnNGaWx0ZXIoXG4gICAgJHBhZ2U6IEZsb2F0XG4gICAgJGNvdW50cnk6IFN0cmluZ1xuICAgICRjYXVzZUlkOiBTdHJpbmdcbiAgKSB7XG4gICAgZ2V0T3JnYW5pemF0aW9ucyhcbiAgICAgIGxpbWl0OiAxMlxuICAgICAgcGFnZTogJHBhZ2VcbiAgICAgIGNvdW50cnk6ICRjb3VudHJ5XG4gICAgICBjYXVzZUlkOiAkY2F1c2VJZFxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHNsdWdcbiAgICAgIGNvdW50cnlcbiAgICAgIGxvZ29VcmxcbiAgICAgIGRvbmF0aW9uTGlua3NcbiAgICAgIGRvbmF0aW9uQmFua0FjY291bnROYW1lXG4gICAgICBjYXVzZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IGZpbHRlcnNEZWZhdWx0ID0ge1xuICBjb3VudHJ5OiAnJyxcbiAgY2F1c2VJZDogJycsXG4gIHBhZ2U6IDAsXG4gIC8qICAgZG9uYXRpb25MaW5rczogZmFsc2UsXG4gIGRvbmF0aW9uQmFua0FjY291bnROYW1lOiBmYWxzZSxcblxuICBkb25hdGlvblByb2R1Y3RzOiBmYWxzZSwgKi9cbiAgLyogICBlbmRDdXJzb3I6ICcnLCAqL1xufVxuY29uc3QgT25nTGlzdCA9IChwcm9wczogeyBxdWVyeTogZ2V0T3JnYW5pemF0aW9uc0ZpbHRlcnMgfSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcHJvcHNcbiAgLy8gRmlsdGVyIFN0YXRlXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlKGZpbHRlcnNEZWZhdWx0KVxuICBjb25zdCB7IGRhdGEsIHJlZmV0Y2gsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkocXVlcnlTY2hlbWEsIHtcbiAgICB2YXJpYWJsZXM6IGZpbHRlcnMsXG4gIH0pXG4gIC8vIEZpbHRlciBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVDb3VudHJ5ID0gYXN5bmMgKGNvdW50cnkpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHsgLi4uZmlsdGVycywgY291bnRyeTogY291bnRyeSwgcGFnZTogMCB9KVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2F1c2VJZCA9IGFzeW5jIChjYXVzZUlkKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIGNhdXNlSWQ6IGNhdXNlSWQsIHBhZ2U6IDAgfSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJzKVxuICAgIGF3YWl0IHJlZmV0Y2goKVxuICB9XG4gIC8qICBcbiAgY29uc3QgaGFuZGxlRG9uYXRpb25MaW5rcyA9IGFzeW5jIChib29sZWFuKSA9PiB7XG4gICAgYXdhaXQgc2V0RmlsdGVycyh7IC4uLmZpbHRlcnMsIGRvbmF0aW9uTGlua3M6IGJvb2xlYW4gfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfSAqL1xuICAvKiAgIGNvbnN0IGhhbmRsZURvbmF0aW9uQmFua0FjY291bnROYW1lID0gYXN5bmMgKGJvb2xlYW4pID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHtcbiAgICAgIC4uLmZpbHRlcnMsXG4gICAgICBkb25hdGlvbkJhbmtBY2NvdW50TmFtZTogYm9vbGVhbixcbiAgICAgIGVuZEN1cnNvcjogJycsXG4gICAgfSlcbiAgICBhd2FpdCByZWZldGNoKClcbiAgfSAqL1xuICAvKiAgIGNvbnN0IGhhbmRsZURvbmF0aW9uUHJvZHVjdHMgPSBhc3luYyAoYm9vbGVhbikgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoe1xuICAgICAgLi4uZmlsdGVycyxcbiAgICAgIGRvbmF0aW9uUHJvZHVjdHM6IGJvb2xlYW4sXG4gICAgICBlbmRDdXJzb3I6ICcnLFxuICAgIH0pXG4gICAgYXdhaXQgcmVmZXRjaCgpXG4gIH0gKi9cbiAgY29uc3QgcmVzZXRGaWx0ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNldEZpbHRlcnMoZmlsdGVyc0RlZmF1bHQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzZXRGaWx0ZXJzKHsgLi4uZmlsdGVycywgcGFnZTogZmlsdGVycy5wYWdlICsgMSB9KVxuICAgIGZldGNoTW9yZSh7XG4gICAgICB2YXJpYWJsZXM6IGZpbHRlcnMsXG4gICAgICB1cGRhdGVRdWVyeTogKHByZXZSZXN1bHQ6IGFueSwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXZSZXN1bHRcblxuICAgICAgICBjb25zb2xlLmxvZyhwcmV2UmVzdWx0LCAncHJldicpXG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoTW9yZVJlc3VsdCwgJ21vcmUnKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdldE9yZ2FuaXphdGlvbnM6IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5LmRhdGEuZ2V0T3JnYW5pemF0aW9ucyxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgLi4ucXVlcnkuZGF0YS5nZXRPcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgICAuLi5mZXRjaE1vcmVSZXN1bHQ/LmdldE9yZ2FuaXphdGlvbnM/Lm9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgLyogICAgICAgICBmZXRjaE1vcmVSZXN1bHQuZ2V0T3JnYW5pemF0aW9ucyA9IFtcbiAgICAgICAgICAuLi5wcmV2UmVzdWx0LmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgLi4uZmV0Y2hNb3JlUmVzdWx0LmdldE9yZ2FuaXphdGlvbnMsXG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIGZldGNoTW9yZVJlc3VsdCAqL1xuICAgICAgfSxcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3JnYW5pemFjaW9uZXMgfCBnZW50ZW08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENhdXNlTGlzdFxuICAgICAgICBzZWxlY3Q9e3sgaGFuZGxlQ2F1c2VJZCwgaGFuZGxlQ291bnRyeSB9fVxuICAgICAgICAvKiAgY2hlY2tib3g9e3tcbiAgICAgICAgICBoYW5kbGVEb25hdGlvbkxpbmtzLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uQmFua0FjY291bnROYW1lLFxuICAgICAgICAgIGhhbmRsZURvbmF0aW9uUHJvZHVjdHMsXG4gICAgICAgIH19ICovXG4gICAgICAgIGhhbmRsZU5leHRQYWdlPXtoYW5kbGVOZXh0UGFnZX1cbiAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgcmVzZXRGaWx0ZXJzPXtyZXNldEZpbHRlcnN9XG4gICAgICAgIGxvYWRpbmc9e3F1ZXJ5LmxvYWRpbmd9XG4gICAgICAgIGRhdGE9eyFxdWVyeS5sb2FkaW5nICYmIHF1ZXJ5LmRhdGEuZ2V0T3JnYW5pemF0aW9uc31cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT25nTGlzdFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogcXVlcnlTY2hlbWEsXG4gICAgdmFyaWFibGVzOiBmaWx0ZXJzRGVmYXVsdCxcbiAgfSlcbiAgYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBxdWVyeSxcbiAgICB9LFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n");

/***/ })

})