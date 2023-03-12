require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Canvas', sortOrder: 10},
        { name: 'Mural', sortOrder: 20}
    ])
    
    await Item.deleteMany({});
    const items = await Item.create([
        {
            name: 'Abstract',
            slug: 'Abstract',
            category: categories[0],
            image: '/images/abstract.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        },
        {
            name: 'Hurt',
            slug: 'Hurt',
            category: categories[0],
            image: '/images/Hurt.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        },
        {
            name: 'Purp',
            slug: 'Purp',
            category: categories[0],
            image: '/images/purp.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        },
        {
            name: 'Peyote',
            slug: 'Peyote',
            category: categories[0],
            image: '/images/peyote.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        },
        {
            name: 'Saved',
            slug: 'Saved',
            category: categories[0],
            image: '/images/saved.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        },
        {
            name: 'Smithers',
            slug: 'Smithers',
            category: categories[0],
            image: '/images/smithers.jpg',
            price: 500,
            countInStock: 1,
            description: 'High quality art'
        }
    ]);
    
    console.log(items)
    
    process.exit()
    
})();
