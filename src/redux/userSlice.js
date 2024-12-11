import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "Auth",
    initialState : {
        status : false,
        userData : null
    },
    reducers:{
        login : (state, action)=>{
            state.status = true,
            state.userData = action.payload.userData
        },

        logOut : (state, action)=>{
            state.status = false,
            state.userData = null
        }
    }
})

export const {logOut, login} = userSlice.actions;
export default userSlice.reducer;