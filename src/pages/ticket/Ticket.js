import React, { useState, useEffect } from 'react';
import { Container, Grid, Button, Paper, TextField } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import MessageHistory from '../../components/message-history/MessageHistory';
import ticketsdata from '../../data/ticketsdata.json';
import SendIcon from '@material-ui/icons/Send';

const Ticket = ({ match }) => {
  const [reply, setReply] = useState('');
  const [ticket, setTicket] = useState('');

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setReply(value);
  };

  useEffect(() => {
    for (let i = 0; i < ticketsdata.length; i++) {
      const ticketData = ticketsdata[i];

      if (ticketData.id == match.params.id) {
        setTicket(ticketData);
        continue;
      }
    }
    console.log(ticket);
  }, [ticket, reply]);
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
            <Grid xs={12} sm={4} item>
              <div>
                <strong>Ticket id: </strong> {ticket.id}
              </div>
              <div>
                <strong>Ticket opened: </strong> {ticket.datum}
              </div>
              <div>
                <strong>Ticket status: </strong>
                {ticket.status}{' '}
              </div>
              <div>
                <strong>Ticket subject: </strong>
                {ticket.oblast}{' '}
              </div>
            </Grid>
            <Grid xs={12} sm={4} item>
              <div>
                <strong>Ime i prezime: </strong> Petar P.
              </div>
              <div>
                <strong>VIN: </strong> JKFHS9088FDJ
              </div>
              <div>
                <strong>Email: </strong>test@gmail.com
              </div>
              <div>
                <strong>Tel: </strong> 065598111
              </div>
            </Grid>
            <Grid xs={12} sm={4} item>
              <div>
                <strong>Za: </strong>
                {ticket
                  ? ticket.za.map((t, i) => <span key={i}> {`${t};`} </span>)
                  : null}
              </div>
              <div>
                <strong>CC: </strong>
                {ticket
                  ? ticket.cc.map((t, i) => <span key={i}> {`${t};`} </span>)
                  : null}
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
        style={{ maxHeight: '100vh', overflowY: 'auto', padding: '1rem' }}
        direction="column"
        justify="flex-start"
      >
        <Grid xs={12} item>
          {ticket.history ? (
            <MessageHistory msgHistory={ticket.history} />
          ) : null}
        </Grid>
      </Grid>
      <form>
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
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Ticket;
