const express = require('express');
const mongoose = require('mongoose');
const AppointmentController = require('../Controllers/Appointment.controller');

const router = express.Router();

//get all the users
router.get('/', AppointmentController.getAllAppointment);

router.get('/:id', AppointmentController.getAppointmentById);

router.post('/', AppointmentController.createNewAppointment);

router.post('/:sms',AppointmentController.createNewSms)

router.patch('/:id', AppointmentController.updateAAppointment);

router.delete('/:id', AppointmentController.deleteAAppointment);

module.exports = router;