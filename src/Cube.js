import PropTypes from 'prop-types';
import React from 'react';


class Cube extends React.Component {
  render() {
    return (
        <p>{this.props.letter}</p>
    );
  }
}

Cube.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default Cube;
