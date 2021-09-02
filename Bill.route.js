const express = require('express');
const mongoose = require('mongoose');
const multer=require("multer");
const {upload}=require('../Helpers/filehelper');
const BillController = require('../Controllers/Bill.controller');
const router = express.Router();

//get all the users
router.get('/', BillController.getAllBill);
router.get('/count/', BillController.getSumBill);

router.get('/:id', BillController.getBillById);

router.post('/', BillController.createNewBill);



// router.post ('/upload', upload.single ('uploadedFile'), (req, res) => {
//   // console.log(req.file)
//     res.json (req.file).status (200);
//    });

router.patch('/:id', BillController.updateABill);

router.delete('/:id', BillController.deleteABill);

module.exports = router;
 