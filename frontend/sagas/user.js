import { all, fork, takeLatest, takeEvery, call, put, take, delay, } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user'
import axios from 'axios';

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {
// 서버에 요청 보내는 부분
    return axios.post('/login');
}

function* login() {
    try {
        // yield fork(logger);    // 로그 기록하는 기능 예제
        // yield call(loginAPI);       // call 동기 호출
        yield delay( 2000);
        yield put( {            // put 은 dispatch 와 동일
            type: LOG_IN_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put( {
            type: LOG_IN_FAILURE,
            error: e,
        });
    }
}

function* watchLogin() {
    while(true){
        yield take(LOG_IN_REQUEST)    // take 안에 gernerater.next() 기능이 있음
        yield put( {            // put 은 redux 에 dispatch 와 동일
            type: LOG_IN_SUCCESS,
        });
    }
}

function signUpAPI() {
    // 서버에 요청 보내는 부분
    return axios.post('/signUp');
}

function* signUp() {
    try {
        // yield fork(logger);    // 로그 기록하는 기능 예제
        //yield call(signUpAPI);       // call 동기 호출
        yield delay(2000);
        throw new Error('에러 발생');

        yield put( {            // put 은 dispatch 와 동일
            type: SIGN_UP_SUCCESS,
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

export default function* userSaga() {
    yield all([
        fork(watchLogin),       // 이벤트 리스너로 이해, 순서 의미 없음
        fork(watchSignUp),
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