import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  if (!props.auth) return <Navigate to="/login" replace />;

  const dialogsData = props.dialogsPage.dialogs.map((d) => {
    return (
      <li className={s.dialog}>
        <Dialog id={d.id} name={d.name} />
      </li>
    );
  });

  const messageData = props.dialogsPage.messages.map((m) => {
    return <Message state={m} />;
  });

  const sendMessage = () => {
    props.sendMessage();
  };

  const updateTextMessage = (e) => {
    let value = e.target.value;
    props.updateTextMessage(value);
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
              className={s.form_textarea}
              value={props.dialogsPage.newMessage}
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
