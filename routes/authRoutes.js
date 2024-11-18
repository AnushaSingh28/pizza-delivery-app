const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this is declared only once

// Define routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
