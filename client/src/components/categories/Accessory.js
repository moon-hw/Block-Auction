import React from "react";
import { withRouter, Link } from "react-router-dom";
import accessory from "../../lib/accessory.png";

const Accessory = ({ to, history, ...rest }) => {
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
      <Link to="/accessory">
        <img
          src={accessory}
          alt=""
          height="70rem"
          {...rest}
          onClick={onClick}
        />
        <div className="nameoflist">
          <p>악세사리</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Accessory);
