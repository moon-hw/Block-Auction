import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import { senderdata } from "../../lib/api/Senderdata";
import InboxMenu from "./InboxMenu";
import MyPageMenu from "../MyPageMenu";

const SenderInboxBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 43%;
  left: 55%;
  height: 100%;
  width: 50%;
  transform: translate(-50%, -50%);
`;

const SenderInboxList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(senderdata);
  }, []);
  return (
    <>
      <MyPageMenu />
      <InboxMenu />
      <SenderInboxBlock>
        <CommonTable
          headersName={["번호", "받는사람", "내용", "날짜", "읽음확인"]}
        >
          {dataList
            ? dataList.map((item, index) => {
                return (
                  <CommonTableRow key={index}>
                    <CommonTableColumn>{item.num}</CommonTableColumn>
                    <CommonTableColumn>{item.receiver}</CommonTableColumn>
                    <CommonTableColumn>
                      <Link to={`/senderInboxview/${item.num}`}>
                        {item.content}
                      </Link>
                    </CommonTableColumn>
                    <CommonTableColumn>{item.date}</CommonTableColumn>
                    <CommonTableColumn>{item.read}</CommonTableColumn>
                  </CommonTableRow>
                );
              })
            : ""}
        </CommonTable>
      </SenderInboxBlock>
    </>
  );
};
export default SenderInboxList;
