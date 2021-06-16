import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesCalculadora } from '../theme/calculadoraTheme';

interface props {
    texto: string;
    backgroundColor?: string;
    ancho?:boolean;
    accion: (teclaOprimida: string) => void;
}

export const BotnCalc = ({texto, backgroundColor = '#2D2D2D', ancho=false, accion}:props) => {
    return (
        <TouchableOpacity onPress={()=>accion(texto)}>
            <View style={{...stylesCalculadora.boton, backgroundColor, width: ancho ? 180 : 80  }}>
                <Text style={{...stylesCalculadora.textoBtn, color: (backgroundColor ==='#9B9B9B') ? 'black': 'white'}}> {texto} </Text>        
            </View>
        </TouchableOpacity>
    )
}
