import style from "./TodoView.module.css";

const TodoView = ({ todo, setState, state }) => {
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
    <div className={style.wrapper}>
      <div
        onClick={() => setState("total")}
        style={{ borderBottom: state === "total" ? "2px solid #5979d3" : "" }}
      >
        ☀️ Total : {totalCount}
      </div>
      <div
        onClick={() => setState("done")}
        style={{ borderBottom: state === "done" ? "2px solid #5979d3" : "" }}
      >
        🌕 Done : {doneCount}
      </div>
      <div
        onClick={() => setState("notDone")}
        style={{ borderBottom: state === "notDone" ? "2px solid #5979d3" : "" }}
      >
        🌑 Not Done : {notDoneCount}
      </div>
    </div>
  );
};

export default TodoView;
