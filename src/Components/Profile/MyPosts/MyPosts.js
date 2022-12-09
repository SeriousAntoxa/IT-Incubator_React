import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateTextPostActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const updateTextPost = (e) => {
    let value = e.target.value
    props.dispatch(updateTextPostActionCreator(value))
  };

  const postsData = props.state.posts.map((m) => (
    <Post message={m.message} like={m.likeCounter} />
  ));

  return (
    <div className={s.myPost}>
      <p>My posts</p>
      <div className={s.myPost_form}>
        <textarea
          onChange={updateTextPost}
          className={s.form_textarea}
          value={props.state.newPost}
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
