import React from "react";
import styled from "styled-components";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
  width: 400px;
  height: 400px;
`;

const Contents = styled.div`
  padding: 2rem;
  height: auto;
`;

const MyPageWrapper = ({ children }) => {
  return (
    <Positioner>
      <ShadowedBox>
        <Contents>{children}</Contents>
      </ShadowedBox>
    </Positioner>
  );
};

export default MyPageWrapper;
