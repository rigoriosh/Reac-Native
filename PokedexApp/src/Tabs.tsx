import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Navigator, { RootStackParams } from './Navigator';
import { SearchScreen } from './screens/SearchScreen';
import { PokemonScreen } from './screens/PokemonScreen';


const Tab = createBottomTabNavigator();

export const Tabs = () => {

const TabSearch = createStackNavigator<RootStackParams>();

const NavigatorTabSearch = () => {
    return (
        
            <TabSearch.Navigator
                screenOptions={{
                    headerShown:false,
                    cardStyle:{
                        backgroundColor:'white'
                    }
                }}
            >
                <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
                <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
            </TabSearch.Navigator>
    )
}

  return (
    <Tab.Navigator 
      
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{marginBottom:(Platform.OS == 'ios' ? 0 : 10), backgroundColor:'transparent', fontWeight:'bold'},
        tabBarActiveTintColor:'green',
        tabBarLabelPosition:'below-icon',
        tabBarIconStyle:{fontWeight:'bold'},
        tabBarStyle:{backgroundColor:'rgba(255,255,255,0.9)', borderWidth:0, elevation:0, paddingTop:10, height:(Platform.OS == 'ios' ? 70 : 60), position:'absolute'}
      }}
    >
      <Tab.Screen name="Home" component={Navigator} options={{
        tabBarLabel:'Listado',
        tabBarIcon:({color})=>(
          <Icon color={color} size={25} name="list-outline"/>
        )
      }}/>
      <Tab.Screen name="SearchScreen" component={NavigatorTabSearch} options={{
        tabBarLabel:'Búscar',
        tabBarIcon:({color})=>(
          <Icon color={color} size={25} name="search-outline"/>
        )
      }}/>
    </Tab.Navigator>
  );
}