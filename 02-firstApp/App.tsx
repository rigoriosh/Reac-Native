import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* import {HiWordScreen} from './src/diseniosApp/HiWordScreen';
import { ContadorScreen } from './src/diseniosApp/ContadorScreen';
import { BoxObjectScreen } from './src/diseniosApp/BoxObjectScreen';
import { DimensionesScreen } from './src/diseniosApp/DimensionesScreen';
import { PositionRelative } from './src/diseniosApp/PositionRelative';
import { PositionAbsolute } from './src/diseniosApp/PositionAbsolute';
import { Flex } from './src/diseniosApp/Flex';
import { FlexDirection_01 } from './src/diseniosApp/FlexDirection_01';
import { FlexJustifyContent_02 } from './src/diseniosApp/FlexJustifyContent_02';
import { FlexAlingItem_03 } from './src/diseniosApp/FlexAlingItem_03';
import { FlexGrap_04 } from './src/diseniosApp/FlexGrap_04';
import { Tarea } from './src/diseniosApp/Tarea';
import { Tarea2 } from './src/diseniosApp/Tarea2';
import { Tarea3 } from './src/diseniosApp/Tarea3';
import { Tarea4 } from './src/diseniosApp/Tarea4';
import { Tarea5 } from './src/diseniosApp/Tarea5';
import { Tarea6 } from './src/diseniosApp/Tarea6';
import { Tarea7 } from './src/diseniosApp/Tarea7';
import { Tarea8 } from './src/diseniosApp/Tarea8';
import { Tarea9 } from './src/diseniosApp/Tarea9';
import { Tarea10 } from './src/diseniosApp/Tarea10'; */
//import { CalculadoraScreen } from './src/screens/calculadoraApp/CalculadoraScreen';
//import { stylesDisenios } from './src/theme/diseniosTheme';
import { stylesCalculadora } from './src/theme/calculadoraTheme';
import { StackNavigator } from './src/routes/StackNavigator';

const App = () => {
  return (
    //<SafeAreaView style={stylesDisenios.container}>
    <NavigationContainer>
      <SafeAreaView style={stylesCalculadora.fondo}>
        <StatusBar backgroundColor="black" barStyle='light-content' />{/* realiza ajustes sobre la barra de estado la que aparece el icono de la bateria, si hay señal,...  */}
        {/* <HiWordScreen />
        <ContadorScreen /> */}
        {/* <BoxObjectScreen /> */}
        {/* <DimensionesScreen/> */}
        {/* <PositionRelative/> */}
        {/* <PositionAbsolute/> */}
        {/* <Flex/> */}
        {/* <FlexDirection_01/> */}
        {/* <FlexJustifyContent_02/> */}
        {/* <FlexAlingItem_03/> */}
        {/* <FlexGrap_04/> */}
        {/* <Tarea /> */}
        {/* <Tarea10/> */}
        {/* <CalculadoraScreen/> */}

        <StackNavigator/>
          
        
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
