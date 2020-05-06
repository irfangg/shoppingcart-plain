/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/app/style.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/app/style.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:10px}::-webkit-scrollbar-thumb{background:rgba(0,0,0,.5);border-radius:10px}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background-color:#f1f3f6}header{overflow:hidden;background-color:#4269ea;padding:20px 10px}header a{float:left;color:#000}header a,header a.cartLink{text-align:center;text-decoration:none}header a.cartLink{float:right;color:#fff}header a.logo{font-weight:700;color:#f7cd22}header a.active{background-color:#4269ea;color:#fff}.header-right{float:right;color:#fff}@media screen and (max-width:500px){header a{display:block;text-align:left}.header-right,header a{float:none}}.products{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-gap:1rem;padding:20px;border-left:1px solid #c2c3c6}.product-item{padding:1rem;display:flex;flex-direction:column}.discountpercentage{color:#23a723}.originalprice{text-decoration:line-through;color:#959696}.finalprice{color:#434344}.price-details{text-align:left;font-weight:700}.card-title{margin:1rem 0}.card-block{display:flex;flex-direction:column}img.card-img-top{height:200px;width:100%;object-fit:fill}.add-to-cart{padding:.5rem;margin:1rem;background:#f7ad22;border-radius:2rem;font-size:12px;text-decoration:none;color:#000;font-weight:800;text-align:center}.badge{padding-left:9px;padding-right:9px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px}.badge-info{background-color:#c67605}.total-count{font-size:12px;background:#e82b2b;color:#fff;padding:0 5px;vertical-align:top;margin-left:-10px;overflow:hidden;min-width:24px;height:24px;font-weight:700;border-radius:100%;border:3px solid #fff;text-align:center;background-clip:padding-box}.filter{float:left;width:20%;height:300px;padding:20px}.ui-slider-horizontal .ui-slider-range{background:#4269ea}.ui-slider-handle{border-radius:100%}article{float:left;padding:20px;width:80%;height:300px}section:after{content:\\\"\\\";display:table;clear:both}footer{background-color:#4269ea;padding:10px;text-align:center;color:#e4eafc;bottom:0}@media (max-width:600px){article,nav{width:100%;height:auto}}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/app/style.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/app/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction fetchAllProducts() {\n  fetch(\"../../Apparals.json\").then(response => response.json()).then(data => {\n    console.log(data);\n    data.forEach(d => {\n      $(\".products\").append(`\n          <div class=\"card product-item\">\n              <img\n              class=\"card-img-top\"\n              src=\"${d.medium_image_url}\"\n              alt=${d.title}\n              />\n              <div class=\"card-block\">\n              <div class=\"card-title\">${d.product_type_name}</div>\n              <div class=\"price-details\">\n              <span class=\"finalprice\">${d.Final_Price.toFixed(2)}</span>\n              <span class=\"originalprice\">${d.Original_Price.toFixed(2)}</span>\n              <span class=\"discountpercentage\">${d.Discount_Percent}%</span>\n              </div>\n              <a\n                  href=\"#\"\n                  data-name=\"${d.title}\"\n                  data-price=${d.Final_Price}\n                  class=\"add-to-cart btn btn-primary\"\n                  >Add to cart</a\n              >\n              </div>\n          </div>\n          `);\n    });\n    $(\".product-item a.add-to-cart\").on(\"click\", function (event) {\n      event.preventDefault();\n      var name = $(this).data(\"name\");\n      var price = Number($(this).data(\"price\"));\n      shoppingCart.addItemToCart(name, price, 1);\n      displayCart();\n    });\n  });\n}\n\nfunction showProducts(minPrice, maxPrice) {\n  $(\".products .product-item\").hide().filter(function () {\n    console.log(this, minPrice, maxPrice);\n    var price = parseInt($(this).find(\" .finalprice\").html(), 10);\n    return price >= minPrice && price <= maxPrice;\n  }).show();\n}\n\n$(function () {\n  var options = {\n    range: true,\n    min: 0,\n    max: 5000,\n    values: [500, 3000],\n    animate: \"slow\",\n    create: function () {\n      $(\"#min\").appendTo($(\"#slider-range > span:eq(0)\"));\n      $(\"#max\").appendTo($(\"#slider-range > span:eq(1)\"));\n    },\n    slide: function (event, ui) {\n      var min = ui.values[0],\n          max = ui.values[1];\n      $(ui.handle).find(\"span\").html(\"$\" + ui.value);\n      showProducts(min, max);\n    }\n  },\n      min,\n      max;\n  $(\"#slider-range\").slider(options);\n  min = $(\"#slider-range\").slider(\"values\", 0);\n  max = $(\"#slider-range\").slider(\"values\", 1);\n  $(\"#max\").html(\"$\" + $(\"#slider-range\").slider(\"values\", 1)).position({\n    my: \"center top\",\n    at: \"center bottom\",\n    of: $(\"#slider-range > span:eq(1)\"),\n    offset: \"0, 10\"\n  });\n  $(\"#min\").html(\"$\" + $(\"#slider-range\").slider(\"values\", 0)).position({\n    my: \"center top\",\n    at: \"center bottom\",\n    of: $(\"#slider-range > span:eq(0)\"),\n    offset: \"0, 10\"\n  });\n  showProducts(min, max);\n  fetchAllProducts();\n});\n\nvar shoppingCart = function () {\n  // =============================\n  // Private methods and propeties\n  // =============================\n  let cart = []; // Constructor\n\n  function Item(name, price, count) {\n    this.name = name;\n    this.price = price;\n    this.count = count;\n  } // Save cart\n\n\n  function saveCart() {\n    sessionStorage.setItem(\"shoppingCart\", JSON.stringify(cart));\n  } // Load cart\n\n\n  function loadCart() {\n    cart = JSON.parse(sessionStorage.getItem(\"shoppingCart\"));\n  }\n\n  if (sessionStorage.getItem(\"shoppingCart\") != null) {\n    loadCart();\n  } // =============================\n  // Public methods and propeties\n  // =============================\n\n\n  var obj = {}; // Add to cart\n\n  obj.addItemToCart = function (name, price, count) {\n    for (var item in cart) {\n      if (cart[item].name === name) {\n        cart[item].count++;\n        saveCart();\n        return;\n      }\n    }\n\n    var item = new Item(name, price, count);\n    cart.push(item);\n    saveCart();\n  }; // Set count from item\n\n\n  obj.setCountForItem = function (name, count) {\n    for (var i in cart) {\n      if (cart[i].name === name) {\n        cart[i].count = count;\n        break;\n      }\n    }\n  }; // Remove item from cart\n\n\n  obj.removeItemFromCart = function (name) {\n    for (var item in cart) {\n      if (cart[item].name === name) {\n        cart[item].count--;\n\n        if (cart[item].count === 0) {\n          cart.splice(item, 1);\n        }\n\n        break;\n      }\n    }\n\n    saveCart();\n  }; // Remove all items from cart\n\n\n  obj.removeItemFromCartAll = function (name) {\n    for (var item in cart) {\n      if (cart[item].name === name) {\n        cart.splice(item, 1);\n        break;\n      }\n    }\n\n    saveCart();\n  }; // Clear cart\n\n\n  obj.clearCart = function () {\n    cart = [];\n    saveCart();\n  }; // Count cart\n\n\n  obj.totalCount = function () {\n    var totalCount = 0;\n\n    for (var item in cart) {\n      totalCount += cart[item].count;\n    }\n\n    return totalCount;\n  }; // Total cart\n\n\n  obj.totalCart = function () {\n    var totalCart = 0;\n\n    for (var item in cart) {\n      totalCart += cart[item].price * cart[item].count;\n    }\n\n    return Number(totalCart.toFixed(2));\n  }; // List cart\n\n\n  obj.listCart = function () {\n    var cartCopy = [];\n\n    for (let i in cart) {\n      let item = cart[i];\n      let itemCopy = {};\n\n      for (let p in item) {\n        itemCopy[p] = item[p];\n      }\n\n      itemCopy.total = Number(item.price * item.count).toFixed(2);\n      cartCopy.push(itemCopy);\n    }\n\n    return cartCopy;\n  }; // cart : Array\n  // Item : Object/Class\n  // addItemToCart : Function\n  // removeItemFromCart : Function\n  // removeItemFromCartAll : Function\n  // clearCart : Function\n  // countCart : Function\n  // totalCart : Function\n  // listCart : Function\n  // saveCart : Function\n  // loadCart : Function\n\n\n  return obj;\n}(); // *****************************************\n// Triggers / Events\n// *****************************************\n// Add item\n// Clear items\n\n\n$(\".clear-cart\").click(function () {\n  shoppingCart.clearCart();\n  displayCart();\n});\n\nfunction displayCart() {\n  var cartArray = shoppingCart.listCart();\n  var output = \"\";\n\n  for (var i in cartArray) {\n    output += \"<tr>\" + \"<td>\" + cartArray[i].name + \"</td>\" + \"<td>(\" + cartArray[i].price + \")</td>\" + \"<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=\" + cartArray[i].name + \">-</button>\" + \"<input type='number' class='item-count form-control' data-name='\" + cartArray[i].name + \"' value='\" + cartArray[i].count + \"'>\" + \"<button class='plus-item btn btn-primary input-group-addon' data-name=\" + cartArray[i].name + \">+</button></div></td>\" + \"<td><button class='delete-item btn btn-danger' data-name=\" + cartArray[i].name + \">X</button></td>\" + \" = \" + \"<td>\" + cartArray[i].total + \"</td>\" + \"</tr>\";\n  }\n\n  $(\".show-cart\").html(output);\n  $(\".total-cart\").html(shoppingCart.totalCart());\n  $(\".total-count\").html(shoppingCart.totalCount());\n} // Delete item button\n\n\n$(\".show-cart\").on(\"click\", \".delete-item\", function (event) {\n  var name = $(this).data(\"name\");\n  shoppingCart.removeItemFromCartAll(name);\n  displayCart();\n}); // -1\n\n$(\".show-cart\").on(\"click\", \".minus-item\", function (event) {\n  var name = $(this).data(\"name\");\n  shoppingCart.removeItemFromCart(name);\n  displayCart();\n}); // +1\n\n$(\".show-cart\").on(\"click\", \".plus-item\", function (event) {\n  var name = $(this).data(\"name\");\n  shoppingCart.addItemToCart(name);\n  displayCart();\n}); // Item count input\n\n$(\".show-cart\").on(\"change\", \".item-count\", function (event) {\n  var name = $(this).data(\"name\");\n  var count = Number($(this).val());\n  shoppingCart.setCountForItem(name, count);\n  displayCart();\n});\ndisplayCart();\n$(\".cart-items\").on(\"click\", function () {\n  alert();\n});\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),

/***/ "./src/app/style.scss":
/*!****************************!*\
  !*** ./src/app/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/app/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/app/style.scss?");

/***/ })

/******/ });