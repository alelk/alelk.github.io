/**
 * Redux Actions
 *
 * Created by Alex Elkin on 22.11.2017.
 */

import messages from '../messages/messages'

import { updateIntl } from 'react-intl-redux';

export const changeLocale = langId => dispatch => {
    const locale = messages[langId] ? langId : Object.keys(messages)[0];
    return dispatch(updateIntl({locale, messages:messages[locale]}))
};