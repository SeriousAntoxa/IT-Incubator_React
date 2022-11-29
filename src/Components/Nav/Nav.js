import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.list_item}>
            <a href="/profile">Profile</a>
        </li>
        <li className={s.list_item}>
            <a href="/dialogs">Message</a>
        </li>
        <li className={s.list_item}>
            <a href="#">News</a>
        </li>
        <li className={s.list_item}>
            <a href="#">Music</a>
        </li>
        <li className={s.list_item}>
            <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
