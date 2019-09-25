import { all, fork, takeLatest, takeEvery, call, put, take, delay,} from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE,
    LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
    LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
 } from '../reducers/post';
import axios from 'axios';


function addPostAPI(postData) {
    return axios.post('/post', postData, {
        withCredentials: true,
    });
}

function* addPost(action) {
    try{
        //yield delay(2000);
        
        const result = yield call(addPostAPI, action.data);
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
    //console.log('in loadMainPosts Saga ');
    return axios.get('/posts');
}

function* loadMainPosts() {
    //console.log('in loadMainPosts Saga ');
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

function loadHashtagPostsAPI(tag) {
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
    console.log("addCommentAPI() in sagas : ",data)
    return axios.post( `/post/${data.postId}/comment`, {content: data.content}, {
        withCredentials: true,
    });
}

function* addComment(action) {
    try{
        console.log("addComment() in sagas : ", action)
        const result = yield call(addCommentAPI, action.data);
        console.log("addComment() in sagas result : ", result)
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

function loadCommentsAPI(postId) {
    console.log('loadCommentsAPI()  postId : ', postId);
    return axios.get( `/post/${postId}/comments`)
}

function* loadComments(action) {
    console.log('loadComment action : ', action)
    try{
        const result = yield call(loadCommentsAPI, action.data);
        console.log('loadComments() result.data : ', result.data);
        console.log('loadComments() action.data : ', action.data);

        yield put({
            type: LOAD_COMMENTS_SUCCESS,
            data: {
                postId: action.data,
                comments: result.data,
            },
        });
    }catch (e) {
        //console.log('loadComments FAILURE : ', e);
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: e,
        })
    }
}

function* watchloadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}


function uploadImagesAPI(formData) {
    return axios.post( `/post/images`, formData)
}

function* uploadImages(action) {
    try{
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: e,
        })
    }
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function likePostAPI(postId) {
    return axios.post( `/post/${postId}/like`, {}, {
        withCredentials: true,
    });
}

function* likePost(action) {
    try{
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId
            }
        });
    }catch (e) {
        console.error(e);
        yield put({
            type: LIKE_POST_FAILURE,
            error: e,
        })
    }
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function unlikePostAPI(postId) {
    return axios.delete( `/post/${postId}/like`, {
        withCredentials: true,
    });
}

function* unlikePost(action) {
    try{
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId
            }
        });
    }catch (e) {
        console.error(e);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: e,
        })
    }
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),       // 이벤트 리스너로 이해, 순서 의미 없음
        fork(watchAddComment),
        fork(watchloadComments),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
    ]);
}