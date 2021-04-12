import React from "react";
import { withRouter, Link } from "react-router-dom";
import things from "../../lib/things.png";

const Thing = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <div>
      <Link to="/thing">
        <img src={things} alt="" height="70rem" {...rest} onClick={onClick} />
        <div className="nameoflist">
          <p>생활용품</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Thing);
