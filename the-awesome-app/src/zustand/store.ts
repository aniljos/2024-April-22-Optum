import { CartItem } from "../model/CartItem";
import {devtools} from 'zustand/middleware';
import { create } from 'zustand';

export interface ZustandState {

    cart: CartItem[],
    message: string,
    addItem: (cartItem: CartItem) => void,
    removeItem: (cartItem: CartItem) => void

}

// export const initialState: ZustandState = {
//     cart: [],
//     message: 'Hello Zustand'
// }


//creates a custom hook
export const useZustandStore = create<ZustandState>( (set) => ({

    cart: [],
    message: 'Hello Zustand',
    addItem: (cartItem: CartItem) => set((state) => {

        const copyofCart = [...state.cart];
        const index = copyofCart.findIndex((item) => item.product.id === cartItem.product.id);
        if(index !== -1){
            copyofCart[index].quantity += cartItem.quantity;
        }
        else{
            copyofCart.push(cartItem);
        }

        return {
            ...state,
            cart: copyofCart
        }

    }),
    removeItem: (cartItem: CartItem) => set((state) => {
      
        const copyofCart = [...state.cart];
        const index = copyofCart.findIndex((item) => item.product.id === cartItem.product.id);
        if(index !== -1){
            copyofCart.splice(index, 1);
        }

        return {
            ...state,
            cart: copyofCart
        }
    })

}));