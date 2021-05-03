import React from "react";
import styled from "styled-components";
import Palette from "../../lib/styles/Palette";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contents = styled.div`
  background: ${Palette.gray[2]};
  width: 50rem;
  height: auto;
`;

const DetailWrapper = ({ children }) => {
  return (
    <Positioner>
      <Contents>{children}</Contents>
    </Positioner>
  );
};

export default DetailWrapper;
