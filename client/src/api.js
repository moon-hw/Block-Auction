import axios from "axios";
import { firestore } from "./firebase.utils";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const userApi = {
    signUp: (body) => api.post("/users/signup", body),
    checkGoogleSignUped: (body) => api.post("/users/checkgoogleexist", body),
    getUserData: async (body) => {
        const { uid } = body;
        return await firestore
            .collection("users")
            .doc(uid)
            .get()
            .then(doc => doc.data());
    },
    getDibs: (body) => api.post("/auctions/getdibs"),
}

/*
    경매 고려사항
    1. get 작업 flow 
     (1) 현재 시간 > 경매 종료 예정 시간 => state가 종료가 아니라면 && state 변경(경매종료) 후 다시 put, 가져오지 않음
     (2) 경매 시작 예정 시간 < 현재 시간 < 경매 종료 예정 시간 => state가 진행중이 아니라면 && state 변경(경매진행중) 후 get
     (3) 현재 시간 < 경매 시작 예정 시간 => state가 시작 전이어야함. && get
    
    2. 경매 종료 예정 시간은 경매 시작을 기준으로 10분 단위로 최대 120분까지 가능

    3. 찜하기 post
     (1) user wish[] 에 auction id 추가
     
    4. 찜한 목록 get
     (1) user에서 wish[] 다 가져오기
     (2) 각각 auction get
    
    경매 필드 정리
     (1) id : PRIMARY KEY
     (2) seller id : loginFunction.getUserData
     (3) category : 등록할 때, 카테고리 선정 필수. 
     (4) title : 공백 금지 
     (5) startPrice : 공백 금지
     (6) reservedPrice : startPrice보다 높아야함
     (7) image : 여러장 가능. 한장 필수 
     (8) certificationId : 보류
     (9) view : init 0 으로 post
     (10) wish : view와 동일
     (11) state : init 시작 전으로 post
     (12) startDate : 현시각 이후여야함
     (13) endDate : startDate 이후여야 함. 경매 진행시간은 10분 ~ 120분으로 제한하고 10분단위로 선택 가능하게
     (14) uploadDate :  
     (15) sellingFailure : init 0으로 post
    

*/

const formDataConfig = {
    header:{'content-type':'multipart/form-data'}
}
export const auctionApi = {
    getAuctionList: (body) => api.post("/auctions/getauctionlist"),
    postAuction: (body) => api.post("/auctions/upload", body, formDataConfig),
    postImage:(body) => api.post("/auctions/postimage", body),
}