import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  isLoading: false,
  error: '',
  searchTicketList: [],
};

const ticketListSlice = createSlice({
  name: 'ticketList',
  initialState,
  reducers: {
    fetchTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, action) => {
      state.searchTicketList = state.tickets.filter((ticket) => {
        if (!action.payload) return ticket;

        console.log(ticket._id, action.payload);

        return (
          ticket._id.includes(action.payload) ||
          ticket.prodavac
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          ticket.email.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketError,
  fetchTicketSuccess,
  searchTickets,
} = actions;

export default reducer;
