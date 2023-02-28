import sidebarReducer from "./sidebarReducer"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: 'hi!', id: 1, likesCount: 0,},
                {post: 'hi!', id: 2, likesCount: 0,},
                {post: 'hi!', id: 3, likesCount: 0,},
                {post: 'hi!', id: 4, likesCount: 0,},
                {post: 'hi!', id: 5, likesCount: 0,},
                {post: 'hi!', id: 6, likesCount: 0,},
            ],
            newPostText: 'it',
        },   
        messagesPage: {
            dialogs: [
                {id: 1, name:'Sasha',},
                {id: 2, name:'Sasha',},
                {id: 3, name:'Sasha',},
                {id: 4, name:'Sasha',},
                {id: 5, name:'Sasha',},
            ],
            messages: [
                {message: 'hi!', id: 1,},
                {message: 'hi!', id: 2,},
                {message: 'hi!', id: 3,},
                {message: 'hi!', id: 4,},
                {message: 'hi!', id: 5,},
                {message: 'hi!', id: 6,},
            ], 
            newMessageBody: '',
        } , 
        sidebar: {}        
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    _addPost(){
        let NewPostText = {
            post: this._state.profilePage.newPostText,
            id: this._state.profilePage.posts.length + 1,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(NewPostText);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.getState());
    },
    _sendMessage(){
        let NewMessageText = {
            message: this._state.newMessageBody,
            id: this._state.messagesPage.messages.length + 1,
        }
        this._state.messagesPage.messages.push(NewMessageText);
        this._callSubscriber(this.getState());
    },
    
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.getState());
    },
    _updateNewMessageBody(text) {       
        this._state.newMessageBody = text;
        this._callSubscriber(this.getState());
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this.getState())
    }
}

export default store;