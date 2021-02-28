import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  newTicket: {},
  error: '',
};

const newTicketSlice = createSlice({
  name: 'newTicket',
  initialState,
  reducers: {
    newTicketPending: (state) => {
      state.isLoading = true;
    },
    newTicketSuccess: (state, action) => {
      state.newTicket = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    newTicketError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    newTicketReset: (state, action) => {
      state.isLoading = false;
      state.newTicket = {};
      state.error = '';
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const {
  newTicketPending,
  newTicketSuccess,
  newTicketError,
  newTicketReset,
} = actions;

export default reducer;
