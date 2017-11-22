/**
 * Configure development store
 *
 * Created by Alex Elkin on 22.11.2017.
 */

import rootReducer from '../reducers/reducers'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

const configureStore = (history, preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history),
                createLogger()
            )
        )
    )
};

export default configureStore;