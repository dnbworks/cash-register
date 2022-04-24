import React from 'react'

const Item = ({ id, name, img, weight, price, openModal}) => {
  return (
    <div className="item_product" onClick={() => openModal(id)}>
        <div className="weight">
            <span className='weight__unit'>{weight} kg</span>
        </div>
        <div className="item__img">
            <img src={img} alt="" />
        </div>
        <div className="item_detail d-flex justify-content-between">
            <span className="item__name">{name}</span >
            <span className="item__price">${price}</span >
        </div>
    </div>
  )
}

export default Item