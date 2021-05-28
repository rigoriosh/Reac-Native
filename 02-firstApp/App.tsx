import React from 'react';
import {HiWordScreen} from './src/screens/HiWordScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { View, SafeAreaView } from 'react-native';
import { BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{height:'98%', width:'95%', backgroundColor: 'gray', marginHorizontal:10, marginVertical:10/* , justifyContent: 'center' */}}>
      {/* <HiWordScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectScreen /> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;
