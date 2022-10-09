import React from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import bgimg from '../../img/bg-desktop-light.jpg';

import classes from './Header.module.css';

const Input = () => {
  return (
    <div>
      <img src={bgimg} alt='background' />
      <div className={classes.header}>
        <h1>TODO</h1>
        <DarkModeIcon />
      </div>
    </div>
  );
};

export default Input;
