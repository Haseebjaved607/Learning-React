// src/components/LanguageSwitcher.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{language === 'en' ? 'Hello' : 'Hola'}</h1>
      <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
        Switch Language
      </button>
    </div>
  );
};

export default LanguageSwitcher;
