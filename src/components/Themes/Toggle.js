/* eslint-disable max-len */
// Toggle.js
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      Switch Theme
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
