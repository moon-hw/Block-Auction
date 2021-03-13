import React from 'react';
import weeker from '../lib/weeker.png';
import sonjamam from '../lib/sonjamam.png';
import styled from 'styled-components';

const Top5ListBlock = styled.div`
        position: relative;
        width: 100%;

.parent{
    width: 90%;
    margin: 10px auto;
    display: flex;
}
.first {
    border: 1px solid red;
    flex:1;
    width:15%;
    float:left;
    box-sizing: border-box;
}

.second{
    border: 1px solid green;
    flex:1;
    width:15%;
    float:left;
    box-sizing: border-box;
}

.third{
    border: 1px solid blue;
    flex:1;
    width:15%;
    float:left;
    box-sizing: border-box;
}

.fourth{
    border: 1px solid blue;
    flex:1;
    width:15%;
    float:left;
    box-sizing: border-box;
}

.fifth{
    border: 1px solid blue;
    flex:1;
    width:15%;
    float:left;
    box-sizing: border-box;
}
        
`;

const Spacer = styled.div`
    padding-top: 5rem;
`;

const Top5 = () => {
    return (
        <>
        <Spacer>
        <h1>top 5 List</h1>
        <Top5ListBlock>
        <div className="Top5List">
        <div className="parents">
            <div className="first">
                <img src="weeker" alt=""/>    
            </div>

            <div className="second">
                <img src="weeker" alt=""/>    
            </div>

            <div className="third">
                <img src="weeker" alt=""/>    
            </div>

            <div className="fourth">
                <img src="weeker" alt=""/>    
            </div>

            <div className="fifth">
                <img src="weeker" alt=""/>    
            </div>

            </div>
        </div>
        </Top5ListBlock>
        </Spacer>

    </>
    );
};

export default Top5;