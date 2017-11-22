/**
 * Configure Store
 *
 * Created by Alex Elkin on 20.07.2017.
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}