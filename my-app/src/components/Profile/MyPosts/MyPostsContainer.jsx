import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator()); 
  }

  let onPostChange = (text) => {   
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }
  
  return (
    <MyPosts postsData={props.store.getState().ProfilePage.postsData} addPostActionCreator={addPost} updateNewPostTextActionCreator={onPostChange}/>
  )
}

export default MyPostsContainer;