const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user-validation', userController.user_validation);
router.post('/user-joi', userController.user_joi);