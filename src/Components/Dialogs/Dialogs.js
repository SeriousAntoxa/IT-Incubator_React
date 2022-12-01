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
    alert(messageElement.current.value);
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
              ref={messageElement}
              className={s.form_textarea}
            ></textarea>
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
