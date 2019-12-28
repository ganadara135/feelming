import { all, fork, takeLatest, throttle, takeEvery, call, put, take, delay,} from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE,
    LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
    LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    LOAD_MY_KEYWORD_REQUEST, LOAD_MY_KEYWORD_SUCCESS, LOAD_MY_KEYWORD_FAILURE,
    LOAD_MY_KEYWORD_SECOND_REQUEST, LOAD_MY_KEYWORD_SECOND_SUCCESS, LOAD_MY_KEYWORD_SECOND_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
    COOPERATE_REQUEST, COOPERATE_SUCCESS, COOPERATE_FAILURE,
    UNCOOPERATE_REQUEST, UNCOOPERATE_SUCCESS, UNCOOPERATE_FAILURE,
    LOAD_MY_MEDIA_REQUEST, LOAD_MY_MEDIA_SUCCESS, LOAD_MY_MEDIA_FAILURE,
    LOAD_MY_RELATED_MEDIA_REQUEST, LOAD_MY_RELATED_MEDIA_SUCCESS, LOAD_MY_RELATED_MEDIA_FAILURE,
    LOAD_CATEGORY_REQUEST, LOAD_CATEGORY_SUCCESS, LOAD_CATEGORY_FAILURE,
 } from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

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
        yield put({                 // post reducer 의 데이터 수정
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put ( {               // user reducer 의 데이터 수정
            type: ADD_POST_TO_ME,
            data: result.data.id,
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

function loadMainPostsAPI(lastId = 0, limit = 10) {
    //console.log('in loadMainPosts Saga ');
    return axios.get(`/posts?lastId=${lastId}&limit=${limit}`);
}
function* loadMainPosts(action) {
    try{
        const result = yield call(loadMainPostsAPI, action.lastId);

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
    //yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
    yield throttle(2000, LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function loadHashtagPostsAPI(tag, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(tag)}?lastId=${lastId}&limit=10`);
}
function* loadHashtagPosts(action) {
    try{
        const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
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
    //yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
    yield throttle(2000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}



function loadMyKeywordAPI(lastId = 0, limit = 5) {
    //console.log("loadMyKeywordAPI() ")
    return axios.get(`/hashtag/MyKeyword?lastId=${lastId}&limit=${limit}`,{
        withCredentials: true,
    }).catch(function (error){
        if (error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log("Axios Error : ", error.message)
        }
    });
   // return axios.post(`/hashtag/MyKeyword`,{}, {
    // return axios.post(`/hashtag/MyKeyword?lastId=${lastId}&limit=${limit}`,{},{
    //     withCredentials: true,
    // });
}
function* loadMyKeyword(action) {
   // console.log("loadMyKeyword() : ")
    try{
        const result = yield call(loadMyKeywordAPI, action.lastId );
        //console.log(" result Saga : ", result)
        yield put({
            type: LOAD_MY_KEYWORD_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_MY_KEYWORD_FAILURE,
            error: e,
        })
    }
}
function* watchLoadMyKeyword() {
    yield throttle(2000, LOAD_MY_KEYWORD_REQUEST, loadMyKeyword);
}

function loadMyKeywordSecondAPI(lastId = 0, limit = 5) {
    return axios.get(`/hashtag/MyKeywordSecond?lastId=${lastId}&limit=${limit}`,{
        withCredentials: true,
    });
}
function* loadMyKeywordSecond(action) {
    try{
        const result = yield call(loadMyKeywordSecondAPI);
    //    console.log(" loadMyKeywordSecondd Saga : ", result)
        yield put({
            type: LOAD_MY_KEYWORD_SECOND_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_MY_KEYWORD_SECOND_FAILURE,
            error: e,
        })
    }
}
function* watchLoadMyKeywordSecond() {
    yield throttle(2000, LOAD_MY_KEYWORD_SECOND_REQUEST, loadMyKeywordSecond);
}

function loadUserPostsAPI(id) {
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
   // console.log("addCommentAPI() in sagas : ",data)
    return axios.post( `/post/${data.postId}/comment`, {content: data.content}, {
        withCredentials: true,
    });
}
function* addComment(action) {
    try{
      //  console.log("addComment() in sagas : ", action)
        const result = yield call(addCommentAPI, action.data);
      //  console.log("addComment() in sagas result : ", result)
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
  //  console.log('loadCommentsAPI()  postId : ', postId);
    return axios.get( `/post/${postId}/comments`)
}
function* loadComments(action) {
  //  console.log('loadComment action : ', action)
    try{
        const result = yield call(loadCommentsAPI, action.data);
  //      console.log('loadComments() result.data : ', result.data);
  //      console.log('loadComments() action.data : ', action.data);

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




function cooperateAPI(postId) {
    return axios.post( `/post/${postId}/cooperate`, {}, {
        withCredentials: true,
    });
}
function* cooperate(action) {
    try{
        const result = yield call(cooperateAPI, action.data);
       // console.log("result cooperate in saga", result)
        yield put({
            type: COOPERATE_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.UserId
            }
        });
    }catch (e) {
       // console.log(" catch(e) in")
        console.error(e);
        yield put({
            type: COOPERATE_FAILURE,
            error: e,
        })
    }
}
function* watchCooperate() {
    yield takeLatest(COOPERATE_REQUEST, cooperate);
}
function uncooperateAPI(postId) {
    return axios.delete( `/post/${postId}/uncooperate`, {
        withCredentials: true,
    });
}
function* uncooperate(action) {
    try{
        const result = yield call(uncooperateAPI, action.data);
       // console.log("result Uncooperate in saga", result)
        yield put({
            type: UNCOOPERATE_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId
            }
        });
    }catch (e) {
        console.error(e);
        yield put({
            type: UNCOOPERATE_FAILURE,
            error: e,
        })
    }
}
function* watchUncooperate() {
    yield takeLatest(UNCOOPERATE_REQUEST, uncooperate);
}



function removePostAPI(postId) {
    return axios.delete( `/post/${postId}`, {
        withCredentials: true,
    });
}
function* removePost(action) {
    try{
        const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data,
        })
    }catch (e) {
        console.error(e);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: e,
        });
    }
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}



function loadSinglePostAPI(postId) {
   // console.log(" loadSinglePostAPI postId : ", postId);
    return axios.get( `/post/${postId}`);
}
function* loadSinglePost(action) {
    try{
        const result = yield call(loadSinglePostAPI, action.data);
       // console.log("saga result : ", result.data)
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    }catch (e) {
       // console.error(e);
        yield put({
            type: LOAD_POST_FAILURE,
            error: e,
        });
    }
}
function* watchLoadSinglePost() {
    yield takeLatest(LOAD_POST_REQUEST, loadSinglePost);
}


function loadMyMediaAPI(lastId = 0, limit = 5) {
    return axios.get(`/posts/myMedia?lastId=${lastId}&limit=${limit}`);
}
function* loadMyMedia(action) {
    try{
        const result = yield call(loadMyMediaAPI, action.lastId);
        //console.log("loadMyMedia SAGA : ", result.data)
        yield put({
            type: LOAD_MY_MEDIA_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_MY_MEDIA_FAILURE,
            error: e,
        })
    }
}
function* watchMyMedia() {
    yield throttle(2000, LOAD_MY_MEDIA_REQUEST, loadMyMedia);
}


function loadMyRelatedMediaAPI(lastId = 0, limit = 50) {
    return axios.get(`/posts/myRelatedMedia?lastId=${lastId}&limit=${limit}`);
}
function* loadMyRelatedMedia(action) {
   // console.log("check action in SAGA : ", action)
    try{
        const result = yield call(loadMyRelatedMediaAPI, action.lastId);
       // console.log("result.data : ", result.data);

        yield put({
            type: LOAD_MY_RELATED_MEDIA_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_MY_RELATED_MEDIA_FAILURE,
            error: e,
        })
    }
}
function* watchMyRelatedMedia() {
    yield throttle(2000, LOAD_MY_RELATED_MEDIA_REQUEST, loadMyRelatedMedia);
}



function loadCategoryAPI(tag, lastId = 0, limit = 10) {
    return axios.get(`/posts/categoryData/${encodeURIComponent(tag)}?lastId=${lastId}&limit=${limit}`);
}
function* loadCategoryData(action) {
  // console.log("check action in SAGA : ", action)
    try{
        const result = yield call(loadCategoryAPI, action.data, action.lastId, action.limit);
   //     console.log("result.data : ", result.data);

        yield put({
            type: LOAD_CATEGORY_SUCCESS,
            data: result.data,
        });
    }catch (e) {
        yield put({
            type: LOAD_CATEGORY_FAILURE,
            error: e,
        })
    }
}
function* watchCategoryData() {
    yield throttle(2000, LOAD_CATEGORY_REQUEST, loadCategoryData);
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
        fork(watchLoadMyKeyword),
        fork(watchLoadMyKeywordSecond),
        fork(watchRemovePost),
        fork(watchLoadSinglePost),
        fork(watchCooperate),
        fork(watchUncooperate),
        fork(watchMyMedia),
        fork(watchMyRelatedMedia),
        fork(watchCategoryData)
    ]);
}