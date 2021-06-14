import React, { useContext } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import { useFade } from '../hooks/useFade';


interface Props{
    children: JSX.Element | JSX.Element[]
}

export const GradientBackGround = ({children}:Props) => {
    const {colors, previusColors, setMainPrevColors} = useContext(GradientContext);

    const {opacity, fadeIn, fadeOut} = useFade();
    
    useEffect(() => {
        fadeIn(()=>{
            setMainPrevColors(colors);
            fadeOut();
        })
        return () => {}
    }, [colors])

    return (
        <View style={{flex:1}}>

            <LinearGradient
                colors={[previusColors.primary, previusColors.secundary,'white' ]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y:0.1}}
                end={{x:0.5, y:0.5}}
            />
        <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
            <LinearGradient
                colors={[colors.primary, colors.secundary,'white' ]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y:0.1}}
                end={{x:0.5, y:0.5}}
            />
        </Animated.View>

            {children}
        </View>
    )
}
