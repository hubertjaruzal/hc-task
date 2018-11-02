import React, { Component } from 'react';

import './styles.scss';

class Thumb extends Component {
  render() {
    return (
      <div className={`thumb${this.props.like ? '-positive' : '-negative'}`}>
        Thumb
      </div>
    );
  }
}

export default Thumb;
