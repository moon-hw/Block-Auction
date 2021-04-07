import React from 'react';
import styled from 'styled-components';
import weeker from '../../lib/weeker.png';


const Positioner = styled.div`
    position: absolute;
    top: 75%;
    left: 50%;
    width: 35%;
    height:100%;
    transform: translate(-50%, -50%);
`;

const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid red;
    width: 900px;
    height: 500px;

`;

const Card = styled.div`
    border: 1px solid pink;
    border-radius: 5px;
    height: 250px;
    width: 200px;
    margin-bottom: 10px;
`;

const Img = styled.div`
    height: 160px;
    width: 200px;
    border: 1px solid black;
    img{
        height: 150px;
        width: 180px;
    }
`;

const Title = styled.div`
    font-size: 14px;
    opacity: .8;
`;

const AuctionPrice =styled.div`
    font-size: 14px;
    opacity: 0.8;
    
`;

const StartDate = styled.div`
    font-size: 14px;
    opacity: .8;
`;

const Button = styled.div`
display: inline;
    transition: .5s ease;
    border: 1px solid black;
    background: transparent;
    color: pink;
    width: 40px;
    height: 30px;
    margin-top: 2px;
`;



const CardList = () => {
    return(
    <Positioner>
        <h3>찜목록</h3>
        <ItemList>
            <Card>
                <Img> <img src={weeker} alt=""/></Img>
                <Title>화제의 작품</Title>
                <AuctionPrice>
                    시작가: 10000원
                </AuctionPrice>
                <StartDate>경매시작일:2021.3.27</StartDate>
            </Card>
            <Card>
                <Img> <img src={weeker} alt=""/></Img>
                <Title>화제의 작품</Title>
                <AuctionPrice>
                    시작가: 10000원
                </AuctionPrice>
                <StartDate>경매시작일:2021.3.27</StartDate>
            </Card>
            <Card>
                <Img> <img src={weeker} alt=""/></Img>
                <Title>화제의 작품</Title>
                <AuctionPrice>
                    시작가: 10000원
                </AuctionPrice>
                <StartDate>경매시작일:2021.3.27</StartDate>
            </Card>
            <Card>
                <Img> <img src={weeker} alt=""/></Img>
                <Title>화제의 작품</Title>
                <AuctionPrice>
                    시작가: 10000원
                </AuctionPrice>
                <StartDate>경매시작일:2021.3.27</StartDate>
                <Button>
                    <button>임시버튼</button>
                    <button>좋아요</button>
                </Button>


            </Card>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ItemList>
    </Positioner>
    );
};

export default CardList;