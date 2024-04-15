import { useState, useRef } from "react";
import style from "./TodoEditor.module.css";

const TodoEditor = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!title) {
      inputRef.current.focus();
      setContent("");
      return;
    }
    onCreate(title, content);
    setTitle("");
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.editor_wrapper}>
        <div>Title</div>
        <input
          ref={inputRef}
          value={title}
          onChange={onChangeTitle}
          onKeyDown={onKeyDown}
          placeholder="New Todo Title..."
          className={style.title}
        />
        <div>Content</div>
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="New Todo Content..."
          className={style.content}
        />
        <button className={style.submitBtn} onClick={onSubmit}>
          ✔️
        </button>
      </div>
    </div>
  );
};

export default TodoEditor;

// Add🖋️✏️✅
