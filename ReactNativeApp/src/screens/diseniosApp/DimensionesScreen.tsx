import React from 'react'
import { StyleSheet, View, Text, Dimensions, useWindowDimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

    const {width, height} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.cajaMorada}></View> 
                <View style={styles.cajaNaranja}></View>            
            </View>
            <Text style={styles.title}> W: {width}, H: {height }</Text>
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
        height:'50%', width:'50%',
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize: 20,
        textAlign: 'center'
    }
});