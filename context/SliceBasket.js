import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baskets: [],

};

const basketSlice = createSlice({
  name: 'baskets',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existingProduct = state.baskets.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.baskets.push({ ...action.payload, quantity: 1 });
      }
    },
    removeBasket: (state, action) => {
      const removeProduct = state.baskets.findIndex((item) => item.id === action.payload.id);
      state.baskets.splice(removeProduct, 1);
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.baskets.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const existingProduct = state.baskets.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
  },
});

export const {
  addBasket, removeBasket, increaseQuantity, decrementQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
