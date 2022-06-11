const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name '],
    },
    description: {
        type: String,
        required: [true, 'Please add a description '],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price '],
    },
    image: {
        type: String,
        required: [true, 'Please add a image '],
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Product', productSchema);