import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateTextPostActionCreator} from './../../../redux/state'

const MyPosts = (props) => {

  const postElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  const updateTextPost = () => {
    let value = postElement.current.value
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
          ref={postElement}
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
