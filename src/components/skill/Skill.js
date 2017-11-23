/**
 * Skill
 *
 * Created by Alex Elkin on 23.11.2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Progress
} from 'semantic-ui-react'

const renderSkill = (skill, isGroup, nestingLevel) => (
    <Grid stackable columns={2}>
        <Grid.Column textAlign="right">
            <FormattedMessage id={skill.titleId} defaultMessage={skill.defaultTitle}/>
        </Grid.Column>
        <Grid.Column>
            <Progress percent={skill.level} size={isGroup && nestingLevel == 0 ? "large" : "medium"}
                      inverted
                      color='black'
                      progress
                      style={{width:'50%', minWidth:'300px'}}/>
        </Grid.Column>
    </Grid>
);


const Skill = ({skill, isGroup, nestingLevel=0}) => (
    <Container>
        {isGroup ?
            <Header inverted size={nestingLevel == 0 ? 'large' : nestingLevel == 1 ? 'medium' : 'small'}>
                {renderSkill(skill, isGroup, nestingLevel)}
            </Header> :
            <div>
                {renderSkill(skill, isGroup, nestingLevel)}
            </div>
        }
        {skill.skills && skill.skills.map((skill, key) => <Skill skill={skill} key={key}/>)}
        {skill.groups && skill.groups.map((skill, key) => <Skill skill={skill} key={key} isGroup nestingLevel={nestingLevel+1}/>)}
    </Container>
);

export const skillType = PropTypes.shape({
    titleId: PropTypes.string,
    defaultTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    level: PropTypes.number,
    href: PropTypes.string
});

skillType.skills = PropTypes.arrayOf(skillType);
skillType.groups = PropTypes.arrayOf(skillType);

Skill.propTypes = {
    skill : skillType,
    isGroup : PropTypes.bool,
    nestingLevel : PropTypes.number
};

export default Skill;