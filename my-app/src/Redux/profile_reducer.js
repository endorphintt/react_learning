let initialState = {
    postsData: [
        {id: 1, message:"It's my second post", likesCount:'12'},
        {id: 2, message:"It's my first post", likesCount:'2'},
    ],

    newPostText: 'it-kamasutra',
}

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };       
            state.postsData.push(newPost);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
} 

export const addPostActionCreator = () => {
    return {
      type: 'ADD-POST',
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {
       type: 'UPDATE-NEW-POST-TEXT',
       newText: text,
    }
}

export default ProfileReducer;