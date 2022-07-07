import React, { useEffect, useState } from 'react'

import './style.css'
import Product from '../../assets/imgs/Products/product.png'
import { Link } from 'react-router-dom';

const ProductDetails = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/api/products/`)
         .then((response) => response.json())
         .then((response) => setProducts(response))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);




    const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


  return (
    <div className='productdetails'>
        {products.map(product => ( 
        <div className = "card-wrapper">
      <div className = "card">
        
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = {Product} alt = "shoe image"/>
              <img src = {Product} alt = "shoe image"/>
              <img src = {Product} alt = "shoe image"/>
              <img src = {Product} alt = "shoe image"/>
            </div>
          </div>

          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img src = {Product} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img src = {Product} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img src = {Product} alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img src = {Product} alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
        
        <div className = "product-content">
          <h2 className = "product-title">{product.name}</h2>
          <a href = "#" className = "product-link">visit the store</a>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span></span>
          </div>

          <div className = "product-price">
            {/* <p className = "last-price">Old Price: <span>$257.00</span></p> */}
            <p className = "new-price">Price: <span>${product.price}</span></p>
          </div>

          <div className = "product-detail">
            {/* <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul> */}
            <p>{product.description}</p>
          </div>

          <div>
            <Link to='/checkout' className='checkout'><div className='checkouttxt'>Checkout</div></Link>
          </div>

          
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}

export default ProductDetails;