import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginHorizontal: 20
        
    },
    title:{
        paddingLeft: 20,
        paddingVertical: 20,
        marginVertical: 80,
        
        fontSize:20,
        width:'100%',
        borderWidth: 10,
        backgroundColor: 'green'
    }
});