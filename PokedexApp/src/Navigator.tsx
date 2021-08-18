import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { PokemonScreen } from './screens/PokemonScreen';
import { SimplePokemon } from './interfaces/pokemonInteface';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: {
        simplePokemon: SimplePokemon,
        color:string
    }
}

const Stack = createStackNavigator<RootStackParams>();
// const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    cardStyle:{
                        backgroundColor:'white'
                    }
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;