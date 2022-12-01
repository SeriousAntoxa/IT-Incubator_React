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

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.block}>
        <ul className={s.dialogs}>{dialogsData}</ul>
        <div className={s.messages}>{messageData}</div>
      </div>
    </div>
  );
};

export default Dialogs;
