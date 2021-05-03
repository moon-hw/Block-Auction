import React,{useEffect,useState} from 'react';
import { auctionApi } from '../../api';


function DetailPage(props){
  const [Auction,setAuction]=useState([]);
  const auctionId=props.match.params.auctionId;
  console.log(auctionId);
    
    useEffect(()=>{
        let body={
          auctionId:auctionId
        }

       getdata(body);
    },[])

    async function getdata(body){
      console.log(body);
      await auctionApi.getAuctiondetail(body).then(async (res) => {
        setAuction(res);
        
      });
    }

    const detailofauction=(Auction)=>{
      console.log(Auction);
      return <div>
        {Auction.title}
        {Auction.content}
        {Auction.startDate}
        {Auction.endDate}
        {Auction.startPrice}
        {Auction.state}
        {Auction.uploadtime}
        {Auction.view}
        {Auction.wish}
        {Auction.sellerId}
      </div>
    }
    return(
        <div>
            {detailofauction(Auction)}
        </div>
    );
};

export default DetailPage;