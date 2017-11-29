/**
 * App Footer
 *
 * Created by Alex Elkin on 29.11.2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Grid, Header, List, Icon, Segment} from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const AppFooter = ({menuItems}) => {
    return (
        <Segment className="AppFooter" inverted vertical style={{padding:"5em 0"}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            {menuItems &&
                            <List link inverted>
                                {menuItems.map((item, key) => <List.Item key={key}>{item}</List.Item>)}
                            </List>}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as={Link} to="/" inverted style={{fontSize:'1em'}}>
                                <FormattedMessage id="app.title"/>{" - "}<FormattedMessage id="app.subtitle"/>
                            </Header>
                            <List inverted>
                                <List.Item as='a' href={`mailto:elckinne@gmail.com`} target='_top'>
                                    <Icon name='mail outline'/>elckinne@gmail.com
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
};
AppFooter.propTypes = {
    menuItems : PropTypes.arrayOf(PropTypes.node)
};
export default AppFooter;