import React from 'react';
import CartItem from './CartItem';

const CartList = ({state}) => {
  const { cart } = state;
  return (
    <>
    { cart.map(item => {
        return <CartItem key={item.id} item={item} state={state}/>
    })}
    </>
  );
};

export default CartList;