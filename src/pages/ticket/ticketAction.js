import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketError,
  ticketSending,
  ticketSendingSuccess,
  ticketSendingError,
  fetchUserSuccess,
  ticketCloseLoading,
  ticketCloseSuccess,
  ticketCloseError,
} from './ticketSlice';

import axios from 'axios';

export const getTicket = (id) => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const token = sessionStorage.getItem('token');

    const { data } = await axios.get(`http://localhost:5000/v1/ticket/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data.result[0])
      return dispatch(fetchTicketError('404 No ticket found!'));

    dispatch(fetchTicketSuccess(data.result[0]));
    dispatch(fetchUserSuccess(data.user));
  } catch (error) {
    console.log(error);
    dispatch(fetchTicketError(error.message));
  }
};

export const sendTicket = ({ id, message }) => async (dispatch) => {
  dispatch(ticketSending());
  try {
    const token = sessionStorage.getItem('token');

    const { data } = await axios.put(
      `http://localhost:5000/v1/ticket/${id}`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(ticketSendingSuccess());
  } catch (error) {
    console.log(error);
    dispatch(ticketSendingError(error.message));
  }
};

export const closeTicket = ({ id }) => async (dispatch) => {
  dispatch(ticketCloseLoading());
  try {
    const token = sessionStorage.getItem('token');

    const { data } = await axios.patch(
      `http://localhost:5000/v1/ticket/close-ticket/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(ticketCloseSuccess(data));
  } catch (error) {
    console.log(error.message);
    dispatch(ticketCloseError(error.message));
  }
};
