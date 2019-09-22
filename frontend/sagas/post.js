import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE } from '../reducers/post';
import axios from 'axios';

function addPostAPI(postData) {
    console.log(" addPostAPI() : ", postData)
    return axios.post('/post', postData, {
        withCredentials: true,
    });
}

function* addPost(action) {
    try{
        //yield delay(2000);
        console.log('in addPost Saga : ', action)
        const result = yield call(addPostAPI, action.data);
        console.log("chk result : ", result)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
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


function loadMainPostsAPI() {
    return axios.get('/posts');
}

function* loadMainPosts(action) {
    try{
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}



function loadHashtagPostsAPI() {
    return axios.get(`/hashtag/${tag}`);
}

function* loadHashtagPosts(action) {
    try{
        const result = yield call(loadHashtagPostsAPI, action.data);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}


function loadUserPostsAPI() {
    return axios.get(`/user/${id}/posts`);
}

function* loadUserPosts(action) {
    try{
        const result = yield call(loadUserPostsAPI, action.data);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}


function addCommentAPI(data) {
    return axios.post( `/post/${data.postId}/comment`, {content: data.content}, {
        withCredentials: true,
    });
}

function* addComment(action) {
    try{
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                comment: result.data,
            },
        });
    }catch (e) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        })
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


function loadCommentsAPI(data) {
    return axios.get( `/post/${data.postId}/comment`)
}

function* loadComments(action) {
    try{
        const result = yield call(loadCommentsAPI, action.data);
        yield put({
            type: LOAD_COMMENTS_SUCCESS,
            data: {
                postId: action.data.postId,
                comments: result.data,
            },
        });
    }catch (e) {
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: e,
        })
    }
}

function* watchloadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),       // 이벤트 리스너로 이해, 순서 의미 없음
        fork(watchAddComment),
        fork(watchloadComments),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
    ]);
}