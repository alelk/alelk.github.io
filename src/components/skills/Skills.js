/**
 * Skills Section
 *
 * Created by Alex Elkin on 22.11.2017.
 */
import Skill, {skillType} from './Skill'

import React from 'react'
import PropTypes from 'prop-types'
import {Segment} from 'semantic-ui-react'

const Skills = ({skills}) => (
    <Segment inverted style={{backgroundColor: 'transparent'}}>
        {skills && skills.map((skill, key) => <Skill skill={skill} key={key} isGroup/>)}
    </Segment>
);

Skills.propTypes = {
    skills: PropTypes.arrayOf(skillType)
};

export default Skills;