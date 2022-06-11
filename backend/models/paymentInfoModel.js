const mongoose = require('mongoose');

const InfoSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Please add a name '],
    },
    LastName: {
        type: String,
        required: [true, 'Please add a description '],
    },
    Email: {
        type: String,
        required: [true, 'Please add a price '],
    },
    Phone: {
        type: Number,
        required: [true, 'Please add a image '],
    },
    Country:{
        type: String,
        required: [true, 'Please add a image '],
    },
    City:{
        type: String,
        required: [true, 'Please add a image '],
    },
    Adress:{
        type: String,
        required: [true, 'Please add a image '],
    },
    PostalCode:{
        type: Number,
        required: [true, 'Please add a image '],
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Info', InfoSchema);