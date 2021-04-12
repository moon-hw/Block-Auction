import React,{useState} from 'react';
import { auctionApi} from "../../api";
import {loginFunctions} from "../../auth/AuthWatchers"
import Content from '../../auction/content'
import Fileupload from '../../auction/Fileupload'
import Dateform from '../../auction/dateform';
import SelectComponent from '../../auction/selectform'
import  moment from 'moment'
//import postAuction from '../../auction/postAuction.css';



function PostPage ({history}){
  //상품이미지, 증명서 - 이미지 저장 
  const [Image,setImage]=useState()
  const [Category,setCategory]=useState('');

  //상품이름, 상세 설명,시작가, 종료가, 판매자 정보 -text 저장
  const [Name,setName]=useState('');
  const [Explain,setExplain]=useState('');
  const [StartPrice,setStartPrice]=useState(0);
  const [EndPrice,setEndPrice]=useState(0);
  const [info,setinfo]=useState('');

  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const options = [
    { value: 'DIG', label: '디지털/가전' },
    { value: 'FUR', label: '가구/인테리어' },
    { value: 'ACC', label: '악세서리' },
    { value: 'BEA', label: '뷰티/미용' },
    { value: 'LIF', label: '생활용품' },
    { value: 'CLO', label: '의류' },
    { value: 'ART', label: '예술작품' },
    { value: 'SPO', label: '스포츠/레저' },
    { value: 'ETC', label: '기타' },
  ]
  
  

  //state 관리
  const imagechangeHandler = (files) =>{
    setImage(files);
    const formData = new FormData();
    
    const config={
      header:{'content-type':'multipart/form-data'}
    }
    formData.append("file",files)
     
    
    
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

  const categorychangeHandler=(Category)=>{
    setCategory(Category);
    console.log(Category);
  }

  
  const startdatehandleChange = (date) =>{
    setStartDate(date);
    console.log(startDate);
  }
  const enddatehandleChange = (date) =>{
    setEndDate(date);
    console.log(endDate);
  }

  

   async function getuserId () {
    const userId= await loginFunctions.getUserInfo().uid;
    return userId;
  }
  
    async function dateformating(Date){
      const date= moment(Date).format('YYYY-MM-DD HH:mm');
      return date;
    }
  //경매등록-입력 데이터 백으로 보내기 
  async function submitHandler(){
    const Userid=  await getuserId();
    const Sdate = await dateformating(startDate);
    const Edate = await dateformating(endDate);
    const nowTime = moment().format('YYYY-MM-DD HH:mm');

    console.log(Userid);
    auctionApi 
      .postAuction({
        uploadtime:nowTime,
        sellerid: Userid,
        categpry:Category,
        title: Name,
        content: Explain,
        startprice:StartPrice,
        reservedprice:EndPrice,
        startDate:Sdate,
        endDate:Edate,
        info:info,
        view:0,
        wish:0,
        sellingfailure:0,
        state:"BEFO"
      })
      .then(async () => {

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("경매 형식에 맞지 않습니다. 필수항목과 종료가, 경매 시간을 확인해주세요")
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
        <SelectComponent options={options} value={Category} onChange={categorychangeHandler}/>
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