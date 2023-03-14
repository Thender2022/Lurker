const express = require('express');
const router = express.Router();
const userCartCtrl = require('../../controllers/api/userCart');

// POST /api/orders/cart/items/:id
router.post('/', userCartCtrl.create);

module.exports = router;