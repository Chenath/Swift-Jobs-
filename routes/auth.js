const express = require('express');
const {registerUser, loginUser, googleAuth} = require('../controllers/authController');

const router = express.Router();


router.post('/sign up', registerUser);
router.post('/login', loginUser);
router.post('/google-auth', googleAuth);

module.exports = router;

