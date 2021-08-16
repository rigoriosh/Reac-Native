import React from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>

    )
}

export default Navigator;