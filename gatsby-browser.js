// import React from 'react';
// import ModeProvider from './src/context/ModeProvider';

// export const wrapRootElement = ({ element }) => {
  //   return (
    //     <ModeProvider>
    //       {element}
    //     </ModeProvider>
    //   )
// }

import React from 'react';
import './src/styles/styles.scss';
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element, props }) => (
  <ThemeProvider {...props} >{element}</ThemeProvider>
)