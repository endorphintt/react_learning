import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator()); 
  }

  let onPostChange = (text) => {   
    props.dispatch(updateNewPostTextActionCreator(text));
  }
  
  return (
    <MyPosts postsData={props.store.getStore().profilePage.postsData} addPostActionCreator={addPost} updateNewPostTextActionCreator={onPostChange}/>
  )
}

export default MyPostsContainer;