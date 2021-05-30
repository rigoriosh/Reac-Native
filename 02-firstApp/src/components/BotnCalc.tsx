import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesCalculadora } from '../theme/calculadoraTheme';

interface props {
    texto: string;
    backgroundColor?: string;
    ancho?:boolean;
}

export const BotnCalc = ({texto, backgroundColor = '#2D2D2D', ancho=false}:props) => {
    return (
        <TouchableOpacity >
            <View style={{...stylesCalculadora.boton, backgroundColor, width: ancho ? 180 : 80  }}>
                <Text style={{...stylesCalculadora.textoBtn, color: (backgroundColor ==='#9B9B9B') ? 'black': 'white'}}> {texto} </Text>        
            </View>
        </TouchableOpacity>
    )
}
