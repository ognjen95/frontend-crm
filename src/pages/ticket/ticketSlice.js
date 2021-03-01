import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticket: {},
  user: {},
  isLoading: false,
  error: '',
  ticketSendIsLoading: false,
  ticketSent: false,
  ticketCloseLoading: false,
  ticketCloseSuccess: false,
  ticketClosedMsg: {},
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    fetchTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.ticket = action.payload;
      state.isLoading = false;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload;
    },
    fetchTicketError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    ticketSending: (state, action) => {
      state.ticketSendIsLoading = true;
    },
    ticketSendingSuccess: (state, action) => {
      state.ticketSendIsLoading = false;
      state.ticketSent = true;
    },
    ticketSendingError: (state, action) => {
      state.ticketSendIsLoading = false;
      state.ticketSent = false;
      state.error = action.payload;
    },
    ticketSendingReset: (state, action) => {
      state.ticketSendIsLoading = false;
      state.ticketSent = false;
      state.error = '';
    },
    ticketCloseLoading: (state, action) => {
      state.ticketCloseLoading = true;
    },
    ticketCloseSuccess: (state, action) => {
      state.ticketCloseSuccess = true;
      state.ticketCloseLoading = false;
      state.ticketClosedMsg = action.payload;
    },
    ticketCloseError: (state, action) => {
      state.ticketCloseSuccess = false;
      state.ticketCloseLoading = false;
      state.error = action.payload;
    },
    ticketCloseReset: (state, action) => {
      state.ticketCloseSuccess = false;
      state.ticketCloseLoading = false;
      state.ticketClosedMsg = {};
    },
  },
});

const { actions, reducer } = ticketSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketError,
  ticketSending,
  ticketSendingSuccess,
  ticketSendingError,
  ticketSendingReset,
  fetchUserSuccess,
  ticketCloseLoading,
  ticketCloseSuccess,
  ticketCloseError,
  ticketCloseReset,
} = actions;

export default reducer;
