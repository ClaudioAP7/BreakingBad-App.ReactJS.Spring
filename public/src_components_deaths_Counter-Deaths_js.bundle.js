(self["webpackChunkbreaking_bad_app"] = self["webpackChunkbreaking_bad_app"] || []).push([["src_components_deaths_Counter-Deaths_js"],{

/***/ "./src/components/deaths/Counter-Deaths.js":
/*!*************************************************!*\
  !*** ./src/components/deaths/Counter-Deaths.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ "./src/components/deaths/Counter.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_scss_counter_deaths_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/scss/counter-deaths.scss */ "./src/assets/scss/counter-deaths.scss");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MainText = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 3em;\n  text-align: center;\n"])));

var CounterDeaths = function CounterDeaths() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "counter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MainText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Total number of deaths in the series"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Counter__WEBPACK_IMPORTED_MODULE_1__.default, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (CounterDeaths);

/***/ }),

/***/ "./src/components/deaths/Counter.js":
/*!******************************************!*\
  !*** ./src/components/deaths/Counter.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring/renderprops */ "./node_modules/react-spring/renderprops.js");
/* harmony import */ var _contexts_CounterDeathsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/CounterDeathsContext */ "./src/contexts/CounterDeathsContext.js");




var Counter = function Counter() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_CounterDeathsContext__WEBPACK_IMPORTED_MODULE_1__.CounterDeathsContext),
      counterDeaths = _useContext.counterDeaths;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_2__.Spring, {
    from: {
      number: 0
    },
    to: {
      number: counterDeaths
    },
    delay: "1000",
    config: react_spring_renderprops__WEBPACK_IMPORTED_MODULE_2__.config.molasses
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.number.toFixed());
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/counter-deaths.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/counter-deaths.scss ***!
  \**************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".counter {\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n  color: rgba(248, 237, 237, 0.9);\n  letter-spacing: 0.8em;\n  font-size: 2.5vw;\n  font-weight: normal;\n  text-transform: uppercase;\n  text-shadow: rgba(18, 7, 7, 0.3) 0 0 1px, rgba(249, 235, 235, 0.3) 0 -1px 2px, rgba(18, 7, 7, 0.3) 0 -1px 2px, rgba(249, 235, 235, 0.3) 0 20px 15px; }\n", "",{"version":3,"sources":["webpack://./src/assets/scss/counter-deaths.scss"],"names":[],"mappings":"AAAA;EACI,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;EAE/B,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,mJAEsC,EAAA","sourcesContent":[".counter{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    color: hsla(360, 45%, 95%, 0.9);\r\n  \r\n    letter-spacing: 0.8em;\r\n    font-size: 2.5vw;\r\n    font-weight: normal;\r\n    text-transform: uppercase;\r\n    text-shadow: hsla(0, 45%, 5%, 0.3) 0 0 1px,\r\n      hsla(360, 55%, 95%, 0.3) 0 -1px 2px, hsla(0, 45%, 5%, 0.3) 0 -1px 2px,\r\n      hsla(360, 55%, 95%, 0.3) 0 20px 15px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/scss/counter-deaths.scss":
/*!*********************************************!*\
  !*** ./src/assets/scss/counter-deaths.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_deaths_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./counter-deaths.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/counter-deaths.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_deaths_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_counter_deaths_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_deaths_Counter-Deaths_js.bundle.js.map