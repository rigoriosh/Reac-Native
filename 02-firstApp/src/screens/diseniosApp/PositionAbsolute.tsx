import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionAbsolute = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerder}></View>
            <View style={styles.cajaMOrada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor: '#28C4D9', 
        width:350, height: 400,
        //justifyContent: 'center', alignItems: 'center',        
    },
    cajaMOrada:{
        width: 100, height:100,
        backgroundColor: '#5856D6',
        borderWidth: 5, borderColor: 'white',        
        position: 'absolute',
        top: 0, right:0
    },
    cajaNaranja:{
        width: 100, height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 5, borderColor: 'white',
        position: 'absolute',
        bottom: 0, right:0
    },
    cajaVerder:{
        backgroundColor: 'green',
        borderWidth: 5, borderColor: 'white',
        /* width: 100, height:100,
        position: 'absolute',
        bottom: 0, left:0 */
        ...StyleSheet.absoluteFillObject
    }
});