const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for products
let ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    // numOfReviews: {
    //     type: Number,
    //     default: 0
    // },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'products'
});


// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);