const asyncHandler = require('express-async-handler');
const Banner = require('../models/bannerModel');

// get Banner
const getBanner = asyncHandler(async (req, res) => {
    const banners = await Banner.find();

    res.status(200).json(banners);
});


// set Banner
const setBanner = asyncHandler(async (req, res) => {
    if(!req.body.image ) {
        res.status(400)
        throw new Error('Please add a banner image');
    }
    const banner = await Banner.create({
        image: req.body.image
    });
    
    

    res.status(200).json(banner);
    
});


// update Banner
const updateBanner = asyncHandler(async (req, res) => {
    const banner = await Banner.findByIdAndUpdate(req.params.id);

    if(!banner) {
        res.status(400)
        throw new Error('Banner not found');
    }
    const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBanner);
});


// delete Product
const deleteBanner = asyncHandler(async (req, res) => {
    const banner = await Product.findByIdAndUpdate(req.params.id);

    if(!banner) {
        res.status(400)
        throw new Error('Banner not found');
    }
    await banner.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getBanner,
    setBanner,
    updateBanner,
    deleteBanner,
}
