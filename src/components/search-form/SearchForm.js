import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { fetchSearchTickets } from '../../pages/ticket-listing/ticketListingAction';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { value } = e.target;

    dispatch(fetchSearchTickets(value));
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Pretrazi tikete po ID broju"
        inputProps={{ 'aria-label': 'pretrazi tikete' }}
        onChange={onChangeHandler}
      />
      <IconButton
        type="button"
        disabled
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
