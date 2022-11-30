import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    const postsData = [
        {id: "1", message: "some text post 1", likeCounter: 1},
        {id: "2", message: "some text post 2", likeCounter: 21},
        {id: "3", message: "some text post 3", likeCounter: 3},
        {id: "4", message: "some text post 4", likeCounter: 6}
    ]

  return (
    <div className={s.myPost}>
      <p>My posts</p>
      <div className={s.myPost_form}>
        <textarea className={s.form_textarea}></textarea>
        <button className={s.form_btn}>Submit</button>
      </div>
      <div>
        <Post message={postsData[0].message} like={postsData[0].likeCounter}/>
        <Post message={postsData[1].message} like={postsData[1].likeCounter}/>
        <Post message={postsData[2].message} like={postsData[2].likeCounter}/>
        <Post message={postsData[3].message} like={postsData[3].likeCounter}/>
      </div>
    </div>
  );
};

export default MyPosts;
