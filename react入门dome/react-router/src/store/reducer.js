import { combineReducers } from 'redux-immutable';

import { reducer as user } from '../components/store';

export default combineReducers({
    user
})