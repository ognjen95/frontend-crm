import React, { useState, useEffect } from 'react';
import {
  Paper,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
  TextField,
  Checkbox,
  CircularProgress,
  FormHelperText,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import RefreshIcon from '@material-ui/icons/Refresh';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
import './new-ticket.style.css';
import { textLength, selectCheck, vinChecker } from '../../utils/Validation';
import { createNewTicket } from './newTicketAction';
import { useSelector, useDispatch } from 'react-redux';
import { newTicketReset } from './new-ticketSlice';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  TextField: {
    marginTop: theme.spacing(2),
  },

  moreInfoGrid: {
    [theme.breakpoints.up('md')]: {},
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const NewTicketForm = ({ formData }) => {
  const classes = useStyles();

  const {
    drzavaSelect,
    prodavciSelect,
    oblastiSelect,
    prioritetiSelect,
  } = formData;

  const formInitialStates = {
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

  const [formInitialState, setFormInitialState] = useState(formInitialStates);
  const [hasError, setHasError] = useState('');
  const [vinCheckState, setVinCheckState] = useState({});

  const dispatch = useDispatch();
  const { isLoading: isSending, newTicket, error } = useSelector(
    (state) => state.newTicket
  );

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormInitialState({
      ...formInitialState,
      [name]: value,
    });
  };
  const {
    drzava,
    prodavac,
    oblasti,
    prioritet,
    cc,
    ticket,
    napomena,
    ime,
    broj,
    email,
    vin,
  } = formInitialState;

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

    dispatch(createNewTicket(formInitialState));
  };
  useEffect(() => {
    dispatch(newTicketReset());
  }, [dispatch]);
  return (
    <Paper className="newTicketFormPaper " elevation={3}>
      <Container>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <h1 style={{ margin: '3rem 0', opacity: '.4' }}>Novi tiket</h1>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item>
            <Button
              style={{ marginRight: '100px', opacity: '.7' }}
              onClick={() => {
                setFormInitialState(formInitialStates);
              }}
            >
              <RefreshIcon color="primary" fontSize="large" />
            </Button>
          </Grid>
        </Grid>
        <form onSubmit={onSubmitHandler} className="center">
          <div className="gridItemW100 ">
            <Grid justify="space-between" container spacing={1}>
              <Grid item xs={12} md={6}>
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Drzava
                  </InputLabel>
                  <Select
                    // error={hasError ? !drzava && true : false}
                    className="formSelects"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={drzava}
                    label="Drzava"
                    name="drzava"
                    onChange={onChangeHandler}
                  >
                    {drzavaSelect.map((i, idx) => (
                      <MenuItem key={idx} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                  {hasError && !drzava && (
                    <FormHelperText style={{ color: 'red' }}>
                      Ovo polje je obavezno!
                    </FormHelperText>
                  )}
                </FormControl>
                {/* Prodavac */}
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Prodavac
                  </InputLabel>
                  <Select
                    // error={hasError && !prodavac && true}
                    className="formSelects"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={prodavac}
                    label="Prodavac"
                    name="prodavac"
                    onChange={onChangeHandler}
                  >
                    {drzava === 'Srbija' &&
                      prodavciSelect.srb.map((i, idx) => (
                        <MenuItem key={idx} name={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    {drzava === 'Hrvatska' &&
                      prodavciSelect.hrv.map((i, idx) => (
                        <MenuItem key={idx} name={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    {drzava === 'Bosna i Hercegovina' &&
                      prodavciSelect.bih.map((i, idx) => (
                        <MenuItem key={idx} name={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    {drzava === 'Slovenija' &&
                      prodavciSelect.slo.map((i, idx) => (
                        <MenuItem key={idx} name={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    {drzava === 'Crna Gora' &&
                      prodavciSelect.cg.map((i, idx) => (
                        <MenuItem key={idx} name={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    {!drzava && (
                      <MenuItem style={{ color: 'red' }}>
                        Prvo odaberi drzavu
                      </MenuItem>
                    )}
                  </Select>
                  {hasError && !prodavac && (
                    <FormHelperText style={{ color: 'red' }}>
                      Ovo polje je obavezno
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Oblasti */}
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Oblasti
                  </InputLabel>
                  <Select
                    // error={hasError && !oblasti && true}
                    className="formSelects"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={oblasti}
                    label="Oblasti"
                    name="oblasti"
                    onChange={onChangeHandler}
                  >
                    {oblastiSelect.map((i, idx) => (
                      <MenuItem key={idx} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                  {hasError && !oblasti && (
                    <FormHelperText style={{ color: 'red' }}>
                      Ovo polje je obavezno
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Prioritet
                  </InputLabel>
                  <Select
                    // error={hasError && !prioritet && true}
                    className="formSelects"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={prioritet}
                    label="Prioritet"
                    name="prioritet"
                    onChange={onChangeHandler}
                  >
                    {prioritetiSelect.map((i, idx) => (
                      <MenuItem key={idx} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                  {hasError && !prioritet && (
                    <FormHelperText style={{ color: 'red' }}>
                      Ovo polje je obavezno
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <FormControl
                  fullWidth={true}
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Naslov
                  </InputLabel>
                  <Select
                    className="formSelects"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={oblasti}
                    label="Naslov"
                    name="naslov"
                  >
                    {oblastiSelect.map((i, idx) => (
                      <MenuItem key={idx} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* Za
                <Autocomplete
                  className={classes.formControl}
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        style={{ width: '100%' }}
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.title}
                    </React.Fragment>
                  )}
                  fullWidth={true}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Za "
                      placeholder="Odaberite za koga je tiket"
                    />
                  )}
                /> */}
                {/* CC */}
                <TextField
                  className={classes.formControl}
                  fullWidth={true}
                  id="outlined-basic"
                  label="Za"
                  variant="outlined"
                  name="cc"
                  value={cc}
                  placeholder="Ako ima više odvoji sa ; (tačka-zarez)"
                  type="email"
                  onChange={onChangeHandler}
                />

                {/* TICKET */}
                <TextField
                  fullWidth={true}
                  id="outlined-textarea"
                  label="Ticket"
                  placeholder="Upišite tiket koji želite da pošaljete"
                  rows={6}
                  multiline
                  variant="outlined"
                  className={classes.formControl}
                  name="ticket"
                  value={ticket}
                  onChange={onChangeHandler}
                  helperText={hasError && !ticket && 'Ovo polje je obavezno!'}
                  // error={!ticket && hasError && true}
                />
                {/* Napomena */}
                <TextField
                  fullWidth={true}
                  id="outlined-textarea"
                  label="Napomena"
                  placeholder="Upišite napomenu"
                  rows={3}
                  multiline
                  variant="outlined"
                  className={classes.formControl}
                  name="napomena"
                  value={napomena}
                  onChange={onChangeHandler}
                />
              </Grid>
            </Grid>

            {/* More info */}

            <Grid justify="space-between" container spacing={1}>
              <Grid xs={12} md={6} item>
                <TextField
                  error={
                    vinCheckState.length === false ||
                    vinCheckState.letterO === true
                      ? true
                      : false
                  }
                  className={classes.formControl}
                  fullWidth={true}
                  id="outlined-textarea"
                  label="VIN"
                  variant="outlined"
                  name="vin"
                  value={vin}
                  helperText={(() => {
                    if (vinCheckState.letterO === true) {
                      return 'VIN broj ne sme da sadrzi slovo O!';
                    } else if (vinCheckState.length === false) {
                      return 'VIN broj sadrzi 17 karaktera!';
                    } else {
                      return null;
                    }
                  })()}
                  // helperText={
                  //   vinCheckState.letterO && 'VIN broj ne sadrzi slovo O'
                  // }
                  onChange={onChangeHandler}
                />
                <TextField
                  className={classes.formControl}
                  fullWidth={true}
                  id="outlined-textarea"
                  label="Ime klijenta"
                  variant="outlined"
                  name="ime"
                  value={ime}
                  onChange={onChangeHandler}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <TextField
                  type="email"
                  className={classes.formControl}
                  fullWidth={true}
                  id="outlined-textarea"
                  label="Email adresa klijenta"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                />
                <TextField
                  className={classes.formControl}
                  fullWidth={true}
                  id="outlined-textarea"
                  label="Broj telefona klijenta"
                  variant="outlined"
                  name="broj"
                  value={broj}
                  type="tel"
                  onChange={onChangeHandler}
                />
              </Grid>
            </Grid>
          </div>
          {newTicket && newTicket.userId ? (
            <Alert severity="success" style={{ margin: '1rem 0' }}>
              <h2>New ticket created successfuly!</h2>
            </Alert>
          ) : null}
          {error && (
            <Alert style={{ margin: '1rem 0' }} severity="error">
              <h2>{error} </h2>
            </Alert>
          )}
          {isSending ? (
            <CircularProgress
              style={{ fontSize: '1.5rem', margin: '2rem 0' }}
            />
          ) : (
            <Button
              className="btn"
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              style={{ fontSize: '1.5rem' }}
            >
              Posalji tiket
            </Button>
          )}
        </form>
      </Container>
    </Paper>
  );
};
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
export default NewTicketForm;
