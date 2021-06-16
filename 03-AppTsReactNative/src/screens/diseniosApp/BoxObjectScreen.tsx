import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useEffect } from 'react';

interface Propiedades extends DrawerScreenProps<any, any>{}
export const BoxObjectScreen = ({navigation}: Propiedades) => {

    useEffect(() => {
        navigation.setOptions({
            title:'Bienvenidos ejercicios estilos', // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            //headerBackTitle: 'Atras', // aplica para ios, modifica lo anterior
            headerLeft: () => <Button  title='Menu' onPress={()=>{navigation.toggleDrawer()}}/>
        })
        return () => { }
    }, [])
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