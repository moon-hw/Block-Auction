import React from 'react';
import MyPageMenu from '../../components/MyPageMenu';
import { CardList} from '../../components/list';

const LikedPage = () => {
    return (
        <div>
        <MyPageMenu/>
            <CardList>
            </CardList>
        </div>
    ); 
};

export default LikedPage;