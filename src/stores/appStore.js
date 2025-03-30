import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import movieSlice from "./slices/movieSlice";
import gptSlice from "./slices/gptSlice";
import configSlice from "./slices/configSlice";


let appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice, 
        gpt: gptSlice,
        config: configSlice
    }
})


export default appStore;