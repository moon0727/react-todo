import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";

const TodoList = ({ todo, onUpdate, onDelete, onModify }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.TodoList_wrapper}>
        <h4>Todo List ⭐</h4>
        <div className={style.list}>
          {todo.map((it) => (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
              // onModify={onModify}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
