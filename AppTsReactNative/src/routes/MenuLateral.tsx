//import React from 'react';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';

import { CalculadoraScreen } from '../screens/calculadoraApp/CalculadoraScreen';
import { RouteEjerEstilos } from './RouteEjerEstilos';
import { indexCss } from '../styles';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(prosp)=><MenuInterno {...prosp}/>}
    >
        <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
        <Drawer.Screen name="RouteEjerEstilos" component={RouteEjerEstilos} />
        <Drawer.Screen name="CalculadoraScreen" component={CalculadoraScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del Avatar */}
      <View style={indexCss.avatarContainer}>
        <Image source={{uri: 'https://image.shutterstock.com/image-vector/user-avatar-man-male-boy-260nw-579409375.jpg'}}
        style={indexCss.avatar}></Image>
      </View>

      {/* Opciones del menu */}
      <View style={indexCss.menuContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('TabsNavigator')} style={indexCss.menuBtn}>
          <Text style={indexCss.menuItem}>Tabs de Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('RouteEjerEstilos')} style={indexCss.menuBtn}>
          <Text style={indexCss.menuItem}>Estilos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('CalculadoraScreen')} style={indexCss.menuBtn}>
          <Text style={indexCss.menuItem}>Calculadora</Text>
        </TouchableOpacity>
      </View>
      
      
    </DrawerContentScrollView>
  );
}