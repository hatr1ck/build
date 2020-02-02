import React from 'react';
import '../styles/life.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Header from '../components/header'
export const WIDTH = 800;
export const HEIGHT = 600;

class Cell extends React.Component {
  render() {
    const {x, y} = this.props;
    return (
        <div style={{
            background: '#73b76e',
            position: 'absolute',
          left: `${20 * x + 1}px`,
          top: `${20 * y + 1}px`,
          width: `${20 - 1}px`,
          height: `${20 - 1}px`,
        }}
        />
    );
  }
}

class Game extends React.Component {
  state = {cells: [], isRunning: false};

  constructor(props) {
    super(props);
    this.rows = 30;
    this.cols = 40;
    this.board = this.makeEmptyBoard();
    this.boardRef = React.createRef();
  }

  runGame = () => {
    this.setState({isRunning: true});
    this.runIteration();
  };

  stopGame = () => {
    this.setState({isRunning: false});
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  runIteration() {
    console.log('running iteration');
    let newBoard = this.makeEmptyBoard();

    // Game logic
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        if (this.board[y][x]) {
          if (neighbors === 2 || neighbors === 3) {
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }

    this.board = newBoard;
    this.setState({cells: this.makeCells()});
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, 100);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
        neighbors++;
      }
    }

    return neighbors;
  }

  makeEmptyBoard() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({x, y});
        }
      }
    }
    return cells;
  }

  getElementOffset() {
    const rect = this.boardRef.current.getBoundingClientRect();
    const doc = document.documentElement;
    return {
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop,
    };
  }

  handleIntervalChange = (event) => {
    this.setState(this.setState({interval: event.target.value}));
  };

  handleClick(event){
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;

    const x = Math.floor(offsetX / 20);
    const y = Math.floor(offsetY / 20);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }
    this.setState({cells: this.makeCells()});
  };

  handleRandom(){
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = (Math.random() >= 0.5);
      }
    }
    this.setState({cells: this.makeCells()});
  };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({cells: this.makeCells()});
  };


  render() {
    const {cells} = this.state;
    return (
        <div className='life'>
          <Header/>
        <ButtonToolbar>
            <Button className='lifeButton' onClick={this.handleRandom} variant="primary">Random</Button><br/>
            <Button className='lifeButton' onClick={this.handleClear} variant="secondary">Clear</Button><br/>
            {this.state.isRunning ?
            <Button className='lifeButton' onClick={this.stopGame} variant="warning">Stop</Button>:
            <Button className='lifeButton' onClick={this.runGame} variant="success">Start</Button>}
        </ButtonToolbar>
          <div className="Board"
               style={{
                 width: WIDTH,
                 height: HEIGHT,
                 backgroundSize: "20px 20px"
               }}
               onClick={this.handleClick}
               ref={this.boardRef}
          >
            {cells.map(cell => (
                <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
            ))}
          </div>
        </div>
    );
  }
}


export default Game;
