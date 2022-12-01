import s from "./Message.module.css";

const Message = (props) => {
  console.log(props);

  return (
    <div
      className={`${s.message} ${!props.state.who ? s.myMessage : s.otherMessage}`}
    >
      {props.state.message}
    </div>
  );
};

export default Message;
