import React from 'react';
import {HiWordScreen} from './src/screens/HiWordScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
      <HiWordScreen />
      <ContadorScreen />
    </View>
  );
};

export default App;
