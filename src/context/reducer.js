// const inArray = (identifer, items) => {
//   var count = items.length;
//   for(var i=0; i<count; i++) {
//       if(items[i].id === identifer) return true;
//   }
//   return false;
// }

import { InArray } from "../utils/InArray";

const reducer = (state, action) => {

  if (action.type === 'ADD_TO_CART') {
    const product = action.payload.product;
    console.log(state.cart.indexOf(action.payload.product) <= -1);
    console.log(state.cart);
    console.log(product);

    if(!InArray(product.id, state.cart)){
      product.qty = action.payload.quantity;
      product.discount = 0.00;
      const price = product.price * product.qty;
      product.total = price;
      return { ...state, cart: [...state.cart, product ], isOpenSelectedModal: false }
    } 

    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.product.id) {
        const qty = parseInt(cartItem.qty) + parseInt(action.payload.quantity);
        const itemTotal = (qty * cartItem.price).toFixed(2);
        return { ...cartItem, qty, total: itemTotal }
      }
      return cartItem
    })
    return { ...state, cart: tempCart, isOpenSelectedModal: false }
  
  }
  if (action.type === 'OPEN_MODAL') {
    // console.log(typeof action.payload === "number");
    if(action.payload == "customer"){
      return { ...state, isModalOpen: true }
    }
    if(typeof action.payload === "number"){
      const item = state.storeProducts.find(item => item.id === action.payload)
      return { ...state, isOpenSelectedModal: true, selectedItem: item  }
    }
    return { ...state, isAddPersonModalOpen: true }
  }
  if (action.type === 'CLOSE_MODAL') {
    if(action.payload == "customer"){
      return { ...state, isModalOpen: false }
    }
    if(typeof action.payload === "number"){
      return { ...state, isOpenSelectedModal: false, selectedItem: null }
    }
    return { ...state, isAddPersonModalOpen: false }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        const itemCount = cartItem.count + 1;
        const itemTotal = (itemCount * cartItem.price).toFixed(2);
        return { ...cartItem, count: itemCount, total: itemTotal }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          const itemCount = cartItem.count - 1;
          const itemTotal = (itemCount * cartItem.price).toFixed(2);
          return { ...cartItem, count: itemCount, total: itemTotal }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.count !== 0)
    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTALS') {
    let { cartSubTotal, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { total, count } = cartItem
        cartTotal.cartSubTotal += parseFloat(total)
        cartTotal.amount += count
        return cartTotal
      },
      {
        cartSubTotal: 0,
        amount: 0,
      }
    )
    cartSubTotal = parseFloat(cartSubTotal).toFixed(2);
    const cartTax = parseFloat(cartSubTotal * 0.1).toFixed(2);
    const cartTotal = (parseFloat(cartSubTotal) + parseFloat(cartTax)).toFixed(2);
    // console.log(typeof(cartSubTotal));

    return { ...state, cartSubTotal, cartTax, cartTotal, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, storeProducts: action.payload, loading: false }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempCart }
  }
  throw new Error('no matching action type')
}

export default reducer
