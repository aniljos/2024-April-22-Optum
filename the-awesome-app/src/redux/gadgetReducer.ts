import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../model/CartItem";

export interface GadgetState {

    cart: CartItem[]
}

const initialState: GadgetState = {
    cart: []

}
const gadgetSlice = createSlice({

    name: 'gadget',
    initialState: initialState,
    reducers: {
        addItem: (state: GadgetState, action: PayloadAction<CartItem>) => {

            const cartItem = action.payload;
            const index = state.cart.findIndex((item) => item.product.id === cartItem.product.id);
            if(index !== -1){
                state.cart[index].quantity += cartItem.quantity;
            }
            else
            {
                    state.cart.push(cartItem);
            }
           
            
        },
        removeItem: (state: GadgetState, action: PayloadAction<CartItem>) => {
            const cartItem = action.payload;
            const index = state.cart.findIndex((item) => item.product.id === cartItem.product.id);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        }
    }
    

})

// action creators ==> addItem, removeItem
export const { addItem, removeItem } = gadgetSlice.actions;
export default gadgetSlice.reducer;