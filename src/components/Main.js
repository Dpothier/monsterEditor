require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ChallengeRating from './monsterEditor/ChallengeRatingComponent.js';
import MonsterStatblock from './monsterEditor/MonsterStatblockComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <ChallengeRating />
        <MonsterStatblock />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
