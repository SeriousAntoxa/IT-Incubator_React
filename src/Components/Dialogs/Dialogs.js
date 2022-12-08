import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

  const dialogsData = props.state.dialogs.map((d) => {
    return (
      <li className={s.dialog}>
        <Dialog id={d.id} name={d.name} />
      </li>
    );
  });

  const messageData = props.state.messages.map((m) => {
    return <Message state={m} />;
  });

  const messageElement = React.createRef();
  
  const sendMessage = () => {
    props.sendMessage()
  };

  const updateTextMessage = () => {
    props.updateTextMessage(messageElement.current.value)
  };

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.block}>
        <ul className={s.dialogs}>{dialogsData}</ul>
        <div className={s.messages}>
          <div className={s.messages_chat}>{messageData}</div>
          <div className={s.messages_form}>
            <p>Отправить сообщение</p>
            <textarea
              onChange={updateTextMessage}
              ref={messageElement}
              className={s.form_textarea}
              value={props.state.newMessage}
            />
            <button onClick={sendMessage} className={s.form_btn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
