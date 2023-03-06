import React, { Component } from 'react';

class ColoredLine extends Component {

  render() {
    return (
      <hr style={
          { color : this.props.color,
            backgroundColor : this.props.color,
            width: '100%',
            height: this.props.height
          }
        }
      />
    );
  }
}

export default ColoredLine;
