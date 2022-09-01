/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light-green: rgb(96, 227, 195);\n}\n\nbody {\n    background-color: var(--light-green);\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.hello-header {\n    text-align: center;\n}\n\n.lists-window {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    border: 5px solid;\n    border-top-left-radius: 10px;\n    width: 100%;\n}\n\n\n@media only screen and (max-width: 800px) {\n    .lists-window {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .lists-window {\n        grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n}\n\n.list-container {\n    margin: 1rem;\n    padding: 0.5rem;\n    height: 25vh;\n    min-width: min-content;\n    border: 2px solid;\n    border-radius: 5px;\n}\n\n.list-title {\n    font-size: 2rem;\n    border: 0;\n    width: 100%;\n    text-align: center;\n    background-color: inherit;\n}\n\n.list-title:hover {\n    text-decoration: underline blue;\n}\n\n.top-right {\n    display: none;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    top: -4vh;\n    right: -0.5rem;\n    float: right;\n}\n\n.delete-button {\n    cursor: pointer;\n}\n\n.list-title:focus {\n    text-decoration: underline blue;\n}\n\n.list {\n    padding: 0;\n}\n\n.list-item {\n    text-decoration: none;\n    list-style-type: none;\n    font-size: 1.5rem;\n    padding: 0.5rem 0rem;\n}\n\n.list-item:hover {\n    border-style: inset;\n}\n\n.urgent-priority {\n    color: red;\n}\n\n.high-priority {\n    color: yellow;\n}\n\n.low-priority {\n    color: blue;\n}\n\n.scrollable {\n    overflow-y: scroll;\n}\n\n.scrollable::-webkit-scrollbar, .scrollable::-webkit-scrollbar-corner {\n    background-color: var(--light-green);\n    width: 10px;\n}\n\n.scrollable::-webkit-scrollbar-thumb {\n    background-color: blue;\n    border-radius: 20px;\n    \n}\n\n\n.add-list-div {\n    display: flex;\n}\n\n#addListBtn {\n    display: flex;\n    width: 5rem;\n    height: 5rem;\n    margin: auto auto;\n    cursor: pointer;\n}\n\n.splitscreen {\n    display: flex;\n    height: 50vh;\n}\n\n.add-task-window {\n    margin-left: 0;\n    border: 5px solid;\n    border-left: 0;\n    border-top-right-radius: 10px;\n    padding: 1rem;\n}\n\n.new-task-header {\n    margin: 0;\n}\n\n.add-task-window > form {\n    line-height: 5vh;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 6px 12px;\n    font-size: clamp(0.8rem, 1vw, 1rem);\n    color: white;\n    border-radius: 30px;\n    background: rgb(71, 61, 237);\n    background: linear-gradient(90deg, rgba(71, 61, 237, 1) 0%, rgba(0, 212, 255, 1) 100%);\n}\n\n.reminders-window {\n    border: 5px solid;\n    border-top: 0;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    padding: 5px;\n}\n\n.checkbox {\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    border-radius: 10px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,oCAAoC;IACpC,qGAAqG;AACzG;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gDAAgD;IAChD,iBAAiB;IACjB,4BAA4B;IAC5B,WAAW;AACf;;;AAGA;IACI;QACI,gDAAgD;IACpD;AACJ;;AAEA;IACI;QACI,gDAAgD;IACpD;AACJ;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;IACT,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;;AAEvB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,sFAAsF;AAC1F;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,+BAA+B;IAC/B,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":[":root {\n    --light-green: rgb(96, 227, 195);\n}\n\nbody {\n    background-color: var(--light-green);\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.hello-header {\n    text-align: center;\n}\n\n.lists-window {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    border: 5px solid;\n    border-top-left-radius: 10px;\n    width: 100%;\n}\n\n\n@media only screen and (max-width: 800px) {\n    .lists-window {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .lists-window {\n        grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n}\n\n.list-container {\n    margin: 1rem;\n    padding: 0.5rem;\n    height: 25vh;\n    min-width: min-content;\n    border: 2px solid;\n    border-radius: 5px;\n}\n\n.list-title {\n    font-size: 2rem;\n    border: 0;\n    width: 100%;\n    text-align: center;\n    background-color: inherit;\n}\n\n.list-title:hover {\n    text-decoration: underline blue;\n}\n\n.top-right {\n    display: none;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    top: -4vh;\n    right: -0.5rem;\n    float: right;\n}\n\n.delete-button {\n    cursor: pointer;\n}\n\n.list-title:focus {\n    text-decoration: underline blue;\n}\n\n.list {\n    padding: 0;\n}\n\n.list-item {\n    text-decoration: none;\n    list-style-type: none;\n    font-size: 1.5rem;\n    padding: 0.5rem 0rem;\n}\n\n.list-item:hover {\n    border-style: inset;\n}\n\n.urgent-priority {\n    color: red;\n}\n\n.high-priority {\n    color: yellow;\n}\n\n.low-priority {\n    color: blue;\n}\n\n.scrollable {\n    overflow-y: scroll;\n}\n\n.scrollable::-webkit-scrollbar, .scrollable::-webkit-scrollbar-corner {\n    background-color: var(--light-green);\n    width: 10px;\n}\n\n.scrollable::-webkit-scrollbar-thumb {\n    background-color: blue;\n    border-radius: 20px;\n    \n}\n\n\n.add-list-div {\n    display: flex;\n}\n\n#addListBtn {\n    display: flex;\n    width: 5rem;\n    height: 5rem;\n    margin: auto auto;\n    cursor: pointer;\n}\n\n.splitscreen {\n    display: flex;\n    height: 50vh;\n}\n\n.add-task-window {\n    margin-left: 0;\n    border: 5px solid;\n    border-left: 0;\n    border-top-right-radius: 10px;\n    padding: 1rem;\n}\n\n.new-task-header {\n    margin: 0;\n}\n\n.add-task-window > form {\n    line-height: 5vh;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 6px 12px;\n    font-size: clamp(0.8rem, 1vw, 1rem);\n    color: white;\n    border-radius: 30px;\n    background: rgb(71, 61, 237);\n    background: linear-gradient(90deg, rgba(71, 61, 237, 1) 0%, rgba(0, 212, 255, 1) 100%);\n}\n\n.reminders-window {\n    border: 5px solid;\n    border-top: 0;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    padding: 5px;\n}\n\n.checkbox {\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    border-radius: 10px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./images/add-button.png":
/*!*******************************!*\
  !*** ./images/add-button.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d6ebde15b33b65e41f8bc1c42b1f1460.png");

/***/ }),

/***/ "./images/delete-button.png":
/*!**********************************!*\
  !*** ./images/delete-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2bd9b4565ca40100c48f9706153fb90b.png");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_add_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/add-button.png */ "./images/add-button.png");
/* harmony import */ var _images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/delete-button.png */ "./images/delete-button.png");
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */




function List() {
  this.title = "Temp";
  this.items = [];
}

function Task(text, dueDate, priority) {
  this.text = text;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isChecked = false;
}

const listsWindow = document.querySelector(".lists-window");
const form = document.querySelector("form");
const formListOptions = form.querySelector("#list-groups");

let lists = localStorage.getItem("lists");
if (lists == null) lists = [];
else lists = JSON.parse(lists);

function addListContainer(newList) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("scrollable");

  const deleteButton = document.createElement("img");
  deleteButton.src = _images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  deleteButton.style.width = "2vh";
  deleteButton.style.cursor = "pointer";
  deleteButton.classList.add("top-right");
  deleteButton.classList.add("delete-button");

  listContainer.addEventListener("mouseenter", () => {
    deleteButton.style.display = "inline-block";
  });
  listContainer.addEventListener("mouseleave", () => {
    deleteButton.style.display = "none";
  });

  const listTitle = document.createElement("input");
  listTitle.type = "text";
  listTitle.classList.add("list-title");
  listTitle.value = newList.title;
  listTitle.setAttribute("autofocus", "autofocus");
  listTitle.onchange = () => {
    if (listTitle.value === "") {
      listTitle.value = newList.title;
      // eslint-disable-next-line no-alert
      alert("List must have a name!");
      return;
    }
    newList.title = listTitle.value;
    updateListOptions();
  };

  const listElem = document.createElement("ul");
  listElem.classList.add("list");

  deleteButton.addEventListener("click", () => {
    listsWindow.removeChild(listContainer);
    lists = lists.filter((list) => list !== newList);
    updateListOptions();
    updateLists();
  });

  listContainer.appendChild(listTitle);
  listContainer.appendChild(deleteButton);
  listContainer.appendChild(listElem);

  listsWindow.appendChild(listContainer);
  listsWindow.appendChild(addListBtn);
  listTitle.focus();
  updateListOptions();
}

function updateLists() {
  listsWindow.innerHTML = "";
  lists.forEach((list) => {
    addListContainer(list);
  });
  const listContainers = document.querySelectorAll(".list-container");

  listContainers.forEach((container) => {
    const listTitle = container.querySelector(".list-title");

    if (listTitle == null) return;

    const list = lists.find((listItem) => listItem.title === listTitle.value);
    const ul = container.querySelector(".list");
    ul.innerHTML = "";

    list.items.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("list-item");
      li.classList.add(task.priority);
      li.innerText = task.text;
      ul.appendChild(li);
      addCheckbox(listTitle.value, li);
      addDeleteBtn(listTitle.value, li);
    });
  });

  listsWindow.appendChild(addListBtn);

  localStorage.setItem("lists", JSON.stringify(lists));
}

function addCheckbox(listTitle, listItem) {
  const checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.style.width = "10px";
  checkButton.style.height = "10px";
  checkButton.style.backgroundColor = "white";
  checkButton.style.borderRadius = "10px";

  checkButton.onclick = () => {
    listItem.style.textDecoration = checkButton.checked
      ? "line-through"
      : "none";
  };

  listItem.prepend(checkButton);
}

function addDeleteBtn(listTitle, listItem) {
  const deleteBtn = document.createElement("img");
  deleteBtn.src = _images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  deleteBtn.style.width = "1rem";
  deleteBtn.style.float = "right";
  deleteBtn.classList.add("delete-button");
  deleteBtn.addEventListener("click", () => {
    const list = lists.find((listElem) => listElem.title === listTitle);
    listItem.parentNode.removeChild(listItem);
    list.items = list.items.filter((item) => item.text !== listItem.innerText);
    updateLists();
  });
  listItem.appendChild(deleteBtn);
}

function addTask(e) {
  e.preventDefault();

  const listName = form.querySelector("#list-groups").value;
  const list = lists.find((listItem) => listItem.title === listName);

  const text = form.querySelector("#task-name").value;
  const dueDate = form.querySelector("#reminder-date").value;
  const priority = form.querySelector("#priority-list").value;
  const task = new Task(text, dueDate, `${priority}-priority`);

  list.items.push(task);
  updateLists();
}

function updateListOptions() {
  formListOptions.innerHTML = "";
  lists.forEach((list) => {
    const option = document.createElement("option");
    option.value = list.title;
    option.innerText = list.title;
    formListOptions.append(option);
  });
}

updateListOptions();
form.onsubmit = addTask;

const addListBtn = (() => {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  listContainer.classList.add("add-list-div");

  const addBtn = document.createElement("img");
  addBtn.id = "addListBtn";
  addBtn.src = _images_add_button_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  listContainer.appendChild(addBtn);
  addBtn.parentElement.style.border = "none";
  addBtn.addEventListener("click", () => {
    const newList = new List();
    lists.push(newList);
    addListContainer(newList);
  });

  return listContainer;
})();

updateLists();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw4REFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9pbWFnZXMvYWRkLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodC1ncmVlbjogcmdiKDk2LCAyMjcsIDE5NSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVsbG8taGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdHMtd2luZG93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmxpc3RzLXdpbmRvdyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAubGlzdHMtd2luZG93IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgfVxcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAyNXZoO1xcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubGlzdC10aXRsZTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGJsdWU7XFxufVxcblxcbi50b3AtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdG9wOiAtNHZoO1xcbiAgICByaWdodDogLTAuNXJlbTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtdGl0bGU6Zm9jdXMge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBibHVlO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG59XFxuXFxuLnVyZ2VudC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2Nyb2xsYWJsZSB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgXFxufVxcblxcblxcbi5hZGQtbGlzdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYWRkTGlzdEJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcGxpdHNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTB2aDtcXG59XFxuXFxuLmFkZC10YXNrLXdpbmRvdyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQ6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubmV3LXRhc2staGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWRkLXRhc2std2luZG93ID4gZm9ybSB7XFxuICAgIGxpbmUtaGVpZ2h0OiA1dmg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxdncsIDFyZW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3MSwgNjEsIDIzNyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg3MSwgNjEsIDIzNywgMSkgMCUsIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCUpO1xcbn1cXG5cXG4ucmVtaW5kZXJzLXdpbmRvdyB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgICBib3JkZXItdG9wOiAwO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUdBQXFHO0FBQ3pHOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7O0FBR0E7SUFDSTtRQUNJLGdEQUFnRDtJQUNwRDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnREFBZ0Q7SUFDcEQ7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2Qjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsc0ZBQXNGO0FBQzFGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWdyZWVuOiByZ2IoOTYsIDIyNywgMTk1KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWxsby1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0cy13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAubGlzdHMtd2luZG93IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5saXN0cy13aW5kb3cge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgICB9XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5saXN0LXRpdGxlOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZTtcXG59XFxuXFxuLnRvcC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0b3A6IC00dmg7XFxuICAgIHJpZ2h0OiAtMC41cmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC10aXRsZTpmb2N1cyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGJsdWU7XFxufVxcblxcbi5saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDByZW07XFxufVxcblxcbi5saXN0LWl0ZW06aG92ZXIge1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbn1cXG5cXG4udXJnZW50LXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5zY3JvbGxhYmxlIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIsIC5zY3JvbGxhYmxlOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuLmFkZC1saXN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNhZGRMaXN0QnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNwbGl0c2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbn1cXG5cXG4uYWRkLXRhc2std2luZG93IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdDogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5uZXctdGFzay1oZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQtdGFzay13aW5kb3cgPiBmb3JtIHtcXG4gICAgbGluZS1oZWlnaHQ6IDV2aDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDF2dywgMXJlbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDcxLCA2MSwgMjM3KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDcxLCA2MSwgMjM3LCAxKSAwJSwgcmdiYSgwLCAyMTIsIDI1NSwgMSkgMTAwJSk7XFxufVxcblxcbi5yZW1pbmRlcnMtd2luZG93IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQ7XFxuICAgIGJvcmRlci10b3A6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ2ZWJkZTE1YjMzYjY1ZTQxZjhiYzFjNDJiMWYxNDYwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYmQ5YjQ1NjVjYTQwMTAwYzQ4Zjk3MDYxNTNmYjkwYi5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBhZGRMaXN0SW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9hZGQtYnV0dG9uLnBuZ1wiO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmdcIjtcblxuZnVuY3Rpb24gTGlzdCgpIHtcbiAgdGhpcy50aXRsZSA9IFwiVGVtcFwiO1xuICB0aGlzLml0ZW1zID0gW107XG59XG5cbmZ1bmN0aW9uIFRhc2sodGV4dCwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xufVxuXG5jb25zdCBsaXN0c1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMtd2luZG93XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZm9ybUxpc3RPcHRpb25zID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xpc3QtZ3JvdXBzXCIpO1xuXG5sZXQgbGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpO1xuaWYgKGxpc3RzID09IG51bGwpIGxpc3RzID0gW107XG5lbHNlIGxpc3RzID0gSlNPTi5wYXJzZShsaXN0cyk7XG5cbmZ1bmN0aW9uIGFkZExpc3RDb250YWluZXIobmV3TGlzdCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1jb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGFibGVcIik7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICBkZWxldGVCdXR0b24uc3R5bGUud2lkdGggPSBcIjJ2aFwiO1xuICBkZWxldGVCdXR0b24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9wLXJpZ2h0XCIpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG5cbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICB9KTtcbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsaXN0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICBsaXN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3QtdGl0bGVcIik7XG4gIGxpc3RUaXRsZS52YWx1ZSA9IG5ld0xpc3QudGl0bGU7XG4gIGxpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIiwgXCJhdXRvZm9jdXNcIik7XG4gIGxpc3RUaXRsZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAobGlzdFRpdGxlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBsaXN0VGl0bGUudmFsdWUgPSBuZXdMaXN0LnRpdGxlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICBhbGVydChcIkxpc3QgbXVzdCBoYXZlIGEgbmFtZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0xpc3QudGl0bGUgPSBsaXN0VGl0bGUudmFsdWU7XG4gICAgdXBkYXRlTGlzdE9wdGlvbnMoKTtcbiAgfTtcblxuICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGlzdEVsZW0uY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGlzdHNXaW5kb3cucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QgIT09IG5ld0xpc3QpO1xuICAgIHVwZGF0ZUxpc3RPcHRpb25zKCk7XG4gICAgdXBkYXRlTGlzdHMoKTtcbiAgfSk7XG5cbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW0pO1xuXG4gIGxpc3RzV2luZG93LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICBsaXN0c1dpbmRvdy5hcHBlbmRDaGlsZChhZGRMaXN0QnRuKTtcbiAgbGlzdFRpdGxlLmZvY3VzKCk7XG4gIHVwZGF0ZUxpc3RPcHRpb25zKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RzKCkge1xuICBsaXN0c1dpbmRvdy5pbm5lckhUTUwgPSBcIlwiO1xuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgYWRkTGlzdENvbnRhaW5lcihsaXN0KTtcbiAgfSk7XG4gIGNvbnN0IGxpc3RDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWNvbnRhaW5lclwiKTtcblxuICBsaXN0Q29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBsaXN0VGl0bGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpO1xuXG4gICAgaWYgKGxpc3RUaXRsZSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBjb25zdCBsaXN0ID0gbGlzdHMuZmluZCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLnRpdGxlID09PSBsaXN0VGl0bGUudmFsdWUpO1xuICAgIGNvbnN0IHVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGlzdC5pdGVtcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuICAgICAgbGkuaW5uZXJUZXh0ID0gdGFzay50ZXh0O1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgYWRkQ2hlY2tib3gobGlzdFRpdGxlLnZhbHVlLCBsaSk7XG4gICAgICBhZGREZWxldGVCdG4obGlzdFRpdGxlLnZhbHVlLCBsaSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxpc3RzV2luZG93LmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hlY2tib3gobGlzdFRpdGxlLCBsaXN0SXRlbSkge1xuICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tCdXR0b24udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tCdXR0b24uc3R5bGUud2lkdGggPSBcIjEwcHhcIjtcbiAgY2hlY2tCdXR0b24uc3R5bGUuaGVpZ2h0ID0gXCIxMHB4XCI7XG4gIGNoZWNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgY2hlY2tCdXR0b24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cbiAgY2hlY2tCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBsaXN0SXRlbS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNoZWNrQnV0dG9uLmNoZWNrZWRcbiAgICAgID8gXCJsaW5lLXRocm91Z2hcIlxuICAgICAgOiBcIm5vbmVcIjtcbiAgfTtcblxuICBsaXN0SXRlbS5wcmVwZW5kKGNoZWNrQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gYWRkRGVsZXRlQnRuKGxpc3RUaXRsZSwgbGlzdEl0ZW0pIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUltYWdlO1xuICBkZWxldGVCdG4uc3R5bGUud2lkdGggPSBcIjFyZW1cIjtcbiAgZGVsZXRlQnRuLnN0eWxlLmZsb2F0ID0gXCJyaWdodFwiO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBsaXN0cy5maW5kKChsaXN0RWxlbSkgPT4gbGlzdEVsZW0udGl0bGUgPT09IGxpc3RUaXRsZSk7XG4gICAgbGlzdEl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXN0SXRlbSk7XG4gICAgbGlzdC5pdGVtcyA9IGxpc3QuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRleHQgIT09IGxpc3RJdGVtLmlubmVyVGV4dCk7XG4gICAgdXBkYXRlTGlzdHMoKTtcbiAgfSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgbGlzdE5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1ncm91cHNcIikudmFsdWU7XG4gIGNvbnN0IGxpc3QgPSBsaXN0cy5maW5kKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0udGl0bGUgPT09IGxpc3ROYW1lKTtcblxuICBjb25zdCB0ZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNyZW1pbmRlci1kYXRlXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eS1saXN0XCIpLnZhbHVlO1xuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGV4dCwgZHVlRGF0ZSwgYCR7cHJpb3JpdHl9LXByaW9yaXR5YCk7XG5cbiAgbGlzdC5pdGVtcy5wdXNoKHRhc2spO1xuICB1cGRhdGVMaXN0cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0T3B0aW9ucygpIHtcbiAgZm9ybUxpc3RPcHRpb25zLmlubmVySFRNTCA9IFwiXCI7XG4gIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGxpc3QudGl0bGU7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGxpc3QudGl0bGU7XG4gICAgZm9ybUxpc3RPcHRpb25zLmFwcGVuZChvcHRpb24pO1xuICB9KTtcbn1cblxudXBkYXRlTGlzdE9wdGlvbnMoKTtcbmZvcm0ub25zdWJtaXQgPSBhZGRUYXNrO1xuXG5jb25zdCBhZGRMaXN0QnRuID0gKCgpID0+IHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3QtY29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGlzdC1kaXZcIik7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkQnRuLmlkID0gXCJhZGRMaXN0QnRuXCI7XG4gIGFkZEJ0bi5zcmMgPSBhZGRMaXN0SW1hZ2U7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgYWRkQnRuLnBhcmVudEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdCgpO1xuICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgYWRkTGlzdENvbnRhaW5lcihuZXdMaXN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpc3RDb250YWluZXI7XG59KSgpO1xuXG51cGRhdGVMaXN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9