webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./containers/FollowList.js":
/*!**********************************!*\
  !*** ./containers/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/app/frontend/containers/FollowList.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n      hasMore = _ref.hasMore,\n      onClickMore = _ref.onClickMore,\n      data = _ref.data,\n      onClickStop = _ref.onClickStop;\n  return __jsx(List, {\n    style: {\n      marginBottom: '20px'\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9\n      },\n      __self: this\n    }, header),\n    loadMore: hasMore && __jsx(Button, {\n      style: {\n        width: '100%'\n      },\n      onClick: onClickMore,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10\n      },\n      __self: this\n    }, \" \\uB354 \\uBCF4\\uAE30 \"),\n    dataSource: followingList,\n    renderItem: function renderItem(item) {\n      return __jsx(List.Item, {\n        style: {\n          marginTop: '20px'\n        },\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13\n        },\n        __self: this\n      }, __jsx(Card, {\n        actions: [__jsx(Icon, {\n          key: \"icon\",\n          type: \"stop\",\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14\n          },\n          __self: this\n        })],\n        onClick: onClickStop(item.id),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14\n        },\n        __self: this\n      }, __jsx(Card.Meta, {\n        description: item.nickname,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15\n        },\n        __self: this\n      })));\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: this\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\n//# sourceURL=webpack:///./containers/FollowList.js?");

/***/ })

})