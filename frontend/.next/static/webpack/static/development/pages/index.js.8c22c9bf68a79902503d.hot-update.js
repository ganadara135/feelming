webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, REMOVE_POST_OF_ME, signupAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_REQUEST", function() { return LOAD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_SUCCESS", function() { return LOAD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_FAILURE", function() { return LOAD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_REQUEST", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_SUCCESS", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_FAILURE", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupAction", function() { return signupAction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");


 // const dummyUser = {
//     nickname: '코드',
//     Post: [],
//     Followings: [],
//     Followers: [],
//     id: 1,  
// };

var initialState = {
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
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
var LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
var LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';
var FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
var FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
var FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
var UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
var UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
var UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // post reducier 를 호출하는 부분 (다른 리듀서 호출)

var EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
var EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
var EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var signupAction = function signupAction(data) {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
}; // export const signupAction = (data) => {
//     return {
//         type: SIGN_UP_REQUEST,
//         data: data,
//     };
// };

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_TO_ME:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.me, {
              Posts: [{
                id: action.data
              }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
            })
          });
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
          var index = draft.me.Followings.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Followings.splice(index, 1);
          var index2 = draft.followingList.findIndex(function (v) {
            return v.id === action.data;
          });
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
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            // 처음 데이터를 가져올 때는 더보기 버튼을 보여준다
            hasMoreFollower: action.offset ? state.hasMoreFollower : true
          });
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            followerList: state.followerList.concat(action.data),
            hasMoreFollower: action.data.length === 3 // true or false

          });
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }

      case LOAD_FOLLOWINGS_REQUEST:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            hasMoreFollowing: action.offset ? state.hasMoreFollowing : true
          });
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            followingList: state.followingList.concat(action.data),
            hasMoreFollowing: action.data.length === 3 // true or false

          });
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          //console.log("LOAD_FOLLOWINGS_FAILURE : ", action.data)
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.me, {
              Followers: state.me.Followers.filter(function (v) {
                return v.id !== action.data;
              })
            }),
            followerList: state.followerList.filter(function (v) {
              return v.id !== action.data;
            })
          });
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }

      case EDIT_NICKNAME_REQUEST:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            isEditingNickname: true,
            editNicknameErrorReason: ''
          });
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            isEditingNickname: false,
            me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.me, {
              nickname: action.data
            })
          });
        }

      case EDIT_NICKNAME_FAILURE:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            editNicknameErrorReason: action.error
          });
        }

      case REMOVE_POST_OF_ME:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.me, {
              Posts: state.me.Posts.filter(function (v) {
                return v.id !== action.data;
              })
            })
          });
        }

      default:
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state);
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=index.js.8c22c9bf68a79902503d.hot-update.js.map