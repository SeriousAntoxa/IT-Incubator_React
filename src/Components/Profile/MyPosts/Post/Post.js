import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post_image}>
                <img
                    src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                    alt="log"
                ></img>
            </div>
            <div className={s.post_text}>
                <p>{props.message}</p>
            </div>
            <div className={s.post_liked}>
                <p>
                    like:<span>{props.like}</span>
                </p>{" "}
            </div>
        </div>
    )
}

export default Post
