const UserCart = require('../../models/userCart');

module.exports = {
  create
};

// A cart is the unpaid order for a user
async function create(req, res) {
    console.log("enter create function")
  req.body.user = req.user
  const userCart = await UserCart.create(req.body);
  res.json(cart);
}

