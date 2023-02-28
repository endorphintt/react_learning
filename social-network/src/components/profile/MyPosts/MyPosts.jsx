import React from "react";
import Post from "./Post/Post";
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    const newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
        newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }

    return(
        <div className="myposts">
            <div className="profile__form">
                <textarea onChange={onPostChange} value={props.newPostText} className="newPostText" ref={newPostElement}></textarea>
                <button className="addPost" onClick={addPost}>post</button>
            </div>
            <div className="posts">
                {props.Posts}
            </div>
        </div>
    )
} 

export default MyPosts;