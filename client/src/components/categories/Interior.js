import React from "react";
import { withRouter, Link } from "react-router-dom";
import interior_design from "../../lib/interior_design.png";

const Interior = ({ to, history, ...rest }) => {
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
      <Link to="/interior">
        <img
          src={interior_design}
          alt=""
          height="70rem"
          {...rest}
          onClick={onClick}
        />
        <div className="nameoflist">
          <p>가구/인테리어</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Interior);
