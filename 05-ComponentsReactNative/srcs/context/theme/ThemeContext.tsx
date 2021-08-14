import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeContexProps{
    theme: ThemeState,
    setDarkTheme:() => void;
    setLightTheme:() => void;
}

export const ThemeContext = createContext({} as ThemeContexProps);

export const ThemeProvider =({children}: any ) => {

    // const colorScheme = useColorScheme();

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                ? setLightTheme()
                : setDarkTheme();
            } else {
                
            }
        })
        return () => {}
    }, [])

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme)) // TODO: leer el thema del global
    
    const setDarkTheme = () => {
        dispatch({type:'set_dark_theme'});
        console.log('set_dark_theme')}
    const setLightTheme = () => {
        dispatch({type:'set_light_theme'});
        console.log('set_light_theme');
    }

    return (
        <ThemeContext.Provider value={{setDarkTheme,  setLightTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
