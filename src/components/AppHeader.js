/**
 * App Header
 *
 * Created by Alex Elkin on 21.11.2017.
 */

import React from 'react'
import {
    Container,Header, Segment
} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'


const AppHeader = ({children}) => (
    <Segment inverted>
    <Container className="AppHeader">
        <Header as='h1' inverted style={{paddingTop:'1em'}}><FormattedMessage id="app.title"/></Header>
        <Header as='h4' inverted style={{paddingBottom: '1em'}}><FormattedMessage id="app.subtitle"/></Header>
        {children}
    </Container>
    </Segment>
);

export default AppHeader;