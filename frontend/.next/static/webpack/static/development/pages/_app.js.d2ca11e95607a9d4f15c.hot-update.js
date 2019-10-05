webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _marked =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),\n    _marked2 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),\n    _marked3 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),\n    _marked4 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),\n    _marked5 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),\n    _marked6 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),\n    _marked7 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),\n    _marked8 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),\n    _marked9 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),\n    _marked10 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),\n    _marked11 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),\n    _marked12 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),\n    _marked13 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),\n    _marked14 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),\n    _marked15 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),\n    _marked16 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowings),\n    _marked17 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),\n    _marked18 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),\n    _marked19 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editNickname),\n    _marked20 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchEditNickname),\n    _marked21 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadProfileImage),\n    _marked22 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadProfileImage),\n    _marked23 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga),\n    _marked24 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(helloSaga),\n    _marked25 =\n/*#__PURE__*/\n_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchHello);\n\n\n\n // const HELLO_SAGA = 'HELLO_SAGA';\n\nfunction logInAPI(logInData) {\n  // 서버에 요청 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', logInData, {\n    withCredentials: true //  쿠키 교환 with backend \n    // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해준다\n    // SSR 일 때는 브라우저가 빠져 있으니 직접 쿠키를 넣어준다.\n\n  });\n}\n\nfunction logIn(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          // yield fork(logger);    // 로그 기록하는 기능 예제\n          // yield call(loginAPI);       // call 동기 호출\n          //yield delay( 2000);\n          console.log(\"before logInAPI() in Saga\");\n          _context.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(logInAPI, action.data);\n\n        case 4:\n          result = _context.sent;\n          _context.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_SUCCESS\"],\n            data: result.data\n          });\n\n        case 7:\n          _context.next = 14;\n          break;\n\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(_context.t0);\n          _context.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_FAILURE\"],\n            reason: _context.t0.response && _context.t0.response.data\n          });\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, null, [[0, 9]]);\n}\n\nfunction watchLogIn() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_REQUEST\"], logIn);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\nfunction signUpAPI(signUpData) {\n  // 서버에 요청 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/', signUpData);\n}\n\nfunction signUp(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(signUpAPI, action.data);\n\n        case 3:\n          result = _context3.sent;\n          //throw new Error('에러 발생');\n          console.log(\"result : \", result);\n          _context3.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_SUCCESS\"],\n            data: result.data\n          });\n\n        case 7:\n          _context3.next = 14;\n          break;\n\n        case 9:\n          _context3.prev = 9;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.error(_context3.t0);\n          _context3.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_FAILURE\"]\n          });\n\n        case 14:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, null, [[0, 9]]);\n}\n\nfunction watchSignUp() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_REQUEST\"], signUp);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n\nfunction logOutAPI() {\n  // 서버에 요청 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout', {}, {\n    withCredentials: true\n  });\n}\n\nfunction logOut(action) {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.prev = 0;\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(logOutAPI);\n\n        case 3:\n          _context5.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_SUCCESS\"]\n          });\n\n        case 5:\n          _context5.next = 12;\n          break;\n\n        case 7:\n          _context5.prev = 7;\n          _context5.t0 = _context5[\"catch\"](0);\n          console.error(_context5.t0);\n          _context5.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_FAILURE\"]\n          });\n\n        case 12:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, _marked5, null, [[0, 7]]);\n}\n\nfunction watchLogOut() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context6) {\n    while (1) {\n      switch (_context6.prev = _context6.next) {\n        case 0:\n          _context6.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_REQUEST\"], logOut);\n\n        case 2:\n        case \"end\":\n          return _context6.stop();\n      }\n    }\n  }, _marked6);\n}\n\nfunction loadUserAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(userId ? \"/user/\".concat(userId) : '/user/', {\n    withCredentials: true\n  });\n}\n\nfunction loadUser(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context7) {\n    while (1) {\n      switch (_context7.prev = _context7.next) {\n        case 0:\n          _context7.prev = 0;\n          _context7.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadUserAPI, action.data);\n\n        case 3:\n          result = _context7.sent;\n          _context7.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_SUCCESS\"],\n            data: result.data,\n            me: !action.data\n          });\n\n        case 6:\n          _context7.next = 13;\n          break;\n\n        case 8:\n          _context7.prev = 8;\n          _context7.t0 = _context7[\"catch\"](0);\n          console.error(_context7.t0);\n          _context7.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_FAILURE\"],\n            error: _context7.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context7.stop();\n      }\n    }\n  }, _marked7, null, [[0, 8]]);\n}\n\nfunction watchLoadUser() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context8) {\n    while (1) {\n      switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_REQUEST\"], loadUser);\n\n        case 2:\n        case \"end\":\n          return _context8.stop();\n      }\n    }\n  }, _marked8);\n}\n\nfunction followAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"/user/\".concat(userId, \"/follow\"), {}, {\n    withCredentials: true\n  });\n}\n\nfunction follow(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context9) {\n    while (1) {\n      switch (_context9.prev = _context9.next) {\n        case 0:\n          _context9.prev = 0;\n          _context9.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(followAPI, action.data);\n\n        case 3:\n          result = _context9.sent;\n          _context9.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_USER_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context9.next = 13;\n          break;\n\n        case 8:\n          _context9.prev = 8;\n          _context9.t0 = _context9[\"catch\"](0);\n          console.error(_context9.t0);\n          _context9.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_USER_FAILURE\"],\n            error: _context9.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context9.stop();\n      }\n    }\n  }, _marked9, null, [[0, 8]]);\n}\n\nfunction watchFollow() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context10) {\n    while (1) {\n      switch (_context10.prev = _context10.next) {\n        case 0:\n          _context10.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_USER_REQUEST\"], follow);\n\n        case 2:\n        case \"end\":\n          return _context10.stop();\n      }\n    }\n  }, _marked10);\n}\n\nfunction unfollowAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"/user/\".concat(userId, \"/follow\"), {\n    withCredentials: true\n  });\n}\n\nfunction unfollow(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context11) {\n    while (1) {\n      switch (_context11.prev = _context11.next) {\n        case 0:\n          _context11.prev = 0;\n          _context11.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(unfollowAPI, action.data);\n\n        case 3:\n          result = _context11.sent;\n          _context11.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_USER_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context11.next = 13;\n          break;\n\n        case 8:\n          _context11.prev = 8;\n          _context11.t0 = _context11[\"catch\"](0);\n          console.error(_context11.t0);\n          _context11.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_USER_FAILURE\"],\n            error: _context11.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context11.stop();\n      }\n    }\n  }, _marked11, null, [[0, 8]]);\n}\n\nfunction watchUnfollow() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context12) {\n    while (1) {\n      switch (_context12.prev = _context12.next) {\n        case 0:\n          _context12.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_USER_REQUEST\"], unfollow);\n\n        case 2:\n        case \"end\":\n          return _context12.stop();\n      }\n    }\n  }, _marked12);\n}\n\nfunction loadFollowersAPI(id) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/user/\".concat(id || 0, \"/followers?offset=\").concat(offset, \"&limit=\").concat(limit), {\n    withCredentials: true\n  });\n}\n\nfunction loadFollowers(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context13) {\n    while (1) {\n      switch (_context13.prev = _context13.next) {\n        case 0:\n          _context13.prev = 0;\n          _context13.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadFollowersAPI, action.data, action.offset);\n\n        case 3:\n          result = _context13.sent;\n          _context13.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWERS_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context13.next = 13;\n          break;\n\n        case 8:\n          _context13.prev = 8;\n          _context13.t0 = _context13[\"catch\"](0);\n          console.error(_context13.t0);\n          _context13.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWERS_FAILURE\"],\n            error: _context13.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context13.stop();\n      }\n    }\n  }, _marked13, null, [[0, 8]]);\n}\n\nfunction watchLoadFollowers() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context14) {\n    while (1) {\n      switch (_context14.prev = _context14.next) {\n        case 0:\n          _context14.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWERS_REQUEST\"], loadFollowers);\n\n        case 2:\n        case \"end\":\n          return _context14.stop();\n      }\n    }\n  }, _marked14);\n}\n\nfunction loadFollowingsAPI(userId) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/user/\".concat(userId || 0, \"/followings?offset=\").concat(offset, \"&limit=\").concat(limit), {\n    withCredentials: true\n  });\n}\n\nfunction loadFollowings(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context15) {\n    while (1) {\n      switch (_context15.prev = _context15.next) {\n        case 0:\n          _context15.prev = 0;\n          _context15.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(loadFollowingsAPI, action.data, action.offset);\n\n        case 3:\n          result = _context15.sent;\n          _context15.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWINGS_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context15.next = 13;\n          break;\n\n        case 8:\n          _context15.prev = 8;\n          _context15.t0 = _context15[\"catch\"](0);\n          console.error(_context15.t0);\n          _context15.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWINGS_FAILURE\"],\n            error: _context15.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context15.stop();\n      }\n    }\n  }, _marked15, null, [[0, 8]]);\n}\n\nfunction watchLoadFollowings() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowings$(_context16) {\n    while (1) {\n      switch (_context16.prev = _context16.next) {\n        case 0:\n          _context16.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_FOLLOWINGS_REQUEST\"], loadFollowings);\n\n        case 2:\n        case \"end\":\n          return _context16.stop();\n      }\n    }\n  }, _marked16);\n}\n\nfunction removeFollowerAPI(userId) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"/user/\".concat(userId || 0, \"/follower\"), {\n    withCredentials: true\n  });\n}\n\nfunction removeFollower(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context17) {\n    while (1) {\n      switch (_context17.prev = _context17.next) {\n        case 0:\n          _context17.prev = 0;\n          _context17.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(removeFollowerAPI, action.data);\n\n        case 3:\n          result = _context17.sent;\n          _context17.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_FOLLOWER_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context17.next = 13;\n          break;\n\n        case 8:\n          _context17.prev = 8;\n          _context17.t0 = _context17[\"catch\"](0);\n          console.error(_context17.t0);\n          _context17.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_FOLLOWER_FAILURE\"],\n            error: _context17.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context17.stop();\n      }\n    }\n  }, _marked17, null, [[0, 8]]);\n}\n\nfunction watchRemoveFollower() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context18) {\n    while (1) {\n      switch (_context18.prev = _context18.next) {\n        case 0:\n          _context18.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_FOLLOWER_REQUEST\"], removeFollower);\n\n        case 2:\n        case \"end\":\n          return _context18.stop();\n      }\n    }\n  }, _marked18);\n}\n\nfunction editNicknameAPI(nickname) {\n  // 부분만 수정시 patch()\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(\"/user/nickname\", {\n    nickname: nickname\n  }, {\n    withCredentials: true\n  });\n}\n\nfunction editNickname(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editNickname$(_context19) {\n    while (1) {\n      switch (_context19.prev = _context19.next) {\n        case 0:\n          _context19.prev = 0;\n          _context19.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(editNicknameAPI, action.data);\n\n        case 3:\n          result = _context19.sent;\n          _context19.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            // put 은 dispatch 와 동일\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"EDIT_NICKNAME_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context19.next = 13;\n          break;\n\n        case 8:\n          _context19.prev = 8;\n          _context19.t0 = _context19[\"catch\"](0);\n          console.error(_context19.t0);\n          _context19.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"EDIT_NICKNAME_FAILURE\"],\n            error: _context19.t0\n          });\n\n        case 13:\n        case \"end\":\n          return _context19.stop();\n      }\n    }\n  }, _marked19, null, [[0, 8]]);\n}\n\nfunction watchEditNickname() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchEditNickname$(_context20) {\n    while (1) {\n      switch (_context20.prev = _context20.next) {\n        case 0:\n          _context20.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeEvery\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"EDIT_NICKNAME_REQUEST\"], editNickname);\n\n        case 2:\n        case \"end\":\n          return _context20.stop();\n      }\n    }\n  }, _marked20);\n}\n\nfunction uploadProfileImageAPI(formData) {\n  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(\"/user/profileImg\", formData);\n}\n\nfunction uploadProfileImage(action) {\n  var result;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadProfileImage$(_context21) {\n    while (1) {\n      switch (_context21.prev = _context21.next) {\n        case 0:\n          _context21.prev = 0;\n          _context21.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"call\"])(uploadProfileImageAPI, action.data);\n\n        case 3:\n          result = _context21.sent;\n          _context21.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_PROFILE_IMAGES_SUCCESS\"],\n            data: result.data\n          });\n\n        case 6:\n          _context21.next = 12;\n          break;\n\n        case 8:\n          _context21.prev = 8;\n          _context21.t0 = _context21[\"catch\"](0);\n          _context21.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_PROFILE_IMAGES_FAILURE\"],\n            error: _context21.t0\n          });\n\n        case 12:\n        case \"end\":\n          return _context21.stop();\n      }\n    }\n  }, _marked21, null, [[0, 8]]);\n}\n\nfunction watchUploadProfileImage() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadProfileImage$(_context22) {\n    while (1) {\n      switch (_context22.prev = _context22.next) {\n        case 0:\n          _context22.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_PROFILE_IMAGES_REQUEST\"], uploadProfileImage);\n\n        case 2:\n        case \"end\":\n          return _context22.stop();\n      }\n    }\n  }, _marked22);\n}\n\nfunction userSaga() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context23) {\n    while (1) {\n      switch (_context23.prev = _context23.next) {\n        case 0:\n          _context23.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogIn), // 이벤트 리스너로 이해, 순서 의미 없음\n          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchEditNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchUploadProfileImage) // call()   // 동기 호출\n          // fork()   // 비동기 호출\n          // watchHello(),\n          // //helloSaga(),\n          // watchLogin(),\n          // watchSignup(),\n          ]);\n\n        case 2:\n        case \"end\":\n          return _context23.stop();\n      }\n    }\n  }, _marked23);\n} // function* watchHello() {\n//     yield takeEvery(HELLO_SAGA, function*() {\n//         console.log(1);\n//         console.log(2);\n//         console.log(3);\n//         console.log(4);\n//     })\n// }\n// function* watchHello() {\n//     console.log(\"Before Saga\");\n//     while(true) {\n//         yield take(HELLO_SAGA);\n//     console.log(\"Hello Saga\");\n//     }\n// }\n\nfunction helloSaga() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function helloSaga$(_context24) {\n    while (1) {\n      switch (_context24.prev = _context24.next) {\n        case 0:\n          //yield take(HELLO_SAGA);\n          //yield takeLatest(HELLO_SAGA, hello);\n          console.log(\"Before Saga\");\n\n        case 1:\n          if (false) {}\n\n          _context24.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])(HELLO_SAGA);\n\n        case 4:\n          console.log(\"Hello Saga\");\n          _context24.next = 1;\n          break;\n\n        case 7:\n        case \"end\":\n          return _context24.stop();\n      }\n    }\n  }, _marked24);\n}\n\nfunction watchHello() {\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchHello$(_context26) {\n    while (1) {\n      switch (_context26.prev = _context26.next) {\n        case 0:\n          _context26.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(HELLO_SAGA,\n          /*#__PURE__*/\n          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context25) {\n              while (1) {\n                switch (_context25.prev = _context25.next) {\n                  case 0:\n                    _context25.next = 2;\n                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n\n                  case 2:\n                    _context25.next = 4;\n                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n                      type: 'BYE_SAGA'\n                    });\n\n                  case 4:\n                  case \"end\":\n                    return _context25.stop();\n                }\n              }\n            }, _callee);\n          }));\n\n        case 2:\n        case \"end\":\n          return _context26.stop();\n      }\n    }\n  }, _marked25);\n}\n\n//# sourceURL=webpack:///./sagas/user.js?");

/***/ })

})