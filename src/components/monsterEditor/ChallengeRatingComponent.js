'use strict';

import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import {ScrollableMenuButton} from '../react-bootstrap-extension/ScrollableMenuButton'

require('styles/monsterEditor/ChallengeRating.css');

class ChallengeRating extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOffensiveCr : {display: '0', value:0},
      defensiveCr : {display: '0', value:0},
      effectiveCr : 0,
      validCr : [
                 {display: '0', value:0},
                 {display: '1/8', value:1/8},
                 {display: '1/4', value:1/4},
                 {display: '1/2', value:1/2},
                 {display: '1', value:1},
                 {display: '2', value:2},
                 {display: '3', value:3},
                 {display: '4', value:4},
                 {display: '5', value:5},
                 {display: '6', value:6},
                 {display: '7', value:7},
                 {display: '8', value:8},
                 {display: '9', value:9},
                 {display: '10', value:10},
                 {display: '11', value:11},
                 {display: '12', value:12},
                 {display: '13', value:13},
                 {display: '14', value:14},
                 {display: '15', value:15},
                 {display: '16', value:16},
                 {display: '17', value:17},
                 {display: '18', value:18},
                 {display: '19', value:19},
                 {display: '20', value:20},
                 {display: '21', value:21},
                 {display: '22', value:22},
                 {display: '23', value:23},
                 {display: '24', value:24},
                 {display: '25', value:25},
                 {display: '26', value:26},
                 {display: '27', value:27},
                 {display: '28', value:28},
                 {display: '29', value:29},
                 {display: '30', value:30}
               ]
    }

    this.changeSelectedOffensiveCr = this.changeSelectedOffensiveCr.bind(this);
    this.changeDefensiveCr = this.changeDefensiveCr.bind(this);
  }

  changeSelectedOffensiveCr(selectedCr){
    this.updateCr(selectedCr, this.state.defensiveCr);
  }

  changeDefensiveCr(selectedCr){
    this.updateCr(this.state.selectedOffensiveCr, selectedCr);
  }

  updateCr(selectedOffensiveCr, defensiveCr){
    var averageCr = (selectedOffensiveCr.value + defensiveCr.value) / 2;
    averageCr = this.RoundToValidCr(averageCr);

    this.setState({
      selectedOffensiveCr : selectedOffensiveCr,
      defensiveCr : defensiveCr,
      effectiveCr : averageCr
    })
  }

  RoundToValidCr(cr){
    var validCr = this.state.validCr;
    let i;
    for(i = 0; i < validCr.length - 1; i++){
      const roundingPoint = (validCr[i].value + validCr[i + 1].value) / 2;
      if(cr < roundingPoint)
        return validCr[i].value;
    }
    return validCr[validCr.length].value; //If no other CR fits, uses biggest
  }

  render() {
    const validCr = this.state.validCr;
    const crs = validCr.map((cr, index) =>{
      return (
        <MenuItem key={index} eventKey={cr}>{cr.display}</MenuItem>
      );
    })
    return (
      <div className="challengerating-component">
        <div>
          <span> Offensive Challenge Rating
            <ScrollableMenuButton id="offensiveCr" title={this.state.selectedOffensiveCr.display} onSelect={this.changeSelectedOffensiveCr}>{crs} </ScrollableMenuButton>
          </span>
          <span> Defensive Challenge Rating
            <DropdownButton id="defensiveCr" title={this.state.defensiveCr.display } onSelect={this.changeDefensiveCr}>{crs} </DropdownButton>
          </span>
          <span> Effective Challenge Rating <input type="number" step="0.1" value={this.state.effectiveCr} disabled/> </span>
        </div>
      </div>
    );
  }
}

ChallengeRating.displayName = 'MonsterEditorChallengeRatingComponent';

// Uncomment properties you need
// ChallengeRatingComponent.propTypes = {};
// ChallengeRatingComponent.defaultProps = {};

export default ChallengeRating;
