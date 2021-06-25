import  React, { useRef, useState } from 'react';

import { View, StyleSheet, Animated, Button, Text, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {
   
    const {textInfo, fadeIn, fadeOut, opacity, top} = useAnimation();


    return (
        <View style={estilos.container}>
            <Animated.View style={{...estilos.purpleBox, opacity, transform:[{translateY: top}]}} />
            <View style={{width: '100%', justifyContent:'space-around', flexDirection:'row', marginTop:10}}>
                <Button onPress={fadeIn} title={'fadeIn'}/>
                <Button onPress={fadeOut} title={'fadeOut'}/>
            </View>
                <Text>{textInfo}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})