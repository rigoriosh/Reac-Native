import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Flex } from './Flex';

export const Tarea5 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMOrada}></View>    
            <View style={styles.cajaNaranja}></View>    
            <View style={styles.cajaAzul}></View>    
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#28425B',
        flex: 1,
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    cajaMOrada:{
        width: 100,
        backgroundColor: '#5856D6',
        borderWidth: 5, borderColor: 'white',                
    },
    cajaNaranja:{
        width: 100,        
        backgroundColor: '#F0A23B',
        borderWidth: 5, borderColor: 'white',         
        
    },
    cajaAzul:{
        width: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 5, borderColor: 'white',        
    }
    
});