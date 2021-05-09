
import DetailPost from "../../auction/detail/DetailPost";
import React,{useEffect,useState} from 'react';
import { auctionApi } from '../../api';
import { userApi } from '../../api';


 function DetailPage(props){
    const [Auction,setAuction]=useState([]);
    const auctionId=props.match.params.auctionId;
    const [nickname, setnickname] = useState("");

    useEffect(()=>{
         let body={
           auctionId:auctionId
        }
        getdata(body);
     },[])

    async function getdata(body){
      await auctionApi.getAuctiondetail(body)
        .then(async (res) => {
            setAuction(res);
            getNicknamebyId(res.sellerId)
            console.log(res.sellerId);
          });
     }

    async function getNicknamebyId(uid){
      console.log(uid)
      await userApi.getUserData({ uid: uid })
          .then((data) =>{
              console.log(data)
              setnickname(data.nickName);
              console.log(nickname);
          })
          .catch((err) => console.log(err));
      }
     const detailofauction=(Auction)=>{
       
       return <DetailPost
         title={Auction.title}
         content= {Auction.content}
         startDate={Auction.startDate}
         endDate={Auction.endDate}
         startPrice={Auction.startPrice}
         state={Auction.state}
         uploadtime={Auction.uploadtime}
         view={Auction.view}
         wish={Auction.wish}
         sellerNickname={nickname}>
         </DetailPost>
     }
     return(
         <div>
             {detailofauction(Auction)}
         </div>
    );
 };

 export default DetailPage;
