import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
    estilos?: any
}

export const BlackButton = ({title, onPress, estilos={}}:Props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={{ ...estilos, ...styles.blackButton}}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    blackButton:{
        height:45, width:200, backgroundColor: 'black',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.5,
        elevation:10
    },
    btnText:{
        color:'white',
        fontSize:18
    }
})