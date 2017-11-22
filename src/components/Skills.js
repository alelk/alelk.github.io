/**
 * Skills Section
 *
 * Created by Alex Elkin on 22.11.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react'

const renderSkill = (skill, key) => (
    <div key={key}>
        <FormattedMessage id={skill.titleId} defaultMessage={skill.defaultTitle}/>
        {skill.skills && <div>{skill.skills.map(renderSkill)}</div>}
        {skill.groups && <div>{skill.groups.map(renderSkill)}</div>}
    </div>
);

const Skills = ({skills}) => (
    <Segment inverted>
        {skills && skills.map(renderSkill)}
    </Segment>
);

export const skillType = PropTypes.shape({
    titleId: PropTypes.string,
    defaultTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    level: PropTypes.number,
    href: PropTypes.string
});

skillType.skills = PropTypes.arrayOf(skillType);
skillType.groups = PropTypes.arrayOf(skillType);

Skills.propTypes = {
    skills: PropTypes.arrayOf(skillType)
};

export default Skills;