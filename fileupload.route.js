const express = require('express');
const mongoose = require('mongoose');
const multer=require("multer");
//const {upload}=require('../Helpers/filehelper');
const FileController = require('../Controllers/fileuploader.controller');
const router = express.Router();
const path=require('path');
const fs = require('fs');
const Img = require('../Models/fileupload.model');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    fs.mkdir('./uploads/',(err)=>{
       cb(null, './uploads/');});
    },
    filename: function(req, file, cb) {
     cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
      }
  });
const filefilter=(req,file,cb)=>{
if(file.mimetype==='image/png'||file.mimetype==='image/jpg'||file.mimetype==='image/jpeg')
{
    cb(null,true);
}
else{
    cb(null,false);
}
}
const upload = multer({storage:storage, fileFilter:filefilter});
//router.post('/img',upload.single ('image'), FileController.createNewImg);

router.post ('/img', upload.single ('image'), (req, res) => {
  // console.log(req.file)
   // res.json (req.file).status (200);
   const image=req.file.filename;
    const newimg={
      image
    }
    const newImg= new Img(newimg);
    newImg.save()
    .then(()=>res.json("image posted"))
    .catch((err)=>res.status(400).json(`err:${err}`));
   });

   router.get ('/file',(req, res, next) => {
    try {
      //const results = await Img.find().populate({path: 'treatimage', select: 'image'});
      const results = Img.find({}, { __v: 0 });
     // const results=await Test.find({}).sort({_id:-1}).limit(1);
      res.status(200).send(results);
    } catch (error) {
      next(createError(404, error.message));
  }});
  
   
  
   

module.exports = router;