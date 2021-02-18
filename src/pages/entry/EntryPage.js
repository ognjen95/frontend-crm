import { Paper, Container } from '@material-ui/core';
import React, { useState } from 'react';
import LoginComponent from '../../components/LoginComponent';
import ResetPassword from '../../components/ResetPassword';
import './entry.style.css';
const EntryPage = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [formLoad, SetFormLoad] = useState('login');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      SetEmail(value);
    } else if (name === 'password') {
      SetPassword(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill up form');
    }

    //Submit form
    console.log(email, password);
  };

  const onSubmitResetHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Fill up form');
    }

    //Submit form
    console.log(email);
  };

  // Change between login and forgot password form
  const formChange = (formType) => {
    SetFormLoad(formType);
  };
  return (
    <div className="entery-page ">
      <Paper className="login-paper" elevation={12}>
        <Container>
          {formLoad === 'login' && (
            <LoginComponent
              email={email}
              password={password}
              onChangeHandler={onChangeHandler}
              onSubmitHandler={onSubmitHandler}
              formChange={formChange}
            />
          )}

          {formLoad === 'reset' && (
            <ResetPassword
              email={email}
              password={password}
              onChangeHandler={onChangeHandler}
              onSubmitResetHandler={onSubmitResetHandler}
              formChange={formChange}
            />
          )}
        </Container>
      </Paper>
    </div>
  );
};

export default EntryPage;
