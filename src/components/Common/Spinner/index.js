import React from 'react';

import './styles.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span>Loading...</span>
    </div>
  );
}

export default Spinner;
