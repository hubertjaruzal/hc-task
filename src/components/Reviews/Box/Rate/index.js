import React, { Component } from 'react';

class Rate extends Component {
  render() {
    return (
      <div>
        {`${this.props.rate}/6`}
      </div>
    );
  }
}

export default Rate;
