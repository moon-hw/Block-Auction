const express = require('express');
const asyncify = require('express-asyncify');
const { firestore } = require('firebase-admin');
const asyncRouter = asyncify(express.Router());

const {
  DB,
  ERRORS,
  firebaseAdmin,
  tokenExporter,
  findStrInArray
} = require("./commons");

asyncRouter.get("/inbox/:page", async (req, res, next) => {

})
asyncRouter.post("/inbox", async (req, res, next) => {
  //body 추출
  const { body } = req;

  //토큰 확인
  const user = await tokenExporter(req.headers);
  if (
    user === ERRORS.AUTH.TOKEN_FAIL ||
    user === ERRORS.AUTH.NO_AUTH_IN_HEADER
  ) {
    return next(user);
  }

  if (body.content === "") {
    return next(ERRORS.DATA.INVAILD_DATA);
  }

  console.log("보내는 사람", user.nickName);
  console.log("받는 사람", body.user.nickName);

  try {
    await DB.inbox.add({
      date: firestore.FieldValue.serverTimestamp(),
      content: body.content,
      receiveId: body.uid,
      sendId: user.uid,
    });
    res.status(200).send({ result: "쪽지 전송이 성공적으로 이뤄졌습니다." });
  }
  catch (err) {
    console.log(err);
    return next(ERRORS.DATA.INVALID_DATA);
  }
});

asyncRouter.use((err, _req, res, _next) => {
  switch (err) {
    case ERRORS.DATA.INVALID_DATA:
      res.status(400).send({ error: "Invalid data" });
      break;
    case ERRORS.AUTH.NO_AUTH_IN_HEADER:
      res.status(401).send({ error: "No Auth in header" });
      break;
    case ERRORS.AUTH.TOKEN_FAIL:
      res.status(401).send({ error: "Problem with token" });
      break;
    case ERRORS.AUTH.NO_PERMISSION:
      res.status(401).send({ error: "No Permission" });
      break;
    default:
      console.log(err);
      res.status(500).send({ error: "INTERNAL ERROR" });
      break;
  }
});

module.exports = asyncRouter;