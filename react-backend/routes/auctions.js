const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());
const multer = require('multer');
const { path } = require('../app');
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}); 

const {
  DB,
  ERRORS,
  firebaseAdmin,
  tokenExporter,
}=require("./commons");

asyncRouter.post("/postauction", upload.any('img'), (req, res, next) => {
  const body = JSON.parse(JSON.stringify(req.body));
  
  body.category = JSON.parse(body.category);
  body.productImageURL = req.files;

  if(
    body.title === "" ||
    body.startprice === "" ||
    body.startprice>body.reservedprice||
    body.uploadtime>=body.startDate||
    body.startDate>=body.endDate||
    body.category===""
  ){
    return next(ERRORS.NOT_ALLOWED_DATAFORMAT);
  }
  else{
    DB.auctionInfo.add(body);
    res.status(200).end();
  }

})

  asyncRouter.use((err, _req, res, _next) => {
      switch (err) {
        case ERRORS.NOT_ALLOWED_DATAFORMAT:
          res.status(400).send({ error: "Invalid data" });
          break;
        default:
          console.log("UNHANDLED INTERNAL ERROR: ", err);
          res.status(500).send({ error: "INTERNAL ERROR" });
          break;
      }
    });
 
module.exports = asyncRouter;
 

