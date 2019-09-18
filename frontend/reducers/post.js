export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: "코드",
        },
        content: "첫 번째 게시글",
        img: "https://blog.yena.io/assets/post-img/171123-nachoi-300.jpg"
    }],
    imagePaths: [],
};


export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';


const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickName: '코드',
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;