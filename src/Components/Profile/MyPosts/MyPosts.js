import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import MyPostFormRedux from "./MyPostForm/MyPostForm"

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.newPost)
    }

    const postsData = props.profilePage.posts.map((m, i) => (
        <Post key={i} message={m.message} like={m.likeCounter} />
    ))

    return (
        <div className={s.myPost}>
            <p>My posts</p>
            <MyPostFormRedux onSubmit={onSubmit} />
            <div>{postsData}</div>
        </div>
    )
}

export default MyPosts
