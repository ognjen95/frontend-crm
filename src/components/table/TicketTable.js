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
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: { minWidth: 650 },
});

const tableHeaders = [
  'ID',
  'Status',
  'Drzava',
  'Oblast',
  'Prodavac',
  'Datum',
  'Poruke',
];

export default function BasicTable() {
  const classes = useStyles();

  const { searchTicketList, tickets, isLoading, error } = useSelector(
    (state) => state.ticketsListing
  );

  useEffect(() => {}, [tickets, searchTicketList]);

  if (isLoading) return <h3>Loading</h3>;
  if (error) return <h3>{error}</h3>;
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
            searchTicketList.map((ticket, idx) => (
              <TableRow className="tableRow" key={idx}>
                <TableCell scope="row">
                  <Link to={`/ticket/${ticket._id}`}>{ticket._id}</Link>
                </TableCell>
                <TableCell align="left">{ticket.status}</TableCell>
                <TableCell align="left">{ticket.drzava}</TableCell>
                <TableCell align="left">{ticket.oblasti}</TableCell>
                <TableCell align="left">{ticket.prodavac}</TableCell>
                <TableCell align="left">{ticket.openAt}</TableCell>
                <TableCell align="left">{ticket.conversation.length}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
