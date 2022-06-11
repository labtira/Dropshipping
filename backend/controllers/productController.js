const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// get Product
const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
});


// set Product
const setProduct = asyncHandler(async (req, res) => {
    if(!req.body.name ) {
        res.status(400)
        throw new Error('Please add a name field');
    }
    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    
    

    res.status(200).json(product);
    
});


// update Product
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id);

    if(!product) {
        res.status(400)
        throw new Error('Product not found');
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedProduct);
});


// delete Product
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id);

    if(!product) {
        res.status(400)
        throw new Error('Product not found');
    }
    await product.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct,
}
