import { InitialState, Actions, Item, Product } from '../@types/app'
import { InArray, PriceHelper } from "../utils/utilHelpers";

export function reducer(state: InitialState, action: Actions): InitialState  {

  switch(action.type){
    case 'OPEN_MODAL':
      if(action.payload.type === "customer"){
        return { ...state, isModalOpen: true }
      }
      if(typeof action.payload.type === "number"){
        const item = state.storeProducts.find((item: Product) => item.id === action.payload.type)
        return { ...state, isOpenSelectedModal: true, selectedItem: item  }
      }
      if(action.payload.type === "qty"){
        const item = state.cart.find((item: Item) => item.id === action.payload.type)
        return { ...state, isOpenSelectedModal: true, selectedItem: item, edit: true  }
      }
      if(action.payload.type === "discount"){
        const item = state.cart.find(item => item.id === action.payload.type)
        return { ...state, discountModal: true, selectedItem: item, edit: true  }
      }
      return { ...state, isAddPersonModalOpen: true }
 
    case 'CLOSE_MODAL':
      if(action.payload === "customer"){
        return { ...state, isModalOpen: false }
      }
      if(typeof action.payload === "number"){
        return { ...state, isOpenSelectedModal: false, selectedItem: undefined  }
      }
      if(action.payload == "discount"){
        return { ...state, discountModal: false, selectedItem: undefined }
      }
      return { ...state, isAddPersonModalOpen: false }
    
    case 'CLOSE_MODAL':
      return { ...state, cart: [] }
    
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem: Item) => cartItem.id !== action.payload),
      }

    case 'EDIT_DISCOUNT':
      let tempCart1 = state.cart.map((cartItem: Item) => {
        if (cartItem.id === action.payload.product.id) {
          var discount: number | string, TotalDiscount: number | string, percent;
          if (state.cashOptionEntity === "amount") {
            discount = parseFloat(String(action.payload.discount));
            TotalDiscount = (discount * cartItem.qty).toFixed(2);
          } else {
             discount = parseFloat(String(action.payload.discount));
            percent = (discount / 100) * cartItem.price;
            TotalDiscount = (percent * cartItem.qty).toFixed(2);
          }
  
          const itemTotal = (cartItem.qty * cartItem.price);
          const total = (itemTotal - parseFloat(TotalDiscount)).toFixed(2);
          
          return { ...cartItem, discount: PriceHelper(String(discount)), total, totalDisc: PriceHelper(String(TotalDiscount)) }
        }
        return cartItem
      })
      return { ...state, cart: tempCart1, discountModal: false, edit: false }

    case 'EDIT_QTY':
      let tempCart2 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          let qty = action.payload.quantity;
          const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
          console.log( PriceHelper(String(TotalDiscount)));
          const itemTotal = (qty * cartItem.price);
          const total = (itemTotal - parseFloat(TotalDiscount)).toFixed(2);
          return { ...cartItem, qty, total, totalDisc: PriceHelper(String(TotalDiscount))}
        }
        return cartItem
      })
      return { ...state, cart: tempCart2, discountModal: false, edit: false, isOpenSelectedModal: false }

    case 'CASH_ENTITY':
      return { ...state, cashOptionEntity: action.payload }

    case 'LOADING':
      return { ...state, loading: true }

    case 'DISPLAY_ITEMS':
      return { ...state, storeProducts: action.payload, loading: false }

    case 'ADD_TO_CART':
      const tempProducts: Product[] = [...state.storeProducts];
      const index: number = state.storeProducts.indexOf(action.payload.product);
      const product = tempProducts[index];

      if(!InArray(action.payload.product.id, state.cart)){
        const item: Item = { id: product.id, name: product.name, price: product.price, qty: action.payload.quantity, discount: "0.00", totalDisc: "0.00", total: 0 }
        const price = item.price * item.qty;
        item.total = price;
        return { ...state, cart: [...state.cart, item ], isOpenSelectedModal: false }
      } 

      // TODO update discount according to cash entity
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          const qty = cartItem.qty + action.payload.quantity;
          const itemTotal = (qty * cartItem.price).toFixed(2);
          const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
          const total = (parseFloat(itemTotal) - parseFloat(TotalDiscount)).toFixed(2);
          return { ...cartItem, qty, total, totalDisc: TotalDiscount }
        }
        return cartItem
      })
      return { ...state, cart: tempCart, isOpenSelectedModal: false }

    case 'GET_TOTALS':
      return { ...state }
      
    default:
      return state;
      
  }

  // if (action.type === 'GET_TOTALS') {
  //   let { cartSubTotal, amount } = state.cart.reduce(
  //     (cartTotal, cartItem) => {
  //       const { total, count } = cartItem
  //       cartTotal.cartSubTotal += parseFloat(total)
  //       cartTotal.amount += count
  //       return cartTotal
  //     },
  //     {
  //       cartSubTotal: 0,
  //       amount: 0,
  //     }
  //   )
  //   cartSubTotal = parseFloat(cartSubTotal).toFixed(2);
  //   const cartTax = parseFloat(cartSubTotal * 0.1).toFixed(2);
  //   const cartTotal = (parseFloat(cartSubTotal) + parseFloat(cartTax)).toFixed(2);
   

  //   return { ...state, cartSubTotal, cartTax, cartTotal, amount }
  // }
  
}

