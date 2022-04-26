import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useGlobalContext } from '../context/AppContext';

const SelectedItem = ({ id, name, price, qty, discount, total}) => {
  const { remove } = useGlobalContext();
  return (
    <ul className="item d-flex justify-content-between">
        <li width="150px">{ name }</li>
        <li>${ price }</li>
        <li>{ qty }</li>
        <li>${ discount }</li>
        <li>${ total }</li>
        <li onClick={() => remove(id) }><RiDeleteBin5Line/></li>
    </ul>
  )
}

export default SelectedItem