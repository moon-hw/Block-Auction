import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Responsive from "./Responsive";
import art from "../lib/art.png";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import LikedButton from "./LikedButton";
import { loginFunctions } from "../auth/AuthWatchers";
import InboxButton from "./inbox/InboxButton";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

//Responsive 컴포넌트 속성에 스타일 추가해서 새로운 컴포넌트 생성

const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; //자식 사이 여백 최대로 설정

  .mainicon {
    display: flex;
    align-items: center;
  }
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .logo_img {
    //그림 넣기
    display: flex;
    align-items: center;
  }

  .SearchBar {
    display: flex;
    align-items: center;
  }

  .RightSide {
    //찜목록 쪽지함 로그인 덩어리
    display: flex;
    align-items: center;
  }

  .liked {
    //찜 목록 바로가기
    display: flex;
    align-items: center;
    padding: 0.45rem;
  }

  .inbox {
    //쪽지함 바로가기
    display: flex;
    align-items: center;
    padding: 0.45rem;
  }

  .login {
    //로그인 바로가기
    display: flex;
    align-items: center;
    padding: 0.45rem;
  }
`;

//헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트임
const Spacer = styled.div`
  height: 6rem;
`;

const Header = ({ location }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      const userInfo = loginFunctions.getUserInfo();
      if (!userInfo) {
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/">
            <div className="mainicon">
              <div className="logo_img">
                <img src={art} height="70rem" alt="" />
              </div>

              <div className="logo">Block Auction</div>
            </div>
          </Link>
          <div className="SearchBar">
            <SearchBar />
          </div>
          <div className="RightSide">
            {isLogin ? (
              <>
                <Link to="/liked">
                  <div className="liked">
                    <LikedButton />
                  </div>
                </Link>

                <Link to="/inbox">
                  <div className="inbox">
                    <InboxButton />
                  </div>
                </Link>

                <Link to="/mypage">
                  <div className="login">
                    <LoginButton />
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <div className="liked">
                    <LikedButton />
                  </div>
                </Link>

                <Link to="/login">
                  <div className="inbox">
                    <InboxButton />
                  </div>
                </Link>

                <Link to="/login">
                  <div className="login">
                    <LoginButton />
                  </div>
                </Link>
              </>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default withRouter(Header);
