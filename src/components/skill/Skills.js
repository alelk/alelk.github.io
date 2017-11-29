/**
 * Skills Section
 *
 * Created by Alex Elkin on 22.11.2017.
 */
import Skill, {skillType} from './Skill'

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import {
    Segment
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
        {skills && skills.map((skill, key) => <Skill skill={skill} key={key} isGroup/>)}
    </Segment>
);

Skills.propTypes = {
    skills: PropTypes.arrayOf(skillType)
};

export default Skills;