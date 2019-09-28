webpackHotUpdate("static/development/pages/hashtag.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "/app/frontend/components/PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  console.log("post : ", post.content);

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
  var liked = me && post.Likers && post.Likers.find(function (v) {
    return v.id === me.id;
  });
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });

    if (!commentFormOpened) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_COMMENTS_REQUEST"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_COMMENT_REQUEST"],
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

    if (liked) {
      // 좋아요 누른 상태
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
        data: post.id
      });
    } else {
      // 좋아요 안 누른 상태
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
        data: post.id
      });
    }
  }, [me && me.id, post && post.id, liked]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!me) {
      return alert('로그인이 필요합니다');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [me && me.id, post && post.id]);
  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["FOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, [me && me.id, post && post.Followings]);
  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["UNFOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, []); // console.log("--------------")
  // console.log("me : ",me)
  // console.log("post : ",post)
  //console.log("me.followings : ", me.Followings)
  //console.log("post.User.id : ", post.User.id)

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt //cover={post.Images[0] && <img alt="example" src={`http://localhost:3065/${post.Images[0].src}`} />}
    ,
    cover: post.Images && post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "retweet",
      key: "retweet",
      onClick: onRetweet,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "heart",
      key: "heart",
      theme: liked ? 'twoTone' : 'outlined',
      twoToneColor: "#eb2f96",
      onClick: onToggleLike,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "message",
      key: "message",
      onClick: onToggleComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "ellipsis",
      key: "ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })],
    title: post.RetweetId ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uD588\uC2B5\uB2C8\uB2E4") : null,
    extra: !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(function (v) {
      return v.id === post.User.id;
    }) ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onUnfollow(post.User.id),
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "\uC5B8\uD314\uB85C\uC6B0") : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onFollow(post.User.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "\uD314\uB85C\uC6B0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Retweet.Images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.User.id
        }
      },
      as: "/user/".concat(post.User.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, post.User.nickname[0]))),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postData: post.Retweet.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.User.id
        }
      },
      as: "/user/".concat(post.User.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, post.User.nickname[0]))),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postData: post.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmitComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
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
          lineNumber: 163
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: {
            pathname: '/user',
            query: {
              id: item.User.id
            }
          },
          as: "/user/".concat(item.User.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, __jsx("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, item.User.nickname[0]))),
        content: item.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
//# sourceMappingURL=hashtag.js.9e78803b27bca80d2c3d.hot-update.js.map