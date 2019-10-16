import produce from 'immer';

// const dummyUser = {
//     nickname: '코드',
//     Post: [],
//     Followings: [],
//     Followers: [],
//     id: 1,  
//     career: [],  
// };


export const initialState = {
   // isLoggedIn: false,
    isLoggingOut: false,   // 로그아웃 시도중
    isLoggingIn: false,    // 로그인 시도중
    logInErrorReason: '',  // 로그인 실퍠 상유
    signedUp: false,      // 회원가입 성공
    isSigningUp: false,   // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null,
    followingList: [],     // 팔로잉 리스트
    followerList: [],     // 팔로워 리스트
    userInfo: null,        // 남의 정보
    isEditingNickname: false,
    editNicknameErrorReason: '',
    hasMoreFollower: false,
    hasMoreFollowing: false,
    profileImg: [],        // 프로필 이미지 경로
    profileImgErrorReason: '',
    
};


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';     // post reducier 를 호출하는 부분 (다른 리듀서 호출)

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const UPLOAD_PROFILE_IMAGES_REQUEST = 'UPLOAD_PROFILE_IMAGES_REQUEST';
export const UPLOAD_PROFILE_IMAGES_SUCCESS = 'UPLOAD_PROFILE_IMAGES_SUCCESS';
export const UPLOAD_PROFILE_IMAGES_FAILURE = 'UPLOAD_PROFILE_IMAGES_FAILURE';
export const REMOVE_PROFILE_IMAGE = 'REMOVE_PROFILE_IMAGE';

export const LOAD_PROFILE_IMAGE_REQUEST = 'LOAD_PROFILE_IMAGE_REQUEST';
export const LOAD_PROFILE_IMAGE_SUCCESS = 'LOAD_PROFILE_IMAGE_SUCCESS';
export const LOAD_PROFILE_IMAGE_FAILURE = 'LOAD_PROFILE_IMAGE_FAILURE';

export const LOAD_PROFILE_CAREER_REQUEST = 'LOAD_PROFILE_CAREER_REQUEST';
export const LOAD_PROFILE_CAREER_SUCCESS = 'LOAD_PROFILE_CAREER_SUCCESS';
export const LOAD_PROFILE_CAREER_FAILURE = 'LOAD_PROFILE_CAREER_FAILURE';

export const EDIT_CURRENT_CAREER_REQUEST = 'EDIT_CURRENT_CAREER_REQUEST';
export const EDIT_CURRENT_CAREER_SUCCESS = 'EDIT_CURRENT_CAREER_SUCCESS';
export const EDIT_CURRENT_CAREER_FAILURE = 'EDIT_CURRENT_CAREER_FAILURE';

export const EDIT_PAST_CAREER_REQUEST = 'EDIT_PAST_CAREER_REQUEST';
export const EDIT_PAST_CAREER_SUCCESS = 'EDIT_PAST_CAREER_SUCCESS';
export const EDIT_PAST_CAREER_FAILURE = 'EDIT_PAST_CAREER_FAILURE';

export const LOAD_SELFINTRODUCTION_REQUEST = 'LOAD_SELFINTRODUCTION_REQUEST';
export const LOAD_SELFINTRODUCTION_SUCCESS = 'LOAD_SELFINTRODUCTION_SUCCESS';
export const LOAD_SELFINTRODUCTION_FAILURE = 'LOAD_SELFINTRODUCTION_FAILURE';

export const EDIT_SELFINTRODUCTION_REQUEST = 'EDIT_SELFINTRODUCTION_REQUEST';
export const EDIT_SELFINTRODUCTION_SUCCESS = 'EDIT_SELFINTRODUCTION_SUCCESS';
export const EDIT_SELFINTRODUCTION_FAILURE = 'EDIT_SELFINTRODUCTION_FAILURE';

export const UPLOAD_WORKPLACE_REQUEST = 'UPLOAD_WORKPLACE_REQUEST';
export const UPLOAD_WORKPLACE_SUCCESS = 'UPLOAD_WORKPLACE_SUCCESS';
export const UPLOAD_WORKPLACE_FAILURE = 'UPLOAD_WORKPLACE_FAILURE';


export const signupAction = (data) => ({
    type: SIGN_UP_REQUEST,
    data: data,
});

const reducer = (state = initialState, action ) => {
    return produce(state, (draft) => {
    switch (action.type) {
        case ADD_POST_TO_ME: {
            draft.me.Posts.unshift({ id: action.data });
            break;
            // return {
            //     ...state,
            //     me: {
            //         ...state.me,
            //         Posts: [{ id: action.data }, ...state.me.Posts],
            //     },
            // };
        };
        case LOG_IN_REQUEST: {
            draft.isLoggingIn = true;
            draft.logInErrorReason = '';
            break;
            // return {
            //     ...state,
            //     isLoggingIn: true,
            // }
        }
        case LOG_IN_SUCCESS: {
            draft.isLoggingIn = false;
            draft.me = action.data;
            draft.isLoading = false;
            draft.logInErrorReason = '';
            break;
            // return {
            //     ...state,
            //     isLoggingIn: false,
            //     //isLoggedIn: true,
            //     //me: dummyUser,
            //     me: action.data,
            //     isLoading: false,
            // }
        }
        case LOG_IN_FAILURE: {

            console.log("action.error : ", action.error);
            console.log("action.reason : ", action.reason);

            draft.isLoggingIn =  false;
            draft.logInErrorReason = action.reason ? action.reason : action.error;
            draft.me = null;
            break;

            // return {
            //     ...state,
            //     isLoggingIn: false,
            //     //isLoggedIn: false,
            //     logInErrorReason: action.error,
            //     me: null,
            // }
        }
        case LOG_OUT_REQUEST: {
            draft.isLoggingOut = true;
            break;
        }
        case LOG_OUT_SUCCESS: {
            draft.isLoggingOut = true;
            draft.me = null;
            break;
        }
        case SIGN_UP_REQUEST: {
            draft.isSigningUp = false;
            draft.isSignedUp = true;
            draft.signUpErrorReason = '';
            break;
        }
        case SIGN_UP_SUCCESS: {
            draft.isSigningUp = false;
            draft.isSignedUp = true;
            break;
            // return {
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
        case SIGN_UP_FAILURE: {
            draft.isSigningUp = false;
            draft.signUpErrorReason = action.error;
            break;
            // return {
            //     ...state,
            //     isSigningUp: false,
            //     signUpErrorReason: action.error,
            // };
        }
        case LOAD_USER_REQUEST: {
            break;
            // return {
            //     ...state,
            // }
        }
        case LOAD_USER_SUCCESS: {
            if (action.me) {
                draft.me = action.data;
                break;
            }
            draft.userInfo = action.data;
            break;
            // if(action.me){
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
        case LOAD_USER_FAILURE: {
            break;
            // return {
            //     ...state,
            // };
        }
        case FOLLOW_USER_REQUEST: {
            break;
            // return {
            //     ...state,
            // }
        }
        case FOLLOW_USER_SUCCESS: {
            draft.me.Followings.unshift({ id: action.data });
            break;
            // return {
            //   ...state,
            //   me: {
            //     ...state.me,
            //     Followings: [{ id: action.data }, ...state.me.Followings],
            //   },
            // };
        }
        case FOLLOW_USER_FAILURE: {
            break;
        }
        case UNFOLLOW_USER_REQUEST: {
            break;
        }
        case UNFOLLOW_USER_SUCCESS: {
            const index = draft.me.Followings.findIndex( v => v.id === action.data);
            draft.me.Followings.splice(index,1);
            const index2 = draft.followingList.findIndex( v => v.id === action.data );
            draft.followingList.splice(index2, 1);
            break;
            // return {
            //   ...state,
            //   me: {
            //     ...state.me,
            //     Followings: state.me.Followings.filter(v => v.id !== action.data),
            //   },
            //   followingList: state.followingList.filter(v => v.id !== action.data),
            // };
        }
        case UNFOLLOW_USER_FAILURE: {
            break;
        }
        case LOAD_FOLLOWERS_REQUEST: {
            draft.followerList = !action.offset ? [] : draft.followerList;
            draft.hasMoreFollower = action.offset ? draft.hasMoreFollower : true;
            break;
            // return {
            //     ...state,
            //     // 처음 데이터를 가져올 때는 더보기 버튼을 보여준다
            //     hasMoreFollower: action.offset ? state.hasMoreFollower : true,
            // };
        }
        case LOAD_FOLLOWERS_SUCCESS: {
            action.data.forEach((d) => {
                draft.followerList.push(d);
            });
            draft.hasMoreFollower = action.data.length === 3;
            break;
            // return {
            //   ...state,
            //   followerList: state.followerList.concat(action.data),
            //   hasMoreFollower: action.data.length === 3, // true or false
            // };
          }
        case LOAD_FOLLOWERS_FAILURE: {
            break;
        }
        case LOAD_FOLLOWINGS_REQUEST: {
            draft.followingList = !action.offset ? [] : draft.followingList;
            draft.hasMoreFollowing = action.offset ? draft.hasMoreFollowing : true;
            break;
            // return {
            //     ...state,
            //     hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,
            // }
        }
        case LOAD_FOLLOWINGS_SUCCESS: {
            action.data.forEach((d) => {
                draft.followingList.push(d);
            });
            draft.hasMoreFollowing = action.data.length === 3;
            break;
            // return {
            //   ...state,
            //   followingList: state.followingList.concat(action.data),
            //   hasMoreFollowing: action.data.length === 3, // true or false
            // };
        }
        case LOAD_FOLLOWINGS_FAILURE: {
            break;
        }
        case REMOVE_FOLLOWER_REQUEST: {
            break;
        }
        case REMOVE_FOLLOWER_SUCCESS: {
            const index = draft.me.Followers.findIndex( v => v.id === action.data );
            draft.me.Followers.splice(index, 1);
            const index2 = draft.followerList.findIndex( v => v.id === action.data );
            draft.followerList.splice(index2, 1);
            break;
            // return {
            //   ...state,
            //   me: {
            //       ...state.me,
            //       Followers: state.me.Followers.filter( v=> v.id !== action.data),
            //   },
            //   followerList: state.followerList.filter(v => v.id !== action.data),
            // };
        }
        case REMOVE_FOLLOWER_FAILURE: {
            break;
        }
        case EDIT_NICKNAME_REQUEST: {
            draft.isEditingNickname = false;
            draft.me.nickname = action.data;
            break;
            // return {
            //     ...state,
            //     isEditingNickname: true,
            //     editNicknameErrorReason: '',
            // }
        }
        case EDIT_NICKNAME_SUCCESS: {
            draft.isEditingNickname = false;
            draft.me.nickname = action.data;
            break;
            // return {
            //   ...state,
            //   isEditingNickname: false,
            //   me: {
            //       ...state.me,
            //       nickname: action.data,
            //   },
            // };
        }
        case EDIT_NICKNAME_FAILURE: {
            draft.isEditingNickname = false;
            draft.editNicknameErrorReason = action.error;
            break;
            // return {
            //     ...state,
            //     editNicknameErrorReason: action.error,
            // }
        }
        case REMOVE_POST_OF_ME: {
            draft.isEditingNickname = false;
            draft.editNicknameErrorReason = action.error;
            break;
            // return {
            //   ...state,
            //   me: {
            //       ...state.me,
            //       Posts: state.me.Posts.filter( v=> v.id !== action.data),
            //   },
            // };
        }

        case UPLOAD_PROFILE_IMAGES_REQUEST: {
            return {
                ...state,
                profileImageErrorReason: '',
            };
        }
        case UPLOAD_PROFILE_IMAGES_SUCCESS: {
            return {
                ...state,
                //imagePaths: [...state.imagePaths, ...action.data],
                profileImg: [...state.profileImg, ...action.data],
            };
        }
        case UPLOAD_PROFILE_IMAGES_FAILURE: {
            return {
                ...state,
                profileImageErrorReason : action.error,
            };
        }
        case REMOVE_PROFILE_IMAGE: {
            return {
                ...state,
                profileImg: state.profileImg.filter((v,i) => i !== action.index),
            }
        }
        case LOAD_PROFILE_IMAGE_REQUEST: {
            return {
                ...state,
                profileImgErrorReason: '',
            };
        }
        case LOAD_PROFILE_IMAGE_SUCCESS: {
            return {
              ...state,
              profileImg: action.data
            };
          }
        case LOAD_PROFILE_IMAGE_FAILURE: {
            return {
                ...state,
                profileImgErrorReason : action.error,
            };
        }
        case LOAD_PROFILE_CAREER_REQUEST: {
            return {
                ...state,
                me : {
                    ...state.me,
                    careerErrorReason: '',
                }
            };
        }
        case LOAD_PROFILE_CAREER_SUCCESS: {
            return {
                ...state,
                me : {
                    ...state.me,
                    career : action.data,
                    //nickname: action.nickname,
                    // Post: [],
                    // Followings: [],
                    // Followers: [],
                    // id: action.id,
                    // userId: action.userId, 
                }
            };
          }
        case LOAD_PROFILE_CAREER_FAILURE: {
            return {
                ...state,
                me : {
                    ...state.me,
                    careerErrorReason : action.error,
                }
            };
        }
        case EDIT_CURRENT_CAREER_REQUEST: {
            return {
                ...state,
                //ErrorReason: '',
            };
        }
        case EDIT_CURRENT_CAREER_SUCCESS: {
            return {
                ...state,
                me : {
                    ...state.me,
                    career: state.me.career && state.me.career.length >= 2 ? [action.data, state.me.career[1]] : [...action.data],
                }
            };
        }
        case EDIT_CURRENT_CAREER_FAILURE: {
            return {
                ...state,
                //profileImageErrorReason : action.error,
            };
        }
        case EDIT_PAST_CAREER_REQUEST: {
            return {
                ...state,
                //ErrorReason: '',
            };
        }
        case EDIT_PAST_CAREER_SUCCESS: {
            return {
                ...state,
                me : {
                    ...state.me,
                    career: state.me.career && state.me.career.length >= 2 ? [state.me.career[0], action.data] : [state.me.career[0], action.data],
                }
            };
        }
        case EDIT_PAST_CAREER_FAILURE: {
            return {
                ...state,
                //profileImageErrorReason : action.error,
            };
        }
        case LOAD_SELFINTRODUCTION_REQUEST: {
            return {
                ...state,
            };
        }
        case LOAD_SELFINTRODUCTION_SUCCESS: {
            return {
                ...state,
                me : {
                    ...state.me,
                    selfIntro : action.data,
                }
            };
          }
        case LOAD_SELFINTRODUCTION_FAILURE: {
            return {
                ...state,
            };
        }
        case EDIT_SELFINTRODUCTION_REQUEST: {
            return {
                ...state,
            };
        }
        case EDIT_SELFINTRODUCTION_SUCCESS: {
            return {
                ...state,
                me : {
                    ...state.me,
                    selfIntro : action.data,
                }
            };
          }
        case EDIT_SELFINTRODUCTION_FAILURE: {
            return {
                ...state,
            };
        }
        case UPLOAD_WORKPLACE_REQUEST: {
            return {
                ...state,
            };
        }
        case UPLOAD_WORKPLACE_SUCCESS: {
            return {
                ...state,
                // me : {
                //     ...state.me,
                //     selfIntro : action.data,
                // }
            };
          }
        case UPLOAD_WORKPLACE_FAILURE: {
            return {
                ...state,
            };
        }
        default: {
            break;
        }
    }
    });
}

export default reducer;