import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({children}: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Icon name="star-outline" size={30} color="#fff0ff"/> */}
        <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}


export default App