const dummyUser = {
    nickname: '코드',
    Post: [],
    Followings: [],
    Followers: [],      
};

export const initialState = {
    isLoggedIn: false,
    user: null,
    //signupData: {},
};

// const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [{
//         User: {
//             id: 1,
//             nickname: "코드",
//         },
//         content: "첫 번째 게시글",
//         img: "https://blog.yena.io/assets/post-img/171123-nachoi-300.jpg"
//     }],
// };

export const LOG_IN = 'LOG_IN';   // 액션이 이름
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const loginAction = {
    type: LOG_IN,
};

export const logoutAction = {
    type: LOG_OUT,
}
export const signupAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    };
};

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
                // user: action.data.user,
                // id: action.data.id,
                // nick: action.data.nick,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;