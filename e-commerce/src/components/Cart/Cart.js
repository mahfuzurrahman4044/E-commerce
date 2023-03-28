import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;

    let total=0;
    let totalShipping=0;
    let quantity=0;


    for (const product of cart){
        if(product.quantity===0){
            product.quantity=1;
        }
        
        total=total+(product.price*product.quantity);
        totalShipping=totalShipping+product.shipping;
        quantity=quantity+product.quantity;
    }
    
    const tax=(total*15)/100;

    const grandTotal=total+tax;


    return (
        <div className='cart'>
            <h4>Selected Items: {quantity}</h4>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <h6>Grand Total: {grandTotal}</h6>
        </div>
    );
};

export default Cart;