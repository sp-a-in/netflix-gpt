import { createSlice } from "@reduxjs/toolkit";

let movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action)=> {
            state.trailerVideo = action.payload;
        }
    }
});


export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;