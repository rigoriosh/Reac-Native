//import React from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';

import { CalculadoraScreen } from '../screens/calculadoraApp/CalculadoraScreen';
import { RouteEjerEstilos } from './RouteEjerEstilos';
import { indexCss } from '../styles';
import { TabsNavigator } from './TabsNavigator';
import { colores } from '../styles/index';

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
          <Icon name={'medkit-outline'} size={20} color={colores.color1} />
          <Text style={indexCss.menuItem}>Tabs de Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('RouteEjerEstilos')} style={indexCss.menuBtn}>
          <Icon name={'moon-outline'} size={20} color={colores.color1} />
          <Text style={indexCss.menuItem}>Estilos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('CalculadoraScreen')} style={indexCss.menuBtn}>
          <Icon name={'analytics-outline'} size={20} color={colores.color1} />
          <Text style={indexCss.menuItem}>Calculadora</Text>
        </TouchableOpacity>
      </View>
      
      
    </DrawerContentScrollView>
  );
}