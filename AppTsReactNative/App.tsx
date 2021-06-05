import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';


import { stylesCalculadora } from './src/theme/calculadoraTheme';
import { StackNavigator } from './src/routes/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/routes/MenuLateralBasico';
import { BoxObjectScreen } from './src/screens/diseniosApp/BoxObjectScreen';
import { CalculadoraScreen } from './src/screens/calculadoraApp/CalculadoraScreen';
import { MenuLateral } from './src/routes/MenuLateral';

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
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        <MenuLateral/>
          
        
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
