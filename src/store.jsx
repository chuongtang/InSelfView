import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

});


// use local storage for storing loggED in Token
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };

const middleware = [thunk]

const store = configureStore (
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;