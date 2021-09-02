const express = require('express');

const AuthController = require('./../Controllers/Auth.controller');
const mongoose = require('mongoose');
const router = express.Router();

//authenticate or add the users
router.post('/login', AuthController.authenticateUser);

router.post('/signUp', AuthController.registerNewUser);

module.exports = router;
