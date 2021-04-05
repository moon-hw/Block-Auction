import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function range(start, end) {
  let array = [];
  for (let i = start; i < end; ++i) {
    array.push({key:i, value:i});
  }
  return array;
}

const hours = range(0,24);

export default function ReactDatepicker(props) {
  const [basicDate, setBasicDate] = useState(new Date());
  const [hour, setHour]=useState(1);
  const hourchangeHandler=(event) =>{
    setHour(event.currentTarget.value)
  }
  
  console.log(hour);
  return (
    <div>
        {props.title}


        <DatePicker
          selected={basicDate}
          onChange={(date) => setBasicDate(date)}
        />
      <br/>
      <select onChange={hourchangeHandler}>
        {hours.map(item =>(
        <option  placeholder="시간" key={item.key}>{item.value}</option>
        ))}
        </select>시
    </div>
  );
}