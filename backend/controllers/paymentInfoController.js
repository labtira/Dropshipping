const asyncHandler = require('express-async-handler');
const Info = require('../models/paymentInfoModel');

// get Info
const getInfo = asyncHandler(async (req, res) => {
    const infos = await Product.find();

    res.status(200).json(infos);
});


// set Info
const setInfo = asyncHandler(async (req, res) => {
    if(!req.body.FirstName ) {
        res.status(400)
        throw new Error('Please add a field');
    }
    const info = await Info.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Country: req.body.Country,
        City: req.body.City,
        Adress: req.body.Adress,
        PostalCode: req.body.PostalCode,
    });
    
    

    res.status(200).json(info);
    
});



module.exports = {
    getInfo,
    setInfo
}
