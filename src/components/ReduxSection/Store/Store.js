import { configureStore } from "@reduxjs/toolkit";
import Home from "../../ReduxSection/home/HomeSlice";
import Cart from "../../ReduxSection/cart/CartSlice";
import Men from "../../ReduxSection/men/MenSlice";
import Women from "../../ReduxSection/women/WomenSlice";
import WishList from "../../ReduxSection/wishlist/WishlistSlice";
import Kids from "../../ReduxSection/kids/KidsSlice";
export const store = configureStore({
  reducer: {
    Home: Home,
    Cart: Cart,
    Men: Men,
    Women: Women,
    WishList: WishList,
    Kids: Kids,
  },
});

export default store;
