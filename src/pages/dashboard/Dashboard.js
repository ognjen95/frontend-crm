import React, { useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import TicketTable from '../../components/table/TicketTable';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAllTickets } from '../ticket-listing/ticketListingAction';
import { useSelector } from 'react-redux';

const Dashboard = ({ currentPage }) => {
  const dispatch = useDispatch();

  const { tickets, isLoading, error } = useSelector(
    (state) => state.ticketsListing
  );
  const pendingTickets = tickets.filter((f) => f.status === 'Otvoren');
  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Breadcrumb currentPage="Dashboard" />
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
                + Add new ticket
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" justify="center">
          <Grid item>
            <div>Total tickets: {tickets.length}</div>
            <div>Pending tickets: {pendingTickets.length}</div>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <h3>Recently added tickets</h3>
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
