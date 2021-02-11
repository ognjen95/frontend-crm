import React, { useState } from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import Breadcrumb from '../../components/breadcrumbs/BreadCrumbs';
import NewTicketForm from '../../components/new-ticket-form/NewTicketForm';
import { textLength, selectCheck, vinChecker } from '../../utils/Validation';

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
const formState = {
  drzava: '',
  prodavac: '',
  oblasti: '',
  prioritet: '',
  cc: '',
  ticket: '',
  napomena: '',
  ime: '',
  broj: '',
  email: '',
  vin: '',
};

const NewTicketPage = () => {
  const [formInitialState, setFormInitialState] = useState(formState);
  const [hasError, setHasError] = useState('');
  const [vinCheckState, setVinCheckState] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormInitialState({
      ...formInitialState,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const isValidTextLength = textLength(formInitialState.ticket);
    const isChecked = selectCheck(
      //ako dodam neki select ovde i u util funkcijama dodati
      formInitialState.drzava,
      formInitialState.prodavac,
      formInitialState.oblasti,
      formInitialState.prioritet
    );
    // proverava da li VIN ima ispravan broj karaktera i da li sadrzi slovo O, funkcija u utils
    const vinChecked = vinChecker(formInitialState.vin);
    setVinCheckState(vinChecked);
    isValidTextLength && isChecked ? setHasError(false) : setHasError(true);

    console.log(await vinCheckState);
    // console.log(isValidTextLength, isChecked);
    // console.log(hasError);
  };

  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <Breadcrumb currentPage="New Ticket" />
        </Grid>
        <Grid style={{ marginBottom: '50px' }} className="center" item>
          <NewTicketForm
            formData={formData}
            onChangeHandler={onChangeHandler}
            formInitialState={formInitialState}
            onSubmitHandler={onSubmitHandler}
            hasError={hasError}
            vinCheckState={vinCheckState}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewTicketPage;
