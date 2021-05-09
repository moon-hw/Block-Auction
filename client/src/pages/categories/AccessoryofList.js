import React,{useEffect,useState} from 'react';
import { auctionApi } from "../../api";
import List from '../../components/list/List';

function AccessoryofList () {
  const [Products,setProducts]=useState([]);
  const [Point,setPoint]=useState(3);
  
  useEffect(()=>{
    
    let body={
      skip:Point,
      cate:"ACC"
    }
    getProduct(body)
      
    
  },[])

  async function getProduct(body){
    
    await auctionApi.getAuctionList(body).then(async (res) => {
      console.log(res);
      setProducts(res);
      let number=Point+3;
      setPoint(number);
    });
    
  }
  
  const renderLists=(Products.map((product,index)=>{
   
    
    return <a href={`/auction/${product._id}`} ><List title={product.title}
                 info={product.info}
                 startDate={product.startDate}
                 endDate={product.endDate}
                 startprice={product.startPrice}
                 key={index}>
            </List></a>
      
   
  }));

  const loadmoreHandler= () =>{
    let body={
      skip:Point,
      cate:"ACC"
    }
    console.log(Products);
    getProduct(body);
    
  }

    return(
        <div>
            <h1>카테고리 전체보기 리스트 화면</h1>
            
            {renderLists}
            
            
            <button onClick={loadmoreHandler}>더보기</button>
            
        </div>
    );
};

export default AccessoryofList;

