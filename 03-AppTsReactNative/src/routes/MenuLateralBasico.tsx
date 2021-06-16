//import React from 'react';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { CalculadoraScreen } from '../screens/calculadoraApp/CalculadoraScreen';
import { BoxObjectScreen } from '../screens/diseniosApp/BoxObjectScreen';
import { StackNavigator } from './StackNavigator';
import { RouteEjerEstilos } from './RouteEjerEstilos';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
    >
        <Drawer.Screen options={{title: 'Pruebas navegación'}} name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen options={{title: 'Ejercicio estilos'}} name="RouteEjerEstilos" component={RouteEjerEstilos} />
        <Drawer.Screen options={{title: 'Calculadora'}} name="CalculadoraScreen" component={CalculadoraScreen} />
    </Drawer.Navigator>
  );
}