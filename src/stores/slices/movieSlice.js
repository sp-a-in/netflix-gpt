import { createSlice } from "@reduxjs/toolkit";

let movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        upcomingMovies: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=> {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action)=> {
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action)=> {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action)=> {
            state.trailerVideo = action.payload;
        }
    }
});


export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;