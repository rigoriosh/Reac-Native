import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator } from 'react-native';

interface Props{
    uri:string
}

export const FadeInImage = ({uri}:Props) => {
    const {opacity, fadeIn/* , fadeOut,  textInfo, position, startMovingPosition */} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    return (
        <View>
            {
                isLoading && <ActivityIndicator color="#5856D6" size={40}/>
            }
            <Animated.Image
                source={{uri}}
                onLoadEnd={()=>{
                    fadeIn();
                    setIsLoading(false);
                }}
                style={{width:'100%', height:400, opacity}}
            />

        </View>
    )
}
