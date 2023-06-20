import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    medicinesCart: [],
    quantity: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // console.log(state.total);
      state.medicinesCart.push(action.payload);
      state.quantity.push(1);
      state.total += action.payload.unitPrice;
    },
    updateProduct: (state, action) => {
      state.medicinesCart = action.payload.medicinesCart;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
    },
    updateQuantity: (state, action) => {
      // console.log(action.payload);
      state.quantity[action.payload.index] = action.payload.quantity;
    },
    updateTotalPrice: (state, action) => {
      state.total = action.payload;
    },
    clearCart: (state) => {
      state.medicinesCart = [];
      state.quantity = [];
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  clearCart,
  updateTotalPrice,
  updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
