webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
var _jsxFileName = "/app/frontend/components/PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostCard = function PostCard(_ref) {
  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      commentAdded = _useSelector2.commentAdded,
      isAddingComment = _useSelector2.isAddingComment;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });

    if (!commentFormOpened) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_COMMENTS_REQUEST"],
        data: post.id
      });
    }
  }, []);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!me) {
      return alert('로그인이 필요합니다');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"],
      data: {
        postId: post.id,
        content: commentText
      }
    });
  }, [me && me.id, commentText]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCommentText('');
  }, [commentAdded === true]);
  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setCommentText(e.target.value);
  }, []);
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!me) {
      return alert('로그인이 필요합니다');
    }

    if (post.Likers && post.Likers.find(function (v) {
      return v.id === me.id;
    })) {
      // 좋아요 누른 상태
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_REQUEST"],
        data: post.id
      });
    } else {
      // 좋아요 안 누른 상태
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_REQUEST"],
        data: post.id
      });
    }
  }, [me && me.id, post && post.id]); //console.log("post.createdAt  : ", post.createdAt)

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt //cover={post.Images[0] && <img alt="example" src={`http://localhost:3065/${post.Images[0].src}`} />}
    ,
    cover: post.Images && post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "retweet",
      key: "retweet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "heart",
      key: "heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "message",
      key: "message",
      onClick: onToggleComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "ellipsis",
      key: "ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "\uD314\uB85C\uC6B0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.User.id
        }
      },
      as: "/user/".concat(post.User.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, post.User.nickname[0]))),
    title: post.User.nickname,
    description: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, post.content.split(/(#[^\s]+)/g).map(function (v) {
      if (v.match(/#[^\s]+/)) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: {
            pathname: '/hashtag',
            query: {
              tag: v.slice(1)
            }
          },
          as: "/hashtag/".concat(v.slice(1)),
          key: v,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, v));
      }

      return v;
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmitComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, " \uC090\uC57D ")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments || [],
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: {
            pathname: '/user',
            query: {
              id: item.User.id
            }
          },
          as: "/user/".concat(item.User.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, item.User.nickname[0]))),
        content: item.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string //createdAt: PropTypes.string,

  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.6474bfc256931926dd6c.hot-update.js.map