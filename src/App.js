import { useReducer, useRef, useState, useEffect } from "react";
import Header from "./Component/Header";
import TodoEditor from "./Component/TodoEditor";
import TodoList from "./Component/TodoList";
import TodoCalendar from "./Component/TodoCalendar";
import TodoView from "./Component/TodoView";
import style from "./App.module.css";

const setDate = (date) => {
  const year = date.getFullYear().toString();
  const month =
    (date.getMonth() + 1).toString().length === 1
      ? 0 + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();
  const day =
    date.getDate().toString().length === 1
      ? 0 + date.getDate().toString()
      : date.getDate().toString();

  return year + "." + month + "." + day;
};

const mockTodo = [
  {
    id: 0,
    isDone: false,
    title: "Todo 작성하기",
    content: "타이틀은 필수로 작성해야합니다.",
    createdDate: setDate(new Date()),
  },
  {
    id: 1,
    isDone: false,
    title: "완료한 일정",
    content: "check box를 눌러 완료한 일정을 체크하세요.",
    createdDate: setDate(new Date()),
  },
  {
    id: 2,
    isDone: false,
    title: "잘못 작성한 일정 삭제",
    content: "삭제 버튼으로 일정을 지워보세요.",
    createdDate: setDate(new Date()),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "MODIFY": {
      return state.map((it) =>
        it.id === action.targetId
          ? { ...it, title: action.newTitle, content: action.newContent }
          : it
      );
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const [day, setDay] = useState(setDate(new Date()));
  const [showTodo, setshowTodo] = useState(todo);
  const idRef = useRef(3);

  const onCreate = (title, content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        title,
        content,
        isDone: false,
        createdDate: day,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  const onModify = (targetId, newTitle, newContent) => {
    dispatch({
      type: "MODIFY",
      targetId,
      newTitle,
      newContent,
    });
  };

  const handleDayChange = (date) => {
    setDay(setDate(date));
  };

  useEffect(() => {
    setshowTodo(todo.filter((it) => it.createdDate.includes(day)));
  }, [day, todo]);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <div className={style.part1}>
          <h4 className={style.text}>New ToDo</h4>
          <TodoEditor onCreate={onCreate} />
          <TodoCalendar setDate={setDate} onDayChange={handleDayChange} />
        </div>
        <div className={style.part2}>
          <TodoView todo={showTodo} />
          <TodoList
            todo={showTodo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onModify={onModify}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
