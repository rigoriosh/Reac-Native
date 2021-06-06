import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen"       component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen"   component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen"   component={Tab3Screen} />
    </Tab.Navigator>
  );
}

