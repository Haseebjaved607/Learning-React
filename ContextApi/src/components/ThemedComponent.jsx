// src/components/ThemedComponent.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemedComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
      <h1>{`Current Theme: ${theme}`}</h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
