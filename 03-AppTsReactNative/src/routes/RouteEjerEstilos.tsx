import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { BoxObjectScreen } from '../screens/diseniosApp/BoxObjectScreen';
import { ContadorScreen } from '../screens/diseniosApp/ContadorScreen';


export type RootParams = {
    BoxObjectScreen: undefined,
    ContadorScreen: undefined,
    /* Pagina3Screen: undefined,
    PersonaScreen: {id: number, nombre: string}, */
}
const Stack = createStackNavigator<RootParams>();
export const RouteEjerEstilos = () => {
    return (
        <Stack.Navigator
        //initialRouteName="Pagina1Screen"
        screenOptions={{            
            headerStyle:{
                elevation: 0, // quita la linea del header
                shadowColor: 'transparent'
            },
            cardStyle:{
                backgroundColor:'white'
            }
        }}
       >
           <Stack.Screen name="BoxObjectScreen" options={{title:'Box Object'}} component={BoxObjectScreen} />
           <Stack.Screen name="ContadorScreen" options={{title:'Contador'}} component={ContadorScreen} />
       </Stack.Navigator>
    )
}
