const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartNotesSchema = new Schema({
  content: {
    type: String,
    required: true
  }, 
  budget: {
    type: Number,
    min: 0,
    max: 2000,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }}, {
    timestamps: true
});

const userCartSchema = new Schema({
  artPieces: { type: Array, default: [] },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cartNotes: [cartNotesSchema]
}, {
  timestamps: true,
});




module.exports = mongoose.model('userCart', userCartSchema);