import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useThemeStore } from './store/themeStore';

function Root() {
  const { isDarkMode, highContrast, fontSize } = useThemeStore();

  // Apply theme-related classes dynamically
  useEffect(() => {
    // Toggle dark mode
    document.body.classList.toggle('dark', isDarkMode);

    // Apply high contrast mode
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Update font size
    document.body.classList.remove('font-normal', 'font-large', 'font-x-large');
    document.body.classList.add(`font-${fontSize}`);
  }, [isDarkMode, highContrast, fontSize]);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
