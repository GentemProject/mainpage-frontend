webpackHotUpdate_N_E("pages/cause/[slug]",{

/***/ "./components/specific/cause/donationData/index.tsx":
/*!**********************************************************!*\
  !*** ./components/specific/cause/donationData/index.tsx ***!
  \**********************************************************/
/*! exports provided: default, ResponsiveDonate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResponsiveDonate\", function() { return ResponsiveDonate; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usables_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../usables/buttons */ \"./components/usables/buttons/index.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.module.scss */ \"./components/specific/cause/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/maticaba/matidev/mainpage-frontend/components/specific/cause/donationData/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction DonationData(props) {\n  var name = props.name,\n      donationLinks = props.donationLinks,\n      bankAccount = props.bankAccount,\n      logo = props.logo;\n  return __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileHowToDonate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, (bankAccount !== '' || donationLinks !== '') &&\n  /*  ||\n  donationProducts[0] !== '' */\n  __jsx(ResponsiveDonate, {\n    logo: logo,\n    name: name,\n    bankAccount: bankAccount,\n    donationLinks: donationLinks\n    /*      donationProducts={donationProducts} */\n    ,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  })));\n}\n\n_c = DonationData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DonationData);\nfunction ResponsiveDonate(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileUserModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileUserModalImg,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, logo ? __jsx(\"img\", {\n    src: logo,\n    alt: \"User 1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }) : __jsx(\"img\", {\n    src: \"/logoDefault.png\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileUserModalTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, name))), __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileHowToDonateTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"\\xBFC\\xF3mo donar?\")), donationLinks[0] && __jsx(\"div\", {\n    className: \"OngProfile__HowToDonate--Donate\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h4\", {\n    className: \"OngProfile__Donate--Title h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \" Dona Online \"), __jsx(_usables_buttons__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    styleProp: {\n      margin: '12px 0'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }), __jsx(\"a\", {\n    href: donationLinks[0],\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(_usables_buttons__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, \" Haz tu donaci\\xF3n online \"))))), bankAccount && __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.howToDonateBank,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    className: \"OngProfile__DonateWay--Bank h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"Consigna a una cuenta bancaria\"), __jsx(_usables_buttons__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    styleProp: {\n      margin: '12px 0'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    className: \"OngProfile__DonateWay--BankID \".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.span),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, bankAccount)), donationProducts && __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ongProfileHowToDonateDonateProduct,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    className: \"OngProfile__DonateProduct--Title h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, \"Haz una donaci\\xF3n de productos\"), __jsx(_usables_buttons__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    styleProp: {\n      margin: '12px 0'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"OngProfile__DonateProduct--DonateWay\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    className: \"span\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, donationProducts))));\n}\n_c2 = ResponsiveDonate;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DonationData\");\n$RefreshReg$(_c2, \"ResponsiveDonate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9kb25hdGlvbkRhdGEvaW5kZXgudHN4P2YzMTMiXSwibmFtZXMiOlsiRG9uYXRpb25EYXRhIiwicHJvcHMiLCJuYW1lIiwiZG9uYXRpb25MaW5rcyIsImJhbmtBY2NvdW50IiwibG9nbyIsInN0eWxlcyIsIm9uZ1Byb2ZpbGVIb3dUb0RvbmF0ZSIsIlJlc3BvbnNpdmVEb25hdGUiLCJvbmdQcm9maWxlVXNlck1vZGFsIiwib25nUHJvZmlsZVVzZXJNb2RhbEltZyIsIm9uZ1Byb2ZpbGVVc2VyTW9kYWxUaXRsZSIsIm9uZ1Byb2ZpbGVIb3dUb0RvbmF0ZVRpdGxlIiwibWFyZ2luIiwiaG93VG9Eb25hdGVCYW5rIiwic3BhbiIsImRvbmF0aW9uUHJvZHVjdHMiLCJvbmdQcm9maWxlSG93VG9Eb25hdGVEb25hdGVQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQU1HO0FBQUEsTUFDT0MsSUFEUCxHQUNrREQsS0FEbEQsQ0FDT0MsSUFEUDtBQUFBLE1BQ2FDLGFBRGIsR0FDa0RGLEtBRGxELENBQ2FFLGFBRGI7QUFBQSxNQUM0QkMsV0FENUIsR0FDa0RILEtBRGxELENBQzRCRyxXQUQ1QjtBQUFBLE1BQ3lDQyxJQUR6QyxHQUNrREosS0FEbEQsQ0FDeUNJLElBRHpDO0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MscUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ0gsV0FBVyxLQUFLLEVBQWhCLElBQ0FELGFBQWEsS0FDWCxFQUZIO0FBRU87O0FBRU4sUUFBQyxnQkFBRDtBQUNFLFFBQUksRUFBRUUsSUFEUjtBQUVFLFFBQUksRUFBRUgsSUFGUjtBQUdFLGVBQVcsRUFB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RUFBRTtBQUNUSixZQUFNLEVBQUU7QUFEQyxLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVNFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCRyxnQkFBeEIsQ0FERixDQVRGLENBckRKLENBREY7QUFzRUQ7TUE3RWVSLGdCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcGVjaWZpYy9jYXVzZS9kb25hdGlvbkRhdGEvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdXNhYmxlcy9idXR0b25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZS5tb2R1bGUuc2NzcydcblxuZnVuY3Rpb24gRG9uYXRpb25EYXRhKHByb3BzOiB7XG4gIGxvZ286IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgYmFua0FjY291bnQ6IHN0cmluZ1xuICBkb25hdGlvbkxpbmtzOiBzdHJpbmdcbiAgLyogICBkb25hdGlvblByb2R1Y3RzLCAqL1xufSkge1xuICBjb25zdCB7IG5hbWUsIGRvbmF0aW9uTGlua3MsIGJhbmtBY2NvdW50LCBsb2dvIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nUHJvZmlsZUhvd1RvRG9uYXRlfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsoYmFua0FjY291bnQgIT09ICcnIHx8XG4gICAgICAgICAgZG9uYXRpb25MaW5rcyAhPT1cbiAgICAgICAgICAgICcnKSAvKiAgfHxcbiAgICAgICAgICBkb25hdGlvblByb2R1Y3RzWzBdICE9PSAnJyAqLyAmJiAoXG4gICAgICAgICAgPFJlc3BvbnNpdmVEb25hdGVcbiAgICAgICAgICAgIGxvZ289e2xvZ299XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgYmFua0FjY291bnQ9e2JhbmtBY2NvdW50fVxuICAgICAgICAgICAgZG9uYXRpb25MaW5rcz17ZG9uYXRpb25MaW5rc31cbiAgICAgICAgICAgIC8qICAgICAgZG9uYXRpb25Qcm9kdWN0cz17ZG9uYXRpb25Qcm9kdWN0c30gKi9cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IERvbmF0aW9uRGF0YVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2l2ZURvbmF0ZShwcm9wczoge1xuICBsb2dvOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGJhbmtBY2NvdW50OiBzdHJpbmdcbiAgZG9uYXRpb25MaW5rczogc3RyaW5nW11cbiAgLyogICBkb25hdGlvblByb2R1Y3RzLCAqL1xufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ1Byb2ZpbGVVc2VyTW9kYWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ1Byb2ZpbGVVc2VyTW9kYWxJbWd9PlxuICAgICAgICAgIHtsb2dvID8gKFxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cIlVzZXIgMVwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ29EZWZhdWx0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMub25nUHJvZmlsZVVzZXJNb2RhbFRpdGxlfT57bmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ1Byb2ZpbGVIb3dUb0RvbmF0ZVRpdGxlfT5cbiAgICAgICAgPGgzPsK/Q8OzbW8gZG9uYXI/PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAge2RvbmF0aW9uTGlua3NbMF0gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9uZ1Byb2ZpbGVfX0hvd1RvRG9uYXRlLS1Eb25hdGVcIj5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIk9uZ1Byb2ZpbGVfX0RvbmF0ZS0tVGl0bGUgaDRcIj4gRG9uYSBPbmxpbmUgPC9oND5cbiAgICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICAgIHN0eWxlUHJvcD17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzEycHggMCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17ZG9uYXRpb25MaW5rc1swXX1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+IEhheiB0dSBkb25hY2nDs24gb25saW5lIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtiYW5rQWNjb3VudCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93VG9Eb25hdGVCYW5rfT5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiT25nUHJvZmlsZV9fRG9uYXRlV2F5LS1CYW5rIGg0XCI+XG4gICAgICAgICAgICBDb25zaWduYSBhIHVuYSBjdWVudGEgYmFuY2FyaWFcbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICBzdHlsZVByb3A9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMTJweCAwJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BPbmdQcm9maWxlX19Eb25hdGVXYXktLUJhbmtJRCAke3N0eWxlcy5zcGFufWB9PlxuICAgICAgICAgICAge2JhbmtBY2NvdW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2RvbmF0aW9uUHJvZHVjdHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ1Byb2ZpbGVIb3dUb0RvbmF0ZURvbmF0ZVByb2R1Y3R9PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJPbmdQcm9maWxlX19Eb25hdGVQcm9kdWN0LS1UaXRsZSBoNFwiPlxuICAgICAgICAgICAgSGF6IHVuYSBkb25hY2nDs24gZGUgcHJvZHVjdG9zXG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgc3R5bGVQcm9wPXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogJzEycHggMCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPbmdQcm9maWxlX19Eb25hdGVQcm9kdWN0LS1Eb25hdGVXYXlcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj57ZG9uYXRpb25Qcm9kdWN0c308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/specific/cause/donationData/index.tsx\n");

/***/ })

})