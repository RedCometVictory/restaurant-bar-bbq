// import React from 'react';

// // images - nday/night icons
// // import dayicon
// // import night icon
// //styles

// // set the state, from context given to this component
// // prev = previous state, !prev inverts the current value, true false
// // import this file into navbar comp
// import { FaRegSun, FaRegMoon } from 'react-icons/fa';
// export const ModeButton = ({ darkMode, setDarkMode }) => {
  //   return (
    //     <>
    //       <ImgButton
//         src={ darkMode ? NightIcon : DayIcon }
//         alt="mode"
//         onClick={() => setDarkMode(prev => !prev)}
//       />
//     </>
//   )
// }
// export default ModeButton;
// import React from 'react';
// import { FaRegSun, FaRegMoon } from 'react-icons/fa';

// export const ModeButton = ({ theme }) => {
//   const themeSelect = (theme) => {
//     setColorTheme(theme);
//     localStorage.setItem('theme', theme)
//   }
//   return (
//     <>
//       {
//         theme === 'light' ? <FaRegSun className="nav__theme-btn" onClick={() => themeSelect('dark')} /> : <FaRegMoon className="nav__theme-btn" onClick={() => themeSelect('light')} />
//       }
//     </>
//   )
// }

import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { FaRegSun, FaRegMoon, FaRegLightbulb } from 'react-icons/fa';

export const ModeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // const { light, dark } = useContext(ThemeContext);
  // const { light, dark, toggleTheme } = useContext(ThemeContext);
  // const { mode, setMode, toggleTheme } = useContext(ThemeContext);
  // const [ theme, setTheme ] = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const { providerValues } = useContext(ThemeContext);
  // const isDark = () => {
  //   return theme === 'dark';
  // };
  // const toggleTheme = (val) => {
    // setTheme(val);
  // }
  if (!hasMounted) {
    return null;
  }
  return (
    <>
    {/* {theme === 'light' ? <FaRegMoon className="nav__theme-btn" onClick={() => toggleTheme()} /> : <FaRegSun className="nav__theme-btn" onClick={() => toggleTheme()} />} */}
    {/* may have to set theme in context */}
    {/* {theme && theme === 'dark' ? <FaRegMoon className="nav__theme-btn" onClick={() => toggleTheme()} /> : <FaRegSun className="nav__theme-btn" onClick={() => toggleTheme()} />} */}
    {/* {theme && theme === 'dark' ? <FaRegMoon className="nav__theme-btn" onClick={() => toggleTheme()} /> : <FaRegSun className="nav__theme-btn" onClick={() => toggleTheme()} />} */}
    {/* {theme && theme === 'dark' ? <FaRegMoon className="nav__theme-btn" onClick={() => setTheme(theme => ({ ...theme, theme: 'dark'}))} /> : <FaRegSun className="nav__theme-btn" onClick={() => setTheme(theme => ({ ...theme, theme: 'light'}))} />} */}
    {theme && theme === 'light' ? <FaRegMoon className="nav__theme-btn" onClick={() => toggleTheme()} /> : <FaRegSun className="nav__theme-btn" onClick={() => toggleTheme()} />}
    {/* <FaRegLightbulb className="nav__theme-btn" onClick={() => toggleTheme()} /> */}
    </>
  )
}

/*
import React from 'react'
import { ThemeContext } from './themeContext'

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <>
      <label className="text-primary">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
        ></input>
        Dark Mode
      </label>
    </>
  )
}

*/