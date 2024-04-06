import "./TodoItem.css";

const TodoItem = ({
  id,
  content,
  isDone,
  createDate,
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
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className={`title_col_${isDone ? "done" : ""}`}>{content}</div>
      <div className="date_col">{new Date().toLocaleDateString()}</div>
      <div className="btn_col">
        <button>수정</button>
        {/* <button onClick={onClickModify}>수정</button> */}
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
