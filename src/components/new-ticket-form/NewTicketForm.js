import React from 'react';
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
  FormHelperText,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
import './new-ticket.style.css';

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

const NewTicketForm = ({
  onChangeHandler,
  onSubmitHandler,
  formData,
  formInitialState,
  hasError,
  vinCheckState,
}) => {
  const classes = useStyles();

  const {
    drzavaSelect,
    prodavciSelect,
    oblastiSelect,
    prioritetiSelect,
  } = formData;

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
            <h1>New ticket</h1>
          </Grid>
          <Grid className="gridItemW100" item>
            <form onSubmit={onSubmitHandler} className="form-new-ticket center">
              {/* Drzava */}
              <FormControl
                fullWidth={true}
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Drzava
                </InputLabel>
                <Select
                  error={hasError ? !drzava && true : false}
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
                  error={hasError && !prodavac && true}
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
                  error={hasError && !oblasti && true}
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
              {/* Prioritet */}
              <FormControl
                fullWidth={true}
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Prioritet
                </InputLabel>
                <Select
                  error={hasError && !prioritet && true}
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
              {/* Za */}
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
              />
              {/* CC */}
              <TextField
                className={classes.formControl}
                fullWidth={true}
                id="outlined-basic"
                label="CC"
                variant="outlined"
                name="cc"
                value={cc}
                placeholder="Ako ima više odvoji sa ; (tačka-zarez)"
                type="email"
                onChange={onChangeHandler}
              />
              {/* Naslov */}
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
                error={!ticket && hasError && true}
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
                    className={classes.TextField}
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
                    className={classes.TextField}
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
                    className={classes.TextField}
                    fullWidth={true}
                    id="outlined-textarea"
                    label="Email adresa klijenta"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                  />
                  <TextField
                    className={classes.TextField}
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
            </form>
          </Grid>
        </Grid>
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
