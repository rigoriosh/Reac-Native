import React from 'react'
import { View, Animated, Button } from 'react-native';
import { colores } from '../styles/index';
import { useRef } from 'react';
import { useFade } from '../hooks/useFade';


export const FadeScreen = () => {
    
    const {opacity, fadeIn, fadeOut} = useFade();
    return (
        <View style={{flex: 1, backgroundColor: 'gray', justifyContent:'center', alignItems:'center'}}>
            <Animated.View style={{backgroundColor: colores.color3, width: 150, height: 150, borderColor:'white', borderWidth:10, 
                marginBottom:10, opacity}}/>

            <Button onPress={()=>fadeIn()} title="fadeIn"/> 
            <Button onPress={()=>fadeOut()} title="fadeOut"/>

        </View>
    )
}
