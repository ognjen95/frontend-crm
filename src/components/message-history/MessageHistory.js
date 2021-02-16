import React from 'react';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import './msg-history.style.css';
const MessageHistory = ({ msgHistory }) => {
  return msgHistory.map((msg, index) =>
    msg.messageBy === 'Client' ? (
      <div key={index} className="msg-history-container">
        <div className="msg-sender">
          <div item className="sender">
            {msg.messageBy}
          </div>
          <div item className="date">
            {msg.date}
          </div>
        </div>
        <Paper elevation={6} className="msg-message">
          {msg.message}
        </Paper>
      </div>
    ) : (
      //ako poruku ne salje klijent okreni raspored u drugu stranu i promjeni boju
      <div key={index} className="msg-history-container reverse">
        <div className="msg-sender">
          <div item className="sender">
            {msg.messageBy}
          </div>
          <div item className="date">
            {msg.date}
          </div>
        </div>
        <Paper elevation={6} className="msg-message">
          {msg.message}
        </Paper>
      </div>
    )
  );
};

export default MessageHistory;
