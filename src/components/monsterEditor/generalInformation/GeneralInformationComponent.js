'use strict';

import React from 'react';
import { MenuItem } from 'react-bootstrap';
import TextInputComponent from '../genericComponents/TextInputComponent'
import DropdownInputComponent from '../genericComponents/DropdownInputComponent'

require('styles/monsterEditor/generalInformation/GeneralInformation.css');

class GeneralInformationComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      monsterName : 'Magic Armor',
      monsterSize : {display: 'Medium', value: 'medium'},
      validSize:[{display: 'Tiny', value: 'tiny'},
                 {display: 'Small', value: 'small'},
                 {display: 'Medium', value: 'medium'},
                 {display: 'Large', value: 'large'},
                 {display: 'Huge', value: 'huge'}]
    }

    this.changeMonsterName = this.changeMonsterName.bind(this);
    this.changeMonsterSize = this.changeMonsterSize.bind(this);
  }
  render() {
    const validSize = this.state.validSize;
    const sizes = validSize.map((size, index) =>{
      return (
        <MenuItem key={index} eventKey={size}>{size.display}</MenuItem>
      );
    })

    return (
      <div className="generalinformation-component">
        <TextInputComponent className="ME-label" label="Monster Name" value={this.props.monster.name} onChange={this.changeMonsterName}/>
        <DropdownInputComponent label="Monster Size" value={this.props.monster.size} onChange={this.changeMonsterSize}>{sizes}</DropdownInputComponent>
      </div>
    );
  };

  changeMonsterName(event){
    let monster = this.props.monster;
    monster.name = event.target.value;
    this.props.onChange(monster);
  }

    changeMonsterSize(newSize){
      let monster = this.props.monster;
      monster.size = newSize.display;
      this.props.onChange(monster);
    }

}

GeneralInformationComponent.displayName = 'MonsterEditorGeneralInformationGeneralInformationComponent';

// Uncomment properties you need
// GeneralInformationComponent.propTypes = {};
// GeneralInformationComponent.defaultProps = {};

export default GeneralInformationComponent;
