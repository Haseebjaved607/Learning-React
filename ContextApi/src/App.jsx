// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ThemedComponent from './components/ThemedComponent.jsx';
import UserProfile from './components/UserProfile.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <LanguageProvider>
        <ThemedComponent />
        <UserProfile />
        <LanguageSwitcher />
      </LanguageProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
