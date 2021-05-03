import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Palette from "../lib/styles/Palette";
//로그인 페이지 레이아웃
//화면 전체 채움
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${Palette.gray[2]};
  //내부 내용 중앙 정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//흰색 박스
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">BLOCK AUCTION</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
