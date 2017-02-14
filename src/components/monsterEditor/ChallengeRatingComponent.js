'use strict';

import React from 'react';

require('styles/monsterEditor/ChallengeRating.css');

class ChallengeRating extends React.Component {
  constructor() {
    super();
    this.state = {
      offensiveCr : 0,
      defensiveCr : 0,
      effectiveCr : 0
    }

    this.changeOffensiveCr = this.changeOffensiveCr.bind(this);
    this.changeDefensiveCr = this.changeDefensiveCr.bind(this);
  }

  changeOffensiveCr(event){
    this.setState({offensiveCr: event.target.value});
    this.calculateAverageCr();
  }

  changeDefensiveCr(event){
    this.setState({defensiveCr: event.target.value});
    this.calculateAverageCr();
  }

  render() {
    return (
      <div className="challengerating-component">
        <span> Offensive Challenge Rating <input type="text" value={this.state.offensiveCr} onChange={this.changeOffensiveCr}/> </span>
        <span> Defensive Challenge Rating <input type="text" value={this.state.defensiveCr} onChange={this.changeDefensiveCr}/> </span>
        <span> Effective Challenge Rating <input type="text" value={this.state.effectiveCr} disabled/>
      </div>
    );
  }
}

ChallengeRating.displayName = 'MonsterEditorChallengeRatingComponent';

// Uncomment properties you need
// ChallengeRatingComponent.propTypes = {};
// ChallengeRatingComponent.defaultProps = {};

export default ChallengeRating;
