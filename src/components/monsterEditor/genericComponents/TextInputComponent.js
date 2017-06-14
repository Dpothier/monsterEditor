'use strict';

import React from 'react';

require('styles/monsterEditor/genericComponents/TextInput.css');

class TextInputComponent extends React.Component {
  render() {
    return (
      <div className="challengeratinginput-component">
        <span className="ME-label">{this.props.label}</span>
        <input type="text" value={this.props.value} onChange={this.props.onChange} disabled={this.props.disabled}/>
      </div>
    );
  }
}

TextInputComponent.displayName = 'MonsterEditorGenericComponentsTextInputComponent';

// Uncomment properties you need
// TextInputComponent.propTypes = {};
// TextInputComponent.defaultProps = {};

export default TextInputComponent;
