import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },

    increase: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount += 1;
    },

    decrease: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      item.amount -= 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += +item.amount;
        total += +item.amount * +item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
