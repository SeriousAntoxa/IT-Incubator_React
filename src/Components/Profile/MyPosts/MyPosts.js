import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const addPost = () => {
    props.addPost();
  };

  const updateTextPost = (e) => {
    let value = e.target.value;
    props.updateTextPost(value);
  };

  const postsData = props.profilePage.posts.map((m) => (
    <Post message={m.message} like={m.likeCounter} />
  ));

  return (
    <div className={s.myPost}>
      <p>My posts</p>
      <div className={s.myPost_form}>
        <textarea
          onChange={updateTextPost}
          className={s.form_textarea}
          value={props.profilePage.newPost}
        />
        <button onClick={addPost} className={s.form_btn}>
          Submit
        </button>
      </div>
      <div>{postsData}</div>
    </div>
  );
};

export default MyPosts;
