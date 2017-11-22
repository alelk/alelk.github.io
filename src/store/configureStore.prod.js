/**
 * Configure production store
 *
 * Created by Alex Elkin on 12.09.2017.
 */
import rootReducer from '../reducers/reducers'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

const configureStore = (history, preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        )
    )
};

export default configureStore;