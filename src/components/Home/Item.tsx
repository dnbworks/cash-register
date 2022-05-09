import React from 'react'
import PropTypes from 'prop-types';
import { PayloadObj } from '../../@types/app'

interface Props {
  id: number;
  name: string;
  img: string;
  weight: number;
  price: number;
  openModal: ( obj: PayloadObj ) => void;
}
// 
const Item: React.FC<Props> = ({ id, name, img, weight, price, openModal}) => {
  return (
    <div className="item_product" onClick={ () => openModal({ type: id }) }>
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

// Item.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   inCart: PropTypes.bool.isRequired
// };

export default Item