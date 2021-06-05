//import React from 'react';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, Text, View, Image } from 'react-native';

import { CalculadoraScreen } from '../screens/calculadoraApp/CalculadoraScreen';
import { BoxObjectScreen } from '../screens/diseniosApp/BoxObjectScreen';
import { StackNavigator } from './StackNavigator';
import { RouteEjerEstilos } from './RouteEjerEstilos';
import { indexCss } from '../styles';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(prosp)=><MenuInterno {...prosp}/>}
    >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
        <Drawer.Screen name="RouteEjerEstilos" component={RouteEjerEstilos} />
        <Drawer.Screen name="CalculadoraScreen" component={CalculadoraScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = (props:DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={indexCss.avatarContainer}>
        <Image source={{uri: 'https://image.shutterstock.com/image-vector/user-avatar-man-male-boy-260nw-579409375.jpg'}}
        style={indexCss.avatar}></Image>
      </View>
    </DrawerContentScrollView>
  );
}