import api from '../appwrite/appwrite'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,

} from '../constants/reduxConstants'

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const user = await api.createAccount(email, password, username);
    await api.createSession(email, password);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    // store successful Token in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data
      // error.response && error.response.data.message
      //   ? error
      //   // ? error.response.data.message
      //   : error.message,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    await api.createSession(email, password);
    const data = await api.getAccount();
    

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data
      // payload: error.response && error.response.data.message
      // // payload: error
      //     ? error.response.data
      //     // ? error
      //     : error.message,
    });
    console.log('error is', error.response.data);
  }

}

export const logout = () => (dispatch) => {
  api.deleteCurrentSession()
  dispatch({ type: USER_LOGOUT })
  document.location.href = '/login'
}



