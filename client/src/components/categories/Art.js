import React from "react";
import { withRouter, Link } from "react-router-dom";
import art_design from "../../lib/art_design.png";

const Art = ({ to, history, ...rest }) => {
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
      <Link to="/art">
        <img
          src={art_design}
          alt=""
          height="70rem"
          {...rest}
          onClick={onClick}
        />
        <div className="nameoflist">
          <p>예술작품</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Art);
