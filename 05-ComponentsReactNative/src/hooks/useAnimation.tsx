import {useRef, useState} from 'react'

import { Animated, Easing } from 'react-native';


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0.5)).current;
    const top = useRef(new Animated.Value(-500)).current;

    const [textInfo, setTextInfo] = useState('');

    const fadeIn = () =>{
        Animated.timing(opacity,{
            toValue:1,
            duration: 800,
            useNativeDriver: true
        }).start(()=>{setTextInfo('Fin fadeIn')});

        Animated.timing(top,{
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
        Animated.timing(top,{
            toValue:-500,
            duration: 500,
            useNativeDriver: true
        }).start();
    }
    return {textInfo, fadeIn, fadeOut, opacity, top};
}
