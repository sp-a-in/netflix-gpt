import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: 'userSlice',
    initialState: null,
    reducers: {
        addUser: (state, action)=> {
            console.log('action: ', action);
            return action.payload
        },
        removeUser: ()=> {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;