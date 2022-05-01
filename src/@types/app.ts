
// item when added to cart
export interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
    discount: number | string;
    total: number;
    totalDisc: string;
}

// product fetched from database
export interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    weight: number,
    category: string
}

// reducer initial state
export type InitialState = {
    loading: boolean;
    cart: Item[] | []; 
    amount: number
    storeProducts: Product[],
    cashOptionEntity: string;
    isModalOpen: boolean;
    edit: boolean;
    discountModal: boolean;
    isAddPersonModalOpen: boolean;
    isOpenSelectedModal: boolean;
    selectedItem: Item | Product | null,
    cartSubTotal: number;
    cartTax: number;
    cartTotal: number;
    openModal: ( id: number | string ) => void;
    closeModal : ( id: number | string ) => void;
    clearCart: () => void;
    remove: (id: number) => void;
    editDiscount: ( product: Item, discount: string | number ) => void;
    editQty: ( product: Item, quantity: number) => void;
    changeCashEntity: ( entity: string) => void;
    add_to_cart: ( product: Product, quantity: number) => void;
}



export type AppProps = { 
    children: React.ReactNode
}

type PayloadObj = {
    type: string | number;
}

type Discount = {
    product: Item;
    discount: number | string;
}

type Quantity = {
    product: Item;
    quantity: number;
}

type AddToCartObj = {
    product: Product;
    quantity: number;
}

export type Actions = 
 | { type: "OPEN_MODAL", payload: PayloadObj } 
 | { type: "CLOSE_MODAL", payload: string | number }
 | { type: "CLEAR_CART" }
 | { type: "REMOVE", payload: number }
 | { type: "EDIT_DISCOUNT", payload: Discount }
 | { type: "EDIT_QTY", payload: Quantity }
 | { type: "CASH_ENTITY", payload: string }
 | { type: "LOADING"}
 | { type: "DISPLAY_ITEMS", payload: Product[] }
 | { type: "ADD_TO_CART", payload: AddToCartObj }
 | { type: "GET_TOTALS" }
 ;
