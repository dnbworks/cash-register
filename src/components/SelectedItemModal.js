import React, { useState } from 'react'
import { useGlobalContext } from '../context/AppContext';
import styled from 'styled-components';

const SelectedItemModal = () => {
  const [quantity, setQuantity ] = useState(0)
  const { openModal, closeModal, isOpenSelectedModal, selectedItem } = useGlobalContext();

  if(!isOpenSelectedModal){
    return null;
  }

  return (
    <ModalContainer>
    <div className='modal__input--Qty'>
        <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">INPUT QTY</div>
        </div>
        <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <span>Price:</span>
              <span>$ {selectedItem.price}/kg</span>
            </div>
            <div style={{ width: "200px"}}>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <div className="modal__footer">
                <button onClick={() => {}}>OK</button>
                <button onClick={() => {
                  closeModal(selectedItem.id)
                  setQuantity(0)
                }}>Cancel</button>
            </div>
        </form>
    </div>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:10;
    display:flex;
    justify-content:center;
    align-items:center;
    .modal__input--Qty {
        background:#fff;
        width:300px;
        min-height:300px;
        border:1px solid #111;
        position:relative;
        padding: 0.25rem 1rem;
        label {
            width: 150px;
            font-weight: 500;
        }
       
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        
    }
    .button-container {
      display:flex;
      justify-content:space-between;
    }
`;

export default SelectedItemModal