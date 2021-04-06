webpackHotUpdate_N_E("pages/cause/[slug]",{

/***/ "./components/specific/cause/index.tsx":
/*!*********************************************!*\
  !*** ./components/specific/cause/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/utils/architecture/Layout/container */ \"./components/utils/architecture/Layout/container.tsx\");\n/* harmony import */ var _contenido__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenido */ \"./components/specific/cause/contenido/index.tsx\");\n/* harmony import */ var _donationData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donationData */ \"./components/specific/cause/donationData/index.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./components/specific/cause/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/components/specific/cause/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Cause(props) {\n  var data = props.data;\n  var coordenateX = data.coordenateX,\n      coordenateY = data.coordenateY,\n      city = data.city,\n      country = data.country;\n  /*   const coordenates = {\n    coordenateX,\n    coordenateY,\n  } */\n\n  return __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ongProfile,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.layoutCenter,\n    style: {\n      flexWrap: 'wrap'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(_components_utils_architecture_Layout_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ongProfileContent, \" \").concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.layout),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(_contenido__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    name: data.name,\n    description: data.description,\n    logo: data.logoUrl,\n    goal: data.goal,\n    howItIsUsingDonations: data.howItIsUsingDonations,\n    email: data.contactEmail,\n    phone: data.contactPhone,\n    whatsapp: data.whatsappPhone,\n    website: data.contactEmail,\n    facebook: data.facebookUrl,\n    instagram: data.instagramUrl,\n    twitter: data.twitterUrl,\n    bankAccount: data.donationBankAccountName,\n    donationLinks: data.donationLinks,\n    donationProducts: data.donationProducts,\n    city: city,\n    country: country,\n    causes: data.causes,\n    sponsors: data.sponsors,\n    linkedIn: data.linkedInUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }), __jsx(_donationData__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    logo: data.logoUrl,\n    name: data.name,\n    bankAccount: data.donationBankAccountName,\n    donationLinks: data.donationLinks,\n    donationProducts: data.donationProducts,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_c = Cause;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cause);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cause\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9pbmRleC50c3g/NzExYiJdLCJuYW1lcyI6WyJDYXVzZSIsInByb3BzIiwiZGF0YSIsImNvb3JkZW5hdGVYIiwiY29vcmRlbmF0ZVkiLCJjaXR5IiwiY291bnRyeSIsInN0eWxlcyIsIm9uZ1Byb2ZpbGUiLCJsYXlvdXRDZW50ZXIiLCJmbGV4V3JhcCIsIm9uZ1Byb2ZpbGVDb250ZW50IiwibGF5b3V0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9nb1VybCIsImdvYWwiLCJob3dJdElzVXNpbmdEb25hdGlvbnMiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ3aGF0c2FwcFBob25lIiwiZmFjZWJvb2tVcmwiLCJpbnN0YWdyYW1VcmwiLCJ0d2l0dGVyVXJsIiwiZG9uYXRpb25CYW5rQWNjb3VudE5hbWUiLCJkb25hdGlvbkxpbmtzIiwiZG9uYXRpb25Qcm9kdWN0cyIsImNhdXNlcyIsInNwb25zb3JzIiwibGlua2VkSW5VcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQThDO0FBQUEsTUFDcENDLElBRG9DLEdBQzNCRCxLQUQyQixDQUNwQ0MsSUFEb0M7QUFBQSxNQUVwQ0MsV0FGb0MsR0FFUUQsSUFGUixDQUVwQ0MsV0FGb0M7QUFBQSxNQUV2QkMsV0FGdUIsR0FFUUYsSUFGUixDQUV2QkUsV0FGdUI7QUFBQSxNQUVWQyxJQUZVLEdBRVFILElBRlIsQ0FFVkcsSUFGVTtBQUFBLE1BRUpDLE9BRkksR0FFUUosSUFGUixDQUVKSSxPQUZJO0FBSTVDOzs7OztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsWUFBdkI7QUFBcUMsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsWUFBS0gseURBQU0sQ0FBQ0ksaUJBQVosY0FBaUNKLHlEQUFNLENBQUNLLE1BQXhDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFDRSxRQUFJLEVBQUVWLElBQUksQ0FBQ1csSUFEYjtBQUVFLGVBQVcsRUFBRVgsSUFBSSxDQUFDWSxXQUZwQjtBQUdFLFFBQUksRUFBRVosSUFBSSxDQUFDYSxPQUhiO0FBSUUsUUFBSSxFQUFFYixJQUFJLENBQUNjLElBSmI7QUFLRSx5QkFBcUIsRUFBRWQsSUFBSSxDQUFDZSxxQkFMOUI7QUFNRSxTQUFLLEVBQUVmLElBQUksQ0FBQ2dCLFlBTmQ7QUFPRSxTQUFLLEVBQUVoQixJQUFJLENBQUNpQixZQVBkO0FBUUUsWUFBUSxFQUFFakIsSUFBSSxDQUFDa0IsYUFSakI7QUFTRSxXQUFPLEVBQUVsQixJQUFJLENBQUNnQixZQVRoQjtBQVVFLFlBQVEsRUFBRWhCLElBQUksQ0FBQ21CLFdBVmpCO0FBV0UsYUFBUyxFQUFFbkIsSUFBSSxDQUFDb0IsWUFYbEI7QUFZRSxXQUFPLEVBQUVwQixJQUFJLENBQUNxQixVQVpoQjtBQWFFLGVBQVcsRUFBRXJCLElBQUksQ0FBQ3NCLHVCQWJwQjtBQWNFLGlCQUFhLEVBQUV0QixJQUFJLENBQUN1QixhQWR0QjtBQWVFLG9CQUFnQixFQUFFdkIsSUFBSSxDQUFDd0IsZ0JBZnpCO0FBZ0JFLFFBQUksRUFBRXJCLElBaEJSO0FBaUJFLFdBQU8sRUFBRUMsT0FqQlg7QUFrQkUsVUFBTSxFQUFFSixJQUFJLENBQUN5QixNQWxCZjtBQW1CRSxZQUFRLEVBQUV6QixJQUFJLENBQUMwQixRQW5CakI7QUFvQkUsWUFBUSxFQUFFMUIsSUFBSSxDQUFDMkIsV0FwQmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQXVCRSxNQUFDLHFEQUFEO0FBQ0UsUUFBSSxFQUFFM0IsSUFBSSxDQUFDYSxPQURiO0FBRUUsUUFBSSxFQUFFYixJQUFJLENBQUNXLElBRmI7QUFHRSxlQUFXLEVBQUVYLElBQUksQ0FBQ3NCLHVCQUhwQjtBQUlFLGlCQUFhLEVBQUV0QixJQUFJLENBQUN1QixhQUp0QjtBQUtFLG9CQUFnQixFQUFFdkIsSUFBSSxDQUFDd0IsZ0JBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsQ0FERixDQUZGLENBREYsQ0FERjtBQXdDRDs7S0FoRFExQixLO0FBaURNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BlY2lmaWMvY2F1c2UvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dENvbnRhaW5lciBmcm9tICdAL2NvbXBvbmVudHMvdXRpbHMvYXJjaGl0ZWN0dXJlL0xheW91dC9jb250YWluZXInXG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwJ1xuaW1wb3J0IENvbnRlbmlkbyBmcm9tICcuL2NvbnRlbmlkbydcbmltcG9ydCBEb25hdGlvbkRhdGEgZnJvbSAnLi9kb25hdGlvbkRhdGEnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCB7IE9yZ2FuaXphdGlvbiB9IGZyb20gJ2ludGVyZmFjZXMvb3JnYW5pemF0aW9uJ1xuXG5mdW5jdGlvbiBDYXVzZShwcm9wczogeyBkYXRhOiBPcmdhbml6YXRpb24gfSkge1xuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IHsgY29vcmRlbmF0ZVgsIGNvb3JkZW5hdGVZLCBjaXR5LCBjb3VudHJ5IH0gPSBkYXRhXG5cbiAgLyogICBjb25zdCBjb29yZGVuYXRlcyA9IHtcbiAgICBjb29yZGVuYXRlWCxcbiAgICBjb29yZGVuYXRlWSxcbiAgfSAqL1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nUHJvZmlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxheW91dENlbnRlcn0gc3R5bGU9e3sgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgey8qICA8TWFwIGxvY2F0aW9uPXt7IGNvb3JkZW5hdGVzLCBjaXR5LCBjb3VudHJ5IH19IC8+ICovfVxuICAgICAgICA8TGF5b3V0Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMub25nUHJvZmlsZUNvbnRlbnR9ICR7c3R5bGVzLmxheW91dH1gfT5cbiAgICAgICAgICAgIDxDb250ZW5pZG9cbiAgICAgICAgICAgICAgbmFtZT17ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgbG9nbz17ZGF0YS5sb2dvVXJsfVxuICAgICAgICAgICAgICBnb2FsPXtkYXRhLmdvYWx9XG4gICAgICAgICAgICAgIGhvd0l0SXNVc2luZ0RvbmF0aW9ucz17ZGF0YS5ob3dJdElzVXNpbmdEb25hdGlvbnN9XG4gICAgICAgICAgICAgIGVtYWlsPXtkYXRhLmNvbnRhY3RFbWFpbH1cbiAgICAgICAgICAgICAgcGhvbmU9e2RhdGEuY29udGFjdFBob25lfVxuICAgICAgICAgICAgICB3aGF0c2FwcD17ZGF0YS53aGF0c2FwcFBob25lfVxuICAgICAgICAgICAgICB3ZWJzaXRlPXtkYXRhLmNvbnRhY3RFbWFpbH1cbiAgICAgICAgICAgICAgZmFjZWJvb2s9e2RhdGEuZmFjZWJvb2tVcmx9XG4gICAgICAgICAgICAgIGluc3RhZ3JhbT17ZGF0YS5pbnN0YWdyYW1Vcmx9XG4gICAgICAgICAgICAgIHR3aXR0ZXI9e2RhdGEudHdpdHRlclVybH1cbiAgICAgICAgICAgICAgYmFua0FjY291bnQ9e2RhdGEuZG9uYXRpb25CYW5rQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgIGRvbmF0aW9uTGlua3M9e2RhdGEuZG9uYXRpb25MaW5rc31cbiAgICAgICAgICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZGF0YS5kb25hdGlvblByb2R1Y3RzfVxuICAgICAgICAgICAgICBjaXR5PXtjaXR5fVxuICAgICAgICAgICAgICBjb3VudHJ5PXtjb3VudHJ5fVxuICAgICAgICAgICAgICBjYXVzZXM9e2RhdGEuY2F1c2VzfVxuICAgICAgICAgICAgICBzcG9uc29ycz17ZGF0YS5zcG9uc29yc31cbiAgICAgICAgICAgICAgbGlua2VkSW49e2RhdGEubGlua2VkSW5Vcmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPERvbmF0aW9uRGF0YVxuICAgICAgICAgICAgICBsb2dvPXtkYXRhLmxvZ29Vcmx9XG4gICAgICAgICAgICAgIG5hbWU9e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgYmFua0FjY291bnQ9e2RhdGEuZG9uYXRpb25CYW5rQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgIGRvbmF0aW9uTGlua3M9e2RhdGEuZG9uYXRpb25MaW5rc31cbiAgICAgICAgICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZGF0YS5kb25hdGlvblByb2R1Y3RzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F1c2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/specific/cause/index.tsx\n");

/***/ }),

/***/ "./components/specific/cause/map/index.tsx":
false,

/***/ "./node_modules/@mapbox/point-geometry/index.js":
false,

/***/ "./node_modules/eventemitter3/index.js":
false,

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
false,

/***/ "./node_modules/google-map-react/lib/index.js":
false,

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
false,

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
false,

/***/ "./node_modules/scriptjs/dist/script.js":
false

})