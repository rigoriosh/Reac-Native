import 'react-native-gesture-handler';
import React from 'react'


import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './srcs/navigator/Navigator';
import { ThemeProvider } from './srcs/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // background: 'gray',
//     // primary: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
// } 
// }

const App = () => {
  return (
    <AppState>
        <Navigator/>
    </AppState>
    
  )
}

const AppState = ({children}:any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;