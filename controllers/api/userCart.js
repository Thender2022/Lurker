const UserCart = require('../../models/userCart');

module.exports = {
  create
};

// A cart is the unpaid order for a user
async function create(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

