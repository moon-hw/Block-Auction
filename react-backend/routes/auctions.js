const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());
const multer=require('multer');

const {
  DB,
  ERRORS,
  firebaseAdmin,
  tokenExporter,
}=require("./commons");



asyncRouter.post("/auctionpost", async(req,res,next)=>{
  const { body } = req;
  console.log({body});
  DB.auctionInfo.add({ body } );
    
  });


  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
   
  var upload = multer({ storage: storage }).single("file");

  asyncRouter.post("/postimage", async(req,res,next)=>{
    const { body } = req;
    console.log({body});
    
    //DB.auctionInfo.add({ body } );
    upload(req,res,err=>{
      if(err){
        return req.json({success:false,err})
      }else{
        res.json({success:true,filepath:res.req.file.path,filename: res.req.file.filename})
      }
    })  
    });
 
module.exports = asyncRouter;
 

