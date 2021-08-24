import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from '../pages/MapScreen';
import { PermissionsScreens } from '../pages/PermissionsScreens';
import { PermissionsContext } from '../context/PermissionsContext';
import { Loading } from '../components/Loading';

const Stack = createStackNavigator();

const Navigator = () => {

    const {permissions} = useContext(PermissionsContext);

    if (permissions.locationStatus == 'unavailable') {
        return <Loading/>
    }

    return (
        
            <Stack.Navigator
                // initialRouteName="PermissionsScreens"
                screenOptions={{
                    headerShown:false,
                    cardStyle:{
                        backgroundColor:'white'
                    }
                }}
            >
                {
                    permissions.locationStatus === 'granted'
                    ? <Stack.Screen name="MapScreen" component={MapScreen} />
                    : <Stack.Screen name="PermissionsScreens" component={PermissionsScreens} />

                }
            </Stack.Navigator>
    )
}

export default Navigator;