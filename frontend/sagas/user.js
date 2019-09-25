import { all, fork, takeLatest, takeEvery, call, put, take, delay, } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE,
} from '../reducers/user'
import axios from 'axios';
// const HELLO_SAGA = 'HELLO_SAGA';


function logInAPI(logInData) {
// 서버에 요청 보내는 부분
    return axios.post('/user/login', logInData, {
        withCredentials: true,      //  쿠키 교환 with backend 
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
            error: e,
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
    
    return axios.delete( `/user/${userId}/follow`, {}, {
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

export default function* userSaga() {
    yield all([
        fork(watchLogIn),       // 이벤트 리스너로 이해, 순서 의미 없음
        fork(watchSignUp),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnfollow),

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