const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Example route
router.post('/create', orderController.createOrder);

module.exports = router;
