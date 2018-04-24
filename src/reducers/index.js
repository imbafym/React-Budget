import { combineReducers } from 'redux';
import ShowReducer from './reducer_show';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({

    // state: (state = {}) => state
    show: ShowReducer,
    form: formReducer
  
  });
  
  export default rootReducer;
  