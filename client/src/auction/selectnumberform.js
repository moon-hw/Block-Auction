import React, { useState } from "react";

function HourForm(props) {
  function range(start, end) {
    let array = [];
    for (let i = start; i < end; ++i) {
      array.push({ key: i, value: i });
    }
    return array;
  }

  const hours = range(0, 24);

  return (
    <div>
      <select onChange={props.onChange} value={props.value}>
        {hours.map((item) => (
          <option placeholder="시간" key={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
export default HourForm;
