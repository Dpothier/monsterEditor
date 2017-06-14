'use strict';

import React from 'react';
import { Tab, Nav, NavItem } from 'react-bootstrap';
import ChallengeRating from './challengeRating/ChallengeRatingComponent.js';
import GeneralInformation from './generalInformation/GeneralInformationComponent.js';

require('styles/monsterEditor/MonsterEditorWorkflow.css');

class MonsterEditorWorkflowComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      key : "general"
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({key})
  }

  render() {
    return (
      <Tab.Container id="ME-Workflow-Tabs" defaultActiveKey="general" className="monstereditorworkflow-component">
        <div>
          <Tab.Content animation className="tab-content">
            <Tab.Pane eventKey="general">
              <GeneralInformation/>
            </Tab.Pane>
            <Tab.Pane eventKey="challenge">
              <ChallengeRating/>
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
