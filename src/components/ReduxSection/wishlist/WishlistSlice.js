import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  wishQuantity: 0,
};

const WishlistSlice = createSlice({
  initialState,
  name: "WishList",

  reducers: {
    addToWishList: (state, action) => {
      const index = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.wishList[index].wishQuantity += 1;
      } else {
        const tempData = { ...action.payload, wishQuantity: 1 };
        state.wishList.push(tempData);
      }
    },
    removeFromWish: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeFromWish } = WishlistSlice.actions;
export const selectedWishList = (state) => state.WishList.wishList;
export default WishlistSlice.reducer;
