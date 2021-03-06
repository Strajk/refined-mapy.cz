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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3)
__webpack_require__(4)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* eslint-disable quote-props */

// copy(window.Mapy.Config.mapSets.map(x => x.seo))
const MAP_SETS = {
  "zakladni": "zakladni",
  "turisticka": "turisticka",
  "letni": "letni",
  "zimni": "zimni",
  "fotografie": "fotografie",
  "letecka": "letecka",
  "letecka-2015": "letecka-2015",
  "letecka-2012": "letecka-2012",
  "letecka-2006": "letecka-2006",
  "letecka-2003": "letecka-2003",
  "dopravni": "dopravni",
  "uzavirky": "uzavirky",
  "zemepisna": "zemepisna",
  "19stoleti": "19stoleti",
  "hapticka": "hapticka",
  "vylety": "vylety",
  "mapari": "mapari",
  "testovaci": "testovaci",
  "testik": "testik",
  "appka-offline": "appka-offline",
  "appka-online": "appka-online",
  "appka-doprava-offline": "appka-doprava-offline",
  "appka-doprava-online": "appka-doprava-online",
  "appka-zima-offline": "appka-zima-offline",
  "appka-zima-online": "appka-zima-online",
  "cesko": "cesko",
  "prazdna-turist": "prazdna-turist",
  "letecka-prazdna": "letecka-prazdna",
  "prazdna": "prazdna",
  "skimapa": "skimapa",
  "textova": "textova",
  "zimni-prazdna": "zimni-prazdna",
  "ceskoza100": "ceskoza100",
  "stream": "stream",
  "dopravni-zpravy": "dopravni-zpravy",
  "mhd": "mhd",
  "skiarealy": "skiarealy",
  "sreality_pois": "sreality_pois",
}

const MAPPING = {
  q: MAP_SETS.zakladni,
  w: MAP_SETS.turisticka,
  e: MAP_SETS.letecka,
}

window.JAK.Events.addListener(document, "keydown", undefined, (keyboardEvent) => {
  /*
    altKey: false
    ctrlKey: false
    metaKey: false
    shiftKey: false
    key: "a"
    target: body.lang-en
  */

  if (["INPUT"].includes(keyboardEvent.target.tagName)) {
    return // ignore
  }

  const mapped = MAPPING[keyboardEvent.key]

  window.Mapy.getComponent("mapsetswitch")._setMapset(mapped)
})


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* eslint-disable no-proto */

const listInstance = window.Mapy
  .getComponent("mymaps")
  ._items[0] // 0: Places, 1: Activities, 2: Photos
  .component
  // ._activeComp._list // This is not set when entering Mapy.cz not on `My maps` section
  ._list._list // this should be set, but TBH not sure why ¯\_(ツ)_/¯

listInstance
  .__proto__
  ._setHeights = function () {
    const folderHeight = 40 + 2 * 4 // orig: 160
    this._dom.foldersList.style.height = this._dom.foldersList.children.length * folderHeight + "px"
    const itemHeight = 85 // orig: 85
    this._dom.itemsList.style.height = this._dom.itemsList.children.length * itemHeight + "px"
  }

listInstance
  .__proto__
  ._setHeights
  .apply(listInstance)


/***/ })
/******/ ]);