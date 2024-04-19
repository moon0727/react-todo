import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./TodoCalendar.css";

const TodoCalendar = ({ onDayChange, todo }) => {
  const [value, onChange] = useState(new Date());

  //   console.log(setDate(value));

  return (
    <div className="wrapper">
      <Calendar
        onChange={onChange}
        onClickDay={onDayChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        tileContent={({ date, view }) => {
          const html = [];
          if (
            todo.find(
              (x) => x.createdDate === moment(date).format("YYYY.MM.DD")
            )
          ) {
            html.push(<div className="dot"></div>);
          }
          return <div key={todo.map((x) => x.id)}>{html}</div>;
        }}
      />
    </div>
  );
};

export default TodoCalendar;
