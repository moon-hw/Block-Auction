import React,{useEffect,useState} from 'react';
import { auctionApi } from "../../api";
import List from '../../components/list/List';


function AllofList () {
  const [Products,setProducts]=useState([]);

  useEffect(()=>{

    auctionApi.getAuctionList()
              .then(response=>{
                if(response.data.success){
                  
                  setProducts(response.data.list);
                }else{
                  alert("로딩실패")
                }
              })
  },[])
    
  const renderLists=Products.map((product,index)=>{
    
    console.log(product);
    return <List title={product.title}
                 info={product.info}
                 startDate={product.startDate}
                 endDate={product.endDate}
                 startprice={product.startprice}
                 key={index}>
            </List>
      
   
  });

    return(
        <div>
            <h1>카테고리 전체보기 리스트 화면</h1>

            {renderLists}
        </div>
    );
};

export default AllofList;