import s from "./SidebarFriends.module.css";
import Friend from './Friend/Friend'

const SidebarFriends = (props) => {

    const friendsData = props.friends.map(f=><Friend name={f.name}/>)

  return (
    <div className={s.friends}>
        { friendsData }
    </div>
  );
};

export default SidebarFriends;
