import { createSlice } from "@reduxjs/toolkit";

let configSlice = createSlice(
    {
        name: "configSlice",
        initialState: {
            selectedLanguage: "english",
        },
        reducers: {
            selectLanguage: (state, action) => {
                state.selectedLanguage = action.payload;
            }
        }
    }
)

export const {selectLanguage} = configSlice.actions;
export default configSlice.reducer;