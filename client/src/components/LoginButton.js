import React from "react";
import { withRouter } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const LoginButton = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return <BsFillPersonFill size="26" {...rest} onClick={onClick} />;
};
export default withRouter(LoginButton);
