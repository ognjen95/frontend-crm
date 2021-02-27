import { Paper, Container } from '@material-ui/core';
import React, { useState } from 'react';
import LoginComponent from '../../components/login/LoginComponent';
import ResetPassword from '../../components/reset-password/ResetPassword';
import './entry.style.css';
const EntryPage = ({ history }) => {
  const [formLoad, SetFormLoad] = useState('login');

  // Change between login and forgot password form
  const formChange = (formType) => {
    SetFormLoad(formType);
  };

  // const onSubmitResetHandler = (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     return alert('Fill up form');
  //   }

  //   //Submit form
  // };
  return (
    <div className="entery-page ">
      <Paper className="login-paper" elevation={12}>
        <Container>
          {formLoad === 'login' && (
            <LoginComponent history={history} formChange={formChange} />
          )}

          {formLoad === 'reset' && <ResetPassword formChange={formChange} />}
        </Container>
      </Paper>
    </div>
  );
};

export default EntryPage;
