import React from "react";
import { withRouter, Link } from "react-router-dom";
import clothing from "../../lib/clothing.png";

const Clothes = ({ to, history, ...rest }) => {
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
      <Link to="/clothes">
        <img src={clothing} alt="" height="70rem" {...rest} onClick={onClick} />
        <div className="nameoflist">
          <p>의류</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Clothes);
