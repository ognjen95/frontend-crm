import {
  fetchTicketLoading,
  fetchTicketError,
  fetchTicketSuccess,
  searchTickets,
} from './ticketsSlice';

import axios from 'axios';

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  const token = sessionStorage.getItem('token');
  try {
    const { data } = await axios.get(
      'http://localhost:5000/v1/ticket/all-tickets',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(fetchTicketSuccess(data.result));
  } catch (error) {
    dispatch(fetchTicketError(error.message));
  }
};

export const fetchSearchTickets = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
