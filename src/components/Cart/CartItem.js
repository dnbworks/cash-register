import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({ item, state }) => {
    const { id, title, img, price, total, count, size } = item;
    const { increase, decrease, remove } = state;

    return (
    <div className='d-flex justify-content-between col-12 col-md-10 cart__item'>
        <div className=''>
            <img src={img} alt="product" style={{ width: '5rem'}} />
        </div>
        <div className=''>
            <Link to={`/product/${id}`}>{title}</Link>
            <span>Size: {size}</span>
            <div className="Quantity d-flex align-items-center" >
                <span onClick={ () => decrease(id) } ><AiOutlineMinus/></span>
                <div id="numbers"  >{count}</div>
                <span onClick={ () => increase(id) }><AiOutlinePlus/></span>
            </div>
            <span><strong>Total: </strong>${total}</span>
            <button className="remove" onClick={ () => remove(id) } >Remove</button>
        </div>
    </div>
    );
};

export default CartItem;

