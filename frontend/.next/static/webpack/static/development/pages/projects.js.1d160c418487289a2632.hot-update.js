webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/Contenido.tsx":
/*!*******************************************!*\
  !*** ./components/projects/Contenido.tsx ***!
  \*******************************************/
/*! exports provided: default, ModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContent\", function() { return ModalContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchSelect */ \"./components/projects/SearchSelect.tsx\");\n/* harmony import */ var _TextCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextCheck */ \"./components/projects/TextCheck.tsx\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ \"./node_modules/@material-ui/core/esm/Select/index.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _api_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/filters */ \"./api/filters.ts\");\n/* harmony import */ var _api_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/categories.json */ \"./api/categories.json\");\nvar _api_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../api/categories.json */ \"./api/categories.json\", 1);\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/onglist.module.scss */ \"./styles/onglist.module.scss\");\n/* harmony import */ var _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/home/uriel/gentemapp/frontend/components/projects/Contenido.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // Components\n\n\n // Material UI for Select\n\n\n\n\n //APi\n\n // Style & Api test\n\n\n\n\nfunction Contenido() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      ciudad = _useState[0],\n      setCiudad = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      comunidad = _useState2[0],\n      setComunidad = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    country: '',\n    products: false,\n    paymenData: false,\n    transfer: false,\n    community: 0\n  }),\n      filters = _useState3[0],\n      setFilters = _useState3[1];\n\n  var changeSelect = function changeSelect(motive, select) {\n    var temp = _objectSpread({}, filters);\n\n    if (motive === \"country\") {\n      temp.country = select;\n    }\n\n    if (motive === \"community\") {\n      temp.community = select;\n    }\n\n    setFilters(temp);\n  };\n\n  var changeFilters = function changeFilters(res, motive) {\n    var temp = _objectSpread({}, filters);\n\n    if (motive === 'products') {\n      temp.products = res;\n    }\n\n    if (motive === 'paymenData') {\n      temp.paymenData = res;\n    }\n\n    if (motive === \"transfer\") {\n      temp.transfer = res;\n    }\n\n    setFilters(temp);\n    console.log(filters);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getDistinct\"])().then(function (data) {\n      setCiudad(data);\n    }, function (error) {\n      console.log(error);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_api_filters__WEBPACK_IMPORTED_MODULE_8__[\"getForFilters\"])(filters).then(function (data) {\n      console.log(data);\n    });\n  }, [_objectSpread({}, filters)]);\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearch\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListSearchContainer\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container__info\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h6\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \" Usa los filtros para encontrar proyectos que quieras apoyar \")), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Ubicaci\\xF3n\",\n    info: \"Selecciona la ciudad en la que quieres que tu donaci\\xF3n tenga efecto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, \"Ciudad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: ciudad,\n    onChange: function onChange(e) {\n      changeSelect('country', e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, ciudad && ciudad.map(function (data) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: data,\n      value: data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 21\n      }\n    }, data);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Comunidad afectada\",\n    info: \"Selecciona la comunidad a la que quieras apoyar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      width: '100%',\n      marginTop: '12px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    id: \"demo-simple-select-label\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, \"Comunidad\"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: comunidad,\n    onChange: function onChange(e) {\n      changeSelect('community', e.target.value.toString());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, _api_categories_json__WEBPACK_IMPORTED_MODULE_9__[\"data\"].map(function (cat) {\n    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: cat.cat_id[0],\n      value: cat.cat_id[0],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }\n    }, cat.cat_name);\n  })))), __jsx(_SearchSelect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Tipo de donaci\\xF3n\",\n    info: \"Selecciona la forma en la que quieras donar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }\n  }, __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar online\",\n    desc: \"Link para donar desde casa\",\n    change: changeFilters,\n    name: \"paymenData\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Transferencia bancaria\",\n    desc: \"Informaci\\xF3n de las cuentas para que hagas una transferencia\",\n    change: changeFilters,\n    name: \"transfer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }), __jsx(_TextCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Donar productos\",\n    desc: \"Informaci\\xF3n sobre como entregar los productos que quieras donar\",\n    change: changeFilters,\n    name: \"products\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Contenido, \"rixdc6SgwXFiizE9hTWXNsq7rHg=\");\n\n_c = Contenido;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contenido);\nfunction ModalContent() {\n  return __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModal\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_onglist_module_scss__WEBPACK_IMPORTED_MODULE_10__[\"ongListModalLogo\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/logoAnimado.svg\",\n    alt: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }\n  })), __jsx(Contenido, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }\n  }));\n}\n_c2 = ModalContent;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Contenido\");\n$RefreshReg$(_c2, \"ModalContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL0NvbnRlbmlkby50c3g/N2MwMyJdLCJuYW1lcyI6WyJDb250ZW5pZG8iLCJ1c2VTdGF0ZSIsImNpdWRhZCIsInNldENpdWRhZCIsImNvbXVuaWRhZCIsInNldENvbXVuaWRhZCIsImNvdW50cnkiLCJwcm9kdWN0cyIsInBheW1lbkRhdGEiLCJ0cmFuc2ZlciIsImNvbW11bml0eSIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY2hhbmdlU2VsZWN0IiwibW90aXZlIiwic2VsZWN0IiwidGVtcCIsImNoYW5nZUZpbHRlcnMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0RGlzdGluY3QiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiZ2V0Rm9yRmlsdGVycyIsInN0eWxlcyIsIndpZHRoIiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidG9TdHJpbmciLCJhcGkiLCJjYXQiLCJjYXRfaWQiLCJjYXRfbmFtZSIsIk1vZGFsQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVlRixzREFBUSxFQUZ2QjtBQUFBLE1BRVpHLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUFBLG1CQUdXSixzREFBUSxDQUFVO0FBQzlDSyxXQUFPLEVBQUUsRUFEcUM7QUFFOUNDLFlBQVEsRUFBRSxLQUZvQztBQUc5Q0MsY0FBVSxFQUFFLEtBSGtDO0FBSTlDQyxZQUFRLEVBQUUsS0FKb0M7QUFLOUNDLGFBQVMsRUFBRTtBQUxtQyxHQUFWLENBSG5CO0FBQUEsTUFHWkMsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBVW5CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBaUJDLE1BQWpCLEVBQWlDO0FBQ3BELFFBQU1DLElBQUkscUJBQU9MLE9BQVAsQ0FBVjs7QUFDQSxRQUFHRyxNQUFNLEtBQUssU0FBZCxFQUF3QjtBQUN0QkUsVUFBSSxDQUFDVixPQUFMLEdBQWVTLE1BQWY7QUFDRDs7QUFDRCxRQUFHRCxNQUFNLEtBQUssV0FBZCxFQUEwQjtBQUN4QkUsVUFBSSxDQUFDTixTQUFMLEdBQWlCSyxNQUFqQjtBQUNEOztBQUNESCxjQUFVLENBQUNJLElBQUQsQ0FBVjtBQUNELEdBVEQ7O0FBVUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFHQyxHQUFILEVBQWlCSixNQUFqQixFQUFvQztBQUN4RCxRQUFNRSxJQUFJLHFCQUFPTCxPQUFQLENBQVY7O0FBQ0EsUUFBSUcsTUFBTSxLQUFLLFVBQWYsRUFBMkI7QUFDekJFLFVBQUksQ0FBQ1QsUUFBTCxHQUFnQlcsR0FBaEI7QUFDRDs7QUFDRCxRQUFJSixNQUFNLEtBQUssWUFBZixFQUE2QjtBQUMzQkUsVUFBSSxDQUFDUixVQUFMLEdBQWtCVSxHQUFsQjtBQUNEOztBQUNELFFBQUdKLE1BQU0sS0FBSyxVQUFkLEVBQXlCO0FBQ3ZCRSxVQUFJLENBQUNQLFFBQUwsR0FBZ0JTLEdBQWhCO0FBQ0Q7O0FBQ0ROLGNBQVUsQ0FBQ0ksSUFBRCxDQUFWO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFaO0FBQ0QsR0FiRDs7QUFjQVUseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLG9FQUFXLEdBQUdDLElBQWQsQ0FDRSxVQUFDQyxJQUFELEVBQVU7QUFDUnJCLGVBQVMsQ0FBQ3FCLElBQUQsQ0FBVDtBQUNELEtBSEgsRUFJRSxVQUFDQyxLQUFELEVBQVc7QUFDVE4sYUFBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7QUFDRCxLQU5IO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBSix5REFBUyxDQUFDLFlBQUk7QUFFWkssc0VBQWEsQ0FBQ2YsT0FBRCxDQUFiLENBQXVCWSxJQUF2QixDQUE0QixVQUFDQyxJQUFELEVBQVE7QUFDbENMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ0QsS0FGRDtBQUlELEdBTlEsRUFNTixtQkFBS2IsT0FBTCxFQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFFZ0IsMEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUEsbUZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFERixDQURGLEVBS0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsUUFBSSxFQUFDLHdFQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHFFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxlQUFTLEVBQUU7QUFBNUIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxNQUFFLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBQywwQkFEVjtBQUVFLE1BQUUsRUFBQyxvQkFGTDtBQUdFLFNBQUssRUFBRTNCLE1BSFQ7QUFJRSxZQUFRLEVBQUUsa0JBQUM0QixDQUFELEVBQU87QUFDZmpCLGtCQUFZLENBQUMsU0FBRCxFQUFZaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXJCLENBQVo7QUFDRCxLQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRzlCLE1BQU0sSUFDTEEsTUFBTSxDQUFDK0IsR0FBUCxDQUFXLFVBQUNULElBQUQsRUFBVTtBQUNuQixXQUNFLE1BQUMsa0VBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQWY7QUFBcUIsV0FBSyxFQUFFQSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLElBREgsQ0FERjtBQUtELEdBTkQsQ0FUSixDQUZGLENBSkYsQ0FMRixFQThCRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLG9CQURSO0FBRUUsUUFBSSxFQUFDLGlEQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHFFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVJLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxlQUFTLEVBQUU7QUFBNUIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxNQUFFLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsMEJBRFY7QUFFRSxNQUFFLEVBQUMsb0JBRkw7QUFHRSxTQUFLLEVBQUV6QixTQUhUO0FBSUUsWUFBUSxFQUFFLGtCQUFDMEIsQ0FBRCxFQUFPO0FBQ2ZqQixrQkFBWSxDQUFDLFdBQUQsRUFBY2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVFLFFBQWYsRUFBZCxDQUFaO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUdDLHlEQUFBLENBQVNGLEdBQVQsQ0FBYSxVQUFDRyxHQUFEO0FBQUEsV0FDWixNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLENBQWY7QUFBOEIsV0FBSyxFQUFFRCxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsR0FBRyxDQUFDRSxRQURQLENBRFk7QUFBQSxHQUFiLENBUkgsQ0FGRixDQUpGLENBOUJGLEVBb0RFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMscUJBRFI7QUFFRSxRQUFJLEVBQUMsNkNBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsa0RBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLFFBQUksRUFBQyw0QkFGUDtBQUdFLFVBQU0sRUFBRXJCLGFBSFY7QUFLRSxRQUFJLEVBQUMsWUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFXRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFDLHdCQURSO0FBRUUsUUFBSSxFQUFDLGdFQUZQO0FBR0UsVUFBTSxFQUFFQSxhQUhWO0FBS0UsUUFBSSxFQUFDLFVBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBa0JFLE1BQUMsa0RBQUQ7QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxRQUFJLEVBQUMsb0VBRlA7QUFHRSxVQUFNLEVBQUVBLGFBSFY7QUFLRSxRQUFJLEVBQUMsVUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBcERGLEVBOEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5RUYsRUErRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9FRixDQURGLENBREY7QUFxRkQ7O0dBeklRakIsUzs7S0FBQUEsUztBQTJJTUEsd0VBQWY7QUFFTyxTQUFTdUMsWUFBVCxHQUF3QjtBQUM3QixTQUNFO0FBQUssYUFBUyxFQUFFWix5RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQSw2RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLE9BQUcsRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFEO01BVGVZLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL0NvbnRlbmlkby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBTZWFyY2hTZWxlY3QgZnJvbSAnLi9TZWFyY2hTZWxlY3QnXG5pbXBvcnQgVGV4dENoZWNrIGZyb20gJy4vVGV4dENoZWNrJ1xuXG4vLyBNYXRlcmlhbCBVSSBmb3IgU2VsZWN0XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCdcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nXG4vL0FQaVxuaW1wb3J0IHsgZ2V0RGlzdGluY3QsIGdldEZvckZpbHRlcnMgfSBmcm9tICcuLi8uLi9hcGkvZmlsdGVycydcbi8vIFN0eWxlICYgQXBpIHRlc3RcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGkvY2F0ZWdvcmllcy5qc29uJ1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9vbmdsaXN0Lm1vZHVsZS5zY3NzJ1xuaW50ZXJmYWNlIGZpbHRlcnMge1xuICBjb3VudHJ5OiBzdHJpbmdcbiAgcHJvZHVjdHM6IGJvb2xlYW5cbiAgcGF5bWVuRGF0YTogYm9vbGVhblxuICB0cmFuc2ZlcjogYm9vbGVhblxuICBjb21tdW5pdHk6IG51bWJlclxufVxuZnVuY3Rpb24gQ29udGVuaWRvKCkge1xuICBjb25zdCBbY2l1ZGFkLCBzZXRDaXVkYWRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb211bmlkYWQsIHNldENvbXVuaWRhZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPGZpbHRlcnM+KHtcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBwcm9kdWN0czogZmFsc2UsXG4gICAgcGF5bWVuRGF0YTogZmFsc2UsXG4gICAgdHJhbnNmZXI6IGZhbHNlLFxuICAgIGNvbW11bml0eTogMCxcbiAgfSlcbiAgY29uc3QgY2hhbmdlU2VsZWN0ID0gKG1vdGl2ZTogc3RyaW5nLCBzZWxlY3Q6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSB7Li4uZmlsdGVyc307XG4gICAgaWYobW90aXZlID09PSBcImNvdW50cnlcIil7XG4gICAgICB0ZW1wLmNvdW50cnkgPSBzZWxlY3Q7XG4gICAgfVxuICAgIGlmKG1vdGl2ZSA9PT0gXCJjb21tdW5pdHlcIil7XG4gICAgICB0ZW1wLmNvbW11bml0eSA9IHNlbGVjdFxuICAgIH1cbiAgICBzZXRGaWx0ZXJzKHRlbXApXG4gIH1cbiAgY29uc3QgY2hhbmdlRmlsdGVycyA9ICggIHJlczogYm9vbGVhbiwgbW90aXZlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gey4uLmZpbHRlcnN9O1xuICAgIGlmIChtb3RpdmUgPT09ICdwcm9kdWN0cycpIHtcbiAgICAgIHRlbXAucHJvZHVjdHMgPSByZXNcbiAgICB9XG4gICAgaWYgKG1vdGl2ZSA9PT0gJ3BheW1lbkRhdGEnKSB7XG4gICAgICB0ZW1wLnBheW1lbkRhdGEgPSByZXNcbiAgICB9XG4gICAgaWYobW90aXZlID09PSBcInRyYW5zZmVyXCIpe1xuICAgICAgdGVtcC50cmFuc2ZlciA9IHJlcztcbiAgICB9XG4gICAgc2V0RmlsdGVycyh0ZW1wKVxuICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREaXN0aW5jdCgpLnRoZW4oXG4gICAgICAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDaXVkYWQoZGF0YSlcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgKVxuICB9LCBbXSlcbiAgdXNlRWZmZWN0KCgpPT57XG4gIFxuICAgIGdldEZvckZpbHRlcnMoZmlsdGVycykudGhlbigoZGF0YSk9PntcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgXG4gIH0sIFt7Li4uZmlsdGVyc31dKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vbmdMaXN0U2VhcmNofT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdFNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX19pbmZvXCI+XG4gICAgICAgICAgPGg2PiBVc2EgbG9zIGZpbHRyb3MgcGFyYSBlbmNvbnRyYXIgcHJveWVjdG9zIHF1ZSBxdWllcmFzIGFwb3lhciA8L2g2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U2VhcmNoU2VsZWN0XG4gICAgICAgICAgdGl0bGU9XCJVYmljYWNpw7NuXCJcbiAgICAgICAgICBpbmZvPVwiU2VsZWNjaW9uYSBsYSBjaXVkYWQgZW4gbGEgcXVlIHF1aWVyZXMgcXVlIHR1IGRvbmFjacOzbiB0ZW5nYSBlZmVjdG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzEycHgnIH19PlxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5DaXVkYWQ8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxuICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjaXVkYWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoYW5nZVNlbGVjdCgnY291bnRyeScsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2l1ZGFkICYmXG4gICAgICAgICAgICAgICAgY2l1ZGFkLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGF0YX0gdmFsdWU9e2RhdGF9PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPC9TZWFyY2hTZWxlY3Q+XG4gICAgICAgIDxTZWFyY2hTZWxlY3RcbiAgICAgICAgICB0aXRsZT1cIkNvbXVuaWRhZCBhZmVjdGFkYVwiXG4gICAgICAgICAgaW5mbz1cIlNlbGVjY2lvbmEgbGEgY29tdW5pZGFkIGEgbGEgcXVlIHF1aWVyYXMgYXBveWFyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICcxMnB4JyB9fT5cbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+Q29tdW5pZGFkPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29tdW5pZGFkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VTZWxlY3QoJ2NvbW11bml0eScsIGUudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthcGkuZGF0YS5tYXAoKGNhdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NhdC5jYXRfaWRbMF19IHZhbHVlPXtjYXQuY2F0X2lkWzBdfT5cbiAgICAgICAgICAgICAgICAgIHtjYXQuY2F0X25hbWV9XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L1NlYXJjaFNlbGVjdD5cbiAgICAgICAgPFNlYXJjaFNlbGVjdFxuICAgICAgICAgIHRpdGxlPVwiVGlwbyBkZSBkb25hY2nDs25cIlxuICAgICAgICAgIGluZm89XCJTZWxlY2Npb25hIGxhIGZvcm1hIGVuIGxhIHF1ZSBxdWllcmFzIGRvbmFyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiRG9uYXIgb25saW5lXCJcbiAgICAgICAgICAgIGRlc2M9XCJMaW5rIHBhcmEgZG9uYXIgZGVzZGUgY2FzYVwiXG4gICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUZpbHRlcnN9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5hbWU9XCJwYXltZW5EYXRhXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiVHJhbnNmZXJlbmNpYSBiYW5jYXJpYVwiXG4gICAgICAgICAgICBkZXNjPVwiSW5mb3JtYWNpw7NuIGRlIGxhcyBjdWVudGFzIHBhcmEgcXVlIGhhZ2FzIHVuYSB0cmFuc2ZlcmVuY2lhXCJcbiAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlRmlsdGVyc31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0Q2hlY2tcbiAgICAgICAgICAgIHRpdGxlPVwiRG9uYXIgcHJvZHVjdG9zXCJcbiAgICAgICAgICAgIGRlc2M9XCJJbmZvcm1hY2nDs24gc29icmUgY29tbyBlbnRyZWdhciBsb3MgcHJvZHVjdG9zIHF1ZSBxdWllcmFzIGRvbmFyXCJcbiAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlRmlsdGVyc31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlYXJjaFNlbGVjdD5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbmlkb1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxDb250ZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdE1vZGFsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub25nTGlzdE1vZGFsTG9nb30+XG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ29BbmltYWRvLnN2Z1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGVuaWRvIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/Contenido.tsx\n");

/***/ })

})