import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import TicketTable from '../../components/table/TicketTable';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import ticketsdata from '../../data/ticketsdata.json';
import { Link } from 'react-router-dom';

const Dashboard = ({ currentPage }) => {
  const tickets = ticketsdata;
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
            <div>Total tickets: 50</div>
            <div>Pending tickets: 50</div>
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
            <TicketTable tickets={tickets} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
