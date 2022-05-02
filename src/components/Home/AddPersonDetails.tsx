import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/AppContext';


const AddPersonDetails: React.FC = () => {
  const { state: { isAddPersonModalOpen, closeModal } } = useGlobalContext();

  if(!isAddPersonModalOpen){
    return null;
  }

    return (
        <ModalContainer>
            <div className='container modal__addPerson'>
              <div className="modal__header">
                <span className="modal__border"></span>
                <div className="modal__title">ADD CUSTOMER</div>
              </div>
              <form className="modal__form">
                  <div className="d-flex py-10">
                    <div className="d-flex justify-content-between">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id='first_name'/>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id='last_name'/>
                    </div>
                  </div>
                  <div className="d-flex py-10">
                    <div className="d-flex">
                        <label htmlFor="tax_id">Tax ID</label>
                        <input type="text" id='tax_id'/>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="business_name">Business name</label>
                        <input type="text" id='business_name'/>
                    </div>
                  </div>
                  <div className="d-flex py-10">
                    <label htmlFor="address_1">Address 1</label>
                    <input type="text" id='address_1'/>
                  </div>
                  <div className="d-flex py-10">
                    <div className="d-flex">
                        <label htmlFor="city">City</label>
                        <input type="text" id='city'/>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="state">State</label>
                        <input type="text" id='state'/>
                    </div>
                  </div>
                  <div className="d-flex py-10">
                    <div className="d-flex">
                        <label htmlFor="zip_code">Zipcode</label>
                        <input type="text" id='zip_code'/>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id='phone'/>
                    </div>
                  </div>
                  <div className="d-flex py-10">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email'/>
                  </div>
              </form>
              <div className="modal__footer">
                <button>OK</button>
                <button onClick={() => closeModal("add_customer") }>Cancel</button>
              </div>
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
    .modal__addPerson {
        background:#fff;
        width:600px;
        min-height:400px;
        border:1px solid #111;
        position:relative;
        padding: 0.25rem 1rem;
        label {
            width: 150px;
            font-weight: 500;
        }
        input {
            
        }
        
    }
    .button-container {
      display:flex;
      justify-content:space-between;
    }
`;

export default AddPersonDetails