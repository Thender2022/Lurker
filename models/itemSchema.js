const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: {type: String, required: true },
    slug: {type: String, required: true },
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    image: {type: String, required: true },
    price: {type: Number, required: true },
    countInStock: {type: Number },
    brand: {type: String },

}, {
    timestamps: true
});

module.exports = itemSchema;

