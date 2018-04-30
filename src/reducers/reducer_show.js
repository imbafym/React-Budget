import _ from 'lodash';
import { SHOW_DATA } from '../actions';
export default function (state = {}, action) {
    switch (action.type) {
        case SHOW_DATA:
        return action.payload;
    
        default:
            return state;
    }
}