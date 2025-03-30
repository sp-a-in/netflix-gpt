import { createSlice } from "@reduxjs/toolkit";

let gptSlice = createSlice({
        name: 'gptSlice',
        initialState: {
            gptSearchToggle: true,
        },
        reducers: {
            toggleGptSearch: (state) => {
                 state.gptSearchToggle = !state.gptSearchToggle;
            }
        }
    }
)

export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;