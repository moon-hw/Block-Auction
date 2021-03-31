import React from 'react';
import InboxList from '../../components/inbox/InboxList';
import InboxMenu from '../../components/inbox/InboxMenu';


const InboxPage = props => {
    return (
        <>
        <InboxMenu/>
        <InboxList/>  
        </>
);
};

export default InboxPage;