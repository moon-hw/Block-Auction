
import React from 'react';
import "./DetailPost.css";
import DetailWrapper from "./DetailWrapper";
import team from "../../lib/team.png";



const DetailPost = (props) => {
 
  return (
    <div>
      <DetailWrapper>
        <div className="auction_img">
          <img src={team} height="400px" alt=""></img>
        </div>
        <div className="auction_titme">{props.title}</div>
      </DetailWrapper>

      <DetailWrapper>{props.content}</DetailWrapper>
      <DetailWrapper>{props.startDate}</DetailWrapper>
      <DetailWrapper>{props.endDate}</DetailWrapper>
      <DetailWrapper>{props.startPrice}</DetailWrapper>
      <DetailWrapper>{props.state}</DetailWrapper>
      <DetailWrapper>{props.uploadtime}</DetailWrapper>
      <DetailWrapper>{props.view}</DetailWrapper>
      <DetailWrapper>{props.wish}</DetailWrapper>
      <DetailWrapper>{props.sellerNickname}</DetailWrapper>
    </div>
  );
};

export default DetailPost;
