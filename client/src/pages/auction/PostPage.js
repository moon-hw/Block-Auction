import React,{useState} from 'react';
import { userApi } from "../../api";
import Content from '../../auction/content'
import Dateform from '../../auction/dateform';



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
    <div>
      <div id="register">
        <div className="empty" style={{height:`200px`}}/>
        <hr/>
        <Content value={Name} title="상품이름" onChange={namechangeHandler}/>
        <Content value={Explain} title="상세설명" onChange={explainchangeHandler}/>
        <Content value={StartPrice} title="시작가" onChange={startpricechangeHandler}/>
        <Content value={EndPrice} title="종료가" onChange={endpricechangeHandler}/>
        {/*Dateform 수정 필요*/}
        <Dateform value={StartDate} title="경매 시작 일시" onChange={startdatechangeHandler} />
        <Dateform value={EndDate} title="경매 종료 일시" onChange={enddatechangeHandler}/>
        <div className="empty" style={{height:`200px`}}/>
        <hr/>
        
      </div>
      <button onClick={goBack}>취소</button>
      <button onClick={submitHandler}>경매등록</button>
    </div>
  ); 
};

export default PostPage;