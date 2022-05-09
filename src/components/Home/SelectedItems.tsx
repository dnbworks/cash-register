import React from 'react'
import { useGlobalContext } from '../../context/AppContext';
import SelectedItem from './SelectedItem';

const SelectedItems = () => {
  const { state: {cart, openModal} } = useGlobalContext();
  return (
    <div className="table-wrapper__selected--items">
       { cart.map(item => {
            return <SelectedItem {...item} openModal={openModal} key={item.id}/>
        })}
    </div>
  )
}

export default SelectedItems
