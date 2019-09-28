webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "/app/frontend/pages/profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Profile = function Profile() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followerList = _useSelector.followerList,
      followingList = _useSelector.followingList,
      hasMoreFollower = _useSelector.hasMoreFollower,
      hasMoreFollowing = _useSelector.hasMoreFollowing;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts; // useEffect ( () => {
  //     if (me) {
  //     }
  // }, [me && me.id ]);


  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["UNFOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["REMOVE_FOLLOWER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWINGS_REQUEST"],
      offset: followingList.length
    });
  }, [followingList.length]);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWERS_REQUEST"],
      offset: followerList.length
    });
  }, [followerList.length]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
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
        lineNumber: 56
      },
      __self: this
    }, " \uD314\uB85C\uC719 \uBAA9\uB85D "),
    loadMore: hasMoreFollowing && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        width: '100%'
      },
      onClick: loadMoreFollowings,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, " \uB354 \uBCF4\uAE30 "),
    dataSource: followingList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          key: "icon",
          type: "stop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })],
        onClick: onUnfollow(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        description: item.nickname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
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
        lineNumber: 71
      },
      __self: this
    }, " \uD314\uB85C\uC6CC \uBAA9\uB85D "),
    loadMore: hasMoreFollower && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      style: {
        width: '100%'
      },
      onClick: loadMoreFollowers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " \uB354 \uBCF4\uAE30 "),
    dataSource: followerList,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          key: "icon",
          type: "stop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        })],
        onClick: onRemoveFollower(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
        description: item.nickname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: +c.createdAt,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    });
  })));
};

Profile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var state;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = context.store.getState(); // 이 직전에 LOAD_USERS_REQUEST  가 완료돼야함
            // 따라서 me = null 이면 나로 인식하게 아래 reducer 를 처리하다

            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWERS_REQUEST"],
              data: state.user.me && state.user.me.id
            });
            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWINGS_REQUEST"],
              data: state.user.me && state.user.me.id
            });
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_POSTS_REQUEST"],
              data: state.user.me && state.user.me.id
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.bb1307944b43b1b8578c.hot-update.js.map