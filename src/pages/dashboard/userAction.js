import { getUserPending, getUserSuccess, getUserError } from './userSlice';

import axios from 'axios';

export const getUserProfile = () => async (dispatch) => {
  dispatch(getUserPending());
  try {
    const token = sessionStorage.getItem('token');

    if (!token) return dispatch(getUserError('Token not found'));

    const { data } = await axios.get('http://localhost:5000/v1/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.user && data.user._id) return dispatch(getUserSuccess(data.user));

    dispatch(getUserError('User is not found'));
  } catch (error) {
    dispatch(getUserError(error.mesage));
  }
};
