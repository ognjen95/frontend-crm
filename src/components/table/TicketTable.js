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
import nodata from '../../imgs/nodata.svg';
import { Link } from 'react-router-dom';
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
                position: 'relative',
                marginTop: '20px',
              }}
              className="tableRow"
            >
              <TableCell
                style={{
                  width: '200px',
                  position: 'absolute',
                  left: '40%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img style={{ width: '200px' }} src={nodata} alt="" />
                <h4>Nepostojeci tiket</h4>
              </TableCell>
            </TableRow>
          ) : (
            tickets.map((ticket, idx) => (
              <TableRow className="tableRow" key={idx}>
                <TableCell scope="row">
                  <Link to={`/ticket/${ticket.id}`}>{ticket.id}</Link>
                </TableCell>
                <TableCell align="left">{ticket.status}</TableCell>
                <TableCell align="left">{ticket.drzava}</TableCell>
                <TableCell align="left">{ticket.oblast}</TableCell>
                <TableCell align="left">{ticket.naslov}</TableCell>
                <TableCell align="left">{ticket.prodavac}</TableCell>
                <TableCell align="left">{ticket.datum}</TableCell>
                <TableCell align="left">{ticket.posiljalac}</TableCell>
                <TableCell align="left">{ticket.poruke}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
