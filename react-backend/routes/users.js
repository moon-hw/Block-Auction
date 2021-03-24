const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());

asyncRouter.post("/checkgoogleexist", async (req, res, next) => {
  return res.status(200).send({ result : "go signup success"});
  
  const {
    body: { uid },
  } = req;
  if (uid === undefined) return next(`NO UID ERROR`);
  return res.status(201).send({ result: "success"});
});

asyncRouter.post("/signup", async (req, res, next) => {
  const { body } = req;

  return res.status(200).send({result : "google signup success" +  body});
});

module.exports = asyncRouter;