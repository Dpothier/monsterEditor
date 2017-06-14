'use strict';

import React from 'react';

require('styles/monsterEditor/challengeRating/ChallengeRatingResult.css');

class ChallengeRatingResultComponent extends React.Component {
  render() {
    return (
      <div className="challengeratingresult-component ">
        <span className="ME-label">{this.props.label}</span>
        <input type="text" value={this.props.value} disabled/>
      </div>
    );
  }
}

ChallengeRatingResultComponent.displayName = 'MonsterEditorChallengeRatingChallengeRatingResultComponent';

// Uncomment properties you need
// ChallengeRatingResultComponent.propTypes = {};
// ChallengeRatingResultComponent.defaultProps = {};

export default ChallengeRatingResultComponent;
