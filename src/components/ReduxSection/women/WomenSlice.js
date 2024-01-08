import { createSlice } from "@reduxjs/toolkit";
import { SneakersWomenData } from "../../Data/Women/SneakersWomenData";
import { WalkingWomenData } from "../../Data/Women/WalkingWomenData";
const initialState = {
  swipeDrawer: false,
  price: null,
  title: null,
  sneakersWomenData: SneakersWomenData,
  walkingWomenData: WalkingWomenData,
};

const WomenSlice = createSlice({
  name: "women",
  initialState,

  reducers: {
    openDrawer: (state, action) => {
      state.swipeDrawer = action.payload;
    },
    filterPrice: (state, action) => {
      state.sneakersWomenData = SneakersWomenData.filter(
        (item) =>
          item.price >= action.payload.value[0] &&
          item.price <= action.payload.value[1]
      );
      state.walkingWomenData = WalkingWomenData.filter(
        (item) =>
          item.price >= action.payload.value[0] &&
          item.price <= action.payload.value[1]
      );
      state.price = action.payload;
    },

    filterTitle: (state, action) => {
      const val = action.payload.value;
      state.sneakersWomenData = SneakersWomenData.filter((item) =>
        item.title.includes(val)
      );
      state.walkingWomenData = WalkingWomenData.filter((item) =>
        item.title.includes(val)
      );
    },

    checkedVal: (state, action) => {
      const index = state.sneakersWomenData.findIndex(
        (item) => item.id === action.payload
      );
      state.sneakersWomenData[index].checked =
        !state.sneakersWomenData[index].checked;
    },

    checkedWomenShoes: (state, action) => {
      const index = state.walkingWomenData.findIndex(
        (item) => item.id === action.payload
      );
      state.walkingWomenData[index].checked =
        !state.walkingWomenData[index].checked;
    },
    searchWomenByTitle: (state, action) => {
      const val = action.payload.title;
      state.sneakersWomenData = SneakersWomenData.filter((item) =>
        item.title.includes(val)
      );

      state.walkingWomenData = WalkingWomenData.filter((item) =>
        item.title.includes(val)
      );
    },
  },
});

export const {
  openDrawer,
  filterPrice,
  filterTitle,
  checkedVal,
  checkedWomenShoes,
  searchWomenByTitle,
} = WomenSlice.actions;
export const selectedSneakersWomen = (state) => state.Women.sneakersWomenData;
export const selectedWalkingWomen = (state) => state.Women.walkingWomenData;
export const selectedPrice = (state) => state.Women.price;
export const selectedTitle = (state) => state.Women.title;
export const selectedSwipeDrawer = (state) => state.Women.swipeDrawer;
export default WomenSlice.reducer;
