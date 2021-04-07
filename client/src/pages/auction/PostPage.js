import React,{useState} from 'react';
import { userApi } from "../../api";
import Content from '../../auction/content'
import Dateform from '../../auction/dateform';
import postAuction from '../../auction/postAuction.css';
function PostPage ({history}){

  const [Name,setName]=useState('');
  const [Explain,setExplain]=useState('');
  const [StartPrice,setStartPrice]=useState(0);
  const [EndPrice,setEndPrice]=useState(0);
  const [StartDate,setStartDate]=useState({
      startdate:'',
      starthour:''
  });
  const [EndDate,setEndDate]=useState({
    enddate:'',
    endhour:''
});

// const {startdate,starthour}=StartDate;
// const {enddate,endhour}=EndDate;

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
  const startdatechangeHandler = (event) =>{
    const {value,name}=event.target;

    setStartDate({
      ...StartDate,
      [name]:value
    });
  };
  const enddatechangeHandler = (event) =>{
    const {value,name}=event.target;

    setEndDate({
      ...EndDate,
      [name]:value
    });
  };


  function submitHandler(){
    userApi
      .signUp({
        method: "Post",
        uid: "name"
      })
      .then(async () => {

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          
          <div className="box">
            <Content value={Name} title="상품이름" text="상품이름을" onChange={namechangeHandler}/>
          </div>

          <div className="box">
          <Content value={Explain} title="상세설명" onChange={explainchangeHandler}/>
          </div>

          <div className="box">
          <Content value={StartPrice} title="시작가" onChange={startpricechangeHandler}/>
          </div>

          <div className="box">
          <Content value={EndPrice} title="종료가" onChange={endpricechangeHandler}/>
          </div>

          {/*Dateform 수정 필요*/}

          <div className="box">
          <Dateform value={StartDate} title="경매 시작 일시" onChange={startdatechangeHandler} />
          </div>

          <div className="box">
          <Dateform value={EndDate} title="경매 종료 일시" onChange={enddatechangeHandler}/>
          </div>

        </div>
        
          <div className="btnBlock">
            <button className="postButton" onClick={goBack}>취소</button>
            <button className="postButton" onClick={submitHandler}>경매등록</button>
          </div>
        
      </div>
  ); 
};

export default PostPage;