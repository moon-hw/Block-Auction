import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const userApi = {
    signUp: (body) => api.post("/users/signup", body),
    checkGoogleSignUped: (body) => api.post("/users/checkgoogleexist", body),
}