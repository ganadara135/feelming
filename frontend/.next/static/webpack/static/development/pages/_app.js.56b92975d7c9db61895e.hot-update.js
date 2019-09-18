webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/mac/work/feelming/frontend/components/UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  return __jsx(Card, {
    actions: [__jsx("div", {
      key: "twit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\uD2B8\uC704", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), " ", user.Post.length), __jsx("div", {
      key: "followings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), " ", user.Followings.length), __jsx("div", {
      key: "followers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), " ", user.Followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(Card.Meta, {
    avatar: __jsx(Avatar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, user.nickname[0]),
    title: user.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=_app.js.56b92975d7c9db61895e.hot-update.js.map