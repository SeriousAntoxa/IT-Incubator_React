import { connect } from "react-redux";
import {
  sendMessage,
  updateTextMessage,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

/*let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      let action = sendMessageActionCreator();
      dispatch(action);
    },
    updateTextMessage: (text) => {
      let action = updateTextMessageActionCreator(text);
      dispatch(action);
    },
  };
};*/

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateTextMessage})(Dialogs);

export default DialogsContainer;
