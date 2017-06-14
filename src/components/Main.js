require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ChallengeRating from './monsterEditor/challengeRating/ChallengeRatingComponent.js';
import GeneralInformation from './monsterEditor/generalInformation/GeneralInformationComponent.js';
import MonsterStatblock from './monsterEditor/MonsterStatblockComponent.js';
import MonsterEditorWorkflow from './monsterEditor/MonsterEditorWorkflowComponent.js';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      monster : {
        name: "Magic Armor",
        size: "Medium"
      }
    }

    this.editMonster = this.editMonster.bind(this);
  }

  editMonster(monster){
    this.setState({
      monster: monster
    })
  }

  render() {
    const appLayout = (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={6}><MonsterEditorWorkflow monster={this.state.monster} onChange={this.editMonster}/></Col>
      <Col xs={6} md={6}><MonsterStatblock monster={this.state.monster} onChange={this.editMonster}/></Col>
    </Row>
  </Grid>
);

    return (
      <div className="index">
        {appLayout}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
