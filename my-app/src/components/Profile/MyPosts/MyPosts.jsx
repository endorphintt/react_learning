import React from 'react';
import classes from './MyPosts.module.scss'
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }
  
  return (
    <div className={classes.posts}>
        <div className={classes.title}></div>
        <div className={classes.form}>
            <input ref={newPostElement} onChange={ onPostChange } type="textarea" />
            <button onClick={ addPost }>Send</button>
        </div>
        <div className={classes.posts}>
            {postsElements}           
        </div>
    </div>
  )
}

export default MyPosts;