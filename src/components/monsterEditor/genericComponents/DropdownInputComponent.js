'use strict';

import React from 'react';
import { MenuItem } from 'react-bootstrap';
import ScrollableMenuButton from '../../react-bootstrap-extension/ScrollableMenuButton'

require('styles/monsterEditor/genericComponents/DropdownInputComponent.css');

class ChallengeRatingInputComponent extends React.Component {


  render() {
    const list = this.props.children.map((content, index) =>{
      return (
        <MenuItem key={index} eventKey={content}>{content.display}</MenuItem>
      );
    })

    return (
      <div className="challengeratinginput-component">
        <span className="ME-label">{this.props.label}</span>
        <ScrollableMenuButton title={this.props.value} onSelect={this.props.onChange}>{list}</ScrollableMenuButton>
      </div>
    );
  }
}

ChallengeRatingInputComponent.displayName = 'MonsterEditorChallengeRatingChallengeRatingInputComponent';

// Uncomment properties you need
// ChallengeRatingInputComponent.propTypes = {};
// ChallengeRatingInputComponent.defaultProps = {};

export default ChallengeRatingInputComponent;
