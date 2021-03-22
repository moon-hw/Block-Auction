import React from 'react';
import {withRouter} from 'react-router-dom';
import { BsPlusCircleFill} from 'react-icons/bs';
import styled from 'styled-components';

const Plus = styled.div`
    justify-content: space-around;
    display: flex;
`;

const Spacer = styled.div`
    padding-top: 3rem;
    padding-left: 60rem;
    padding-bottom: 3rem;
`;

const PlusButton = ({ to, history, ...rest }) => {
    const onClick = e => {
        if( to ){
            history.push(to);
        }

        if( rest.onClick) {
            rest.onClick(e);
        }
    };

    return (
        <Spacer>
            <Plus>
                <BsPlusCircleFill size="50" {...rest} onClick={onClick}/>
            </Plus>
        </Spacer>
    )
}
export default withRouter(PlusButton);