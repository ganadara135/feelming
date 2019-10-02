module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./pages/signup.js
var signup = __webpack_require__("vL9u");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./containers/LoginForm.js
var __jsx = external_react_default.a.createElement;







const LoginForm = () => {
  const [id, onChangeId] = Object(signup["useInput"])('');
  const [password, onChangePassword] = Object(signup["useInput"])('');
  const {
    isLoggingIn
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onSubmitForm = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: user["r" /* LOG_IN_REQUEST */],
      data: {
        userId: id,
        password
      }
    });
  }, [id, password]);
  return __jsx(external_antd_["Form"], {
    onSubmit: onSubmitForm
  }, __jsx("div", null, __jsx("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), __jsx("br", null), __jsx("input", {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx("input", {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true
  })), __jsx("div", null, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isLoggingIn
  }, "\uB85C\uADF8\uC778"), __jsx(link_default.a, {
    href: "/signup"
  }, __jsx("a", null, __jsx(external_antd_["Button"], null, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ var containers_LoginForm = (LoginForm);
// CONCATENATED MODULE: ./containers/UserProfile.js
var UserProfile_jsx = external_react_default.a.createElement;






const UserProfile = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const onLogout = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: user["u" /* LOG_OUT_REQUEST */]
    });
  }, []);
  console.log(" UserProfile me : ", me); //  next.js  prefetch   기능 추가함. 사용자가 자주 사용하는 링크 파일을 prefetch 적용해 놓으면, 한번 불러올때 한꺼번에 관련 링크를 가져옴
  //  따라서 사용자 경험이 좋으나, 실질적인 테스트는 배포하고 확인해 볼 수 있음

  return UserProfile_jsx(external_antd_["Card"], {
    actions: [UserProfile_jsx(link_default.a, {
      href: "/profile",
      prefetch: true,
      key: "twit"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", {
      key: "twit"
    }, "\uD3EC\uC2A4\uD2B8", UserProfile_jsx("br", null), " ", me.Posts && me.Posts.length))), UserProfile_jsx(link_default.a, {
      href: "profile",
      prefetch: true,
      key: "following"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", {
      key: "followings"
    }, "\uD314\uB85C\uC789", UserProfile_jsx("br", null), " ", me.Followings && me.Followings.length))), UserProfile_jsx(link_default.a, {
      href: "/profile",
      prefetch: true,
      key: "follower"
    }, UserProfile_jsx("a", null, UserProfile_jsx("div", {
      key: "followers"
    }, "\uD314\uB85C\uC6CC", UserProfile_jsx("br", null), " ", me.Followings && me.Followers.length)))]
  }, UserProfile_jsx(external_antd_["Card"].Meta, {
    avatar: UserProfile_jsx(external_antd_["Avatar"], null, me.nickname && me.nickname[0]),
    title: me.nickname
  }), UserProfile_jsx(external_antd_["Button"], {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ var containers_UserProfile = (UserProfile);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/AppLayout.js
var AppLayout_jsx = external_react_default.a.createElement;










const AppLayout = ({
  children
}) => {
  const {
    isLoggedIn,
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])(); // useEffect( () => {
  //     if (!me) {
  //         dispatch({
  //             type: LOAD_USER_REQUEST,
  //         });
  //     }
  // }, [me]);

  const onSearch = value => {
    console.log('search Value : ', value); // 내부 주소                                      // 외부  주소

    router_default.a.push({
      pathname: '/hashtag',
      query: {
        tag: value
      }
    }, `/hashtag/${value}`);
  };

  return AppLayout_jsx("div", null, AppLayout_jsx(external_antd_["Menu"], {
    mode: "horizontal"
  }, AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "home"
  }, AppLayout_jsx(link_default.a, {
    href: "/"
  }, AppLayout_jsx("a", null, "Feelming"))), AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "profile"
  }, AppLayout_jsx(link_default.a, {
    href: "/profile",
    prefetch: true
  }, AppLayout_jsx("a", null, "\uD504\uB85C\uD544"))), AppLayout_jsx(external_antd_["Menu"].Item, {
    key: "mail"
  }, AppLayout_jsx(external_antd_["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    onSearch: onSearch
  }))), AppLayout_jsx(external_antd_["Row"], {
    gutter: 8
  }, AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, me // isLoggedIn 
  ? AppLayout_jsx(containers_UserProfile, null) : AppLayout_jsx(containers_LoginForm, null)), AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 12
  }, children), AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, AppLayout_jsx("a", {
    target: "_blank"
  }, "Made by kcod"))));
};

AppLayout.protTypes = {
  children: external_prop_types_default.a.node
};
/* harmony default export */ var components_AppLayout = (AppLayout);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js



const rootReducer = Object(external_redux_["combineReducers"])({
  user: user["G" /* default */],
  post: post["L" /* default */]
});
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/user.js


 // const HELLO_SAGA = 'HELLO_SAGA';

function logInAPI(logInData) {
  // 서버에 요청 보내는 부분
  return external_axios_default.a.post('/user/login', logInData, {
    withCredentials: true //  쿠키 교환 with backend 
    // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해준다
    // SSR 일 때는 브라우저가 빠져 있으니 직접 쿠키를 넣어준다.

  });
}

function* logIn(action) {
  try {
    // yield fork(logger);    // 로그 기록하는 기능 예제
    // yield call(loginAPI);       // call 동기 호출
    //yield delay( 2000);
    console.log("before logInAPI() in Saga");
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["s" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["q" /* LOG_IN_FAILURE */],
      error: e
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeEvery"])(user["r" /* LOG_IN_REQUEST */], logIn); // while(true){
  //     yield take(LOG_IN_REQUEST, login)    // take 안에 gernerater.next() 기능이 있음
  //     yield put( {            // put 은 redux 에 dispatch 와 동일
  //         type: LOG_IN_SUCCESS,
  //     });
  // }
}

function signUpAPI(signUpData) {
  // 서버에 요청 보내는 부분
  return external_axios_default.a.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    // yield fork(logger);    // 로그 기록하는 기능 예제
    //yield call(signUpAPI);       // call 동기 호출
    //yield delay(2000);
    const result = yield Object(effects_["call"])(signUpAPI, action.data); //throw new Error('에러 발생');

    console.log("result : ", result);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["C" /* SIGN_UP_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["A" /* SIGN_UP_FAILURE */]
    });
  }
}

function* watchSignUp() {
  yield Object(effects_["takeEvery"])(user["B" /* SIGN_UP_REQUEST */], signUp);
}

function logOutAPI() {
  // 서버에 요청 보내는 부분
  return external_axios_default.a.post('/user/logout', {}, {
    withCredentials: true
  });
}

function* logOut(action) {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["v" /* LOG_OUT_SUCCESS */]
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["t" /* LOG_OUT_FAILURE */]
    });
  }
}

function* watchLogOut() {
  yield Object(effects_["takeEvery"])(user["u" /* LOG_OUT_REQUEST */], logOut);
}

function loadUserAPI(userId) {
  return external_axios_default.a.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true
  });
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["p" /* LOAD_USER_SUCCESS */],
      data: result.data,
      me: !action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_USER_FAILURE */],
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeEvery"])(user["o" /* LOAD_USER_REQUEST */], loadUser);
}

function followAPI(userId) {
  return external_axios_default.a.post(`/user/${userId}/follow`, {}, {
    withCredentials: true
  });
}

function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["g" /* FOLLOW_USER_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_USER_FAILURE */],
      error: e
    });
  }
}

function* watchFollow() {
  yield Object(effects_["takeEvery"])(user["f" /* FOLLOW_USER_REQUEST */], follow);
}

function unfollowAPI(userId) {
  return external_axios_default.a.delete(`/user/${userId}/follow`, {
    withCredentials: true
  });
}

function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["F" /* UNFOLLOW_USER_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["D" /* UNFOLLOW_USER_FAILURE */],
      error: e
    });
  }
}

function* watchUnfollow() {
  yield Object(effects_["takeEvery"])(user["E" /* UNFOLLOW_USER_REQUEST */], unfollow);
}

function loadFollowersAPI(id, offset = 0, limit = 3) {
  return external_axios_default.a.get(`/user/${id || 0}/followers?offset=${offset}&limit=${limit}`, {
    withCredentials: true
  });
}

function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data, action.offset);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadFollowers() {
  yield Object(effects_["takeEvery"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function loadFollowingsAPI(userId, offset = 0, limit = 3) {
  return external_axios_default.a.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
    withCredentials: true
  });
}

function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data, action.offset);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadFollowings() {
  yield Object(effects_["takeEvery"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function removeFollowerAPI(userId) {
  return external_axios_default.a.delete(`/user/${userId || 0}/follower`, {
    withCredentials: true
  });
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["y" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["w" /* REMOVE_FOLLOWER_FAILURE */],
      error: e
    });
  }
}

function* watchRemoveFollower() {
  yield Object(effects_["takeEvery"])(user["x" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function editNicknameAPI(nickname) {
  // 부분만 수정시 patch()
  return external_axios_default.a.patch(`/user/nickname`, {
    nickname
  }, {
    withCredentials: true
  });
}

function* editNickname(action) {
  try {
    const result = yield Object(effects_["call"])(editNicknameAPI, action.data);
    yield Object(effects_["put"])({
      // put 은 dispatch 와 동일
      type: user["d" /* EDIT_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: user["b" /* EDIT_NICKNAME_FAILURE */],
      error: e
    });
  }
}

function* watchEditNickname() {
  yield Object(effects_["takeEvery"])(user["c" /* EDIT_NICKNAME_REQUEST */], editNickname);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), // 이벤트 리스너로 이해, 순서 의미 없음
  Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchEditNickname) // call()   // 동기 호출
  // fork()   // 비동기 호출
  // watchHello(),
  // //helloSaga(),
  // watchLogin(),
  // watchSignup(),
  ]);
} // function* watchHello() {
//     yield takeEvery(HELLO_SAGA, function*() {
//         console.log(1);
//         console.log(2);
//         console.log(3);
//         console.log(4);
//     })
// }
// function* watchHello() {
//     console.log("Before Saga");
//     while(true) {
//         yield take(HELLO_SAGA);
//     console.log("Hello Saga");
//     }
// }

function* helloSaga() {
  //yield take(HELLO_SAGA);
  //yield takeLatest(HELLO_SAGA, hello);
  console.log("Before Saga");

  while (true) {
    yield Object(effects_["take"])(HELLO_SAGA);
    console.log("Hello Saga");
  }
}

function* watchHello() {
  yield Object(effects_["takeLatest"])(HELLO_SAGA, function* () {
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: 'BYE_SAGA'
    });
  });
}
// CONCATENATED MODULE: ./sagas/post.js





function addPostAPI(postData) {
  return external_axios_default.a.post('/post', postData, {
    withCredentials: true
  });
}

function* addPost(action) {
  try {
    //yield delay(2000);
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      // post reducer 의 데이터 수정
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      // user reducer 의 데이터 수정
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: e
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function loadMainPostsAPI(lastId = 0, limit = 10) {
  //console.log('in loadMainPosts Saga ');
  return external_axios_default.a.get(`/posts?lastId=${lastId}&limit=${limit}`);
}

function* loadMainPosts(action) {
  //console.log('in loadMainPosts Saga ');
  try {
    const result = yield Object(effects_["call"])(loadMainPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_MAIN_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_MAIN_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadMainPosts() {
  //yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
  yield Object(effects_["throttle"])(2000, post["q" /* LOAD_MAIN_POSTS_REQUEST */], loadMainPosts);
}

function loadHashtagPostsAPI(tag, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(tag)}?lastId=${lastId}&limit=10`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadHashtagPosts() {
  //yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
  yield Object(effects_["throttle"])(2000, post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function loadUserPostsAPI(id) {
  return external_axios_default.a.get(`/user/${id}/posts`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["x" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["v" /* LOAD_USER_POSTS_FAILURE */],
      error: e
    });
  }
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(post["w" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function addCommentAPI(data) {
  console.log("addCommentAPI() in sagas : ", data);
  return external_axios_default.a.post(`/post/${data.postId}/comment`, {
    content: data.content
  }, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    console.log("addComment() in sagas : ", action);
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    console.log("addComment() in sagas result : ", result);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: {
        postId: action.data.postId,
        comment: result.data
      }
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: e
    });
  }
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function loadCommentsAPI(postId) {
  console.log('loadCommentsAPI()  postId : ', postId);
  return external_axios_default.a.get(`/post/${postId}/comments`);
}

function* loadComments(action) {
  console.log('loadComment action : ', action);

  try {
    const result = yield Object(effects_["call"])(loadCommentsAPI, action.data);
    console.log('loadComments() result.data : ', result.data);
    console.log('loadComments() action.data : ', action.data);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_COMMENTS_SUCCESS */],
      data: {
        postId: action.data,
        comments: result.data
      }
    });
  } catch (e) {
    //console.log('loadComments FAILURE : ', e);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_COMMENTS_FAILURE */],
      error: e
    });
  }
}

function* watchloadComments() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_COMMENTS_REQUEST */], loadComments);
}

function uploadImagesAPI(formData) {
  return external_axios_default.a.post(`/post/images`, formData);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["K" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: post["I" /* UPLOAD_IMAGES_FAILURE */],
      error: e
    });
  }
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["J" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function likePostAPI(postId) {
  return external_axios_default.a.post(`/post/${postId}/like`, {}, {
    withCredentials: true
  });
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: e
    });
  }
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function unlikePostAPI(postId) {
  return external_axios_default.a.delete(`/post/${postId}/like`, {
    withCredentials: true
  });
}

function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UNLIKE_POST_SUCCESS */],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["F" /* UNLIKE_POST_FAILURE */],
      error: e
    });
  }
}

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["G" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function retweetAPI(postId) {
  return external_axios_default.a.post(`/post/${postId}/retweet`, {}, {
    withCredentials: true
  });
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["C" /* RETWEET_FAILURE */],
      error: e
    });
    alert(e.response && e.response.data); // 자신의 글은 리트윗할 수 없습니다.
  }
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["D" /* RETWEET_REQUEST */], retweet);
}

function removePostAPI(postId) {
  return external_axios_default.a.delete(`/post/${postId}`, {
    withCredentials: true
  });
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["B" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["z" /* REMOVE_POST_OF_ME */],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(effects_["put"])({
      type: post["z" /* REMOVE_POST_FAILURE */],
      error: e
    });
  }
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["A" /* REMOVE_POST_REQUEST */], removePost);
}

function loadSinglePostAPI(postId) {
  console.log(" loadSinglePostAPI postId : ", postId);
  return external_axios_default.a.get(`/post/${postId}`);
}

function* loadSinglePost(action) {
  try {
    const result = yield Object(effects_["call"])(loadSinglePostAPI, action.data);
    console.log("saga result : ", result.data);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (e) {
    // console.error(e);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_POST_FAILURE */],
      error: e
    });
  }
}

function* watchLoadSinglePost() {
  yield Object(effects_["takeLatest"])(post["t" /* LOAD_POST_REQUEST */], loadSinglePost);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadMainPosts), Object(effects_["fork"])(watchAddPost), // 이벤트 리스너로 이해, 순서 의미 없음
  Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchloadComments), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLoadSinglePost)]);
}
// CONCATENATED MODULE: ./sagas/index.js
// 비동치 처리는 Saga 에서 전담해서 처리




external_axios_default.a.defaults.baseURL = 'http://localhost:3065/api';
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga)]);
}
// EXTERNAL MODULE: external "remote-redux-devtools"
var external_remote_redux_devtools_ = __webpack_require__("d51N");

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;















 // class Feelming extends App {
//     static getInitialProps(content) {
//     }
//     render() {
//     }
// }

const Feelming = ({
  Component,
  store,
  pageProps
}) => {
  return _app_jsx(app["Container"], null, _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(external_react_helmet_default.a, {
    title: "Feelming",
    htmlAttributes: {
      lang: 'ko'
    },
    meta: [{
      charset: 'UTF-8'
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'
    }, {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    }, {
      name: 'description',
      content: 'Feelming SNS'
    }, {
      name: 'og:title',
      content: 'Feelming'
    }, {
      name: 'og:description',
      content: 'Feelming SNS'
    }, {
      property: 'og:type',
      content: 'website'
    }],
    link: [{
      rel: 'shortcut icon',
      href: '/favicon.png'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
    }]
  }), _app_jsx(components_AppLayout, null, _app_jsx(Component, pageProps))));
};

Feelming.getInitialProps = async context => {
  //console.log(context);
  const {
    ctx,
    Component
  } = context;
  let pageProps = {};
  const state = ctx.store.getState(); // 로그인 정보 호출하는 부분

  const cookie = ctx.isServer ? ctx.req.headers.cookies : '';

  if (ctx.isServer && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }

  if (!state.user.me) {
    ctx.store.dispatch({
      type: user["o" /* LOAD_USER_REQUEST */]
    });
  } // 메인 포스트 가져오는 부분


  if (Component.getInitialProps) {
    pageProps = (await context.Component.getInitialProps(ctx)) || {};
  }

  return {
    pageProps
  };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = external_redux_saga_default()(); //const middlewares = [sagaMiddleware];

  const middlewares = [sagaMiddleware, store => next => action => {
    // saga log 파일 보기
    //    console.log(action);
    next(action);
  }];
  const enhancer = process.env.NODE_DEV === 'production' ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares), // typeof window !== 'undefined'
  !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
  const store = Object(external_redux_["createStore"])(reducers, initialState, enhancer); //sagaMiddleware.run(rootSaga);

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(configureStore)(external_next_redux_saga_default()(Feelming))); // _document.js      html, head, body
// _app.js           root
// pages             실제 컴포넌트
//  _error.js    

/*
// curring 기법,  인자를 넣어주고 결과로 함수를 받음
const middlewares = (store) => (next) => (action) => {
   console.log(action);
   next(action);
}
const hoc = (mapStateToProps) => (Component) => () => {
   console.log("I am hoc");
   return (
       <Component props={mapStateToProps()} />
   )
}
 
// 하이 오더 컴포넌트
hoc(Component)
connect(mapStateToProps)(Component);
*/

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("p8BD");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* unused harmony export LOAD_FOLLOW_REQUEST */
/* unused harmony export LOAD_FOLLOW_SUCCESS */
/* unused harmony export LOAD_FOLLOW_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_OF_ME; });
/* unused harmony export signupAction */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
 // const dummyUser = {
//     nickname: '코드',
//     Post: [],
//     Followings: [],
//     Followers: [],
//     id: 1,  
// };

const initialState = {
  // isLoggedIn: false,
  isLoggingOut: false,
  // 로그아웃 시도중
  isLoggingIn: false,
  // 로그인 시도중
  logInErrorReason: '',
  // 로그인 실퍠 상유
  signedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: '',
  // 회원가입 실패 사유
  me: null,
  followingList: [],
  // 팔로잉 리스트
  followerList: [],
  // 팔로워 리스트
  userInfo: null,
  // 남의 정보
  isEditingNickname: false,
  editNicknameErrorReason: '',
  hasMoreFollower: false,
  hasMoreFollowing: false
};
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';
const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // post reducier 를 호출하는 부분 (다른 리듀서 호출)

const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const signupAction = data => ({
  type: SIGN_UP_REQUEST,
  data: data
}); // export const signupAction = (data) => {
//     return {
//         type: SIGN_UP_REQUEST,
//         data: data,
//     };
// };

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case ADD_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break; // return {
          //     ...state,
          //     me: {
          //         ...state.me,
          //         Posts: [{ id: action.data }, ...state.me.Posts],
          //     },
          // };
        }
        ;

      case LOG_IN_REQUEST:
        {
          draft.isLoggingIn = true;
          draft.logInErrorReason = '';
          break; // return {
          //     ...state,
          //     isLoggingIn: true,
          // }
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggingIn = false;
          draft.me = action.data;
          draft.isLoading = false;
          draft.logInErrorReason = '';
          break; // return {
          //     ...state,
          //     isLoggingIn: false,
          //     //isLoggedIn: true,
          //     //me: dummyUser,
          //     me: action.data,
          //     isLoading: false,
          // }
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggingIn = false;
          draft.logInErrorReason = action.error;
          draft.me = null;
          break; // return {
          //     ...state,
          //     isLoggingIn: false,
          //     //isLoggedIn: false,
          //     logInErrorReason: action.error,
          //     me: null,
          // }
        }

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          break;
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggingOut = true;
          draft.me = null;
          break;
        }

      case SIGN_UP_REQUEST:
        {
          draft.isSigningUp = false;
          draft.isSignedUp = true;
          draft.signUpErrorReason = '';
          break;
        }

      case SIGN_UP_SUCCESS:
        {
          draft.isSigningUp = false;
          draft.isSignedUp = true;
          break; // return {
          //     ...state,
          //     isSigningUp: false,
          //     isSignedUp: true,
          //     me : {
          //         nickname: action.nickname,
          //         // Post: [],
          //         // Followings: [],
          //         // Followers: [],
          //         id: action.id,
          //         userId: action.userId, 
          //     }
          // };
        }

      case SIGN_UP_FAILURE:
        {
          draft.isSigningUp = false;
          draft.signUpErrorReason = action.error;
          break; // return {
          //     ...state,
          //     isSigningUp: false,
          //     signUpErrorReason: action.error,
          // };
        }

      case LOAD_USER_REQUEST:
        {
          break; // return {
          //     ...state,
          // }
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.me) {
            draft.me = action.data;
            break;
          }

          draft.userInfo = action.data;
          break; // if(action.me){
          //     return {
          //         ...state,
          //         me: action.data,
          //     };    
          // }
          // return {
          //     ...state,
          //     userInfo: action.data,
          // }
        }

      case LOAD_USER_FAILURE:
        {
          break; // return {
          //     ...state,
          // };
        }

      case FOLLOW_USER_REQUEST:
        {
          break; // return {
          //     ...state,
          // }
        }

      case FOLLOW_USER_SUCCESS:
        {
          draft.me.Followings.unshift({
            id: action.data
          });
          break; // return {
          //   ...state,
          //   me: {
          //     ...state.me,
          //     Followings: [{ id: action.data }, ...state.me.Followings],
          //   },
          // };
        }

      case FOLLOW_USER_FAILURE:
        {
          break;
        }

      case UNFOLLOW_USER_REQUEST:
        {
          break;
        }

      case UNFOLLOW_USER_SUCCESS:
        {
          const index = draft.me.Followings.findIndex(v => v.id === action.data);
          draft.me.Followings.splice(index, 1);
          const index2 = draft.followingList.findIndex(v => v.id === action.data);
          draft.followingList.splice(index2, 1);
          break; // return {
          //   ...state,
          //   me: {
          //     ...state.me,
          //     Followings: state.me.Followings.filter(v => v.id !== action.data),
          //   },
          //   followingList: state.followingList.filter(v => v.id !== action.data),
          // };
        }

      case UNFOLLOW_USER_FAILURE:
        {
          break;
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          draft.followerList = !action.offset ? [] : draft.followerList;
          draft.hasMoreFollower = action.offset ? draft.hasMoreFollower : true;
          break; // return {
          //     ...state,
          //     // 처음 데이터를 가져올 때는 더보기 버튼을 보여준다
          //     hasMoreFollower: action.offset ? state.hasMoreFollower : true,
          // };
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.followerList.push(d);
          });
          draft.hasMoreFollower = action.data.length === 3;
          break; // return {
          //   ...state,
          //   followerList: state.followerList.concat(action.data),
          //   hasMoreFollower: action.data.length === 3, // true or false
          // };
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          break;
        }

      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.followingList = !action.offset ? [] : draft.followingList;
          draft.hasMoreFollowing = action.offset ? draft.hasMoreFollowing : true;
          break; // return {
          //     ...state,
          //     hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,
          // }
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.followingList.push(d);
          });
          draft.hasMoreFollowing = action.data.length === 3;
          break; // return {
          //   ...state,
          //   followingList: state.followingList.concat(action.data),
          //   hasMoreFollowing: action.data.length === 3, // true or false
          // };
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          break;
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          break;
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          const index = draft.me.Followers.findIndex(v => v.id === action.data);
          draft.me.Followers.splice(index, 1);
          const index2 = draft.followerList.findIndex(v => v.id === action.data);
          draft.followerList.splice(index2, 1);
          break; // return {
          //   ...state,
          //   me: {
          //       ...state.me,
          //       Followers: state.me.Followers.filter( v=> v.id !== action.data),
          //   },
          //   followerList: state.followerList.filter(v => v.id !== action.data),
          // };
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          break;
        }

      case EDIT_NICKNAME_REQUEST:
        {
          draft.isEditingNickname = false;
          draft.me.nickname = action.data;
          break; // return {
          //     ...state,
          //     isEditingNickname: true,
          //     editNicknameErrorReason: '',
          // }
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          draft.isEditingNickname = false;
          draft.me.nickname = action.data;
          break; // return {
          //   ...state,
          //   isEditingNickname: false,
          //   me: {
          //       ...state.me,
          //       nickname: action.data,
          //   },
          // };
        }

      case EDIT_NICKNAME_FAILURE:
        {
          draft.isEditingNickname = false;
          draft.editNicknameErrorReason = action.error;
          break; // return {
          //     ...state,
          //     editNicknameErrorReason: action.error,
          // }
        }

      case REMOVE_POST_OF_ME:
        {
          draft.isEditingNickname = false;
          draft.editNicknameErrorReason = action.error;
          break; // return {
          //   ...state,
          //   me: {
          //       ...state.me,
          //       Posts: state.me.Posts.filter( v=> v.id !== action.data),
          //   },
          // };
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["G"] = (reducer);

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d51N":
/***/ (function(module, exports) {

module.exports = require("remote-redux-devtools");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

// export const initialState = {
//     mainPosts: [{
//         // id: 1,
//         // User: {
//         //     id: 1,
//         //     nickname: "코드",
//         // },
//         // content: "첫 번째 게시글",
//         // img: "https://blog.yena.io/assets/post-img/171123-nachoi-300.jpg",
//         // Comments: [],
//     }],                 // 화면에 보일 포스트들
//     imagePaths: [],     // 미리보기 이미지 경로
//     addPostErrorReason:'',  // 포스트 업로드 실패 사유
//     isAddingPost: false,        // 포스트 업로드 중
//     postAdded: false,           // 포스트 업로드 성공,
//     isAddingComment:false,
//     addCommentErrorReason: '',
//     commentAdded: false,
// };
// const dummyPost = {
//     id: 2,
//     User: {
//         id: 1,
//         nickname: '코드',
//     },
//     content: '나는 더미입니다',
//     Comments: [],
// }
// const dummyComment = {
//     id: 1,
//     User: {
//         id: 1,
//         nickname: 2,
//     },
//     createdAt: new Date(),
//     content: '더미 댓글입니다',
// }
const initialState = {
  mainPosts: [],
  // 화면에 보일 포스트들
  imagePaths: [],
  // 미리보기 이미지 경로
  addPostErrorReason: '',
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중
  postAdded: false,
  // 포스트 업로드 성공
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false,
  singlePost: null
};
const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //case LOAD_COMMENTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_MAIN_POSTS_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts: !action.lastId ? [] : state.mainPosts,
          hasMorePost: action.lastId ? state.hasMorePost : true
        });
      }

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_MAIN_POSTS_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts: state.mainPosts.concat(action.data),
          // mainPosts: action.data.forEach(element => {
          //    mainPosts.push(element); 
          // }),
          hasMorePost: action.data.length === 10
        });
      }
    //case LOAD_COMMENTS_FAILURE:

    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_MAIN_POSTS_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case ADD_POST_REQUEST:
      {
        //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingPost: true,
          addPostErrorReason: '',
          postAdded: false
        });
      }

    case ADD_POST_SUCCESS:
      {
        //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingPost: false,
          //mainPosts: [dummyPost, ...state.mainPosts],
          mainPosts: [action.data, ...state.mainPosts],
          postAdded: true,
          imagePaths: []
        });
      }

    case ADD_POST_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingPost: false,
          addPostErrorReason: action.error
        });
      }

    case ADD_COMMENT_REQUEST:
      {
        // console.log(" in Reducuer ADD_COMMENT_REQUEST :  ", action)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingComment: true,
          addCommentErrorReason: '',
          commentAdded: false
        });
      }

    case ADD_COMMENT_SUCCESS:
      {
        // console.log(" in Reducuer ADD_COMMENT_SUCCESS :  ", action)
        // console.log(" chk state : ", state)
        // console.log(" state.mainPosts[0] : ", state.mainPosts[0]);
        // try {   
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); //console.log("postIndex : ", postIndex);

        const post = state.mainPosts[postIndex]; // console.log("post : ", post);
        // console.log("post.Comments : ", post.Comments)
        // console.log("action.data.comment : ", action.data.comment)

        const Comments = [...post.Comments, action.data.comment]; //console.log("Comments : ", Comments);

        const mainPosts = [...state.mainPosts]; //console.log("mainPosts : ", mainPosts);

        mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, post, {
          Comments
        }); //console.log("mainPosts[postIndex] : ", mainPosts[postIndex]);
        // } catch (e) {
        //     console.log("reducer error : ", e);
        // }

        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingComment: false,
          mainPosts,
          //mainPosts : mainPosts,
          commentAdded: true
        });
      }

    case ADD_COMMENT_FAILURE:
      {
        console.log(" in Reducuer ADD_COMMENT_FAILURE :  ", action);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          isAddingComment: false,
          addCommentErrorReason: action.error
        });
      }

    case LOAD_COMMENTS_SUCCESS:
      {
        console.log('LOAD_COMMENTS_SUCCESS action : ', action.data);
        console.log('LOAD_COMMENTS_SUCCESS state : ', state);

        if (action.data.postId !== undefined) {
          const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Comments = action.data.comments;
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, post, {
            Comments
          });
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
            mainPosts //mainPosts : mainPosts,

          });
        } else {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
        }
      }

    case UPLOAD_IMAGES_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case UPLOAD_IMAGES_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          imagePaths: [...state.imagePaths, ...action.data]
        });
      }

    case UPLOAD_IMAGES_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case REMOVE_IMAGE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          imagePaths: state.imagePaths.filter((v, i) => i !== action.index)
        });
      }

    case LIKE_POST_REQUEST:
      {
        //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case LIKE_POST_SUCCESS:
      {
        //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        const post = state.mainPosts[postIndex];
        const Likers = [{
          id: action.data.userId
        }, ...post.Likers];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, post, {
          Likers
        });
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts
        });
      }

    case LIKE_POST_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case UNLIKE_POST_REQUEST:
      {
        //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case UNLIKE_POST_SUCCESS:
      {
        //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        const post = state.mainPosts[postIndex];
        const Likers = post.Likers.filter(v => v.id !== action.data.userId);
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, post, {
          Likers
        });
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts
        });
      }

    case UNLIKE_POST_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case RETWEET_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case RETWEET_SUCCESS:
      {
        console.log('RETWEET_SUCCESS in reducers ', action.data);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts: [action.data, ...state.mainPosts]
        });
      }

    case RETWEET_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case REMOVE_POST_REQUEST:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case REMOVE_POST_SUCCESS:
      {
        //console.log('RETWEET_SUCCESS in reducers ', action.data)
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          mainPosts: state.mainPosts.filter(v => v.id !== action.data)
        });
      }

    case REMOVE_POST_FAILURE:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }

    case LOAD_POST_SUCCESS:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
          singlePost: action.data
        });
      }

    default:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["L"] = (reducer);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LAVF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TextInput = ({
  value
}) => {
  return __jsx("div", null, value);
};

const useInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: nick,
    1: setNick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    isSigningUp,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('cke 999999999999'); //console.log('state : ', state);

    console.log('me, me.id : ', me);

    if (me) {
      alert('로그인 했으니 메인페이지로 이동합니다 ');
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  }, [me && me.id]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[/* SIGN_UP_REQUEST */ "B"],
      data: {
        userId: id,
        password,
        nickname: nick
      }
    });
  }, [id, nick, password, passwordCheck, term]);

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePasswordChk = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = e => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  if (me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    }
  }, __jsx(TextInput, {
    value: "123"
  }), __jsx("div", null, __jsx("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-nick"
  }, "\uB2C9\uB124\uC784"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword
  })), __jsx("div", null, __jsx("label", {
    htmlFor: "user-password-check"
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordChk
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: 'red'
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp
  }, "\uAC00\uC555\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });