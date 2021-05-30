import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexAlingItem_03 = () => {
    return (
        <View style={styles.containerPadre}>
            <View style={styles.container}>
                <Text style={styles.caja1}>Caja 1</Text>
                <Text style={styles.caja2}>Caja 2</Text>
                <Text style={styles.caja3 }>Caja 3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.caja1}>Caja 4</Text>
                <Text style={styles.caja2}>Caja 5</Text>
                <Text style={styles.caja3 }>Caja 6</Text>
                <Text style={styles.caja3 }>Caja 6</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerPadre:{
        flex: 1,
        backgroundColor: '#28C4D9',
        //flexDirection: 'column',
        /* alignItems: 'flex-end',
        justifyContent: 'flex-end' */
    },
    container:{        
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-around',
        //alignItems: 'baseline'
        
    },
    caja1:{
        //flex:1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    caja2:{
        //flex: 4,
        //width: 100, height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
    },
    caja3:{
        //flex: 2,
        //width: 200, height: 200,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
    }
});