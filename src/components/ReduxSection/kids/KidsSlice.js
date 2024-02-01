import { createSlice } from "@reduxjs/toolkit";
import { CasualShoesData } from "../../Data/Kids/casual/CasualShoesData";

const initialState = {
  swipeDrawer: false,
  price: null,
  title: null,
  kidsCasualShoesData: CasualShoesData,
};

const KidsSlice = createSlice({
  name: "kids",
  initialState,

  reducers: {
    openDrawer: (state, action) => {
      state.swipeDrawer = action.payload;
    },
    filterPrice: (state, action) => {
      state.kidsCasualShoesData = CasualShoesData.filter(
        (item) =>
          item.price >= action.payload.value[0] &&
          item.price <= action.payload.value[1]
      );
      state.price = action.payload;
    },
    filterTitle: (state, action) => {
      const val = action.payload.value;
      state.kidsCasualShoesData = CasualShoesData.filter((item) =>
        item.title.includes(val)
      );
      state.title = action.payload;
    },
    checkedKidsVal: (state, action) => {
      const index = state.kidsCasualShoesData.findIndex(
        (item) => item.id === action.payload
      );
      state.kidsCasualShoesData[index].checked =
        !state.kidsCasualShoesData[index].checked;
    },
    searchKidsByTitle: (state, action) => {
      const val = action.payload.title;
      state.kidsCasualShoesData = state.kidsCasualShoesData.filter((item) =>
        item.title.includes(val)
      );
    },
  },
});

export const {
  openDrawer,
  filterPrice,
  filterTitle,
  checkedKidsVal,
  searchKidsByTitle,
} = KidsSlice.actions;
export const selectedSwipeDrawer = (state) => state.Kids.swipeDrawer;
export const selectedPrice = (state) => state.Kids.price;
export const selectedTitle = (state) => state.Kids.title;
export const selectedCasualShoes = (state) => state.Kids.kidsCasualShoesData;
export default KidsSlice.reducer;
