import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../../context/AppContext';
import styled from 'styled-components';

const SelectedItemModal = () => {
  const { state: {closeModal, selectedItem, add_to_cart, editQty, edit} } = useGlobalContext();

  const [quantity, setQuantity ] = useState<string | number | undefined>(selectedItem ? selectedItem.qty : 0)
  const [error, setError ] = useState("")

  const inputRef = useRef<HTMLInputElement>(null);

  const regex = /^[1-9][0-9]*$/;
  

  useEffect(() => {
    inputRef.current?.setSelectionRange(0, 0);
    inputRef.current?.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if(regex.test(e.target.value)){
      setQuantity(undefined)
      setQuantity(e.target.value)
      setError("");
    } 

    if(!regex.test(e.target.value)){
      setQuantity(undefined)
      setError("Please no zero and negative number");
    }
   
    if(e.target.value === ""){
      setQuantity(undefined)
      setError("Please enter a number");
    }

  }

  const handleAddToCartBtn = (e: React.FormEvent) => {
    e.preventDefault();
    if (error === "" && quantity && quantity >= 1) {
      if(edit && selectedItem){
        editQty(selectedItem, quantity)
      } else {
        add_to_cart(selectedItem, quantity)
      }
      setQuantity(0);
    }
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
              <input type="text" id='quantity' value={quantity} ref={inputRef} onChange={ (e) => handleChange(e)}/>
              { error && (<p>{error}</p>)}
            </div>
            <div className="modal__footer">
                <button onClick={handleAddToCartBtn}>OK</button>
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