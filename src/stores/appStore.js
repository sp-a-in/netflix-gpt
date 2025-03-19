import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import movieSlice from "./slices/movieSlice";

let appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice 
    }
})


export default appStore;