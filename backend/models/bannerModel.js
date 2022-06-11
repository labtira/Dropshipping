const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Please add a image '],
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Banner', bannerSchema);