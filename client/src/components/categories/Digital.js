import React from "react";
import { withRouter, Link } from "react-router-dom";
import electrical_appliances from "../../lib/electrical_appliances.png";

const Digital = ({ to, history, ...rest }) => {
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
      <Link to="/digital">
        <img
          src={electrical_appliances}
          alt=""
          height="70rem"
          {...rest}
          onClick={onClick}
        />
        <div className="nameoflist">
          <p>가전제품</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Digital);
