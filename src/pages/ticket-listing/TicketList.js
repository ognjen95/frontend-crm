import React, { useState, useEffect } from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/table/TicketTable';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTickets } from './ticketListingAction';

export default function TicketList() {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.ticketsListing);

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Breadcrumb currentPage="Ticket list" />
        </Grid>
      </Grid>
      <Grid
        style={{ margin: '1rem 0' }}
        justify="space-between"
        alignItems="center"
        container
      >
        <Grid item>
          <Link to="/new-ticket">
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              + Add new ticket
            </Button>
          </Link>
        </Grid>

        <Grid item>
          <SearchForm />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
          item
        >
          {isLoading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          <TicketTable />
        </Grid>
      </Grid>
    </Container>
  );
}
