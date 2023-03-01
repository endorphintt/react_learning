const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => ({ type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })
}

const initialState = {
    posts: [
        {post: 'hi!', id: 1, likesCount: 0,},
        {post: 'hi!', id: 2, likesCount: 0,},
        {post: 'hi!', id: 3, likesCount: 0,},
        {post: 'hi!', id: 4, likesCount: 0,},
        {post: 'hi!', id: 5, likesCount: 0,},
        {post: 'hi!', id: 6, likesCount: 0,},
    ],
    newPostText: 'it',
}

const profileReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {        
        case ADD_POST:
            let NewPostText = {
                post: state.newPostText,
                id: state.posts.length + 1,
                likesCount: 0,
            }
            newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(NewPostText);
            newState.newPostText = '';
            return newState
        case UPDATE_NEW_POST_TEXT:
            newState = {...state}
            newState.newPostText = action.newText;
            return newState
        default:
            return state;
    }
}

export default profileReducer;