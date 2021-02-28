import { configureStore } from '@reduxjs/toolkit';
import ticketsListReducer from './pages/ticket-listing/ticketsSlice';
import loginReducer from './components/login/loginSlice';
import userReducer from './pages/dashboard/userSlice';
import newTicketReducer from './components/new-ticket-form/new-ticketSlice';
import ticketReducer from './pages/ticket/ticketSlice';
const store = configureStore({
  reducer: {
    ticketsListing: ticketsListReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: newTicketReducer,
    ticket: ticketReducer,
  },
});

export default store;
