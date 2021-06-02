import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionRelative = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMOrada}></View>
            <View style={styles.cajaNaranja}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor: '#28C4D9', 
        width:300, height: 300,
        justifyContent: 'center', alignItems: 'center'
    },
    cajaMOrada:{
        width: 100,
        height:100,
        backgroundColor: '#5856D6',
        borderWidth: 5, borderColor: 'white',
        top: 20
    },
    cajaNaranja:{
        width: 100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 5, borderColor: 'white'
    }
});