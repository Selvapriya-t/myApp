const express = require('express');
const mongoose = require('mongoose');
const DoctorController = require('../Controllers/Doctor.controller');

const router = express.Router();

//get all the users
router.get('/', DoctorController.getAllDoctor);

router.get('/:id', DoctorController.getDoctorById);

router.post('/', DoctorController.createNewDoctor);

router.patch('/:id', DoctorController.updateADoctor);

router.delete('/:id', DoctorController.deleteADoctor);

module.exports = router;
