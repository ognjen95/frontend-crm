import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import NewTicketForm from '../../components/new-ticket-form/NewTicketForm';

const formData = {
  drzavaSelect: [
    'Srbija',
    'Bosna i Hercegovina',
    'Crna Gora',
    'Hrvatska',
    'Slovenija',
  ],

  prodavciSelect: {
    srb: ['TCB', 'MAG', 'TAGO'],
    bih: ['Sladaboni', 'Bunjo', 'Nuic'],
    cg: ['EFEL Motors'],
    slo: ['Ljubljana', 'Ptuj', 'Jereb', 'Furman'],
    hrv: ['Zagreb', 'Split'],
  },
  oblastiSelect: ['Sales', 'Service', 'Accessories', 'Other'],
  prioritetiSelect: ['Nizak', 'Srednji', 'Visoki', 'Urgentno'],
};

const NewTicketPage = () => {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <Breadcrumb currentPage="New Ticket" />
        </Grid>
        <Grid style={{ marginBottom: '50px' }} className="center" item>
          <NewTicketForm formData={formData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewTicketPage;
