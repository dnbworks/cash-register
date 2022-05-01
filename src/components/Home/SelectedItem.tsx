import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useGlobalContext } from '../../context/AppContext';

const SelectedItem = ({ id, name, price, qty, discount, total, totalDisc }) => {
  const { remove, openModal } = useGlobalContext();
  return (
    <ul className="item d-flex justify-content-between">
        <li style={{ width: "150px"}}>{ name }</li>
        <li>${ price }</li>
        <li><span className="edit-btn" onClick={ () => openModal({ type: "qty", id }) } >{ qty }</span></li>
        <li><span className="edit-btn" onClick={ () => openModal({ type: "discount", id }) } >${ discount }</span></li>
        <li>${totalDisc}</li>
        <li>${ total }</li>
        <li onClick={() => remove(id) }><RiDeleteBin5Line/></li>
    </ul>
  )
}

export default SelectedItem