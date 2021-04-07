import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const userApi = {
    signUp: (body) => api.post("/users/signup", body),
    checkGoogleSignUped: (body) => api.post("/users/checkgoogleexist", body),
}

export const auctionApi={
  postAuction: (body) => api.post("/auction/auctionpost", body),
  postImage:(body) => api.post("/auction/postimage", body),
}