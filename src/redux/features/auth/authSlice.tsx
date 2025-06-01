import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: ''
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload;
            if (typeof window !== 'undefined') {
                sessionStorage.setItem("userName", action.payload);
            }
        },
        logout: (state) => {
            state.userName = '';
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem("userName");
            }
        },
        initializeAuth: (state) => {
            if (typeof window !== 'undefined') {
                state.userName = sessionStorage.getItem("userName") || '';
            }
        }
    }
});

export const { login, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;