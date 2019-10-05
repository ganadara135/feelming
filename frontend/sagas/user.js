import { all, fork, takeLatest, takeEvery, call, put, take, delay, } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE,
    LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE,
    REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE,
    EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE,
    UPLOAD_PROFILE_IMAGES_REQUEST, UPLOAD_PROFILE_IMAGES_SUCCESS, UPLOAD_PROFILE_IMAGES_FAILURE,
} from '../reducers/user'
import axios from 'axios';
// const HELLO_SAGA = 'HELLO_SAGA';


function logInAPI(logInData) {
// 서버에 요청 보내는 부분
    return axios.post('/user/login', logInData, {
        withCredentials: true,      //  쿠키 교환 with backend 
        // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해준다
        // SSR 일 때는 브라우저가 빠져 있으니 직접 쿠키를 넣어준다.
    });
}

function* logIn(action) {
    try {
        // yield fork(logger);    // 로그 기록하는 기능 예제
        // yield call(loginAPI);       // call 동기 호출
        //yield delay( 2000);
        console.log("before logInAPI() in Saga")
        const result = yield call(logInAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOG_IN_FAILURE,
            reason: e.response && e.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
    // while(true){
    //     yield take(LOG_IN_REQUEST, login)    // take 안에 gernerater.next() 기능이 있음
    //     yield put( {            // put 은 redux 에 dispatch 와 동일
    //         type: LOG_IN_SUCCESS,
    //     });
    // }
}

function signUpAPI(signUpData) {
    // 서버에 요청 보내는 부분
    return axios.post('/user/', signUpData);
}

function* signUp(action) {
    try {
        // yield fork(logger);    // 로그 기록하는 기능 예제
        //yield call(signUpAPI);       // call 동기 호출
        //yield delay(2000);
        const result = yield call(signUpAPI, action.data);
        //throw new Error('에러 발생');
        console.log("result : ", result);
        yield put( {            // put 은 dispatch 와 동일
            type: SIGN_UP_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: SIGN_UP_FAILURE,
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function logOutAPI() {
    // 서버에 요청 보내는 부분
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function* logOut(action) {
    try {
        yield call(logOutAPI);
        yield put( {            // put 은 dispatch 와 동일
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOG_OUT_FAILURE,
        });
    }
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI(userId) {
    
    return axios.get( userId ? `/user/${userId}` : '/user/',  {
        withCredentials: true,
    });
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function followAPI(userId) {
    
    return axios.post( `/user/${userId}/follow`, {}, {
        withCredentials: true,
    });
}

function* follow(action) {
    try {
        const result = yield call(followAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: FOLLOW_USER_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: FOLLOW_USER_FAILURE,
            error: e,
        });
    }
}

function* watchFollow() {
    yield takeEvery(FOLLOW_USER_REQUEST, follow);
}

function unfollowAPI(userId) {
    
    return axios.delete( `/user/${userId}/follow`, {
        withCredentials: true,
    });
}

function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: UNFOLLOW_USER_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: UNFOLLOW_USER_FAILURE,
            error: e,
        });
    }
}

function* watchUnfollow() {
    yield takeEvery(UNFOLLOW_USER_REQUEST, unfollow);
}

function loadFollowersAPI(id, offset  = 0, limit = 3) {
    
    return axios.get( `/user/${id || 0}/followers?offset=${offset}&limit=${limit}`, {
        withCredentials: true,
    });
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data, action.offset);
        yield put( {            // put 은 dispatch 와 동일
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOAD_FOLLOWERS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadFollowers() {
    yield takeEvery(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function loadFollowingsAPI(userId, offset  = 0, limit = 3) {
    
    return axios.get( `/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
        withCredentials: true,
    });
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data, action.offset);
        yield put( {            // put 은 dispatch 와 동일
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOAD_FOLLOWINGS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadFollowings() {
    yield takeEvery(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function removeFollowerAPI(userId) {
    
    return axios.delete( `/user/${userId || 0}/follower`, {
        withCredentials: true,
    });
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: REMOVE_FOLLOWER_FAILURE,
            error: e,
        });
    }
}

function* watchRemoveFollower() {
    yield takeEvery(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function editNicknameAPI(nickname) {
    // 부분만 수정시 patch()
    return axios.patch( `/user/nickname`, {nickname}, {
        withCredentials: true,
    });
}

function* editNickname(action) {
    try {
        const result = yield call(editNicknameAPI, action.data);
        yield put( {            // put 은 dispatch 와 동일
            type: EDIT_NICKNAME_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: EDIT_NICKNAME_FAILURE,
            error: e,
        });
    }
}

function* watchEditNickname() {
    yield takeEvery(EDIT_NICKNAME_REQUEST, editNickname);
}

function uploadProfileImageAPI(formData) {
    console.log("uploadProfileImageAPI : ", formData)
    return axios.put( `/user/profileImg`, formData)
}

function* uploadProfileImage(action) {
    try{

        const result = yield call(uploadProfileImageAPI, action.data);
        yield put({
            type: UPLOAD_PROFILE_IMAGES_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: UPLOAD_PROFILE_IMAGES_FAILURE,
            error: e,
        })
    }
}

function* watchUploadProfileImage() {
    yield takeLatest(UPLOAD_PROFILE_IMAGES_REQUEST, uploadProfileImage);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),       // 이벤트 리스너로 이해, 순서 의미 없음
        fork(watchSignUp),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadFollowings),
        fork(watchLoadFollowers),
        fork(watchRemoveFollower),
        fork(watchEditNickname),
        fork(watchUploadProfileImage),

        // call()   // 동기 호출
        // fork()   // 비동기 호출
        // watchHello(),
        // //helloSaga(),
        // watchLogin(),
        // watchSignup(),
    ]);
}

// function* watchHello() {
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
    while(true) {
        yield take(HELLO_SAGA);
    console.log("Hello Saga");
    }
}

function* watchHello() {
    yield takeLatest(HELLO_SAGA, function*() {
        yield delay( 1000 );
        yield put({
            type: 'BYE_SAGA'
        });
    });
}