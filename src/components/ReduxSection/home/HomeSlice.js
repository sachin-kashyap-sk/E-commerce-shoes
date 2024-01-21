import { createSlice } from "@reduxjs/toolkit";

import { runningShoesData } from "./../../Data/Home/running/RunningShoesData";
import { sneakersShoesData } from "./../../Data/Home/sneakers/SneakersShoesData";

import { WalkingWomenData } from "../../Data/Women/WalkingWomenData";
import { SneakersWomenData } from "../../Data/Women/SneakersWomenData";

import { MenWalkingShoesData } from "../../Data/Men/walking/MenWalkingShoesData";
import { MenRunningShoesData } from "../../Data/Men/running/MenRunningShoesData";

const initialState = {
  productDes: null,
  productData: sneakersShoesData,
  runningShoes: runningShoesData,
  menRunningShoes: MenRunningShoesData,
  menWalkingShoes: MenWalkingShoesData,
  sneakersWomenData: SneakersWomenData,
  walkingWomenData: WalkingWomenData,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,

  reducers: {
    checkedVal: (state, action) => {
      const index = state.productData
        .concat(
          state.runningShoes,
          state.menRunningShoes,
          state.menWalkingShoes,
          state.sneakersWomenData,
          state.walkingWomenData
        )
        .findIndex((obj) => obj.id === action.payload);

      state.productData.concat(
        state.runningShoes,
        state.menRunningShoes,
        state.menWalkingShoes,
        state.sneakersWomenData,
        state.walkingWomenData
      )[index].checked = !state.productData.concat(
        state.runningShoes,
        state.menRunningShoes,
        state.menWalkingShoes,
        state.sneakersWomenData,
        state.walkingWomenData
      )[index].checked;
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
      state.productDes = sneakersShoesData
        .concat(
          runningShoesData,
          MenRunningShoesData,
          MenWalkingShoesData,
          SneakersWomenData,
          WalkingWomenData
        )
        .find((item) => item.id === action.payload);
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
  runningDesById,
} = HomeSlice.actions;
export const selectedStep = (state) => state.Home.activeStep;
export const selectedRunningShoes = (state) => state.Home.runningShoes;
export const selectedProduct = (state) => state.Home.productData;
export default HomeSlice.reducer;
