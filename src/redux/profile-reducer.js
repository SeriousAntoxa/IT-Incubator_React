const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

export let addPost = () => ({ type: ADD_POST });
export let updateTextPost = (message) => ({
  type: UPDATE_TEXT_POST,
  postMessage: message,
});
export let setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
  });

let initialState = {
  posts: [
    { id: "1", message: "some text post 1", likeCounter: 1 },
    { id: "2", message: "some text post 2", likeCounter: 21 },
    { id: "3", message: "some text post 3", likeCounter: 3 },
    { id: "4", message: "some text post 4", likeCounter: 6 },
  ],
  newPost: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let postData = {
        id: "5",
        message: state.newPost,
        likeCounter: 0,
      };
      return {
        ...state,
        posts: [...state.posts, postData],
        newPost: "",
      };
    }
    case UPDATE_TEXT_POST: {
      return {
        ...state,
        newPost: action.postMessage,
      };
    }
    case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile,
        };
      }
    default:
      return { ...state };
  }
};

export default profileReducer;
