import style from "./TodoItem.module.css";
import { useState } from "react";

const TodoItem = ({
  id,
  title,
  content,
  isDone,
  createdDate,
  onUpdate,
  onDelete,
  onModify,
}) => {
  const [modify, setModify] = useState(false);
  const [changeTitle, setChangeTitle] = useState(title);
  const [chagneContent, setChangeContent] = useState(content);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  const onClickModify = () => {
    setModify(!modify);
  };

  const onChangeTitle = (e) => {
    setChangeTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setChangeContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (changeTitle !== "") {
      onModify(id, changeTitle, chagneContent);
      setModify(false);
    }
  };

  return (
    <div>
      {modify ? (
        <div className={style.wrapper}>
          <div className={style.checkbox}>📝</div>
          <div className={style.todo}>
            <input
              style={{
                borderBottom: changeTitle === "" ? "1px solid red" : "",
              }}
              className={style.changeTitle}
              value={changeTitle}
              onChange={onChangeTitle}
              onKeyDown={onKeyDown}
            />
            <input
              className={style.changeContent}
              value={chagneContent}
              onChange={onChangeContent}
              onKeyDown={onKeyDown}
            />
          </div>
          <div className={style.date}>{createdDate}</div>
          <div>
            <button className={style.modifybtn} onClick={onSubmit}>
              ✔️
            </button>
            <button className={style.deletebtn} onClick={onClickModify}>
              ❌
            </button>
          </div>
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.checkbox}>
            <input
              onChange={onChangeCheckbox}
              checked={isDone}
              type="checkbox"
            />
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
            <button className={style.modifybtn} onClick={onClickModify}>
              🔧
            </button>
            <button className={style.deletebtn} onClick={onClickDelete}>
              🗑️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
