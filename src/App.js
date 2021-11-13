import BoggleCube from './BoggleCube';
import React from 'react';
import './App.css';


let DICE_CONFIG = [
  ['r', 'i', 'f', 'o', 'b', 'x'],
  ['i', 'f', 'e', 'h', 'e', 'y'],
  ['d', 'e', 'n', 'o', 'w', 's'],
  ['u', 't', 'o', 'k', 'n', 'd'],
  ['h', 'm', 's', 'r', 'a', 'o'],
  ['l', 'u', 'p', 'e', 't', 's'],
  ['a', 'c', 'i', 't', 'o', 'a'],
  ['y', 'l', 'g', 'k', 'u', 'e'],
  ['Qu', 'b', 'm', 'J', 'O', 'A'],
  ['E', 'H', 'I', 'S', 'P', 'N'],
  ['V', 'E', 'T', 'I', 'G', 'N'],
  ['B', 'A', 'L', 'I', 'Y', 'T'],
  ['E', 'Z', 'A', 'V', 'N', 'D'],
  ['R', 'A', 'L', 'E', 'S', 'C'],
  ['U', 'W', 'I', 'L', 'R', 'G'],
  ['P', 'A', 'C', 'E', 'M', 'D'],
];

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cubePositions: [1,4,2,3,5,9,6,7,8,10,0,14,12,11,13,15],
      cubeFaces: [1,2,3,2,3,0,4,5,2,5,3,4,5,3,0,2],
    };
  };

  
  getLettersForDisplay() {
    return this.state.cubePositions.map((cubeNewPosition, index) => DICE_CONFIG[cubeNewPosition][this.state.cubeFaces[index]]);
  }

  randomNum = (min, max) => { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  rearrangeArray = (array) => {
    const newArray  = array.sort(() => Math.random() - 0.5);
    // console.log(newArray);
    return newArray;
  }

  shuffleBoard = () => {
    console.log('clicked');

    // shuffle the individual letter cubes
    const newCubeFaces = this.state.cubeFaces.map(cube => {
      return this.randomNum(0, 5);
    });
    this.setState({cubeFaces: newCubeFaces});

    // shuffle the placement of the letter cubes
    const newCubePlacement = this.rearrangeArray(this.state.cubePositions);
    this.setState({cubePositions: newCubePlacement});
  }


  render() {
    const sampleBoard = this.getLettersForDisplay();

    return (
      <div>
        <BoggleCube letters={sampleBoard}></BoggleCube>
        <button className="square" onClick={this.shuffleBoard}>Shuffle board!</button>
      </div>
    );
  }
}

export default Game;
