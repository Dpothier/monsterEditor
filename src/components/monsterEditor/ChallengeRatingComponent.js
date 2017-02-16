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
    this.updateCr(Number(event.target.value), this.state.defensiveCr);
  }

  changeDefensiveCr(event){
    this.updateCr(this.state.offensiveCr, Number(event.target.value));
  }

  updateCr(offensiveCr, defensiveCr){
    var averageCr = (offensiveCr + defensiveCr) / 2;
    averageCr = this.RoundToValidCr(averageCr);

    this.setState({
      offensiveCr : offensiveCr,
      defensiveCr : defensiveCr,
      effectiveCr : averageCr
    })
  }

  RoundToValidCr(cr){
    var validCr = [0, 1/8, 1/4, 1/2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    let i;
    for(i = 0; i < validCr.length - 1; i++){
      const roundingPoint = (validCr[i] + validCr[i + 1]) / 2;
      if(cr < roundingPoint)
        return validCr[i];
    }
    return validCr[validCr.length]; //If no other CR fits, uses biggest
  }

  render() {
    return (
      <div className="challengerating-component">
        <span> Offensive Challenge Rating <input type="number" step="0.1" value={this.state.offensiveCr} onChange={this.changeOffensiveCr}/> </span>
        <span> Defensive Challenge Rating <input type="number" step="0.1" value={this.state.defensiveCr} onChange={this.changeDefensiveCr}/> </span>
        <span> Effective Challenge Rating <input type="number" step="0.1" value={this.state.effectiveCr} disabled/> </span>
      </div>
    );
  }
}

ChallengeRating.displayName = 'MonsterEditorChallengeRatingComponent';

// Uncomment properties you need
// ChallengeRatingComponent.propTypes = {};
// ChallengeRatingComponent.defaultProps = {};

export default ChallengeRating;
