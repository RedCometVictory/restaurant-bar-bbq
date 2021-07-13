//  context is used when sharing information between child components is necessary, think of it as sorta line redux
// pass children prop so that context takes effect on any layout that the context is wrapped around - this is how to set up global context with hooks in react, usestate creates state and create context creates the context itself; this context is passed to gatsby-browser
import React, { useState, useEffect, createContext } from 'react';
let initialTheme;
let defaultState = {
  // light: 'light',
  // dark: 'dark',
  toggleTheme: () => {}
}

// if no user pref, set light as default theme
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    // initialTheme = window.localStorage.getItem('theme');
    initialTheme = localStorage.getItem('theme');
    return initialTheme ? initialTheme : 'light';
  }
  if (!initialTheme) return 'light';
};

const ThemeContext = createContext(defaultState);

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const rootSetTheme = theme => {
    const rootElem = window.document.documentElement;
    if (theme === 'dark') {
      rootElem.classList.remove('light');
      rootElem.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
    
    if (theme === 'light') {
      rootElem.classList.remove('dark');
      rootElem.classList.add(theme);
      // window.localStorage.setItem('theme', theme);
      localStorage.setItem('theme', theme);
    }
  }

  if (initialTheme) {
    rootSetTheme(initialTheme);
  };

  useEffect(() => {
    rootSetTheme(theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};
export default ThemeContext;