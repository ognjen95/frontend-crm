import React from 'react';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import MessageHistory from '../../components/message-history/MessageHistory';
import ticketsdata from '../../data/ticketsdata.json';
const Ticket = () => {
  const ticket = ticketsdata[0];
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
            size=""
            color="secondary"
          >
            Close ticket
          </Button>
        </Grid>
      </Grid>
      <Paper className="ticketDetailsContainer">
        <Container>
          <Grid direction="row" justify="space-around" container>
            <Grid xs={12} sm={4} item>
              <div>Ticket id: {ticket.id}</div>
              <div>Ticket opened: {ticket.datum}</div>
              <div>Ticket status: {ticket.status} </div>
              <div>Ticket subject: {ticket.oblast} </div>
            </Grid>
            <Grid xs={12} sm={4} item>
              <div>Ime i prezime: Petar P.</div>
              <div>VIN: JKFHS9088FDJ</div>
              <div>Email: test@gmail.com</div>
              <div>Tel: 065598111</div>
            </Grid>
            <Grid xs={12} sm={4} item>
              <div>
                Za:{' '}
                {ticket.za.map((t) => (
                  <span key={t}> {`${t};`} </span>
                ))}
              </div>
              <div>
                CC:{' '}
                {ticket.cc.map((t) => (
                  <span key={t}> {`${t};`} </span>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <h2>Poruke</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} item>
          <MessageHistory msgHistory={ticket.history} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Ticket;
