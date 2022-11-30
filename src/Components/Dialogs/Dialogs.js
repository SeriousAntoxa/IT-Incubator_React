import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.block}>
        <ul className={s.dialogs}>
          <Dialog id="1" name="Valera" />
          <Dialog id="2" name="Nikita" />
          <Dialog id="3" name="Elena" />
          <Dialog id="4" name="Maria" />
        </ul>
        <div className={s.messages}>
          <Message message="Hello" />
          <Message message="Why are you?" />
          <Message message="Thanks, and you?" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
