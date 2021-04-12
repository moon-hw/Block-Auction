const express = require('express');
const asyncify = require('express-asyncify');
const asyncRouter = asyncify(express.Router());
const multer = require('multer');
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`)
//   }
// });
// var upload = multer({ storage: storage});
const upload = multer({dest:'uploads'}); 



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

// asyncRouter.post("/postauction", async(req,res,next)=>{
//   const { body } = req;
  
//   if(
//     body.method === undefined ||
//     body.name === undefined ||
//     body.email === undefined ||
//     body.phoneNumber === undefined ||
//     body.nickName === undefined ||
//     body.address === undefined ||
//     body.accountNumber === undefined
//   ){
//     return next(ERRORS.DATA.INVALID_DATA);
//   }
  
//   // DB.auctionInfo.add(body);
// });


//   var upload = multer({ storage: storage }).single("file");

//   asyncRouter.post("/postimage", async(req,res,next)=>{
//     const { body } = req;
//     console.log({body});
    
//     //DB.auctionInfo.add({ body } );
//     upload(req,res,err=>{
//       if(err){
//         return req.json({success:false,err})
//       }else{
//         res.json({success:true,filepath:res.req.file.path,filename: res.req.file.filename})
//       }
//     })  
//     });
 
module.exports = asyncRouter;
 

