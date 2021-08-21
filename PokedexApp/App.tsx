// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import Navigator from './src/Navigator';
import { Tabs } from './src/Tabs';

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <Navigator/> */}
      <Tabs/>
    </NavigationContainer>

  )
}


export default App;