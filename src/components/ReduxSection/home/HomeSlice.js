import { createSlice } from "@reduxjs/toolkit";
import { runningShoesData } from "./../../Data/Home/running/RunningShoesData";
import { sneakersShoesData } from "./../../Data/Home/sneakers/SneakersShoesData";

const initialState = {
  productDes: null,
  productData: sneakersShoesData,
  runningShoes: runningShoesData,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,

  reducers: {
    checkedVal: (state, action) => {
      const index = state.productData.findIndex(
        (obj) => obj.id === action.payload
      );

      state.productData[index].checked = !state.productData[index].checked;
    },

    runningShoesCheckedVal: (state, action) => {
      const index = state.runningShoes.findIndex(
        (obj) => obj.id === action.payload
      );
      state.runningShoes[index].checked = !state.runningShoes[index].checked;
    },

    searchByTitle: (state, action) => {
      const val = action.payload.title;
      state.productData = sneakersShoesData.filter((item) =>
        item.title.includes(val)
      );
      state.runningShoes = runningShoesData.filter((item) =>
        item.title.includes(val)
      );
    },
    descriptionById: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id === action.payload
      );
    },
  },
});

export const {
  checkedVal,
  runningShoesCheckedVal,
  searchByTitle,
  plusActiveStep,
  minusActiveStep,
  descriptionById,
} = HomeSlice.actions;
export const selectedStep = (state) => state.Home.activeStep;
export const selectedRunningShoes = (state) => state.Home.runningShoes;
export const selectedProduct = (state) => state.Home.productData;
export default HomeSlice.reducer;
