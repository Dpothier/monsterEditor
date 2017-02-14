require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Game from './tictactoe/GameComponent.js';
import ChallengeRating from './monsterEditor/ChallengeRatingComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <ChallengeRating />
        <Game />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
