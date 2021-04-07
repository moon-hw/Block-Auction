import React from 'react';
import styled from 'styled-components';
import weeker from '../../lib/weeker.png';

const Positioner = styled.div`
    height: 500px;
    width: 800px;
    border: 1px solid red;
    position: absolute;
    top: 30%;
    left: 35%;
`;

const Row = styled.div`
    border: 1px solid pink;
    height: 150px;
    margin-bottom: 5px;
    display: flex;
`;

const Img = styled.div`
    height: 150px;
    width: 180px;
    border: 1px solid black;
    img{
        height: 140px;
        width: 170px;
    }
`;

const Content = styled.div`
    border: 1px solid black;
    height: 150px;
    width: 360px;
    display: inline;
    background: red;
`;

const Price = styled.div`
    border: 1px solid black;
    height: 150px;
    width: 100px;
    display: inline;

`;

const Buttons = styled.div`
    border: 1px solid black;
    height: 150px;
    width: 150px;
    display: inline;

`;

const Date = styled.div`
    border: 1px solid black;
    height: 150px;
    width: 300px;
    display: inline;

`;
const List = () => {
    return(
        <Positioner>
            <Row>
                <Img>
                <img src={weeker} alt=""/>
                </Img>

                <Content>
                    <h2>아이폰 12</h2>
                    <p>경매 상세 정보</p>
                    <span>시작일 : 2021.01.01</span>
                    <span>종료일 : 2021.01.01</span>
                </Content>

                <Price>
                    <p>경매 시작 가격 : 50000원</p>        
                </Price>

                <Buttons>
                    <p>경매상태 아이콘 자리 </p>
                    <button>수정</button>
                    <button>삭제</button>
                </Buttons>
            </Row>

            <Row>
                <Img>
                <img src={weeker} alt=""/>
                </Img>

                <Content>
                    <h2>아이폰 12</h2>
                    <p>경매 상세 정보</p>
                    <span>시작일 : 2021.01.01</span>
                    <span>종료일 : 2021.01.01</span>
                </Content>

                <Price>
                    <p>경매 시작 가격 : 50000원</p>        
                </Price>
                
                <Buttons>
                    <p>경매상태 아이콘 자리 </p>
                    <button>수정</button>
                    <button>삭제</button>
                </Buttons>
            </Row>

            <Row>
                <Img>
                <img src={weeker} alt=""/>
                </Img>

                <Content>
                    <h2>아이폰 12</h2>
                    <p>경매 상세 정보</p>
                    <span>시작일 : 2021.01.01</span>
                    <span>종료일 : 2021.01.01</span>
                </Content>

                <Price>
                    <p>경매 시작 가격 : 50000원</p>        
                </Price>
                
                <Buttons>
                    <p>경매상태 아이콘 자리 </p>
                    <button>수정</button>
                    <button>삭제</button>
                </Buttons>
            </Row>


        </Positioner>
    );
};

export default List;