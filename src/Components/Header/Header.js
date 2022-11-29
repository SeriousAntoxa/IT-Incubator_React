import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_logo}>
        <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"></img>
      </div>
    </header>
  );
};

export default Header;
