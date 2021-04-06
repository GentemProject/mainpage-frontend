webpackHotUpdate_N_E("pages/cause/[slug]",{

/***/ "./components/specific/cause/index.tsx":
/*!*********************************************!*\
  !*** ./components/specific/cause/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/utils/architecture/Layout/container */ \"./components/utils/architecture/Layout/container.tsx\");\n/* harmony import */ var _contenido__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenido */ \"./components/specific/cause/contenido/index.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"./components/specific/cause/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/components/specific/cause/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Cause(props) {\n  var data = props.data;\n  var coordenateX = data.coordenateX,\n      coordenateY = data.coordenateY,\n      city = data.city,\n      country = data.country,\n      logoUrl = data.logoUrl,\n      goal = data.goal,\n      causes = data.causes,\n      contactEmail = data.contactEmail,\n      contactPhone = data.contactPhone,\n      whatsappPhone = data.whatsappPhone,\n      name = data.name,\n      howItIsUsingDonations = data.howItIsUsingDonations,\n      description = data.description,\n      facebookUrl = data.facebookUrl,\n      instagramUrl = data.instagramUrl,\n      contactWebsite = data.contactWebsite,\n      twitterUrl = data.twitterUrl,\n      donationBankAccountName = data.donationBankAccountName,\n      donationLinks = data.donationLinks;\n  /*   const coordenates = {\n    coordenateX,\n    coordenateY,\n  } */\n\n  return __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ongProfile,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.layoutCenter,\n    style: {\n      flexWrap: 'wrap'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ongProfileContent, \" \").concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.layout),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(_contenido__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    name: name,\n    description: description,\n    logoUrl: logoUrl,\n    goal: goal,\n    howItIsUsingDonations: howItIsUsingDonations,\n    contactEmail: contactEmail,\n    contactPhone: contactPhone,\n    whatsappPhone: whatsappPhone,\n    contactWebsite: contactWebsite,\n    facebookUrl: facebookUrl,\n    instagramUrl: instagramUrl,\n    twitterUrl: twitterUrl,\n    donationBankAccountName: donationBankAccountName,\n    donationLinks: donationLinks\n    /*               donationProducts={donationProducts}\n     */\n    ,\n    city: city,\n    country: country,\n    causes: causes\n    /*               sponsors={sponsors}\n    linkedIn={linkedInUrl} */\n    ,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_c = Cause;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cause);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cause\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9pbmRleC50c3g/NzExYiJdLCJuYW1lcyI6WyJDYXVzZSIsInByb3BzIiwiZGF0YSIsImNvb3JkZW5hdGVYIiwiY29vcmRlbmF0ZVkiLCJjaXR5IiwiY291bnRyeSIsImxvZ29VcmwiLCJnb2FsIiwiY2F1c2VzIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwid2hhdHNhcHBQaG9uZSIsIm5hbWUiLCJob3dJdElzVXNpbmdEb25hdGlvbnMiLCJkZXNjcmlwdGlvbiIsImZhY2Vib29rVXJsIiwiaW5zdGFncmFtVXJsIiwiY29udGFjdFdlYnNpdGUiLCJ0d2l0dGVyVXJsIiwiZG9uYXRpb25CYW5rQWNjb3VudE5hbWUiLCJkb25hdGlvbkxpbmtzIiwic3R5bGVzIiwib25nUHJvZmlsZSIsImxheW91dENlbnRlciIsImZsZXhXcmFwIiwib25nUHJvZmlsZUNvbnRlbnQiLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQThDO0FBQUEsTUFDcENDLElBRG9DLEdBQzNCRCxLQUQyQixDQUNwQ0MsSUFEb0M7QUFBQSxNQUcxQ0MsV0FIMEMsR0FzQnhDRCxJQXRCd0MsQ0FHMUNDLFdBSDBDO0FBQUEsTUFJMUNDLFdBSjBDLEdBc0J4Q0YsSUF0QndDLENBSTFDRSxXQUowQztBQUFBLE1BSzFDQyxJQUwwQyxHQXNCeENILElBdEJ3QyxDQUsxQ0csSUFMMEM7QUFBQSxNQU0xQ0MsT0FOMEMsR0FzQnhDSixJQXRCd0MsQ0FNMUNJLE9BTjBDO0FBQUEsTUFPMUNDLE9BUDBDLEdBc0J4Q0wsSUF0QndDLENBTzFDSyxPQVAwQztBQUFBLE1BUTFDQyxJQVIwQyxHQXNCeENOLElBdEJ3QyxDQVExQ00sSUFSMEM7QUFBQSxNQVMxQ0MsTUFUMEMsR0FzQnhDUCxJQXRCd0MsQ0FTMUNPLE1BVDBDO0FBQUEsTUFVMUNDLFlBVjBDLEdBc0J4Q1IsSUF0QndDLENBVTFDUSxZQVYwQztBQUFBLE1BVzFDQyxZQVgwQyxHQXNCeENULElBdEJ3QyxDQVcxQ1MsWUFYMEM7QUFBQSxNQVkxQ0MsYUFaMEMsR0FzQnhDVixJQXRCd0MsQ0FZMUNVLGFBWjBDO0FBQUEsTUFhMUNDLElBYjBDLEdBc0J4Q1gsSUF0QndDLENBYTFDVyxJQWIwQztBQUFBLE1BYzFDQyxxQkFkMEMsR0FzQnhDWixJQXRCd0MsQ0FjMUNZLHFCQWQwQztBQUFBLE1BZTFDQyxXQWYwQyxHQXNCeENiLElBdEJ3QyxDQWUxQ2EsV0FmMEM7QUFBQSxNQWdCMUNDLFdBaEIwQyxHQXNCeENkLElBdEJ3QyxDQWdCMUNjLFdBaEIwQztBQUFBLE1BaUIxQ0MsWUFqQjBDLEdBc0J4Q2YsSUF0QndDLENBaUIxQ2UsWUFqQjBDO0FBQUEsTUFrQjFDQyxjQWxCMEMsR0FzQnhDaEIsSUF0QndDLENBa0IxQ2dCLGNBbEIwQztBQUFBLE1BbUIxQ0MsVUFuQjBDLEdBc0J4Q2pCLElBdEJ3QyxDQW1CMUNpQixVQW5CMEM7QUFBQSxNQW9CMUNDLHVCQXBCMEMsR0FzQnhDbEIsSUF0QndDLENBb0IxQ2tCLHVCQXBCMEM7QUFBQSxNQXFCMUNDLGFBckIwQyxHQXNCeENuQixJQXRCd0MsQ0FxQjFDbUIsYUFyQjBDO0FBd0I1Qzs7Ozs7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELHlEQUFNLENBQUNFLFlBQXZCO0FBQXFDLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyx1RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtILHlEQUFNLENBQUNJLGlCQUFaLGNBQWlDSix5REFBTSxDQUFDSyxNQUF4QyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFFZCxJQURSO0FBRUUsZUFBVyxFQUFFRSxXQUZmO0FBR0UsV0FBTyxFQUFFUixPQUhYO0FBSUUsUUFBSSxFQUFFQyxJQUpSO0FBS0UseUJBQXFCLEVBQUVNLHFCQUx6QjtBQU1FLGdCQUFZLEVBQUVKLFlBTmhCO0FBT0UsZ0JBQVksRUFBRUMsWUFQaEI7QUFRRSxpQkFBYSxFQUFFQyxhQVJqQjtBQVNFLGtCQUFjLEVBQUVNLGNBVGxCO0FBVUUsZUFBVyxFQUFFRixXQVZmO0FBV0UsZ0JBQVksRUFBRUMsWUFYaEI7QUFZRSxjQUFVLEVBQUVFLFVBWmQ7QUFhRSwyQkFBdUIsRUFBRUMsdUJBYjNCO0FBY0UsaUJBQWEsRUFBRUM7QUFDZjs7QUFmRjtBQWdCTSxRQUFJLEVBQUVoQixJQWhCWjtBQWlCRSxXQUFPLEVBQUVDLE9BakJYO0FBa0JFLFVBQU0sRUFBRUc7QUFDUjs7QUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGRixDQURGLENBREY7QUF5Q0Q7O0tBckVRVCxLO0FBc0VNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BlY2lmaWMvY2F1c2UvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dENvbnRhaW5lciBmcm9tICdAL2NvbXBvbmVudHMvdXRpbHMvYXJjaGl0ZWN0dXJlL0xheW91dC9jb250YWluZXInXG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwJ1xuaW1wb3J0IENvbnRlbmlkbyBmcm9tICcuL2NvbnRlbmlkbydcbmltcG9ydCBEb25hdGlvbkRhdGEgZnJvbSAnLi9kb25hdGlvbkRhdGEnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IE9yZ2FuaXphdGlvbiB9IGZyb20gJ2ludGVyZmFjZXMvb3JnYW5pemF0aW9uJ1xuXG5mdW5jdGlvbiBDYXVzZShwcm9wczogeyBkYXRhOiBPcmdhbml6YXRpb24gfSkge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICBjb29yZGVuYXRlWCxcbiAgICBjb29yZGVuYXRlWSxcbiAgICBjaXR5LFxuICAgIGNvdW50cnksXG4gICAgbG9nb1VybCxcbiAgICBnb2FsLFxuICAgIGNhdXNlcyxcbiAgICBjb250YWN0RW1haWwsXG4gICAgY29udGFjdFBob25lLFxuICAgIHdoYXRzYXBwUGhvbmUsXG4gICAgbmFtZSxcbiAgICBob3dJdElzVXNpbmdEb25hdGlvbnMsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZmFjZWJvb2tVcmwsXG4gICAgaW5zdGFncmFtVXJsLFxuICAgIGNvbnRhY3RXZWJzaXRlLFxuICAgIHR3aXR0ZXJVcmwsXG4gICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWUsXG4gICAgZG9uYXRpb25MaW5rcyxcbiAgfSA9IGRhdGFcblxuICAvKiAgIGNvbnN0IGNvb3JkZW5hdGVzID0ge1xuICAgIGNvb3JkZW5hdGVYLFxuICAgIGNvb3JkZW5hdGVZLFxuICB9ICovXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdQcm9maWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0Q2VudGVyfSBzdHlsZT17eyBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICB7LyogIDxNYXAgbG9jYXRpb249e3sgY29vcmRlbmF0ZXMsIGNpdHksIGNvdW50cnkgfX0gLz4gKi99XG4gICAgICAgIDxMYXlvdXRDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5vbmdQcm9maWxlQ29udGVudH0gJHtzdHlsZXMubGF5b3V0fWB9PlxuICAgICAgICAgICAgPENvbnRlbmlkb1xuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGxvZ29Vcmw9e2xvZ29Vcmx9XG4gICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgIGhvd0l0SXNVc2luZ0RvbmF0aW9ucz17aG93SXRJc1VzaW5nRG9uYXRpb25zfVxuICAgICAgICAgICAgICBjb250YWN0RW1haWw9e2NvbnRhY3RFbWFpbH1cbiAgICAgICAgICAgICAgY29udGFjdFBob25lPXtjb250YWN0UGhvbmV9XG4gICAgICAgICAgICAgIHdoYXRzYXBwUGhvbmU9e3doYXRzYXBwUGhvbmV9XG4gICAgICAgICAgICAgIGNvbnRhY3RXZWJzaXRlPXtjb250YWN0V2Vic2l0ZX1cbiAgICAgICAgICAgICAgZmFjZWJvb2tVcmw9e2ZhY2Vib29rVXJsfVxuICAgICAgICAgICAgICBpbnN0YWdyYW1Vcmw9e2luc3RhZ3JhbVVybH1cbiAgICAgICAgICAgICAgdHdpdHRlclVybD17dHdpdHRlclVybH1cbiAgICAgICAgICAgICAgZG9uYXRpb25CYW5rQWNjb3VudE5hbWU9e2RvbmF0aW9uQmFua0FjY291bnROYW1lfVxuICAgICAgICAgICAgICBkb25hdGlvbkxpbmtzPXtkb25hdGlvbkxpbmtzfVxuICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgIGRvbmF0aW9uUHJvZHVjdHM9e2RvbmF0aW9uUHJvZHVjdHN9XG4gICAgICAgICAgICAgICAqLyBjaXR5PXtjaXR5fVxuICAgICAgICAgICAgICBjb3VudHJ5PXtjb3VudHJ5fVxuICAgICAgICAgICAgICBjYXVzZXM9e2NhdXNlc31cbiAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICBzcG9uc29ycz17c3BvbnNvcnN9XG4gICAgICAgICAgICAgIGxpbmtlZEluPXtsaW5rZWRJblVybH0gKi9cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogIDxEb25hdGlvblxuICAgICAgICAgICAgICBsb2dvPXtsb2dvVXJsfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBiYW5rQWNjb3VudD17ZG9uYXRpb25CYW5rQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgIGRvbmF0aW9uTGlua3M9e2RvbmF0aW9uTGlua3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZG9uYXRpb25Qcm9kdWN0c31cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F1c2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/specific/cause/index.tsx\n");

/***/ })

})