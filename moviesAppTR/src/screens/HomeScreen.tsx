import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';

import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const {pelicualasEnCine, isLoading} = useMovies();
    


    return (
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
            <Text>HomeScreen</Text>
            {
                isLoading
                ? <ActivityIndicator color="red" size={100}/>
                : <Text>{JSON.stringify(pelicualasEnCine[15], null, 3)}</Text>
            }
        </View>
    )
}
