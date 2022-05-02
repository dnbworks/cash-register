import React from 'react'
import { Product } from '../../@types/app';
import { useGlobalContext } from '../../context/AppContext';
import Item from './Item';

const ItemsList: React.FC = () => {
  const { state: { storeProducts, openModal } } = useGlobalContext();
  return (
    <div className="items_list d-flex">
        { storeProducts.map((item: Product) => {
            return <Item {...item} openModal={openModal} key={item.id}/>
        })}
    </div>
  )
}

export default ItemsList