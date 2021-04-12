import React,{useState} from 'react';
import { auctionApi } from "../../api";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import ReactDatePicker from 'react-datepicker';
import { InputWithLabel } from '../../auth';
import "react-datepicker/dist/react-datepicker.css";
import {loginFunctions} from "../../auth/AuthWatchers"
import moment from 'moment'
import Select from 'react-select'
//import postAuction from '../../auction/postAuction.css';

function PostPage (){
  const { register, errors, handleSubmit, control } = useForm({ mode: "onBlur" });

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
  
  const [imgBase64, setImageBase64] = useState(""); // base64 인코딩 값
  const [imgFile, setImgFile] = useState(null);
  const [loading, setLoading] = useState(false);  
  const history = useHistory();

  //state 관리
  const imagechangeHandler = (img) =>{
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImageBase64(base64.toString());
      }
    }

    if (img.target.files[0]) {
      reader.readAsDataURL(img.target.files[0]);
      setImgFile(img.target.files[0]);
    }
  }
  
  //경매등록-입력 데이터 백으로 보내기 
  const onFormSubmit = (data) => {
    var auctionFormData = new FormData();
    const nowTime = moment().format('YYYY-MM-DD HH:mm');
    const userId = await loginFunctions.getUserInfo().uid;
    
    auctionFormData.append('productImage', imgFile);
    auctionFormData.append('title', data.name);
    auctionFormData.append('content', data.explain);
    auctionFormData.append('startPrice', data.startPrice);
    auctionFormData.append('reservedPrice', data.endPrice);
    auctionFormData.append('startDate', data.startDate);
    auctionFormData.append('endDate', data.endDate);
    auctionFormData.append('uploadTime', nowTime);
    auctionFormData.append('sellerId', userId);
    auctionFormData.append('category', data.category)
    auctionFormData.append('view', 0);
    auctionFormData.append('wish', 0);
    auctionFormData.append('sellingFailure', 0);
    auctionFormData.append('state', "BEFO");

    for (let key of auctionFormData.entries())
      console.log(`${key}`);
      
    const config = {
      header:{'content-type':'multipart/form-data'}
    }

    if (loading) return;
    setLoading(true);
    
    auctionApi
      .postAuction(auctionFormData)
      .then((res)=> {
        console.log(res);
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        alert("경매 형식에 맞지 않습니다. 필수항목과 종료가, 경매 시간을 확인해주세요")
      });
  }

  const onErrors = (errors) => console.log(errors);

  return (
      <div className="postAuctionBlock">
        <div className="wrapper">
          <div className="postAuctionHeader">
            <h2>경매 등록</h2>
            <p>*필수 입력 항목</p>
          </div>          
        <hr/>
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <input onChange={imagechangeHandler} type="file" name="title" ref={register({ required:true, })} />
          {errors.title && '상품 이미지를 등록해주세요'}
          {imgBase64 ? (
            <>
              <img src={imgBase64} />
            </>
          ) : (
            ""
          )}

          <Controller 
            as={Select}
            name="category"
            options={options}
            control={control}
          />

          <InputWithLabel label="상품이름" name="name">
            <input type="text" name="name" ref={register({ required:true, })} />
          </InputWithLabel>
          {errors.name && '상품명을 적어주세요'}
          
          <InputWithLabel label="상세설명" name="explain">
            <input  type="text" name="explain" ref={register({ required:true, })} />
          </InputWithLabel>
          {errors.explain && '상품 설명을 적어주세요'}
          
          <InputWithLabel label="시작가" name="startPrice">
            <input type="number" name="startPrice" ref={register({ required:true, })} />
          </InputWithLabel>
          {errors.startPrice && '시작가를 정해주세요'}
          
          <InputWithLabel label="내정가" name="endPrice">
            <input type="number" name="endPrice" ref={register({ required:true, })} />
          </InputWithLabel>
          {errors.endPrice && '내정가를 정해주세요'}
          
          <Controller
            control={control}
            name="startDate"
            defaultValue={null}
            render= {
              ({onChange, value }) =>
                <ReactDatePicker 
                  onChange={onChange}
                  selected={value}
                  placeholderText={`거래 시작 일시를 정해주세요`}
                  showTimeSelect
                  dateFormat="yyyy/MM/dd hh:mm"
                />
            }
          />

          <Controller
            control={control}
            name="endDate"
            defaultValue={null}
            render= {
              ({onChange, value }) =>
                <ReactDatePicker 
                  onChange={onChange}
                  selected={value}
                  placeholderText={`거래 종료 일시를 정해주세요`}
                  showTimeSelect
                  dateFormat="yyyy/MM/dd hh:mm"
                />
            }
          />

          <button onClick={handleSubmit}>
            경매 등록 완료
          </button>
        </form>
      </div>
    </div>
  ); 
}

export default PostPage;