import {
  fetchTicketLoading,
  fetchTicketError,
  fetchTicketSuccess,
  searchTickets,
} from './ticketsSlice';

import axios from 'axios';

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const { data } = await axios.get(
      'http://localhost:5000/v1/ticket/all-tickets',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0bGFnaWNvZ25qZW5AZ21haWwuY29tIiwiaWF0IjoxNjE0Mjc2MTI4LCJleHAiOjE2MTY4NjgxMjh9.meSbihaRtfaj1vE19vpm2Da9RlH6MobLaZIm2Cf2Zp0',
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
