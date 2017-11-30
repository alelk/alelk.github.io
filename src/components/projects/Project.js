/**
 * Project
 *
 * Created by Alex Elkin on 30.11.2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl'
import { Button, Card, Image } from 'semantic-ui-react'

const Project = ({project}) => (
    <Card>
        <Card.Content>
            <Card.Header><FormattedMessage id={project.titleId} defaultMessage={project.defaultTitle}/></Card.Header>
            <Image src={project.img}/>
            <Card.Description>
                <FormattedMessage id={project.descriptionId}/>
            </Card.Description>
        </Card.Content>
        {project.links &&
            <Card.Content extra>
                {project.links.map(
                    link =>
                        <Button as='a' basic href={link.href} target={link.target}>
                            <FormattedMessage id={link.titleId} defaultMessage={link.defaultTitle}/>
                        </Button>
                )}
            </Card.Content>
        }
    </Card>
);

const projectLinkType = PropTypes.shape({
    titleId: PropTypes.string,
    defaultTitle: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string
});

export const projectType = PropTypes.shape({
    titleId: PropTypes.string,
    defaultTitle: PropTypes.string,
    descriptionId: PropTypes.string,
    img: PropTypes.object,
    links: PropTypes.arrayOf(projectLinkType)
});

Project.propTypes = {
    project: projectType
};

export default Project;