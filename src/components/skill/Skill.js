/**
 * Skill
 *
 * Created by Alex Elkin on 23.11.2017.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Progress, Popup, Message, Button
} from 'semantic-ui-react'
import './Skill.css'

const renderProgress = (skill, isGroup, nestingLevel, isClickable) => (
    <Progress percent={skill.level} size={isGroup && nestingLevel == 0 ? "large" : "medium"}
              inverted
              color='black'
              progress
              style={{width:'50%', minWidth:'300px'}}/>
);

const SkillPopup = ({skill, children}) => (
    <Popup trigger={children} wide="very" on={['click']} hideOnScroll position="bottom center">
        <Popup.Content>
            {skill.commentId && <FormattedMessage id={skill.commentId}/>}
            {skill.descriptionId &&
            <Message info>
                <Message.Content>
                    <Message.Header><FormattedMessage id={skill.titleId} defaultMessage={skill.defaultTitle}/></Message.Header>
                    <Container fluid>
                        <FormattedMessage id={skill.descriptionId}/>
                    </Container>
                    {skill.href &&
                    <Button as="a" href={skill.href} target="_blank" basic color="blue">
                        <FormattedMessage id="action.more"/>
                    </Button>
                    }
                </Message.Content>
            </Message>
            }
        </Popup.Content>
    </Popup>
);

const renderSkillGrid = (skill, isGroup, nestingLevel, isClickable) => (
    <Grid stackable columns={2} className={isClickable ? 'clickable' : undefined}>
        <Grid.Column textAlign="right">
            <div className="skillTitle">
                <FormattedMessage id={skill.titleId} defaultMessage={skill.defaultTitle}/>
            </div>
        </Grid.Column>
        <Grid.Column>
            {renderProgress(skill, isGroup, nestingLevel)}
        </Grid.Column>
    </Grid>
);

const renderSkill = (skill, isGroup, nestingLevel) => (
    (skill.commentId || skill.descriptionId) ?
        <SkillPopup skill={skill}>
            {renderSkillGrid(skill, isGroup, nestingLevel, true)}
        </SkillPopup> : renderSkillGrid(skill, isGroup, nestingLevel)
);

const Skill = ({skill, isGroup, nestingLevel=0}) => (
    <Container className="Skill">
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
    commentId: PropTypes.string,
    descriptionId: PropTypes.string,
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