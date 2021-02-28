import {
  newTicketPending,
  newTicketSuccess,
  newTicketError,
} from './new-ticketSlice';
import axios from 'axios';

export const createNewTicket = ({
  drzava,
  prodavac,
  oblasti,
  prioritet,
  cc,
  ticket,
  napomena,
  ime,
  broj,
  email,
  vin,
}) => async (dispatch) => {
  dispatch(newTicketPending());

  try {
    const token = sessionStorage.getItem('token');
    console.log(token);
    const { data } = await axios.post(
      'http://localhost:5000/v1/ticket',
      {
        drzava,
        prodavac,
        oblasti,
        prioritet,
        cc,
        ticket,
        napomena,
        ime,
        broj,
        email,
        vin,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    if (!data) return dispatch(newTicketError('Unable to send ticket'));
    if (data.status === 'error') return dispatch(newTicketError(data.msg));
    dispatch(newTicketSuccess(data.ticket));
  } catch (error) {
    dispatch(newTicketError(error.message));
  }
};
