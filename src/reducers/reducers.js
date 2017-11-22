/**
 * Reducers
 *
 * Created by Alex Elkin on 22.11.2017.
 */

import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    routing: routerReducer,
    intl : intlReducer
});

export default rootReducer;