import { loginPending, loginSuccess, loginError } from './loginSlice';

import axios from 'axios';

export const login = ({ email, password }) => async (dispatch) => {
  const formData = { email, password };
  dispatch(loginPending());

  try {
    const { data } = await axios.post(
      'http://localhost:5000/v1/user/login',
      formData
    );

    if (data.status === 'error') return dispatch(loginError(data.message));

    if (data.accessJWT) {
      sessionStorage.setItem('token', data.accessJWT);
      localStorage.setItem(
        'crmToken',
        JSON.stringify({ token: data.accessJWT })
      );
      dispatch(loginSuccess());
    }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
