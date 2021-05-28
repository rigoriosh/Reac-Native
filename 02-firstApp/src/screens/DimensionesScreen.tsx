import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const DimensionesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}>
            </View> 
            <View style={styles.cajaNaranja}></View>
                    <Text>Dimensiones Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        height:'50%', width:'50%'
    },
    cajaNaranja:{
        backgroundColor: '#F0A23B'
    }
});