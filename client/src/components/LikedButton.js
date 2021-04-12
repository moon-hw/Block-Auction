import React from "react";
import { withRouter } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

const LoginButton = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return <BsHeartFill size="24" {...rest} onClick={onClick} />;
};
export default withRouter(LoginButton);
