import { InArray } from "../utils/InArray";

const reducer = (state, action) => {

  if (action.type === 'ADD_TO_CART') {
    const tempProducts = [...state.storeProducts];
    const index = state.storeProducts.indexOf(action.payload.product);
    const product = tempProducts[index];

    if(!InArray(product.id, state.cart)){
      const item = { id: product.id, name: product.name, price: product.price, qty: action.payload.quantity, discount: "0.00", totalDisc: "0.00" }
      const price = item.price * item.qty;
      item.total = price;
      return { ...state, cart: [...state.cart, item ], isOpenSelectedModal: false }
    } 

    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.product.id) {
        const qty = parseInt(cartItem.qty) + parseInt(action.payload.quantity);
        const itemTotal = (qty * cartItem.price).toFixed(2);
        const TotalDiscount = (cartItem.discount * qty).toFixed(2);
        const total = (itemTotal - TotalDiscount).toFixed(2);
        return { ...cartItem, qty, total, totalDisc: TotalDiscount }
      }
      return cartItem
    })
    return { ...state, cart: tempCart, isOpenSelectedModal: false }
  
  }

  if (action.type === 'OPEN_MODAL') {
    if(action.payload == "customer"){
      return { ...state, isModalOpen: true }
    }
    if(typeof action.payload === "number"){
      const item = state.storeProducts.find(item => item.id === action.payload)
      return { ...state, isOpenSelectedModal: true, selectedItem: item  }
    }
    if(action.payload.type === "qty"){
      const item = state.cart.find(item => item.id === action.payload.id)
      return { ...state, isOpenSelectedModal: true, selectedItem: item, edit: true  }
    }
    if(action.payload.type === "discount"){
      const item = state.cart.find(item => item.id === action.payload.id)
      return { ...state, discountModal: true, selectedItem: item, edit: true  }
    }
    return { ...state, isAddPersonModalOpen: true }
  }

  if (action.type === 'EDIT_DISCOUNT') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.product.id) {
        let discount = parseFloat(action.payload.discount);
        const TotalDiscount = (discount * cartItem.qty).toFixed(2);
        const itemTotal = (cartItem.qty * cartItem.price);
        const total = (itemTotal - TotalDiscount).toFixed(2);
        return { ...cartItem, discount: String(discount).length <= 3 ? discount + ".00" : discount, total, totalDisc: String(TotalDiscount).length <= 3 ? TotalDiscount + ".00" : TotalDiscount }
      }
      return cartItem
    })
    return { ...state, cart: tempCart, discountModal: false, edit: false }
  }

  if (action.type === 'EDIT_QTY') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.product.id) {
        let qty = action.payload.quantity;
        const TotalDiscount = (cartItem.discount * qty).toFixed(2);
        const itemTotal = (qty * cartItem.price);
        const total = (itemTotal - TotalDiscount).toFixed(2);
        return { ...cartItem, qty, total, totalDisc: String(TotalDiscount).length <= 3 ? TotalDiscount + ".00" : TotalDiscount }
      }
      return cartItem
    })
    return { ...state, cart: tempCart, discountModal: false, edit: false, isOpenSelectedModal: false }
  }


  if (action.type === 'CLOSE_MODAL') {
    if(action.payload == "customer"){
      return { ...state, isModalOpen: false }
    }
    if(typeof action.payload === "number"){
      return { ...state, isOpenSelectedModal: false, selectedItem: null }
    }
    if(action.payload == "discount"){
      return { ...state, discountModal: false, selectedItem: null}
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
