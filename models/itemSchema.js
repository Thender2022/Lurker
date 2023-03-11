const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, }
})

// name: 'Abstract',
//             slug: 'Abstract',
//             category: 'Paintings',
//             image: '/images/abstract.jpg',
//             price: 500,
//             countInStock: 1,
//             brand: 'Lurker',
//             description: 'High quality art'