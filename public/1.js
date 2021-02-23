(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/Sections/MainSections.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Sections/MainSections.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Parts_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parts/News */ "./resources/js/components/Sections/Parts/News.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MainSections = /*#__PURE__*/function (_Component) {
  _inherits(MainSections, _Component);

  var _super = _createSuper(MainSections);

  function MainSections() {
    _classCallCheck(this, MainSections);

    return _super.apply(this, arguments);
  }

  _createClass(MainSections, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          height: "auto !important"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09B0\u09BE\u099C\u09A8\u09C0\u09A4\u09BF", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 4,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 4,
        skip: 1,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 4,
        skip: 2,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 4,
        skip: 3,
        title: 10,
        content: 20,
        design: "big-news"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u099C\u09BE\u09A4\u09C0\u09DF", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 2,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 2,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 2,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 2,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 2,
        skip: 4,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 line-left line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09B8\u09BF\u09B2\u09C7\u099F \u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B7\u09A3", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 1,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 1,
        skip: 1,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 1,
        skip: 2,
        title: 10,
        content: 20,
        design: "big-news"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09A6\u09C7\u09B6\u099C\u09C1\u09DC\u09C7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 3,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 3,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 3,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 3,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 1,
        skip: 4,
        title: 10,
        content: 20,
        design: "news-bar"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 5,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 5,
        skip: 1,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 5,
        skip: 2,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 5,
        skip: 3,
        title: 10,
        content: 20,
        design: "big-news"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09AC\u09BF\u09A8\u09CB\u09A6\u09A8", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 1,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 2,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 3,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 4,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 7,
        skip: 5,
        title: 10,
        content: 20,
        design: "big-news"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "news-box h-20",
        dangerouslySetInnerHTML: {
          __html: JSON.parse(localStorage.getItem('Settings')).wetget
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u0996\u09C7\u09B2\u09BE\u09A7\u09C1\u09B2\u09BE", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 4,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 5,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 6,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 6,
        skip: 7,
        title: 10,
        content: 20,
        design: "news-bar"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u098F\u0995\u09CD\u09B8\u0995\u09CD\u09B2\u09C1\u09B8\u09BF\u09AD", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 1,
        title: 10,
        content: 10,
        design: "news-bar-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4  line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 2,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 3,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 4,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 8,
        skip: 5,
        title: 10,
        content: 10,
        design: "news-bar-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09AA\u09CD\u09B0\u09AC\u09BE\u09B8 \u09A6\u09B0\u09CD\u09AA\u09A3", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 0,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 1,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 2,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 3,
        title: 10,
        content: 10,
        design: "news-bar-big"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4  line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 4,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 5,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 6,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 7,
        title: 10,
        content: 10,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 14,
        skip: 8,
        title: 10,
        content: 10,
        design: "news-bar-big"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u09AE\u09A4\u09BE\u09AE\u09A4", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 9,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 9,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 9,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 9,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar-big"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      }))));
    }
  }]);

  return MainSections;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainSections);

/***/ })

}]);