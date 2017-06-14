'use strict';

import React from 'react';
import { Tab, Nav, NavItem } from 'react-bootstrap';
import ChallengeRating from './challengeRating/ChallengeRatingComponent.js';
import GeneralInformation from './generalInformation/GeneralInformationComponent.js';

require('styles/monsterEditor/MonsterEditorWorkflow.css');

class MonsterEditorWorkflowComponent extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Tab.Container id="ME-Workflow-Tabs" defaultActiveKey="general" className="monstereditorworkflow-component">
        <div>
          <Tab.Content animation className="tab-content">
            <Tab.Pane eventKey="general">
              <GeneralInformation monster={this.props.monster} onChange={this.props.onChange}/>
            </Tab.Pane>
            <Tab.Pane eventKey="challenge">
              <ChallengeRating monster={this.props.monster} onChange={this.props.onChange}/>
            </Tab.Pane>
          </Tab.Content>
          <Nav bsStyle="pills">
            <NavItem eventKey="general">
              General Information
            </NavItem>
            <NavItem eventKey="challenge">
              Challenge Targets
            </NavItem>
          </Nav>
        </div>
    </Tab.Container>      )
    }
  }





MonsterEditorWorkflowComponent.displayName = 'MonsterEditorMonsterEditorWorkflowComponent';

// Uncomment properties you need
// MonsterEditorWorkflowComponent.propTypes = {};
// MonsterEditorWorkflowComponent.defaultProps = {};

export default MonsterEditorWorkflowComponent;
