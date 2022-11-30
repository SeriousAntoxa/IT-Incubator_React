import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {

    const dialogsData = [
        {id: "1", name: "Valera"},
        {id: "2", name: "Nikita"},
        {id: "3", name: "Elena"},
        {id: "4", name: "Maria"},
        {id: "5", name: "Andrei"}
    ]

    const messageData = [
        {id: "1", message: "Hello"},
        {id: "2", message: "Why are you?"},
        {id: "3", message: "Thanks, and you?"}
    ]

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.block}>
        <ul className={s.dialogs}>
          <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
          <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
          <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
          <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
          <Dialog id={dialogsData[4].id} name={dialogsData[4].name} />
        </ul>
        <div className={s.messages}>
          <Message message={messageData[0].message} />
          <Message message={messageData[1].message} />
          <Message message={messageData[2].message} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
