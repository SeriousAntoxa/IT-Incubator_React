import s from "./Sidebar.module.css";
import SidebarFriends from "./SidebarFriends/SidebarFriends";

const Sidebar = (props) => {

  return (
    <aside className={s.nav_sidebar}>
      <div className={s.sidebar_title}>
        <p>Friends</p>
      </div>
      <div className={s.sidebar_block}>
        <SidebarFriends friends={props.state.friends} />
      </div>
    </aside>
  );
};

export default Sidebar;
