const UserCart = require('../../models/userCart');

module.exports = {
  create,
  index
};

// A cart is the unpaid order for a user
async function create(req, res) {
    console.log("enter create function")
  req.body.user = req.user
  const userCart = await UserCart.create(req.body);
  res.json(cart);
}

async function index(req, res) {
  try {
    const userCart = await UserCart.findOne({user: req.user})
    res.json(userCart)
  } catch (error) {
    res.status(400).json(error)
  }
}