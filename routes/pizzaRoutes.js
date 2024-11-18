const express = require('express');
const router = express.Router();
const { getPizzas, createPizza } = require('../controllers/pizzaController');

router.get('/pizzas', getPizzas);
router.post('/pizzas', createPizza);

module.exports = router;
