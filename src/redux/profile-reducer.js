const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateTextPostActionCreator = (message) => ({
  type: UPDATE_TEXT_POST,
  postMessage: message,
});

let initialState = {
    posts: [
        { id: "1", message: "some text post 1", likeCounter: 1 },
        { id: "2", message: "some text post 2", likeCounter: 21 },
        { id: "3", message: "some text post 3", likeCounter: 3 },
        { id: "4", message: "some text post 4", likeCounter: 6 },
      ],
      newPost: "",
}

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
        newPost: ""
      };
    }
    case UPDATE_TEXT_POST: {
      return {
        ...state,
        newPost: action.postMessage
      };
    }
    default:
      return {...state};
  }
};

export default profileReducer;
