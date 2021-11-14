import BoggleCube from './BoggleCube';
import React from 'react';
import _ from 'lodash';
import './App.css';


let DICE_CONFIG = [
  ['R', 'I', 'F', 'O', 'B', 'X'],
  ['I', 'F', 'E', 'H', 'E', 'Y'],
  ['D', 'E', 'N', 'O', 'w', 'S'],
  ['U', 'T', 'O', 'K', 'N', 'D'],
  ['H', 'M', 'S', 'R', 'A', 'O'],
  ['L', 'U', 'P', 'E', 'T', 'S'],
  ['A', 'C', 'I', 'T', 'O', 'A'],
  ['Y', 'L', 'G', 'K', 'U', 'E'],
  ['Qu', 'B', 'M', 'J', 'O', 'A'],
  ['E', 'H', 'I', 'S', 'P', 'N'],
  ['V', 'E', 'T', 'I', 'G', 'N'],
  ['B', 'A', 'L', 'I', 'Y', 'T'],
  ['E', 'Z', 'A', 'V', 'N', 'D'],
  ['R', 'A', 'L', 'E', 'S', 'C'],
  ['U', 'W', 'I', 'L', 'R', 'G'],
  ['P', 'A', 'C', 'E', 'M', 'D'],
];

class Game extends React.Component {
  rearrangeArray = (array) => {
    const newArray  = array.sort(() => Math.random() - 0.5);
    // console.log(newArray);
    return newArray;
  }

  randomNum = (min, max) => { 
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  constructor(props) {
    super(props);

    const cubePosition = this.rearrangeArray(_.range(16));
    const cubeFaces = cubePosition.map(cube => {
      return this.randomNum(0, 5);
    })

    this.state = {
      cubePositions: cubePosition,
      cubeFaces: cubeFaces,
    };
  };

  getLettersForDisplay = (cubePositions, cubeFaces) => {
    return cubePositions.map((cubeNewPosition, index) => DICE_CONFIG[cubeNewPosition][cubeFaces[index]]);
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
    // const sampleBoard = this.getLettersForDisplay(this.state.cubePositions, this.state.cubeFaces);
    const sampleBoard = this.getLettersForDisplay(
      this.state.cubePositions, this.state.cubeFaces
    );

    return (
      <div>
        <BoggleCube letters={sampleBoard}></BoggleCube>
        <button className="square" onClick={this.shuffleBoard}>Shuffle board!</button>
      </div>
    );
  }
}

export default Game;
