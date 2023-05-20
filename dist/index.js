(/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Block argument types\n * @enum {string}\n */\nconst ArgumentType = {\n    /**\n     * Numeric value with angle picker\n     */\n    ANGLE: 'angle',\n\n    /**\n     * Boolean value with hexagonal placeholder\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * Numeric value with color picker\n     */\n    COLOR: 'color',\n\n    /**\n     * Numeric value with text field\n     */\n    NUMBER: 'number',\n\n    /**\n     * String value with text field\n     */\n    STRING: 'string',\n\n    /**\n     * String value with matrix field\n     */\n    MATRIX: 'matrix',\n\n    /**\n     * MIDI note number with note picker (piano) field\n     */\n    NOTE: 'note',\n\n    /**\n     * Inline image on block (as part of the label)\n     */\n    IMAGE: 'image'\n};\n\nmodule.exports = ArgumentType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/argument-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Types of block\n * @enum {string}\n */\nconst BlockType = {\n    /**\n     * Boolean reporter with hexagonal shape\n     */\n    BOOLEAN: 'Boolean',\n\n    /**\n     * A button (not an actual block) for some special action, like making a variable\n     */\n    BUTTON: 'button',\n\n    /**\n     * Command block\n     */\n    COMMAND: 'command',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * The thread continues with the next block whether or not a child branch ran.\n     */\n    CONDITIONAL: 'conditional',\n\n    /**\n     * Specialized hat block with no implementation function\n     * This stack only runs if the corresponding event is emitted by other code.\n     */\n    EVENT: 'event',\n\n    /**\n     * Hat block which conditionally starts a block stack\n     */\n    HAT: 'hat',\n\n    /**\n     * Specialized command block which may or may not run a child branch\n     * If a child branch runs, the thread evaluates the loop block again.\n     */\n    LOOP: 'loop',\n\n    /**\n     * General reporter with numeric or string value\n     */\n    REPORTER: 'reporter'\n};\n\nmodule.exports = BlockType;\n\n\n//# sourceURL=webpack:///./node_modules/scratch-vm/src/extension-support/block-type.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scratch-vm/src/extension-support/argument-type */ \"./node_modules/scratch-vm/src/extension-support/argument-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scratch-vm/src/extension-support/block-type */ \"./node_modules/scratch-vm/src/extension-support/block-type.js\");\n/* harmony import */ var scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar TextChatSkyWayExtension = /*#__PURE__*/function () {\n  function TextChatSkyWayExtension(runtime) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TextChatSkyWayExtension);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"runtime\", void 0);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, \"gamepadIndex\", void 0);\n\n    this.runtime = runtime;\n\n    if (TextChatSkyWayExtension.apikey === '') {\n      var apikey = window.prompt('SkyWayのAPIキーを入力してください: ', '');\n\n      if (apikey) {\n        TextChatSkyWayExtension.apikey = apikey;\n        console.log(TextChatSkyWayExtension.apikey);\n      }\n    }\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TextChatSkyWayExtension, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return {\n        id: 'testchatskyway',\n        name: 'チャット',\n        menuIconURI: 'assets/images/menuIcon.png',\n        blockIconURI: 'assets/images/menuIcon.png',\n        color1: '#e9c46a',\n        color2: '#f4a261',\n        color3: '#e76f51',\n        blocks: [{\n          opcode: 'joinRoom',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default.a.COMMAND,\n          text: '部屋番号 [ROOM] に入室する',\n          arguments: {\n            ROOM: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3___default.a.STRING,\n              menu: 'room',\n              defaultValue: '0'\n            }\n          }\n        }, {\n          opcode: 'sendChatText',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default.a.COMMAND,\n          text: 'チャットテキストを送る [TEXT]',\n          arguments: {\n            TEXT: {\n              type: scratch_vm_src_extension_support_argument_type__WEBPACK_IMPORTED_MODULE_3___default.a.STRING,\n              defaultValue: 'hello'\n            }\n          }\n        }, {\n          opcode: 'leaveRoom',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default.a.COMMAND,\n          text: '退室する'\n        }, {\n          opcode: 'whenChatTextReceived',\n          blockType: scratch_vm_src_extension_support_block_type__WEBPACK_IMPORTED_MODULE_4___default.a.HAT,\n          text: 'チャットテキストを受け取ったとき'\n        }],\n        menus: {\n          room: {\n            acceptReporters: true,\n            items: [{\n              text: 'abc',\n              value: 'abc'\n            }, {\n              text: 'ccc',\n              value: 'ccc'\n            }]\n          }\n        }\n      };\n    }\n  }, {\n    key: \"joinRoom\",\n    value: function joinRoom(args) {\n      console.log('joinRoom: ' + args.ROOM);\n    }\n  }, {\n    key: \"sendChatText\",\n    value: function sendChatText(args) {\n      console.log('sendChatText: ' + args.TEXT);\n    }\n  }, {\n    key: \"leaveRoom\",\n    value: function leaveRoom() {\n      console.log('leaveRoom');\n    }\n  }, {\n    key: \"whenChatTextReceived\",\n    value: function whenChatTextReceived(args) {\n      console.log('whenChatTextReceived');\n    }\n  }]);\n\n  return TextChatSkyWayExtension;\n}();\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TextChatSkyWayExtension, \"apikey\", '');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextChatSkyWayExtension);\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ }));;