import { profileAPI } from "./../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
  posts: [
    { id: "1", message: "some text post 1", likeCounter: 1 },
    { id: "2", message: "some text post 2", likeCounter: 21 },
    { id: "3", message: "some text post 3", likeCounter: 3 },
    { id: "4", message: "some text post 4", likeCounter: 6 },
  ],
  newPost: "",
  profile: null,
  status: "don't status",
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
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return { ...state };
  }
};

export default profileReducer;

export let addPost = () => ({ type: ADD_POST });

export let updateTextPost = (message) => ({
  type: UPDATE_TEXT_POST,
  postMessage: message,
});

export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export let setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getUser = (userId) => {
  return (dispatch) => {
    profileAPI.getUser(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status);
    dispatch(setUserStatus(status));
  };
};
