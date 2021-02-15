import React, { useEffect } from 'react';
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

export default function BasicTable({ tickets }) {
  const classes = useStyles();
  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

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
        <TableBody className="center">
          {!tickets.length ? (
            <TableRow
              style={{
                position: 'absolute',
              }}
              className="tableRow"
            >
              <TableCell>Nema tiketa sa ovim ID brojem</TableCell>
            </TableRow>
          ) : (
            tickets.map((row, idx) => (
              <TableRow className="tableRow" key={idx}>
                <TableCell scope="row">{row.id}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.drzava}</TableCell>
                <TableCell align="left">{row.oblast}</TableCell>
                <TableCell align="left">{row.naslov}</TableCell>
                <TableCell align="left">{row.prodavac}</TableCell>
                <TableCell align="left">{row.datum}</TableCell>
                <TableCell align="left">{row.posiljalac}</TableCell>
                <TableCell align="left">{row.poruke}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
