// import { useState, useRef } from "react";
// import "./App.css";
// import Header from "./Component/Header";
// import TodoEditor from "./Component/TodoEditor";
// import TodoList from "./Component/TodoList";

// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React study",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "JS study",
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "playing piano",
//     createdDate: new Date().getTime(),
//   },
// ];

// function App() {
//   const [todo, setTodo] = useState(mockTodo);
//   const idRef = useRef(3);

//   const onCreate = (content) => {
//     const newItem = {
//       id: idRef.current,
//       content,
//       isDone: false,
//       createDate: new Date().getTime(),
//     };
//     setTodo([newItem, ...todo]);
//     idRef.current += 1;
//   };

//   const onUpdate = (targetId) => {
//     setTodo(
//       todo.map((it) =>
//         it.id === targetId ? { ...it, isDone: !it.isDone } : it
//       )
//     );
//   };

//   const onDelete = (targetId) => {
//     setTodo(todo.filter((it) => it.id !== targetId));
//   };

//   return (
//     <div className="App">
//       <Header />
//       <TodoEditor onCreate={onCreate} />
//       <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
//     </div>
//   );
// }

// export default App;

import { useReducer, useRef } from "react";
import "./App.css";
import Header from "./Component/Header";
import TodoEditor from "./Component/TodoEditor";
import TodoList from "./Component/TodoList";
import TodoView from "./Component/TodoView";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "새로운 Todo를 추가해보세요",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "체크 박스로 완료된 일을 표시해보세요",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "삭제 버튼으로 일정을 삭제해보세요",
    createdDate: new Date().getTime(),
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
      return console.log(state);
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
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

  // const onModify = (targetId) => {
  //   dispatch({
  //     type: "MODIFY",
  //     targetId,
  //   });
  // };

  return (
    <div className="App">
      <div className="part1">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoView todo={todo} />
      </div>
      <div className="part2">
        <TodoList
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          // onModify={onModify}
        />
      </div>
    </div>
  );
}

export default App;
