import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./MyPageMenu.css";
const MyPageMenu = () => {
  return (
    <div className="mypageMenu">
      <Link to="/mypage">
        <p className="mypage">
          <AiOutlineMenu /> 마이페이지
        </p>
        <p className="memberInfo">내 회원정보</p>
      </Link>
      <Link to="/inbox">
        <p className="inbox">쪽지함</p>
      </Link>

      <Link to="/myAuctionList">
        <p className="myAuctionList">내 경매목록</p>
      </Link>

      <Link to="/joinedList">
        <p className="joinedList">참여 경매 목록</p>
      </Link>

      <Link to="/liked">
        <p className="likedList">찜한 경매 목록</p>
      </Link>
    </div>
  );
};

export default MyPageMenu;
