import React from 'react';
import classes from './MyPosts.module.scss'
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
        <div className={classes.title}></div>
        <div className={classes.form}>
            <input type="textarea" />
            <button>Send</button>
        </div>
        <div className={classes.posts}>
            <Post message="It's my second post" />
            <Post message="It's my first post" />            
        </div>
    </div>
  )
}

export default MyPosts;