import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const LoginComponent = ({
  onChangeHandler,
  onSubmitHandler,
  formChange,
  email,
  password,
}) => {
  return (
    <Container>
      <Grid className="center" container>
        <Grid item>
          <h1>Login</h1>
          <br />
        </Grid>
        <Grid item>
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
