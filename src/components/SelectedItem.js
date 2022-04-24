import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

const SelectedItem = ({ id, name, price, qty, discount, total}) => {
  return (
    <ul className="item d-flex justify-content-between purple">
        <li width="150px">{ name }</li>
        <li>${ price }</li>
        <li>{ qty }</li>
        <li>${ discount }</li>
        <li>${ total }</li>
        <li onClick={() => {}}><RiDeleteBin5Line/></li>
    </ul>
  )
}

export default SelectedItem