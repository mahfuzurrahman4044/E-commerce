import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);

    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart=getShoppingCart();
        const savedCart=[];
        for (const id in storedCart){
            const savedProduct=products.find(product=>product.id===id);

            if(savedProduct){
                const quantity=storedCart[id];
                savedProduct.quantity=quantity;
                savedCart.push(savedProduct);
            }

            console.log(savedProduct);
        }

        setCart(savedCart);


    },[products])

    const addToCart=(product)=>{
        const newProducts=[...cart, product];
        setCart(newProducts);
        addToDb(product.id);
        
    }

    return (
        <div className='shop-container mt-5'>
            <div className='products-container'>
                {
                    products.map(product=><Products key={product.id} product={product} addToCart={addToCart}></Products>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;