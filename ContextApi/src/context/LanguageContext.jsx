// src/context/LanguageContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
