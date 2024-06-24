import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: {
        name: "",
    },
    token: "",
    loading: false,
};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const {
    setUserDetails
} = authSlice.actions;

export default authSlice.reducer;
