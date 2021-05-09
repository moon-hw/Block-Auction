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

asyncRouter.post("/upload", upload.any(), (req, res, next) => {
  console.log(req.files);
  console.log(req.body);
})

asyncRouter.post("/getauctionlist", async(req,res,next)=>{
  let list=[];
  let each;

  var docRef = DB.auctionInfo;
  let getDoc = docRef.get()
      .then(doc => {
          doc.forEach( item=>{  
              console.log(item.data())
              each=item.data();
              each["_id"]=item.id;
              list.push( each);
          });
          console.log(list);
          res.status(200).send({success:true, list});
      })
      .catch(err => {
          console.log('Error getting document', err);
          return next(err);
      });
  console.log("done"); 
  });

// asyncRouter.post("/postauction", async(req,res,next)=>{
//   const { body } = req;
//   console.log({body});
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
 

