import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
    return (
        <View style={{flex:1}}>
            <View style={estilos.purpleBox} />
        </View>
    )
}


const estilos = StyleSheet.create({
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})