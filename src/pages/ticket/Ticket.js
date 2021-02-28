import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, Paper, TextField } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import MessageHistory from '../../components/message-history/MessageHistory';
import SendIcon from '@material-ui/icons/Send';
import { getTicket, sendTicket, closeTicket } from './ticketAction';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ticketSendingReset } from './ticketSlice';

const Ticket = ({ match }) => {
  const dispatch = useDispatch();
  const {
    ticket,
    isLoading,
    error,
    ticketSendIsLoading,
    ticketSent,
  } = useSelector((state) => state.ticket);

  const [reply, setReply] = useState('');

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setReply(value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(sendTicket({ id: match.params.id, message: reply }));
  };
  useEffect(() => {
    dispatch(getTicket(match.params.id));
    dispatch(ticketSendingReset());
    setReply('');
  }, [dispatch, ticketSent]);
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Breadcrumb currentPage="Ticket" />
        </Grid>
      </Grid>
      <Grid justify="flex-end" container>
        <Grid item>
          <Button
            onClick={() => {
              dispatch(closeTicket({ id: match.params.id }));
            }}
            style={{ marginBottom: '2rem' }}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Zatvori tiket
          </Button>
        </Grid>
      </Grid>
      <Paper className="ticketDetailsContainer">
        <Container>
          <Grid direction="row" justify="space-around" container>
            <Grid xs={12} md={4} item>
              <div>
                <strong>Ticket id: </strong> {ticket._id}
              </div>
              <div>
                <strong>Vreme otvaranja : </strong> {ticket.openAt}
              </div>
              <div>
                <strong>Ticket status: </strong>
                {ticket.status}{' '}
              </div>
              <div>
                <strong>Ticket oblasst: </strong>
                {ticket.oblasti}{' '}
              </div>
            </Grid>
            <Grid xs={12} md={4} item>
              <div>
                <strong>Ime i prezime: </strong> {ticket.ime}
              </div>
              <div>
                <strong>VIN: </strong> {ticket.vin}
              </div>
              <div>
                <strong>Email: </strong>
                {ticket.email}
              </div>
              <div>
                <strong>Tel: </strong> {ticket.broj}
              </div>
            </Grid>
            <Grid xs={12} md={4} item>
              <div>
                <strong>Za: </strong>
                {ticket.cc}
              </div>
              <div>
                <strong>CC: </strong>
                {ticket.cc}
              </div>
            </Grid>
          </Grid>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="center"
            container
          >
            <Grid xs={12} md={4} item>
              <div
                style={{
                  fontSize: '1.1rem',
                  color: 'red',
                  width: '100%',
                  paddingTop: '10px',
                }}
              >
                <strong>Napomena: </strong> {ticket.napomena}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <h1 style={{ margin: '3rem 0', opacity: '.4' }}>Poruke</h1>
        </Grid>
      </Grid>
      <Grid
        container
        className="msg-history-container-box"
        style={{ padding: '1rem' }}
        direction="column"
        justify="flex-start"
      >
        <Grid xs={12} item>
          {isLoading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {ticket.conversation ? (
            <MessageHistory msgHistory={ticket.conversation} />
          ) : null}
        </Grid>
      </Grid>
      <form onSubmit={onSubmitHandler}>
        <Grid style={{ margin: '2rem 0 1rem 0' }} container>
          <Grid xs={12} item>
            <TextField
              fullWidth={true}
              id="outlined-textarea"
              label="Odgovori"
              placeholder="Upišite Vasu poruku ovde"
              rows={6}
              multiline
              variant="outlined"
              name="reply"
              value={reply}
              onChange={onChangeHandler}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} item>
            {ticketSendIsLoading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{ fontSize: '1.2rem', float: 'right' }}
                endIcon={<SendIcon fontSize="large" />}
              >
                Posalji odgovor
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Ticket;
