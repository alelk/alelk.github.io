import RootContainer from './containers/RootContainer'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {loadMessages} from './messages/messages'
import {baseUri} from './util/util'

import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import {addLocaleData} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import ruLocaleData from 'react-intl/locale-data/ru'
import 'semantic-ui-css/semantic.min.css';

addLocaleData([...enLocaleData, ...ruLocaleData]);

const locale = 'en';

const preloadedState = {
    intl : {
        locale: locale,
        messages: loadMessages(locale)
    }
};

const history = createHistory({basename: baseUri});
const store = configureStore(history, preloadedState);

const AppWrapper = () => (
    <RootContainer store={store} history={history}/>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
