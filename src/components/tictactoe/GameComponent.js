'use strict';

import React from 'react';
import Board from './BoardComponent';

require('styles/tictactoe/Game.css');

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        winner:{
          line:null,
          player: null
        }
      }],
      xIsNext : true,
      stepNumber: 0
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();

    if(current.winner.player || squares[i])
      return;

    squares[i] = this.state.xIsNext ? 'X': 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        winner : this.calculateWinner(squares)
        }]),
      xIsNext: !this.state.xIsNext,
      stepNumber : history.length
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step % 2) ? false : true
    })
  }

  calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          line: [a,b,c],
          player: squares[a]
        }
      }
    }
    return {
        line: null,
        player: null
      };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game Start';
      return (
        <li key={move} className={move == this.state.stepNumber ? 'selected': ''}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc} </a>
        </li>
      );
    });

    let status;
    if(current.winner.player){
      status = 'Winner: ' + current.winner.player;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board line={current.winner.line} squares={current.squares} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.displayName = 'TictactoeGameComponent';

// Uncomment properties you need
// GameComponent.propTypes = {};
// GameComponent.defaultProps = {};

export default Game;
