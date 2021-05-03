import React from "react";
import { withRouter, Link } from "react-router-dom";
import beauty from "../../lib/beauty.png";

const Beauty = ({ to, history, ...rest }) => {
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
      <Link to="/beauty">
        <img src={beauty} alt="" height="70rem" {...rest} onClick={onClick} />
        <div className="nameoflist">
          <p>뷰티/미용</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Beauty);
