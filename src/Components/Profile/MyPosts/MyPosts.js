import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPost}>
      <p>My posts</p>
      <div className={s.myPost_form}>
        <textarea className={s.form_textarea}></textarea>
        <button className={s.form_btn}>Submit</button>
      </div>
      <div>
        <Post message='some text post 1' like='4'/>
        <Post message='some text post 2' like='15'/>
        <Post message='some text post 3' like='9'/>
        <Post message='some text post 4' like='0'/>
      </div>
    </div>
  );
};

export default MyPosts;
