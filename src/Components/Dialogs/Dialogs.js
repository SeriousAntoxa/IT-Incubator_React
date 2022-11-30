import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  const dialogs = [
    { id: "1", name: "Valera" },
    { id: "2", name: "Nikita" },
    { id: "3", name: "Elena" },
    { id: "4", name: "Maria" },
    { id: "5", name: "Andrei" },
  ];

  const dialogsData = dialogs.map((d) => {
  return (
    <li className={s.dialog}>
      <Dialog id={d.id} name={d.name} />
    </li>
  )
});

  const messages = [
    { id: "1", message: "Hello" },
    { id: "2", message: "Why are you?" },
    { id: "3", message: "Thanks, and you?" },
  ];

  const messageData = messages.map((m) => <Message message={m.message} />);

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
