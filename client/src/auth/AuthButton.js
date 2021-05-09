import React from "react";
import styled from "styled-components";
import Palette from "../lib/styles/Palette";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${Palette.violet[4]};
  color: black;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${Palette.gray[5]};
  }

  &:active {
    background: ${Palette.gray[7]};
  }
`;

const AuthButton = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default AuthButton;
