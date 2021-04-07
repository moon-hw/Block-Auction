import React,{useState} from 'react';
import { auctionApi } from "../../api";
import Content from '../../auction/content'
import Fileupload from '../../auction/Fileupload'
import Dateform from '../../auction/dateform';
//import postAuction from '../../auction/postAuction.css';



function PostPage ({history}){
  //상품이미지, 증명서 - 이미지 저장 
  const [Image,setImage]=useState()
  

  //상품이름, 상세 설명,시작가, 종료가, 판매자 정보 -text 저장
  const [Name,setName]=useState('');
  const [Explain,setExplain]=useState('');
  const [StartPrice,setStartPrice]=useState(0);
  const [EndPrice,setEndPrice]=useState(0);
  const [info,setinfo]=useState('');

  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  

  //state 관리
  const imagechangeHandler = (files) =>{
    setImage(files);
    const formData = new FormData();
    
    const config={
      header:{'content-type':'multipart/form-data'}
    }
    formData.append("file",files)
     
    console.log(files);
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    
    auctionApi 
    .postImage({
      formData,config})
    .then(async () => {
      
      //history.push("/");
    })
    .catch((err) => {
      console.log(err);
      alert("파일 저장 실패");
    });
  };


  const namechangeHandler = (event) =>{
    setName(event.target.value);
  };
  const explainchangeHandler = (event) =>{
    setExplain(event.currentTarget.value);
  };
  const startpricechangeHandler = (event) =>{
    setStartPrice(event.currentTarget.value);
  };
  const endpricechangeHandler = (event) =>{
    setEndPrice(event.currentTarget.value);
  };

  const infoHandler=(event) =>{
    setinfo(event.currentTarget.value);
    console.log(info);
  }


  
  const startdatehandleChange = (date) =>{
    setStartDate(date);
    console.log(startDate);
  }
  const enddatehandleChange = (date) =>{
    setEndDate(date);
    console.log(endDate);
  }
  
  //경매등록-입력 데이터 백으로 보내기 
  function submitHandler(){
    
    auctionApi 
      .postAuction({
        title: Name,
        content: Explain,
        startprice:StartPrice,
        reservedprice:EndPrice,
        startDate:startDate,
        endDate:endDate,
        info:info
      })
      .then(async () => {

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    
  };


  //취소-뒤로가기
  const goBack = () => {
    history.goBack();
  };
  
  return (
      <div className="postAuctionBlock">
        <div className="wrapper">
          <div className="postAuctionHeader">
            <h2>경매 등록</h2>
            <p>*필수 입력 항목</p>
          </div>
    

          

        <hr/>
        <Fileupload title="상품 이미지" value={Image} onChange={imagechangeHandler} required/>
        <Content value={Name} title="상품이름" onChange={namechangeHandler} required/>
        <Content value={Explain} title="상세설명" onChange={explainchangeHandler}/>
        <Content type="number" value={StartPrice} title="시작가" onChange={startpricechangeHandler}required/>
        <Content type="number" value={EndPrice} title="종료가" onChange={endpricechangeHandler}/>
        
    
        <Dateform value={startDate} title="경매 시작 일시" onChange={startdatehandleChange} />
        <Dateform value={endDate} title="경매 종료 일시" onChange={enddatehandleChange}/>
        <hr/>
        <Content value={info} title="판매자 정보" onChange={infoHandler}/>
        
        </div>
        <button className="postButton" onClick={goBack}>취소</button>
        <button className="postButton" onClick={submitHandler}>경매등록</button>
      </div>
  ); 
}

export default PostPage;