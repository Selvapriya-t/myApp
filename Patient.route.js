const express = require('express');
const mongoose = require('mongoose');
const PatientController = require('../Controllers/Patient.controller');

const router = express.Router();

//get all the users
router.get('/', PatientController.getAllPatient);

router.get('/count', PatientController.getCountPatient);

router.get('/:id', PatientController.getPatientById);

router.post('/', PatientController.createNewPatient);

router.patch('/:id', PatientController.updateAPatient);

router.delete('/:id', PatientController.deleteAPatient);

module.exports = router;
