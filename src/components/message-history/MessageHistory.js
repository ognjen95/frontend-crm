import React from 'react';
import { Container, Paper } from '@material-ui/core';
import './msg-history.style.css';

const MessageHistory = ({ msgHistory }) => {
  return msgHistory.map((msg, index) =>
    !msg.isOperater ? (
      <div key={index} className="msg-history-container">
        <div className="msg-sender">
          <div className="sender"> C </div>
        </div>
        <Paper elevation={6} className="msg-message">
          <Container>
            <p>{msg.message}</p>
            <div className="msg-date">{msg.msgAt}</div>
          </Container>
        </Paper>
      </div>
    ) : (
      //ako poruku ne salje klijent okreni raspored u drugu stranu i promjeni boju
      <div key={index} className="msg-history-container reverse">
        <div className="msg-sender msg-sender-reverse">
          <div className="sender">O</div>
        </div>
        <Paper elevation={6} className="msg-message reverse-color">
          <Container>
            <p>{msg.message}</p>
            <div className="msg-date">{msg.msgAt}</div>
          </Container>
        </Paper>
      </div>
    )
  );
};

export default MessageHistory;
