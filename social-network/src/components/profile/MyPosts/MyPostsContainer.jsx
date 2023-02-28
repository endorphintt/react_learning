import React from "react";
import Post from "./Post/Post";
import './MyPosts.scss'
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {
    return(
        <StoreContext.Consumer> 
            {
            (store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
            
                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                let Posts = store.getState().profilePage.posts.map(p => <Post key={p.id} likesCount={p.likesCount} post={p.post}/>)

                return <MyPosts newPostText={store.getState().profilePage.newPostText} onPostChange={onPostChange} addPost={addPost} Posts={Posts}/>
            }
        }
        </StoreContext.Consumer>       
    )
} 

export default MyPostsContainer;