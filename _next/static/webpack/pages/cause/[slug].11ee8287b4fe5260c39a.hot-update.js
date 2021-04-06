webpackHotUpdate_N_E("pages/cause/[slug]",{

/***/ "./components/specific/cause/index.tsx":
/*!*********************************************!*\
  !*** ./components/specific/cause/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/utils/architecture/Layout/container */ \"./components/utils/architecture/Layout/container.tsx\");\n/* harmony import */ var _contenido__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenido */ \"./components/specific/cause/contenido/index.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"./components/specific/cause/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/components/specific/cause/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Cause(props) {\n  var data = props.data;\n  var coordenateX = data.coordenateX,\n      coordenateY = data.coordenateY,\n      city = data.city,\n      country = data.country,\n      logoUrl = data.logoUrl,\n      goal = data.goal;\n  /*   const coordenates = {\n    coordenateX,\n    coordenateY,\n  } */\n\n  return __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ongProfile,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.layoutCenter,\n    style: {\n      flexWrap: 'wrap'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(_components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ongProfileContent, \" \").concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.layout),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(_contenido__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    name: name,\n    description: description,\n    logo: logoUrl,\n    goal: goal,\n    howItIsUsingDonations: howItIsUsingDonations,\n    email: contactEmail,\n    phone: contactPhone,\n    whatsapp: whatsappPhone,\n    website: contactEmail,\n    facebook: facebookUrl,\n    instagram: instagramUrl,\n    twitter: twitterUrl,\n    bankAccount: donationBankAccountName,\n    donationLinks: donationLinks\n    /*               donationProducts={donationProducts}\n     */\n    ,\n    city: city,\n    country: country,\n    causes: causes\n    /*               sponsors={sponsors}\n    linkedIn={linkedInUrl} */\n    ,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }), __jsx(Donation, {\n    logo: logoUrl,\n    name: name,\n    bankAccount: donationBankAccountName,\n    donationLinks: donationLinks\n    /*               donationProducts={donationProducts}\n     */\n    ,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_c = Cause;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cause);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cause\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9pbmRleC50c3g/NzExYiJdLCJuYW1lcyI6WyJDYXVzZSIsInByb3BzIiwiZGF0YSIsImNvb3JkZW5hdGVYIiwiY29vcmRlbmF0ZVkiLCJjaXR5IiwiY291bnRyeSIsImxvZ29VcmwiLCJnb2FsIiwic3R5bGVzIiwib25nUHJvZmlsZSIsImxheW91dENlbnRlciIsImZsZXhXcmFwIiwib25nUHJvZmlsZUNvbnRlbnQiLCJsYXlvdXQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJob3dJdElzVXNpbmdEb25hdGlvbnMiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ3aGF0c2FwcFBob25lIiwiZmFjZWJvb2tVcmwiLCJpbnN0YWdyYW1VcmwiLCJ0d2l0dGVyVXJsIiwiZG9uYXRpb25CYW5rQWNjb3VudE5hbWUiLCJkb25hdGlvbkxpbmtzIiwiY2F1c2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUE4QztBQUFBLE1BQ3BDQyxJQURvQyxHQUMzQkQsS0FEMkIsQ0FDcENDLElBRG9DO0FBQUEsTUFFcENDLFdBRm9DLEdBRXVCRCxJQUZ2QixDQUVwQ0MsV0FGb0M7QUFBQSxNQUV2QkMsV0FGdUIsR0FFdUJGLElBRnZCLENBRXZCRSxXQUZ1QjtBQUFBLE1BRVZDLElBRlUsR0FFdUJILElBRnZCLENBRVZHLElBRlU7QUFBQSxNQUVKQyxPQUZJLEdBRXVCSixJQUZ2QixDQUVKSSxPQUZJO0FBQUEsTUFFS0MsT0FGTCxHQUV1QkwsSUFGdkIsQ0FFS0ssT0FGTDtBQUFBLE1BRWNDLElBRmQsR0FFdUJOLElBRnZCLENBRWNNLElBRmQ7QUFJNUM7Ozs7O0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx5REFBTSxDQUFDRSxZQUF2QjtBQUFxQyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsdUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxZQUFLSCx5REFBTSxDQUFDSSxpQkFBWixjQUFpQ0oseURBQU0sQ0FBQ0ssTUFBeEMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBRUMsSUFEUjtBQUVFLGVBQVcsRUFBRUMsV0FGZjtBQUdFLFFBQUksRUFBRVQsT0FIUjtBQUlFLFFBQUksRUFBRUMsSUFKUjtBQUtFLHlCQUFxQixFQUFFUyxxQkFMekI7QUFNRSxTQUFLLEVBQUVDLFlBTlQ7QUFPRSxTQUFLLEVBQUVDLFlBUFQ7QUFRRSxZQUFRLEVBQUVDLGFBUlo7QUFTRSxXQUFPLEVBQUVGLFlBVFg7QUFVRSxZQUFRLEVBQUVHLFdBVlo7QUFXRSxhQUFTLEVBQUVDLFlBWGI7QUFZRSxXQUFPLEVBQUVDLFVBWlg7QUFhRSxlQUFXLEVBQUVDLHVCQWJmO0FBY0UsaUJBQWEsRUFBRUM7QUFDZjs7QUFmRjtBQWdCTSxRQUFJLEVBQUVwQixJQWhCWjtBQWlCRSxXQUFPLEVBQUVDLE9BakJYO0FBa0JFLFVBQU0sRUFBRW9CO0FBQ1I7O0FBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQXVCRSxNQUFDLFFBQUQ7QUFDRSxRQUFJLEVBQUVuQixPQURSO0FBRUUsUUFBSSxFQUFFUSxJQUZSO0FBR0UsZUFBVyxFQUFFUyx1QkFIZjtBQUlFLGlCQUFhLEVBQUVDO0FBQ2Y7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixDQURGLENBRkYsQ0FERixDQURGO0FBeUNEOztLQWpEUXpCLEs7QUFrRE1BLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0Q29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy91dGlscy9hcmNoaXRlY3R1cmUvTGF5b3V0L2NvbnRhaW5lcidcbmltcG9ydCBNYXAgZnJvbSAnLi9tYXAnXG5pbXBvcnQgQ29udGVuaWRvIGZyb20gJy4vY29udGVuaWRvJ1xuaW1wb3J0IERvbmF0aW9uRGF0YSBmcm9tICcuL2RvbmF0aW9uRGF0YSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uIH0gZnJvbSAnaW50ZXJmYWNlcy9vcmdhbml6YXRpb24nXG5cbmZ1bmN0aW9uIENhdXNlKHByb3BzOiB7IGRhdGE6IE9yZ2FuaXphdGlvbiB9KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHNcbiAgY29uc3QgeyBjb29yZGVuYXRlWCwgY29vcmRlbmF0ZVksIGNpdHksIGNvdW50cnksIGxvZ29VcmwsIGdvYWwgfSA9IGRhdGFcblxuICAvKiAgIGNvbnN0IGNvb3JkZW5hdGVzID0ge1xuICAgIGNvb3JkZW5hdGVYLFxuICAgIGNvb3JkZW5hdGVZLFxuICB9ICovXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdQcm9maWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0Q2VudGVyfSBzdHlsZT17eyBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICB7LyogIDxNYXAgbG9jYXRpb249e3sgY29vcmRlbmF0ZXMsIGNpdHksIGNvdW50cnkgfX0gLz4gKi99XG4gICAgICAgIDxMYXlvdXRDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5vbmdQcm9maWxlQ29udGVudH0gJHtzdHlsZXMubGF5b3V0fWB9PlxuICAgICAgICAgICAgPENvbnRlbmlkb1xuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGxvZ289e2xvZ29Vcmx9XG4gICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgIGhvd0l0SXNVc2luZ0RvbmF0aW9ucz17aG93SXRJc1VzaW5nRG9uYXRpb25zfVxuICAgICAgICAgICAgICBlbWFpbD17Y29udGFjdEVtYWlsfVxuICAgICAgICAgICAgICBwaG9uZT17Y29udGFjdFBob25lfVxuICAgICAgICAgICAgICB3aGF0c2FwcD17d2hhdHNhcHBQaG9uZX1cbiAgICAgICAgICAgICAgd2Vic2l0ZT17Y29udGFjdEVtYWlsfVxuICAgICAgICAgICAgICBmYWNlYm9vaz17ZmFjZWJvb2tVcmx9XG4gICAgICAgICAgICAgIGluc3RhZ3JhbT17aW5zdGFncmFtVXJsfVxuICAgICAgICAgICAgICB0d2l0dGVyPXt0d2l0dGVyVXJsfVxuICAgICAgICAgICAgICBiYW5rQWNjb3VudD17ZG9uYXRpb25CYW5rQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgIGRvbmF0aW9uTGlua3M9e2RvbmF0aW9uTGlua3N9XG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZG9uYXRpb25Qcm9kdWN0c31cbiAgICAgICAgICAgICAgICovIGNpdHk9e2NpdHl9XG4gICAgICAgICAgICAgIGNvdW50cnk9e2NvdW50cnl9XG4gICAgICAgICAgICAgIGNhdXNlcz17Y2F1c2VzfVxuICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgIHNwb25zb3JzPXtzcG9uc29yc31cbiAgICAgICAgICAgICAgbGlua2VkSW49e2xpbmtlZEluVXJsfSAqL1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGlvblxuICAgICAgICAgICAgICBsb2dvPXtsb2dvVXJsfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBiYW5rQWNjb3VudD17ZG9uYXRpb25CYW5rQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgIGRvbmF0aW9uTGlua3M9e2RvbmF0aW9uTGlua3N9XG4gICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZG9uYXRpb25Qcm9kdWN0c31cbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dENvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXVzZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/specific/cause/index.tsx\n");

/***/ })

})