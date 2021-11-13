import Cube from './Cube';

import React from 'react';
import PropTypes from 'prop-types';


class BoggleCube extends React.Component {  
    renderCubeLetter(letter) {
        return (<Cube letter={letter}></Cube>)
    }

    render() {
        const letters = this.props.letters;

        return (
            <div className="shopping-list">
                { letters.map((letter) => (
                    this.renderCubeLetter(letter)
                ))}
            </div>
        );
    }
}

BoggleCube.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string),
}

export default BoggleCube;
