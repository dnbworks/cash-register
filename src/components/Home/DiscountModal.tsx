import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../../context/AppContext';
import styled from 'styled-components';

const DiscountModal = () => {
    const { state } = useGlobalContext();
    const [discount, setDiscount] = useState<string | number | undefined>(state.selectedItem ? state.selectedItem.discount : "0.00")
    const [error, setError ] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null);

    const regex = /^[0-9]+\.[0-9]{2}$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if(state.selectedItem && discount){
          state.editDiscount(state.selectedItem, discount);
        }
        setDiscount(0)
    }

    useEffect(() => {
      inputRef.current?.setSelectionRange(0, 0); // fix
      inputRef.current?.focus();

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
            <div className='d-flex tab-btns justify-content-between'>
                <button onClick={ () => state.changeCashEntity("amount") } className={`${state.cashOptionEntity === "amount" ? "active-btn" : ""}`}>Amount</button>
                <button  onClick={ () => state.changeCashEntity("percent") } className={`${state.cashOptionEntity === "percent" ? "active-btn" : ""}`}>Percent</button>
            </div>
        </div>
        <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <label htmlFor="discount">Enter the amount</label>
              <span className='symbol'>{ state.cashOptionEntity === "amount" ? "$" : "%"}</span>
              <input type="text" id='discount' value={discount} ref={inputRef} onChange={(e) => handleChange(e)}/>
              { error && (<p>{error}</p>)}
            </div>
            <div className="modal__footer">
                <button onClick={handleEdit}>OK</button>
                <button onClick={() => {
                  state.closeModal("discount")
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

        .tab-btns button {
          text-align:center;
          padding: 10px;
          width:180px;
          background: rgb(199, 119, 199);
          font-weight: bold;
          color: #fff;
          outline:none;
          border:none;
        }
      
      .tab-btns button.active-btn {
          background: rgb(202, 53, 202);
      }
        
  
    }
    .button-container {
      display:flex;
      justify-content:space-between;
    }
`;

export default DiscountModal