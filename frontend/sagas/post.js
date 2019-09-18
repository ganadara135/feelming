import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';

function* addPost() {
    try{
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    }catch (e) {
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),       // 이벤트 리스너로 이해, 순서 의미 없음
       // fork(watchSignUp),
    ]);
}