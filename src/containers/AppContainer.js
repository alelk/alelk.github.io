/**
 * App Container
 *
 * Created by Alex Elkin on 22.11.2017.
 */
import App from '../components/App'
import {changeLocale} from '../actions/actions'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const languages = [
    {title: "Русский", flagName: "ru", id: "ru"},
    {title: "English", flagName: "us", id: "en"},
];

const AppContainer = ({currentLangId, changeLocale, location}) => (
    <App currentLangId={currentLangId}
         languages={languages}
         onLanguageSelected={lang => changeLocale(lang.id)}
         location={location}/>
);

AppContainer.propTypes = {
    currentLangId : PropTypes.string,
    changeLocale : PropTypes.func,
    location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    currentLangId : state.intl.locale,
    location: state.routing.location
});

export default connect(
    mapStateToProps, {changeLocale}
)(AppContainer);
