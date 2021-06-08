import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Propiedades{
    titulo: string,
    colorText: string,
    colorFondo: string,
    accionBtn: (btnOprimido: string) => void,
    iconName: string
}


export const Boton1 = ({ titulo, colorText, colorFondo, accionBtn, iconName}: Propiedades) => {
    return (
        <TouchableOpacity
        style={{...estilos.botonGrande, backgroundColor: colorFondo}}
        onPress={()=>accionBtn(titulo)}
        >
            <Icon name={iconName} size={20} color={'white'} />
            <Text style={{...estilos.titulo, color: colorText}}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}



const estilos = StyleSheet.create({
    botonGrande:{
        width: 100,
        height: 60,
        backgroundColor:'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5
    },
    titulo:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})