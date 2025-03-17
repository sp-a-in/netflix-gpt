import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

let appStore = configureStore({
    reducer: {
        user: userSlice
    }
})


export default appStore;