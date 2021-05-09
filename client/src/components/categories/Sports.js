import React from "react";
import { withRouter, Link } from "react-router-dom";
import sports from "../../lib/sports.png";

const Sports = ({ to, history, ...rest }) => {
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
      <Link to="/sports">
        <img src={sports} alt="" height="70rem" {...rest} onClick={onClick} />
        <div className="nameoflist">
          <p>레저/스포츠</p>
        </div>
      </Link>
    </div>
  );
};
export default withRouter(Sports);
