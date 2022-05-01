import EmptyCart from './EmptyCart';
import { useGlobalContext } from '../../hooks/Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = () => {
  const state = useGlobalContext();
  const { cart, total } = state;
  if(cart.length > 0){
    return (
      <div className='container'>
          <h3 className='text-align-center'>Your Cart</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-lg-5">
            <CartList state={state} />
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <CartTotal state={state} />
           
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6">
          <EmptyCart/>
        </div>
      </div>
    </div>
  );
};

export default Cart;