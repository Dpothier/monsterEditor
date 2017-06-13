'use strict';

import React from 'react';
import {Dropdown, DropdownToggle} from 'react-bootstrap';
import ReactDOM from 'react-dom';

require('styles/react-bootstrap-extension/ScrollableDropdownButton.css');

class ScrollableMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.props.onSelect(e);

    this.state = { value: '' };
  }

  focusNext() {
    const input = ReactDOM.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }

  render() {
    const children  = React.Children.map(this.props.children, (child) =>
                          {return React.cloneElement(child, {onSelect : this.props.onSelect})});
    const { value } = this.state;

    return (
      <ul  className="dropdown-menu scroll-menu" style={{ padding: '' }}>
            {children}
      </ul>
    );
  }
}

class ScrollableMenuButton extends React.Component{

  render(){
    return (
      <Dropdown id="dropdown-custom-menu">
        <Dropdown.Toggle bsRole="toggle"> {this.props.title}       </Dropdown.Toggle>

        <ScrollableMenu bsRole="menu" onSelect = {this.props.onSelect}>
          {this.props.children}
        </ScrollableMenu>
      </Dropdown>
    )
  }
}

ScrollableMenu.displayName = 'ScrollableMenu';
ScrollableMenuButton.displayName = 'ScrollableMenuButton';

// Uncomment properties you need
// ChallengeRatingComponent.propTypes = {};
// ChallengeRatingComponent.defaultProps = {};
export {ScrollableMenu};
export default ScrollableMenuButton;
