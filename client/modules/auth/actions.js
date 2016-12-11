import cookie from 'react-cookie';
import { replace } from 'react-router-redux';

import types from './constants';

const setToken = function setToken(token) {
  return { type: types.SET_TOKEN, token };
};

const logout = function logout(cb) {
  return (dispatch) => {
    cookie.remove('token');
    dispatch({
      type: types.LOGOUT,
    });
    if (typeof cb === 'function') {
      cb('/');
    } else {
      dispatch(replace('/'));
    }
  };
};

export default {
  logout,
  setToken,
};
