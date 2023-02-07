<<<<<<< HEAD
import { connect } from "react-redux";
import {
  sendMessage,
  updateTextMessage,
} from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
=======
import { connect } from "react-redux"
import { sendMessage } from "./../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
>>>>>>> feature

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth.isAuth,
    }
}

/*let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      let action = sendMessageActionCreator();
      dispatch(action);
    }
  };
};*/

<<<<<<< HEAD
const DialogsContainer = connect(mapStateToProps, {sendMessage, updateTextMessage})(Dialogs);
=======
const DialogsContainer = connect(mapStateToProps, { sendMessage })(Dialogs)
>>>>>>> feature

export default DialogsContainer
