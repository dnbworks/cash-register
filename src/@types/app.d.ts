// @types.app.ts

// item when added to cart
export interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
    discount: number;
    total: number;
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
export interface InitialState {
    loading: boolean;
    cart: Item[] | []; 
    amount: number
    storeProducts: [],
    cashOptionEntity: string;
    isModalOpen: boolean;
    edit: boolean;
    discountModal: boolean;
    isAddPersonModalOpen: boolean;
    isOpenSelectedModal: boolean;
    selectedItem: null,
    cartSubTotal: number;
    cartTax: number;
    cartTotal: number;
}


export interface AppCtx extends InitialState {
    
}

export interface AppProps { 
    children: React.ReactNode
}
  