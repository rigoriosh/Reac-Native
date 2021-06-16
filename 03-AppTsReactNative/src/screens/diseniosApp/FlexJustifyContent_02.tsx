import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexJustifyContent_02 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3 }>Caja 3</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    caja1:{
        //flex:1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2:{
        //flex: 4,
        //width: 100, height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3:{
        //flex: 2,
        //width: 200, height: 200,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});