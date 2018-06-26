// import moment from 'moment';
import { SELECT_TAB, DERENDER } from '../actions/tabs';

const initialState = {
    selectedTab: 'dashboard',
    derender: false
};

export default function reducer(state = initialState, action) {
    if (action.type === SELECT_TAB) {
        return Object.assign({}, state, {
            selectedTab: action.tab
        });
    } else if (action.type === DERENDER) {
        if (state.derender === false) {
            return Object.assign({}, state, {
                derender: true
            });
        } else {
            return Object.assign({}, state, {
                derender: false
            });
        }

    }
    console.log(state)
    return state;
}
