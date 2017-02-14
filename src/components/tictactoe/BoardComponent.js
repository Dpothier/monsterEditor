'use strict';

import React from 'react';
import Square from './SquareComponent.js';

require('styles/tictactoe/Board.css');

class Board extends React.Component {
  renderSquare(i) {
    let inWinningLine
    if(this.props.line)
      inWinningLine = this.props.line.indexOf(i) > -1;
      
    return <Square highlight={inWinningLine} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.displayName = 'TictactoeBoardComponent';

// Uncomment properties you need
// BoardComponent.propTypes = {};
// BoardComponent.defaultProps = {};

export default Board;
