import { loginPending, loginSuccess, loginError } from './loginSlice';
import { getUserProfile } from '../../pages/dashboard/userAction';
import axios from 'axios';

export const login = ({ email, password, history }) => async (dispatch) => {
  dispatch(loginPending());

  try {
    const formData = { email, password };
    const { data } = await axios.post(
      'http://localhost:5000/v1/user/login',
      formData
    );

    if (!data.accessJWT) return dispatch(loginError(data.message));

    if (data.accessJWT) {
      sessionStorage.setItem('token', data.accessJWT);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      // localStorage.setItem(
      //   'crmToken',
      //   JSON.stringify({ token: data.accessJWT })
      // );
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push('/dashboard');
    }
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
