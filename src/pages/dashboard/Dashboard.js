import React, { useEffect } from 'react';
import './dashboard.style.css';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import TicketTable from '../../components/table/TicketTable';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAllTickets } from '../ticket-listing/ticketListingAction';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { tickets, isLoading, error } = useSelector(
    (state) => state.ticketsListing
  );
  const pendingTickets = tickets.filter((f) => f.status === 'Otvoren');

  let ticketi = [];
  const brojTicketa = () => {
    for (let i = 0; i <= tickets.length; i++) {
      ticketi.push(i);
    }
    return ticketi;
  };

  useEffect(() => {
    console.log(ticketi);
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Link to="/new-ticket">
              <Button
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                style={{ fontSize: '1.2rem' }}
              >
                + Novi tiket
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" justify="center">
          <Grid className="ticketStatsContainer" item>
            <Paper elevation={6} className="ticketStats">
              <h3>
                Ukupno tiketa:
                <span>{tickets.length}</span>
                <span>{brojTicketa}</span>
              </h3>
            </Paper>
            <Paper elevation={6} className="ticketStats">
              <h3>
                Otvoreni tiketi:
                <span>{pendingTickets.length}</span>
              </h3>
            </Paper>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <h3>Nedavno otvoreni tiketi</h3>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" justify="center">
          <Grid
            style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
            item
          >
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            <TicketTable />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
