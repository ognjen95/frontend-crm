import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './table.style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: { minWidth: 650 },
});

const tableHeaders = [
  'ID',
  'Status',
  'Drzava',
  'Oblast',
  'Naslov',
  'Prodavac',
  'Datum',
  'Posiljalac',
  'Poruke',
];

function createData(
  id,
  status,
  drzava,
  oblast,
  naslov,
  prodavac,
  datum,
  posiljalac,
  poruke
) {
  return {
    id,
    status,
    drzava,
    oblast,
    naslov,
    prodavac,
    datum,
    posiljalac,
    poruke,
  };
}

const rows = [
  createData(
    '12425',
    'Zatvoren',
    'BIH',
    'Servis',
    'Spare parts',
    'TCB',
    ' 25.12.2015  16:04',
    'Live chat',
    4
  ),
  createData(
    '12545',
    'Zatvoren',
    'BIH',
    'Servis',
    'Spare parts',
    'TCB',
    ' 25.12.2015  16:04',
    'Live chat',
    4
  ),
  createData(
    '12645',
    'Zatvoren',
    'BIH',
    'Servis',
    'Spare parts',
    'TCB',
    ' 25.12.2015  16:04',
    'Live chat',
    4
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((item, index) => (
              <TableCell key={index}>
                <h3>{item} </h3>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!rows.length ? (
            <h2>No Tickets</h2>
          ) : (
            rows.map((row) => (
              <TableRow className="tableRow" key={row.id}>
                <TableCell scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.drzava}</TableCell>
                <TableCell align="right">{row.oblast}</TableCell>
                <TableCell align="right">{row.naslov}</TableCell>
                <TableCell align="right">{row.prodavac}</TableCell>
                <TableCell align="right">{row.datum}</TableCell>
                <TableCell align="right">{row.posiljalac}</TableCell>
                <TableCell align="right">{row.poruke}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
