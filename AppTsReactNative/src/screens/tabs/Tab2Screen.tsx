import React from 'react'
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export const Tab2Screen = () => {
    useEffect(()=>{
        console.log('Tab2Screen')
    })
    return (
        <View>
            <Text>Tab2Screen</Text>
        </View>
    )
}
