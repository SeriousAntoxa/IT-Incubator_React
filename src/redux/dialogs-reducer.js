const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

export let sendMessage = () => ({ type: SEND_MESSAGE });
export let updateTextMessage = (message) => ({
  type: UPDATE_TEXT_MESSAGE,
  dialogsMessage: message,
});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let messageData = {
        id: "5",
        message: state.newMessage,
        who: 1,
      };
      return {
        ...state,
        messages: [...state.messages, messageData],
        newMessage: "",
      };
    }
    case UPDATE_TEXT_MESSAGE: {
      return {
        ...state,
        newMessage: action.dialogsMessage,
      };
    }
    default:
      return { ...state };
  }
};

export default dialogsReducer;
