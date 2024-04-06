import "./TodoView.css";

const TodoView = ({ todo }) => {
  const analyzeTodo = () => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = analyzeTodo();

  return (
    <div className="TodoView">
      <h4>Todo View ❄️</h4>
      <div className="viewbox">
        <div>☀️ Total : {totalCount}</div>
        <div>🌕 Done : {doneCount}</div>
        <div>🌑 Not Done : {notDoneCount}</div>
      </div>
    </div>
  );
};

export default TodoView;
