const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());

asyncRouter.post("/checkgoogleexist", async (req, res, next) => {
  return res.status(201);
  
  const {
    body: { uid },
  } = req;
  if (uid === undefined) return next(`NO UID ERROR`);
  return res.status(201).send({ result: "success"});
})

module.exports = asyncRouter;