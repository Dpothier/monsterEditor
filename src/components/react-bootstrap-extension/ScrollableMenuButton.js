'use strict';

import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {DropdownToggle} from 'react-bootstrap';

class ScrollableMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.setState({ value: e.target.value });

    this.state = { value: '' };
  }

  focusNext() {
    const input = ReactDOM.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <ul  className="dropdown-menu scroll-menu" style={{ padding: '' }}>
      </ul>
    );
  }
}

class ScrollableMenuButton extends React.Component{

  render(){
    return (
      <Dropdown id="dropdown-custom-menu">
        <DropdownToggle bsRole="toggle">
          Custom toggle
        </DropdownToggle>

        <ScrollableMenu bsRole="menu">
        </ScrollableMenu>
      </Dropdown>
    )
  }
}

ScrollableMenuButton.displayName = 'ScrollableMenuButton';

// Uncomment properties you need
// ChallengeRatingComponent.propTypes = {};
// ChallengeRatingComponent.defaultProps = {};

export default ScrollableMenuButton;
