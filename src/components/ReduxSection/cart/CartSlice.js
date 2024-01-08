import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  productsQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "Cart",

  reducers: {
    addToCart: (state, action) => {
      const index = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartData[index].productsQuantity += 1;
      } else {
        const tempData = { ...action.payload, productsQuantity: 1 };
        state.cartData.push(tempData);
      }
    },

    itemQty: (state, action) => {
      const { id, qty } = action.payload;
      const productQty = state.cartData.findIndex((item) => item.id === id);
      state.cartData[productQty].qty = qty;
    },
  },
});

export const { addToCart, itemQty } = CartSlice.actions;
export const selectedCart = (state) => state.Cart.cartData;
// export const selectedQty = (state) => state.Cart.productsQuantity;
export default CartSlice.reducer;
