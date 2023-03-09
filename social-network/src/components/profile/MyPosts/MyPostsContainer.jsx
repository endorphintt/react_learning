import React from "react";
import Post from "./Post/Post";
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText, 
        Posts: state.profilePage.posts.map(p => <Post key={p.id} likesCount={p.likesCount} post={p.post}/>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange : (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;