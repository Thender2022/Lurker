const UserCart = require('../../models/userCart');

module.exports = {
  create,
//   index
};

// A cart is the unpaid order for a user
async function create(req, res) {
    req.body.user = req.user
    const userCart = await UserCart.findById(req.params.id);
    userCart.cartNotes.splice(0, 0, req.body)
    userCart.save()
  res.json(userCart);
}

// async function index(req, res) {
//   try {
//     const userCart = await UserCart.findOne({user: req.user})
//     res.json(userCart)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// }