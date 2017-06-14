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
      validSize:[{display: 'Tiny', value: 'Tiny'},
                 {display: 'Small', value: 'Small'},
                 {display: 'Medium', value: 'Medium'},
                 {display: 'Large', value: 'Large'},
                 {display: 'Huge', value: 'Huge'}],
      validAlignement:[{display: 'Lawful Good', value:'lawful good'},
                       {display: 'Neutral Good', value: 'neutral good'},
                       {display: 'Chaotic Good', value: 'chaotic good'},
                       {display: 'Lawful Neutral', value: 'lawful neutral'},
                       {display: 'True Neutral', value: 'true neutral'},
                       {display: 'Chaotic Neutral', value: 'chaotic neutral'},
                       {display: 'Lawful Evil', value: 'lawful evil'},
                       {display: 'Neutral Evil', value: 'neutral evil'},
                       {display: 'Chaotic Evil', value: 'chaotic evil'},
                       {display: 'Unaligned', value:'unaligned'}],
       validTypes:[{display: 'Aberration', value: 'aberration'},
                  {display: 'Beast', value: 'beast'},
                  {display: 'Celestial', value: 'celestial'},
                  {display: 'Construct', value: 'construct'},
                  {display: 'Dragon', value: 'dragon'},
                  {display: 'Elemental', value: 'elemental'},
                  {display: 'Fey', value: 'fey'},
                  {display: 'Fiend', value: 'fiend'},
                  {display: 'Giant', value: 'giant'},
                  {display: 'Humanoid', value: 'humanoid'},
                  {display: 'Monstrosity', value: 'monstrosity'},
                  {display: 'Ooze', value: 'ooze'},
                  {display: 'Plant', value: 'plant'},
                  {display: 'Undead', value: 'undead'}]
    }

    this.changeMonsterName = this.changeMonsterName.bind(this);
    this.changeMonsterSize = this.changeMonsterSize.bind(this);
    this.changeMonsterAlignement = this.changeMonsterAlignement.bind(this)
    this.changeMonsterType = this.changeMonsterType.bind(this);
  }
  render() {
    const sizes = this.state.validSize.map((size, index) =>{
      return (
        <MenuItem key={index} eventKey={size}>{size.display}</MenuItem>
      );
    })

    const alignements = this.state.validAlignement.map((alignement, index) =>{
      return (
        <MenuItem key={index} eventKey={alignement}>{alignement.display}</MenuItem>
      );
    })

    const types = this.state.validTypes.map((type, index) =>{
      return (
        <MenuItem key={index} eventKey={type}>{type.display}</MenuItem>
      );
    })

    return (
      <div className="generalinformation-component">
        <TextInputComponent label="Name" value={this.props.monster.name} onChange={this.changeMonsterName}/>
        <DropdownInputComponent label="Size" value={this.props.monster.size} onChange={this.changeMonsterSize}>{sizes}</DropdownInputComponent>
        <DropdownInputComponent label="Type" value={this.props.monster.type} onChange={this.changeMonsterType}>{types}</DropdownInputComponent>
        <DropdownInputComponent label="Alignement" value={this.props.monster.alignement} onChange={this.changeMonsterAlignement}>{alignements}</DropdownInputComponent>
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
      monster.size = newSize.value;
      this.props.onChange(monster);
    }

    changeMonsterAlignement(newAlignement){
      let monster = this.props.monster;
      monster.alignement = newAlignement.value;
      this.props.onChange(monster);
    }

    changeMonsterType(newType){
      let monster = this.props.monster;
      monster.type = newType.value;
      this.props.onChange(monster);
    }

}

GeneralInformationComponent.displayName = 'MonsterEditorGeneralInformationGeneralInformationComponent';

// Uncomment properties you need
// GeneralInformationComponent.propTypes = {};
// GeneralInformationComponent.defaultProps = {};

export default GeneralInformationComponent;
