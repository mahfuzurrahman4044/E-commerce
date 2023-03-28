import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img, name, seller, ratings, price}=props.product;

    const addToCart=props.addToCart;


    return (
        <div className='product'>
            <div className='p-1'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=>addToCart(props.product)}>Add to Cart  <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    );
};

export default Products;