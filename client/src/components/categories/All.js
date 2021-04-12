import React from "react";
import { withRouter, Link } from "react-router-dom";
import all from "../../lib/all.png";

const All = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <Link to="/all">
      <div>
        <img src={all} alt="" height="70rem" {...rest} onClick={onClick} />
        <div className="nameoflist">
          <p>전체보기</p>
        </div>
      </div>
    </Link>
  );
};
export default withRouter(All);
