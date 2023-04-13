import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        category:categorySlice,
        cart:cartSlice
    }
})

export default store;