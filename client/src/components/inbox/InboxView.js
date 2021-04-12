import React, { useEffect, useState } from "react";
import { getInboxByNum } from "../../lib/api/TestData";
import MyPageMenu from "../MyPageMenu";
import "./InboxView.css";

const InboxView = ({ history, location, match }) => {
  const [data, setData] = useState({});

  const { num } = match.params;

  useEffect(() => {
    setData(getInboxByNum(num));
  }, [num]);

  return (
    <>
      <MyPageMenu />
      <div className="InboxViewBlock">
        <h2 className="InboxViewRow">쪽지</h2>
        {data ? (
          <>
            <div className="InboxViewRow">
              <label>쪽지 번호</label>
              <label>{data.num}</label>
            </div>
            <div className="InboxViewRow">
              <label>보낸이</label>
              <label>{data.sender}</label>
            </div>
            <div className="InboxViewRow">
              <label>보낸 날짜</label>
              <label>{data.date}</label>
            </div>
            <div className="InboxViewRow">
              <label>읽음확인</label>
              <label>{data.read}</label>
            </div>
            <div className="InboxViewRow">
              <label>내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          "해당 쪽지를 찾을 수 없습니다."
        )}
        <button className="backToinbox" onClick={() => history.goBack()}>
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default InboxView;
