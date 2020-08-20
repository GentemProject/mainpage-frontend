webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/Contenido.tsx":
/*!*******************************************!*\
  !*** ./components/projects/Contenido.tsx ***!
  \*******************************************/
/*! exports provided: default, ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContent\", function() { return ModalContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchSelect */ \"./components/projects/SearchSelect.tsx\");\n/* harmony import */ var _TextCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextCheck */ \"./components/projects/TextCheck.tsx\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ \"./node_modules/@material-ui/core/esm/Select/index.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/filters */ \"./api/filters.ts\");\n/* harmony import */ var _api_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/categories.json */ \"./api/categories.json\");\nvar _api_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/categories.json */ \"./api/categories.json\", 1);\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/onglist.module.scss */ \"./styles/onglist.module.scss\");\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/home/uriel/gentemapp/frontend/components/projects/Contenido.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // Components\n\n\n // Material UI for Select\n\n\n\n\n //APi\n\n // Style & Api test\n\n\n\n\nfunction Contenido() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      ciudad = _useState[0],\n      setCiudad = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      comunidad = _useState2[0],\n      setComunidad = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    country: '',\n    products: false,\n    paymenData: false,\n    transfer: false,\n    community: ''\n  }),\n      filters = _useState3[0],\n      setFilters = _useState3[1];\n\n  var changeSelect = function changeSelect(motive, select) {\n    var temp = _objectSpread({}, filters);\n\n    if (motive === \"country\") {\n      temp.country = select;\n    }\n\n    if (motive === \"community\") {\n      temp.community = select;\n    }\n\n    console.log(filters);\n  };\n\n  var changeFilters = function changeFilters(res, motive) {\n    var temp = filters;\n\n    if (motive === 'products') {\n      temp.products = res;\n    }\n\n    if (motive === 'paymenData') {\n      temp.paymenData = res;\n    }\n\n    if (motive === \"transfer\") {\n      temp.transfer = res;\n    }\n\n    setFilters(temp);\n    console.log(filters);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getDistinct\"])().then(function (data) {\n      setCiudad(data);\n    }, function (error) {\n      console.log(error);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getForFilters\"])(filters).then(function (data) {\n      console.log(data);\n    });\n  }, [filters]);\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearch\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearchContainer\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container__info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"h6\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \" Usa los filtros para encontrar proyectos que quieras apoyar \")), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Ubicaci\\xF3n\",\n    info: \"Selecciona la ciudad en la que quieres que tu donaci\\xF3n tenga efecto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Ciudad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: ciudad,\n    onChange: function onChange(e) {\n      changeSelect('country', e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, ciudad && ciudad.map(function (data) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: data,\n      value: data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 21\n      }\n    }, data);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Comunidad afectada\",\n    info: \"Selecciona la comunidad a la que quieras apoyar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"Comunidad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: comunidad,\n    onChange: function onChange(e) {\n      changeSelect('community', e.target.value.toString());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, _api_categories_json__WEBPACK_IMPORTED_MODULE_9__[\"data\"].map(function (cat) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: cat.cat_id[0],\n      value: cat.cat_id.toString(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }\n    }, cat.cat_name);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Tipo de donaci\\xF3n\",\n    info: \"Selecciona la forma en la que quieras donar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar online\",\n    desc: \"Link para donar desde casa\",\n    change: changeFilters,\n    name: \"paymenData\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Transferencia bancaria\",\n    desc: \"Informaci\\xF3n de las cuentas para que hagas una transferencia\",\n    change: changeFilters,\n    name: \"transfer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar productos\",\n    desc: \"Informaci\\xF3n sobre como entregar los productos que quieras donar\",\n    change: changeFilters,\n    name: \"products\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Contenido, \"i9oET8oivJw7DUTZGTUaxyuz7Jg=\");\n\n_c = Contenido;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contenido);\nfunction ModalContent() {\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModal\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModalLogo\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/logoAnimado.svg\",\n    alt: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 9\n    }\n  })), __jsx(Contenido, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = ModalContent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Contenido\");\n$RefreshReg$(_c2, \"ModalContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL0NvbnRlbmlkby50c3g/N2MwMyJdLCJuYW1lcyI6WyJDb250ZW5pZG8iLCJ1c2VTdGF0ZSIsImNpdWRhZCIsInNldENpdWRhZCIsImNvbXVuaWRhZCIsInNldENvbXVuaWRhZCIsImNvdW50cnkiLCJwcm9kdWN0cyIsInBheW1lbkRhdGEiLCJ0cmFuc2ZlciIsImNvbW11bml0eSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY2hhbmdlU2VsZWN0IiwibW90aXZlIiwic2VsZWN0IiwidGVtcCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VGaWx0ZXJzIiwicmVzIiwidXNlRWZmZWN0IiwiZ2V0RGlzdGluY3QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiZ2V0Rm9yRmlsdGVycyIsInN0eWxlcyIsIndpZHRoIiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidG9TdHJpbmciLCJhcGkiLCJjYXQiLCJjYXRfaWQiLCJjYXRfbmFtZSIsIk1vZGFsQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVlRixzREFBUSxFQUZ2QjtBQUFBLE1BRVpHLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUFBLG1CQUdXSixzREFBUSxDQUFVO0FBQzlDSyxXQUFPLEVBQUUsRUFEcUM7QUFFOUNDLFlBQVEsRUFBRSxLQUZvQztBQUc5Q0MsY0FBVSxFQUFFLEtBSGtDO0FBSTlDQyxZQUFRLEVBQUUsS0FKb0M7QUFLOUNDLGFBQVMsRUFBRTtBQUxtQyxHQUFWLENBSG5CO0FB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QUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLE9BQUcsRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFEO01BVGVZLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL0NvbnRlbmlkby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBTZWFyY2hTZWxlY3QgZnJvbSAnLi9TZWFyY2hTZWxlY3QnXG5pbXBvcnQgVGV4dENoZWNrIGZyb20gJy4vVGV4dENoZWNrJ1xuXG4vLyBNYXRlcmlhbCBVSSBmb3IgU2VsZWN0XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCdcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nXG4vL0FQaVxuaW1wb3J0IHsgZ2V0RGlzdGluY3QsIGdldEZvckZpbHRlcnMgfSBmcm9tICcuLi8uLi9hcGkvZmlsdGVycydcbi8vIFN0eWxlICYgQXBpIHRlc3RcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGkvY2F0ZWdvcmllcy5qc29uJ1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9vbmdsaXN0Lm1vZHVsZS5zY3NzJ1xuaW50ZXJmYWNlIGZpbHRlcnMge1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgcHJvZHVjdHM6IGJvb2xlYW5cbiAgcGF5bWVuRGF0YTogYm9vbGVhblxuICB0cmFuc2ZlcjogYm9vbGVhblxuICBjb21tdW5pdHk6IHN0cmluZ1xufVxuZnVuY3Rpb24gQ29udGVuaWRvKCkge1xuICBjb25zdCBbY2l1ZGFkLCBzZXRDaXVkYWRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb211bmlkYWQsIHNldENvbXVuaWRhZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPGZpbHRlcnM+KHtcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBwcm9kdWN0czogZmFsc2UsXG4gICAgcGF5bWVuRGF0YTogZmFsc2UsXG4gICAgdHJhbnNmZXI6IGZhbHNlLFxuICAgIGNvbW11bml0eTogJycsXG4gIH0pXG4gIGNvbnN0IGNoYW5nZVNlbGVjdCA9IChtb3RpdmU6IHN0cmluZywgc2VsZWN0OiBhbnkpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gey4uLmZpbHRlcnN9O1xuICAgIGlmKG1vdGl2ZSA9PT0gXCJjb3VudHJ5XCIpe1xuICAgICAgdGVtcC5jb3VudHJ5ID0gc2VsZWN0O1xuICAgIH1cbiAgICBpZihtb3RpdmUgPT09IFwiY29tbXVuaXR5XCIpe1xuICAgICAgdGVtcC5jb21tdW5pdHkgPSBzZWxlY3Q7IFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJzKVxuICB9XG4gIGNvbnN0IGNoYW5nZUZpbHRlcnMgPSAoICByZXM6IGJvb2xlYW4sIG1vdGl2ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGZpbHRlcnM7XG4gICAgaWYgKG1vdGl2ZSA9PT0gJ3Byb2R1Y3RzJykge1xuICAgICAgdGVtcC5wcm9kdWN0cyA9IHJlc1xuICAgIH1cbiAgICBpZiAobW90aXZlID09PSAncGF5bWVuRGF0YScpIHtcbiAgICAgIHRlbXAucGF5bWVuRGF0YSA9IHJlc1xuICAgIH1cbiAgICBpZihtb3RpdmUgPT09IFwidHJhbnNmZXJcIil7XG4gICAgICB0ZW1wLnRyYW5zZmVyID0gcmVzO1xuICAgIH1cbiAgICBzZXRGaWx0ZXJzKHRlbXApXG4gICAgY29uc29sZS5sb2coZmlsdGVycylcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERpc3RpbmN0KCkudGhlbihcbiAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgIHNldENpdWRhZChkYXRhKVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICApXG4gIH0sIFtdKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXRGb3JGaWx0ZXJzKGZpbHRlcnMpLnRoZW4oKGRhdGEpPT57XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH0sIFtmaWx0ZXJzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdFNlYXJjaH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9uZ0xpc3RTZWFyY2hDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9faW5mb1wiPlxuICAgICAgICAgIDxoNj4gVXNhIGxvcyBmaWx0cm9zIHBhcmEgZW5jb250cmFyIHByb3llY3RvcyBxdWUgcXVpZXJhcyBhcG95YXIgPC9oNj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNlYXJjaFNlbGVjdFxuICAgICAgICAgIHRpdGxlPVwiVWJpY2FjacOzblwiXG4gICAgICAgICAgaW5mbz1cIlNlbGVjY2lvbmEgbGEgY2l1ZGFkIGVuIGxhIHF1ZSBxdWllcmVzIHF1ZSB0dSBkb25hY2nDs24gdGVuZ2EgZWZlY3RvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICcxMnB4JyB9fT5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+Q2l1ZGFkPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y2l1ZGFkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VTZWxlY3QoJ2NvdW50cnknLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NpdWRhZCAmJlxuICAgICAgICAgICAgICAgIGNpdWRhZC5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2RhdGF9IHZhbHVlPXtkYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvU2VhcmNoU2VsZWN0PlxuICAgICAgICA8U2VhcmNoU2VsZWN0XG4gICAgICAgICAgdGl0bGU9XCJDb211bmlkYWQgYWZlY3RhZGFcIlxuICAgICAgICAgIGluZm89XCJTZWxlY2Npb25hIGxhIGNvbXVuaWRhZCBhIGxhIHF1ZSBxdWllcmFzIGFwb3lhclwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAnMTJweCcgfX0+XG4gICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkNvbXVuaWRhZDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXVuaWRhZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlU2VsZWN0KCdjb21tdW5pdHknLCBlLnRhcmdldC52YWx1ZS50b1N0cmluZygpKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXBpLmRhdGEubWFwKChjYXQpID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjYXQuY2F0X2lkWzBdfSB2YWx1ZT17Y2F0LmNhdF9pZC50b1N0cmluZygpfT5cbiAgICAgICAgICAgICAgICAgIHtjYXQuY2F0X25hbWV9XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L1NlYXJjaFNlbGVjdD5cbiAgICAgICAgPFNlYXJjaFNlbGVjdFxuICAgICAgICAgIHRpdGxlPVwiVGlwbyBkZSBkb25hY2nDs25cIlxuICAgICAgICAgIGluZm89XCJTZWxlY2Npb25hIGxhIGZvcm1hIGVuIGxhIHF1ZSBxdWllcmFzIGRvbmFyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiRG9uYXIgb25saW5lXCJcbiAgICAgICAgICAgIGRlc2M9XCJMaW5rIHBhcmEgZG9uYXIgZGVzZGUgY2FzYVwiXG4gICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUZpbHRlcnN9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hbWU9XCJwYXltZW5EYXRhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiVHJhbnNmZXJlbmNpYSBiYW5jYXJpYVwiXG4gICAgICAgICAgICBkZXNjPVwiSW5mb3JtYWNpw7NuIGRlIGxhcyBjdWVudGFzIHBhcmEgcXVlIGhhZ2FzIHVuYSB0cmFuc2ZlcmVuY2lhXCJcbiAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlRmlsdGVyc31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiRG9uYXIgcHJvZHVjdG9zXCJcbiAgICAgICAgICAgIGRlc2M9XCJJbmZvcm1hY2nDs24gc29icmUgY29tbyBlbnRyZWdhciBsb3MgcHJvZHVjdG9zIHF1ZSBxdWllcmFzIGRvbmFyXCJcbiAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlRmlsdGVyc31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlYXJjaFNlbGVjdD5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbmlkb1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxDb250ZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdE1vZGFsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdE1vZGFsTG9nb30+XG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ29BbmltYWRvLnN2Z1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGVuaWRvIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/Contenido.tsx\n");

/***/ })

})