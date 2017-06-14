require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ChallengeRating from './monsterEditor/challengeRating/ChallengeRatingComponent.js';
import GeneralInformation from './monsterEditor/generalInformation/GeneralInformationComponent.js';
import MonsterStatblock from './monsterEditor/MonsterStatblockComponent.js';

class AppComponent extends React.Component {
  render() {
    const appLayout = (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={6}><ChallengeRating/>
                        <GeneralInformation/></Col>
      <Col xs={6} md={6}><MonsterStatblock/></Col>
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
