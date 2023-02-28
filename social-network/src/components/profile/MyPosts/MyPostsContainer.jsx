import React from "react";
import Post from "./Post/Post";
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let Posts = props.store.getState().profilePage.posts.map(p => <Post key={p.id} likesCount={p.likesCount} post={p.post}/>)

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <MyPosts newPostText={props.store.getState().profilePage.newPostText} onPostChange={onPostChange} addPost={addPost} Posts={Posts}/>
    )
} 

export default MyPostsContainer;