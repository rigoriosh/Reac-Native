import {useRef, useState} from 'react'

import { Animated, Easing } from 'react-native';


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0.5)).current;
    const position = useRef(new Animated.Value(-500)).current;

    const [textInfo, setTextInfo] = useState('');

    const fadeIn = () =>{
        Animated.timing(opacity,{
            toValue:1,
            duration: 1000,
            useNativeDriver: true
        }).start(()=>{setTextInfo('Fin fadeIn')});

        Animated.timing(position,{
            toValue:0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce,
        }).start(()=>{setTextInfo('Fin fadeIn')});
    }
    const fadeOut = () =>{
        Animated.timing(opacity,{
            toValue:0.0,
            duration: 500,
            useNativeDriver: true
        }).start(()=>{
            setTextInfo('');
            hide();            
        });
    }

    const hide = () => {
        Animated.timing(position,{
            toValue:-500,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    const startMovingPosition = (initPosition: number = -500, duration: number = 1000) => {
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                //easing: Easing.bounce
            }
        ).start();
    }

    return {textInfo, fadeIn, fadeOut, opacity, position, startMovingPosition};
}
