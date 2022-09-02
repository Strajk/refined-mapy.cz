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
__webpack_require__(5)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

try {
  window.Scene.handleEvent = function handleEventCustom (event) {
    // Keep the same as original
    switch (event.type) {
      case "dragover":
      case "dragstart":
        event.preventDefault()
        break
      case "drop":
        event.preventDefault()
        // Here, we completely override the original function with custom logic
        // It's quite ok, cause importing GPX files can be done also by Tool > Import GPX,
        // so dropping GPX file on map can be repurposed solely for our needs
        var file = event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files[0] : undefined // Let's not support multiple files just yet
        var fileName = file.name // e.g. "my-trip.gpx"
        var fileType = file.type // e.g. "application/gpx+xml"

        // Previously, I've showed alert with error and aborted the script if following conditions were not met
        // But it seems to cause false negatives, so showing just a warning instead and continuing https://www.bike-forum.cz/forum/vylepsene-mapy-cz-pro-chronicke-planovace
        if (!fileType.includes("gpx")) console.warn("[refined-mapy.cz] Dropped file seems not to be GPX file based on it's type, but rather " + fileType)
        if (!fileName.endsWith(".gpx")) console.warn("[refined-mapy.cz] Dropped file seems not to be GPX file based on it's name, as it does not end with .gpx")

        var reader = new FileReader()
        reader.onload = function (fileEvent) {
          reader.onload = null // Remove, just to be sure. It was done like this in legacy Mapy.cz logic
          try {
            const xmlDoc = window.JAK.XML.createDocument(fileEvent.target.result)
            const layer = new window.SMap.Layer.GPX(xmlDoc, null, { maxPoints: 100000 }) // Legacy Mapy.cz logic has upper limit set to 1000, but let's be brave and pump it up higher based on comment from JanGPX on bike-forum.cz
            if (!layer) return alert("Invalid gpx file, parsing with Mapy.cz's GPX parser failed")
            const mapRef = window.Mapy.getComponent("pois")._map // There's definitely a better way to do this
            mapRef.addLayer(layer)
            layer.enable()
            layer.fit()
          } catch (e) {
            console.log(`[refined-mapy.cz] Error parsing gpx file: ${e}`)
            alert("Error parsing gpx file, see console for details")
          }
        }
        reader.readAsText(file)
    }
  }
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: gpx-drop: ${e}`)
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* eslint-disable quote-props */

try {
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

  const MAP_SETS_MAPPING = {
    q: MAP_SETS.zakladni,
    w: MAP_SETS.turisticka,
    e: MAP_SETS.letecka,
    r: MAP_SETS.zemepisna, // geographical
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

    // Ignore when inside input fields
    if (["INPUT"].includes(keyboardEvent.target.tagName)) return // ignore

    // try parsing to number
    const keyAsNumber = Number(keyboardEvent.key)
    if (typeof keyAsNumber === "number" && !Number.isNaN(keyAsNumber)) {
      // 1 is the whole Earth, 8 is the whole Czech Republic, so for planning 8 is the lowest meaningful zoom
      const LOWEST_MEANINGFUL_ZOOM = 8
      window.Mapy.getComponent("pois")._map.setZoom(keyAsNumber + LOWEST_MEANINGFUL_ZOOM)
      return
    }

    const mapped = MAP_SETS_MAPPING[keyboardEvent.key]
    if (mapped) window.Mapy.getComponent("mapsetswitch")._setMapset(mapped)

    if (keyboardEvent.key === "p") window.Mapy.getComponent("layercontrol").togglePano()
    if (keyboardEvent.key === "o") window.Mapy.getComponent("layercontrol")._open3d()
  })
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: map-switch-shortcuts: ${e}`)
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* eslint-disable no-proto */

try {
  const listInstance = window.Mapy
    .getComponent("mymaps")
    ._items[0] // 0: Places, 1: Activities, 2: Photos
    .component
    // ._activeComp._list // This is not set when entering Mapy.cz not on `My maps` section
    ._list // this should be set, but TBH not sure why ¯\_(ツ)_/¯

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
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: sidebar-condensed: ${e}`)
}


/***/ })
/******/ ]);