import React from 'react';

import BoxContainer from '../Common/BoxContainer';
import Button from '../Common/Button';

import './styles.scss';

const Settings = () => {
  return (
    <BoxContainer>
      <span>Click button below, if you would like to reset your data from localStorage</span>
      <Button
        text="Reset Data"
        onClick={() => window.localStorage.removeItem('hcReviews')}
      />
    </BoxContainer>
  );
}

export default Settings;
