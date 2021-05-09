import React from "react";
import { Link } from "react-router-dom";
import "./InboxMenu.css";

const InboxMenu = () => {
  return (
    <div className="inboxMenu">
      <Link to="/inbox">
        <button className="receiverInbox">받은 쪽지함</button>
      </Link>
      <Link to="/senderInbox">
        <button className="senderInbox">보낸 쪽지함</button>
      </Link>
    </div>
  );
};

export default InboxMenu;
