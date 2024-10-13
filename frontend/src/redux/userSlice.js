import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    isAuthenticated: false
}

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loading(state, action) {
            state.loading = action.payload
        },
        login(state, action) {
            state.user = action.payload.user;
            state.isAuthenticated = true
        },
        logout(state) {
            state.user = null,
            state.isAuthenticated = false
        },
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload
        }
    }
})

export const {loading, login, logout, setUser} = userSlice.actions;

export default userSlice.reducer