import Cube from './Cube';

import React from 'react';
import PropTypes from 'prop-types';


class BoggleCube extends React.Component {  
    renderCubeLetter(letter, index) {
        return (
            <Cube 
                key={index} 
                letter={letter}
            >
            </Cube>
        )
    }

    render() {
        const letters = this.props.letters;

        return (
            <div className="shopping-list">
                { letters.map((letter, index) => (
                    this.renderCubeLetter(letter, index)
                ))}
            </div>
        );
    }
}

BoggleCube.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
}

export default BoggleCube;
