webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "/app/frontend/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Profile = function Profile() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followerList = _useSelector.followerList,
      followingList = _useSelector.followingList;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (me) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_FOLLOWERS_REQUEST"],
        data: me.id
      });
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOAD_FOLLOWINGS_REQUEST"],
        data: me.id
      });
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_POSTS_REQUEST"],
        data: me.id
      });
    }
  }, [me && me.id]);
  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (userId) {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_FOLLOWER_REQUEST"],
      data: userId
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: "\uB2C9\uB124\uC784",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\uC218\uC815")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " \uD314\uB85C\uC719 \uBAA9\uB85D "),
    loadMore: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, " \uB354 \uBCF4\uAE30 "),
    dataSource: followingList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          key: "icon",
          type: "stop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        })],
        onClick: onUnfollow(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        description: item.nickname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " \uD314\uB85C\uC6CC \uBAA9\uB85D "),
    loadMore: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, " \uB354 \uBCF4\uAE30 "),
    dataSource: followerList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          key: "icon",
          type: "stop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        })],
        onClick: onRemoveFollower(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        description: item.nickname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: +c.createdAt,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.8a84439680bf3800ef22.hot-update.js.map