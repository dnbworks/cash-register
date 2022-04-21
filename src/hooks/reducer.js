const reducer = (state, action) => {

  if (action.type === 'ADD_TO_CART') {
    const tempProducts = [...state.storeProducts];
    const index = state.storeProducts.indexOf(action.payload.item);
    const product = tempProducts[index];
    console.log(product);
    product.inCart = true;
    product.count = action.payload.quantity;
    const price = product.price * product.count;
    product.total = price;
    product.size = action.payload.size;
    return { ...state, cart: [...state.cart, product ], loading: false }
  }
  if (action.type === 'OPEN_MODAL') {
    return { ...state, isModalOpen: true, modalProduct: action.payload, loading: false }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false, modalProduct: null, loading: false }
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
    console.log(typeof(cartSubTotal));

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
