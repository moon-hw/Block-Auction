import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatepicker(props) {
  const [date, setDate] = useState(new Date());

  const datehandleChange = (time, event) => {
    setDate(time);
    props.onChange(date);
  };

  return (
    <div>
      {props.title}
      <DatePicker
        value={date}
        selected={date}
        onChange={datehandleChange}
        showTimeSelect
        dateFormat="yyyy/MM/dd EE hh:mm"
      />
      <br />
    </div>
  );
}
export default ReactDatepicker;
