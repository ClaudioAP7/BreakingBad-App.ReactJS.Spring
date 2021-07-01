(self["webpackChunkbreaking_bad_app"] = self["webpackChunkbreaking_bad_app"] || []).push([["src_components_quotes_Quotes_js"],{

/***/ "./src/components/quotes/Quote.js":
/*!****************************************!*\
  !*** ./src/components/quotes/Quote.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_quotes_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/scss/quotes.scss */ "./src/assets/scss/quotes.scss");




var Quote = function Quote(_ref) {
  var quote = _ref.quote,
      author = _ref.author;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bubble box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", null, quote), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("cite", null, author), ' '));
};

Quote.propTypes = {
  quote: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  author: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

/***/ "./src/components/quotes/Quotes.js":
/*!*****************************************!*\
  !*** ./src/components/quotes/Quotes.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_QuoteContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/QuoteContext */ "./src/contexts/QuoteContext.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote */ "./src/components/quotes/Quote.js");
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Loader */ "./src/components/common/Loader.js");
/* harmony import */ var _assets_scss_quotes_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/scss/quotes.scss */ "./src/assets/scss/quotes.scss");
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable camelcase */






var Quotes = function Quotes() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_QuoteContext__WEBPACK_IMPORTED_MODULE_1__.QuoteContext),
      quoteRandom = _useContext.quoteRandom,
      doneFetchQuoteRandom = _useContext.doneFetchQuoteRandom,
      getQuoteRandom = _useContext.getQuoteRandom;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Random Quotes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "buttons",
    onClick: function onClick() {
      return getQuoteRandom();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn yellow"
  }, "Random Quotes")), doneFetchQuoteRandom ? quoteRandom.map(function (random) {
    var quote_id = random.quote_id,
        quote = random.quote,
        author = random.author;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Quote__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: quote_id,
      quote: quote,
      author: author
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Loader__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/quotes.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/quotes.scss ***!
  \******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Slick Slider */\n.box {\n  width: 60%;\n  margin: 70px auto; }\n\n/* Simple Slider */\n.white-back {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  background: #fff; }\n\n.simple p {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  color: #636363;\n  padding: 25px;\n  font-size: 1.25em;\n  font-style: italic;\n  text-align: center; }\n\n.simple cite {\n  font-size: 1em;\n  float: right;\n  font-style: normal;\n  color: #636363; }\n\n.simple cite a {\n  color: #636363;\n  font-style: italic;\n  text-decoration: none;\n  font-size: 0.85em; }\n\n.simple cite a:hover {\n  color: #00b4cc; }\n\n/* Bubble Slider */\n.bubble blockquote {\n  margin: 10px 10px 0;\n  background: #fff;\n  padding: 60px;\n  position: relative;\n  border: none;\n  border-radius: 8px;\n  font-size: 1.25em;\n  color: #000000; }\n\n.bubble blockquote:before,\n.bubble blockquote:after {\n  content: \"\\201C\";\n  position: absolute;\n  font-size: 80px;\n  padding: 10px;\n  line-height: 1;\n  color: #636363; }\n\n.bubble blockquote:before {\n  top: 0;\n  left: 10px; }\n\n.bubble blockquote:after {\n  content: \"\\201D\";\n  right: 10px;\n  bottom: -0.5em; }\n\n.bubble div {\n  width: 0;\n  height: 0;\n  border-left: 0 solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid #fff;\n  margin: 0 0 0 60px;\n  margin-bottom: 10px; }\n\n.bubble cite {\n  padding-left: 20px;\n  font-size: 1.25em;\n  color: #f7f7f7; }\n\n#buttons {\n  padding-top: 50px;\n  text-align: center; }\n\n.btn {\n  border-radius: 5px;\n  padding: 15px 25px;\n  font-size: 22px;\n  text-decoration: none;\n  margin: 20px;\n  color: #000000;\n  position: relative;\n  display: inline-block; }\n\n.btn:active {\n  transform: translate(0px, 5px);\n  -webkit-transform: translate(0px, 5px);\n  box-shadow: 0px 1px 0px 0px; }\n\n.yellow {\n  background-color: #f1c40f;\n  box-shadow: 0px 5px 0px 0px #d8ab00; }\n\n.yellow:hover {\n  background-color: #ffde29; }\n", "",{"version":3,"sources":["webpack://./src/assets/scss/quotes.scss"],"names":[],"mappings":"AAAA,iBAAA;AAEA;EACE,UAAU;EACV,iBAAiB,EAAA;;AAGnB,kBAAA;AACA;EACE,wCAAwC;EACxC,gBAAgB,EAAA;;AAElB;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB,EAAA;;AAEpB;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,cAAc,EAAA;;AAEhB;EACE,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB,EAAA;;AAEnB;EACE,cAAc,EAAA;;AAGhB,kBAAA;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,cAAc,EAAA;;AAEhB;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,cAAc;EACd,cAAc,EAAA;;AAEhB;EACE,MAAM;EACN,UAAU,EAAA;;AAEZ;EACE,gBAAgB;EAChB,WAAW;EACX,cAAc,EAAA;;AAEhB;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,oCAAoC;EACpC,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB,EAAA;;AAErB;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc,EAAA;;AAGhB;EACE,iBAAiB;EACjB,kBAAkB,EAAA;;AAGpB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,qBAAqB,EAAA;;AAGvB;EACE,8BAA8B;EAC9B,sCAAsC;EACtC,2BAA2B,EAAA;;AAG7B;EACE,yBAAyB;EACzB,mCAAmC,EAAA;;AAGrC;EACE,yBAAyB,EAAA","sourcesContent":["/* Slick Slider */\r\n\r\n.box {\r\n  width: 60%;\r\n  margin: 70px auto;\r\n}\r\n\r\n/* Simple Slider */\r\n.white-back {\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  background: #fff;\r\n}\r\n.simple p {\r\n  border-top: 1px solid #ccc;\r\n  border-bottom: 1px solid #ccc;\r\n  color: #636363;\r\n  padding: 25px;\r\n  font-size: 1.25em;\r\n  font-style: italic;\r\n  text-align: center;\r\n}\r\n.simple cite {\r\n  font-size: 1em;\r\n  float: right;\r\n  font-style: normal;\r\n  color: #636363;\r\n}\r\n.simple cite a {\r\n  color: #636363;\r\n  font-style: italic;\r\n  text-decoration: none;\r\n  font-size: 0.85em;\r\n}\r\n.simple cite a:hover {\r\n  color: #00b4cc;\r\n}\r\n\r\n/* Bubble Slider */\r\n\r\n.bubble blockquote {\r\n  margin: 10px 10px 0;\r\n  background: #fff;\r\n  padding: 60px;\r\n  position: relative;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 1.25em;\r\n  color: #000000;\r\n}\r\n.bubble blockquote:before,\r\n.bubble blockquote:after {\r\n  content: \"\\201C\";\r\n  position: absolute;\r\n  font-size: 80px;\r\n  padding: 10px;\r\n  line-height: 1;\r\n  color: #636363;\r\n}\r\n.bubble blockquote:before {\r\n  top: 0;\r\n  left: 10px;\r\n}\r\n.bubble blockquote:after {\r\n  content: \"\\201D\";\r\n  right: 10px;\r\n  bottom: -0.5em;\r\n}\r\n.bubble div {\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 0 solid transparent;\r\n  border-right: 20px solid transparent;\r\n  border-top: 20px solid #fff;\r\n  margin: 0 0 0 60px;\r\n  margin-bottom: 10px;\r\n}\r\n.bubble cite {\r\n  padding-left: 20px;\r\n  font-size: 1.25em;\r\n  color: #f7f7f7;\r\n}\r\n\r\n#buttons {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.btn {\r\n  border-radius: 5px;\r\n  padding: 15px 25px;\r\n  font-size: 22px;\r\n  text-decoration: none;\r\n  margin: 20px;\r\n  color: #000000;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.btn:active {\r\n  transform: translate(0px, 5px);\r\n  -webkit-transform: translate(0px, 5px);\r\n  box-shadow: 0px 1px 0px 0px;\r\n}\r\n\r\n.yellow {\r\n  background-color: #f1c40f;\r\n  box-shadow: 0px 5px 0px 0px #d8ab00;\r\n}\r\n\r\n.yellow:hover {\r\n  background-color: #ffde29;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/scss/quotes.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/quotes.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quotes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./quotes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/quotes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quotes_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_quotes_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_quotes_Quotes_js.bundle.js.map