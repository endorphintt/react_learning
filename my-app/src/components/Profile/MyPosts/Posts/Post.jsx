import React from "react";
import classes from './Post.module.scss'

const Post = (props) => {
    return(
        <div className={classes.post__container}>
            <div className={classes.post__content}>
                {props.message}
            </div>
        </div>
    )
}

export default Post;
