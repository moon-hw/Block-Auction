import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CommonTable from '../table/CommonTable';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import {inboxdata} from '../../lib/api/TestData';
import MyPageMenu from '../MyPageMenu';

const InboxBlock = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  top: 43%;
  left: 55%;
  height: 100%;
  width: 50%;
  transform: translate(-50%, -50%);
`;
const InboxList = props => {
  const [ dataList, setDataList ] = useState([]);
 
  useEffect(() => {
    setDataList(inboxdata);
  }, [])

  return (
    <>
      
        <MyPageMenu/>
        <InboxBlock>
      <CommonTable headersName={['번호', '보낸사람', '내용', '날짜', '읽음확인']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.num }</CommonTableColumn>
                <CommonTableColumn>{ item.sender }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to ={`/inboxview/${item.num}`}>
                  { item.content }
                  </Link>
                  </CommonTableColumn>
                <CommonTableColumn>{ item.date }</CommonTableColumn>
                <CommonTableColumn>{ item.read }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      </InboxBlock>
    </>
  )
}
export default InboxList;