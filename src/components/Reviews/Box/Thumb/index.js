import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

class Thumb extends Component {
  render() {
    return (
      <div className={`thumb thumb${this.props.like ? '-positive' : '-negative'}`}>
        { this.props.like ? <FontAwesomeIcon icon="thumbs-up"/> : <FontAwesomeIcon icon="thumbs-down"/>}
      </div>
    );
  }
}

export default Thumb;
