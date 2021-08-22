import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export const Loading = () => {
    return (
        <View
                style={{ flex:1, /* backgroundColor: 'red', */ justifyContent:'center', alignItems:'center' }}
            >
                <ActivityIndicator size={50} color="black"/>
                <Text>Cargando ....</Text>
            </View>
    )
}
