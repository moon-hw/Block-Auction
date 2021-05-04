import React from "react";
import styled from "styled-components";
import Palette from "../../lib/styles/Palette";

const Positioner = styled.div`
  
  
`;
const Contents = styled.div`
  background: ${Palette.gray[2]};
 
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
