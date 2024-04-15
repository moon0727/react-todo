import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>📝TODOLIST</h1>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
