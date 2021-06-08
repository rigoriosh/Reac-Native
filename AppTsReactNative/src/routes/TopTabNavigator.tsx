import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/topTabNavigator/ChatScreen';
import { ContactsScreen } from '../screens/topTabNavigator/ContactsScreen';
import { AlbumsScreen } from '../screens/topTabNavigator/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../styles/index';
import { Text } from 'react-native';

const TopTabNav = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

  return (
    <TopTabNav.Navigator
        style={{
            paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
            pressColor: colores.color1,
            showIcon: true, // reserva el espacio para el icono
            indicatorStyle: {
                backgroundColor: colores.color2,                
            },
            style:{
                elevation:0,
                borderBottomWidth: 0
            }
        }}
        screenOptions={(props)=>({
            tabBarIcon:(prop) => {
              let nombreIcon = '';
              switch (props.route.name) {
                case 'Chat':
                  nombreIcon = 'Chat'
                  break;
                case 'Contacts':
                  nombreIcon = 'Contacts'
                  break;
                case 'Albums':
                  nombreIcon = 'Albums'
                  break;
              }
              console.log(prop.focused)
              console.log('props.route :', props.route.name)
              return <Text style={{color: prop.color}}>{nombreIcon}</Text>
            }
          })}
    >
      <TopTabNav.Screen name="Chat" component={ChatScreen} />
      <TopTabNav.Screen name="Contacts" component={ContactsScreen} />
      <TopTabNav.Screen name="Albums" component={AlbumsScreen} />
    </TopTabNav.Navigator>
  );
}