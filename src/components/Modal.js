import { useGlobalContext } from '../hooks/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = () => {
  const { isModalOpen, closeModal, modalProduct } = useGlobalContext();

  if(!isModalOpen){
    return null;
  }

  return (
    <ModalContainer>
        <div className='container modal'>
            <div className="modal">
                <h5>Item Added To Cart</h5>
                <img src={modalProduct.img} alt="item" />
                <h5>{modalProduct.title}</h5>
                <p>${modalProduct.price} × {modalProduct.count} <strong>Total: </strong>${modalProduct.total}</p>
                <span><strong>Size: </strong>{modalProduct.size}</span>
                <div className="button-container">
                  <Link to="/" onClick={closeModal}>Continue Shopping</Link>
                  <Link to="/cart" onClick={closeModal}>Cart</Link>
                </div>
                
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
    background: rgba(0, 0, 0, 0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    .modal {
        background:#fff;
        width:300px;
        img {
            width:90%;
        }
    }
    .button-container {
      display:flex;
      justify-content:space-between;
    }
`;


export default Modal;