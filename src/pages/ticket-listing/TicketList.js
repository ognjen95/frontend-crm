import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/table/TicketTable';
import ticketsdata from '../../data/ticketsdata.json';
const useStyles = makeStyles({
  table: { minWidth: 650 },
});

export default function TicketList() {
  const classes = useStyles();

  //Tickets from data file
  const tickets = ticketsdata;

  const [str, setStr] = useState('');
  const [dispTickets, setDispTickets] = useState(tickets);

  useEffect(() => {}, [str, dispTickets]);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setStr(value);
    filterTickets(value);
  };

  // function for fitering tickets by ID number
  const filterTickets = (searchInput) => {
    const displayTickets = tickets.filter((ticket) =>
      ticket.id.toString().toLowerCase().includes(searchInput.toLowerCase())
    );
    setDispTickets(displayTickets);
  };

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Breadcrumb currentPage="Ticket list" />
        </Grid>
      </Grid>
      <Grid
        style={{ margin: '1rem 0' }}
        justify="space-evenly"
        alignItems="center"
        container
      >
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
          >
            + Add new ticket
          </Button>
        </Grid>

        <Grid item>
          <SearchForm onChangeHandler={onChangeHandler} str={str} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
          item
        >
          <TicketTable tickets={dispTickets} />
        </Grid>
      </Grid>
    </Container>
  );
}
