import { createSlice } from "@reduxjs/toolkit";
import { MenRunningShoesData } from "./../../Data/Men/running/MenRunningShoesData";
import { MenWalkingShoesData } from "../../Data/Men/walking/MenWalkingShoesData";

const initialState = {
  productDes: null,
  swipeDrawer: false,
  menRunningShoes: MenRunningShoesData,
  menWalkingShoes: MenWalkingShoesData,
  price: null,
  title: null,
};

const MenSlice = createSlice({
  initialState,
  name: "Men",

  reducers: {
    openDrawer: (state, action) => {
      state.swipeDrawer = action.payload;
    },
    priceFilter: (state, action) => {
      state.menRunningShoes = MenRunningShoesData.filter(
        (item) =>
          item.price >= action.payload.value[0] &&
          item.price <= action.payload.value[1]
      );
      state.menWalkingShoes = MenWalkingShoesData.filter(
        (item) =>
          item.price >= action.payload.value[0] &&
          item.price <= action.payload.value[1]
      );
      state.price = action.payload;
    },

    filterMen: (state, action) => {
      const val = action.payload.value;
      state.menRunningShoes = MenRunningShoesData.filter((item) =>
        item.title.includes(val)
      );

      state.menWalkingShoes = MenWalkingShoesData.filter((item) =>
        item.title.includes(val)
      );

      state.title = action.payload;
    },

    checkedValMen: (state, action) => {
      const index = state.menRunningShoes
        .concat(state.menWalkingShoes)
        .findIndex((item) => item.id === action.payload);
      state.menRunningShoes.concat(state.menWalkingShoes)[index].checked =
        !state.menRunningShoes.concat(state.menWalkingShoes)[index].checked;
    },
  },
});

export const { openDrawer, addToCart, priceFilter, filterMen, checkedValMen } =
  MenSlice.actions;
export const selectedRunningShoes = (state) => state.Men.menRunningShoes;
export const selectedWalkingShoes = (state) => state.Men.menWalkingShoes;
export const selectedDrawer = (state) => state.Men.swipeDrawer;
export const selectedPriceRange = (state) => state.Men.price;
export const selectedFilterTitle = (state) => state.Men.gender;
export default MenSlice.reducer;
