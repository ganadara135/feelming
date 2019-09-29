webpackHotUpdate("static/development/pages/hashtag.js",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _jsxFileName = \"/app/frontend/components/FollowButton.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar FollowButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(function (_ref) {\n  var post = _ref.post,\n      onUnfollow = _ref.onUnfollow,\n      onFollow = _ref.onFollow;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  return !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  }) ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onUnfollow(post.User.id),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11\n    },\n    __self: this\n  }, \"\\uC5B8\\uD314\\uB85C\\uC6B0\") : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onFollow(post.User.id),\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12\n    },\n    __self: this\n  }, \"\\uD314\\uB85C\\uC6B0\");\n});\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  onUnfollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,\n  onFollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\n//# sourceURL=webpack:///./components/FollowButton.js?");

/***/ })

})