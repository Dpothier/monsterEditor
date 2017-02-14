'use strict';

import React from 'react';

require('styles/tictactoe/Square.css');

function Square(props){
  return (<button className={props.highlight ? 'square highlight': 'square'} onClick={() => props.onClick()}>
            {props.value}
          </button>)
}

Square.displayName = 'TictactoeSquareComponent';

// Uncomment properties you need
// SquareComponent.propTypes = {};
// SquareComponent.defaultProps = {};

export default Square;
