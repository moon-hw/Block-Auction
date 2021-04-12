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

asyncRouter.post("/getauctionlist", async(req,res,next)=>{
  let list=[];
  var docRef = DB.auctionInfo;
  let getDoc = docRef.get()
      .then(doc => {
          doc.forEach( item=>{  
              //console.log(item.data());
              list.push( item.data());
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

asyncRouter.post("/postauction", async(req,res,next)=>{
  const { body } = req;
  console.log({body});

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
    DB.auctionInfo.add( body  );
  }
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
 

