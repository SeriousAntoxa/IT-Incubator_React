import {
  addPost,
<<<<<<< HEAD
  updateTextPost,
=======
>>>>>>> feature
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

<<<<<<< HEAD
/*let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    updateTextPost: (text) => {
      let action = updateTextPostActionCreator(text);
      dispatch(action);
    },
  };
};*/

const MyPostsContainer = connect(mapStateToProps, {addPost, updateTextPost})(MyPosts);
=======
const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
>>>>>>> feature

export default MyPostsContainer;
