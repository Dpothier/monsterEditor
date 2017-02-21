'use strict';

import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {DropdownToggle} from 'react-bootstrap';
import ReactDOM from 'react-dom';

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
            {React.Children.toArray(children).filter(child => (
            !value.trim() || child.props.children.indexOf(value) !== -1
            ))}
      </ul>
    );
  }
}

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}


class ScrollableMenuButton extends React.Component{

  render(){
    return (
      <Dropdown id="dropdown-custom-menu">
        <CustomToggle bsRole="toggle"> toggle       </CustomToggle>

        <ScrollableMenu bsRole="menu">
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
