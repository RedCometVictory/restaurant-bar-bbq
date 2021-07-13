import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

export const ModeButton = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
    {theme && theme === 'light' ? <FaRegMoon className="nav__theme-btn" onClick={() => toggleTheme()} /> : <FaRegSun className="nav__theme-btn" onClick={() => toggleTheme()} />}
    </>
  )
}