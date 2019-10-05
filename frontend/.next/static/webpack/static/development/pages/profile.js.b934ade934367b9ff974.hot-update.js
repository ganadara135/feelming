webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./containers/ProfileImg.js":
/*!**********************************!*\
  !*** ./containers/ProfileImg.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ \"./node_modules/react-image/umd/index.js\");\n/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _jsxFileName = \"/app/frontend/containers/ProfileImg.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar ProfileImg = function ProfileImg() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      which = _useState[0],\n      setWhich = _useState[1];\n\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      profileImg = _useSelector.profileImg;\n\n  function onChangeCarousel(which) {\n    console.log('which : ', which);\n    setWhich(which);\n  }\n\n  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    var imageFormData = new FormData();\n    [].forEach.call(e.target.files, function (f) {\n      imageFormData.append('image', f);\n    });\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UPLOAD_PROFILE_IMAGES_REQUEST\"],\n      data: imageFormData\n    });\n  }, []);\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    console.log(\"imageInput.current : \", imageInput.current);\n    imageInput.current.click();\n  }, [imageInput.current]);\n  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (index) {\n    return function () {\n      dispatch({\n        type: REMOVE_IMAGE,\n        index: index\n      });\n    };\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    afterChange: onChangeCarousel,\n    style: {\n      width: 240,\n      padding: 10\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46\n    },\n    __self: this\n  }, __jsx(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47\n    },\n    __self: this\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onChange: onChangeImages,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48\n    },\n    __self: this\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49\n    },\n    __self: this\n  }, \" \\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50\n    },\n    __self: this\n  }, profileImg.map(function (v, i) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: 'inline-block'\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52\n      },\n      __self: this\n    }, __jsx(\"img\", {\n      src: \"http://localhost:3065/\".concat(v),\n      style: {\n        width: '200px'\n      },\n      alt: v,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53\n      },\n      __self: this\n    }), __jsx(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54\n      },\n      __self: this\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: onRemoveImage(i),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55\n      },\n      __self: this\n    }, \"\\uC81C\\uAC70\")));\n  }))), __jsx(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62\n    },\n    __self: this\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onChange: onChangeImages,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63\n    },\n    __self: this\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64\n    },\n    __self: this\n  }, \" \\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\")), __jsx(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67\n    },\n    __self: this\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onChange: onChangeImages,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68\n    },\n    __self: this\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69\n    },\n    __self: this\n  }, \" \\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileImg);\n\n//# sourceURL=webpack:///./containers/ProfileImg.js?");

/***/ })

})