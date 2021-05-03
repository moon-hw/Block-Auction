import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
`;

const AuthContent = ({ title, detail, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
    {detail}
  </div>
);

export default AuthContent;
