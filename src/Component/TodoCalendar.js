import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./TodoCalendar.css";

const TodoCalendar = ({ onDayChange }) => {
  const [value, onChange] = useState(new Date());

  //   console.log(setDate(value));

  return (
    <div className="wrapper">
      <Calendar
        onChange={onChange}
        onClickDay={onDayChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
      />
    </div>
  );
};

export default TodoCalendar;
