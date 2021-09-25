import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props)
    const { name, img, seller, price, stock } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h4 className='product-name'> {name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Remain : {stock}</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'> {element } Add to cart</button>
            </div>
        </div>
    );
};

export default Product;