import {DATA_ACTIONS} from './actions';
import { Map } from 'immutable';

// reducer with initial state
const initialState = new Map({
    fetching: false,
    data: null,
    error: null,
    visible:false
});

 function datareducer(state = initialState, action) {
    switch (action.type) {
        case DATA_ACTIONS.MODAL_SUCCESS:
            return state.set('visible', action.visible);
            break;
        default:
            return state;

    }
}



export  default datareducer