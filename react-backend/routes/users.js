const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());

const {
  DB,
  ERRORS,
  firebaseAdmin,
  tokenExporter,
}=require("./commons");

//구글 로그인 정보 DB 확인 메소드
asyncRouter.post("/checkgoogleexist", async (req, res, next) => {
  const {
    body: { uid },
  } = req;
  if (uid === undefined) return next(`NO UID ERROR`);
  
  return DB.users
    .doc(uid)
    .get()
    .then(async (docSnapshot) => {
      if(docSnapshot.exists){
        return res.status(201).send({result:"success"});
      }
      else{
        return res.status(200).send({result:"success"});
      }
    })
    .catch((err) => next(err.message));
});

// 회원가입
asyncRouter.post("/signup", async(req,res,next)=>{
  const {body} =req;

  if(
    body.method === undefined ||
    body.name === undefined ||
    body.email === undefined ||
    body.phoneNumber === undefined ||
    body.nickName === undefined ||
    body.address === undefined ||
    body.accountNumber === undefined
  ){
    return next(ERRORS.DATA.INVALID_DATA);
  }

//구글인지 아닌지 확인 
if(body.method === "GOOGLE") {
  try{
    await firebaseAdmin.auth().getUser(body.uid);
  }
  catch(err) {
    return next(ERRORS_AUTH.NO_UID);
  }

  return DB.users
  .doc(body.uid)
  .get()
  .then(async (docSnapshot) => {
    if(docSnapshot.exists) {
      return next(ERRORS.AUTH.ALREADY_SIGNUPED);
    }
    else {
        try {
          await DB.users.doc(body.uid).set({
            email : body.email.trim(),
            name : body.name,
            nickName : body.nickName,
            address : body.address,
            phoneNumber : body.phoneNumber,
            accountNumber : body.accountNumber
          });
          return res.status(200).send({result : "Google signup success"});
        }
        catch(err){
          return next(ERRORS.DATA.INVALID_DATA);
        }
      }
  })
  .catch((_err) => next(ERRORS.DATA.INVALID_DATA));
} 
else{
  return next(err);
}
});

// 회원정보 수정
asyncRouter.post("/myInfo", async (req, res, _next) => {
  const {
    body: { uid },
  } = req;

  return DB.users
  .doc(uid)
  .get()
  .then(async (docSnapshot) => {
    if()

  })

  

asyncRouter.use((err, _req, res, _next) => {
  switch (err) {
    case ERRORS.DATA.INVALID_DATA:
      res.status(400).send({ error: "Invalid data" });
      break;
    case ERRORS.AUTH.NO_UID:
      res.status(401).send({ error: "there is no user" });
      break;
    case ERRORS.AUTH.CANT_SIGNUP:
      res.status(401).send({ error: "Registration format is incorrect." });
      break;
    case ERRORS.AUTH.ALREADY_SIGNEDUP:
      res.status(406).send({ error: "Already signed up" });
      break;
    default:
      console.log("UNHANDLED INTERNAL ERROR: ", err);
      res.status(500).send({ error: "INTERNAL ERROR" });
      break;
  }
});

module.exports = asyncRouter;