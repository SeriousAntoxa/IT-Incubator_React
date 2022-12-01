import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElement = React.createRef()

const addPost = () => {
    props.addPost(postElement.current.value)
}

  const postsData = props.posts.map(
    (m) => <Post message={m.message} like={m.likeCounter}/>
  );

  return (
    <div className={s.myPost}>
      <p>My posts</p>
      <div className={s.myPost_form}>
        <textarea ref={ postElement } className={s.form_textarea}></textarea>
        <button onClick={ addPost } className={s.form_btn}>Submit</button>
      </div>
      <div>
        { postsData }
      </div>
    </div>
  );
};

export default MyPosts;
