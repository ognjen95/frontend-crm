import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  user: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginError } = actions;

export default reducer;
