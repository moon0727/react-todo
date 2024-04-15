import style from "./TodoItem.module.css";

const TodoItem = ({
  id,
  title,
  content,
  isDone,
  createdDate,
  onUpdate,
  onDelete,
  //   onModify,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  //   const onClickModify = () => {
  //     onModify(id);
  //     console.log("수정 기능 추가 예정");
  //   };

  return (
    <div className={style.wrapper}>
      <div className={style.checkbox}>
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      {isDone ? (
        <div className={style.todo_done}>
          <div className={style.title}>{title}</div>
          <div className={style.content}>{content}</div>
        </div>
      ) : (
        <div className={style.todo}>
          <div className={style.title}>{title}</div>
          <div className={style.content}>{content}</div>
        </div>
      )}

      <div className={style.date}>{createdDate}</div>
      <div>
        <button className={style.modifybtn}>🔧</button>
        {/* <button onClick={onClickModify}>수정</button> */}
        <button className={style.deletebtn} onClick={onClickDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
