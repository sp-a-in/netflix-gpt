import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
        name: 'gptSlice',
        initialState: {
            gptSearchToggle: false,
            movieResults: null,
            movieNames: null,
        },
        reducers: {
            toggleGptSearch: (state) => {
                 state.gptSearchToggle = !state.gptSearchToggle;
            },
            addGptMovieResults: (state, action) => {
                const {movieNames, movieResults} = action.payload;
                state.movieNames = movieNames;
                state.movieResults = movieResults;
            }
        }
    }
)

export const {toggleGptSearch, addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;