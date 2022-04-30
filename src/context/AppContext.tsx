import { Item, InitialState, AppCtx, Product, AppProps } from '../@types/app'
import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import axios, { AxiosError } from 'axios'

const url: string = 'http://localhost:3001/products';
const AppContext = React.createContext<AppCtx | null>(null);

const getLocalStorage = (): Item[] | [] => {
  const list: string | null = localStorage.getItem('cart');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const initialState: InitialState = {
    loading: false,
    cart: getLocalStorage(),
    amount: 0,
    storeProducts: [],
    cashOptionEntity: "amount",
    isModalOpen: false,
    edit: false,
    discountModal: false,
    isAddPersonModalOpen: false,
    isOpenSelectedModal: false,
    selectedItem: null,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}

const AppProvider = ( props: AppProps ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getItem = (id: number) => {
      const product = state.storeProducts.find((item: Product) => item.id === id );
      return product;
    }

    const openModal = (id: number | string) => {
      dispatch({ type: 'OPEN_MODAL', payload: id })
    };
    const closeModal = (id: number | string) => {
      dispatch({ type: 'CLOSE_MODAL', payload: id })
    };

    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id: number ) => {
      dispatch({ type: 'REMOVE', payload: id })
    }

    const editDiscount = (product: Item, discount: string | number ) => {
      dispatch({ type: 'EDIT_DISCOUNT', payload: { product, discount} })
    }

    const editQty = (product: Item, quantity: number) => {
      dispatch({ type: 'EDIT_QTY', payload: { product, quantity} })
    }

    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      try{
        const response = await axios(url);
        const data = response.data;
        dispatch({ type: 'DISPLAY_ITEMS', payload: data });
      } catch(e: any | AxiosError){
        console.log(e.response);
      }
    }


    const changeCashEntity = (entity: number) => {
      dispatch({ type: 'CASH_ENTITY', payload: entity });
    }

    const add_to_cart = (product: Product, quantity: number) => {
      dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    }
    
    useEffect(() => {
      fetchData()
    }, [])
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart));
      dispatch({ type: 'GET_TOTALS' });
    }, [state.cart])

    return (
      <AppContext.Provider
        value={{
          ...state,
          clearCart,
          remove,
          add_to_cart,
          openModal,
          closeModal,
          editDiscount,
          editQty,
          changeCashEntity
        }}
      >
        { props.children }
      </AppContext.Provider>
    )
  }
  // make sure use
  export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }