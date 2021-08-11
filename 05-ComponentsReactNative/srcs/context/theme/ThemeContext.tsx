import React, { createContext } from 'react';

interface ThemeContexProps{
    theme: any,
    setDarkTheme:() => void;
    setLightTheme:() => void;
}

export const ThemeContext = createContext({} as ThemeContexProps);

export const ThemeProvider =({children}: any ) => {

    const theme = {}
    const setDarkTheme = () => {console.log(55)}
    const setLightTheme = () => {}

    return (
        <ThemeContext.Provider value={{setDarkTheme,  setLightTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
