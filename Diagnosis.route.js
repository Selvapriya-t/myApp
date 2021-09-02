const express = require('express');
const mongoose = require('mongoose');
const DiagnosisController = require('../Controllers/Diagnosis.controller');

const router = express.Router();

//get all the users
router.get('/', DiagnosisController.getAllDiag);

router.get('/:id', DiagnosisController.getDiagById);

router.post('/', DiagnosisController.createNewDiag);

router.patch('/:id', DiagnosisController.updateADiag);

router.delete('/:id', DiagnosisController.deleteADiag);

module.exports = router;
 