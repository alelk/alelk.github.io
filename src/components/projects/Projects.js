/**
 * Projects Segment
 *
 * Created by Alex Elkin on 30.11.2017.
 */

import Project, {projectType} from './Project'

import React from 'react'
import PropTypes from 'prop-types'
import {Segment, Card} from 'semantic-ui-react'

const Projects = ({projects}) => (
    <Segment inverted style={{backgroundColor: 'transparent'}}>
        <Card.Group style={{justifyContent:"center"}}>
            {projects && projects.map((project, key) => <Project project={project} key={key}/>)}
        </Card.Group>
    </Segment>
);

Projects.propTypes = {
    projects: PropTypes.arrayOf(projectType)
};

export default Projects;