import React from 'react'
import { useGlobalContext } from '../../context/AppContext';
import Item from './Item';

const ItemsList = () => {
    const { openModal, storeProducts } = useGlobalContext();
  return (
    <div className="items_list d-flex">
        { storeProducts.map(item => {
            return <Item {...item} openModal={openModal} key={item.id}/>
        })}
    </div>
  )
}

export default ItemsList