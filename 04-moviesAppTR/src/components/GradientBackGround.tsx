import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { useFade } from '../hooks/useFade';
import { colores } from '../styles';



interface Props{
    children: JSX.Element | JSX.Element[]
}

export const GradientBackGround = ({children}:Props) => {
    //const {colors, previusColors, setMainPrevColors} = useContext(GradientContext);

    const {opacity, fadeIn, fadeOut} = useFade();
    
    useEffect(() => {
        fadeIn(()=>{
            //setMainPrevColors(colors);
            //fadeOut();
        })
        return () => {}
    }, [])

    return (
        <View style={{flex:1}}>

        <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
            <LinearGradient
                colors={[colores.color1, colores.color2 ]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y:0.1}}
                end={{x:0.5, y:1}}
            />
        </Animated.View>

            {children}
        </View>
    )
}
