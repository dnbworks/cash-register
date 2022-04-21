import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = ({ state }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = state;
  return (
    <>
      <Link to="/">
        <button className="btn btn-outline-danger" type="button" onClick={ () => clearCart() } >Clear Cart</button>
      </Link>
        <span><strong>SubTotal:</strong> ${cartSubTotal}</span>
        <span><strong>Tax:</strong> ${cartTax}</span>
        <span><strong>Total:</strong> ${cartTotal}</span>
        <p>Taxes and shipping calculated at checkout</p>
        <a href="">Check out</a>
    </>
  )
}

export default CartTotal