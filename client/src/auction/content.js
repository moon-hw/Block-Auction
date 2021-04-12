import React from "react";
function content(props) {
  return (
    <div>
      {" "}
      {props.title}
      <input
        type={props.type}
        title={props.title}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default content;
