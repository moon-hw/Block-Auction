import React from "react";
import "./DetailPost.css";
import DetailWrapper from "./DetailWrapper";
import team from "../../lib/team.png";
const DetailPost = () => {
  return (
    <div>
      <DetailWrapper>
        <div className="auction_img">
          <img src={team} height="400px" alt=""></img>
        </div>
        <div className="auction_titme">화제의 김미연 작가 입봉작</div>
      </DetailWrapper>

      <DetailWrapper>상세설명</DetailWrapper>
    </div>
  );
};

export default DetailPost;
