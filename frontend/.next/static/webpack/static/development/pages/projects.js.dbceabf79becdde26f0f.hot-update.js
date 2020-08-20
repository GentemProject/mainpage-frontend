webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/Contenido.tsx":
/*!*******************************************!*\
  !*** ./components/projects/Contenido.tsx ***!
  \*******************************************/
/*! exports provided: default, ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContent\", function() { return ModalContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchSelect */ \"./components/projects/SearchSelect.tsx\");\n/* harmony import */ var _TextCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextCheck */ \"./components/projects/TextCheck.tsx\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ \"./node_modules/@material-ui/core/esm/Select/index.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/filters */ \"./api/filters.ts\");\n/* harmony import */ var _api_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/categories.json */ \"./api/categories.json\");\nvar _api_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/categories.json */ \"./api/categories.json\", 1);\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/onglist.module.scss */ \"./styles/onglist.module.scss\");\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/home/uriel/gentemapp/frontend/components/projects/Contenido.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // Components\n\n\n // Material UI for Select\n\n\n\n\n //APi\n\n // Style & Api test\n\n\n\n\nfunction Contenido() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      ciudad = _useState[0],\n      setCiudad = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      comunidad = _useState2[0],\n      setComunidad = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    country: '',\n    products: false,\n    paymenData: false,\n    transfer: false,\n    community: 0\n  }),\n      filters = _useState3[0],\n      setFilters = _useState3[1];\n\n  var changeSelect = function changeSelect(motive, select) {\n    var temp = _objectSpread({}, filters);\n\n    if (motive === \"country\") {\n      temp.country = select;\n    }\n\n    if (motive === \"community\") {\n      temp.community = select;\n    }\n\n    setFilters(temp);\n  };\n\n  var changeFilters = function changeFilters(res, motive) {\n    var temp = filters;\n\n    if (motive === 'products') {\n      temp.products = res;\n    }\n\n    if (motive === 'paymenData') {\n      temp.paymenData = res;\n    }\n\n    if (motive === \"transfer\") {\n      temp.transfer = res;\n    }\n\n    setFilters(temp);\n    console.log(filters);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getDistinct\"])().then(function (data) {\n      setCiudad(data);\n    }, function (error) {\n      console.log(error);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getForFilters\"])(filters).then(function (data) {\n      console.log(data);\n    });\n  }, [filters]);\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearch\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearchContainer\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container__info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"h6\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \" Usa los filtros para encontrar proyectos que quieras apoyar \")), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Ubicaci\\xF3n\",\n    info: \"Selecciona la ciudad en la que quieres que tu donaci\\xF3n tenga efecto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Ciudad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: ciudad,\n    onChange: function onChange(e) {\n      changeSelect('country', e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, ciudad && ciudad.map(function (data) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: data,\n      value: data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, data);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Comunidad afectada\",\n    info: \"Selecciona la comunidad a la que quieras apoyar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"Comunidad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: comunidad,\n    onChange: function onChange(e) {\n      changeSelect('community', e.target.value.toString());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, _api_categories_json__WEBPACK_IMPORTED_MODULE_9__[\"data\"].map(function (cat) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: cat.cat_id[0],\n      value: cat.cat_id[0],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }\n    }, cat.cat_name);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Tipo de donaci\\xF3n\",\n    info: \"Selecciona la forma en la que quieras donar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar online\",\n    desc: \"Link para donar desde casa\",\n    change: changeFilters,\n    name: \"paymenData\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Transferencia bancaria\",\n    desc: \"Informaci\\xF3n de las cuentas para que hagas una transferencia\",\n    change: changeFilters,\n    name: \"transfer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar productos\",\n    desc: \"Informaci\\xF3n sobre como entregar los productos que quieras donar\",\n    change: changeFilters,\n    name: \"products\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Contenido, \"rixdc6SgwXFiizE9hTWXNsq7rHg=\");\n\n_c = Contenido;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contenido);\nfunction ModalContent() {\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModal\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModalLogo\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/logoAnimado.svg\",\n    alt: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 9\n    }\n  })), __jsx(Contenido, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = ModalContent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Contenido\");\n$RefreshReg$(_c2, \"ModalContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL0NvbnRlbmlkby50c3g/N2MwMyJdLCJuYW1lcyI6WyJDb250ZW5pZG8iLCJ1c2VTdGF0ZSIsImNpdWRhZCIsInNldENpdWRhZCIsImNvbXVuaWRhZCIsInNldENvbXVuaWRhZCIsImNvdW50cnkiLCJwcm9kdWN0cyIsInBheW1lbkRhdGEiLCJ0cmFuc2ZlciIsImNvbW11bml0eSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY2hhbmdlU2VsZWN0IiwibW90aXZlIiwic2VsZWN0IiwidGVtcCIsImNoYW5nZUZpbHRlcnMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0RGlzdGluY3QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiZ2V0Rm9yRmlsdGVycyIsInN0eWxlcyIsIndpZHRoIiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidG9TdHJpbmciLCJhcGkiLCJjYXQiLCJjYXRfaWQiLCJjYXRfbmFtZSIsIk1vZGFsQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVlRixzREFBUSxFQUZ2QjtBQUFBLE1BRVpHLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUFBLG1CQUdXSixzREFBUSxDQUFVO0FBQzlDSyxXQUFPLEVBQUUsRUFEcUM7QUFFOUNDLFlBQVEsRUFBRSxLQUZvQztBQUc5Q0MsY0FBVSxFQUFFLEtBSGtDO0FBSTlDQyxZQUFRLEVBQUUsS0FKb0M7QUFLOUNDLGFBQVMsRUFBRTtBQUxtQyxHQUFWLENBSG5CO0FB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LEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQ7TUFUZVksWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdHMvQ29udGVuaWRvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFNlYXJjaFNlbGVjdCBmcm9tICcuL1NlYXJjaFNlbGVjdCdcbmltcG9ydCBUZXh0Q2hlY2sgZnJvbSAnLi9UZXh0Q2hlY2snXG5cbi8vIE1hdGVyaWFsIFVJIGZvciBTZWxlY3RcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0J1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSdcbi8vQVBpXG5pbXBvcnQgeyBnZXREaXN0aW5jdCwgZ2V0Rm9yRmlsdGVycyB9IGZyb20gJy4uLy4uL2FwaS9maWx0ZXJzJ1xuLy8gU3R5bGUgJiBBcGkgdGVzdFxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uL2FwaS9jYXRlZ29yaWVzLmpzb24nXG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL29uZ2xpc3QubW9kdWxlLnNjc3MnXG5pbnRlcmZhY2UgZmlsdGVycyB7XG4gIGNvdW50cnk6IHN0cmluZ1xuICBwcm9kdWN0czogYm9vbGVhblxuICBwYXltZW5EYXRhOiBib29sZWFuXG4gIHRyYW5zZmVyOiBib29sZWFuXG4gIGNvbW11bml0eTogbnVtYmVyXG59XG5mdW5jdGlvbiBDb250ZW5pZG8oKSB7XG4gIGNvbnN0IFtjaXVkYWQsIHNldENpdWRhZF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2NvbXVuaWRhZCwgc2V0Q29tdW5pZGFkXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8ZmlsdGVycz4oe1xuICAgIGNvdW50cnk6ICcnLFxuICAgIHByb2R1Y3RzOiBmYWxzZSxcbiAgICBwYXltZW5EYXRhOiBmYWxzZSxcbiAgICB0cmFuc2ZlcjogZmFsc2UsXG4gICAgY29tbXVuaXR5OiAwLFxuICB9KVxuICBjb25zdCBjaGFuZ2VTZWxlY3QgPSAobW90aXZlOiBzdHJpbmcsIHNlbGVjdDogYW55KSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IHsuLi5maWx0ZXJzfTtcbiAgICBpZihtb3RpdmUgPT09IFwiY291bnRyeVwiKXtcbiAgICAgIHRlbXAuY291bnRyeSA9IHNlbGVjdDtcbiAgICB9XG4gICAgaWYobW90aXZlID09PSBcImNvbW11bml0eVwiKXtcbiAgICAgIHRlbXAuY29tbXVuaXR5ID0gc2VsZWN0XG4gICAgfVxuICAgIHNldEZpbHRlcnModGVtcClcbiAgfVxuICBjb25zdCBjaGFuZ2VGaWx0ZXJzID0gKCAgcmVzOiBib29sZWFuLCBtb3RpdmU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBmaWx0ZXJzO1xuICAgIGlmIChtb3RpdmUgPT09ICdwcm9kdWN0cycpIHtcbiAgICAgIHRlbXAucHJvZHVjdHMgPSByZXNcbiAgICB9XG4gICAgaWYgKG1vdGl2ZSA9PT0gJ3BheW1lbkRhdGEnKSB7XG4gICAgICB0ZW1wLnBheW1lbkRhdGEgPSByZXNcbiAgICB9XG4gICAgaWYobW90aXZlID09PSBcInRyYW5zZmVyXCIpe1xuICAgICAgdGVtcC50cmFuc2ZlciA9IHJlcztcbiAgICB9XG4gICAgc2V0RmlsdGVycyh0ZW1wKVxuICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREaXN0aW5jdCgpLnRoZW4oXG4gICAgICAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDaXVkYWQoZGF0YSlcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgKVxuICB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0Rm9yRmlsdGVycyhmaWx0ZXJzKS50aGVuKChkYXRhKT0+e1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KVxuICB9LCBbZmlsdGVyc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ0xpc3RTZWFyY2h9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdMaXN0U2VhcmNoQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfX2luZm9cIj5cbiAgICAgICAgICA8aDY+IFVzYSBsb3MgZmlsdHJvcyBwYXJhIGVuY29udHJhciBwcm95ZWN0b3MgcXVlIHF1aWVyYXMgYXBveWFyIDwvaDY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxTZWFyY2hTZWxlY3RcbiAgICAgICAgICB0aXRsZT1cIlViaWNhY2nDs25cIlxuICAgICAgICAgIGluZm89XCJTZWxlY2Npb25hIGxhIGNpdWRhZCBlbiBsYSBxdWUgcXVpZXJlcyBxdWUgdHUgZG9uYWNpw7NuIHRlbmdhIGVmZWN0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAnMTJweCcgfX0+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkNpdWRhZDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NpdWRhZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlU2VsZWN0KCdjb3VudHJ5JywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaXVkYWQgJiZcbiAgICAgICAgICAgICAgICBjaXVkYWQubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtkYXRhfSB2YWx1ZT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L1NlYXJjaFNlbGVjdD5cbiAgICAgICAgPFNlYXJjaFNlbGVjdFxuICAgICAgICAgIHRpdGxlPVwiQ29tdW5pZGFkIGFmZWN0YWRhXCJcbiAgICAgICAgICBpbmZvPVwiU2VsZWNjaW9uYSBsYSBjb211bmlkYWQgYSBsYSBxdWUgcXVpZXJhcyBhcG95YXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzEycHgnIH19PlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5Db211bmlkYWQ8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb211bmlkYWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoYW5nZVNlbGVjdCgnY29tbXVuaXR5JywgZS50YXJnZXQudmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FwaS5kYXRhLm1hcCgoY2F0KSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2F0LmNhdF9pZFswXX0gdmFsdWU9e2NhdC5jYXRfaWRbMF19PlxuICAgICAgICAgICAgICAgICAge2NhdC5jYXRfbmFtZX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvU2VhcmNoU2VsZWN0PlxuICAgICAgICA8U2VhcmNoU2VsZWN0XG4gICAgICAgICAgdGl0bGU9XCJUaXBvIGRlIGRvbmFjacOzblwiXG4gICAgICAgICAgaW5mbz1cIlNlbGVjY2lvbmEgbGEgZm9ybWEgZW4gbGEgcXVlIHF1aWVyYXMgZG9uYXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRleHRDaGVja1xuICAgICAgICAgICAgdGl0bGU9XCJEb25hciBvbmxpbmVcIlxuICAgICAgICAgICAgZGVzYz1cIkxpbmsgcGFyYSBkb25hciBkZXNkZSBjYXNhXCJcbiAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlRmlsdGVyc31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZT1cInBheW1lbkRhdGFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDaGVja1xuICAgICAgICAgICAgdGl0bGU9XCJUcmFuc2ZlcmVuY2lhIGJhbmNhcmlhXCJcbiAgICAgICAgICAgIGRlc2M9XCJJbmZvcm1hY2nDs24gZGUgbGFzIGN1ZW50YXMgcGFyYSBxdWUgaGFnYXMgdW5hIHRyYW5zZmVyZW5jaWFcIlxuICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VGaWx0ZXJzfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBuYW1lPVwidHJhbnNmZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDaGVja1xuICAgICAgICAgICAgdGl0bGU9XCJEb25hciBwcm9kdWN0b3NcIlxuICAgICAgICAgICAgZGVzYz1cIkluZm9ybWFjacOzbiBzb2JyZSBjb21vIGVudHJlZ2FyIGxvcyBwcm9kdWN0b3MgcXVlIHF1aWVyYXMgZG9uYXJcIlxuICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VGaWx0ZXJzfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBuYW1lPVwicHJvZHVjdHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2VhcmNoU2VsZWN0PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVuaWRvXG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbENvbnRlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdMaXN0TW9kYWx9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdMaXN0TW9kYWxMb2dvfT5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nb0FuaW1hZG8uc3ZnXCIgYWx0PVwibG9nb1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb250ZW5pZG8gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/Contenido.tsx\n");

/***/ })

})