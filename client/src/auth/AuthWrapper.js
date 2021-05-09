import React from "react";
import styled from "styled-components";
import Palette from "../lib/styles/Palette";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled(Link)`
  color: black;
  font-size: 2rem;
  letter-spacing: 2px;
  text-decoration: none;
`;

const ShadowedBox = styled.div`
  width: 500px;
  height: 500px;
`;
const LogoWrapper = styled.div`
  height: 5rem;
  display: flex;
  font-weight: bold;
  letter-spacing: 2px;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  background: ${Palette.gray[2]};
`;

const Contents = styled.div`
  background: ${Palette.gray[2]};
  padding: 2rem;
  height: auto;
`;

const AuthWrapper = ({ children }) => (
  <Positioner>
    <ShadowedBox>
      <LogoWrapper>
        <Logo to="/">Block Auction</Logo>
      </LogoWrapper>
      <Contents>{children}</Contents>
    </ShadowedBox>
  </Positioner>
);

export default AuthWrapper;
