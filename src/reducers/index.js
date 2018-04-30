import { combineReducers } from 'redux';
import ShowReducer from './reducer_show';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';


const rootReducer = combineReducers({

    // state: (state = {}) => state
    show: ShowReducer,
    form: formReducer,
    login: LoginReducer
  
  });
  
  export default rootReducer;
  