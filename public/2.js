(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/components/Sections/MediaSection.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Sections/MediaSection.js ***!
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




var MediaSection = /*#__PURE__*/function (_Component) {
  _inherits(MediaSection, _Component);

  var _super = _createSuper(MediaSection);

  function MediaSection() {
    _classCallCheck(this, MediaSection);

    return _super.apply(this, arguments);
  }

  _createClass(MediaSection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-video mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container pt-4 pb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "carousel1",
        className: "carousel slide media-box",
        "data-ride": "carousel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: "#FFC107",
          fontSize: "20px",
          marginBottom: "20px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          color: "#ff3e00",
          fontSize: "26px"
        },
        className: "fa fa-play-circle",
        "aria-hidden": "true"
      }), " ", "\xA0\u09AD\u09BF\u09A1\u09BF\u0993"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-inner",
        role: "listbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("VideoOne")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "embed-responsive embed-responsive-16by9"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          className: "embed-responsive-item",
          src: keyName.link,
          allowFullScreen: true
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.title))));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("VideoTwo")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "embed-responsive embed-responsive-16by9"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          className: "embed-responsive-item",
          src: keyName.link,
          allowFullScreen: true
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.title))));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("VideoThree")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "embed-responsive embed-responsive-16by9"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          className: "embed-responsive-item",
          src: keyName.link,
          allowFullScreen: true
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.title))));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "carousel-control-prev",
        href: "#carousel1",
        role: "button",
        "data-slide": "prev"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "carousel-control-next",
        href: "#carousel1",
        role: "button",
        "data-slide": "next"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "carousel2",
        className: "carousel slide media-box",
        "data-ride": "carousel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: "#FFC107",
          fontSize: "20px",
          marginBottom: "20px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          color: "#ff3e00",
          fontSize: "20px"
        },
        className: "fa fa-camera-retro",
        "aria-hidden": "true"
      }), " ", "\xA0\u099B\u09AC\u09BF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-inner",
        role: "listbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("PhotoOne")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: keyName.image,
          className: "w-100"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.caption))));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("PhotoTwo")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: keyName.image,
          className: "w-100"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.caption))));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, JSON.parse(localStorage.getItem("PhotoThree")).map(function (keyName, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-3 col-6",
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "box mb-4 mb-md-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: keyName.image,
          className: "w-100"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            padding: "5px",
            background: "#111"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0px"
          }
        }, keyName.caption))));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "carousel-control-prev",
        href: "#carousel2",
        role: "button",
        "data-slide": "prev"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "carousel-control-next",
        href: "#carousel2",
        role: "button",
        "data-slide": "next"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "Next")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u09B6\u09BF\u09B2\u09CD\u09AA \u0993 \u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 10,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 10,
        skip: 1,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 line-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 10,
        skip: 2,
        title: 10,
        content: 20,
        design: "big-news"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 10,
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
      }, "\u0985\u09B0\u09CD\u09A5 \u0993 \u09AC\u09BE\u09A3\u09BF\u099C\u09CD\u09AF", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 12,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 12,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 12,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 12,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u0986\u0987\u09A8-\u0986\u09A6\u09BE\u09B2\u09A4", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 13,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 13,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 13,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 13,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, " ", "\u0997\u09A3\u09AE\u09BE\u09A7\u09CD\u09AF\u09AE", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 11,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 11,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 11,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 11,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u09AB\u09BF\u099A\u09BE\u09B0", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 15,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 15,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 15,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 15,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
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
      }, "\u0995\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09BE\u09B8", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 16,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 16,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 16,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 16,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u09B8\u0982\u0997\u09A0\u09A8 \u09B8\u0982\u09AC\u09BE\u09A6", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 17,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 17,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 17,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 17,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u0995\u09CD\u09AF\u09BE\u09B0\u09BF\u09DF\u09BE\u09B0", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 18,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 18,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 18,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 18,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " mt-4 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "cat-title"
      }, "\u09B2\u09BE\u0987\u09AB \u09B8\u09CD\u099F\u09BE\u0987\u09B2", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-arrow-alt-circle-right"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 19,
        skip: 0,
        title: 10,
        content: 20,
        design: "big-news"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 19,
        skip: 1,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 19,
        skip: 2,
        title: 10,
        content: 20,
        design: "news-bar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " line-bottom mt-0 mt-md-4 mb-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
        category: 19,
        skip: 3,
        title: 10,
        content: 20,
        design: "news-bar"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-bottom mt-4 mb-4"
      })))));
    }
  }]);

  return MediaSection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MediaSection);

/***/ })

}]);