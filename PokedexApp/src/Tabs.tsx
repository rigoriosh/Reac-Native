import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';
import { SearchScreen } from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator 
    
      // sceneContainerStyle={{
      //   backgroundColor:'white'
      // }}

      // tabBarOptions={{
      //   activeTinColor:'#5856D6'
      // }}
    >
      <Tab.Screen name="Home" component={Navigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}