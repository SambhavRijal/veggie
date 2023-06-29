import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { log } from 'console';
import { useSelector } from 'react-redux';
import { RootState } from './store';

type CartItem={
  id: number;
  image:string;
  name:string;
  price:number;
  quantity: number;
}

type CartItemPayload={
  id: number;
  image:string;
  name:string;
  price:number;
}


interface CartState {
  cartitems: Array<CartItem>
}


const initialState: CartState = {
  cartitems: [
    { id: 0, image: '/img/herobg.png', name: 'Empty Cart',price:0,quantity:0}
  ]
}

export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<CartItemPayload>) => {
      const itemExists = state.cartitems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.cartitems.push({ ...action.payload, quantity: 1 });
        console.log("pushed");   
      }
      console.log(action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cartitems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartitems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
            const index = state.cartitems.findIndex((item) => item.id === action.payload);
            state.cartitems.splice(index, 1);
          } else {
            item.quantity--;
          }
      }
      
    },
    removeFromCart: (state, action) => {
      const index = state.cartitems.findIndex((item) => item.id === action.payload);
      state.cartitems.splice(index, 1);
    },
  },
});

// actions
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

// selectors
export const selectItems = (state: RootState) => state.cartitems.cartitems;

export default cartSlice.reducer

// export const cartReducer = cartSlice.reducer;

