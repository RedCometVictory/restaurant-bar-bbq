// import React, { useState, createContext } from 'react';

// //  context is used when sharing information between child components is necessary, think of it as sorta line redux
// export const ModeContext = createContext([])

// const ModeProvider = ({ children }) => {
//   // start off with dark mode
//   const [darkMode, setDarkMode] = useState(true);
//   // setting state and state context, passing values throughout the application
//   // pass in children so that the context wraps around to take affect any layout that the context is wrapped around
//   return (
//     <ModeContext.Provider value={[darkMode, setDarkMode]} >
//       {children}
//     </ModeContext.Provider>
//   )
// };
// // this is how to set up global context with hooks in react, usestate creates state and create context creates the context itself;
// export default ModeProvider;
// // this contyext is passed to gatsby-browser
import React, { useState, useEffect, createContext } from 'react';
// import { FaRegSun, FaRegMoon } from 'react-icons/fa';
// const themeType = {
//   light: 'light',
//   dark: 'dark',
//   toggleTheme: () => {}
// }
let initialTheme;
let defaultState = {
  // light: 'light',
  // dark: 'dark',
  toggleTheme: () => {}
}
// const getInitialTheme = () => {
  // if (typeof window !== 'undefined' && window.localStorage) {
    // initialTheme = window.localStorage.getItem('theme');
    // if (!initialTheme) {
      // localStorage.setItem('theme', 'light');
    // };
  // if no user pref, set light as default theme
  // return localStorage.setItem('theme', 'light')
// }
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
  // if (typeof window !== 'undefined' && window.localStorage) {
    // initialTheme = window.localStorage.getItem('theme');
    initialTheme = localStorage.getItem('theme');
    // return user pref theme if exists
    // if (typeof initialTheme === 'json') {
    // if (initialTheme) JSON.parse(initialTheme);
    // }
    // return initialTheme ? initialTheme : themeType.light;
    // initialTheme ? initialTheme : 'light';
    // initialTheme ? initialTheme : 'light';
    return initialTheme ? initialTheme : 'light';
    // initialTheme = localStorage.getItem('theme');
    // if no user pref, set light as default theme
    // return localStorage.setItem('theme', 'light')
  }
  if (!initialTheme) return 'light';
  // if (!initialTheme) {
    // no user pref, default to light
    // window.localStorage.setItem('theme', 'light');
    // initialTheme = window.localStorage.getItem('theme');
    // return initialTheme;
    // return 'light';
    // return window.localStorage.setItem('theme', 'light');
    // initialTheme = localStorage.getItem('theme');
  // };
};

// const ThemeContext = createContext([{}, () => {}]);
// const ThemeContext = createContext();
const ThemeContext = createContext(defaultState);

export const ThemeProvider = ({ initialTheme, children }) => {
  // const [theme, setTheme] = useState(getInitialTheme);
  // console.dir(getInitialTheme);
  // const [theme, setTheme] = useState({ theme: getInitialTheme });
  // const [theme, setTheme] = useState(getInitialTheme);
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // if (themeTog === 'light') setTheme(theme === 'light');
    // if (themeTog === 'dark') setTheme(theme === 'dark');
    // setTheme(theme === themeType.light ? themeType.dark : themeType.light);
  };

  const rootSetTheme = theme => {
    const rootElem = window.document.documentElement;
    // const darkTheme = theme === 'dark';

    // rootElem.classList.remove(darkTheme ? 'light' : 'dark');
    // rootElem.classList.add(theme);

    // window.localStorage.setItem('theme', theme);
    // ----------------------------------------------
    if (theme === 'dark') {
      rootElem.classList.remove('light');
      rootElem.classList.add(theme);
      // window.localStorage.setItem('theme', theme);
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
  // const providerValues = {
  //   theme: [theme, setTheme],
  //   toggleTheme: () => {}
  // }
  // <ThemeContext.Provider value={{ providerValues }}>
  // <ThemeContext.Provider value={[theme, setTheme]}>
  return (
    // <ThemeContext.Provider value={{theme, toggleTheme}}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};
export default ThemeContext;
/*
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    localStorage.setItem('theme', 'light');
  }
  const [ colorTheme, setColorTheme ] = useState(currentTheme);
  
  useEffect(() => {
    const checkCurrTheme = localStorage.getItem('theme');
    if (checkCurrTheme) {
      setColorTheme(checkCurrTheme);
    }
  }, []);
  
  const themeSelect = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme', theme)
  }
*/



















/*
import React, { useState, useEffect, createContext } from 'react';

const themeType = {
  light: 'light',
  dark: 'dark',
  toggleTheme: () => {}
}

// const ThemeContext = createContext(themeType);
const ThemeContext = createContext(themeType);

export const ThemeProvider = ({children}) => {
  // const [ mode, setMode ] = useState(mode);
  const [ mode, setMode ] = useState(() => {
    // chack for gatsby and nodejs
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme');
      return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light; // if no LS, this is default state
  });

  // --------------- experimental -------------------
   const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }
  // ------------------------------------------------
  
  
  
  
  useEffect(() => {
    // const val = localStorage.getItem('theme');
    // if (!val) {
      //   localStorage.setItem('theme', 'light');
    // }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(mode));
    }
  }, [mode]);
  
  const toggleTheme = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  }
  return (
    <ThemeContext.Provider value={{mode, setMode, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
  )
}
export default ThemeContext;


*/

// {/* <HelmetProvider>
//   <Helmet>
//     <html className={mode} />
//   </Helmet>
// </HelmetProvider> */}











/*



import React from 'react'

const getInitialTheme = _ => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'dark'
}

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}




















 const dispatch = useDispatch();
  const history = useHistory();
  // bring in authReducer state into the component, via rootReducer
  const userAuth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = userAuth;

  // prevent flash of incorrect theme
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    localStorage.setItem('theme', 'light');
  }
  const [ colorTheme, setColorTheme ] = useState(currentTheme);
  
  useEffect(() => {
    // check for selected theme in LS
    const checkCurrTheme = localStorage.getItem('theme');
    // if true, set as current theme value in state
    if (checkCurrTheme) {
      setColorTheme(checkCurrTheme);
    }
  }, []);
  
  const themeSelect = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme', theme)
  }
























import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaCaretDown, FaBars, FaRegSun, FaRegMoon } from 'react-icons/fa';
// import { FaBars } from 'react-icons/fa';
// import headOnly from '..//headOnly.svg';
import HeadOnly from '../../static/assets/headOnly.svg';
// import HeadOnly from '../../static/headOnly.svg';
// import ModeButton from './ModeButton';
// context
// import ModeProvider from './src/context/ModeProvider';
// import { ModeContext } from '../context/ModeProvider';


// import { FaRegSun, FaRegMoon } from 'react-icons/fa';

const themeType = {
  dark: 'dark',
  light: 'light'
};

export export const wrapRootElement = ({element}) => {
  // prevent flash of incorrect theme
  const [ mode, setMode ] = useState(() => {
    // chack for gatsby and nodejs
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme');
      return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(mode));
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  }
  return (
    <ModeProvider>
      <HelmetProvider>
        <Helmet>
          <html className={mode} />
        </Helmet>
      </HelmetProvider>
      {element}
    </ModeProvider>
  )
}
*/