import { useGlobalContext } from '../../context/AppContext';
import styled from 'styled-components';
import { BiSearchAlt2 } from "react-icons/bi";

const AddPersonModal: React.FC = () => {
  const { state: { isModalOpen, openModal, closeModal } } = useGlobalContext();

  if(!isModalOpen){
    return null;
  }

  return (
    <ModalContainer>
        <div className='container modal'>
          <div className="modal__header">
            <span className="modal__border"></span>
            <div className="modal__title">CUSTOMER</div>
          </div>
          <form className="modal__form d-flex justify-content-between">
            <div style={{ width: "200px"}}>
              <label htmlFor="customerName">Customer Name</label>
              <input type="text" id='customerName'/>
            </div>
            <div style={{ width: "200px"}}>
              <label htmlFor="phone">Phone</label>
              <input type="text" id='phone'/>
            </div>
            <button type='submit'><BiSearchAlt2 /></button>
          </form>
          <div className="modal__body">
            <ul>
              <li>John Smith    ?</li>
            </ul>
          </div>
          <div className="modal__footer">
            <button onClick={() => openModal({ type: "add_customer" })}>Add</button> 
            <button onClick={() => closeModal("customer")}>Close</button>
          </div>
        </div>
    </ModalContainer>
   
  );
};

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:9;
    // background: rgba(0, 0, 0, 0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    .modal {
        background:#fff;
        width:500px;
        min-height:580px;
        border:1px solid rgb(182, 116, 165);
        img {
            width:90%;
        }
    }
    .button-container {
      display:flex;
      justify-content:space-between;
    }
`;


export default AddPersonModal;