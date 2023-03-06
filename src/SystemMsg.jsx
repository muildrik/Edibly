import React, { Component } from 'react';

class SystemMsg extends Component {

    constructor(props) {
      super(props);
      this.state = {
        found : this.props.found,
        total : this.props.total
      };
    }
  
    render() {
  
      // Render DOM elements
      return (

        <div id='systemMsg' className='systemMsg'>Displaying {this.state.found} out of {this.state.total} recipes</div>
      )
    }
}

export default SystemMsg;