import '../MyPosts.scss'

const Post = (props) => {
    return(
        <div className="post">
            <span>{props.post}</span>
            <span>{props.likesCount}</span>
        </div>
    )
}

export default Post;