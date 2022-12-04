import profileReducer from "./profile_reducer";
import dialogsReducer from './dialogs_reducer'

let store = {
    _state: {
        ProfilePage: {
            postsData: [
                {id: 1, message:"It's my second post", likesCount:'12'},
                {id: 2, message:"It's my first post", likesCount:'2'},
            ],
    
            newPostText: 'it-kamasutra',
        },
          
        MessagesPage: {
            DialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Oleg'},
            ],             
            MessageData: [
                {id: 1, message: 'Hi!', likesCount: 2},
                {id: 1, message: 'How are you?', likesCount: 3},
                {id: 2, message: 'What are you thinking about?', likesCount: 4},
                {id: 3, message: 'talk to me!', likesCount: 5},
                {id: 4, message: 'I am Alisa!', likesCount: 23},
                {id: 5, message: 'Stop it', likesCount: 34},
                {id: 6, message: 'I\'d like to show me', likesCount: 45},
                {id: 2, message: 'what?', likesCount: 56},
            ],
            newMessageBody: '',
        },
    },
    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action);

        this._renderPage(this._state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._renderPage = observer;
    },
}

export default store;