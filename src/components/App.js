/**
 * App
 *
 * Created by Alex Elkin on 21.11.2017.
 */
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import StickyMenu from './StickyMenu'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import './App.css';
import {skills} from '../data/skills'
import {projects} from '../data/projects'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'

const menuItemStyle = {
  fontWeight: 100,
  color: "#999"
};

const activeMenuItemStyle = {
  fontWeight: 400
};

const appMenuItems = [
  {uri: "/", title: <FormattedMessage id="menu.skills"/>},
  {uri: "/projects", title: <FormattedMessage id="menu.projects"/>}
];

class App extends Component {

  menuItems() {
    const {location} = this.props;
    return appMenuItems.map(item => (
      <Link to={item.uri} style={item.uri === location.pathname ? activeMenuItemStyle : menuItemStyle}>
        {item.title}
      </Link>
    ));
  }

  render() {
    const {currentLangId, languages, onLanguageSelected} = this.props;
    return (
      <div className="App">
        <AppHeader>
          <StickyMenu languages={languages}
                      currentLangId={currentLangId}
                      onLanguageSelected={onLanguageSelected}
                      menuItems={this.menuItems()}/>
        </AppHeader>
        <Route exact path="/" render={() => <Skills skills={skills}/>}/>
        <Route path="/projects" render={() => <Projects projects={projects}/>}/>
        <AppFooter menuItems={this.menuItems()}/>
      </div>
    );
  }
}

App.propTypes = {
  currentLangId: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    flagName: PropTypes.string,
    id: PropTypes.string
  })),
  onLanguageSelected: PropTypes.func,
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string
  })
};
export default App;
