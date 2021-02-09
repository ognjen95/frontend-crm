import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const ResetPassword = ({
  onChangeHandler,
  onSubmitResetHandler,
  formChange,
  email,
}) => {
  return (
    <Container>
      <Grid className="center" container>
        <Grid item>
          <h1>Reset Password</h1>
          <br />
        </Grid>
        <Grid item>
          <form onSubmit={onSubmitResetHandler} className="login-form center">
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

            <Button
              className="btn"
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Reset
            </Button>
          </form>
        </Grid>
        <Grid item>
          <a href="#!" onClick={() => formChange('login')}>
            Login now
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResetPassword;
