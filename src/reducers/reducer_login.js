import _ from 'lodash';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';

const initState = {
    username: '',
    userid: '',
    token: false
}

export default (state = initState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload };
        case LOGOUT_SUCCESS:
            return {...initState};
        default:
            return state;
    }
}