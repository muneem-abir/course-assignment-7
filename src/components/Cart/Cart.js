import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const styling = { position: 'fixed', right: '0', marginRight: '50px', border: '2px solid #ddd', borderRadius: '5px', padding: '30px' };
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price;
    }
    return (
        <div style={styling}>
            <h4>Course added : <span className="text-success">{cart.length}</span> </h4>
            <h4>Total Price : <span className="text-success">${totalPrice}</span></h4>
        </div>
    );
};

export default Cart;