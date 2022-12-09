const ADD_POST = "ADD-POST";
const UPDATE_TEXT_POST = "UPDATE-TEXT-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateTextPostActionCreator = (message) => ({
  type: UPDATE_TEXT_POST,
  postMessage: message,
});
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateTextMessageActionCreator = (message) => ({
  type: UPDATE_TEXT_MESSAGE,
  dialogsMessage: message,
});

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: "1", name: "Valera" },
        { id: "2", name: "Nikita" },
        { id: "3", name: "Elena" },
        { id: "4", name: "Maria" },
        { id: "5", name: "Andrei" },
      ],
      messages: [
        { id: "1", message: "Hello", who: 0 },
        { id: "1", message: "Hy", who: 1 },
        { id: "2", message: "Why are you?", who: 0 },
        { id: "3", message: "Thanks, and you?", who: 1 },
        { id: "3", message: "I'am finny!)", who: 0 },
        { id: "3", message: "Where are you from?", who: 0 },
      ],
      newMessage: "",
    },
    profilePage: {
      posts: [
        { id: "1", message: "some text post 1", likeCounter: 1 },
        { id: "2", message: "some text post 2", likeCounter: 21 },
        { id: "3", message: "some text post 3", likeCounter: 3 },
        { id: "4", message: "some text post 4", likeCounter: 6 },
      ],
      newPost: "",
    },
    sidebar: {
      friends: [
        { id: "1", name: "Elena" },
        { id: "2", name: "Maria" },
        { id: "3", name: "Andrei" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let postData = {
        id: "5",
        message: this._state.profilePage.newPost,
        likeCounter: 0,
      };
      this._state.profilePage.posts.push(postData);
      this._state.profilePage.newPost = "";
      this._renderTree(this._state);
    } else if (action.type === UPDATE_TEXT_POST) {
      this._state.profilePage.newPost = action.postMessage;
      this._renderTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let messageData = {
        id: "5",
        message: this._state.dialogsPage.newMessage,
        who: 1,
      };
      this._state.dialogsPage.messages.push(messageData);
      this._state.dialogsPage.newMessage = "";
      this._renderTree(this._state);
    } else if (action.type === UPDATE_TEXT_MESSAGE) {
      this._state.dialogsPage.newMessage = action.dialogsMessage;
      this._renderTree(this._state);
    }
  },

  subscribe(observe) {
    this._renderTree = observe;
  },

  _renderTree() {},
};

export default store;
