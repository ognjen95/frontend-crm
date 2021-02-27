import { configureStore } from '@reduxjs/toolkit';
import ticketsListReducer from './pages/ticket-listing/ticketsSlice';
import loginReducer from './components/login/loginSlice';

const store = configureStore({
  reducer: { ticketsListing: ticketsListReducer, login: loginReducer },
});

export default store;
