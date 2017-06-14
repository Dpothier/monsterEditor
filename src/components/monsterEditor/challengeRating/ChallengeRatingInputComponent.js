'use strict';

import React from 'react';
import ScrollableMenuButton from '../../react-bootstrap-extension/ScrollableMenuButton'

require('styles/monsterEditor/challengeRating/ChallengeRatingInput.css');

class ChallengeRatingInputComponent extends React.Component {
  render() {
    return (
      <div className="challengeratinginput-component">
        <span className="ME-label">{this.props.label}</span>
        <ScrollableMenuButton title={this.props.selected} onSelect={this.props.onSelect}>{this.props.children}</ScrollableMenuButton>
      </div>
    );
  }
}

ChallengeRatingInputComponent.displayName = 'MonsterEditorChallengeRatingChallengeRatingInputComponent';

// Uncomment properties you need
// ChallengeRatingInputComponent.propTypes = {};
// ChallengeRatingInputComponent.defaultProps = {};

export default ChallengeRatingInputComponent;
