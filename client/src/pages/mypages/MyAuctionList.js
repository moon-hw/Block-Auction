import React from 'react';
import MyPageMenu from '../../components/MyPageMenu';
import { List } from '../../components/list';
const MyAuctionList = () => {
    return(
        <div>
        <MyPageMenu/>
        내 경매 목록
        <List></List>
        </div>
    );
};

export default MyAuctionList