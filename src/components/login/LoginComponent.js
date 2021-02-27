import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { login } from './loginAction';

const LoginComponent = ({ formChange, history }) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      SetEmail(value);
    } else if (name === 'password') {
      SetPassword(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill up form');
    }

    dispatch(login({ email, password }));

    history.push('/dashboard');
  };

  return (
    <Container>
      <Grid className="center" direction="column" container>
        <Grid item>
          <h1>Login</h1>
          <br />
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid xs={12} item>
          <form onSubmit={onSubmitHandler} className="login-form center">
            <TextField
              required={true}
              type="email"
              name="email"
              id="standard-basic-email"
              label="Email"
              placeholder="Enter Your email"
              fullWidth={true}
              value={email}
              onChange={onChangeHandler}
            />
            <br />
            <TextField
              required={true}
              type="password"
              name="password"
              id="standard-basic-password"
              label="Password"
              placeholder="Enter Your password"
              fullWidth={true}
              value={password}
              onChange={onChangeHandler}
            />{' '}
            <Button
              className="btn"
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Login
            </Button>
            {isLoading && <CircularProgress />}
          </form>
        </Grid>
        <Grid item>
          <a href="#!" onClick={() => formChange('reset')}>
            Forgot Password?
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginComponent;
