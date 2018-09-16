module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),
/* 3 */
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pongli/my/git/engineforce/libs/packages/file-lib/index.js */4);


/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./index.js + 6 modules ***!
  \******************************/
/*! exports provided: makeDirSync, getLineSync, copyFile, glob, isDirectory, getDirectories */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "fs" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "glob" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "path" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(0);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// CONCATENATED MODULE: ./src/makeDirSync.js


const sep = external_path_default.a.sep;
function makeDirSync(targetDir) {
  targetDir.split(sep).reduce((parentDir, childDir) => {
    const currentDir = external_path_default.a.resolve(parentDir, childDir);

    if (!external_fs_default.a.existsSync(currentDir)) {
      external_fs_default.a.mkdirSync(currentDir);
    }

    return currentDir;
  }, external_path_default.a.isAbsolute(targetDir) ? sep : '');
}
// CONCATENATED MODULE: ./src/getLineSync.js
 // lineNumber: 0 indexed

function getLineSync(filename, lineNumber) {
  lineNumber = +lineNumber;
  var data = external_fs_default.a.readFileSync(filename, 'utf8');
  var lines = data.split('\n');

  if (lineNumber > lines.length) {
    throw new Error('File end reached without finding line');
  }

  return lines[lineNumber];
}
// CONCATENATED MODULE: ./src/copyFile.js


async function copyFile(srcFile, destDir, renameCb) {
  return new Promise((resolve, reject) => {
    let srcFileName = external_path_default.a.basename(srcFile);
    let destFileName = srcFileName;

    if (renameCb) {
      destFileName = renameCb(srcFileName);
    }

    let destFile = external_path_default.a.join(destDir, destFileName);
    let writer = external_fs_default.a.createWriteStream(destFile);
    writer.on('finish', () => {
      console.log('Copied: ' + destFile);
      resolve();
    });
    external_fs_default.a.createReadStream(srcFile).pipe(writer);
  });
}
// EXTERNAL MODULE: external "glob"
var external_glob_ = __webpack_require__(2);
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_);

// CONCATENATED MODULE: ./src/glob.js

function glob(pattern) {
  return new Promise((resolve, reject) => {
    external_glob_default()(pattern, (err, matches) => {
      if (err) {
        return reject(err);
      }

      resolve(matches);
    });
  });
}
// CONCATENATED MODULE: ./src/isDirectory.js

const isDirectory = source => external_fs_default.a.lstatSync(source).isDirectory();
// CONCATENATED MODULE: ./src/getDirectories.js



const getDirectories = source => external_fs_default.a.readdirSync(source).map(name => external_path_default.a.join(source, name)).filter(isDirectory);
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport makeDirSync */__webpack_require__.d(__webpack_exports__, "makeDirSync", function() { return makeDirSync; });
/* concated harmony reexport getLineSync */__webpack_require__.d(__webpack_exports__, "getLineSync", function() { return getLineSync; });
/* concated harmony reexport copyFile */__webpack_require__.d(__webpack_exports__, "copyFile", function() { return copyFile; });
/* concated harmony reexport glob */__webpack_require__.d(__webpack_exports__, "glob", function() { return glob; });
/* concated harmony reexport isDirectory */__webpack_require__.d(__webpack_exports__, "isDirectory", function() { return isDirectory; });
/* concated harmony reexport getDirectories */__webpack_require__.d(__webpack_exports__, "getDirectories", function() { return getDirectories; });







/***/ })
/******/ ]);