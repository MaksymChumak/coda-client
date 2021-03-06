import { combineReducers } from 'redux';
import loginReducer from './login';
import registrationReducer from './registration';
import alertReducer from "./alert";


export default combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  alert: alertReducer
});
