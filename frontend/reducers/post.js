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


export const initialState = {
    mainPosts: [], // 화면에 보일 포스트들
    imagePaths: [], // 미리보기 이미지 경로
    addPostErrorReason: '', // 포스트 업로드 실패 사유
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,

    singlePost: null,
  };

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';




export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        //case LOAD_COMMENTS_REQUEST:
        case LOAD_HASHTAG_POSTS_REQUEST:
        case LOAD_USER_POSTS_REQUEST:
        case LOAD_MAIN_POSTS_REQUEST: {
            return {
                ...state,
                mainPosts: !action.lastId ? [] : state.mainPosts,
                hasMorePost: action.lastId ? state.hasMorePost : true,
            };
        }
        case LOAD_USER_POSTS_SUCCESS:
        case LOAD_HASHTAG_POSTS_SUCCESS:
        case LOAD_MAIN_POSTS_SUCCESS: {
            // mainPosts : ", state.mainPosts)
            console.log("mainPosts in reducer : ", action.data)
            return {
                ...state,     
                mainPosts: state.mainPosts.concat(action.data),
                hasMorePost: action.data.length === 10,
            };
        }
        //case LOAD_COMMENTS_FAILURE:
        case LOAD_HASHTAG_POSTS_FAILURE:
        case LOAD_USER_POSTS_FAILURE:
        case LOAD_MAIN_POSTS_FAILURE: {
            return {
                ...state,
            };
        }
        case ADD_POST_REQUEST: {
            //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
            return {
                ...state,
                isAddingPost: false,
                //mainPosts: [dummyPost, ...state.mainPosts],
                mainPosts: [action.data, ...state.mainPosts],
                postAdded: true,
                imagePaths: [],
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
           // console.log(" in Reducuer ADD_COMMENT_REQUEST :  ", action)
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            // console.log(" in Reducuer ADD_COMMENT_SUCCESS :  ", action)
            // console.log(" chk state : ", state)
            // console.log(" state.mainPosts[0] : ", state.mainPosts[0]);

           // try {   
                const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
                //console.log("postIndex : ", postIndex);
                const post = state.mainPosts[postIndex];
                // console.log("post : ", post);
                // console.log("post.Comments : ", post.Comments)
                // console.log("action.data.comment : ", action.data.comment)
                const Comments = [...post.Comments, action.data.comment];
                //console.log("Comments : ", Comments);
                const mainPosts = [...state.mainPosts];
                //console.log("mainPosts : ", mainPosts);
                mainPosts[postIndex] = {...post, Comments };
                //console.log("mainPosts[postIndex] : ", mainPosts[postIndex]);
            // } catch (e) {
            //     console.log("reducer error : ", e);
            // }
            
            return {
                ...state,
                isAddingComment: false,
                mainPosts,
                //mainPosts : mainPosts,
                commentAdded: true,
            };
        }
        case ADD_COMMENT_FAILURE: {
            console.log(" in Reducuer ADD_COMMENT_FAILURE :  ", action)
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            };
        }
        case LOAD_COMMENTS_SUCCESS: {

            console.log('LOAD_COMMENTS_SUCCESS action : ', action.data)
            console.log('LOAD_COMMENTS_SUCCESS state : ', state)

            if (action.data.postId !== undefined ) {
                const postIndex = state.mainPosts.findIndex( v=> v.id === action.data.postId);
                const post = state.mainPosts[postIndex];
                const Comments = action.data.comments;
                const mainPosts = [...state.mainPosts];
                mainPosts[postIndex] = { ...post, Comments};

                return {
                    ...state,
                    mainPosts,
                    //mainPosts : mainPosts,
                };
            } else {
                return {
                    ...state,
                }
            }
            
        }
        case UPLOAD_IMAGES_REQUEST: {
            return {
                ...state,
            };
        }
        case UPLOAD_IMAGES_SUCCESS: {
            return {
                ...state,
                imagePaths: [...state.imagePaths, ...action.data],
            };
        }
        case UPLOAD_IMAGES_FAILURE: {
            return {
                ...state,
            };
        }
        case REMOVE_IMAGE: {
            return {
                ...state,
                imagePaths: state.imagePaths.filter((v,i) => i !== action.index),
            }
        }
        case LIKE_POST_REQUEST: {
            //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
            return {
                ...state,
            };
        }
        case LIKE_POST_SUCCESS: {
            //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
            const postIndex = state.mainPosts.findIndex( v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Likers = [{ id: action.data.userId }, ...post.Likers];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Likers};

            return {
                ...state,
                mainPosts,
            };
        }
        case LIKE_POST_FAILURE: {
            return {
                ...state,
            };
        }
        case UNLIKE_POST_REQUEST: {
            //console.log(" in Reducuer ADD_POST_REQUEST : ", action)
            return {
                ...state,
            };
        }
        case UNLIKE_POST_SUCCESS: {
            //console.log(" in Reducuer ADD_POST_SUCCESS : ", action)
            const postIndex = state.mainPosts.findIndex( v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Likers = post.Likers.filter(v => v.id !== action.data.userId);
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Likers};
            return {
                ...state,
                mainPosts,
            };
        }
        case UNLIKE_POST_FAILURE: {
            return {
                ...state,
            };
        }
        case RETWEET_REQUEST: {
            return {
                ...state,
            };
        }
        case RETWEET_SUCCESS: {
            console.log('RETWEET_SUCCESS in reducers ', action.data)
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            };
        }
        case RETWEET_FAILURE: {
            return {
                ...state,
            };
        }
        case REMOVE_POST_REQUEST: {
            return {
                ...state,
            };
        }
        case REMOVE_POST_SUCCESS: {
            //console.log('RETWEET_SUCCESS in reducers ', action.data)
            return {
                ...state,
                mainPosts: state.mainPosts.filter( v => v.id !== action.data ),
            };
        }
        case REMOVE_POST_FAILURE: {
            return {
                ...state,
            };
        }

        case LOAD_POST_SUCCESS: {
            return {
                ...state,
                singlePost: action.data,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;