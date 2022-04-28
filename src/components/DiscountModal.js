import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/AppContext';
import styled from 'styled-components';

const DiscountModal = () => {
    const { closeModal, selectedItem, editDiscount } = useGlobalContext();
    console.log(String(selectedItem.discount).length);
    const [discount, setDiscount] = useState(selectedItem.discount ? selectedItem.discount : "0.00")
    const [option, setOption] = useState("amount")
    const [error, setError ] = useState("")
    const inputRef = useRef(null);

    const regex = /^[0-9]+\.[0-9]{2}$/;

    const handleChange = (e) => {

        if(regex.test(e.target.value)){
          setDiscount(e.target.value)
          setError("");
        } 
    
        if(!regex.test(e.target.value)){
          setDiscount(undefined)
          setError("Please no zero and negative number");
        }
       
        if(e.target.value === ""){
          setDiscount(undefined)
          setError("Please enter a number");
        }
    
    }

    const handleEdit = (e) => {
        e.preventDefault();
        editDiscount(selectedItem, discount);
        setDiscount(0)
    }

    useEffect(() => {
        inputRef.current.setSelectionRange(0, 0);
        inputRef.current.focus();
    });

  return (
    <ModalContainer>
    <div className='modal__input--Qty'>
        <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">DISCOUNT DETAILS</div>
        </div>
        <div className="choose">
            <p>Please choose one the the following options</p>
            <div className='d-flex'>
                <button>Amount</button>
                <button>Percent</button>
            </div>
        </div>
        <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <label htmlFor="discount">Enter the amount</label>
              <input type="text" id='discount' value={discount} ref={inputRef} onChange={handleChange}/>
              { error && (<p>{error}</p>)}
            </div>
            <div className="modal__footer">
                <button onClick={handleEdit}>OK</button>
                <button onClick={() => {
                  closeModal("discount")
                  setDiscount(0)
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
        width:400px;
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

export default DiscountModal