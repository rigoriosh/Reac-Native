import React from 'react'
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export const Tab1Screen = () => {

    useEffect(()=>{
        console.log('Tab1Screen')
    })
    
    return (
        <View>
            <Text>Tab1Screen</Text>
        </View>
    )
}
