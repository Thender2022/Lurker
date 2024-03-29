const express = require('express');
const router = express.Router();
const userCartCtrl = require('../../controllers/api/userCart');
const userCartNotesCtrl = require('../../controllers/api/userCartNotes');


// POST /api/orders/cart/items/:id
router.post('/', userCartCtrl.create);
router.get('/', userCartCtrl.index);
router.post('/:id/userCartNotes', userCartNotesCtrl.create);

module.exports = router;